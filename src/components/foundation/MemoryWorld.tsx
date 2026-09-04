import React from 'react';
import type { MemoryWorldTokens } from '../../types/story';

/**
 * Scopes the expressive layer. Everything inside inherits this narrator's hand
 * and this memory's palette; the Foundation — navigation, controls, type for
 * reading — is deliberately untouched by it.
 */
export function MemoryWorld({
  world,
  children,
  className = ''




}: {world: MemoryWorldTokens;children: React.ReactNode;className?: string;}) {
  return (
    <div
      data-memory-world={world.id}
      className={className}
      style={
      {
        '--hand-font': world.handFont,
        '--hand-ink': world.handInk,
        '--hand-size': world.handSize,
        '--hand-tilt': world.handTilt,
        '--memory-accent': world.accent,
        '--memory-deep': world.deep
      } as React.CSSProperties
      }>
      
      {children}
    </div>);

}