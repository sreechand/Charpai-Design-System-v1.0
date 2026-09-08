import React from 'react';
import { MemoryWorld } from '../foundation/MemoryWorld';
import { chronology } from '../../data/fieldbook';

/**
 * A chronology that does not flatten uncertainty. The narrator's expression of
 * time is the entry; the normalised date sits beside it, and where two people
 * disagree the entry stays contested.
 */
export function Chronology({ onOpen }: {onOpen: (view: string) => void;}) {
  return (
    <ol className="border-b border-ink-rule">
      {chronology.map((entry) =>
      <li key={entry.id}>
          <MemoryWorld world={entry.world}>
            <div className="grid grid-cols-12 items-baseline gap-x-object gap-y-touch border-t border-ink-rule py-thought">
              <div className="col-span-12 sm:col-span-3">
                <p className="font-story text-[1.1rem] leading-tight text-ink">
                  {entry.normalised}
                </p>
                <p className="mt-1 font-doc text-doc uppercase text-ink-faint">
                  {entry.precision} · {entry.place}
                </p>
              </div>

              <div className="col-span-12 sm:col-span-6">
                <p className="narrator-hand">{entry.spoken}</p>
                <p className="mt-1.5 font-doc text-doc uppercase text-ink-soft">
                  {entry.narrator}
                </p>
              </div>

              <div className="col-span-12 sm:col-span-3 sm:text-right">
                {entry.view ?
              <button
                type="button"
                onClick={() => onOpen(entry.view as string)}
                className="font-ui text-[0.85rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
                
                    Read it
                  </button> :

              <p className="font-doc text-doc uppercase text-ink-faint">{entry.status}</p>
              }
              </div>
            </div>
          </MemoryWorld>
        </li>
      )}
    </ol>);

}