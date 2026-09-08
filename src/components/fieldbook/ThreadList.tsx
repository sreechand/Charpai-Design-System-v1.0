import React from 'react';
import { threads } from '../../data/fieldbook';
import type { ThreadKind } from '../../data/fieldbook';

const groups: Array<{kind: ThreadKind;title: string;blurb: string;}> = [
{
  kind: 'object',
  title: 'Objects',
  blurb: 'An object can hold a life together. Follow one and the years arrange themselves.'
},
{
  kind: 'place',
  title: 'Places',
  blurb: 'A place accumulates memories from everybody who lived in it.'
},
{
  kind: 'person',
  title: 'People',
  blurb: 'A person appears in memories told by others, and the accounts do not always agree.'
}];


/**
 * The memory graph, without becoming a database UI: People ↔ Places ↔ Objects
 * ↔ Stories, offered as threads a reader can follow.
 */
export function ThreadList({ onOpen }: {onOpen: (threadId: string) => void;}) {
  return (
    <div className="space-y-breath">
      {groups.map((group) => {
        const items = threads.filter((t) => t.kind === group.kind);
        if (items.length === 0) return null;
        return (
          <section key={group.kind}>
            <h3 className="font-doc text-doc uppercase text-ink-soft">{group.title}</h3>
            <p className="mt-touch max-w-[52ch] font-story text-[1rem] italic leading-relaxed text-ink-faint">
              {group.blurb}
            </p>

            <ul className="mt-thought border-b border-ink-rule">
              {items.map((thread) =>
              <li
                key={thread.id}
                className="grid grid-cols-12 items-baseline gap-x-object gap-y-touch border-t border-ink-rule py-thought">
                
                  <h4 className="col-span-12 font-story text-[1.25rem] leading-tight text-ink sm:col-span-4">
                    <button
                    type="button"
                    onClick={() => onOpen(thread.id)}
                    className="text-left transition-colors duration-150 hover:text-oxide">
                    
                      {thread.label}
                    </button>
                  </h4>
                  <p className="col-span-12 font-story text-[0.98rem] leading-relaxed text-ink-soft sm:col-span-5">
                    {thread.note}
                  </p>
                  <p className="col-span-12 font-doc text-doc uppercase text-ink-faint sm:col-span-3 sm:text-right">
                    {thread.count} · {thread.span}
                  </p>
                </li>
              )}
            </ul>
          </section>);

      })}
    </div>);

}