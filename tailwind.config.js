export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4F0E5',
          deep: '#EDE7D8',
          edge: '#E2DAC6',
          mount: '#E9E2D0',
        },
        ink: {
          DEFAULT: '#241F1B',
          soft: '#554C42',
          faint: '#8A8074',
          rule: '#CFC6B2',
        },
        /* Memory Palette — Vijayawada, c. 1964.
           Derived from artifacts and narration, not from a decade theme:
           red-oxide flooring, blue-black fountain-pen ink, banyan foliage,
           the gold of the wrapper, the green of the school pinafore. */
        oxide: '#9C4A2F',
        penblue: '#2C3E5C',
        banyan: '#4F5F3C',
        wrappergold: '#A9863F',
        uniform: '#3F5147',
        /* Memory Palette — Hyderabad, 1976 or 1978.
           Teak veneer cabinet, the blue-green of a test card on a warm-up
           screen, carbon-copy violet from the hire-purchase book, chrome stand. */
        teak: '#6B4A2B',
        testcard: '#2E6C79',
        carbon: '#6A4E7C',
        chrome: '#8C9196',
      },
      fontFamily: {
        story: ['Gentium Book Plus', 'Georgia', 'serif'],
        telugu: ['Noto Serif Telugu', 'Gentium Book Plus', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'Gentium Book Plus', 'serif'],
        doc: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        recon: ['Architects Daughter', 'cursive'],
      },
      fontSize: {
        doc: ['0.6875rem', { lineHeight: '1.4rem', letterSpacing: '0.14em' }],
        caption: ['0.9375rem', { lineHeight: '1.5rem' }],
        narrative: ['clamp(1.125rem, 0.4vw + 1.05rem, 1.375rem)', { lineHeight: '1.75' }],
        quote: ['clamp(1.6rem, 2.4vw, 2.4rem)', { lineHeight: '1.4' }],
        storytitle: ['clamp(2.1rem, 4vw, 3rem)', { lineHeight: '1.15' }],
        display: ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.05' }],
      },
      spacing: {
        touch: 'var(--space-touch)',
        object: 'var(--space-object)',
        thought: 'var(--space-thought)',
        scene: 'var(--space-scene)',
        breath: 'var(--space-breath)',
        silence: 'var(--space-silence)',
      },
      boxShadow: {
        /* Elevation expresses physical state, never importance. */
        printed: '0 0 0 rgba(0,0,0,0)',
        mounted: '0 1px 1px rgba(36,31,27,0.10)',
        loose: '0 2px 5px -1px rgba(36,31,27,0.16), 0 10px 20px -12px rgba(36,31,27,0.22)',
        lifted: '0 10px 22px -8px rgba(36,31,27,0.30), 0 30px 55px -30px rgba(36,31,27,0.40)',
        overlay: '0 4px 10px -3px rgba(36,31,27,0.24)',
      },
      transitionTimingFunction: {
        material: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
