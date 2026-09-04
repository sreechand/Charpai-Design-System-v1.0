import React from 'react';
import type { ArtifactMeta, Provenance } from '../../types/story';

const provenanceLabel: Record<Provenance, string> = {
  documented: 'Original',
  remembered: 'Remembered',
  reconstructed: 'Reconstructed'
};

/**
 * Provenance is never carried by colour alone — each state has its own mark
 * and its own word, so a reconstruction can never quietly pass as evidence.
 */
export function ProvenanceMark({ provenance }: {provenance: Provenance;}) {
  return (
    <span className="inline-flex items-center gap-touch align-middle">
      <span aria-hidden="true" className="inline-block">
        {provenance === 'documented' && <span className="block h-[7px] w-[7px] bg-ink" />}
        {provenance === 'remembered' &&
        <span className="block h-[7px] w-[7px] rounded-full border border-ink-soft" />
        }
        {provenance === 'reconstructed' &&
        <svg width="16" height="7" viewBox="0 0 16 7" fill="none" aria-hidden="true">
            <path
            d="M0.5 4.2 C3 1.6, 5 6, 8 3.2 S13 1.2, 15.5 3.6"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 2.5"
            className="text-ink-faint" />
          
          </svg>
        }
      </span>
      <span className="font-doc text-doc uppercase text-ink-soft">
        {provenanceLabel[provenance]}
      </span>
    </span>);

}

/** Archival metadata. Quiet, precise, always in the documentary face. */
export function DocumentaryLine({
  meta,
  align = 'left',
  className = ''




}: {meta: ArtifactMeta;align?: 'left' | 'center';className?: string;}) {
  const parts = [meta.kind, meta.place, meta.time].filter(Boolean) as string[];
  return (
    <div
      className={`${align === 'center' ? 'text-center' : ''} ${className}`}
      data-provenance={meta.provenance}>
      
      <p
        className={`font-doc text-doc uppercase text-ink-soft ${
        align === 'center' ? 'flex flex-wrap justify-center' : 'flex flex-wrap'} items-center gap-x-touch gap-y-1`
        }>
        
        {parts.map((part, i) =>
        <React.Fragment key={part}>
            {i > 0 &&
          <span aria-hidden="true" className="text-ink-faint">
                ·
              </span>
          }
            <span>{part}</span>
          </React.Fragment>
        )}
        <span aria-hidden="true" className="text-ink-faint">
          ·
        </span>
        <ProvenanceMark provenance={meta.provenance} />
      </p>
      {meta.note &&
      <p
        className={`mt-1.5 max-w-[42ch] font-story text-[0.9rem] italic leading-relaxed text-ink-faint ${
        align === 'center' ? 'mx-auto' : ''}`
        }>
        
          {meta.note}
        </p>
      }
    </div>);

}