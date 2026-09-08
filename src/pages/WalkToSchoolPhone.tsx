import React, { useState } from 'react';
import { MemoryWorld } from '../components/foundation/MemoryWorld';
import { TopBar } from '../components/foundation/TopBar';
import { NarrationBar } from '../components/foundation/NarrationBar';
import { StoryRest } from '../components/story/StoryRest';
import { StoryBreath } from '../components/story/Prose';
import { Moment } from '../components/mobile/Moment';
import { RouteStrip } from '../components/mobile/RouteStrip';
import { Photograph } from '../components/artifacts/Photograph';
import { SchoolDocument } from '../components/artifacts/SchoolDocument';
import { DrawnPlate } from '../components/reconstruction/DrawnPlate';
import { useReaderMemory } from '../hooks/useReaderMemory';
import { vijayawada1964 } from '../data/memoryWorlds';
import {
  banyanPlate,
  closingLine,
  images,
  passages,
  photograph,
  photographReverse,
  restLine,
  story,
  wrapper } from
'../data/story';
import type { MountingStyle } from '../types/story';

const ATTRIBUTION = 'Ammamma, 2026';

/**
 * The same story, recomposed rather than shrunk. The spread that put the
 * banyan beside the prose becomes a held page of its own; the map that could
 * be taken in at a glance becomes a walk you drag along. The emotional
 * hierarchy survives even though the geometry does not.
 */
export function WalkToSchoolPhone({
  mounting,
  onNavigate



}: {mounting: MountingStyle;onNavigate: (view: string) => void;}) {
  const [playing, setPlaying] = useState(false);
  const [narrationOpen, setNarrationOpen] = useState(false);
  const { recalls, remember, touched } = useReaderMemory();

  const startNarration = () => {
    setNarrationOpen(true);
    setPlaying(true);
  };

  return (
    <MemoryWorld world={vijayawada1964} className="paper-canvas paper-grain min-h-full w-full">
      <TopBar
        meta={story}
        playing={playing}
        onTogglePlay={() => {
          if (!narrationOpen) return startNarration();
          setPlaying((p) => !p);
        }}
        onBack={() => onNavigate('fieldbook')}
        onContents={() => onNavigate('fieldbook')} />
      

      <main className="pb-24">
        {/* Moment one — the object, held, before anything is read */}
        <Moment hold>
          <Photograph
            src={images.photograph}
            alt="Two sisters standing on a sunlit street; the elder in a school pinafore holding the younger's hand."
            meta={photograph}
            reverse={photographReverse}
            mounting={mounting}
            widthClass="w-full"
            flipped={recalls('photograph.flipped')}
            onFlip={(next) => remember('photograph.flipped', next)} />
          
          <div className="mt-scene">
            <h1 className="font-story text-storytitle text-ink">{story.title}</h1>
            <p className="mt-object font-doc text-doc uppercase text-ink-soft">
              {story.place} · {story.timeNormalised}
            </p>
            <p className="narrator-hand mt-touch">{story.timeSpoken}</p>
          </div>
        </Moment>

        <Moment>
          <Prose>{passages[0].text}</Prose>
          <Hand note={passages[0].annotation?.text} />
        </Moment>

        <Moment>
          <Prose>{passages[1].text}</Prose>
          <DrawnPlate
            src={images.wrapper}
            alt="A coloured-pencil drawing of a small chocolate wrapper, creased down the middle, its lettering only suggested."
            meta={wrapper}
            rotate={-2}
            className="mt-scene w-[62%]" />
          
        </Moment>

        <Moment>
          <Prose>{passages[2].text}</Prose>
          <Hand note={passages[2].annotation?.text} />
        </Moment>

        {/* Moment two — the tree gets the whole screen, bleeding past the margins */}
        <Moment hold>
          <DrawnPlate
            src={images.banyan}
            alt="An ink and graphite drawing of an enormous banyan tree with hanging aerial roots, detailed at the centre and unfinished at its edges."
            meta={banyanPlate}
            rotate={-0.6}
            className="-mx-6 w-[calc(100%+3rem)]"
            captionClassName="px-6" />
          
        </Moment>

        {/* Moment three — the map becomes the walk */}
        <Moment>
          <RouteStrip />
        </Moment>

        <Moment>
          <Prose>{passages[3].text}</Prose>
          <div className="mt-scene">
            <SchoolDocument
              open={recalls('schoolRecord.unfolded')}
              onOpen={(next) => remember('schoolRecord.unfolded', next)} />
            
          </div>
        </Moment>

        <StoryBreath intensity="silence">{closingLine}</StoryBreath>

        <StoryRest
          meta={story}
          restLine={restLine}
          touched={touched}
          onward="Another story — Thatha, and the year the television came"
          onOnward={() => onNavigate('the-television')} />
        
      </main>

      {narrationOpen &&
      <NarrationBar
        meta={story}
        playing={playing}
        onTogglePlay={() => setPlaying((p) => !p)}
        onDismiss={() => {
          setPlaying(false);
          setNarrationOpen(false);
        }} />

      }
    </MemoryWorld>);

}

function Prose({ children }: {children: React.ReactNode;}) {
  return <p className="font-story text-narrative text-ink">{children}</p>;
}

function Hand({ note }: {note?: string;}) {
  if (!note) return null;
  return (
    <div className="mt-thought">
      <p className="narrator-hand" style={{ transform: 'rotate(var(--hand-tilt))' }}>
        {note}
      </p>
      <p className="mt-1.5 font-doc text-doc uppercase text-ink-faint">{ATTRIBUTION}</p>
    </div>);

}