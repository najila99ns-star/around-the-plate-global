import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Globe geometry with detailed segments
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Earth-toned material with subtle texture
    const material = new THREE.MeshPhongMaterial({
      color: 0xd4a373,
      shininess: 15,
      transparent: true,
      opacity: 0.9,
    });

    const globe = new THREE.Mesh(geometry, material);
    globeRef.current = globe;
    scene.add(globe);

    // Add subtle wireframe for continents effect
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ 
        color: 0x8b6f47, 
        transparent: true, 
        opacity: 0.2 
      })
    );
    globe.add(wireframe);

    // Add small spheres for country markers
    const markerGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xe8b86d });
    
    const markerPositions = [
      { x: 0.4, y: 0.5, z: 0.7 },   // Europe
      { x: -0.7, y: 0.3, z: 0.5 },  // Americas
      { x: 0.8, y: 0.2, z: -0.3 },  // Asia
      { x: 0.2, y: -0.4, z: 0.8 },  // Africa
    ];

    markerPositions.forEach(pos => {
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      const length = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
      marker.position.set(pos.x / length, pos.y / length, pos.z / length);
      globe.add(marker);
    });

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.002;
        globeRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      geometry.dispose();
      material.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
};

export default Globe;
