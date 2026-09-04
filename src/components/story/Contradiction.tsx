import React from 'react';
import { MemoryWorld } from '../foundation/MemoryWorld';
import { ProvenanceMark } from '../foundation/Documentary';
import type { Account } from '../../types/story';

/**
 * Two people remember the same year differently. The book does not resolve it:
 * both accounts are set in their own narrator's hand and left standing.
 */
export function Contradiction({
  accounts,
  note



}: {accounts: Account[];note: string;}) {
  return (
    <div className="mx-auto w-full max-w-[62rem]">
      <ul className="grid grid-cols-1 items-start gap-scene md:grid-cols-2">
        {accounts.map((account, i) =>
        <li key={account.narrator} className={i === 1 ? 'md:pt-scene' : ''}>
            <MemoryWorld world={account.world}>
              <blockquote>
                <p className="narrator-hand narrator-hand-lg">“{account.text}”</p>
                <footer className="mt-object flex flex-wrap items-center gap-x-object gap-y-touch">
                  <span className="font-doc text-doc uppercase text-ink-soft">
                    {account.attribution}
                  </span>
                  <ProvenanceMark provenance="remembered" />
                </footer>
              </blockquote>
            </MemoryWorld>
          </li>
        )}
      </ul>

      <p className="mt-scene max-w-[52ch] font-story text-[0.98rem] italic leading-relaxed text-ink-faint">
        {note}
      </p>
    </div>);

}