import React from 'react';
import { cn } from '@/lib/utils';

interface DottedTextProps {
  text: string;
  className?: string;
}

export function DottedText({ text, className }: DottedTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative overflow-hidden">
        {/* Text with dot pattern effect */}
        <span 
          className="relative z-10 font-bold tracking-wider text-transparent"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, white 0.8px, transparent 0.8px),
              radial-gradient(circle at 75% 75%, white 0.6px, transparent 0.6px)
            `,
            backgroundSize: '8px 8px, 12px 12px, 6px 6px',
            backgroundPosition: '0 0, 4px 4px, 2px 2px',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            animation: 'dotShift 4s ease-in-out infinite',
          }}
        >
          {text}
        </span>
        
        {/* Animated overlay for movement */}
        <span 
          className="absolute inset-0 font-bold tracking-wider text-transparent opacity-60"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px),
              radial-gradient(circle at 25% 75%, rgba(255,255,255,0.6) 0.8px, transparent 0.8px)
            `,
            backgroundSize: '10px 10px, 8px 8px',
            backgroundPosition: '0 0, 5px 5px',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            animation: 'dotShift 6s ease-in-out infinite reverse',
          }}
        >
          {text}
        </span>
        
        {/* Base subtle dots */}
        <span 
          className="absolute inset-0 font-bold tracking-wider text-transparent opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, white 0.5px, transparent 0.5px)
            `,
            backgroundSize: '4px 4px',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
} 