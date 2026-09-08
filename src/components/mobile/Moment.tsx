import React from 'react';

/**
 * On a phone a spread becomes a sequence of moments. `hold` gives a moment the
 * whole screen — one object, nothing else competing for it.
 */
export function Moment({
  children,
  hold = false,
  className = ''




}: {children: React.ReactNode;hold?: boolean;className?: string;}) {
  return (
    <section
      className={`px-6 ${hold ? 'flex min-h-[84svh] flex-col justify-center py-scene' : 'py-scene'} ${className}`}>
      
      {children}
    </section>);

}