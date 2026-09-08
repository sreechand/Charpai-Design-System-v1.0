import React from 'react';

/**
 * Review scaffolding only: lets the phone composition be looked at from a
 * desktop. On an actual phone the children are rendered directly, with no
 * frame and no chrome.
 */
export function PhoneFrame({
  framed,
  children



}: {framed: boolean;children: React.ReactNode;}) {
  if (!framed) return <>{children}</>;

  return (
    <div className="min-h-full w-full bg-desk px-6 py-scene">
      <div className="mx-auto w-full max-w-[390px]">
        <p className="mb-object font-doc text-doc uppercase text-ink">
          390 × 844 · phone composition
        </p>
        <div
          className="h-[844px] max-h-[86vh] overflow-hidden border border-ink/15 bg-paper shadow-lifted"
          style={{ transform: 'translateZ(0)' }}>
          
          <div className="h-full overflow-y-auto">{children}</div>
        </div>
        <p className="mt-object max-w-[42ch] font-story text-[0.95rem] italic leading-relaxed text-ink-soft">
          Not a shrunk spread: the banyan takes a screen of its own, and the map becomes a walk you
          drag along.
        </p>
      </div>
    </div>);

}