import { hyderabad1977, vijayawada1964 } from './memoryWorlds';
import type { MemoryWorldTokens } from '../types/story';

export const book = {
  title: 'The Rao Family Fieldbook',
  places: 'Vijayawada · Guntur · Malakpet',
  assembled: 'Assembled by Padma, 2026 —',
  /** Archival extent, not progress. The book is never finished. */
  extent: '2 stories composed · 6 recordings held · 11 artifacts catalogued',
  standing: 'Four people appear in it. Two have recorded. One disagrees.'
};

export interface Narrator {
  id: string;
  name: string;
  full: string;
  relation: string;
  world: MemoryWorldTokens;
  portrait?: string;
  handSample?: string;
  holdings: string;
  note: string;
}

export const narrators: Narrator[] = [
{
  id: 'ammamma',
  name: 'Ammamma',
  full: 'Sarojini Devi',
  relation: 'Grandmother · born 1950, Vijayawada',
  world: vijayawada1964,
  portrait: "/b8cf4018-317d-4696-a5d2-8f2e232519f0.jpg",

  handSample: 'Kamala & me — going to school',
  holdings: '1 story · 4 recordings · 22 min',
  note: 'Tells it in Telugu. Dates things by who was in which school, and asks to be corrected.'
},
{
  id: 'thatha',
  name: 'Thatha',
  full: 'G. Venkateswara Rao',
  relation: 'Grandfather · born 1944, Guntur',
  world: hyderabad1977,
  portrait: "/62529763-632d-41a8-a657-a05c266e3edc.jpg",

  handSample: 'Eleven months. 62 rupees each month.',
  holdings: '1 story · 2 recordings · 19 min',
  note: 'Dates things by his postings and his increments. Writes his corrections in the margin.'
},
{
  id: 'kamala',
  name: 'Kamala',
  full: 'Kamala Devi',
  relation: 'Great-aunt · Ammamma’s younger sister',
  world: vijayawada1964,
  holdings: 'Appears in 3 memories · not recorded',
  note: 'No handwriting on file, so none is shown for her. She says the shade was not cold.'
},
{
  id: 'padma',
  name: 'Padma',
  full: 'Padma Rao',
  relation: 'Daughter · keeper of this book',
  world: vijayawada1964,
  holdings: 'Records, transcribes, catalogues',
  note: 'Writes the dates on the backs of the photographs, including the ones she is unsure of.'
}];


export interface StoryCard {
  id: string;
  view: string;
  title: string;
  narrator: string;
  place: string;
  timeSpoken: string;
  timeNormalised: string;
  world: MemoryWorldTokens;
  cover: string;
  coverKind: string;
  holdings: string;
  opening: string;
  added: string;
}

export const storyCards: StoryCard[] = [
{
  id: 'the-walk-to-school',
  view: 'walk-to-school',
  title: 'The Walk to School',
  narrator: 'Ammamma',
  place: 'Governorpet, Vijayawada',
  timeSpoken: 'The year my sister started school',
  timeNormalised: 'c. 1964',
  world: vijayawada1964,
  cover: "/0fa9d161-b435-4357-98fe-79b581ece4b4.jpg",

  coverKind: 'Photograph · original print',
  holdings: '2 documented · 5 remembered · 3 reconstructed',
  opening: 'Opens on the photograph',
  added: 'Composed March 2026 · printed layout ready'
},
{
  id: 'the-television',
  view: 'the-television',
  title: 'The Television',
  narrator: 'Thatha',
  place: 'Malakpet, Hyderabad',
  timeSpoken: 'The year the street came to sit in our house',
  timeNormalised: '1976 or 1978',
  world: hyderabad1977,
  cover: "/a28d137b-afc9-4505-91d5-b7c3e5707dd4.jpg",

  coverKind: 'Photograph · original colour print',
  holdings: '3 documented · 4 remembered · 2 reconstructed',
  opening: 'Opens on a disagreement',
  added: 'Composed February 2026'
}];


export type Precision =
'exact' |
'approximate' |
'range' |
'relative' |
'life stage' |
'uncertain' |
'contested';

export interface ChronologyEntry {
  id: string;
  /** The narrator's own expression of time, kept verbatim. */
  spoken: string;
  normalised: string;
  place: string;
  precision: Precision;
  narrator: string;
  world: MemoryWorldTokens;
  /** Present only when the memory has actually been composed into a story. */
  view?: string;
  status?: string;
}

export const chronology: ChronologyEntry[] = [
{
  id: 'c1',
  spoken: 'When I bought the cycle new',
  normalised: 'c. 1958',
  place: 'Vijayawada',
  precision: 'approximate',
  narrator: 'Thatha',
  world: hyderabad1977,
  status: 'Recording held · not yet composed'
},
{
  id: 'c2',
  spoken: 'The year my sister started school',
  normalised: 'c. 1964',
  place: 'Governorpet, Vijayawada',
  precision: 'relative',
  narrator: 'Ammamma',
  world: vijayawada1964,
  view: 'walk-to-school'
},
{
  id: 'c3',
  spoken: 'The summer I turned sixteen',
  normalised: '1966 (?)',
  place: 'Vijayawada',
  precision: 'uncertain',
  narrator: 'Ammamma',
  world: vijayawada1964,
  status: 'Recording held · she is not sure of the year'
},
{
  id: 'c4',
  spoken: 'When we were newly married',
  normalised: '1969–70',
  place: 'Guntur',
  precision: 'life stage',
  narrator: 'Thatha',
  world: hyderabad1977,
  status: 'Recording held · not yet composed'
},
{
  id: 'c5',
  spoken: 'After the accident to the cycle',
  normalised: 'c. 1971',
  place: 'Malakpet, Hyderabad',
  precision: 'relative',
  narrator: 'Thatha',
  world: hyderabad1977,
  status: 'Recording held · not yet composed'
},
{
  id: 'c6',
  spoken: 'The year the street came to sit in our house',
  normalised: '1976 or 1978',
  place: 'Malakpet, Hyderabad',
  precision: 'contested',
  narrator: 'Thatha & Ammamma',
  world: hyderabad1977,
  view: 'the-television'
},
{
  id: 'c7',
  spoken: 'They cut the tree for the road',
  normalised: '1978',
  place: 'Governorpet, Vijayawada',
  precision: 'exact',
  narrator: 'Ammamma',
  world: vijayawada1964,
  view: 'walk-to-school'
}];


export type ThreadKind = 'object' | 'place' | 'person';

export interface ThreadMemory {
  year: string;
  narrator: string;
  line: string;
  world: MemoryWorldTokens;
  view?: string;
  status?: string;
}

export interface Thread {
  id: string;
  kind: ThreadKind;
  label: string;
  count: string;
  span: string;
  note: string;
  /** Objects, places and people all have biographies of their own. */
  biography?: string;
  memories: ThreadMemory[];
}

export const threads: Thread[] = [
{
  id: 'hercules-bicycle',
  kind: 'object',
  label: 'The Hercules bicycle',
  count: '7 memories',
  span: '1958 – 1971',
  note: 'Bought new in Vijayawada. Repainted after the accident. Still in the shed in 1994.',
  biography:
  'One object, aged across four narrators. Where evidence exists it is drawn as it was at that date — the carrier is not added to the 1958 drawing because it was not there yet.',
  memories: [
  {
    year: 'c. 1958',
    narrator: 'Thatha',
    line: 'New cycle. Hercules. Paid 210.',
    world: hyderabad1977,
    status: 'Recording held · photograph catalogued'
  },
  {
    year: 'c. 1964',
    narrator: 'Ammamma',
    line: 'He would not let anybody else touch it. Not even to move it.',
    world: vijayawada1964,
    status: 'Recording held'
  },
  {
    year: 'c. 1969',
    narrator: 'Thatha',
    line: 'It carried your father to the hospital when he was born.',
    world: hyderabad1977,
    status: 'Recording held · not yet composed'
  },
  {
    year: '1976 or 1978',
    narrator: 'Thatha',
    line: 'I went on the first Saturday of every month, on the cycle, to pay the instalment.',
    world: hyderabad1977,
    view: 'the-television'
  },
  {
    year: 'c. 1971',
    narrator: 'Thatha',
    line: 'After the accident it was repainted, and the colour never matched again.',
    world: hyderabad1977,
    status: 'Recording held · not yet composed'
  }]

},
{
  id: 'governorpet-house',
  kind: 'place',
  label: 'The house in Governorpet',
  count: '5 memories',
  span: '1952 – 1971',
  note: 'Two rooms and a courtyard, red oxide floor, a jasmine plant that never survived the summers.',
  biography:
  'The same place across two decades and three narrators. Nobody remembers the street number the same way, so the book records all three.',
  memories: [
  {
    year: 'c. 1964',
    narrator: 'Ammamma',
    line: 'My mother would put the tiffin in my hand and not in Kamala’s.',
    world: vijayawada1964,
    view: 'walk-to-school'
  },
  {
    year: 'c. 1966',
    narrator: 'Ammamma',
    line: 'The floor was cold in the afternoons and we were not allowed to sleep on it.',
    world: vijayawada1964,
    status: 'Recording held'
  },
  {
    year: 'c. 1969',
    narrator: 'Thatha',
    line: 'I asked her father for permission in that courtyard. He said nothing for a while.',
    world: hyderabad1977,
    status: 'Recording held · not yet composed'
  }]

},
{
  id: 'kamala',
  kind: 'person',
  label: 'Kamala',
  count: '3 memories · 2 narrators',
  span: '1964 – 1978',
  note: 'Ammamma’s younger sister. Appears in memories she has not told herself.',
  biography:
  'The accounts differ and are not reconciled. Kamala has not recorded, so nothing is written in her hand and no handwriting is invented for her.',
  memories: [
  {
    year: 'c. 1964',
    narrator: 'Ammamma',
    line: 'The smaller half was always mine, because I was the elder.',
    world: vijayawada1964,
    view: 'walk-to-school'
  },
  {
    year: 'c. 1964',
    narrator: 'Kamala',
    line: 'She says the shade was cold. It was not cold. She remembers it cold because we were happy.',
    world: vijayawada1964,
    status: 'Told to Padma by telephone · not recorded'
  },
  {
    year: '1976 or 1978',
    narrator: 'Ammamma',
    line: 'Padma watched it standing up because there was no room to sit.',
    world: vijayawada1964,
    view: 'the-television'
  }]

},
{
  id: 'radio-and-co',
  kind: 'place',
  label: 'Radio & Co., Malakpet',
  count: '2 memories',
  span: '1976 – 1980',
  note: 'A shop on the main road past the second bus stop. Eleven instalments, and tea whether or not you wanted tea.',
  memories: [
  {
    year: '1976 or 1978',
    narrator: 'Thatha',
    line: 'He wrote each instalment into a book with a carbon sheet under it.',
    world: hyderabad1977,
    view: 'the-television'
  }]

}];