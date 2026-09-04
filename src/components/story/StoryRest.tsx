import React from 'react';
import type { StoryMeta } from '../../types/story';

/**
 * StoryRest returns emotional control to the reader. No metrics, no autoplay,
 * no carousel. One quiet path onward, offered well after the story has ended.
 */
export function StoryRest({
  meta,
  restLine,
  touched,
  onward,
  onOnward






}: {meta: StoryMeta;restLine: string;touched: boolean;onward: string;onOnward: () => void;}) {
  return (
    <section className="px-6 pb-silence pt-breath">
      <div className="mx-auto w-full max-w-[42rem]">
        <p className="narrator-hand narrator-hand-lg">{restLine}</p>

        <div className="mt-breath space-y-1.5">
          <p className="font-doc text-doc uppercase text-ink-soft">{meta.recording.recordedOn}</p>
          <p className="font-doc text-doc uppercase text-ink-faint">{meta.recording.language}</p>
          <p className="font-doc text-doc uppercase text-ink-faint">Ambience · {meta.ambience}</p>
          {touched &&
          <p className="font-doc text-doc uppercase text-ink-faint">
              This copy remembers where you left things
            </p>
          }
        </div>

        <div className="mt-silence">
          <button
            type="button"
            onClick={onOnward}
            className="text-left font-story text-[1.15rem] italic text-ink-soft underline decoration-ink-rule underline-offset-[6px] transition-colors duration-150 hover:text-ink">
            
            {onward}
          </button>
        </div>
      </div>
    </section>);

}