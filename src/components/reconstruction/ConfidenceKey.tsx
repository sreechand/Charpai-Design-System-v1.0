import React from 'react';

/**
 * The archivist's key. Uncertainty is never expressed by opacity alone, so the
 * reader can learn the grammar: complete line, thinner line, broken line, none.
 */
export function ConfidenceKey() {
  const items: Array<[string, React.ReactNode]> = [
  ['Vivid', <path key="a" d="M1 5 H46" stroke="#3B342C" strokeWidth="2.4" strokeLinecap="round" />],
  [
  'Remembered',
  <path key="b" d="M1 5 H46" stroke="#3B342C" strokeWidth="1.3" strokeLinecap="round" />],

  [
  'Suggested',
  <path
    key="c"
    d="M1 5 H46"
    stroke="#6B6154"
    strokeWidth="1.1"
    strokeDasharray="9 7"
    strokeLinecap="round" />],


  ['Unknown', <path key="d" d="M1 5 H14" stroke="#8A8074" strokeWidth="1" opacity="0.5" />]];


  return (
    <ul className="flex flex-wrap gap-x-object gap-y-touch">
      {items.map(([label, line]) =>
      <li key={label} className="flex items-center gap-1.5">
          <svg width="48" height="10" viewBox="0 0 48 10" aria-hidden="true">
            {line}
          </svg>
          <span className="font-doc text-doc uppercase text-ink-faint">{label}</span>
        </li>
      )}
    </ul>);

}