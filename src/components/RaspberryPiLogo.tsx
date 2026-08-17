import React from 'react';

export const RaspberryPiLogo: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 28
}) => {
  return (
    <img
      src="/logos/pi-foundation.svg"
      alt="Raspberry Pi Foundation"
      style={{ height: `${height}px`, width: 'auto' }}
      className={`select-none object-contain max-h-full ${className}`}
      loading="lazy"
    />
  );
};
