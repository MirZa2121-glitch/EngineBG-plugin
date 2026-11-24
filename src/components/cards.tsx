import React from 'react';
import { DraggableBlock } from './header';

interface CardPreviewProps {
  blockId: string;
  title: string;
  detail: string;
  children: React.ReactNode;
}

function CardPreview({ blockId, title, detail, children }: CardPreviewProps) {
  return (
    <DraggableBlock blockId={blockId}>
      <div className="group rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:shadow-slate-200/60">
        <div className="relative mb-3 flex h-[138px] items-center justify-center overflow-hidden rounded-lg bg-[#f4f6fb]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.15]">
            <section className="relative h-[900px] w-[1440px] rounded-lg border border-slate-200 bg-[#f8f9fc]">
              <div className="relative mx-auto h-full w-[1200px] px-4">{children}</div>
            </section>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-slate-800">{title}</p>
            <p className="mt-0.5 text-[9px] text-slate-400">{detail}</p>
          </div>
          <span className="shrink-0 rounded-md bg-indigo-50 px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-indigo-600 transition-colors group-hover:bg-indigo-100">
            Drag to canvas
          </span>
        </div>
      </div>
    </DraggableBlock>
  );
}

function CardHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="absolute left-4 top-[150px] w-[1168px]">
      <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-indigo-600">{eyebrow}</p>
      <h2 className="mt-4 text-[52px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">{title}</h2>
      <p className="mt-4 max-w-[760px] text-[18px] leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export function Cards1() {
  return (
    <CardPreview blockId="cards-1" title="Feature cards" detail="Three columns · Minimal · 12-column grid">
      <CardHeading eyebrow="What we do" title="Simple cards, clear value." description="A flexible foundation for presenting key benefits at a glance." />
      <div className="absolute left-4 top-[350px] grid w-[1168px] grid-cols-3 gap-6">
        {[
          ['01', 'Thoughtful strategy', 'Get a clear direction and a strong foundation for the work ahead.'],
          ['02', 'Useful design', 'Make every interaction feel simple, clear, and considered.'],
          ['03', 'Reliable delivery', 'Turn the final design into a product ready for real people.'],
        ].map(([number, title, description]) => (
          <article key={number} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-[14px] font-bold text-indigo-600">{number}</span>
            <h3 className="mt-7 text-[24px] font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-[16px] leading-7 text-slate-600">{description}</p>
            <span className="mt-6 inline-block text-[15px] font-semibold text-indigo-600">Learn more ↗</span>
          </article>
        ))}
      </div>
    </CardPreview>
  );
}

export function Cards2() {
  return (
    <CardPreview blockId="cards-2" title="Portfolio cards" detail="Image-led · Three columns · 12-column grid">
      <CardHeading eyebrow="Selected work" title="A few things we’ve made." description="Image-led project cards for portfolios, case studies, and editorial grids." />
      <div className="absolute left-4 top-[350px] grid w-[1168px] grid-cols-3 gap-6">
        {[
          ['01', 'Atelier No. 8', 'Brand identity · 2025', 'from-orange-200 via-rose-100 to-indigo-200'],
          ['02', 'Common Ground', 'Digital product · 2024', 'from-emerald-100 via-cyan-100 to-blue-200'],
          ['03', 'Sunday Objects', 'Art direction · 2024', 'from-amber-100 via-orange-100 to-red-200'],
        ].map(([number, title, detail, colors]) => (
          <article key={number} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className={`flex h-[210px] items-end justify-between bg-gradient-to-br ${colors} p-6`}>
              <span className="text-[14px] font-semibold text-slate-700">{number} / 03</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[20px] text-slate-800">↗</span>
            </div>
            <div className="p-6"><h3 className="text-[22px] font-semibold text-slate-900">{title}</h3><p className="mt-2 text-[14px] text-slate-500">{detail}</p></div>
          </article>
        ))}
      </div>
    </CardPreview>
  );
}

export function Cards3() {
  return (
    <CardPreview blockId="cards-3" title="Pricing cards" detail="Tier comparison · Featured plan · 12-column grid">
      <CardHeading eyebrow="Straightforward pricing" title="Pick the right starting point." description="A clear side-by-side comparison with one plan visually highlighted." />
      <div className="absolute left-4 top-[350px] grid w-[1168px] grid-cols-3 gap-6">
        {[
          ['Starter', '$29', 'For small teams getting started.', 'Essentials', 'Core components', 'Email support'],
          ['Studio', '$79', 'For teams ready to do more.', 'Everything in Starter', 'Advanced blocks', 'Priority support'],
          ['Scale', '$149', 'For growing teams and systems.', 'Everything in Studio', 'Team libraries', 'Dedicated help'],
        ].map(([plan, price, description, ...features], index) => (
          <article key={plan} className={`rounded-2xl border p-7 ${index === 1 ? 'border-indigo-600 bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'border-slate-200 bg-white text-slate-900 shadow-sm'}`}>
            <p className={`text-[14px] font-semibold ${index === 1 ? 'text-indigo-100' : 'text-slate-500'}`}>{plan}</p>
            <p className="mt-4 text-[48px] font-semibold tracking-tight">{price}<span className={`ml-1 text-[15px] font-normal ${index === 1 ? 'text-indigo-100' : 'text-slate-400'}`}>/ month</span></p>
            <p className={`mt-2 min-h-[48px] text-[15px] leading-6 ${index === 1 ? 'text-indigo-100' : 'text-slate-500'}`}>{description}</p>
            <div className={`my-6 border-t ${index === 1 ? 'border-white/20' : 'border-slate-100'}`} />
            <div className="flex flex-col gap-4 text-[15px]">{features.map((feature) => <p key={feature}><span className={`mr-2 ${index === 1 ? 'text-indigo-200' : 'text-indigo-600'}`}>✓</span>{feature}</p>)}</div>
            <span className={`mt-7 block rounded-lg px-4 py-3 text-center text-[14px] font-semibold ${index === 1 ? 'bg-white text-indigo-700' : 'bg-slate-900 text-white'}`}>Choose {plan}</span>
          </article>
        ))}
      </div>
    </CardPreview>
  );
}

export function Cards4() {
  return (
    <CardPreview blockId="cards-4" title="Testimonial cards" detail="Customer quotes · Two columns · 12-column grid">
      <CardHeading eyebrow="Kind words" title="Good work, good people." description="A quote-forward layout for customer stories and social proof." />
      <div className="absolute left-4 top-[350px] grid w-[1168px] grid-cols-2 gap-6">
        {[
          ['“', 'The team brought clarity to a complicated launch. Every detail felt considered, and the result made an immediate difference.', 'Maya Chen', 'Founder, Common Ground'],
          ['“', 'A rare mix of thoughtful design and practical delivery. We left with a system that our whole team can use confidently.', 'Jonas Reed', 'Product lead, Northstar'],
        ].map(([quote, text, name, role]) => (
          <article key={name} className="flex min-h-[280px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div><span className="text-[56px] leading-none text-indigo-500">{quote}</span><p className="mt-3 text-[20px] leading-8 text-slate-700">{text}</p></div>
            <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-[14px] font-bold text-indigo-700">{name.split(' ').map((part) => part[0]).join('')}</span>
              <div><p className="text-[15px] font-semibold text-slate-900">{name}</p><p className="mt-1 text-[13px] text-slate-500">{role}</p></div>
            </div>
          </article>
        ))}
      </div>
    </CardPreview>
  );
}

export function Cards5() {
  return (
    <CardPreview blockId="cards-5" title="Team profile cards" detail="People · Four columns · 12-column grid">
      <CardHeading eyebrow="Meet the team" title="Small team. Big care." description="A compact profile grid for introducing the people behind the work." />
      <div className="absolute left-4 top-[350px] grid w-[1168px] grid-cols-4 gap-6">
        {[
          ['AL', 'Alex Lee', 'Creative director', 'from-violet-200 to-indigo-100'],
          ['SM', 'Sam Morgan', 'Product designer', 'from-rose-200 to-orange-100'],
          ['JR', 'Jamie Rivera', 'Design engineer', 'from-cyan-200 to-emerald-100'],
          ['TK', 'Taylor Kim', 'Project lead', 'from-amber-200 to-yellow-100'],
        ].map(([initials, name, role, colors]) => (
          <article key={name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className={`flex h-[210px] items-center justify-center bg-gradient-to-br ${colors}`}>
              <span className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/70 bg-white/40 text-[28px] font-semibold text-slate-800">{initials}</span>
            </div>
            <div className="p-5"><h3 className="text-[19px] font-semibold text-slate-900">{name}</h3><p className="mt-1 text-[14px] text-slate-500">{role}</p><span className="mt-4 inline-block text-[14px] font-semibold text-indigo-600">LinkedIn ↗</span></div>
          </article>
        ))}
      </div>
    </CardPreview>
  );
}