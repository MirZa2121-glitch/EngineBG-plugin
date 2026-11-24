figma.showUI(__html__, { width: 420, height: 520, themeColors: true });

interface BlockData {
  blockId?: string;
  title?: string;
  heading?: string;
  description?: string;
}

async function createSection(data: unknown, x: number, y: number): Promise<void> {
  if (!data || typeof data !== 'object') return;

  const blockData = data as BlockData;
  await figma.loadFontAsync({ family: 'Poppins', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Poppins', style: 'Regular' });

  const section = figma.createFrame();
  section.name = blockData.title || 'Section';
  section.x = x;
  section.y = y;
  section.resize(1440, 900);
  section.fills = [{ type: 'SOLID', color: { r: 0.976, g: 0.98, b: 0.988 } }];
  section.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'MIN',
      count: 12,
      sectionSize: 84.6667,
      gutterSize: 24,
      offset: 80,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.08 },
    },
    {
      pattern: 'GRID',
      sectionSize: 8,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.045 },
    },
  ];

  section.layoutMode = 'VERTICAL';
  section.primaryAxisAlignItems = 'MIN';
  section.counterAxisAlignItems = 'MIN';
  section.itemSpacing = 24;
  section.paddingTop = 80;
  section.paddingBottom = 80;
  section.paddingLeft = 80;
  section.paddingRight = 80;

  const titleNode = figma.createText();
  titleNode.fontName = { family: 'Poppins', style: 'Bold' };
  titleNode.characters = blockData.heading || '';
  titleNode.fontSize = 36;
  titleNode.lineHeight = { unit: 'PIXELS', value: 44 };
  titleNode.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.12 } }];

  const descNode = figma.createText();
  descNode.fontName = { family: 'Poppins', style: 'Regular' };
  descNode.characters = blockData.description || '';
  descNode.fontSize = 18;
  descNode.lineHeight = { unit: 'PIXELS', value: 28 };
  descNode.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.43, b: 0.5 } }];

  section.appendChild(titleNode);
  section.appendChild(descNode);
  figma.currentPage.appendChild(section);
  figma.currentPage.selection = [section];
}

function createBrand() {
  const logo = figma.createText();
  logo.fontName = { family: 'Inter', style: 'Bold' };
  logo.characters = 'LOGO';
  logo.fontSize = 35;
  logo.lineHeight = { unit: 'PIXELS', value: 44 };
  logo.fills = [{ type: 'SOLID', color: { r: 0.06, g: 0.09, b: 0.16 } }];
  return logo;
}

function createNavigation(labels: string[], name: string) {
  const menu = figma.createFrame();
  menu.name = name;
  menu.fills = [];
  menu.layoutMode = 'HORIZONTAL';
  menu.primaryAxisSizingMode = 'AUTO';
  menu.counterAxisSizingMode = 'AUTO';
  menu.itemSpacing = 32;

  for (const label of labels) {
    const item = figma.createText();
    item.fontName = { family: 'Inter', style: 'Regular' };
    item.characters = label;
    item.fontSize = 16;
    item.lineHeight = { unit: 'PIXELS', value: 24 };
    item.fills = [{ type: 'SOLID', color: { r: 0.12, g: 0.15, b: 0.22 } }];
    menu.appendChild(item);
  }

  return menu;
}

function createActionButton(label: string) {
  const button = figma.createFrame();
  button.name = `Button / ${label}`;
  button.resize(130, 36);
  button.fills = [];
  button.strokes = [{ type: 'SOLID', color: { r: 0.12, g: 0.15, b: 0.22 } }];
  button.strokeWeight = 1;
  button.cornerRadius = 7;
  button.layoutMode = 'HORIZONTAL';
  button.primaryAxisSizingMode = 'FIXED';
  button.counterAxisSizingMode = 'FIXED';
  button.primaryAxisAlignItems = 'CENTER';
  button.counterAxisAlignItems = 'CENTER';

  const text = figma.createText();
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.characters = label;
  text.fontSize = 14;
  text.lineHeight = { unit: 'PIXELS', value: 20 };
  text.fills = [{ type: 'SOLID', color: { r: 0.12, g: 0.15, b: 0.22 } }];
  button.appendChild(text);
  return button;
}

function createIntroCanvas(blockId: string, name: string, x: number, y: number) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.x = x;
  frame.y = y;
  frame.resize(1440, 900);
  frame.fills = [{ type: 'SOLID', color: { r: 0.976, g: 0.98, b: 0.988 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.886, g: 0.906, b: 0.941 } }];
  frame.strokeWeight = 1;
  frame.cornerRadius = 16;
  frame.setPluginData('blockId', blockId);
  frame.layoutMode = 'VERTICAL';
  frame.primaryAxisSizingMode = 'FIXED';
  frame.counterAxisSizingMode = 'FIXED';
  frame.primaryAxisAlignItems = 'CENTER';
  frame.counterAxisAlignItems = 'CENTER';
  frame.itemSpacing = 0;
  frame.paddingTop = 0;
  frame.paddingBottom = 0;
  frame.paddingLeft = 0;
  frame.paddingRight = 0;

  const container = figma.createFrame();
  container.name = 'Container / max 1200 / px-4';
  container.resize(1200, 900);
  container.fills = [];
  container.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'MIN',
      count: 12,
      sectionSize: 75.3333,
      gutterSize: 24,
      offset: 16,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.08 },
    },
    {
      pattern: 'GRID',
      sectionSize: 8,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.045 },
    },
  ];
  frame.appendChild(container);
  return { frame, container };
}

function createIntroText(
  name: string,
  characters: string,
  fontSize: number,
  lineHeight: number,
  color: RGB,
  width: number,
  align: 'LEFT' | 'CENTER' | 'RIGHT' = 'LEFT',
  style: 'Regular' | 'Bold' = 'Regular',
) {
  const text = figma.createText();
  text.name = name;
  text.fontName = { family: 'Inter', style };
  text.characters = characters;
  text.fontSize = fontSize;
  text.lineHeight = { unit: 'PIXELS', value: lineHeight };
  text.textAlignHorizontal = align;
  text.fills = [{ type: 'SOLID', color }];
  text.resize(width, lineHeight);
  text.textAutoResize = 'HEIGHT';
  return text;
}

function createIntroButton(label: string, primary: boolean) {
  const button = figma.createFrame();
  button.name = `Button / ${label}`;
  button.resize(primary ? 176 : 152, 48);
  button.fills = primary
    ? [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }]
    : [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  button.strokes = primary
    ? []
    : [{ type: 'SOLID', color: { r: 0.82, g: 0.84, b: 0.89 } }];
  button.strokeWeight = 1;
  button.cornerRadius = 8;
  button.layoutMode = 'HORIZONTAL';
  button.primaryAxisSizingMode = 'FIXED';
  button.counterAxisSizingMode = 'FIXED';
  button.primaryAxisAlignItems = 'CENTER';
  button.counterAxisAlignItems = 'CENTER';

  const text = createIntroText(
    'Label',
    label,
    16,
    24,
    primary
      ? { r: 1, g: 1, b: 1 }
      : { r: 0.12, g: 0.15, b: 0.22 },
    primary ? 152 : 128,
    'CENTER',
  );
  button.appendChild(text);
  return button;
}

function createIntroButtonGroup() {
  const buttons = figma.createFrame();
  buttons.name = 'Actions';
  buttons.fills = [];
  buttons.layoutMode = 'HORIZONTAL';
  buttons.primaryAxisSizingMode = 'AUTO';
  buttons.counterAxisSizingMode = 'AUTO';
  buttons.counterAxisAlignItems = 'CENTER';
  buttons.itemSpacing = 12;
  buttons.appendChild(createIntroButton('Explore services', true));
  buttons.appendChild(createIntroButton('View our work', false));
  return buttons;
}

function createIntroContent(
  name: string,
  x: number,
  y: number,
  width: number,
  height: number,
  eyebrow: string,
  heading: string,
  description: string,
  buttonLabel: string,
  fontSize = 56,
) {
  const content = figma.createFrame();
  content.name = name;
  content.x = x;
  content.y = y;
  content.resize(width, height);
  content.fills = [];
  content.layoutMode = 'VERTICAL';
  content.primaryAxisSizingMode = 'FIXED';
  content.counterAxisSizingMode = 'FIXED';
  content.primaryAxisAlignItems = 'MIN';
  content.counterAxisAlignItems = 'MIN';
  content.itemSpacing = 24;
  content.appendChild(createIntroEyebrow(eyebrow));
  content.appendChild(createIntroText(
    'Heading',
    heading,
    fontSize,
    Math.ceil(fontSize * 1.1),
    { r: 0.06, g: 0.09, b: 0.16 },
    width,
    'LEFT',
    'Bold',
  ));
  content.appendChild(createIntroText(
    'Description',
    description,
    19,
    28,
    { r: 0.36, g: 0.39, b: 0.46 },
    width,
  ));
  content.appendChild(createIntroButton(buttonLabel, true));
  return content;
}

function createPanel(name: string, x: number, y: number, width: number, height: number) {
  const panel = figma.createFrame();
  panel.name = name;
  panel.x = x;
  panel.y = y;
  panel.resize(width, height);
  panel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  panel.strokes = [{ type: 'SOLID', color: { r: 0.89, g: 0.91, b: 0.95 } }];
  panel.strokeWeight = 1;
  panel.cornerRadius = 20;
  panel.layoutMode = 'VERTICAL';
  panel.primaryAxisSizingMode = 'FIXED';
  panel.counterAxisSizingMode = 'FIXED';
  panel.primaryAxisAlignItems = 'MIN';
  panel.counterAxisAlignItems = 'MIN';
  panel.itemSpacing = 16;
  panel.paddingTop = 28;
  panel.paddingBottom = 28;
  panel.paddingLeft = 28;
  panel.paddingRight = 28;
  return panel;
}

function createIntroEyebrow(text: string) {
  return createIntroText(
    'Eyebrow',
    text.toUpperCase(),
    14,
    20,
    { r: 0.29, g: 0.34, b: 0.78 },
    500,
    'LEFT',
    'Bold',
  );
}

async function createIntro(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const labels: Record<string, string> = {
    'intro-1': 'Intro 1 / Centered',
    'intro-2': 'Intro 2 / Editorial',
    'intro-3': 'Intro 3 / Video',
    'intro-4': 'Intro 4 / EngineBG',
    'intro-5': 'Intro 5 / Product launch',
    'intro-6': 'Intro 6 / Results',
    'intro-7': 'Intro 7 / Features',
    'intro-8': 'Intro 8 / Story video',
  };
  const label = labels[blockId];
  if (!label) {
    throw new Error(`Unknown intro block: ${blockId}`);
  }
  const { frame, container } = createIntroCanvas(blockId, label, x, y);

  if (blockId === 'intro-1') {
    const content = figma.createFrame();
    content.name = 'Centered content';
    content.x = 16;
    content.y = 190;
    content.resize(1168, 520);
    content.fills = [];
    content.layoutMode = 'VERTICAL';
    content.primaryAxisSizingMode = 'FIXED';
    content.counterAxisSizingMode = 'FIXED';
    content.primaryAxisAlignItems = 'CENTER';
    content.counterAxisAlignItems = 'CENTER';
    content.itemSpacing = 24;
    content.appendChild(createIntroEyebrow('Thoughtful digital design'));
    content.appendChild(createIntroText(
      'Heading',
      'Make your next idea\nimpossible to ignore.',
      64,
      72,
      { r: 0.06, g: 0.09, b: 0.16 },
      800,
      'CENTER',
      'Bold',
    ));
    content.appendChild(createIntroText(
      'Description',
      'Clear strategy, thoughtful design, and a little bit of boldness — all in one place.',
      20,
      32,
      { r: 0.36, g: 0.39, b: 0.46 },
      680,
      'CENTER',
    ));
    content.appendChild(createIntroButtonGroup());
    container.appendChild(content);
  }

  if (blockId === 'intro-2') {
    const content = figma.createFrame();
    content.name = 'Text content';
    content.x = 16;
    content.y = 210;
    content.resize(500, 500);
    content.fills = [];
    content.layoutMode = 'VERTICAL';
    content.primaryAxisSizingMode = 'FIXED';
    content.counterAxisSizingMode = 'FIXED';
    content.primaryAxisAlignItems = 'MIN';
    content.counterAxisAlignItems = 'MIN';
    content.itemSpacing = 24;
    content.appendChild(createIntroEyebrow('Built around your vision'));
    content.appendChild(createIntroText(
      'Heading',
      'Good design\nstarts with a\nclear idea.',
      58,
      64,
      { r: 0.06, g: 0.09, b: 0.16 },
      500,
      'LEFT',
      'Bold',
    ));
    content.appendChild(createIntroText(
      'Description',
      'We turn complex challenges into simple, memorable digital experiences.',
      19,
      28,
      { r: 0.36, g: 0.39, b: 0.46 },
      480,
    ));
    content.appendChild(createIntroButtonGroup());
    container.appendChild(content);

    const featureCard = figma.createFrame();
    featureCard.name = 'What we do';
    featureCard.x = 600;
    featureCard.y = 220;
    featureCard.resize(584, 460);
    featureCard.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    featureCard.strokes = [{ type: 'SOLID', color: { r: 0.89, g: 0.91, b: 0.95 } }];
    featureCard.strokeWeight = 1;
    featureCard.cornerRadius = 24;
    featureCard.layoutMode = 'VERTICAL';
    featureCard.primaryAxisSizingMode = 'FIXED';
    featureCard.counterAxisSizingMode = 'FIXED';
    featureCard.primaryAxisAlignItems = 'MIN';
    featureCard.counterAxisAlignItems = 'MIN';
    featureCard.itemSpacing = 24;
    featureCard.paddingTop = 40;
    featureCard.paddingBottom = 40;
    featureCard.paddingLeft = 40;
    featureCard.paddingRight = 40;
    featureCard.appendChild(createIntroEyebrow('What we do'));
    featureCard.appendChild(createIntroText(
      'Feature heading',
      'Strategy first.\nDetails that matter.',
      38,
      46,
      { r: 0.09, g: 0.12, b: 0.19 },
      480,
      'LEFT',
      'Bold',
    ));
    for (const [number, label] of [
      ['01', 'Brand and direction'],
      ['02', 'Digital products'],
      ['03', 'Content and storytelling'],
    ]) {
      const row = figma.createFrame();
      row.name = `${number} / ${label}`;
      row.fills = [];
      row.layoutMode = 'HORIZONTAL';
      row.primaryAxisSizingMode = 'AUTO';
      row.counterAxisSizingMode = 'AUTO';
      row.counterAxisAlignItems = 'CENTER';
      row.itemSpacing = 20;
      row.appendChild(createIntroText(
        'Number',
        number,
        16,
        24,
        { r: 0.29, g: 0.34, b: 0.78 },
        28,
        'LEFT',
        'Bold',
      ));
      row.appendChild(createIntroText(
        'Feature',
        label,
        18,
        28,
        { r: 0.36, g: 0.39, b: 0.46 },
        420,
      ));
      featureCard.appendChild(row);
    }
    container.appendChild(featureCard);
  }

  if (blockId === 'intro-3') {
    const content = figma.createFrame();
    content.name = 'Video intro content';
    content.x = 16;
    content.y = 250;
    content.resize(420, 480);
    content.fills = [];
    content.layoutMode = 'VERTICAL';
    content.primaryAxisSizingMode = 'FIXED';
    content.counterAxisSizingMode = 'FIXED';
    content.primaryAxisAlignItems = 'MIN';
    content.counterAxisAlignItems = 'MIN';
    content.itemSpacing = 24;
    content.appendChild(createIntroEyebrow('A closer look'));
    content.appendChild(createIntroText(
      'Heading',
      'See what\nwe can make\ntogether.',
      56,
      62,
      { r: 0.06, g: 0.09, b: 0.16 },
      420,
      'LEFT',
      'Bold',
    ));
    content.appendChild(createIntroText(
      'Description',
      'A short introduction to our process, people, and the details behind the work.',
      19,
      28,
      { r: 0.36, g: 0.39, b: 0.46 },
      400,
    ));
    const playButton = createIntroButton('Play the film', true);
    playButton.resize(160, 48);
    content.appendChild(playButton);
    container.appendChild(content);

    const video = figma.createFrame();
    video.name = 'Video preview / replace with media';
    video.x = 500;
    video.y = 220;
    video.resize(684, 460);
    video.fills = [{ type: 'SOLID', color: { r: 0.08, g: 0.1, b: 0.17 } }];
    video.strokes = [{ type: 'SOLID', color: { r: 0.89, g: 0.91, b: 0.95 } }];
    video.strokeWeight = 1;
    video.cornerRadius = 24;

    const videoLabel = createIntroText(
      'Video label',
      'VIDEO PREVIEW',
      12,
      18,
      { r: 1, g: 1, b: 1 },
      180,
      'LEFT',
      'Bold',
    );
    videoLabel.x = 32;
    videoLabel.y = 32;
    video.appendChild(videoLabel);

    const duration = createIntroText(
      'Duration',
      '02:34',
      13,
      20,
      { r: 1, g: 1, b: 1 },
      60,
      'RIGHT',
    );
    duration.x = 592;
    duration.y = 408;
    video.appendChild(duration);

    const playCircle = figma.createEllipse();
    playCircle.name = 'Play button';
    playCircle.resize(76, 76);
    playCircle.x = 304;
    playCircle.y = 192;
    playCircle.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    video.appendChild(playCircle);

    const playIcon = figma.createPolygon();
    playIcon.name = 'Play icon';
    playIcon.pointCount = 3;
    playIcon.resize(22, 26);
    playIcon.x = 333;
    playIcon.y = 217;
    playIcon.rotation = 90;
    playIcon.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
    video.appendChild(playIcon);
    container.appendChild(video);
  }

  if (blockId === 'intro-4') {
    container.appendChild(createIntroContent(
      'EngineBG introduction',
      16,
      250,
      520,
      460,
      'What is EngineBG?',
      'Build better\nwith blocks.',
      'Engine Block Grid brings a flexible system of reusable pieces to your Figma canvas. Imagine what you can create with every block.',
      'Explore blocks',
    ));

    const libraryCard = createPanel('Block library', 700, 250, 460, 330);
    libraryCard.appendChild(createIntroEyebrow('Engine Block Grid'));
    libraryCard.appendChild(createIntroText(
      'Library heading',
      'A library for every stage.',
      28,
      36,
      { r: 0.09, g: 0.12, b: 0.19 },
      400,
      'LEFT',
      'Bold',
    ));
    for (const [number, label] of [
      ['01', 'Headers'],
      ['02', 'Intro blocks'],
      ['03', 'Services'],
    ]) {
      const row = figma.createFrame();
      row.name = `${number} / ${label}`;
      row.fills = [];
      row.layoutMode = 'HORIZONTAL';
      row.primaryAxisSizingMode = 'AUTO';
      row.counterAxisSizingMode = 'AUTO';
      row.counterAxisAlignItems = 'CENTER';
      row.itemSpacing = 16;
      row.appendChild(createIntroText(
        'Number',
        number,
        14,
        20,
        { r: 0.29, g: 0.34, b: 0.78 },
        28,
        'LEFT',
        'Bold',
      ));
      row.appendChild(createIntroText(
        'Block type',
        label,
        17,
        24,
        { r: 0.2, g: 0.23, b: 0.3 },
        320,
      ));
      libraryCard.appendChild(row);
    }
    container.appendChild(libraryCard);
  }

  if (blockId === 'intro-5') {
    const content = figma.createFrame();
    content.name = 'Launch announcement';
    content.x = 16;
    content.y = 190;
    content.resize(1168, 520);
    content.fills = [];
    content.layoutMode = 'VERTICAL';
    content.primaryAxisSizingMode = 'FIXED';
    content.counterAxisSizingMode = 'FIXED';
    content.primaryAxisAlignItems = 'CENTER';
    content.counterAxisAlignItems = 'CENTER';
    content.itemSpacing = 28;
    content.appendChild(createIntroText(
      'Launch badge',
      'INTRODUCING ENGINEBG 2.0',
      14,
      20,
      { r: 0.29, g: 0.34, b: 0.78 },
      420,
      'CENTER',
      'Bold',
    ));
    content.appendChild(createIntroText(
      'Heading',
      'A better way to\nbuild your next idea.',
      68,
      72,
      { r: 0.06, g: 0.09, b: 0.16 },
      840,
      'CENTER',
      'Bold',
    ));
    content.appendChild(createIntroText(
      'Description',
      'A thoughtful library of ready-to-use blocks, built on a clear and consistent grid.',
      20,
      32,
      { r: 0.36, g: 0.39, b: 0.46 },
      680,
      'CENTER',
    ));
    content.appendChild(createIntroButton('Discover what is new', true));
    container.appendChild(content);
  }

  if (blockId === 'intro-6') {
    container.appendChild(createIntroContent(
      'Results introduction',
      16,
      250,
      500,
      480,
      'Design that delivers',
      'Make the work\nspeak for itself.',
      'Give your next project a stronger foundation with a system that helps good ideas move faster.',
      'See the results',
    ));

    const stats = [
      ['95%', 'Client satisfaction'],
      ['2x', 'Faster first drafts'],
      ['48', 'Ready-to-use blocks'],
      ['4.9/5', 'Average project rating'],
    ];
    for (let index = 0; index < stats.length; index += 1) {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const card = createPanel(
        `Metric / ${stats[index][1]}`,
        600 + column * 304,
        250 + row * 176,
        280,
        160,
      );
      card.paddingTop = 20;
      card.paddingBottom = 20;
      card.paddingLeft = 24;
      card.paddingRight = 24;
      card.itemSpacing = 24;
      card.appendChild(createIntroText(
        'Metric label',
        stats[index][1],
        14,
        20,
        { r: 0.45, g: 0.48, b: 0.55 },
        232,
      ));
      card.appendChild(createIntroText(
        'Metric',
        stats[index][0],
        40,
        48,
        { r: 0.09, g: 0.12, b: 0.19 },
        232,
        'LEFT',
        'Bold',
      ));
      container.appendChild(card);
    }
  }

  if (blockId === 'intro-7') {
    const eyebrow = createIntroEyebrow('Everything in its place');
    eyebrow.x = 16;
    eyebrow.y = 160;
    container.appendChild(eyebrow);
    const heading = createIntroText(
      'Heading',
      'A clear path from idea to launch.',
      56,
      64,
      { r: 0.06, g: 0.09, b: 0.16 },
      1168,
      'LEFT',
      'Bold',
    );
    heading.x = 16;
    heading.y = 205;
    container.appendChild(heading);
    const description = createIntroText(
      'Description',
      'Start with a flexible foundation, then shape each detail to fit your project.',
      19,
      28,
      { r: 0.36, g: 0.39, b: 0.46 },
      700,
    );
    description.x = 16;
    description.y = 282;
    container.appendChild(description);

    const features = [
      ['01', 'Start with structure', 'Build on a reliable layout grid and consistent spacing.'],
      ['02', 'Make it your own', 'Adapt each block to fit your brand, content, and goals.'],
      ['03', 'Move with confidence', 'Keep the design clear as your project grows.'],
    ];
    for (let index = 0; index < features.length; index += 1) {
      const card = createPanel(
        `Feature / ${features[index][1]}`,
        16 + index * 400,
        360,
        368,
        300,
      );
      card.appendChild(createIntroText(
        'Number',
        features[index][0],
        14,
        20,
        { r: 0.29, g: 0.34, b: 0.78 },
        300,
        'LEFT',
        'Bold',
      ));
      card.appendChild(createIntroText(
        'Feature title',
        features[index][1],
        22,
        28,
        { r: 0.09, g: 0.12, b: 0.19 },
        300,
        'LEFT',
        'Bold',
      ));
      card.appendChild(createIntroText(
        'Feature description',
        features[index][2],
        16,
        24,
        { r: 0.36, g: 0.39, b: 0.46 },
        300,
      ));
      container.appendChild(card);
    }
  }

  if (blockId === 'intro-8') {
    container.appendChild(createIntroContent(
      'Story content',
      700,
      260,
      460,
      460,
      'Made with intention',
      'A little more\nabout our work.',
      'Meet the people and principles behind the blocks. Press play for a short studio introduction.',
      'Watch our story',
      52,
    ));

    const video = figma.createFrame();
    video.name = 'Story video preview / replace with media';
    video.x = 16;
    video.y = 250;
    video.resize(600, 400);
    video.fills = [{ type: 'SOLID', color: { r: 0.08, g: 0.1, b: 0.17 } }];
    video.strokes = [{ type: 'SOLID', color: { r: 0.89, g: 0.91, b: 0.95 } }];
    video.strokeWeight = 1;
    video.cornerRadius = 24;

    const label = createIntroText(
      'Video label',
      'OUR STORY',
      12,
      18,
      { r: 1, g: 1, b: 1 },
      160,
      'LEFT',
      'Bold',
    );
    label.x = 28;
    label.y = 28;
    video.appendChild(label);

    const playCircle = figma.createEllipse();
    playCircle.name = 'Play button';
    playCircle.resize(72, 72);
    playCircle.x = 264;
    playCircle.y = 164;
    playCircle.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    video.appendChild(playCircle);

    const playIcon = figma.createPolygon();
    playIcon.name = 'Play icon';
    playIcon.pointCount = 3;
    playIcon.resize(22, 26);
    playIcon.x = 291;
    playIcon.y = 187;
    playIcon.rotation = 90;
    playIcon.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
    video.appendChild(playIcon);
    container.appendChild(video);
  }

  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

async function createService(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const names: Record<string, string> = {
    'service-1': 'Services 1 / Cards',
    'service-2': 'Services 2 / List',
    'service-3': 'Services 3 / Featured',
  };
  const { frame, container } = createIntroCanvas(blockId, names[blockId], x, y);

  if (blockId === 'service-1') {
    const eyebrow = createIntroEyebrow('What we do');
    eyebrow.x = 16;
    eyebrow.y = 150;
    container.appendChild(eyebrow);

    const heading = createIntroText(
      'Heading',
      'Services for your next big idea.',
      56,
      64,
      { r: 0.06, g: 0.09, b: 0.16 },
      1168,
      'LEFT',
      'Bold',
    );
    heading.x = 16;
    heading.y = 200;
    container.appendChild(heading);

    const services = [
      ['01', 'Brand strategy', 'Positioning, identity, and a clear direction for your brand.'],
      ['02', 'Product design', 'Thoughtful digital experiences shaped around real people.'],
      ['03', 'Web development', 'Fast, accessible websites made to grow with your business.'],
    ];
    for (let index = 0; index < services.length; index += 1) {
      const card = createPanel(`Service / ${services[index][1]}`, 16 + index * 400, 320, 368, 360);
      card.appendChild(createIntroText(
        'Number',
        services[index][0],
        14,
        20,
        { r: 0.29, g: 0.34, b: 0.78 },
        300,
        'LEFT',
        'Bold',
      ));
      card.appendChild(createIntroText(
        'Service title',
        services[index][1],
        24,
        30,
        { r: 0.09, g: 0.12, b: 0.19 },
        300,
        'LEFT',
        'Bold',
      ));
      card.appendChild(createIntroText(
        'Service description',
        services[index][2],
        16,
        24,
        { r: 0.36, g: 0.39, b: 0.46 },
        300,
      ));
      card.appendChild(createIntroText(
        'Service link',
        'Explore service  ↗',
        15,
        22,
        { r: 0.29, g: 0.34, b: 0.78 },
        300,
        'LEFT',
        'Bold',
      ));
      container.appendChild(card);
    }
  }

  if (blockId === 'service-2') {
    const eyebrow = createIntroEyebrow('Our capabilities');
    eyebrow.x = 16;
    eyebrow.y = 140;
    container.appendChild(eyebrow);

    const heading = createIntroText(
      'Heading',
      'One team, from start to finish.',
      56,
      64,
      { r: 0.06, g: 0.09, b: 0.16 },
      1168,
      'LEFT',
      'Bold',
    );
    heading.x = 16;
    heading.y = 188;
    container.appendChild(heading);

    const services = [
      ['01', 'Strategy & research', 'Find the right opportunity and define what matters.'],
      ['02', 'Brand & identity', 'Build a distinctive system your team can use everywhere.'],
      ['03', 'Digital experiences', 'Design clear products and websites people love to use.'],
      ['04', 'Build & support', 'Launch with confidence and keep improving over time.'],
    ];
    for (let index = 0; index < services.length; index += 1) {
      const row = figma.createFrame();
      row.name = `${services[index][0]} / ${services[index][1]}`;
      row.x = 16;
      row.y = 300 + index * 100;
      row.resize(1168, 88);
      row.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      row.strokes = [{ type: 'SOLID', color: { r: 0.89, g: 0.91, b: 0.95 } }];
      row.strokeWeight = 1;
      row.cornerRadius = 12;
      row.layoutMode = 'HORIZONTAL';
      row.primaryAxisSizingMode = 'FIXED';
      row.counterAxisSizingMode = 'FIXED';
      row.primaryAxisAlignItems = 'SPACE_BETWEEN';
      row.counterAxisAlignItems = 'CENTER';
      row.paddingLeft = 24;
      row.paddingRight = 24;
      row.appendChild(createIntroText(
        'Number',
        services[index][0],
        16,
        24,
        { r: 0.29, g: 0.34, b: 0.78 },
        32,
        'LEFT',
        'Bold',
      ));
      row.appendChild(createIntroText(
        'Service title',
        services[index][1],
        20,
        28,
        { r: 0.09, g: 0.12, b: 0.19 },
        280,
        'LEFT',
        'Bold',
      ));
      row.appendChild(createIntroText(
        'Service description',
        services[index][2],
        16,
        24,
        { r: 0.4, g: 0.43, b: 0.5 },
        500,
      ));
      row.appendChild(createIntroText(
        'Link',
        '↗',
        20,
        24,
        { r: 0.29, g: 0.34, b: 0.78 },
        24,
        'RIGHT',
      ));
      container.appendChild(row);
    }
  }

  if (blockId === 'service-3') {
    container.appendChild(createIntroContent(
      'Featured service content',
      16,
      230,
      480,
      500,
      'Featured service',
      'A brand people\nremember.',
      'A complete identity system to help your business stand out and stay consistent.',
      'Explore brand strategy',
    ));

    const featured = createPanel('Included in the service', 580, 220, 604, 460);
    featured.paddingTop = 36;
    featured.paddingBottom = 36;
    featured.paddingLeft = 36;
    featured.paddingRight = 36;
    featured.itemSpacing = 24;
    featured.appendChild(createIntroEyebrow('Included'));
    featured.appendChild(createIntroText(
      'Service promise',
      'A system that works everywhere.',
      34,
      42,
      { r: 0.09, g: 0.12, b: 0.19 },
      500,
      'LEFT',
      'Bold',
    ));
    for (const label of [
      'Visual identity and guidelines',
      'Typography and color system',
      'Reusable design components',
    ]) {
      featured.appendChild(createIntroText(
        'Deliverable',
        `✓  ${label}`,
        17,
        26,
        { r: 0.36, g: 0.39, b: 0.46 },
        500,
      ));
    }
    container.appendChild(featured);
  }

  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

function createCardGrid(container: FrameNode, y: number, height: number) {
  const grid = figma.createFrame();
  grid.name = 'Cards / Responsive wrap grid';
  grid.x = 16;
  grid.y = y;
  grid.resize(1168, height);
  grid.fills = [];
  grid.layoutMode = 'HORIZONTAL';
  grid.primaryAxisSizingMode = 'FIXED';
  grid.counterAxisSizingMode = 'FIXED';
  grid.primaryAxisAlignItems = 'MIN';
  grid.counterAxisAlignItems = 'MIN';
  grid.layoutWrap = 'WRAP';
  grid.itemSpacing = 24;
  grid.counterAxisSpacing = 24;
  container.appendChild(grid);
  return grid;
}

function createResponsiveCard(name: string, width: number, height: number, dark = false) {
  const card = createPanel(name, 0, 0, width, height);
  card.layoutSizingHorizontal = 'FIXED';
  card.layoutSizingVertical = 'FIXED';
  if (dark) {
    card.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
    card.strokes = [];
  }
  return card;
}

function createCardHeader(container: FrameNode, eyebrow: string, heading: string, description: string) {
  const header = figma.createFrame();
  header.name = 'Section heading';
  header.x = 16;
  header.y = 120;
  header.resize(1168, 190);
  header.fills = [];
  header.layoutMode = 'VERTICAL';
  header.primaryAxisSizingMode = 'FIXED';
  header.counterAxisSizingMode = 'FIXED';
  header.primaryAxisAlignItems = 'MIN';
  header.counterAxisAlignItems = 'MIN';
  header.itemSpacing = 12;
  header.appendChild(createIntroEyebrow(eyebrow));
  header.appendChild(createIntroText(
    'Heading',
    heading,
    52,
    60,
    { r: 0.06, g: 0.09, b: 0.16 },
    1168,
    'LEFT',
    'Bold',
  ));
  header.appendChild(createIntroText(
    'Description',
    description,
    18,
    28,
    { r: 0.36, g: 0.39, b: 0.46 },
    900,
  ));
  container.appendChild(header);
}

async function createCards(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const names: Record<string, string> = {
    'cards-1': 'Cards 1 / Features',
    'cards-2': 'Cards 2 / Portfolio',
    'cards-3': 'Cards 3 / Pricing',
    'cards-4': 'Cards 4 / Testimonials',
    'cards-5': 'Cards 5 / Team',
  };
  const name = names[blockId];
  if (!name) {
    throw new Error(`Unknown card block: ${blockId}`);
  }
  const { frame, container } = createIntroCanvas(blockId, name, x, y);

  if (blockId === 'cards-1') {
    createCardHeader(
      container,
      'What we do',
      'Simple cards, clear value.',
      'A flexible foundation for presenting key benefits at a glance.',
    );
    const grid = createCardGrid(container, 350, 420);
    const items = [
      ['01', 'Thoughtful strategy', 'Get a clear direction and a strong foundation for the work ahead.'],
      ['02', 'Useful design', 'Make every interaction feel simple, clear, and considered.'],
      ['03', 'Reliable delivery', 'Turn the final design into a product ready for real people.'],
    ];
    for (const [number, title, description] of items) {
      const card = createResponsiveCard(`Feature / ${title}`, 368, 340);
      card.appendChild(createIntroText('Number', number, 14, 20, { r: 0.29, g: 0.34, b: 0.78 }, 312, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Title', title, 23, 30, { r: 0.09, g: 0.12, b: 0.19 }, 312, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Description', description, 16, 24, { r: 0.36, g: 0.39, b: 0.46 }, 312));
      card.appendChild(createIntroText('Link', 'Learn more  ↗', 15, 22, { r: 0.29, g: 0.34, b: 0.78 }, 312, 'LEFT', 'Bold'));
      grid.appendChild(card);
    }
  }

  if (blockId === 'cards-2') {
    createCardHeader(
      container,
      'Selected work',
      'A few things we’ve made.',
      'Image-led project cards for portfolios, case studies, and editorial grids.',
    );
    const grid = createCardGrid(container, 350, 440);
    const items = [
      ['01 / 03', 'Atelier No. 8', 'Brand identity · 2025', { r: 0.91, g: 0.72, b: 0.7 }],
      ['02 / 03', 'Common Ground', 'Digital product · 2024', { r: 0.65, g: 0.83, b: 0.78 }],
      ['03 / 03', 'Sunday Objects', 'Art direction · 2024', { r: 0.94, g: 0.79, b: 0.59 }],
    ] as const;
    for (const [number, title, detail, color] of items) {
      const card = createResponsiveCard(`Project / ${title}`, 368, 360);
      const image = figma.createFrame();
      image.name = 'Image placeholder / replace with artwork';
      image.resize(312, 190);
      image.fills = [{ type: 'SOLID', color }];
      image.cornerRadius = 12;
      image.layoutMode = 'HORIZONTAL';
      image.primaryAxisSizingMode = 'FIXED';
      image.counterAxisSizingMode = 'FIXED';
      image.primaryAxisAlignItems = 'CENTER';
      image.counterAxisAlignItems = 'CENTER';
      image.appendChild(createIntroText('Artwork label', 'PROJECT IMAGE', 12, 18, { r: 0.2, g: 0.23, b: 0.3 }, 180, 'CENTER', 'Bold'));
      card.appendChild(image);
      card.appendChild(createIntroText('Index', number, 13, 18, { r: 0.45, g: 0.48, b: 0.55 }, 312));
      card.appendChild(createIntroText('Project title', title, 22, 28, { r: 0.09, g: 0.12, b: 0.19 }, 312, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Project category', detail, 15, 22, { r: 0.45, g: 0.48, b: 0.55 }, 312));
      grid.appendChild(card);
    }
  }

  if (blockId === 'cards-3') {
    createCardHeader(
      container,
      'Straightforward pricing',
      'Pick the right starting point.',
      'A clear plan comparison with one option visually highlighted.',
    );
    const grid = createCardGrid(container, 350, 460);
    const plans = [
      ['Starter', '$29', 'For small teams getting started.', ['Core components', 'Email support']],
      ['Studio', '$79', 'For teams ready to do more.', ['Advanced blocks', 'Priority support']],
      ['Scale', '$149', 'For growing teams and systems.', ['Team libraries', 'Dedicated help']],
    ] as const;
    for (let index = 0; index < plans.length; index += 1) {
      const [plan, price, description, features] = plans[index];
      const featured = index === 1;
      const card = createResponsiveCard(`Plan / ${plan}`, 368, 390, featured);
      const textColor = featured ? { r: 1, g: 1, b: 1 } : { r: 0.09, g: 0.12, b: 0.19 };
      const mutedColor = featured ? { r: 0.87, g: 0.88, b: 0.97 } : { r: 0.4, g: 0.43, b: 0.5 };
      card.appendChild(createIntroText('Plan', plan, 16, 24, mutedColor, 312, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Price', `${price} / month`, 38, 48, textColor, 312, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Description', description, 15, 22, mutedColor, 312));
      card.appendChild(createIntroText('Included', 'Includes', 14, 20, mutedColor, 312, 'LEFT', 'Bold'));
      for (const feature of features) {
        card.appendChild(createIntroText('Plan feature', `✓  ${feature}`, 15, 22, textColor, 312));
      }
      const action = createIntroButton(`Choose ${plan}`, !featured);
      if (featured) {
        action.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        const label = action.children[0];
        if (label.type === 'TEXT') {
          label.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
        }
      }
      card.appendChild(action);
      grid.appendChild(card);
    }
  }

  if (blockId === 'cards-4') {
    createCardHeader(
      container,
      'Kind words',
      'Good work, good people.',
      'Quote-forward cards for customer stories and social proof.',
    );
    const grid = createCardGrid(container, 350, 420);
    const testimonials = [
      ['The team brought clarity to a complicated launch. Every detail felt considered, and the result made an immediate difference.', 'Maya Chen', 'Founder, Common Ground', 'MC'],
      ['A rare mix of thoughtful design and practical delivery. We left with a system our whole team can use confidently.', 'Jonas Reed', 'Product lead, Northstar', 'JR'],
    ];
    for (const [quote, name, role, initials] of testimonials) {
      const card = createResponsiveCard(`Testimonial / ${name}`, 572, 300);
      card.appendChild(createIntroText('Quote mark', '“', 52, 58, { r: 0.29, g: 0.34, b: 0.78 }, 500, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Quote', quote, 20, 30, { r: 0.2, g: 0.23, b: 0.3 }, 516));
      const attribution = figma.createFrame();
      attribution.name = 'Customer';
      attribution.resize(516, 56);
      attribution.fills = [];
      attribution.layoutMode = 'HORIZONTAL';
      attribution.primaryAxisSizingMode = 'FIXED';
      attribution.counterAxisSizingMode = 'FIXED';
      attribution.counterAxisAlignItems = 'CENTER';
      attribution.itemSpacing = 16;
      attribution.appendChild(createIntroText('Initials', initials, 14, 20, { r: 0.29, g: 0.34, b: 0.78 }, 52, 'CENTER', 'Bold'));
      const attributionText = figma.createFrame();
      attributionText.name = 'Name and role';
      attributionText.resize(440, 52);
      attributionText.fills = [];
      attributionText.layoutMode = 'VERTICAL';
      attributionText.primaryAxisSizingMode = 'FIXED';
      attributionText.counterAxisSizingMode = 'FIXED';
      attributionText.itemSpacing = 4;
      attributionText.appendChild(createIntroText('Name', name, 15, 20, { r: 0.09, g: 0.12, b: 0.19 }, 440, 'LEFT', 'Bold'));
      attributionText.appendChild(createIntroText('Role', role, 13, 18, { r: 0.45, g: 0.48, b: 0.55 }, 440));
      attribution.appendChild(attributionText);
      card.appendChild(attribution);
      grid.appendChild(card);
    }
  }

  if (blockId === 'cards-5') {
    createCardHeader(
      container,
      'Meet the team',
      'Small team. Big care.',
      'A compact profile grid for introducing the people behind the work.',
    );
    const grid = createCardGrid(container, 350, 420);
    const people = [
      ['AL', 'Alex Lee', 'Creative director', { r: 0.78, g: 0.75, b: 0.94 }],
      ['SM', 'Sam Morgan', 'Product designer', { r: 0.94, g: 0.77, b: 0.72 }],
      ['JR', 'Jamie Rivera', 'Design engineer', { r: 0.69, g: 0.86, b: 0.84 }],
      ['TK', 'Taylor Kim', 'Project lead', { r: 0.94, g: 0.83, b: 0.63 }],
    ] as const;
    for (const [initials, name, role, color] of people) {
      const card = createResponsiveCard(`Team member / ${name}`, 268, 330);
      const avatar = figma.createEllipse();
      avatar.name = `Avatar / ${initials}`;
      avatar.resize(88, 88);
      avatar.fills = [{ type: 'SOLID', color }];
      card.appendChild(avatar);
      card.appendChild(createIntroText('Name', name, 19, 26, { r: 0.09, g: 0.12, b: 0.19 }, 212, 'LEFT', 'Bold'));
      card.appendChild(createIntroText('Role', role, 14, 20, { r: 0.45, g: 0.48, b: 0.55 }, 212));
      card.appendChild(createIntroText('Social link', 'LinkedIn  ↗', 14, 20, { r: 0.29, g: 0.34, b: 0.78 }, 212, 'LEFT', 'Bold'));
      grid.appendChild(card);
    }
  }

  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

function createStandaloneFrame(blockId: string, name: string, height: number, background: RGB) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.x = 0;
  frame.y = 0;
  frame.resize(1440, height);
  frame.fills = [{ type: 'SOLID', color: background }];
  frame.setPluginData('blockId', blockId);
  frame.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'MIN',
      count: 12,
      sectionSize: 78,
      gutterSize: 24,
      offset: 120,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.08 },
    },
    {
      pattern: 'GRID',
      sectionSize: 8,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.045 },
    },
  ];
  return frame;
}

function appendStandaloneText(
  parent: FrameNode,
  name: string,
  characters: string,
  x: number,
  y: number,
  width: number,
  fontSize: number,
  color: RGB,
  style: 'Regular' | 'Bold' = 'Regular',
  align: 'LEFT' | 'CENTER' | 'RIGHT' = 'LEFT',
) {
  const text = createIntroText(
    name,
    characters,
    fontSize,
    Math.ceil(fontSize * 1.4),
    color,
    width,
    align,
    style,
  );
  text.x = x;
  text.y = y;
  parent.appendChild(text);
  return text;
}

function appendFooterRule(parent: FrameNode, y: number, color: RGB) {
  const rule = figma.createFrame();
  rule.name = 'Divider';
  rule.x = 120;
  rule.y = y;
  rule.resize(1200, 1);
  rule.fills = [{ type: 'SOLID', color }];
  parent.appendChild(rule);
}

async function createFooter(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const names: Record<string, string> = {
    'footer-1': 'Footer 1 / Minimal legal',
    'footer-2': 'Footer 2 / Sitemap columns',
    'footer-3': 'Footer 3 / Newsletter',
    'footer-4': 'Footer 4 / Call to action',
    'footer-5': 'Footer 5 / Compact line',
    'footer-6': 'Footer 6 / Editorial',
  };
  const heights: Record<string, number> = {
    'footer-1': 180,
    'footer-2': 380,
    'footer-3': 320,
    'footer-4': 280,
    'footer-5': 128,
    'footer-6': 460,
  };
  const backgrounds: Record<string, RGB> = {
    'footer-1': { r: 1, g: 1, b: 1 },
    'footer-2': { r: 0.02, g: 0.04, b: 0.09 },
    'footer-3': { r: 0.93, g: 0.94, b: 1 },
    'footer-4': { r: 0.29, g: 0.34, b: 0.78 },
    'footer-5': { r: 0.06, g: 0.09, b: 0.16 },
    'footer-6': { r: 0.953, g: 0.933, b: 0.902 },
  };
  const frame = createStandaloneFrame(blockId, names[blockId], heights[blockId], backgrounds[blockId]);
  frame.x = x;
  frame.y = y;

  if (blockId === 'footer-1') {
    appendFooterRule(frame, 0, { r: 0.89, g: 0.91, b: 0.95 });
    appendStandaloneText(frame, 'Wordmark', 'STUDIO', 120, 30, 240, 32, { r: 0.06, g: 0.09, b: 0.16 }, 'Bold');
    appendStandaloneText(frame, 'Navigation', 'Work     About     Contact', 840, 38, 480, 18, { r: 0.36, g: 0.39, b: 0.46 }, 'Regular', 'RIGHT');
    appendFooterRule(frame, 112, { r: 0.93, g: 0.94, b: 0.96 });
    appendStandaloneText(frame, 'Copyright', '© 2025 Studio North. All rights reserved.', 120, 132, 600, 14, { r: 0.58, g: 0.61, b: 0.67 });
    appendStandaloneText(frame, 'Legal links', 'Privacy  ·  Terms', 900, 132, 420, 14, { r: 0.58, g: 0.61, b: 0.67 }, 'Regular', 'RIGHT');
  }

  if (blockId === 'footer-2') {
    appendStandaloneText(frame, 'Wordmark', 'NORTH / STUDIO', 120, 46, 360, 34, { r: 1, g: 1, b: 1 }, 'Bold');
    appendStandaloneText(frame, 'Description', 'Independent ideas for a changing world.', 120, 100, 290, 22, { r: 0.62, g: 0.66, b: 0.72 });
    const columns = [
      ['Explore', 'Our work', 'Services', 'Journal'],
      ['Studio', 'About us', 'Careers', 'Contact'],
      ['Follow', 'Instagram', 'LinkedIn', 'Behance'],
    ];
    for (let column = 0; column < columns.length; column += 1) {
      const left = 560 + column * 260;
      appendStandaloneText(frame, 'Column heading', columns[column][0].toUpperCase(), left, 54, 220, 14, { r: 0.62, g: 0.66, b: 0.72 }, 'Bold');
      for (let row = 1; row < columns[column].length; row += 1) {
        appendStandaloneText(frame, 'Navigation item', columns[column][row], left, 92 + (row - 1) * 38, 220, 16, { r: 0.89, g: 0.9, b: 0.93 });
      }
    }
    appendFooterRule(frame, 316, { r: 0.2, g: 0.22, b: 0.27 });
    appendStandaloneText(frame, 'Copyright', '© 2025 North Studio', 120, 340, 420, 14, { r: 0.62, g: 0.66, b: 0.72 });
    appendStandaloneText(frame, 'Legal links', 'Privacy policy  ·  Cookie settings', 760, 340, 560, 14, { r: 0.62, g: 0.66, b: 0.72 }, 'Regular', 'RIGHT');
  }

  if (blockId === 'footer-3') {
    appendStandaloneText(frame, 'Eyebrow', 'THE GOOD STUFF, OCCASIONALLY', 120, 42, 600, 18, { r: 0.29, g: 0.34, b: 0.78 }, 'Bold');
    appendStandaloneText(frame, 'Heading', 'A little inspiration for your inbox.', 120, 78, 650, 42, { r: 0.06, g: 0.09, b: 0.16 }, 'Bold');
    appendStandaloneText(frame, 'Description', 'Ideas, updates, and useful links. No noise.', 120, 132, 600, 22, { r: 0.4, g: 0.43, b: 0.5 });
    const input = figma.createFrame();
    input.name = 'Email subscription';
    input.x = 790;
    input.y = 90;
    input.resize(530, 56);
    input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    input.strokes = [{ type: 'SOLID', color: { r: 0.84, g: 0.86, b: 0.94 } }];
    input.strokeWeight = 1;
    input.cornerRadius = 12;
    input.layoutMode = 'HORIZONTAL';
    input.primaryAxisAlignItems = 'SPACE_BETWEEN';
    input.counterAxisAlignItems = 'CENTER';
    input.paddingLeft = 18;
    input.paddingRight = 8;
    input.appendChild(createIntroText('Email placeholder', 'Your email address', 15, 22, { r: 0.58, g: 0.61, b: 0.67 }, 260));
    const subscribe = createIntroButton('Subscribe', true);
    input.appendChild(subscribe);
    frame.appendChild(input);
    appendFooterRule(frame, 244, { r: 0.84, g: 0.86, b: 0.94 });
    appendStandaloneText(frame, 'Brand and copyright', 'STUDIO  ·  © 2025', 120, 270, 420, 14, { r: 0.4, g: 0.43, b: 0.5 });
    appendStandaloneText(frame, 'Social links', 'Instagram     LinkedIn     Contact', 760, 270, 560, 14, { r: 0.4, g: 0.43, b: 0.5 }, 'Regular', 'RIGHT');
  }

  if (blockId === 'footer-4') {
    appendStandaloneText(frame, 'Wordmark', 'MADE / WELL', 120, 28, 400, 26, { r: 1, g: 1, b: 1 }, 'Bold');
    appendStandaloneText(frame, 'Studio descriptor', 'Independent creative studio', 840, 36, 480, 18, { r: 0.87, g: 0.88, b: 0.97 }, 'Regular', 'RIGHT');
    appendStandaloneText(frame, 'Call to action', 'Have a good one in mind?\nLet’s make it real.', 120, 82, 760, 48, { r: 1, g: 1, b: 1 }, 'Bold');
    const action = createIntroButton('Start a project', false);
    action.x = 1040;
    action.y = 110;
    action.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    const actionText = action.children[0] as TextNode;
    actionText.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
    frame.appendChild(action);
    appendFooterRule(frame, 220, { r: 0.54, g: 0.57, b: 0.87 });
    appendStandaloneText(frame, 'Copyright', '© 2025 Made Well', 120, 244, 400, 14, { r: 0.87, g: 0.88, b: 0.97 });
    appendStandaloneText(frame, 'Social links', 'Privacy  ·  Instagram  ·  Email', 760, 244, 560, 14, { r: 0.87, g: 0.88, b: 0.97 }, 'Regular', 'RIGHT');
  }

  if (blockId === 'footer-5') {
    appendStandaloneText(frame, 'Wordmark', 'FORM / FIELD', 120, 42, 300, 30, { r: 1, g: 1, b: 1 }, 'Bold');
    appendStandaloneText(frame, 'Navigation', 'Work     Studio     Contact', 470, 48, 500, 18, { r: 0.82, g: 0.84, b: 0.88 }, 'Regular', 'CENTER');
    appendStandaloneText(frame, 'Copyright and social', '© 2025     Instagram ↗', 960, 48, 360, 16, { r: 0.62, g: 0.66, b: 0.72 }, 'Regular', 'RIGHT');
  }

  if (blockId === 'footer-6') {
    appendStandaloneText(frame, 'Wordmark', 'FIELDNOTES®', 120, 40, 360, 24, { r: 0.16, g: 0.14, b: 0.12 }, 'Bold');
    appendStandaloneText(frame, 'Studio descriptor', 'A small studio for ambitious ideas', 820, 46, 500, 18, { r: 0.36, g: 0.34, b: 0.3 }, 'Regular', 'RIGHT');
    appendStandaloneText(frame, 'Statement', 'Make room\nfor better.', 120, 140, 620, 72, { r: 0.16, g: 0.14, b: 0.12 }, 'Bold');
    const editorialLinks = ['Selected work', 'Our approach', 'Say hello', 'Instagram ↗', 'LinkedIn ↗', 'Newsletter'];
    for (let index = 0; index < editorialLinks.length; index += 1) {
      const column = index % 2;
      const row = Math.floor(index / 2);
      appendStandaloneText(frame, 'Editorial link', editorialLinks[index], 810 + column * 220, 198 + row * 42, 200, 16, { r: 0.24, g: 0.22, b: 0.19 });
    }
    appendFooterRule(frame, 396, { r: 0.84, g: 0.81, b: 0.77 });
    appendStandaloneText(frame, 'Copyright', '© 2025 Fieldnotes Studio', 120, 420, 480, 14, { r: 0.47, g: 0.44, b: 0.4 });
    appendStandaloneText(frame, 'Location and legal', 'Made with care in Copenhagen  ·  Privacy', 680, 420, 640, 14, { r: 0.47, g: 0.44, b: 0.4 }, 'Regular', 'RIGHT');
  }

  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

function createArabicText(
  name: string,
  characters: string,
  fontSize: number,
  lineHeight: number,
  color: RGB,
  width: number,
  style: 'Regular' | 'Bold' = 'Regular',
) {
  const text = figma.createText();
  text.name = name;
  text.fontName = { family: 'Noto Sans Arabic', style };
  text.characters = characters;
  text.fontSize = fontSize;
  text.lineHeight = { unit: 'PIXELS', value: lineHeight };
  text.textAlignHorizontal = 'RIGHT';
  text.fills = [{ type: 'SOLID', color }];
  text.resize(width, lineHeight);
  text.textAutoResize = 'HEIGHT';
  return text;
}

function appendArabicText(
  parent: FrameNode,
  name: string,
  characters: string,
  x: number,
  y: number,
  width: number,
  fontSize: number,
  lineHeight: number,
  color: RGB,
  style: 'Regular' | 'Bold' = 'Regular',
) {
  const text = createArabicText(name, characters, fontSize, lineHeight, color, width, style);
  text.x = x;
  text.y = y;
  parent.appendChild(text);
  return text;
}

async function createArabicBlock(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Noto Sans Arabic', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Noto Sans Arabic', style: 'Bold' });

  const names: Record<string, string> = {
    'arabic-intro': 'Arabic / Intro / RTL',
    'arabic-services': 'Arabic / Services / RTL',
    'arabic-contact': 'Arabic / Contact / RTL',
  };
  const heights: Record<string, number> = {
    'arabic-intro': 900,
    'arabic-services': 680,
    'arabic-contact': 520,
  };
  const background: RGB = blockId === 'arabic-contact'
    ? { r: 0.06, g: 0.09, b: 0.16 }
    : { r: 1, g: 1, b: 1 };
  const frame = createStandaloneFrame(blockId, names[blockId], heights[blockId], background);
  frame.x = x;
  frame.y = y;

  if (blockId === 'arabic-intro') {
    appendArabicText(frame, 'Eyebrow / Arabic', 'أفكار واضحة، تجارب أفضل', 650, 220, 670, 20, 32, { r: 0.29, g: 0.34, b: 0.78 }, 'Bold');
    appendArabicText(frame, 'Heading / Arabic', 'نصنع تجارب رقمية\nتترك أثراً.', 650, 274, 670, 64, 86, { r: 0.06, g: 0.09, b: 0.16 }, 'Bold');
    appendArabicText(frame, 'Description / Arabic', 'نساعد العلامات التجارية على تحويل أفكارها إلى منتجات رقمية بسيطة وجميلة.', 650, 462, 670, 24, 42, { r: 0.36, g: 0.39, b: 0.46 });
    const button = createArabicText('Button / Arabic', 'اكتشف خدماتنا', 18, 28, { r: 1, g: 1, b: 1 }, 190, 'Bold');
    const buttonFrame = figma.createFrame();
    buttonFrame.name = 'Action / Arabic';
    buttonFrame.x = 1130;
    buttonFrame.y = 558;
    buttonFrame.resize(190, 56);
    buttonFrame.fills = [{ type: 'SOLID', color: { r: 0.29, g: 0.34, b: 0.78 } }];
    buttonFrame.cornerRadius = 12;
    buttonFrame.layoutMode = 'HORIZONTAL';
    buttonFrame.primaryAxisAlignItems = 'CENTER';
    buttonFrame.counterAxisAlignItems = 'CENTER';
    buttonFrame.appendChild(button);
    frame.appendChild(buttonFrame);
    const mark = figma.createEllipse();
    mark.name = 'Decorative mark';
    mark.x = 136;
    mark.y = 280;
    mark.resize(420, 320);
    mark.fills = [{ type: 'SOLID', color: { r: 0.91, g: 0.92, b: 1 } }];
    frame.appendChild(mark);
    appendArabicText(frame, 'Decorative mark label', '✦', 268, 385, 160, 96, 120, { r: 0.29, g: 0.34, b: 0.78 }, 'Bold');
  }

  if (blockId === 'arabic-services') {
    appendArabicText(frame, 'Eyebrow / Arabic', 'ما نقدمه', 780, 78, 540, 20, 32, { r: 0.29, g: 0.34, b: 0.78 }, 'Bold');
    appendArabicText(frame, 'Heading / Arabic', 'خدمات تدعم نمو أعمالك', 480, 125, 840, 52, 70, { r: 0.06, g: 0.09, b: 0.16 }, 'Bold');
    const services = [
      ['٠١', 'استراتيجية العلامة', 'رؤية واضحة وهوية تعبّر عن قيم مشروعك.'],
      ['٠٢', 'تصميم المنتجات', 'تجارب رقمية سهلة الاستخدام ومصممة للناس.'],
      ['٠٣', 'تطوير المواقع', 'مواقع سريعة ومرنة تنمو مع أعمالك.'],
    ];
    for (let index = 0; index < services.length; index += 1) {
      const card = createPanel(`خدمة / ${services[index][1]}`, 120 + index * 400, 240, 368, 350);
      card.paddingTop = 24;
      card.paddingBottom = 24;
      card.paddingLeft = 24;
      card.paddingRight = 24;
      card.itemSpacing = 18;
      card.appendChild(createArabicText('رقم', services[index][0], 18, 28, { r: 0.29, g: 0.34, b: 0.78 }, 300, 'Bold'));
      card.appendChild(createArabicText('عنوان الخدمة', services[index][1], 25, 38, { r: 0.09, g: 0.12, b: 0.19 }, 300, 'Bold'));
      card.appendChild(createArabicText('وصف الخدمة', services[index][2], 17, 30, { r: 0.36, g: 0.39, b: 0.46 }, 300));
      card.appendChild(createArabicText('رابط الخدمة', 'اكتشف المزيد ←', 16, 26, { r: 0.29, g: 0.34, b: 0.78 }, 300, 'Bold'));
      frame.appendChild(card);
    }
  }

  if (blockId === 'arabic-contact') {
    appendArabicText(frame, 'Eyebrow / Arabic', 'لنتحدث عن فكرتك', 650, 126, 670, 20, 32, { r: 0.7, g: 0.72, b: 1 }, 'Bold');
    appendArabicText(frame, 'Heading / Arabic', 'مشروعك القادم\nيبدأ من هنا.', 650, 176, 670, 60, 82, { r: 1, g: 1, b: 1 }, 'Bold');
    appendArabicText(frame, 'Description / Arabic', 'أخبرنا بما تخطط له، وسنساعدك على اتخاذ الخطوة التالية.', 650, 356, 670, 22, 38, { r: 0.78, g: 0.8, b: 0.85 });
    const contactCard = createPanel('بيانات التواصل', 136, 170, 390, 230);
    contactCard.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.13, b: 0.2 } }];
    contactCard.strokes = [{ type: 'SOLID', color: { r: 0.23, g: 0.26, b: 0.33 } }];
    contactCard.paddingTop = 24;
    contactCard.paddingBottom = 24;
    contactCard.paddingLeft = 24;
    contactCard.paddingRight = 24;
    contactCard.appendChild(createArabicText('البريد الإلكتروني', 'البريد الإلكتروني', 16, 24, { r: 0.62, g: 0.66, b: 0.72 }, 330));
    contactCard.appendChild(createArabicText('Email', 'مرحباً@استوديو.مثال', 18, 28, { r: 1, g: 1, b: 1 }, 330));
    contactCard.appendChild(createArabicText('Social', 'إنستغرام · لينكدإن', 18, 28, { r: 1, g: 1, b: 1 }, 330));
    frame.appendChild(contactCard);
    const button = figma.createFrame();
    button.name = 'Contact action / Arabic';
    button.x = 1110;
    button.y = 430;
    button.resize(210, 56);
    button.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    button.cornerRadius = 12;
    button.layoutMode = 'HORIZONTAL';
    button.primaryAxisAlignItems = 'CENTER';
    button.counterAxisAlignItems = 'CENTER';
    button.appendChild(createArabicText('Button label', 'تواصل معنا ←', 18, 28, { r: 0.06, g: 0.09, b: 0.16 }, 170, 'Bold'));
    frame.appendChild(button);
  }

  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
}

function createNavigationTrack(name: string, child: SceneNode, alignment: 'MIN' | 'CENTER' | 'MAX') {
  const track = figma.createFrame();
  track.name = name;
  track.resize(1168 / 3, 44);
  track.fills = [];
  track.layoutMode = 'HORIZONTAL';
  track.primaryAxisSizingMode = 'FIXED';
  track.counterAxisSizingMode = 'FIXED';
  track.primaryAxisAlignItems = alignment;
  track.counterAxisAlignItems = 'CENTER';
  track.appendChild(child);
  return track;
}

async function createHeader(blockId: string, x: number, y: number): Promise<void> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const header = figma.createFrame();
  header.name = `Header ${blockId.slice(-1)}`;
  header.x = x;
  header.y = y;
  header.resize(1440, 88);
  header.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  header.strokes = [{ type: 'SOLID', color: { r: 0.886, g: 0.906, b: 0.941 } }];
  header.strokeWeight = 1;
  header.cornerRadius = 8;

  const container = figma.createFrame();
  container.name = 'Container / max 1200 / px-4';
  container.x = 120;
  container.y = 0;
  container.resize(1200, 88);
  container.fills = [];
  container.layoutMode = 'HORIZONTAL';
  container.primaryAxisAlignItems = 'SPACE_BETWEEN';
  container.counterAxisAlignItems = 'CENTER';
  container.paddingLeft = 16;
  container.paddingRight = 16;
  container.layoutGrids = [
    {
      pattern: 'COLUMNS',
      alignment: 'MIN',
      count: 12,
      sectionSize: 75.3333,
      gutterSize: 24,
      offset: 16,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.08 },
    },
    {
      pattern: 'GRID',
      sectionSize: 8,
      color: { r: 0.29, g: 0.34, b: 0.78, a: 0.045 },
    },
  ];

  const brand = createBrand();
  const primaryNavigation = ['Home', 'About us', 'Contact', 'News', 'FAQ'];

  switch (blockId) {
    case 'header-1':
      container.appendChild(brand);
      container.appendChild(createNavigation(primaryNavigation, 'Navigation'));
      break;
    case 'header-2':
      container.appendChild(brand);
      container.appendChild(createNavigation(primaryNavigation, 'Navigation'));
      container.appendChild(createActionButton('Consultation'));
      break;
    case 'header-3':
      container.primaryAxisAlignItems = 'MIN';
      container.appendChild(createNavigationTrack(
        'Left navigation track',
        createNavigation(['Home', 'About us', 'Project'], 'Left navigation'),
        'MIN',
      ));
      container.appendChild(createNavigationTrack('Centered brand track', brand, 'CENTER'));
      container.appendChild(createNavigationTrack(
        'Right navigation track',
        createNavigation(['Available', 'Contact', 'Blog'], 'Right navigation'),
        'MAX',
      ));
      break;
    case 'header-4': {
      const brandNavigation = figma.createFrame();
      brandNavigation.name = 'Brand and navigation';
      brandNavigation.fills = [];
      brandNavigation.layoutMode = 'HORIZONTAL';
      brandNavigation.primaryAxisSizingMode = 'AUTO';
      brandNavigation.counterAxisSizingMode = 'AUTO';
      brandNavigation.counterAxisAlignItems = 'CENTER';
      brandNavigation.itemSpacing = 32;
      brandNavigation.appendChild(brand);
      brandNavigation.appendChild(createNavigation(
        ['Home', 'Contact', 'About us', 'Example', 'Project'],
        'Navigation',
      ));
      container.appendChild(brandNavigation);
      container.appendChild(createActionButton('See all'));
      break;
    }
    case 'header-5':
      container.appendChild(createNavigation(
        ['Home', 'Contact', 'About us', 'Example', 'Project'],
        'Navigation',
      ));
      container.appendChild(brand);
      break;
    case 'header-6':
      container.appendChild(createActionButton('Consultation'));
      container.appendChild(createNavigation(
        ['FAQ', 'Contact', 'News', 'About us', 'Home'],
        'Navigation',
      ));
      container.appendChild(brand);
      break;
  }

  header.appendChild(container);
  figma.currentPage.appendChild(header);
  figma.currentPage.selection = [header];
}

figma.on('drop', (event: DropEvent): false => {
  const { items, absoluteX, absoluteY } = event;
  const item = items?.find((dropItem) => dropItem.type === 'application/json');
  if (!item) return false;

  let data: unknown;
  try {
    data = JSON.parse(item.data);
  } catch {
    return false;
  }

  if (!data || typeof data !== 'object') return false;

  const blockData = data as BlockData;
  switch (blockData.blockId) {
    case 'header-1':
    case 'header-2':
    case 'header-3':
    case 'header-4':
    case 'header-5':
    case 'header-6':
      void createHeader(blockData.blockId, absoluteX, absoluteY);
      break;
    case 'intro-1':
    case 'intro-2':
    case 'intro-3':
    case 'intro-4':
    case 'intro-5':
    case 'intro-6':
    case 'intro-7':
    case 'intro-8':
      void createIntro(blockData.blockId, absoluteX, absoluteY).catch((error: unknown) => {
        figma.notify(`Could not create intro block: ${error instanceof Error ? error.message : String(error)}`);
      });
      break;
    case 'service-1':
    case 'service-2':
    case 'service-3':
      void createService(blockData.blockId, absoluteX, absoluteY);
      break;
    case 'footer-1':
    case 'footer-2':
    case 'footer-3':
    case 'footer-4':
    case 'footer-5':
    case 'footer-6':
      void createFooter(blockData.blockId, absoluteX, absoluteY);
      break;
    case 'arabic-intro':
    case 'arabic-services':
    case 'arabic-contact':
      void createArabicBlock(blockData.blockId, absoluteX, absoluteY);
      break;
    case 'cards-1':
    case 'cards-2':
    case 'cards-3':
    case 'cards-4':
    case 'cards-5':
      void createCards(blockData.blockId, absoluteX, absoluteY).catch((error: unknown) => {
        figma.notify(`Could not create card block: ${error instanceof Error ? error.message : String(error)}`);
      });
      break;
    default:
      void createSection(blockData, absoluteX, absoluteY);
  }
  return false;
});
