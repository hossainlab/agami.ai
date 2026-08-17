import React from 'react';

export const GoogleDeepMindLogo: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 24
}) => {
  return (
    <img
      src="/logos/deepmind.svg"
      alt="Google DeepMind"
      style={{ height: `${height}px`, width: 'auto' }}
      className={`select-none object-contain max-h-full ${className}`}
      loading="lazy"
    />
  );
};
