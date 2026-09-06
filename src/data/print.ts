/**
 * The physical book is not an export format. These are the constructions the
 * digital reading experience translates into — and what each one costs.
 */

export const printSpec = {
  title: 'The Walk to School',
  edition: 'Ammamma · Book One',
  trim: '240 × 280 mm portrait',
  extent: '7 spreads · 28 pages',
  binding: 'Section-sewn, exposed spine, no case',
  stocks: [
  ['Text', 'Uncoated ivory book wove, 140 gsm'],
  ['Insert', 'Matte photographic stock, 250 gsm, tipped in'],
  ['Overlay', 'Translucent tracing stock, 40 gsm'],
  ['Gatefold', 'Text stock, folded to trim, opens to 480 mm'],
  ['Pocket', 'Glassine pocket, hand-mounted, opens to the fore-edge']],

  press: 'Offset lithography, two passes; handwriting printed as line art, not greyscale'
};

export interface SpreadSpec {
  n: number;
  folios: [string, string];
  construction: string;
  /** How the digital verb becomes a paper construction. */
  translation?: {digital: string;physical: string;};
}

export const spreads: Record<string, SpreadSpec> = {
  opening: {
    n: 1,
    folios: ['2', '3'],
    construction: 'Photographic insert · tipped in on 250 gsm matte, mounted with archival corners',
    translation: {
      digital: 'The story opens on the object itself, alone on the screen.',
      physical: 'The insert is the only page on heavier stock — you feel it before you see it.'
    }
  },
  reverse: {
    n: 2,
    folios: ['4', '5'],
    construction: 'Reverse printed as its own page · handwriting reproduced as line art at 100%',
    translation: {
      digital: 'Turn the photograph over.',
      physical: 'The back is printed facing the front, so both sides are readable at once.'
    }
  },
  prose: {
    n: 3,
    folios: ['6', '7'],
    construction: 'Text stock · prose on a 5-column measure, hand in the outer margin'
  },
  overlay: {
    n: 4,
    folios: ['8', '9'],
    construction: 'Tracing-paper overlay · 40 gsm, bound short at the gutter, lifts to the right',
    translation: {
      digital: 'What she does not remember disappears into paper.',
      physical: 'The suggested school is printed on the overlay; lift it and it is simply gone.'
    }
  },
  gatefold: {
    n: 5,
    folios: ['10', '11'],
    construction: 'Gatefold · folds to trim, opens to 480 mm; the route crosses the fold deliberately',
    translation: {
      digital: 'The route is traced as you arrive.',
      physical: 'The walk is longer than the page, so the page has to open.'
    }
  },
  pocket: {
    n: 6,
    folios: ['12', '13'],
    construction: 'Glassine pocket · hand-mounted, document reproduced at 92% and folded in four',
    translation: {
      digital: 'Unfold the record.',
      physical: 'The reproduction is folded and pocketed; the reader unfolds the real thing.'
    }
  },
  rest: {
    n: 7,
    folios: ['14', '15'],
    construction: 'Text stock · no image, no folio on the recto; the last page is left almost empty'
  }
};