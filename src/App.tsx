import React, { useEffect, useState } from 'react';
import { WalkToSchool } from './pages/WalkToSchool';
import { TheTelevision } from './pages/TheTelevision';
import { PrintedBook } from './pages/PrintedBook';

interface AppProps {
  /** Which story in the fieldbook is open, or the print layout of the first one. */
  story?: 'walk-to-school' | 'the-television' | 'printed-book';
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

  const goTo = (next: NonNullable<AppProps['story']>) => {
    setCurrent(next);
    window.scrollTo({ top: 0 });
  };

  if (current === 'the-television') {
    return <TheTelevision onOnward={() => goTo('walk-to-school')} />;
  }

  if (current === 'printed-book') {
    return <PrintedBook onBack={() => goTo('walk-to-school')} />;
  }

  return (
    <WalkToSchool
      opening={opening}
      mounting={mounting}
      onOnward={() => goTo('the-television')} />);


}