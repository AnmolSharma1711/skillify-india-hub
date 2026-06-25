/**
 * HeroCanvas — Three.js animated background for the Hero section.
 *
 * Renders a field of small floating particles (icosahedrons) in navy/teal
 * colors that drift gently, creating a subtle "connected digital world" feel
 * appropriate for a government tech initiative.
 *
 * Performance notes:
 *   - Particle count adapts to devicePixelRatio so mobile stays smooth.
 *   - ResizeObserver keeps canvas matched to container without layout thrash.
 *   - AnimationFrame is cancelled on unmount to prevent memory leaks.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ---- Scene setup --------------------------------------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    mount.appendChild(renderer.domElement);

    // ---- Particle field -----------------------------------------------------
    // Navy, teal, and saffron colours matching the design system
    const COLORS = [0x1B3A6B, 0x1A6B8A, 0x2a5298, 0xE8A020, 0x3a7fbf];
    const PARTICLE_COUNT = window.devicePixelRatio > 1 ? 60 : 40;

    const meshes: THREE.Mesh[] = [];
    const velocities: THREE.Vector3[] = [];

    const geo = new THREE.IcosahedronGeometry(0.35, 0);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: COLORS[i % COLORS.length],
        wireframe: true,
        transparent: true,
        opacity: 0.25 + Math.random() * 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      const speed = 0.006 + Math.random() * 0.008;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed,
          (Math.random() - 0.5) * speed * 0.3,
        ),
      );

      scene.add(mesh);
      meshes.push(mesh);
    }

    // ---- Subtle connection lines between nearby particles -------------------
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x1A6B8A,
      transparent: true,
      opacity: 0.08,
    });
    const lineGroup = new THREE.Group();
    scene.add(lineGroup);

    function updateLines() {
      // Dispose old geometries to prevent massive memory leaks
      lineGroup.children.forEach((child) => {
        if ((child as THREE.Line).geometry) {
          (child as THREE.Line).geometry.dispose();
        }
      });
      lineGroup.clear();
      
      const THRESHOLD = 18;
      for (let i = 0; i < meshes.length; i++) {
        for (let j = i + 1; j < meshes.length; j++) {
          const dist = meshes[i].position.distanceTo(meshes[j].position);
          if (dist < THRESHOLD) {
            const pts = [meshes[i].position.clone(), meshes[j].position.clone()];
            const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
            lineGroup.add(new THREE.Line(lineGeo, lineMat));
          }
        }
      }
    }

    // ---- Mouse parallax -----------------------------------------------------
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ---- Resize handler -----------------------------------------------------
    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    ro.observe(mount);

    // ---- Animation loop -----------------------------------------------------
    let frameId: number;
    let frame = 0;

    function animate() {
      frameId = requestAnimationFrame(animate);
      frame++;

      meshes.forEach((mesh, i) => {
        mesh.position.add(velocities[i]);
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.002;

        // Wrap-around so particles never disappear off screen
        if (mesh.position.x > 45) mesh.position.x = -45;
        if (mesh.position.x < -45) mesh.position.x = 45;
        if (mesh.position.y > 30) mesh.position.y = -30;
        if (mesh.position.y < -30) mesh.position.y = 30;
      });

      // Update connection lines every 10 frames for performance
      if (frame % 10 === 0) updateLines();

      // Subtle camera drift following the mouse
      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      
      // Complete cleanup of Three.js objects to prevent GPU memory leaks
      geo.dispose();
      lineMat.dispose();
      meshes.forEach(mesh => (mesh.material as THREE.Material).dispose());
      lineGroup.children.forEach((child) => {
        if ((child as THREE.Line).geometry) {
          (child as THREE.Line).geometry.dispose();
        }
      });
      
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
