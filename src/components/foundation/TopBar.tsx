import React from 'react';
import { ChevronLeftIcon, ListIcon, PlayIcon, PauseIcon } from 'lucide-react';
import type { StoryMeta } from '../../types/story';

/**
 * Foundation layer: quiet, predictable, identical in every Memory World.
 * A Back button means the same thing in 1964 Vijayawada and 1978 Hyderabad.
 */
export function TopBar({
  meta,
  playing,
  onTogglePlay,
  onBack,
  onContents,
  backLabel = 'Back'







}: {meta: StoryMeta;playing: boolean;onTogglePlay: () => void;onBack?: () => void;onContents?: () => void;backLabel?: string;}) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-rule/60 bg-paper/90 backdrop-blur-[2px]">
      <nav
        aria-label="Book"
        className="mx-auto flex h-14 w-full max-w-[76rem] items-center justify-between gap-object px-6">
        
        <div className="flex items-center gap-thought">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-ui text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
            
            <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
            {backLabel}
          </button>
          <button
            type="button"
            onClick={onContents}
            className="inline-flex items-center gap-1.5 font-ui text-sm text-ink-soft transition-colors duration-150 hover:text-ink">
            
            <ListIcon aria-hidden="true" className="h-4 w-4" />
            Contents
          </button>
        </div>

        <p className="hidden font-doc text-doc uppercase text-ink-faint sm:block">
          {meta.narrator} · {meta.timeNormalised}
        </p>

        <button
          type="button"
          onClick={onTogglePlay}
          aria-pressed={playing}
          className="inline-flex items-center gap-2 rounded-sm border border-ink-rule px-3 py-1.5 font-ui text-sm text-ink-soft transition-colors duration-150 hover:border-ink-faint hover:text-ink">
          
          {playing ?
          <PauseIcon aria-hidden="true" className="h-3.5 w-3.5" /> :

          <PlayIcon aria-hidden="true" className="h-3.5 w-3.5" />
          }
          <span className="hidden sm:inline">{playing ? 'Pause' : meta.recording.label}</span>
          <span className="text-ink-faint">{meta.recording.duration}</span>
        </button>
      </nav>
    </header>);

}