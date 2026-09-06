import React from 'react';
import type { SpreadSpec } from '../../data/print';

export type Stock = 'text' | 'insert' | 'overlay';

/**
 * One facing-page spread at trim, lying on the desk. The gutter is real:
 * anything crossing it has to survive being folded.
 */
export function Spread({
  spec,
  left,
  right,
  leftStock = 'text',
  rightStock = 'text',
  children








}: {spec: SpreadSpec;left?: React.ReactNode;right?: React.ReactNode;leftStock?: Stock;rightStock?: Stock; /** Overrides both pages — used by constructions that are not two pages. */children?: React.ReactNode;}) {
  return (
    <figure className="mx-auto w-full max-w-[76rem] px-6">
      <div className="relative">
        <CropMarks />
        {children ??
        <div className="relative grid grid-cols-2 shadow-lifted">
            <PageSheet folio={spec.folios[0]} side="verso" stock={leftStock}>
              {left}
            </PageSheet>
            <PageSheet folio={spec.folios[1]} side="recto" stock={rightStock}>
              {right}
            </PageSheet>
          </div>
        }
      </div>

      <figcaption className="mt-object flex flex-col gap-touch">
        <p className="font-doc text-doc uppercase text-ink-soft">
          Spread {spec.n} · {spec.construction}
        </p>
        {spec.translation &&
        <dl className="grid max-w-[62rem] grid-cols-1 gap-x-scene gap-y-touch sm:grid-cols-2">
            <div>
              <dt className="font-doc text-doc uppercase text-ink">Digital</dt>
              <dd className="font-story text-[0.98rem] italic leading-relaxed text-ink-soft">
                {spec.translation.digital}
              </dd>
            </div>
            <div>
              <dt className="font-doc text-doc uppercase text-ink">Physical</dt>
              <dd className="font-story text-[0.98rem] italic leading-relaxed text-ink-soft">
                {spec.translation.physical}
              </dd>
            </div>
          </dl>
        }
      </figcaption>
    </figure>);

}

export function PageSheet({
  folio,
  side,
  children,
  stock = 'text'





}: {folio?: string;side: 'verso' | 'recto';children?: React.ReactNode;stock?: Stock;}) {
  const surface =
  stock === 'insert' ? 'bg-vellum' : stock === 'overlay' ? 'bg-glassine' : 'bg-paper';

  return (
    <div className={`relative ${surface}`} style={{ aspectRatio: '6 / 7' }}>
      {/* the gutter — ink runs into the fold and loses a little light */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 w-[9%] ${
        side === 'verso' ? 'right-0' : 'left-0'}`
        }
        style={{
          background: `linear-gradient(to ${side === 'verso' ? 'right' : 'left'}, rgba(36,31,27,0) 0%, rgba(36,31,27,0.10) 100%)`
        }} />
      
      <div className="relative h-full w-full p-[7%]">{children}</div>
      {folio &&
      <span
        className={`absolute bottom-[3.5%] font-doc text-doc text-ink-faint ${
        side === 'verso' ? 'left-[7%]' : 'right-[7%]'}`
        }>
        
          {folio}
        </span>
      }
    </div>);

}

function CropMarks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-6 z-10">
      {(
      [
      'left-0 top-0 border-l border-t',
      'right-0 top-0 border-r border-t',
      'left-0 bottom-0 border-l border-b',
      'right-0 bottom-0 border-r border-b'] as
      const).
      map((pos) =>
      <span key={pos} className={`absolute h-5 w-5 border-ink-faint/50 ${pos}`} />
      )}
    </span>);

}