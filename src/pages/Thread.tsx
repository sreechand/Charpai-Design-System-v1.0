import React from 'react';
import { FieldbookBar } from '../components/fieldbook/FieldbookBar';
import { MemoryWorld } from '../components/foundation/MemoryWorld';
import { threads } from '../data/fieldbook';

const kindLabel = {
  object: 'Object thread',
  place: 'Place thread',
  person: 'Person thread'
} as const;

/**
 * Following one thread through a life: the same object, place or person across
 * periods and narrators, each entry keeping its own date and its own voice.
 */
export function Thread({
  threadId,
  onNavigate



}: {threadId: string;onNavigate: (view: string) => void;}) {
  const thread = threads.find((t) => t.id === threadId) ?? threads[0];

  return (
    <div className="paper-canvas paper-grain min-h-full w-full">
      <FieldbookBar onBack={() => onNavigate('fieldbook')} backLabel="Contents" />

      <main className="pb-silence">
        <section className="mx-auto w-full max-w-[76rem] px-6 pb-breath pt-breath">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-doc text-doc uppercase text-ink-soft">
                {kindLabel[thread.kind]} · {thread.count} · {thread.span}
              </p>
              <h1 className="mt-thought font-story text-storytitle text-ink">{thread.label}</h1>
              <p className="mt-object max-w-[48ch] font-story text-narrative text-ink">
                {thread.note}
              </p>
              {thread.biography &&
              <p className="mt-thought max-w-[52ch] font-story text-[1rem] italic leading-relaxed text-ink-faint">
                  {thread.biography}
                </p>
              }
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[76rem] px-6">
          <ol className="relative border-l border-ink-rule">
            {thread.memories.map((memory, i) =>
            <li key={`${memory.year}-${i}`} className="relative pb-scene pl-scene">
                <span
                aria-hidden="true"
                className={`absolute -left-[4.5px] top-1.5 h-2 w-2 ${
                memory.view ?
                'bg-ink' :
                'rounded-full border border-ink-soft bg-paper'}`
                } />
              
                <MemoryWorld world={memory.world}>
                  <div className="grid grid-cols-12 items-baseline gap-x-object gap-y-touch">
                    <p className="col-span-12 font-doc text-doc uppercase text-ink-soft sm:col-span-2">
                      {memory.year}
                    </p>
                    <div className="col-span-12 sm:col-span-7">
                      <p className="narrator-hand">“{memory.line}”</p>
                      <p className="mt-1.5 font-doc text-doc uppercase text-ink-soft">
                        {memory.narrator}
                      </p>
                    </div>
                    <div className="col-span-12 sm:col-span-3 sm:text-right">
                      {memory.view ?
                    <button
                      type="button"
                      onClick={() => onNavigate(memory.view as string)}
                      className="font-ui text-[0.85rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
                      
                          Read the story
                        </button> :

                    <p className="font-doc text-doc uppercase text-ink-faint">
                          {memory.status}
                        </p>
                    }
                    </div>
                  </div>
                </MemoryWorld>
              </li>
            )}
          </ol>
        </section>

        <section className="mx-auto w-full max-w-[76rem] px-6 pt-breath">
          <p className="max-w-[46ch] font-story text-[1rem] italic leading-relaxed text-ink-faint">
            The thread is not a timeline of everything that happened. It is only what somebody
            remembered to say about it.
          </p>
        </section>
      </main>
    </div>);

}