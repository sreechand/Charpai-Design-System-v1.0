export type Provenance = 'documented' | 'remembered' | 'reconstructed';

export type MemoryConfidence = 'vivid' | 'remembered' | 'suggested' | 'unknown';

export type MountingStyle = 'corners' | 'tape' | 'slit';

export type OpeningStrategy = 'artifact' | 'voice' | 'book';

export interface Passage {
  id: string;
  /** Edited narrative prose, set in the literary Story face. */
  text: string;
  /** The narrator's own aside, in her hand. Optional. */
  annotation?: {
    text: string;
    /** Rendered smaller, in the margin on wide viewports. */
    side?: 'left' | 'right';
  };
}

/** Time × Place × Context. Expressive properties only — never navigation. */
export interface MemoryWorldTokens {
  id: string;
  label: string;
  /** Narrator Fingerprint: the instrument, the hand, the size of the writing. */
  handFont: string;
  handInk: string;
  handSize: string;
  handTilt: string;
  /** Colour derived from the artifacts and the narration, not from the decade. */
  accent: string;
  deep: string;
  /** Mounting grammar belongs to the book, not to the individual photograph. */
  mounting: MountingStyle;
}

export interface StoryMeta {
  id: string;
  title: string;
  chapter: string;
  narrator: string;
  place: string;
  /** The narrator's own expression of time is always kept. */
  timeSpoken: string;
  timeNormalised: string;
  recording: {
    label: string;
    duration: string;
    recordedOn: string;
    language: string;
  };
  ambience: string;
}

/** The reverse of a photograph, in whoever's hand actually wrote there. */
export interface PhotographReverse {
  script?: string;
  scriptClass?: string;
  hand: string;
  date: string;
  note: string;
}

export interface Account {
  narrator: string;
  text: string;
  attribution: string;
  /** Each narrator writes in their own hand; both accounts stand. */
  world: MemoryWorldTokens;
}

export interface ArtifactMeta {
  /** Documentary line: what it is, and where it came from. */
  kind: string;
  place?: string;
  time?: string;
  provenance: Provenance;
  note?: string;
}