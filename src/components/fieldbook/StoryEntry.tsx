import React from 'react';
import { MemoryWorld } from '../foundation/MemoryWorld';
import type { StoryCard } from '../../data/fieldbook';

/**
 * A story in the contents is not a content card — it is the object the story
 * opens on, with the narrator's own words for when it happened.
 */
export function StoryEntry({
  card,
  featured = false,
  onOpen,
  onPrint





}: {card: StoryCard;featured?: boolean;onOpen: () => void;onPrint?: () => void;}) {
  return (
    <MemoryWorld world={card.world}>
      <article
        className={
        featured ?
        'grid grid-cols-1 items-end gap-scene sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]' :
        'grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] items-start gap-object'
        }>
        
        <div className="bg-paper-mount p-2 shadow-loose" style={{ transform: 'rotate(-0.8deg)' }}>
          <img
            src={card.cover}
            alt=""
            className="block w-full"
            style={{
              aspectRatio: featured ? '4 / 5' : '1 / 1',
              objectFit: 'cover',
              filter: 'contrast(0.9) brightness(1.04)'
            }} />
          
        </div>

        <div>
          <h3
            className={`font-story text-ink ${featured ? 'text-storytitle' : 'text-[1.35rem] leading-tight'}`}>
            
            <button
              type="button"
              onClick={onOpen}
              className="text-left transition-colors duration-150 hover:text-oxide">
              
              {card.title}
            </button>
          </h3>

          <p className="mt-touch font-doc text-doc uppercase text-ink-soft">
            {card.narrator} · {card.place} · {card.timeNormalised}
          </p>
          <p className="narrator-hand mt-touch">{card.timeSpoken}</p>

          {featured &&
          <p className="mt-object max-w-[46ch] font-story text-[1rem] leading-relaxed text-ink-soft">
              {card.coverKind}. {card.opening}.
            </p>
          }

          <p className="mt-object font-doc text-doc uppercase text-ink-faint">{card.holdings}</p>

          <div className="mt-object flex flex-wrap items-center gap-thought">
            <button
              type="button"
              onClick={onOpen}
              className="font-ui text-[0.85rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
              
              Read it
            </button>
            {onPrint &&
            <button
              type="button"
              onClick={onPrint}
              className="font-ui text-[0.85rem] text-ink-soft underline decoration-ink-rule underline-offset-4 transition-colors duration-150 hover:text-ink">
              
                Print layout
              </button>
            }
            <span className="font-doc text-doc uppercase text-ink-faint">{card.added}</span>
          </div>
        </div>
      </article>
    </MemoryWorld>);

}