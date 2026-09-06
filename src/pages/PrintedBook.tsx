import React, { useState } from 'react';
import { MemoryWorld } from '../components/foundation/MemoryWorld';
import { PrintBar } from '../components/print/PrintBar';
import { Spread, PageSheet } from '../components/print/Spread';
import { TracingOverlay } from '../components/print/TracingOverlay';
import { Gatefold } from '../components/print/Gatefold';
import { RouteMap } from '../components/reconstruction/RouteMap';
import { SchoolDocument } from '../components/artifacts/SchoolDocument';
import { vijayawada1964 } from '../data/memoryWorlds';
import { printSpec, spreads } from '../data/print';
import { closingLine, images, passages, photographReverse, restLine, story } from '../data/story';

export function PrintedBook({ onBack }: {onBack: () => void;}) {
  const [overlayLifted, setOverlayLifted] = useState(false);
  const [gatefoldOpen, setGatefoldOpen] = useState(false);

  return (
    <MemoryWorld world={vijayawada1964} className="min-h-full w-full bg-desk">
      <PrintBar onBack={onBack} />

      <main className="pb-silence">
        {/* Specification */}
        <section className="mx-auto w-full max-w-[76rem] px-6 pb-breath pt-scene">
          <p className="font-doc text-doc uppercase text-ink-soft">{printSpec.edition}</p>
          <h1 className="mt-thought font-story text-storytitle text-ink">{printSpec.title}</h1>
          <p className="mt-object max-w-[46ch] font-story text-[1.02rem] italic leading-relaxed text-ink-soft">
            The physical book is not an export of the digital one. Both are printings of the same
            material logic — these spreads are where the digital verbs become paper constructions.
          </p>
          <dl className="mt-scene grid max-w-[62rem] grid-cols-1 gap-x-scene gap-y-touch sm:grid-cols-2">
            {printSpec.stocks.map(([label, value]) =>
            <div key={label} className="flex items-baseline gap-object border-t border-ink/15 pt-1.5">
                <dt className="w-20 shrink-0 font-doc text-doc uppercase text-ink">{label}</dt>
                <dd className="font-story text-[0.98rem] text-ink">{value}</dd>
              </div>
            )}
          </dl>
        </section>

        <div className="space-y-breath">
          {/* 1 — the insert */}
          <Spread
            spec={spreads.opening}
            rightStock="insert"
            left={
            <div className="flex h-full flex-col justify-between">
                <PrintDoc>{story.chapter}</PrintDoc>
                <div>
                  <p className="font-story text-[0.95rem] leading-tight text-ink">{story.title}</p>
                  <PrintDoc className="mt-2">
                    {story.place} · {story.timeNormalised}
                  </PrintDoc>
                  <PrintHand className="mt-1.5">{story.timeSpoken}</PrintHand>
                </div>
              </div>
            }
            right={
            <div className="flex h-full flex-col items-center justify-center">
                <div className="relative w-[74%]">
                  <img
                  src={images.photograph}
                  alt="Two sisters on a sunlit street, the elder in a school pinafore."
                  className="block w-full"
                  style={{ aspectRatio: '4 / 5', objectFit: 'cover' }} />
                
                  <PrintedCorners />
                </div>
                <PrintDoc className="mt-3">Photograph · original print · c. 1964</PrintDoc>
              </div>
            } />
          

          {/* 2 — the reverse, printed */}
          <Spread
            spec={spreads.reverse}
            left={
            <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="font-telugu text-[0.8rem] leading-relaxed" style={{ color: 'var(--hand-ink)' }}>
                    {photographReverse.script}
                  </p>
                  <PrintHand className="mt-2">{photographReverse.hand}</PrintHand>
                  <PrintHand className="mt-2 opacity-80">{photographReverse.date}</PrintHand>
                </div>
                <PrintDoc>{photographReverse.note}</PrintDoc>
              </div>
            }
            right={
            <div className="flex h-full flex-col justify-between">
                <PrintProse>{passages[0].text}</PrintProse>
                <div>
                  <PrintHand>{passages[0].annotation?.text}</PrintHand>
                  <PrintDoc className="mt-1.5">Ammamma, 2026</PrintDoc>
                </div>
              </div>
            } />
          

          {/* 3 — prose */}
          <Spread
            spec={spreads.prose}
            left={<PrintProse>{passages[1].text}</PrintProse>}
            right={
            <div className="flex h-full flex-col justify-between gap-4">
                <PrintProse>{passages[2].text}</PrintProse>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <PrintHand>{passages[2].annotation?.text}</PrintHand>
                    <PrintDoc className="mt-1.5">Ammamma, 2026</PrintDoc>
                  </div>
                  <img
                  src={images.wrapper}
                  alt="A coloured-pencil reconstruction of a chocolate wrapper."
                  className="ink-on-paper w-[34%]"
                  style={{ transform: 'rotate(-2deg)' }} />
                
                </div>
              </div>
            } />
          

          {/* 4 — the tracing-paper overlay */}
          <Spread spec={spreads.overlay}>
            <div className="relative grid grid-cols-2 shadow-lifted">
              <PageSheet folio={spreads.overlay.folios[0]} side="verso">
                <div className="flex h-full flex-col justify-center">
                  <img
                    src={images.banyan}
                    alt="An ink drawing of an enormous banyan tree, unfinished at its edges."
                    className="ink-on-paper w-full" />
                  
                  <PrintDoc className="mt-3">
                    Banyan · drawn from narration · reconstruction
                  </PrintDoc>
                </div>
              </PageSheet>
              <div className="relative">
                <PageSheet folio={spreads.overlay.folios[1]} side="recto">
                  <div className="flex h-full flex-col justify-end">
                    <RoadFragment />
                    <PrintDoc className="mt-3">The road · vivid · printed on text stock</PrintDoc>
                  </div>
                </PageSheet>
                <TracingOverlay
                  label="overlay"
                  lifted={overlayLifted}
                  onToggle={() => setOverlayLifted((v) => !v)}>
                  
                  <div className="flex h-full flex-col justify-start">
                    <SuggestedSchool />
                    <p className="mt-3 font-recon text-[0.72rem] text-ink-soft">
                      the school — only the gate is clear
                    </p>
                  </div>
                </TracingOverlay>
              </div>
            </div>
          </Spread>

          {/* 5 — the gatefold */}
          <Spread spec={spreads.gatefold}>
            <Gatefold
              open={gatefoldOpen}
              onToggle={() => setGatefoldOpen((v) => !v)}
              folios={spreads.gatefold.folios}
              verso={
              <div className="flex h-full flex-col justify-between">
                  <PrintProse>{passages[3].text}</PrintProse>
                  <PrintDoc>The walk · Governorpet to the school gate</PrintDoc>
                </div>
              }
              panel={<RouteMap printed />} />
            
          </Spread>

          {/* 6 — the pocket */}
          <Spread
            spec={spreads.pocket}
            left={
            <div className="relative h-full">
                <div className="relative h-full overflow-hidden">
                  <div className="absolute left-0 top-0 w-[30rem] origin-top-left scale-[0.42]">
                    <SchoolDocument open printed onOpen={() => undefined} />
                  </div>
                </div>
                {/* the glassine pocket, mounted to the page */}
                <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] border border-ink/15 bg-glassine/70" />
              
                <PrintDoc className="absolute bottom-1.5 left-2">
                  Glassine pocket · opens to the fore-edge
                </PrintDoc>
              </div>
            }
            right={
            <div className="flex h-full flex-col justify-between">
                <PrintProse>
                  {`I kept the record because my father kept everything. It was folded in four in a tin with the ration card, and every few years somebody unfolded it and read out my arithmetic marks as though they were news.`}
                </PrintProse>
                <PrintDoc>School progress record · original · 1964–65</PrintDoc>
              </div>
            } />
          

          {/* 7 — rest */}
          <Spread
            spec={{ ...spreads.rest, folios: [spreads.rest.folios[0], ''] as [string, string] }}
            left={
            <div className="flex h-full flex-col justify-between">
                <PrintHand>{restLine}</PrintHand>
                <div className="space-y-1">
                  <PrintDoc>{story.recording.recordedOn}</PrintDoc>
                  <PrintDoc>{story.recording.language}</PrintDoc>
                </div>
              </div>
            }
            right={
            <div className="flex h-full items-center justify-center">
                <p className="max-w-[24ch] text-center font-story text-[0.72rem] italic leading-relaxed text-ink">
                  {closingLine}
                </p>
              </div>
            } />
          
        </div>

        {/* Colophon */}
        <section className="mx-auto mt-breath w-full max-w-[76rem] px-6">
          <div className="border-t border-ink/15 pt-object">
            <p className="font-doc text-doc uppercase text-ink-soft">Colophon</p>
            <p className="mt-object max-w-[52ch] font-story text-[0.98rem] leading-relaxed text-ink-soft">
              {printSpec.binding}. {printSpec.press}. Handwriting, drawings and documents are
              reproduced at their own size; nothing is enlarged to fill a page, and nothing is
              cropped to fit one.
            </p>
          </div>
        </section>
      </main>
    </MemoryWorld>);

}

function PrintProse({ children }: {children: React.ReactNode;}) {
  return (
    <p className="font-story text-[0.62rem] leading-[1.75] text-ink sm:text-[0.7rem]">{children}</p>);

}

function PrintDoc({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <p
      className={`font-doc text-[0.44rem] uppercase leading-[1.5] tracking-[0.14em] text-ink-soft sm:text-[0.5rem] ${className}`}>
      
      {children}
    </p>);

}

function PrintHand({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <p className={`narrator-hand ${className}`} style={{ fontSize: '0.9rem' }}>
      {children}
    </p>);

}

function PrintedCorners() {
  return (
    <span aria-hidden="true">
      {(
      [
      'left-0 top-0',
      'right-0 top-0 rotate-90',
      'right-0 bottom-0 rotate-180',
      'left-0 bottom-0 -rotate-90'] as
      const).
      map((pos) =>
      <span key={pos} className={`absolute ${pos} h-[9%] w-[9%]`}>
          <svg viewBox="0 0 32 32" className="h-full w-full">
            <path d="M0 0 H32 L0 32 Z" fill="#D8CEB4" />
          </svg>
        </span>
      )}
    </span>);

}

/** The confident part, printed on the text stock beneath the overlay. */
function RoadFragment() {
  return (
    <svg viewBox="0 0 320 180" className="ink-on-paper w-full" aria-hidden="true">
      <g stroke="#3B342C" fill="none" strokeLinecap="round">
        <path d="M8 168 C70 160, 120 138, 168 112 S268 66, 314 52" strokeWidth="2" />
        <path d="M10 152 C72 144, 122 122, 170 96 S270 50, 316 36" strokeWidth="1.1" opacity="0.75" />
      </g>
    </svg>);

}

/** The suggested part, printed on the 40 gsm overlay. Lift it and it is gone. */
function SuggestedSchool() {
  return (
    <svg viewBox="0 0 320 180" className="ink-on-paper w-full" aria-hidden="true">
      <g stroke="#6B6154" fill="none" strokeLinecap="round" strokeDasharray="10 8" opacity="0.9">
        <path d="M96 150 L96 58 L248 58 L248 150" strokeWidth="1.2" />
        <path d="M84 58 L172 24 L260 58" strokeWidth="1.2" />
      </g>
      <g stroke="#3B342C" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <path d="M150 150 L150 108 L196 108 L196 150" />
        <path d="M160 150 L160 112 M172 150 L172 112 M184 150 L184 112" />
      </g>
    </svg>);

}