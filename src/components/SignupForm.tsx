import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface SignupFormProps {
  variant?: 'hero' | 'section';
  onSuccess?: () => void;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function SignupForm({ variant = 'hero', onSuccess }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [familyMemberName, setFamilyMemberName] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setState('submitting');
    setErrorMsg('');

    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: email.trim().toLowerCase(),
        name: name.trim() || null,
        family_member_name: familyMemberName.trim() || null,
      });

    if (error) {
      if (error.code === '23505') {
        setState('success');
        onSuccess?.();
        return;
      }
      setState('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    setState('success');
    onSuccess?.();
  };

  if (state === 'success') {
    return (
      <div className={`rounded-2xl bg-white/80 backdrop-blur-sm border border-paper-edge p-6 text-center ${variant === 'hero' ? 'shadow-loose' : ''}`}>
        <div className="flex items-center justify-center mb-3">
          <div className="w-12 h-12 rounded-full bg-banyan/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-banyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="font-story text-xl text-ink mb-1">You are on the list</h3>
        <p className="text-ink-soft text-sm">
          We will be in touch soon. In the meantime, think about which family member you want to interview first.
        </p>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-white/80 backdrop-blur-sm border border-paper-edge p-6 ${isHero ? 'shadow-loose' : ''}`}
    >
      <div className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-xl bg-paper/60 border border-ink-rule/40 text-ink placeholder:text-ink-faint focus:outline-none focus:border-banyan focus:ring-1 focus:ring-banyan transition-colors text-base"
          disabled={state === 'submitting'}
        />

        {!showDetails && (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="text-sm text-banyan hover:text-banyan/80 transition-colors font-medium"
          >
            Tell us more (optional)
          </button>
        )}

        {showDetails && (
          <div className="space-y-3 pt-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-paper/60 border border-ink-rule/40 text-ink placeholder:text-ink-faint focus:outline-none focus:border-banyan focus:ring-1 focus:ring-banyan transition-colors text-base"
              disabled={state === 'submitting'}
            />
            <input
              type="text"
              value={familyMemberName}
              onChange={(e) => setFamilyMemberName(e.target.value)}
              placeholder="Who do you want to interview?"
              className="w-full px-4 py-3 rounded-xl bg-paper/60 border border-ink-rule/40 text-ink placeholder:text-ink-faint focus:outline-none focus:border-banyan focus:ring-1 focus:ring-banyan transition-colors text-base"
              disabled={state === 'submitting'}
            />
          </div>
        )}

        {state === 'error' && (
          <p className="text-sm text-oxide">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full py-3.5 rounded-xl bg-banyan text-white font-medium text-base hover:bg-banyan/90 active:bg-banyan/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'submitting' ? 'Reserving your spot...' : 'Sign up — it is free'}
        </button>

        <p className="text-xs text-ink-faint text-center">
          No credit card needed. We will never share your email.
        </p>
      </div>
    </form>
  );
}
