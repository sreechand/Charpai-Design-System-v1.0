import React from 'react';
import { MemoryWorld } from '../foundation/MemoryWorld';
import { narrators } from '../../data/fieldbook';

/**
 * The people are not metadata. Each one appears with their own hand where
 * handwriting exists — and conspicuously without one where it does not.
 */
export function Narrators() {
  return (
    <ul className="grid grid-cols-1 gap-scene sm:grid-cols-2 lg:grid-cols-4">
      {narrators.map((narrator) =>
      <li key={narrator.id}>
          <MemoryWorld world={narrator.world}>
            <div className="flex items-start gap-object">
              {narrator.portrait ?
            <div
              className="w-20 shrink-0 bg-paper-mount p-1.5 shadow-mounted"
              style={{ transform: 'rotate(-1deg)' }}>
              
                  <img
                src={narrator.portrait}
                alt={`${narrator.full}, photographed in 2026`}
                className="block aspect-square w-full object-cover" />
              
                </div> :

            <div className="flex w-20 shrink-0 items-center justify-center border border-dashed border-ink-rule bg-paper-deep p-2">
                  <span className="text-center font-doc text-doc uppercase leading-tight text-ink-faint">
                    No photograph
                  </span>
                </div>
            }

              <div className="min-w-0">
                <h3 className="font-story text-[1.2rem] leading-tight text-ink">
                  {narrator.name}
                </h3>
                <p className="mt-1 font-doc text-doc uppercase text-ink-soft">{narrator.full}</p>
                <p className="mt-1 font-doc text-doc uppercase text-ink-faint">
                  {narrator.relation}
                </p>
              </div>
            </div>

            {narrator.handSample ?
          <p className="narrator-hand narrator-hand-sm mt-object">{narrator.handSample}</p> :

          <p className="mt-object font-doc text-doc uppercase text-ink-faint">
                No handwriting on file
              </p>
          }

            <p className="mt-touch font-doc text-doc uppercase text-ink-soft">
              {narrator.holdings}
            </p>
            <p className="mt-touch font-story text-[0.95rem] leading-relaxed text-ink-soft">
              {narrator.note}
            </p>
          </MemoryWorld>
        </li>
      )}
    </ul>);

}