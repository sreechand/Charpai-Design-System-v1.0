import type { ArtifactMeta, Passage, PhotographReverse, StoryMeta } from '../types/story';

export const story: StoryMeta = {
  id: 'the-walk-to-school',
  title: 'The Walk to School',
  narrator: 'Ammamma',
  place: 'Governorpet, Vijayawada',
  /** The narrator's own expression of time is kept. Normalised metadata sits underneath. */
  timeSpoken: 'The year my sister started school',
  timeNormalised: 'c. 1964',
  chapter: 'Chapter Two',
  recording: {
    label: 'Hear Ammamma tell it',
    duration: '4:32',
    recordedOn: 'Recorded 14 March 2026 · Hyderabad',
    language: 'Told in Telugu · translated by Padma'
  },
  ambience: 'Ceiling fan, sparrows, a cycle bell — reconstructed, not a recording of that street'
};

export const openingLine =
'“It was not far. Everybody said it was not far. But we were small, and it was June.”';

export const passages: Passage[] = [
{
  id: 'p1',
  text: 'We left the house at half past seven, before the road went white with heat. My mother would put the tiffin in my hand and not in Kamala\u2019s, because Kamala was six and would have opened it by the second turning.',
  annotation: {
    text: 'She did open it. Once. Near the post office.',
    side: 'right'
  }
},
{
  id: 'p2',
  text: 'The road ran straight for a long while and then bent, and at the bend there was a shop — not a proper shop, a wooden shutter and a man who knew our names. He kept the chocolate in a tin so the ants would not find it. On the days our father gave us money, we bought one and broke it in two, and the smaller half was always mine, because I was the elder and I had decided that this was what elder meant.'
},
{
  id: 'p3',
  text: 'After the shop the road opened out, and there it was. I have never since seen a tree of that size. It stood the way an old person stands — heavy, patient, taking up its whole space without apology. Its roots came down from the branches like ropes, and we would hold them and swing, and the shade underneath was cold. Actually cold. In June, in Vijayawada.',
  annotation: {
    text: 'Bigger than the school. Much bigger.',
    side: 'left'
  }
},
{
  id: 'p4',
  text: 'The school was after that. I remember the gate, and the smell of the corridor when it rained, and a teacher who tapped the desk with two fingers. The building itself I could not draw for you. I walked past it for four years and I could not tell you how many windows it had.'
}];


export const closingLine =
'They cut the tree in 1978, for the road. I did not go to see.';

export const restLine =
'Kamala still says the shade was not cold. She says I remember it cold because we were happy.';

/**
 * On a phone the map is not a spread to take in at once — it is a walk you
 * drag along. These are its stops, in the order she describes them.
 */
export const routeStops = [
{ id: 'house', label: 'Our house', at: 4 },
{ id: 'shop', label: 'The shop', at: 26 },
{ id: 'banyan', label: 'The banyan', at: 48 },
{ id: 'school', label: 'The school', at: 88 }];


export const photograph: ArtifactMeta = {
  kind: 'Photograph · original print',
  place: 'Governorpet, Vijayawada',
  time: 'c. 1964',
  provenance: 'documented',
  note: 'Damage to upper edge and lower right corner is original to the print.'
};

export const photographReverse: PhotographReverse = {
  script: 'కమల & నేను — బడికి',
  scriptClass: 'font-telugu',
  hand: 'Kamala & me — going to school',
  date: 'June 64 (?)',
  note: 'Written by Ammamma, undated. Fountain pen.'
};

export const schoolDocument: ArtifactMeta = {
  kind: 'School progress record · original',
  place: 'Vijayawada',
  time: '1964–65',
  provenance: 'documented',
  note: 'Folded in four for sixty years. The fold is kept.'
};

export const routeMap: ArtifactMeta = {
  kind: 'Route map · drawn from narration',
  place: 'Governorpet, Vijayawada',
  time: 'Drawn 2026',
  provenance: 'reconstructed',
  note: 'Nothing here is surveyed. This is the road as Ammamma describes it.'
};

export const banyanPlate: ArtifactMeta = {
  kind: 'Banyan · drawn from narration',
  time: 'Drawn 2026',
  provenance: 'reconstructed',
  note: 'Vividly remembered. Drawn at the size she describes, not the size it was.'
};

export const wrapper: ArtifactMeta = {
  kind: 'Chocolate wrapper · reconstruction',
  time: 'Drawn 2026',
  provenance: 'reconstructed',
  note: 'No wrapper survives. This is a drawing of what she describes.'
};

export const images = {
  photograph: "/0fa9d161-b435-4357-98fe-79b581ece4b4.jpg",

  banyan: "/3d51e287-824b-4b94-99f7-ba31a0bf5f6f.jpg",

  wrapper: "/1c640e04-8122-4646-a95d-b0955f4407c3.jpg"

};