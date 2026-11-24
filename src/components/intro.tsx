import React from 'react';
import { DraggableBlock } from './header';

interface IntroPreviewProps {
  blockId: string;
  title: string;
  detail: string;
  children: React.ReactNode;
}

function IntroPreview({ blockId, title, detail, children }: IntroPreviewProps) {
  return (
    <DraggableBlock blockId={blockId}>
      <div className="group rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:shadow-slate-200/60">
        <div className="relative mb-3 flex h-[138px] items-center justify-center overflow-hidden rounded-lg bg-[#f4f6fb]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.15]">
            <section className="relative h-[900px] w-[1440px] rounded-lg border border-slate-200 bg-[#f8f9fc]">
              <div className="relative mx-auto h-full w-[1200px]">{children}</div>
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

function IntroButton({ children, primary = false }: { children: string; primary?: boolean }) {
  return (
    <span className={`flex h-12 items-center justify-center rounded-lg px-6 text-[16px] font-medium ${
      primary
        ? 'bg-indigo-600 text-white'
        : 'border border-slate-300 bg-white text-slate-800'
    }`}>
      {children}
    </span>
  );
}

function IntroEyebrow({ children }: { children: string }) {
  return (
    <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-indigo-600">
      {children}
    </span>
  );
}

export function Intro1() {
  return (
    <IntroPreview blockId="intro-1" title="Centered introduction" detail="Text · Centered · 1440 px">
      <div className="absolute left-1/2 top-[210px] flex w-[800px] -translate-x-1/2 flex-col items-center text-center">
        <IntroEyebrow>Thoughtful digital design</IntroEyebrow>
        <h1 className="mt-7 whitespace-pre-line text-[64px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'Make your next idea\nimpossible to ignore.'}
        </h1>
        <p className="mt-6 max-w-[680px] text-[20px] leading-8 text-slate-600">
          Clear strategy, thoughtful design, and a little bit of boldness — all in one place.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <IntroButton primary>Explore services</IntroButton>
          <IntroButton>View our work</IntroButton>
        </div>
      </div>
    </IntroPreview>
  );
}

export function Intro2() {
  return (
    <IntroPreview blockId="intro-2" title="Editorial introduction" detail="Text · Split layout · 1440 px">
      <div className="absolute left-4 top-[210px] w-[500px]">
        <IntroEyebrow>Built around your vision</IntroEyebrow>
        <h1 className="mt-6 whitespace-pre-line text-[58px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'Good design\nstarts with a\nclear idea.'}
        </h1>
        <p className="mt-6 max-w-[480px] text-[19px] leading-8 text-slate-600">
          We turn complex challenges into simple, memorable digital experiences.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <IntroButton primary>Start a project</IntroButton>
          <IntroButton>Our approach</IntroButton>
        </div>
      </div>
      <div className="absolute left-[600px] top-[220px] flex h-[460px] w-[584px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">What we do</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-[18px] font-medium text-indigo-600">+</span>
        </div>
        <div>
          <h2 className="max-w-[400px] text-[38px] font-semibold leading-[1.15] tracking-tight text-slate-900">
            Strategy first.<br />Details that matter.
          </h2>
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 text-[18px] text-slate-600">
            <p><span className="mr-4 text-indigo-500">01</span>Brand and direction</p>
            <p><span className="mr-4 text-indigo-500">02</span>Digital products</p>
            <p><span className="mr-4 text-indigo-500">03</span>Content and storytelling</p>
          </div>
        </div>
      </div>
    </IntroPreview>
  );
}

export function Intro3() {
  return (
    <IntroPreview blockId="intro-3" title="Video introduction" detail="Text + video · 1440 px">
      <div className="absolute left-4 top-[260px] w-[420px]">
        <IntroEyebrow>A closer look</IntroEyebrow>
        <h1 className="mt-6 whitespace-pre-line text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'See what\nwe can make\ntogether.'}
        </h1>
        <p className="mt-6 max-w-[400px] text-[19px] leading-8 text-slate-600">
          A short introduction to our process, people, and the details behind the work.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <IntroButton primary>Play the film</IntroButton>
        </div>
      </div>
      <div className="absolute left-[500px] top-[220px] flex h-[460px] w-[684px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 via-slate-800 to-slate-950" />
        <span className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
          Video preview
        </span>
        <span className="absolute bottom-8 right-8 rounded-full bg-black/30 px-3 py-1.5 text-[13px] font-medium text-white">
          02:34
        </span>
        <span className="z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white text-[24px] text-indigo-600 shadow-lg">
          ▶
        </span>
      </div>
    </IntroPreview>
  );
}

export function Intro4() {
  return (
    <IntroPreview blockId="intro-4" title="EngineBG introduction" detail="Text · Brand story · 1440 px">
      <div className="absolute left-4 top-[250px] w-[520px]">
        <IntroEyebrow>What is EngineBG?</IntroEyebrow>
        <h1 className="mt-6 whitespace-pre-line text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'Build better\nwith blocks.'}
        </h1>
        <p className="mt-6 max-w-[500px] text-[19px] leading-8 text-slate-600">
          Engine Block Grid brings a flexible system of reusable pieces to your Figma canvas. Imagine what you can create with every block.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <IntroButton primary>Explore blocks</IntroButton>
        </div>
      </div>
      <div className="absolute left-[700px] top-[250px] flex h-[330px] w-[460px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">Engine Block Grid</span>
        <div className="grid grid-cols-2 gap-3">
          {['Headers', 'Intros', 'Services', 'More blocks'].map((label, index) => (
            <div key={label} className="rounded-xl bg-[#f4f6fb] p-4">
              <span className="text-[12px] font-semibold text-indigo-600">0{index + 1}</span>
              <p className="mt-2 text-[16px] font-medium text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </IntroPreview>
  );
}

export function Intro5() {
  return (
    <IntroPreview blockId="intro-5" title="Product launch" detail="Launch · Centered · 1440 px">
      <div className="absolute left-1/2 top-[190px] flex w-[840px] -translate-x-1/2 flex-col items-center text-center">
        <span className="rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2 text-[14px] font-semibold text-indigo-700">
          Introducing EngineBG 2.0
        </span>
        <h1 className="mt-8 whitespace-pre-line text-[68px] font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950">
          {'A better way to\nbuild your next idea.'}
        </h1>
        <p className="mt-6 max-w-[680px] text-[20px] leading-8 text-slate-600">
          A thoughtful library of ready-to-use blocks, built on a clear and consistent grid.
        </p>
        <div className="mt-8">
          <IntroButton primary>Discover what is new</IntroButton>
        </div>
      </div>
    </IntroPreview>
  );
}

export function Intro6() {
  return (
    <IntroPreview blockId="intro-6" title="Results introduction" detail="Metrics · Split layout · 1440 px">
      <div className="absolute left-4 top-[250px] w-[500px]">
        <IntroEyebrow>Design that delivers</IntroEyebrow>
        <h1 className="mt-6 whitespace-pre-line text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'Make the work\nspeak for itself.'}
        </h1>
        <p className="mt-6 max-w-[480px] text-[19px] leading-8 text-slate-600">
          Give your next project a stronger foundation with a system that helps good ideas move faster.
        </p>
        <div className="mt-8">
          <IntroButton primary>See the results</IntroButton>
        </div>
      </div>
      <div className="absolute left-[600px] top-[250px] grid h-[380px] w-[584px] grid-cols-2 gap-4">
        {[
          ['95%', 'Client satisfaction'],
          ['2×', 'Faster first drafts'],
          ['48', 'Ready-to-use blocks'],
          ['4.9/5', 'Average project rating'],
        ].map(([value, label]) => (
          <div key={label} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-[13px] font-medium text-slate-400">{label}</span>
            <span className="text-[48px] font-semibold tracking-tight text-slate-900">{value}</span>
          </div>
        ))}
      </div>
    </IntroPreview>
  );
}

export function Intro7() {
  return (
    <IntroPreview blockId="intro-7" title="Feature introduction" detail="Features · Three-column grid · 1440 px">
      <div className="absolute left-4 top-[180px] w-[1168px]">
        <IntroEyebrow>Everything in its place</IntroEyebrow>
        <h1 className="mt-5 text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          A clear path from idea to launch.
        </h1>
        <p className="mt-4 max-w-[700px] text-[19px] leading-8 text-slate-600">
          Start with a flexible foundation, then shape each detail to fit your project.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-5">
          {[
            ['01', 'Start with structure', 'Build on a reliable layout grid and consistent spacing.'],
            ['02', 'Make it your own', 'Adapt every block to your brand, content, and goals.'],
            ['03', 'Move with confidence', 'Keep the whole design clear as your project grows.'],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-[14px] font-semibold text-indigo-600">{number}</span>
              <h2 className="mt-6 text-[22px] font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-[16px] leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </IntroPreview>
  );
}

export function Intro8() {
  return (
    <IntroPreview blockId="intro-8" title="Story with video" detail="Video + text · Reversed split · 1440 px">
      <div className="absolute left-4 top-[250px] flex h-[400px] w-[600px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 via-slate-800 to-slate-950" />
        <span className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
          Our story
        </span>
        <span className="z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[24px] text-indigo-600 shadow-lg">
          ▶
        </span>
      </div>
      <div className="absolute left-[700px] top-[260px] w-[460px]">
        <IntroEyebrow>Made with intention</IntroEyebrow>
        <h1 className="mt-6 whitespace-pre-line text-[52px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950">
          {'A little more\nabout our work.'}
        </h1>
        <p className="mt-6 text-[19px] leading-8 text-slate-600">
          Meet the people and principles behind the blocks. Press play for a short studio introduction.
        </p>
        <div className="mt-8">
          <IntroButton primary>Watch our story</IntroButton>
        </div>
      </div>
    </IntroPreview>
  );
}