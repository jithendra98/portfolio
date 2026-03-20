import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE
    const scene = new THREE.Scene();
    // Add subtle fog to blend stars into the distance
    scene.fog = new THREE.FogExp2(0x010103, 0.001);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Pull the camera back to view the full Earth perfectly
    camera.position.z = 60; 
    camera.position.y = 5;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ASSETS DEFINITION
    const textureLoader = new THREE.TextureLoader();
    const earthNightUrl = 'https://unpkg.com/three-globe/example/img/earth-night.jpg';
    const earthTopologyUrl = 'https://unpkg.com/three-globe/example/img/earth-topology.png';
    const earthWaterUrl = 'https://unpkg.com/three-globe/example/img/earth-water.png';
    const earthCloudsUrl = 'https://unpkg.com/three-globe/example/img/earth-clouds.png';

    // GLOBE GROUP (To apply precise 23.5 degree axial tilt like the real earth)
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = -23.5 * Math.PI / 180;
    scene.add(earthGroup);

    // 1. HIGH-FI EARTH SPHERE
    const earthGeo = new THREE.SphereGeometry(15, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: textureLoader.load(earthNightUrl),
      bumpMap: textureLoader.load(earthTopologyUrl),
      bumpScale: 0.15,
      specularMap: textureLoader.load(earthWaterUrl),
      specular: new THREE.Color('grey')
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // 2. DYNAMIC CLOUD LAYER
    const cloudGeo = new THREE.SphereGeometry(15.2, 64, 64);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: textureLoader.load(earthCloudsUrl),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    // Add clouds directly to group so they share the 23.5 degree tilt
    earthGroup.add(cloudMesh);

    // 3. CINEMATIC ATMOSPHERIC GLOW
    // Using a custom GLSL shader to build a perfect optical Fresnel rim glow
    const atmosphereGeo = new THREE.SphereGeometry(17.5, 64, 64);
    const vertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.55 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
        gl_FragColor = vec4(0.1, 0.4, 1.0, 1.0) * intensity;
      }
    `;
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh); // Not tilted, so the glow is camera-relative

    // 4. STARFIELD BACKGROUND
    const starGeo = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPos = new Float32Array(starCount * 3);
    for(let i = 0; i < starCount * 3; i++) {
      // Create a massive box of stars
      starPos[i] = (Math.random() - 0.5) * 400;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    
    // Convert square points into round stars
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(8, 8, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.4,
      map: createStarTexture(),
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // LIGHTING (Day/Night dynamic contrast)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Low baseline to keep the night dark
    scene.add(ambientLight);
    
    // Principal Sunlight (Illuminating the Earth and specular oceans)
    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.position.set(30, 20, 20);
    scene.add(sunLight);

    // Dramatic Neon Rim Light from the shadows (Matches Portfolio Theme)
    const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.5);
    rimLight.position.set(-30, 0, -20);
    scene.add(rimLight);

    // INTERACTION STATE
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - halfX) * 0.001;
      mouseY = (event.clientY - halfY) * 0.001;
    };
    window.addEventListener('mousemove', onMouseMove);

    let scrollY = window.scrollY;
    let targetScroll = window.scrollY;
    const onScroll = () => {
      targetScroll = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // RESIZE HANDLING
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // RENDER LOOP
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Core Real-Time Rotations
      // The Earth physically rotates on its axis to simulate time passage
      earthMesh.rotation.y += 0.001; 
      // The Cloud later rotates marginally faster than the earth to simulate wind/weather dynamics
      cloudMesh.rotation.y += 0.0013; 
      
      // Starfield slowly turns
      stars.rotation.y += 0.0002;

      // Smooth Parallax tracking for Mouse (Tilt to inspect the globe)
      targetX = mouseX * 2;
      targetY = mouseY * 2;
      
      earthGroup.rotation.y += (targetX - earthGroup.rotation.y) * 0.05;
      earthGroup.rotation.x += (targetY - earthGroup.rotation.x) * 0.05;

      // Smooth Parallax tracking for Scroll (Scroll down shifts camera up, pushing globe down)
      scrollY += (targetScroll - scrollY) * 0.05;
      camera.position.y = 5 + (scrollY * -0.015);
      
      // Keep lock onto the absolute scene center
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    
    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      cloudGeo.dispose();
      cloudMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#010103' // True deep space pitch black for highest contrast
      }}
    />
  );
}
