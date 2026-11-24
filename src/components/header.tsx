import React from 'react';

interface DraggableBlockProps {
  blockId: string;
  children: React.ReactNode;
}

export function DraggableBlock({ blockId, children }: DraggableBlockProps) {
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e.view) return;

    window.parent.postMessage(
      {
        pluginDrop: {
          clientX: e.clientX,
          clientY: e.clientY,
          items: [
            {
              type: 'application/json',
              data: JSON.stringify({ blockId }),
            },
          ],
        },
      },
      '*'
    );
  };

  return (
    <div
      draggable={true}
      onDragEnd={handleDragEnd}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </div>
  );
}

interface HeaderPreviewProps {
  blockId: string;
  title: string;
  detail: string;
  children: React.ReactNode;
}

function HeaderPreview({ blockId, title, detail, children }: HeaderPreviewProps) {
  return (
    <DraggableBlock blockId={blockId}>
      <div className="group rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:shadow-slate-200/60">
        <div className="relative mb-3 flex h-9 items-center overflow-hidden rounded-lg bg-[#f4f6fb] px-2.5">
          <div className="pointer-events-none absolute left-2.5 top-1/2 w-[1440px] origin-left -translate-y-1/2 scale-[0.15]">
            <header className="h-[88px] w-[1440px] rounded-lg border border-slate-200 bg-white hover:border-blue-500">
              {children}
            </header>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-slate-800">{title}</p>
            <p className="mt-0.5 text-[9px] text-slate-400">{detail}</p>
            <p className="mt-1 text-[8px] leading-relaxed text-indigo-500">
              Content up to 1200 px · Resize the frame to fit your layout
            </p>
          </div>
          <span className="shrink-0 rounded-md bg-indigo-50 px-2 py-1 text-[8px] font-semibold uppercase tracking-wide text-indigo-600 transition-colors group-hover:bg-indigo-100">
            Drag to canvas
          </span>
        </div>
      </div>
    </DraggableBlock>
  );
}

function HeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full w-[1200px] items-center justify-between px-4">
      {children}
    </div>
  );
}

function Brand() {
  return <span className="text-[35px] font-bold leading-[44px] text-black">LOGO</span>;
}

function Navigation({ labels }: { labels: string[] }) {
  return (
    <nav>
      <ul className="flex gap-8 text-[16px] leading-6 text-slate-900">
        {labels.map((label) => (
          <li key={label}><span>{label}</span></li>
        ))}
      </ul>
    </nav>
  );
}

function ActionButton({ children }: { children: string }) {
  return (
    <span className="flex h-[36px] w-[130px] items-center justify-center rounded-[7px] border border-slate-900 text-[14px] text-slate-900">
      {children}
    </span>
  );
}

export function Header1() {
  return (
    <HeaderPreview blockId="header-1" title="Classic navigation" detail="Logo left · Navigation right">
      <HeaderContainer>
        <Brand />
        <Navigation labels={['Home', 'About us', 'Contact', 'News', 'FAQ']} />
      </HeaderContainer>
    </HeaderPreview>
  );
}

export function Header2() {
  return (
    <HeaderPreview blockId="header-2" title="Navigation with CTA" detail="Primary action · Consultation">
      <HeaderContainer>
        <Brand />
        <Navigation labels={['Home', 'About us', 'Contact', 'News', 'FAQ']} />
        <ActionButton>Consultation</ActionButton>
      </HeaderContainer>
    </HeaderPreview>
  );
}

export function Header3() {
  return (
    <HeaderPreview blockId="header-3" title="Centered brand" detail="Split navigation · Balanced layout">
      <div className="mx-auto grid h-full w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-4">
        <div className="justify-self-start">
          <Navigation labels={['Home', 'About us', 'Project']} />
        </div>
        <Brand />
        <div className="justify-self-end">
          <Navigation labels={['Available', 'Contact', 'Blog']} />
        </div>
      </div>
    </HeaderPreview>
  );
}

export function Header4() {
  return (
    <HeaderPreview blockId="header-4" title="Brand with CTA" detail="Compact navigation · See all">
      <HeaderContainer>
        <div className="flex items-center gap-8">
          <Brand />
          <Navigation labels={['Home', 'Contact', 'About us', 'Example', 'Project']} />
        </div>
        <ActionButton>See all</ActionButton>
      </HeaderContainer>
    </HeaderPreview>
  );
}

export function Header5() {
  return (
    <HeaderPreview blockId="header-5" title="Navigation left" detail="Logo right · Balanced spacing">
      <HeaderContainer>
        <Navigation labels={['Home', 'Contact', 'About us', 'Example', 'Project']} />
        <Brand />
      </HeaderContainer>
    </HeaderPreview>
  );
}

export function Header6() {
  return (
    <HeaderPreview blockId="header-6" title="Reverse brand layout" detail="CTA left · Logo right">
      <HeaderContainer>
        <ActionButton>Consultation</ActionButton>
        <Navigation labels={['FAQ', 'Contact', 'News', 'About us', 'Home']} />
        <Brand />
      </HeaderContainer>
    </HeaderPreview>
  );
}