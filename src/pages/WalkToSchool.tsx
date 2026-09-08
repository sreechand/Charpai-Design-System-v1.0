import React, { useState } from 'react';
import { MemoryWorld } from '../components/foundation/MemoryWorld';
import { TopBar } from '../components/foundation/TopBar';
import { NarrationBar } from '../components/foundation/NarrationBar';
import { StoryOpening } from '../components/story/StoryOpening';
import { StoryRest } from '../components/story/StoryRest';
import { Passage, StoryBreath } from '../components/story/Prose';
import { Photograph } from '../components/artifacts/Photograph';
import { SchoolDocument } from '../components/artifacts/SchoolDocument';
import { RouteMap } from '../components/reconstruction/RouteMap';
import { DrawnPlate } from '../components/reconstruction/DrawnPlate';
import { useReaderMemory } from '../hooks/useReaderMemory';
import { vijayawada1964 } from '../data/memoryWorlds';
import {
  banyanPlate,
  closingLine,
  images,
  openingLine,
  passages,
  photograph,
  photographReverse,
  restLine,
  story,
  wrapper } from
'../data/story';
import type { MountingStyle, OpeningStrategy } from '../types/story';

const ATTRIBUTION = 'Ammamma, 2026';

export function WalkToSchool({
  mounting,
  opening,
  onNavigate




}: {mounting: MountingStyle;opening: OpeningStrategy;onNavigate: (view: string) => void;}) {
  const [playing, setPlaying] = useState(false);
  const [narrationOpen, setNarrationOpen] = useState(false);
  const { recalls, remember, touched } = useReaderMemory();

  const flipped = recalls('photograph.flipped');
  const documentOpen = recalls('schoolRecord.unfolded');

  const startNarration = () => {
    setNarrationOpen(true);
    setPlaying(true);
  };

  const photo =
  <Photograph
    src={images.photograph}
    alt="Two sisters standing on a sunlit street; the elder in a school pinafore holding the younger's hand."
    meta={photograph}
    reverse={photographReverse}
    mounting={mounting}
    flipped={flipped}
    onFlip={(next) => remember('photograph.flipped', next)}
    widthClass={opening === 'artifact' ? 'w-[clamp(260px,34vw,400px)]' : undefined} />;



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
      

      <main>
        <StoryOpening
          strategy={opening}
          meta={story}
          openingLine={openingLine}
          artifact={photo}
          onPlay={startNarration} />
        

        <StoryBreath intensity="pause" />

        <Passage passage={passages[0]} attribution={ATTRIBUTION} />

        {/* The photograph interrupts the reading when the opening has not
             already handed it to the reader. */}
        {opening !== 'artifact' &&
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-object px-6 py-breath">
            <div className="col-span-12 md:col-span-5 md:col-start-7">{photo}</div>
          </section>
        }

        <div className="pt-scene" />
        <Passage passage={passages[1]} attribution={ATTRIBUTION} />

        {/* the shop, and the chocolate broken in two */}
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-object px-6 pt-scene">
          <DrawnPlate
            src={images.wrapper}
            alt="A coloured-pencil drawing of a small chocolate wrapper, creased down the middle, its lettering only suggested."
            meta={wrapper}
            rotate={-2}
            className="col-span-8 col-start-3 md:col-span-3 md:col-start-1" />
          
        </section>

        <div className="pt-breath" />
        {/* the banyan — vivid, and allowed to escape the grid the way it
             escapes her sense of scale */}
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 items-center gap-object overflow-x-clip px-6">
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <p className="font-story text-narrative text-ink">{passages[2].text}</p>
            <p
              className="narrator-hand narrator-hand-lg mt-thought"
              style={{ transform: 'rotate(var(--hand-tilt))' }}>
              
              {passages[2].annotation?.text}
            </p>
            <p className="mt-1.5 font-doc text-doc uppercase text-ink-faint">{ATTRIBUTION}</p>
          </div>
          <DrawnPlate
            src={images.banyan}
            alt="An ink and graphite drawing of an enormous banyan tree with hanging aerial roots, detailed at the centre and unfinished at its edges."
            meta={banyanPlate}
            rotate={-0.6}
            className="col-span-12 mt-scene md:col-span-7 md:col-start-6 md:mt-0 md:-mr-[8vw]"
            captionClassName="max-w-[36ch]" />
          
        </section>

        <StoryBreath intensity="breath" />

        {/* MOMENT — the route being traced */}
        <section className="mx-auto w-full max-w-[76rem] px-6">
          <p className="mb-thought font-doc text-doc uppercase text-ink-soft">
            The walk · Governorpet to the school gate
          </p>
          <RouteMap />
        </section>

        <div className="pt-breath" />
        <Passage passage={passages[3]} attribution={ATTRIBUTION} />

        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-object px-6 pt-scene">
          <div className="col-span-12 md:col-span-5 md:col-start-4">
            <SchoolDocument
              open={documentOpen}
              onOpen={(next) => remember('schoolRecord.unfolded', next)} />
            
          </div>
        </section>

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