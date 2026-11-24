import React from 'react';
import { DraggableBlock } from './header';

interface ArabicPreviewProps {
  blockId: string;
  title: string;
  detail: string;
  children: React.ReactNode;
}

function ArabicPreview({ blockId, title, detail, children }: ArabicPreviewProps) {
  return (
    <DraggableBlock blockId={blockId}>
      <div className="group rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:shadow-slate-200/60">
        <div className="relative mb-3 flex h-[138px] items-center justify-center overflow-hidden rounded-lg bg-[#f4f6fb]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.15]">
            <section className="relative h-[900px] w-[1440px] overflow-hidden rounded-lg border border-slate-200 bg-white">
              {children}
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

const arabicFont = { fontFamily: '"Noto Sans Arabic", Tahoma, Arial, sans-serif' };

export function ArabicIntro() {
  return (
    <ArabicPreview blockId="arabic-intro" title="Arabic introduction" detail="RTL · Arabic typography · 1440 px">
      <div dir="rtl" style={arabicFont} className="absolute right-[136px] top-[235px] w-[720px] text-right">
        <p className="text-[18px] font-semibold tracking-wide text-indigo-600">أفكار واضحة، تجارب أفضل</p>
        <h2 className="mt-7 text-[64px] font-bold leading-[1.25] tracking-tight text-slate-950">نصنع تجارب رقمية<br />تترك أثراً.</h2>
        <p className="mt-6 max-w-[650px] text-[24px] leading-[1.8] text-slate-600">نساعد العلامات التجارية على تحويل أفكارها إلى منتجات رقمية بسيطة وجميلة.</p>
        <span className="mt-8 inline-flex rounded-xl bg-indigo-600 px-8 py-4 text-[18px] font-semibold text-white">اكتشف خدماتنا</span>
      </div>
      <div className="absolute left-[136px] top-[270px] flex h-[320px] w-[420px] items-center justify-center rounded-[32px] bg-gradient-to-br from-indigo-100 to-violet-200">
        <span className="text-[96px] text-indigo-600">✦</span>
      </div>
    </ArabicPreview>
  );
}

export function ArabicServices() {
  return (
    <ArabicPreview blockId="arabic-services" title="Arabic services" detail="RTL · Three service cards · 1440 px">
      <div dir="rtl" style={arabicFont} className="absolute inset-x-[120px] top-[150px] text-right">
        <p className="text-[18px] font-semibold text-indigo-600">ما نقدمه</p>
        <h2 className="mt-4 text-[52px] font-bold leading-[1.3] text-slate-950">خدمات تدعم نمو أعمالك</h2>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {[
            ['٠١', 'استراتيجية العلامة', 'رؤية واضحة وهوية تعبّر عن قيم مشروعك.'],
            ['٠٢', 'تصميم المنتجات', 'تجارب رقمية سهلة الاستخدام ومصممة للناس.'],
            ['٠٣', 'تطوير المواقع', 'مواقع سريعة ومرنة تنمو مع أعمالك.'],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-[18px] font-bold text-indigo-600">{number}</span>
              <h3 className="mt-6 text-[27px] font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-[19px] leading-[1.8] text-slate-600">{description}</p>
              <span className="mt-5 inline-block text-[17px] font-semibold text-indigo-600">اكتشف المزيد ←</span>
            </article>
          ))}
        </div>
      </div>
    </ArabicPreview>
  );
}

export function ArabicContact() {
  return (
    <ArabicPreview blockId="arabic-contact" title="Arabic contact" detail="RTL · Contact details · 1440 px">
      <div className="absolute inset-0 bg-slate-950" />
      <div dir="rtl" style={arabicFont} className="absolute right-[136px] top-[210px] w-[650px] text-right text-white">
        <p className="text-[18px] font-semibold text-indigo-300">لنتحدث عن فكرتك</p>
        <h2 className="mt-5 text-[60px] font-bold leading-[1.3]">مشروعك القادم<br />يبدأ من هنا.</h2>
        <p className="mt-5 text-[22px] leading-[1.8] text-slate-300">أخبرنا بما تخطط له، وسنساعدك على اتخاذ الخطوة التالية.</p>
        <span className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-[18px] font-bold text-slate-950">تواصل معنا ←</span>
      </div>
      <div dir="rtl" style={arabicFont} className="absolute left-[136px] top-[290px] w-[340px] rounded-2xl border border-white/15 bg-white/5 p-8 text-right text-white">
        <p className="text-[16px] text-slate-400">البريد الإلكتروني</p>
        <p className="mt-2 text-[19px]">مرحباً@استوديو.مثال</p>
        <div className="my-6 border-t border-white/15" />
        <p className="text-[16px] text-slate-400">تابعنا</p>
        <p className="mt-2 text-[18px]">إنستغرام · لينكدإن</p>
      </div>
    </ArabicPreview>
  );
}
