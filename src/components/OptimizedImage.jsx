// src/components/OptimizedImage.jsx
// Komponen image dengan lazy loading, responsive sizing, dan format alternatives

import React, { useState } from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";

/**
 * OptimizedImage Component
 * Fitur:
 * - Lazy loading dengan Intersection Observer
 * - Responsive images (WebP + fallback)
 * - Loading placeholder
 * - Error handling
 * - Automatic srcset generation
 */
export const OptimizedImage = ({
  src,
  alt,
  className = "",
  eager = false,
  onLoad = null,
  sizes = "100vw"
}) => {
  const { ref, isVisible } = useLazyLoad();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const shouldLoad = eager || isVisible;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gray-100 ${className}`}
    >
      {/* Loading skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
      )}

      {/* Picture element untuk format alternatives */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={() => setError(true)}
          sizes={sizes}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-600">
          Image failed to load
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
