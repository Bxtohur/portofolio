// src/hooks/useLazyLoad.js
// Lazy loading hook dengan Intersection Observer API

import { useEffect, useRef, useState } from "react";

/**
 * Hook untuk lazy load images menggunakan Intersection Observer
 * @param {Object} options - Konfigurasi observer
 * @returns {Object} { ref, isVisible, loaded }
 */
export const useLazyLoad = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "50px",
      threshold: 0.01,
      ...options
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, isVisible, loaded, setLoaded };
};

/**
 * Hook untuk responsive image srcset
 * @param {string} basePath - Path dasar image tanpa extension
 * @returns {Object} Srcset string untuk <img>
 */
export const useResponsiveImage = (basePath) => {
  const sizes = {
    small: "400w",
    medium: "800w",
    large: "1200w"
  };

  const srcset = [
    `${basePath}-small.webp 400w`,
    `${basePath}-medium.webp 800w`,
    `${basePath}-large.webp 1200w`
  ].join(", ");

  return { srcset, sizes: "100vw" };
};

/**
 * Cache audio context untuk performa
 */
let audioContextCache = null;

export const getAudioContext = () => {
  if (audioContextCache === null) {
    try {
      audioContextCache = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("AudioContext not available");
    }
  }
  return audioContextCache;
};
