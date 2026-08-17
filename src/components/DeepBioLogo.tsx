import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", isLight = false }) => (
  <div className={`flex items-center gap-2 ${className}`} aria-label="DeepBio Logo">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isLight ? "text-white" : "text-slate-900"}>
      <path d="M4 4C4 4 7 6 12 12S20 20 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 4C20 4 17 6 12 12S4 20 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 6.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 6.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 17.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 17.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 9H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 15H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span 
      className={`text-xl sm:text-2xl font-bold logo-text ${isLight ? "text-white" : "text-slate-900"}`} 
      style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif'}}
    >
      DeepBio
    </span>
  </div>
);
