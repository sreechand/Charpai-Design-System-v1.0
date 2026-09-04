import React, { useState } from 'react';
import { MemoryWorld } from '../components/foundation/MemoryWorld';
import { TopBar } from '../components/foundation/TopBar';
import { NarrationBar } from '../components/foundation/NarrationBar';
import { StoryOpening } from '../components/story/StoryOpening';
import { StoryRest } from '../components/story/StoryRest';
import { Passage, StoryBreath } from '../components/story/Prose';
import { Contradiction } from '../components/story/Contradiction';
import { ObjectThread } from '../components/story/ObjectThread';
import { Photograph } from '../components/artifacts/Photograph';
import { Receipt } from '../components/artifacts/Receipt';
import { TestCard } from '../components/reconstruction/TestCard';
import { DrawnPlate } from '../components/reconstruction/DrawnPlate';
import { useReaderMemory } from '../hooks/useReaderMemory';
import { hyderabad1977 } from '../data/memoryWorlds';
import {
  bicyclePhotograph,
  bicyclePhotographReverse,
  bicyclePlate,
  bicycleThread,
  contradictionNote,
  roomPhotograph,
  roomPhotographReverse,
  televisionAccounts,
  televisionClosing,
  televisionImages,
  televisionPassages,
  televisionRest,
  televisionStory } from
'../data/television';

const ATTRIBUTION = 'Thatha, 2026';

export function TheTelevision({ onOnward }: {onOnward: () => void;}) {
  const [playing, setPlaying] = useState(false);
  const [narrationOpen, setNarrationOpen] = useState(false);
  const { recalls, remember, touched } = useReaderMemory();

  const startNarration = () => {
    setNarrationOpen(true);
    setPlaying(true);
  };

  return (
    <MemoryWorld world={hyderabad1977} className="paper-canvas paper-grain min-h-full w-full">
      <TopBar
        meta={televisionStory}
        playing={playing}
        onTogglePlay={() => {
          if (!narrationOpen) return startNarration();
          setPlaying((p) => !p);
        }}
        onBack={onOnward} />
      

      <main>
        {/* Voice first — and two voices, disagreeing, before anything is shown. */}
        <StoryOpening
          strategy="voice"
          meta={televisionStory}
          onPlay={startNarration}
          voiceSlot={<Contradiction accounts={televisionAccounts} note={contradictionNote} />} />
        

        <StoryBreath intensity="pause" />

        <Passage passage={televisionPassages[0]} attribution={ATTRIBUTION} />

        {/* the one document that could settle it, and cannot */}
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-object px-6 pt-breath">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <Receipt />
          </div>
        </section>

        <div className="pt-breath" />
        <Passage passage={televisionPassages[1]} attribution={ATTRIBUTION} />

        {/* the room, on the evening it arrived */}
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 gap-object overflow-x-clip px-6 py-breath">
          <div className="col-span-12 md:col-span-8 md:col-start-4 md:-mr-[6vw]">
            <Photograph
              src={televisionImages.room}
              alt="A crowded front room in the late 1970s: neighbours and children gathered on the floor and on chairs around a wooden-cabinet television set."
              meta={roomPhotograph}
              reverse={roomPhotographReverse}
              mounting="tape"
              ratio="3 / 2"
              widthClass="w-full"
              flipped={recalls('tv.photo.flipped')}
              onFlip={(next) => remember('tv.photo.flipped', next)} />
            
          </div>
        </section>

        <Passage passage={televisionPassages[2]} attribution={ATTRIBUTION} />

        {/* MOMENT — the picture opening out from a line */}
        <section className="mx-auto flex w-full max-w-[76rem] justify-center px-6 py-breath">
          <TestCard />
        </section>

        <Passage passage={televisionPassages[3]} attribution={ATTRIBUTION} />

        {/* Temporal layering: a 1958 object, and a 1958 photograph of it,
             inside a story set twenty years later. */}
        <section className="mx-auto grid w-full max-w-[76rem] grid-cols-12 items-start gap-scene px-6 pt-breath">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 md:col-start-2">
            <Photograph
              src={televisionImages.bicyclePhoto}
              alt="A young man in a white shirt standing beside a heavy black roadster bicycle outside a whitewashed house, late 1950s."
              meta={bicyclePhotograph}
              reverse={bicyclePhotographReverse}
              mounting="corners"
              widthClass="w-full"
              flipped={recalls('bicycle.photo.flipped')}
              onFlip={(next) => remember('bicycle.photo.flipped', next)} />
            
          </div>
          <DrawnPlate
            src={televisionImages.bicycleInk}
            alt="An ink and graphite drawing of a black roadster bicycle, detailed at the frame and saddle and unfinished toward the wheels."
            meta={bicyclePlate}
            rotate={-0.8}
            className="col-span-12 md:col-span-6 md:col-start-6"
            captionClassName="max-w-[40ch]" />
          
          <div className="col-span-12 md:col-span-9 md:col-start-2 md:pt-scene">
            <ObjectThread
              label={bicycleThread.label}
              count={bicycleThread.count}
              span={bicycleThread.span}
              note={bicycleThread.note} />
            
          </div>
        </section>

        <StoryBreath intensity="silence">{televisionClosing}</StoryBreath>

        <StoryRest
          meta={televisionStory}
          restLine={televisionRest}
          touched={touched}
          onward="Another story from Ammamma — the walk to school"
          onOnward={onOnward} />
        
      </main>

      {narrationOpen &&
      <NarrationBar
        meta={televisionStory}
        playing={playing}
        onTogglePlay={() => setPlaying((p) => !p)}
        onDismiss={() => {
          setPlaying(false);
          setNarrationOpen(false);
        }} />

      }
    </MemoryWorld>);

}