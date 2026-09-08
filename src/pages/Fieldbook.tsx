import React, { useState } from 'react';
import { FieldbookBar } from '../components/fieldbook/FieldbookBar';
import { ViewSwitch } from '../components/fieldbook/ViewSwitch';
import { StoryEntry } from '../components/fieldbook/StoryEntry';
import { Chronology } from '../components/fieldbook/Chronology';
import { ThreadList } from '../components/fieldbook/ThreadList';
import { Narrators } from '../components/fieldbook/Narrators';
import { book, chronology, storyCards, threads } from '../data/fieldbook';

type ShellView = 'contents' | 'chronology' | 'threads';

export function Fieldbook({ onNavigate }: {onNavigate: (view: string) => void;}) {
  const [view, setView] = useState<ShellView>('contents');

  return (
    <div className="paper-canvas paper-grain min-h-full w-full">
      <FieldbookBar />

      <main className="pb-silence">
        {/* The book itself wins the page. */}
        <section className="mx-auto w-full max-w-[76rem] px-6 pb-scene pt-breath">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-story text-display text-ink">{book.title}</h1>
              <p className="mt-thought font-doc text-doc uppercase text-ink-soft">{book.places}</p>
              <p className="mt-object max-w-[44ch] font-story text-[1.15rem] italic leading-relaxed text-ink-soft">
                {book.standing}
              </p>
              <p className="narrator-hand mt-thought">{book.assembled}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[76rem] px-6">
          <ViewSwitch<ShellView>
            label="Ways into the book"
            value={view}
            onChange={setView}
            options={[
            { id: 'contents', label: 'Contents', count: `${storyCards.length} stories` },
            { id: 'chronology', label: 'Chronology', count: `${chronology.length} entries` },
            { id: 'threads', label: 'Threads', count: `${threads.length} threads` }]
            } />
          
        </div>

        <section className="mx-auto w-full max-w-[76rem] px-6 pt-breath">
          {view === 'contents' &&
          <div className="space-y-breath">
              <StoryEntry
              card={storyCards[0]}
              featured
              onOpen={() => onNavigate(storyCards[0].view)}
              onPrint={() => onNavigate('printed-book')} />
            
              <div className="grid grid-cols-1 gap-scene lg:grid-cols-2">
                <StoryEntry
                card={storyCards[1]}
                onOpen={() => onNavigate(storyCards[1].view)} />
              
                <div className="border-t border-ink-rule pt-object lg:border-l lg:border-t-0 lg:pl-scene lg:pt-0">
                  <p className="font-doc text-doc uppercase text-ink-soft">
                    Held, not yet composed
                  </p>
                  <p className="mt-touch max-w-[44ch] font-story text-[1rem] leading-relaxed text-ink-soft">
                    Four more recordings are in the book — the cycle bought new, the summer she
                    turned sixteen, the first year of the marriage, the accident. They are listed in
                    the chronology as they were spoken, and they will be composed when there is
                    enough to compose.
                  </p>
                  <button
                  type="button"
                  onClick={() => setView('chronology')}
                  className="mt-object font-ui text-[0.85rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
                  
                    See what is held
                  </button>
                </div>
              </div>
            </div>
          }

          {view === 'chronology' && <Chronology onOpen={onNavigate} />}

          {view === 'threads' &&
          <ThreadList onOpen={(threadId) => onNavigate(`thread:${threadId}`)} />
          }
        </section>

        <section className="mx-auto w-full max-w-[76rem] px-6 pt-silence">
          <h2 className="font-story text-[1.6rem] text-ink">The people in this book</h2>
          <p className="mt-touch max-w-[52ch] font-story text-[1rem] italic leading-relaxed text-ink-faint">
            Two have recorded. One has been quoted by telephone. One is doing the keeping.
          </p>
          <div className="mt-breath">
            <Narrators />
          </div>
        </section>
      </main>
    </div>);

}