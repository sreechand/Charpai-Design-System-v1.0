import React from 'react';
import { DocumentaryLine } from '../foundation/Documentary';
import { receipt } from '../../data/television';

/**
 * A receipt keeps the geometry of a receipt. The carbon violet, the flimsy
 * stock, and the tear along the fold — where the year used to be — are the
 * whole reason this object is in the book.
 */
export function Receipt() {
  return (
    <figure className="w-full max-w-[26rem]">
      <div
        className="relative bg-[#EFE3DE] px-6 py-5 shadow-loose"
        style={{
          transform: 'rotate(-1.2deg)',
          clipPath: 'polygon(0 0, 100% 0, 100% 62%, 82% 74%, 88% 88%, 63% 100%, 0 100%)'
        }}>
        
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[26%] w-px bg-[#D5BFB8]" />
        
        <p className="font-doc text-doc uppercase text-carbon/80">Radio &amp; Co. · Malakpet</p>
        <p className="mt-2 font-story text-[1.05rem] leading-snug text-carbon">
          Received with thanks from Sri G. Venkateswara Rao the sum of Rupees Sixty-two only.
        </p>

        <dl className="mt-thought space-y-1.5">
          <div className="flex items-baseline gap-object">
            <dt className="font-doc text-doc uppercase text-carbon/70">Instalment</dt>
            <dd className="font-story text-[1rem] text-carbon">11 of 11</dd>
          </div>
          <div className="flex items-baseline gap-object">
            <dt className="font-doc text-doc uppercase text-carbon/70">Dated</dt>
            <dd className="font-story text-[1rem] text-carbon">
              6th September
              <span className="ml-2 font-doc text-doc uppercase text-ink-faint">[torn]</span>
            </dd>
          </div>
        </dl>

        <p
          className="mt-object text-[1.35rem] leading-none text-carbon"
          style={{ fontFamily: "'Kalam', cursive" }}>
          
          for Radio &amp; Co.
        </p>
      </div>

      <figcaption className="mt-object">
        <DocumentaryLine meta={receipt} />
      </figcaption>
    </figure>);

}