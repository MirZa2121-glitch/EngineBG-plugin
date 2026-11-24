import './src/index.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from './src/components/header';
import {
  Intro1,
  Intro2,
  Intro3,
  Intro4,
  Intro5,
  Intro6,
  Intro7,
  Intro8,
} from './src/components/intro';
import { Service1, Service2, Service3 } from './src/components/service';
import { Footer1, Footer2, Footer3, Footer4, Footer5, Footer6 } from './src/components/footer';
import { ArabicContact, ArabicIntro, ArabicServices } from './src/components/arabic';
import { Cards1, Cards2, Cards3, Cards4, Cards5 } from './src/components/cards';

const CATEGORIES = [
  {
    id: 'headers',
    label: 'Header',
    subcategories: [
      { id: 'headers-all', label: 'Headers Block' },
      { id: 'headers-simple', label: 'Simple' },
      { id: 'headers-cta', label: 'With button' },
    ],
  },
  {
    id: 'heroes',
    label: 'Intro (Hero)',
    subcategories: [
      { id: 'heroes-all', label: 'Intro Block' },
      { id: 'heroes-text', label: 'Text layouts' },
      { id: 'heroes-center', label: 'In center' },
      { id: 'heroes-video', label: 'Video layout' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    subcategories: [
      { id: 'services-all', label: 'All services' },
      { id: 'services-cards', label: 'Service cards' },
      { id: 'services-list', label: 'Service list' },
      { id: 'services-featured', label: 'Featured service' },
    ],
  },
  {
    id: 'cards',
    label: 'Cards',
    subcategories: [
      { id: 'cards-all', label: 'All cards' },
      { id: 'cards-feature', label: 'Feature cards' },
      { id: 'cards-portfolio', label: 'Portfolio' },
      { id: 'cards-pricing', label: 'Pricing' },
      { id: 'cards-testimonial', label: 'Testimonials' },
      { id: 'cards-team', label: 'Team profiles' },
    ],
  },
  {
    id: 'footer',
    label: 'Footer',
    subcategories: [
      { id: 'footer-all', label: 'All footers' },
      { id: 'footer-compact', label: 'Compact' },
      { id: 'footer-dark', label: 'Dark' },
      { id: 'footer-newsletter', label: 'Newsletter' },
      { id: 'footer-cta', label: 'Call to action' },
      { id: 'footer-editorial', label: 'Editorial' },
    ],
  },
  {
    id: 'arabic',
    label: 'Arabic / RTL',
    subcategories: [
      { id: 'arabic-all', label: 'All RTL blocks' },
      { id: 'arabic-intro', label: 'Introduction' },
      { id: 'arabic-services', label: 'Services' },
      { id: 'arabic-contact', label: 'Contact' },
    ],
  },
];

const HEADER_BLOCKS = [
  { id: 'header-1', Component: Header1, type: 'simple' },
  { id: 'header-2', Component: Header2, type: 'cta' },
  { id: 'header-3', Component: Header3, type: 'simple' },
  { id: 'header-4', Component: Header4, type: 'cta' },
  { id: 'header-5', Component: Header5, type: 'simple' },
  { id: 'header-6', Component: Header6, type: 'cta' },
];

const INTRO_BLOCKS = [
  { id: 'intro-1', Component: Intro1, type: 'center' },
  { id: 'intro-2', Component: Intro2, type: 'text' },
  { id: 'intro-3', Component: Intro3, type: 'video' },
  { id: 'intro-4', Component: Intro4, type: 'text' },
  { id: 'intro-5', Component: Intro5, type: 'launch' },
  { id: 'intro-6', Component: Intro6, type: 'stats' },
  { id: 'intro-7', Component: Intro7, type: 'features' },
  { id: 'intro-8', Component: Intro8, type: 'video' },
];

const SERVICE_BLOCKS = [
  { id: 'service-1', Component: Service1, type: 'cards' },
  { id: 'service-2', Component: Service2, type: 'list' },
  { id: 'service-3', Component: Service3, type: 'featured' },
];

const FOOTER_BLOCKS = [
  { id: 'footer-1', Component: Footer1, type: 'compact' },
  { id: 'footer-2', Component: Footer2, type: 'dark' },
  { id: 'footer-3', Component: Footer3, type: 'newsletter' },
  { id: 'footer-4', Component: Footer4, type: 'cta' },
  { id: 'footer-5', Component: Footer5, type: 'compact' },
  { id: 'footer-6', Component: Footer6, type: 'editorial' },
];

const ARABIC_BLOCKS = [
  { id: 'arabic-intro', Component: ArabicIntro },
  { id: 'arabic-services', Component: ArabicServices },
  { id: 'arabic-contact', Component: ArabicContact },
];

const CARD_BLOCKS = [
  { id: 'cards-1', Component: Cards1, type: 'feature' },
  { id: 'cards-2', Component: Cards2, type: 'portfolio' },
  { id: 'cards-3', Component: Cards3, type: 'pricing' },
  { id: 'cards-4', Component: Cards4, type: 'testimonial' },
  { id: 'cards-5', Component: Cards5, type: 'team' },
];

function App() {
  const [activeCat, setActiveCat] = useState('headers');
  const [activeSub, setActiveSub] = useState('headers-all');
  const visibleHeaders = HEADER_BLOCKS.filter((block) => {
    if (activeSub === 'headers-simple') return block.type === 'simple';
    if (activeSub === 'headers-cta') return block.type === 'cta';
    return true;
  });
  const visibleIntros = INTRO_BLOCKS.filter((block) => {
    if (activeSub === 'heroes-text') return block.type !== 'video';
    if (activeSub === 'heroes-center') return block.type === 'center';
    if (activeSub === 'heroes-video') return block.type === 'video';
    return true;
  });
  const visibleServices = SERVICE_BLOCKS.filter((block) => {
    if (activeSub === 'services-cards') return block.type === 'cards';
    if (activeSub === 'services-list') return block.type === 'list';
    if (activeSub === 'services-featured') return block.type === 'featured';
    return true;
  });
  const visibleFooters = FOOTER_BLOCKS.filter((block) => {
    if (activeSub === 'footer-dark') return block.type === 'dark';
    if (activeSub === 'footer-newsletter') return block.type === 'newsletter';
    if (activeSub === 'footer-cta') return block.type === 'cta';
    if (activeSub === 'footer-editorial') return block.type === 'editorial';
    if (activeSub === 'footer-compact') return block.type === 'compact';
    return true;
  });
  const visibleArabicBlocks = ARABIC_BLOCKS.filter((block) => {
    return activeSub === 'arabic-all' || activeSub === block.id;
  });
  const visibleCards = CARD_BLOCKS.filter((block) => {
    if (activeSub === 'cards-all') return true;
    return activeSub === `cards-${block.type}`;
  });

  const handleSelectCategory = (catId: string, firstSub?: string) => {
    setActiveCat(catId);
    setActiveSub(firstSub || '');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f6fb] font-sans text-slate-900">
      <aside className="flex w-[156px] shrink-0 flex-col border-r border-slate-200/80 bg-white px-3 py-4">
        <div className="mb-7 flex items-center gap-2 px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-xs font-bold text-white shadow-sm shadow-indigo-200">
            E
          </div>
          <div className="min-w-10">
            <p className="truncate text-[12px] font-bold tracking-tight text-slate-900">EngineBG</p>
            <p className='truncate text-[12px] font-bold tracking-tight text-slate-900'>By Mirza <abbr className='text-green-600'>Glitch</abbr></p>
            <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400">Bloc library</p>
          </div>
        </div>

        <div className="mb-2 flex items-center justify-between px-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">Libraries</span>
          <span className="text-[9px] font-medium text-slate-300">06</span>
        </div>

        <nav className="flex flex-col gap-1">
          {CATEGORIES.map((cat) => {
            const isOpen = activeCat === cat.id;
            return (
              <div key={cat.id} className="flex flex-col">
                <button
                  onClick={() => handleSelectCategory(cat.id, cat.subcategories[0]?.id)}
                  className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-left text-[11px] font-medium transition-colors ${
                    isOpen
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isOpen && <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />}
                </button>

                {isOpen && cat.subcategories.length > 0 && (
                  <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-indigo-100 pl-2">
                    {cat.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSub(sub.id)}
                        className={`rounded-md px-2 py-1.5 text-left text-[10px] transition-colors ${
                          activeSub === sub.id
                            ? 'font-semibold text-indigo-700'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto rounded-lg bg-slate-50 p-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-semibold text-slate-600">Ready to design</span>
          </div>
          <p className="text-[9px] leading-relaxed text-slate-400">Drag a block onto your canvas.</p>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto px-4 py-5">
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            <span>Components</span>
            <span className="text-slate-300">/</span>
            <span className="text-indigo-600">{CATEGORIES.find((cat) => cat.id === activeCat)?.label}</span>
          </div>
          <div className="flex items-end justify-between gap-2">
            <div>
              <h1 className="text-[20px] font-semibold tracking-tight text-slate-900">
                {activeCat === 'headers'
                  ? 'Headers'
                  : activeCat === 'heroes'
                    ? 'Intro blocks'
                    : activeCat === 'services'
                      ? 'Services'
                      : activeCat === 'footer'
                        ? 'Footers'
                        : activeCat === 'arabic'
                          ? 'Arabic / RTL blocks'
                            : activeCat === 'cards'
                              ? 'Cards'
                    : CATEGORIES.find((cat) => cat.id === activeCat)?.label}
              </h1>
              <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                Polished building blocks for your next design.
              </p>
            </div>
            <span className="mb-0.5 shrink-0 rounded-full border border-slate-200 bg-white px-2 py-1 text-[9px] font-medium text-slate-500">
              {activeCat === 'headers'
                ? `${visibleHeaders.length} ${visibleHeaders.length === 1 ? 'block' : 'blocks'}`
                : activeCat === 'heroes'
                  ? `${visibleIntros.length} ${visibleIntros.length === 1 ? 'block' : 'blocks'}`
                  : activeCat === 'services'
                    ? `${visibleServices.length} ${visibleServices.length === 1 ? 'block' : 'blocks'}`
                    : activeCat === 'footer'
                      ? `${visibleFooters.length} ${visibleFooters.length === 1 ? 'block' : 'blocks'}`
                      : activeCat === 'arabic'
                        ? `${visibleArabicBlocks.length} ${visibleArabicBlocks.length === 1 ? 'block' : 'blocks'}`
                        : activeCat === 'cards'
                          ? `${visibleCards.length} ${visibleCards.length === 1 ? 'block' : 'blocks'}`
                  : 'Coming soon'}
            </span>
          </div>
        </div>

        {activeCat === 'headers' && (
          <>
            <div className="flex flex-col gap-3">
              {visibleHeaders.map(({ id, Component }) => (
                <Component key={id} />
              ))}
            </div>
            <section className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm shadow-slate-200/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[10px] font-semibold text-slate-800">Layout specifications</h2>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">8pt system</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ['Canvas', '1440 px'],
                  ['Columns', '12 grid'],
                  ['Spacing', '8 px'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 px-2 py-2">
                    <p className="text-[8px] font-medium text-slate-400">{label}</p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeCat === 'heroes' && (
          <>
            <div className="flex flex-col gap-3">
              {visibleIntros.map(({ id, Component }) => (
                <Component key={id} />
              ))}
            </div>
            <section className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm shadow-slate-200/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[10px] font-semibold text-slate-800">Intro layout system</h2>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">8pt system</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ['Canvas', '1440 px'],
                  ['Columns', '12 grid'],
                  ['Container', '1200 px'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 px-2 py-2">
                    <p className="text-[8px] font-medium text-slate-400">{label}</p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeCat === 'services' && (
          <>
            <div className="flex flex-col gap-3">
              {visibleServices.map(({ id, Component }) => (
                <Component key={id} />
              ))}
            </div>
            <section className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm shadow-slate-200/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[10px] font-semibold text-slate-800">Service layout system</h2>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">8pt system</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ['Canvas', '1440 px'],
                  ['Columns', '12 grid'],
                  ['Container', '1200 px'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 px-2 py-2">
                    <p className="text-[8px] font-medium text-slate-400">{label}</p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeCat === 'footer' && (
          <div className="flex flex-col gap-3">
            {visibleFooters.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </div>
        )}

        {activeCat === 'arabic' && (
          <div className="flex flex-col gap-3">
            {visibleArabicBlocks.map(({ id, Component }) => (
              <Component key={id} />
            ))}
          </div>
        )}

        {activeCat === 'cards' && (
          <>
            <div className="flex flex-col gap-3">
              {visibleCards.map(({ id, Component }) => (
                <Component key={id} />
              ))}
            </div>
            <section className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm shadow-slate-200/40">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[10px] font-semibold text-slate-800">Card grid system</h2>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">Auto Layout wrap</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ['Canvas', '1440 px'],
                  ['Grid', '12 columns'],
                  ['Card gap', '24 px'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 px-2 py-2">
                    <p className="text-[8px] font-medium text-slate-400">{label}</p>
                    <p className="mt-1 text-[10px] font-semibold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
