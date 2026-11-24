import React from 'react';
import { DraggableBlock } from './header';

interface FooterPreviewProps {
  blockId: string;
  title: string;
  detail: string;
  height: number;
  children: React.ReactNode;
}

function FooterPreview({ blockId, title, detail, height, children }: FooterPreviewProps) {
  return (
    <DraggableBlock blockId={blockId}>
      <div className="group rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:shadow-slate-200/60">
        <div className="relative mb-3 flex h-[138px] items-center justify-center overflow-hidden rounded-lg bg-[#f4f6fb]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.22]"
            style={{ width: 1440, height }}
          >
            <footer className="relative w-[1440px]" style={{ height }}>{children}</footer>
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

const linkStyle = 'text-[16px] text-slate-500';

export function Footer1() {
  return (
    <FooterPreview blockId="footer-1" title="Minimal legal" detail="Compact · Light · 180 px" height={180}>
      <div className="flex h-full flex-col justify-between border-t border-slate-200 bg-white px-[120px] py-8">
        <div className="flex items-center justify-between">
          <span className="text-[26px] font-bold tracking-tight text-slate-900">STUDIO</span>
          <nav className="flex gap-8">
            <span className={linkStyle}>Work</span><span className={linkStyle}>About</span><span className={linkStyle}>Contact</span>
          </nav>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-5 text-[13px] text-slate-400">
          <span>© 2025 Studio North. All rights reserved.</span><span>Privacy · Terms</span>
        </div>
      </div>
    </FooterPreview>
  );
}

export function Footer2() {
  return (
    <FooterPreview blockId="footer-2" title="Sitemap columns" detail="Dark · Four columns · 380 px" height={380}>
      <div className="flex h-full flex-col justify-between bg-slate-950 px-[120px] py-12 text-white">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div><span className="text-[28px] font-bold">NORTH / STUDIO</span><p className="mt-4 max-w-[250px] text-[16px] leading-7 text-slate-400">Independent ideas for a changing world.</p></div>
          {[
            ['Explore', 'Our work', 'Services', 'Journal'],
            ['Studio', 'About us', 'Careers', 'Contact'],
            ['Follow', 'Instagram', 'LinkedIn', 'Behance'],
          ].map(([heading, ...items]) => (
            <div key={heading}><p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-400">{heading}</p><div className="flex flex-col gap-3 text-[15px] text-slate-200">{items.map((item) => <span key={item}>{item}</span>)}</div></div>
          ))}
        </div>
        <div className="flex justify-between border-t border-white/15 pt-5 text-[13px] text-slate-400"><span>© 2025 North Studio</span><span>Privacy policy · Cookie settings</span></div>
      </div>
    </FooterPreview>
  );
}

export function Footer3() {
  return (
    <FooterPreview blockId="footer-3" title="Newsletter sign-up" detail="Newsletter · Soft color · 320 px" height={320}>
      <div className="flex h-full flex-col justify-between bg-indigo-50 px-[120px] py-10">
        <div className="flex items-center justify-between gap-10">
          <div><p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-indigo-600">The good stuff, occasionally</p><h2 className="mt-3 text-[34px] font-semibold tracking-tight text-slate-900">A little inspiration for your inbox.</h2><p className="mt-2 text-[16px] text-slate-500">Ideas, updates, and useful links. No noise.</p></div>
          <div className="flex h-14 w-[440px] shrink-0 items-center justify-between rounded-xl border border-indigo-100 bg-white px-5"><span className="text-[15px] text-slate-400">Your email address</span><span className="rounded-lg bg-indigo-600 px-5 py-3 text-[14px] font-semibold text-white">Subscribe</span></div>
        </div>
        <div className="flex items-center justify-between border-t border-indigo-100 pt-5 text-[13px] text-slate-500"><span>STUDIO · © 2025</span><span>Instagram · LinkedIn · Contact</span></div>
      </div>
    </FooterPreview>
  );
}

export function Footer4() {
  return (
    <FooterPreview blockId="footer-4" title="Bold call to action" detail="High contrast · CTA · 280 px" height={280}>
      <div className="flex h-full flex-col justify-between bg-indigo-600 px-[120px] py-9 text-white">
        <div className="flex items-center justify-between"><span className="text-[20px] font-bold tracking-wide">MADE / WELL</span><span className="text-[14px] text-indigo-100">Independent creative studio</span></div>
        <div className="flex items-center justify-between gap-8"><h2 className="max-w-[800px] text-[42px] font-semibold leading-tight tracking-tight">Have a good one in mind?<br />Let’s make it real.</h2><span className="rounded-lg bg-white px-7 py-4 text-[15px] font-semibold text-indigo-700">Start a project ↗</span></div>
        <div className="flex justify-between border-t border-white/25 pt-4 text-[13px] text-indigo-100"><span>© 2025 Made Well</span><span>Privacy · Instagram · Email</span></div>
      </div>
    </FooterPreview>
  );
}

export function Footer5() {
  return (
    <FooterPreview blockId="footer-5" title="One-line compact" detail="Slim · Dark · 128 px" height={128}>
      <div className="flex h-full items-center justify-between bg-slate-900 px-[120px] text-white">
        <span className="text-[22px] font-bold">FORM / FIELD</span>
        <nav className="flex gap-7 text-[14px] text-slate-300"><span>Work</span><span>Studio</span><span>Contact</span></nav>
        <span className="text-[13px] text-slate-400">© 2025 · Instagram ↗</span>
      </div>
    </FooterPreview>
  );
}

export function Footer6() {
  return (
    <FooterPreview blockId="footer-6" title="Editorial studio" detail="Oversized type · Warm · 460 px" height={460}>
      <div className="flex h-full flex-col justify-between bg-[#f3eee6] px-[120px] py-12 text-[#28241f]">
        <div className="flex items-start justify-between"><span className="text-[18px] font-bold uppercase tracking-[0.14em]">FIELDNOTES®</span><span className="text-[14px]">A small studio for ambitious ideas</span></div>
        <div className="flex items-end justify-between gap-10"><h2 className="max-w-[700px] text-[60px] font-semibold leading-[0.98] tracking-[-0.04em]">Make room<br />for better.</h2><div className="grid grid-cols-2 gap-x-12 gap-y-4 pb-2 text-[15px]"><span>Selected work</span><span>Instagram ↗</span><span>Our approach</span><span>LinkedIn ↗</span><span>Say hello</span><span>Newsletter</span></div></div>
        <div className="flex justify-between border-t border-[#d6cfc4] pt-5 text-[13px] text-[#777066]"><span>© 2025 Fieldnotes Studio</span><span>Made with care in Copenhagen · Privacy</span></div>
      </div>
    </FooterPreview>
  );
}