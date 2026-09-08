import React, { useEffect, useState } from 'react';
import { Fieldbook } from './pages/Fieldbook';
import { Thread } from './pages/Thread';
import { WalkToSchool } from './pages/WalkToSchool';
import { WalkToSchoolPhone } from './pages/WalkToSchoolPhone';
import { TheTelevision } from './pages/TheTelevision';
import { PrintedBook } from './pages/PrintedBook';
import { PhoneFrame } from './components/mobile/PhoneFrame';
import { useIsPhone } from './hooks/useIsPhone';

interface AppProps {
  /** Where the book is open: its contents, one of the stories, or a print layout. */
  view?: 'fieldbook' | 'walk-to-school' | 'the-television' | 'printed-book';
  /** Which composition the story is read in. 'auto' follows the viewport. */
  format?: 'auto' | 'phone' | 'desktop';
  /** How The Walk to School begins: with the object, her voice, or as a book. */
  opening?: 'artifact' | 'voice' | 'book';
  /** Mounting grammar belongs to the book, not to each photograph. */
  mounting?: 'corners' | 'tape' | 'slit';
}

export function App({
  view = 'fieldbook',
  format = 'auto',
  opening = 'artifact',
  mounting = 'corners'
}: AppProps) {
  const [current, setCurrent] = useState<string>(view);
  const isPhone = useIsPhone();

  useEffect(() => setCurrent(view), [view]);

  const navigate = (next: string) => {
    setCurrent(next);
    window.scrollTo({ top: 0 });
  };

  const phone = format === 'phone' || format === 'auto' && isPhone;

  if (current.startsWith('thread:')) {
    return <Thread threadId={current.slice('thread:'.length)} onNavigate={navigate} />;
  }

  if (current === 'the-television') {
    return <TheTelevision onNavigate={navigate} />;
  }

  if (current === 'printed-book') {
    return <PrintedBook onBack={() => navigate('walk-to-school')} />;
  }

  if (current === 'walk-to-school') {
    return phone ?
    <PhoneFrame framed={!isPhone}>
        <WalkToSchoolPhone mounting={mounting} onNavigate={navigate} />
      </PhoneFrame> :

    <WalkToSchool opening={opening} mounting={mounting} onNavigate={navigate} />;

  }

  return <Fieldbook onNavigate={navigate} />;
}