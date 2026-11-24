import React from 'react';
import { DraggableBlock } from './header';

interface ServicePreviewProps {
  blockId: string;
  title: string;
  detail: string;
  children: React.ReactNode;
}

function ServicePreview({ blockId, title, detail, children }: ServicePreviewProps) {
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

function ServiceLink() {
  return <span className="mt-6 inline-flex text-[15px] font-semibold text-indigo-600">Explore service <span className="ml-2">↗</span></span>;
}

export function Service1() {
  return (
    <ServicePreview blockId="service-1" title="Service cards" detail="Three-column grid · 1440 px">
      <div className="absolute left-4 top-[180px] w-[1168px]">
        <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-indigo-600">What we do</p>
        <h1 className="mt-5 text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          Services for your next big idea.
        </h1>
        <div className="mt-10 grid grid-cols-3 gap-5">
          {[
            ['01', 'Brand strategy', 'Positioning, identity, and a clear direction for your brand.'],
            ['02', 'Product design', 'Thoughtful digital experiences shaped around real people.'],
            ['03', 'Web development', 'Fast, accessible websites made to grow with your business.'],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-[14px] font-semibold text-indigo-600">
                {number}
              </span>
              <h2 className="mt-7 text-[24px] font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-[16px] leading-7 text-slate-600">{description}</p>
              <ServiceLink />
            </article>
          ))}
        </div>
      </div>
    </ServicePreview>
  );
}

export function Service2() {
  return (
    <ServicePreview blockId="service-2" title="Service list" detail="Numbered rows · 1440 px">
      <div className="absolute left-4 top-[160px] w-[1168px]">
        <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-indigo-600">Our capabilities</p>
        <h1 className="mt-5 text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          One team, from start to finish.
        </h1>
        <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
          {[
            ['01', 'Strategy & research', 'Find the right opportunity and define what matters.'],
            ['02', 'Brand & identity', 'Build a distinctive system your team can use everywhere.'],
            ['03', 'Digital experiences', 'Design clear products and websites people love to use.'],
            ['04', 'Build & support', 'Launch with confidence and keep improving over time.'],
          ].map(([number, title, description]) => (
            <div key={number} className="grid grid-cols-[80px_1fr_1.2fr_40px] items-center gap-6 py-6">
              <span className="text-[16px] font-semibold text-indigo-600">{number}</span>
              <h2 className="text-[22px] font-semibold text-slate-900">{title}</h2>
              <p className="text-[16px] leading-6 text-slate-500">{description}</p>
              <span className="text-right text-[20px] text-slate-400">↗</span>
            </div>
          ))}
        </div>
      </div>
    </ServicePreview>
  );
}

export function Service3() {
  return (
    <ServicePreview blockId="service-3" title="Featured service" detail="Spotlight + deliverables · 1440 px">
      <div className="absolute left-4 top-[210px] w-[480px]">
        <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-indigo-600">Featured service</p>
        <h1 className="mt-6 whitespace-pre-line text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'A brand people\nremember.'}
        </h1>
        <p className="mt-6 text-[19px] leading-8 text-slate-600">
          A complete identity system to help your business stand out and stay consistent.
        </p>
        <span className="mt-8 inline-flex h-12 items-center rounded-lg bg-indigo-600 px-6 text-[16px] font-medium text-white">
          Explore brand strategy
        </span>
      </div>
      <div className="absolute left-[580px] top-[220px] flex h-[460px] w-[604px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">
        <div className="flex items-start justify-between">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">Included</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-[19px] text-indigo-600">✦</span>
        </div>
        <div>
          <h2 className="text-[34px] font-semibold tracking-tight text-slate-900">A system that works everywhere.</h2>
          <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 text-[17px] text-slate-600">
            <p><span className="mr-3 text-indigo-500">✓</span>Visual identity and guidelines</p>
            <p><span className="mr-3 text-indigo-500">✓</span>Typography and color system</p>
            <p><span className="mr-3 text-indigo-500">✓</span>Reusable design components</p>
          </div>
        </div>
      </div>
    </ServicePreview>
  );
}
