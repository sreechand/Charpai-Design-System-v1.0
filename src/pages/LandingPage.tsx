import React, { useState } from 'react';
import { SignupForm } from '../components/SignupForm';
import {
  heroImage,
  howItWorksSteps,
  features,
  testimonials,
  pricingPlans,
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
      <nav className="fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink-rule/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-banyan flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="font-story text-lg text-ink font-bold tracking-tight">Heirloom</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-ink-soft hover:text-ink transition-colors">How it works</button>
            <button onClick={() => scrollToSection('features')} className="text-sm text-ink-soft hover:text-ink transition-colors">Features</button>
            <button onClick={() => scrollToSection('stories')} className="text-sm text-ink-soft hover:text-ink transition-colors">Stories</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm text-ink-soft hover:text-ink transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm text-ink-soft hover:text-ink transition-colors">FAQ</button>
          </div>

          <button
            onClick={() => scrollToSection('signup')}
            className="px-5 py-2 rounded-lg bg-banyan text-white text-sm font-medium hover:bg-banyan/90 transition-colors"
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
              <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-4">
                A family heirloom, told in their voice
              </p>
              <h1 className="font-story text-display text-ink mb-6 leading-tight">
                Get your family member talking.
                <br />
                <span className="text-banyan">We will be there through the way.</span>
              </h1>
              <p className="font-story text-narrative text-ink-soft mb-8 leading-relaxed">
                We send thoughtful prompts, guide the conversation, and bind it all into a
                beautiful hardcover book your family will keep for ages. No writing required —
                they just talk.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <button
                  onClick={() => scrollToSection('signup')}
                  className="px-7 py-3.5 rounded-xl bg-banyan text-white font-medium text-base hover:bg-banyan/90 active:bg-banyan/80 transition-colors shadow-mounted"
                >
                  Start your heirloom
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-7 py-3.5 rounded-xl border border-ink-rule text-ink font-medium text-base hover:bg-paper-deep transition-colors"
                >
                  See how it works
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-paper bg-ink-soft/20 flex items-center justify-center text-xs text-ink-soft">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-ink-faint">
                  Join thousands of families preserving their stories
                </p>
              </div>
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
                  <div className="w-10 h-10 rounded-full bg-wrappergold/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-wrappergold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
            <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-3">How it works</p>
            <h2 className="font-story text-storytitle text-ink mb-4">From question to printed heirloom</h2>
            <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">
              A simple journey that turns conversations into a keepsake your family will treasure for generations.
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
                  <span className="font-story text-5xl text-banyan/30 font-bold block mb-2">{step.number}</span>
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
            <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-3">Why families choose us</p>
            <h2 className="font-story text-storytitle text-ink mb-4">Everything you need to capture a life</h2>
            <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">
              We handle the hard parts so you can focus on what matters: being present with the people you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/60 border border-ink-rule/30 p-6 hover:shadow-loose hover:border-banyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-banyan/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-banyan" />
                </div>
                <h3 className="font-story text-lg text-ink mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-20 md:py-28 bg-paper-deep/50 border-y border-ink-rule/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-3">Family stories</p>
            <h2 className="font-story text-storytitle text-ink mb-4">Stories that would have been lost</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/70 border border-ink-rule/30 p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-4 text-wrappergold">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-story text-base text-ink leading-relaxed flex-grow italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-ink-rule/20">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-story text-sm text-ink font-bold">{t.name}</p>
                    <p className="text-xs text-ink-faint">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-3">Pricing</p>
            <h2 className="font-story text-storytitle text-ink mb-4">One price. Forever access.</h2>
            <p className="font-story text-narrative text-ink-soft max-w-2xl mx-auto">
              No subscriptions. No recurring fees. Pay once, and the stories are yours forever — even if you never buy another book.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-banyan text-white border-banyan shadow-lifted md:scale-105'
                    : 'bg-white/60 border-ink-rule/30 hover:shadow-loose'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4">
                    Most popular
                  </div>
                )}
                <h3 className={`font-story text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-ink-soft'}`}>{plan.description}</p>
                <div className="mb-6">
                  <span className={`font-story text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-ink-faint'}`}> / {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white/90' : 'text-banyan'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? 'text-white/90' : 'text-ink-soft'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('signup')}
                  className={`w-full py-3 rounded-xl font-medium text-base transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-banyan hover:bg-white/90'
                      : 'bg-banyan text-white hover:bg-banyan/90'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-20 md:py-28 bg-banyan text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-story text-storytitle text-white mb-4">Start your family heirloom today</h2>
          <p className="font-story text-narrative text-white/80 mb-10 max-w-lg mx-auto">
            Sign up for free. Tell us who you want to interview. We will send the first prompt this week.
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
            <p className="text-sm font-medium text-banyan tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="font-story text-storytitle text-ink mb-4">Questions, answered</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/60 border border-ink-rule/30 overflow-hidden"
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
                <div className="w-8 h-8 rounded-lg bg-banyan flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <span className="font-story text-lg font-bold">Heirloom</span>
              </div>
              <p className="text-sm text-paper/60 leading-relaxed">
                A family heirloom, told in their voice. We help you capture the stories that matter and bind them into a book that lasts for ages.
              </p>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-sm text-paper/50 mb-3 uppercase tracking-wide">Company</p>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('how-it-works')} className="block text-sm text-paper/80 hover:text-paper transition-colors">How it works</button>
                  <button onClick={() => scrollToSection('stories')} className="block text-sm text-paper/80 hover:text-paper transition-colors">Stories</button>
                  <button onClick={() => scrollToSection('pricing')} className="block text-sm text-paper/80 hover:text-paper transition-colors">Pricing</button>
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
            <p className="text-xs text-paper/40">© 2026 Heirloom. All rights reserved.</p>
            <p className="text-xs text-paper/40">Made with care for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
