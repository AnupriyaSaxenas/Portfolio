import { useState } from 'react';

export function Avatar({
  src,
  alt,
  width,
  height,
  initials,
  className = 'w-full h-full',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  initials: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`${className} rounded-full bg-accent-soft flex items-center justify-center text-accent font-semibold text-4xl shrink-0`}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      fetchPriority="high"
      className={`${className} rounded-full object-cover shrink-0`}
      onError={() => setError(true)}
    />
  );
}
