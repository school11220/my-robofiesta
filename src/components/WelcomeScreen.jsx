"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import TypewriterEffect from "./TypewriterEffect"; // ✅ Import the new component

// A new, self-contained 3D Galaxy component using Three.js
const Galaxy = ({ mousePosition }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.08); // Adds depth
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    mountRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const particlesCount = 10000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    const randoms = new Float32Array(particlesCount);

    const baseColor = new THREE.Color(0x00fff0); // Your --neon color

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      // Color variation
      const mixedColor = baseColor.clone();
      mixedColor.lerp(new THREE.Color(0xffffff), Math.random() * 0.5);
      colors[i * 3 + 0] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      // Size variation
      sizes[i] = Math.random() * 0.05 + 0.01;
      
      // Random value for pulsing animation
      randoms[i] = Math.random();
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    particlesGeometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    // Custom shaders for size and pulsing animation
    const vertexShader = `
      attribute float aSize;
      attribute float aRandom;
      varying vec3 vColor;
      uniform float uTime;

      void main() {
        vColor = color;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // Pulse animation
        float pulse = sin(uTime * aRandom * 0.5 + aRandom * 6.28) * 0.5 + 0.5;
        
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;
        gl_PointSize = aSize * pulse * 300.0 * (1.0 / -viewPosition.z);
      }
    `;
    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - step(0.5, strength);
        gl_FragColor = vec4(vColor, strength);
      }
    `;

    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      particlesMaterial.uniforms.uTime.value = elapsedTime;
      
      // Smoothly rotate the galaxy based on mouse position
      particles.rotation.y = mousePosition.x * 0.1;
      particles.rotation.x = -mousePosition.y * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []); // Depend on mousePosition to allow rotation updates

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}


const InteractiveTitle = ({ text, style, className = "" }) => { // Added className prop
  const handleMouseOver = (e) => {
    e.target.classList.add("glitch-hover");
    setTimeout(() => {
      e.target.classList.remove("glitch-hover");
    }, 400);
  };

  return (
    <h1
      className={`font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-200 ease-out ${className}`} // Use className
      style={style}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="interactive-char"
          onMouseOver={handleMouseOver}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default function WelcomeScreen({ onEnter }) {
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / centerX;
    const moveY = (clientY - centerY) / centerY;
    setMousePosition({ x: moveX, y: moveY });
  };

  const handleEnter = () => {
    setIsPressed(true);
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  const holographicStyle = useMemo(() => ({
    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
    textShadow: `
      ${-mousePosition.x * 6}px ${-mousePosition.y * 6}px 12px rgba(0, 255, 240, 0.7),
      ${mousePosition.x * 6}px ${mousePosition.y * 6}px 12px rgba(179, 136, 255, 0.7)
    `
  }), [mousePosition]);

  const yearTexts = useMemo(() => ["20XXII", "20XXIV", "20XXV", "2025"], []); // ✅ Array of years

  return (
    <>
      <style jsx global>{`
        .interactive-char { display: inline-block; transition: transform 0.2s ease, color 0.2s ease; }
        .glitch-hover { animation: glitchEffect 0.4s ease-in-out; }
        @keyframes glitchEffect {
          0% { transform: translate(0, 0); color: white; text-shadow: none; }
          25% { transform: translate(-3px, 3px); color: var(--neon); text-shadow: 0 0 5px var(--neon); }
          50% { transform: translate(3px, -3px); color: var(--neon-purple); text-shadow: 0 0 5px var(--neon-purple); }
          75% { transform: translate(-2px, -2px); color: var(--neon); }
          100% { transform: translate(0, 0); color: white; text-shadow: none; }
        }
        /* Add CSS for typewriter cursor if not already in globals.css */
        .typewriter-cursor {
          display: inline-block;
          animation: blink-caret 0.75s step-end infinite;
          margin-left: 2px;
          border-right: 2px solid var(--neon); /* Adjust color as needed */
          height: 0.8em; /* Match font height */
          vertical-align: middle;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--neon); }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseMove={handleMouseMove}
      >
        {/* Pass mousePosition to Galaxy to allow interactive rotation */}
        <Galaxy mousePosition={mousePosition} />
        
        <div
          className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8" style={{ perspective: "1000px" }}>
            <InteractiveTitle text="RoboFiesta" style={holographicStyle} />
            <br />
            {/* ✅ Integrated TypewriterEffect here */}
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-200 ease-out" style={holographicStyle}>
              <TypewriterEffect texts={yearTexts} speed={100} delayBetweenTexts={500} cursor={false} />            </h1>
            <div className="cosmic-line mb-6 animate-expand"></div><br />
            <p className="text-xl md:text-3xl text-[var(--neon)] font-orbitron tracking-wider animate-glow">
              Technoverse: Beyond Boundaries
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-white/80 mb-2 font-light animate-fadeIn">
              Welcome to the Ultimate Tech Event
            </p>
          </div>

          <button
            onClick={handleEnter}
            className={`enter-button group relative px-12 py-4 font-orbitron text-lg font-bold tracking-wider transition-all duration-300 animate-pulse-subtle ${
              isPressed ? "scale-95 opacity-70" : "hover:scale-105 hover:rotate-1"
            }`}
            disabled={isPressed}
          >
            <span className="relative z-10 text-white group-hover:text-[var(--neon)] transition-colors duration-300">
              {isPressed ? "INITIALIZING..." : "ENTER"}
            </span>
            <div className="enter-button-glow animate-glow"></div>
          </button>
        </div>
        
        <div
          className="corner-decoration corner-top-left animate-rotate-slow"
          style={{ transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-top-right animate-rotate-slow-reverse"
          style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-bottom-left animate-rotate-slow"
          style={{ transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * -15}px)` }}
        ></div>
        <div
          className="corner-decoration corner-bottom-right animate-rotate-slow-reverse"
          style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}
        ></div>
      </div>
    </>
  );
}