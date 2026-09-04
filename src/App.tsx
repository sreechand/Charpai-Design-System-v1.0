import React, { useEffect, useState } from 'react';
import { WalkToSchool } from './pages/WalkToSchool';
import { TheTelevision } from './pages/TheTelevision';

interface AppProps {
  /** Which story in the fieldbook is open. */
  story?: 'walk-to-school' | 'the-television';
  /** How The Walk to School begins: with the object, her voice, or as a book. */
  opening?: 'artifact' | 'voice' | 'book';
  /** Mounting grammar belongs to the book, not to each photograph. */
  mounting?: 'corners' | 'tape' | 'slit';
}

export function App({
  story = 'walk-to-school',
  opening = 'artifact',
  mounting = 'corners'
}: AppProps) {
  const [current, setCurrent] = useState(story);

  useEffect(() => setCurrent(story), [story]);

  const goTo = (next: AppProps['story']) => {
    setCurrent(next as NonNullable<AppProps['story']>);
    window.scrollTo({ top: 0 });
  };

  return current === 'the-television' ?
  <TheTelevision onOnward={() => goTo('walk-to-school')} /> :

  <WalkToSchool
    opening={opening}
    mounting={mounting}
    onOnward={() => goTo('the-television')} />;


}