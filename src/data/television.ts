import type { Account, ArtifactMeta, Passage, PhotographReverse, StoryMeta } from '../types/story';
import { hyderabad1977, vijayawada1964 } from './memoryWorlds';

export const televisionStory: StoryMeta = {
  id: 'the-television',
  title: 'The Television',
  chapter: 'Chapter Nine',
  narrator: 'Thatha',
  place: 'Malakpet, Hyderabad',
  timeSpoken: 'The year the street came to sit in our house',
  timeNormalised: '1976 or 1978',
  recording: {
    label: 'Hear Thatha tell it',
    duration: '6:08',
    recordedOn: 'Recorded 2 February 2026 · Hyderabad',
    language: 'Told in Telugu and English · transcribed by Padma'
  },
  ambience: 'Ceiling fan, a scooter starting, the set warming up — reconstructed, not a recording'
};

/**
 * The disagreement is the story. Neither account is corrected, and the one
 * surviving document cannot settle it.
 */
export const televisionAccounts: Account[] = [
{
  narrator: 'Thatha',
  text: 'We bought the television in 1978. I remember because I had just been made section officer, and the first instalment came out of that increment.',
  attribution: 'Thatha, 2026',
  world: hyderabad1977
},
{
  narrator: 'Ammamma',
  text: 'No. That was definitely 1976. Padma was still in the small school, and she watched it standing up because there was no room to sit.',
  attribution: 'Ammamma, 2026',
  world: vijayawada1964
}];


export const contradictionNote =
'Both accounts are kept. The hire-purchase receipt survives, but the year is torn away at the fold — so the book does not decide.';

export const televisionPassages: Passage[] = [
{
  id: 't1',
  text: 'Radio & Co. was on the main road, past the second bus stop. The man there let me pay in eleven instalments and wrote each one into a book with a carbon sheet under it, so that we both had the same page. I went on the first Saturday of every month, on the cycle, and he would make tea whether or not I wanted tea.',
  annotation: {
    text: 'Eleven months. 62 rupees each month. I did not tell my mother the price.',
    side: 'right'
  }
},
{
  id: 't2',
  text: 'It came home in a rickshaw, not on the cycle — I want to be clear about that, because your uncle tells people I carried it on the carrier and that is not a thing a person could do. We set it on the stand your grandmother borrowed, and she put a cloth on top of it the same evening, and after that the cloth was never removed for fourteen years.'
},
{
  id: 't3',
  text: 'The picture did not come immediately. It came in a line first, a white line across the middle, and then it opened out from that line. Every evening the street knew what time we switched it on. By seven o\u2019clock there were people I had never spoken to sitting on my floor, and I could not have told you the name of half of them, and it did not matter at all.',
  annotation: {
    text: 'Chairs from Prakash next door. Four of them. He never asked for them back.',
    side: 'left'
  }
},
{
  id: 't4',
  text: 'The cycle I had already fifteen, twenty years by then. It carried the instalments to the shop, and before that it carried your father to hospital when he was born, and before that it carried nothing at all, because I bought it new and I was very careful with it for one whole month.'
}];


export const televisionClosing =
'Whether it was 1976 or 1978, the chairs came from Prakash and the cloth stayed on for fourteen years.';

export const televisionRest =
'She is probably right. She is usually right about years. I am right about the rickshaw.';

export const roomPhotograph: ArtifactMeta = {
  kind: 'Photograph · original colour print',
  place: 'Malakpet, Hyderabad',
  time: 'c. 1978',
  provenance: 'documented',
  note: 'Colour shift and softness are original to the print. Nothing has been corrected.'
};

export const roomPhotographReverse: PhotographReverse = {
  script: 'हमारा टी.वी.',
  scriptClass: 'font-devanagari',
  hand: 'Our T.V. — everybody came',
  date: '78 (she says 76)',
  note: 'Written by Thatha, ballpoint. The correction is his own.'
};

export const bicyclePhotograph: ArtifactMeta = {
  kind: 'Photograph · original print',
  place: 'Vijayawada',
  time: 'c. 1958',
  provenance: 'documented',
  note: 'Twenty years older than the story it appears in. The object keeps its own date.'
};

export const bicyclePhotographReverse: PhotographReverse = {
  hand: 'New cycle. Hercules. Paid 210.',
  date: '1958',
  note: 'Written by Thatha, fountain pen. Different pen, different decade.'
};

export const receipt: ArtifactMeta = {
  kind: 'Hire-purchase receipt · carbon copy',
  place: 'Radio & Co., Malakpet',
  time: 'Instalment 11 of 11 · year torn',
  provenance: 'documented',
  note: 'Torn along the fold. The month is legible; the year is not.'
};

export const bicyclePlate: ArtifactMeta = {
  kind: 'Hercules roadster · drawn from narration',
  time: 'Drawn 2026',
  provenance: 'reconstructed',
  note: 'Drawn from the 1958 photograph and from what he describes of it later — repaired, repainted once, carrier added.'
};

export const testCard: ArtifactMeta = {
  kind: 'Test card · reconstruction',
  time: 'Drawn 2026',
  provenance: 'reconstructed',
  note: 'An interpretation of what he describes seeing before the picture opened out. Not a recording of a broadcast.'
};

export const bicycleThread = {
  label: 'The Hercules bicycle',
  count: '7 memories',
  span: '1958 – 1971',
  note: 'Bought new in Vijayawada. Repainted after the accident. Still in the shed in 1994.'
};

export const televisionImages = {
  room: "/a28d137b-afc9-4505-91d5-b7c3e5707dd4.jpg",
  bicycleInk: "/0715eac2-30a4-4bea-ae78-0111b3de1090.jpg",

  bicyclePhoto: "/bf613f8c-8a72-4604-88c2-6bc00b8f1747.jpg"

};