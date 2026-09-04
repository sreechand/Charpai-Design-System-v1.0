import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'charpai.reader-memory.walk-to-school';

type ReaderMemory = Record<string, boolean>;

function read(): ReaderMemory {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as ReaderMemory : {};
  } catch {
    return {};
  }
}

/**
 * The book remembers that you have touched it: a photograph left face-down
 * stays face-down, a letter once opened stays open. Not progress tracking —
 * evidence of handling.
 */
export function useReaderMemory() {
  const [memory, setMemory] = useState<ReaderMemory>({});

  useEffect(() => {
    setMemory(read());
  }, []);

  const remember = useCallback((key: string, value: boolean) => {
    setMemory((prev) => {
      const next = { ...prev, [key]: value };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {

        /* the book simply forgets */}
      return next;
    });
  }, []);

  const recalls = useCallback((key: string) => Boolean(memory[key]), [memory]);

  return { recalls, remember, touched: Object.values(memory).some(Boolean) };
}