import React, { useState } from 'react';
import { SignupForm } from '../components/SignupForm';
import {
  heroImage,
  howItWorksSteps,
  features,
  faqs,
} from '../data/landingContent';

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 8h8m-8 4h.01M8 8h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
  ),
  Mic: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
    </>
  ),
  Heart: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  ),
  BookOpen: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </>
  ),
  Lock: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 0h10.5a1.5 1.5 0 011.5 1.5v6.75a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5v-6.75a1.5 1.5 0 011.5-1.5z" />
    </>
  ),
  Users: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.494M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a9.127 9.127 0 014.213-7.694M9 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm7.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  ),
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {iconMap[name]}
    </svg>
  );
}

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="paper-canvas min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-charpai-cream/90 backdrop-blur-md border-b border-charpai-gold/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/charapai_logo.png" alt="Charpai" className="w-9 h-9 object-contain" />
            <span className="font-story text-lg text-charpai-ink font-bold tracking-tight">Charpai</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-ink-soft hover:text-ink transition-colors">How it works</button>
            <button onClick={() => scrollToSection('features')} className="text-sm text-ink-soft hover:text-ink transition-colors">What we preserve</button>
            <button onClick={() => scrollToSection('origin')} className="text-sm text-ink-soft hover:text-ink transition-colors">Why Charpai</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm text-ink-soft hover:text-ink transition-colors">FAQ</button>
          </div>

          <button
            onClick={() => scrollToSection('signup')}
            className="px-5 py-2 rounded-lg bg-charpai-ink text-white text-sm font-medium hover:bg-charpai-ink/90 transition-colors"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="narrative-measure md:narrative-measure-none">
              <p className="text-sm font-medium text-charpai-gold-deep tracking-wide uppercase mb-4">
                For the stories between generations
              </p>
              <h1 className="font-story text-display text-ink mb-6 leading-tight">
                We are the generation
                <br />
                <span className="text-charpai-gold-deep">between voice and screen.</span>
              </h1>
              <p className="font-story text-narrative text-ink-soft mb-8 leading-relaxed">
                So much of our heritage lives in stories that were never written down. Charpai helps you bring a loved one’s voice into the digital age — with thoughtful prompts, gentle guidance, and a storybook made to stay.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <button
                  onClick={() => scrollToSection('signup')}
                  className="px-7 py-3.5 rounded-xl bg-charpai-ink text-white font-medium text-base hover:bg-charpai-ink/90 active:bg-charpai-ink/80 transition-colors shadow-mounted"
                >
                  Preserve a story
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-7 py-3.5 rounded-xl border border-ink-rule text-ink font-medium text-base hover:bg-paper-deep transition-colors"
                >
                  See how it works
                </button>
              </div>
              <p className="font-hand text-lg text-charpai-gold-deep">
                A quiet place for the stories that shaped us.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lifted">
                <img
                  src={heroImage}
                  alt="Grandparents sharing family photos with their grandchild"
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-xl shadow-lifted p-4 max-w-[240px] hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-charpai-gold/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-charpai-gold-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-story text-sm text-ink font-bold leading-tight">This week's prompt</p>
                    <p className="text-xs text-ink-soft mt-1 italic">"What did your childhood home smell like?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-paper-deep/50 border-y border-ink-rule/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-charpai-gold-deep tracking-wide uppercase mb-3">How it works</p>
            <h2 className="font-story text-storytitle text-ink mb-4">From conversation to keepsake</h2>
            <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">
              A simple journey that turns the stories your family carries into something you can hold, share, and pass on.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {howItWorksSteps.map((step, idx) => (
              <div key={step.number} className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                <div className="md:[direction:ltr]">
                  <div className="relative rounded-2xl overflow-hidden shadow-loose">
                    <img src={step.image} alt={step.title} className="w-full h-[300px] md:h-[360px] object-cover" />
                  </div>
                </div>
                <div className="md:[direction:ltr]">
                  <span className="font-story text-5xl text-charpai-gold-deep/30 font-bold block mb-2">{step.number}</span>
                  <h3 className="font-story text-2xl text-ink mb-3 font-bold">{step.title}</h3>
                  <p className="font-story text-narrative text-ink-soft leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-charpai-gold-deep tracking-wide uppercase mb-3">What Charpai preserves</p>
            <h2 className="font-story text-storytitle text-ink mb-4">A quieter way to hold what matters</h2>
            <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">
              We handle the hard parts so you can focus on what matters: being present with the people you love, in the language and rhythm that feels like home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/60 border border-charpai-gold/30 p-6 hover:shadow-loose hover:border-charpai-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-charpai-ink/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-charpai-gold-deep" />
                </div>
                <h3 className="font-story text-lg text-ink mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin */}
      <section id="origin" className="py-20 md:py-28 bg-charpai-ink text-charpai-cream">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20 items-start">
          <div>
            <p className="text-sm font-medium text-charpai-gold tracking-wide uppercase mb-3">Why Charpai</p>
            <h2 className="font-story text-storytitle text-charpai-cream">A bridge for what we cannot afford to lose.</h2>
          </div>
          <div className="font-story text-narrative text-charpai-cream/80 space-y-5">
            <p>Sreechand’s friends have often talked about being the generation between oral traditions and digital mediums.</p>
            <p>We grew up hearing stories in courtyards, kitchens, on charpais, and during long journeys. Now, those stories are disappearing with the people who carry them — while our phones fill up with everything but what matters.</p>
            <p>Charpai is a gentle way to keep the conversation going. We help families gather the voices, memories, humour, recipes, places, and lessons that make a community — then shape them into something that can be held, shared, and passed on.</p>
          </div>
        </div>
      </section>

      {/* Early access */}
      <section id="early-access" className="py-20 md:py-28 bg-charpai-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-charpai-gold-deep tracking-wide uppercase mb-3">A work in progress, with care</p>
          <h2 className="font-story text-storytitle text-ink mb-4">Help us make the first Charpai.</h2>
          <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">We are shaping a slower, more human way to preserve family memory. Join the early list and help us learn what your family needs to keep its stories alive.</p>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-20 md:py-28 bg-charpai-ink text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-story text-storytitle text-white mb-4">Give a story somewhere to live.</h2>
          <p className="font-story text-narrative text-charpai-cream/80 mb-10 max-w-lg mx-auto">
            Tell us who you want to hear from. We will keep you close as Charpai takes shape.
          </p>
          <div className="max-w-md mx-auto">
            <SignupForm variant="section" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-charpai-gold-deep tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="font-story text-storytitle text-ink mb-4">Questions, answered</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/60 border border-charpai-gold/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-story text-base text-ink font-bold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-ink-faint flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-ink-soft leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper py-12 border-t border-ink-soft/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <img src="/charapai_logo.png" alt="Charpai" className="w-10 h-10 object-contain" />
                <span className="font-story text-lg font-bold">Charpai</span>
              </div>
              <p className="text-sm text-paper/60 leading-relaxed">
                A bridge between oral tradition and digital memory. Charpai helps families keep the stories that shape them.
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-sm text-paper/50 mb-3 uppercase tracking-wide">Company</p>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('how-it-works')} className="block text-sm text-paper/80 hover:text-paper transition-colors">How it works</button>
                  <button onClick={() => scrollToSection('origin')} className="block text-sm text-paper/80 hover:text-paper transition-colors">Why Charpai</button>
                  <button onClick={() => scrollToSection('early-access')} className="block text-sm text-paper/80 hover:text-paper transition-colors">Early access</button>
                </div>
              </div>
              <div>
                <p className="text-sm text-paper/50 mb-3 uppercase tracking-wide">Support</p>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('faq')} className="block text-sm text-paper/80 hover:text-paper transition-colors">FAQ</button>
                  <button onClick={() => scrollToSection('signup')} className="block text-sm text-paper/80 hover:text-paper transition-colors">Sign up</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-paper/40">© 2026 Charpai. All rights reserved.</p>
            <p className="text-xs text-paper/40">Made with care for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
