import React from 'react';
import { PlayIcon } from 'lucide-react';
import type { OpeningStrategy, StoryMeta } from '../../types/story';

/**
 * Stories are not required to begin with a standardised hero. The opening is
 * a storytelling decision: the object first, the voice first, or the book first.
 */
export function StoryOpening({
  strategy,
  meta,
  openingLine,
  artifact,
  onPlay,
  voiceSlot








}: {strategy: OpeningStrategy;meta: StoryMeta;openingLine?: string;artifact?: React.ReactNode;onPlay: () => void; /** Replaces the opening quotation when a story begins with more than one voice. */voiceSlot?: React.ReactNode;}) {
  if (strategy === 'artifact' && artifact) {
    return (
      <section className="px-6 pb-scene pt-breath">
        <div className="mx-auto flex w-full max-w-[76rem] flex-col items-center">
          {artifact}
          <div className="mt-breath max-w-[34rem] text-center">
            <h1 className="font-story text-storytitle text-ink">{meta.title}</h1>
            <p className="mt-thought font-doc text-doc uppercase text-ink-soft">
              {meta.place} · {meta.timeNormalised}
            </p>
            <p className="narrator-hand mt-touch">{meta.timeSpoken}</p>
          </div>
        </div>
      </section>);

  }

  if (strategy === 'voice') {
    return (
      <section className="px-6 pb-scene pt-silence">
        <div className="mx-auto w-full max-w-[52rem] text-center">
          <p className="font-doc text-doc uppercase text-ink-faint">
            {meta.title} · {meta.narrator}
          </p>

          {voiceSlot ?
          <div className="mt-scene text-left">{voiceSlot}</div> :

          <blockquote className="mt-scene font-story text-quote leading-snug text-ink">
              {openingLine}
            </blockquote>
          }

          <button
            type="button"
            onClick={onPlay}
            className="mt-scene inline-flex items-center gap-2 border-b border-ink-rule pb-1 font-ui text-sm text-ink-soft transition-colors duration-150 hover:border-ink-faint hover:text-ink">
            
            <PlayIcon aria-hidden="true" className="h-3.5 w-3.5" />
            {meta.recording.label}
            <span className="text-ink-faint">· {meta.recording.duration}</span>
          </button>
          <p className="mt-thought font-doc text-doc uppercase text-ink-faint">
            {meta.place} · {meta.timeNormalised}
          </p>
        </div>
      </section>);

  }

  return (
    <section className="px-6 pb-scene pt-silence">
      <div className="mx-auto grid w-full max-w-[76rem] grid-cols-12">
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <p className="font-doc text-doc uppercase text-ink-faint">{meta.chapter}</p>
          <h1 className="mt-thought font-story text-display text-ink">{meta.title}</h1>
          <div aria-hidden="true" className="mt-scene h-px w-32 bg-ink-rule" />
          <p className="mt-thought font-doc text-doc uppercase text-ink-soft">
            {meta.narrator} · {meta.place} · {meta.timeNormalised}
          </p>
          <p className="narrator-hand mt-touch">{meta.timeSpoken}</p>
        </div>
      </div>
    </section>);

}