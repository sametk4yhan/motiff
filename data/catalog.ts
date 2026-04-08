import { blocksByCategory, type Block } from "@/data/blocks";
import { categories, type Category } from "@/data/categories";

export type BlockProfile = {
  bestFor: string[];
  adaptNotes: string[];
  copySteps: string[];
  density: "Airy" | "Balanced" | "Dense";
  layoutType: string;
  interaction: string;
  previewBrief: string;
};

const categoryBestForMap: Record<string, string[]> = {
  "color-systems": [
    "Design systems building a brand palette",
    "Products solving light and dark balance early",
    "Frontend teams working token-first",
  ],
  typography: [
    "Editorial landing pages",
    "Products improving rhythm and readability",
    "Teams shaping clearer display and body contrast",
  ],
  "grid-layout": [
    "Dashboard, catalog, and content pages",
    "Admin surfaces with dense information",
    "Teams making responsive layout decisions quickly",
  ],
  "ui-components": [
    "SaaS products and panel surfaces",
    "MVP flows that need fast polish",
    "Teams building design system components",
  ],
  "motion-animation": [
    "Landing page reveal sequences",
    "Hero and onboarding surfaces that need attention",
    "Products that prefer meaningful motion over noise",
  ],
};

const fallbackBestFor = [
  "Interface decisions meant to be adapted into your own design system",
  "Teams building a curated block library instead of quick prototypes",
  "Product studies that evaluate preview and code together",
];

const tagAdaptationMap: Record<string, string> = {
  CSS: "Map token names to your variable system instead of keeping raw values.",
  JS: "Align naming and exports with your existing config and build chain.",
  TSX: "Simplify the component API and event names for your product before copying.",
  HTML: "Review semantic structure and reading order before shipping a static block.",
  Grid: "Re-measure columns and gaps against real content density instead of demo proportions.",
  Layout: "Retest header, aside, and content minimum widths with live data.",
  Responsive: "Tune clamp and breakpoint values against your own type scale and device mix.",
  A11y: "Re-check contrast on your actual backgrounds instead of trusting the demo surface.",
  "Dark Mode": "Tune elevation and border density for dark mode too, not just color.",
  Gradient: "Test text contrast separately whenever gradients enter the surface.",
  Dashboard: "Add a second signal for active, hover, and selected states on dense surfaces.",
  Modal: "Ship with backdrop lock, focus trap, and escape behavior in place.",
  Form: "A form block is not finished until validation, disabled, and loading states exist.",
  Navigation: "Think about active route, hover, and keyboard focus together.",
  Tooltip: "Test helper text with real content length because small tooltips overflow quickly.",
  Hero: "Do not let visual weight outrun content hierarchy in hero blocks.",
  Chart: "Reduce color count and prioritize data readability over decoration.",
};

const previewBriefMap: Record<string, string> = {
  "color-systems": "Use preview mode to inspect tonal relationships and contrast behavior in isolation.",
  typography: "Use preview mode to read hierarchy and rhythm without code noise.",
  "grid-layout": "Use preview mode to judge structure, balance, and density in isolation.",
  "ui-components": "Use preview mode to validate interaction tone and surface character quickly.",
  "motion-animation": "Use preview mode to clarify flow and attention direction.",
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getBlocksForCategory(slug: string): Block[] {
  return blocksByCategory[slug] ?? [];
}

export function getBlockFromCategory(slug: string, blockId: string): Block | undefined {
  return getBlocksForCategory(slug).find((block) => block.id === blockId);
}

export function getRelatedBlocks(slug: string, blockId: string, limit = 3): Block[] {
  const current = getBlockFromCategory(slug, blockId);

  return getBlocksForCategory(slug)
    .filter((block) => block.id !== blockId)
    .sort((left, right) => {
      const leftMatches = getSharedTagCount(current, left);
      const rightMatches = getSharedTagCount(current, right);
      return rightMatches - leftMatches || left.title.localeCompare(right.title, "en");
    })
    .slice(0, limit);
}

export function getPopularTagsForCategory(slug: string, limit = 6): string[] {
  const counts = new Map<string, number>();

  getBlocksForCategory(slug).forEach((block) => {
    block.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "en"))
    .slice(0, limit)
    .map(([tag]) => tag);
}

export function getBlockProfile(slug: string, block: Block): BlockProfile {
  const langTag = block.lang?.toUpperCase();
  const bestFor = [...(categoryBestForMap[slug] ?? fallbackBestFor)];

  if (block.lang === "tsx") {
    bestFor.push("Component-driven React and Next.js screens");
  }

  if (block.tags.includes("Dashboard") || block.tags.includes("Table") || block.tags.includes("Chart")) {
    bestFor.push("Teams making decisions on dense data surfaces");
  }

  const adaptNotes = compactUnique([
    langTag ? tagAdaptationMap[langTag] : undefined,
    ...block.tags.map((tag) => tagAdaptationMap[tag]),
    block.code
      ? "Normalize spacing, radius, and type values in one pass after copying."
      : "Use the surface as reference, then rebuild the same tone inside your own codebase.",
  ]).slice(0, 4);

  const copySteps = [
    block.lang === "css"
      ? "Align variable and token names with your own design token schema."
      : block.lang === "tsx"
        ? "Map the component API to the primitives and helpers already used in your product."
        : "Lift the structure first, then move it into your project naming and file conventions.",
    "Change brand color, radius, and spacing without breaking the preview hierarchy.",
    "Run a final pass with real content, empty states, and narrow-screen scenarios.",
  ];

  return {
    bestFor: compactUnique(bestFor).slice(0, 3),
    adaptNotes,
    copySteps,
    density: getDensity(block),
    layoutType: getLayoutType(slug, block),
    interaction: getInteraction(block),
    previewBrief: previewBriefMap[slug] ?? "Use preview mode to read the block withou    previewBct context.",
  };
}

function getSharedTagCount(current: Block | undefined, candidate: Block) {
  if (!current) return 0;
  const currentTags = new Set(current.tags);
  return candidate.tags.reduce((sum, tag) => sum + (currentTags.has(tag) ? 1 : 0), 0);
}

function getDensity(block: Block): BlockProfile["density"] {
  if (block.tags.some((tag) => ["Dashboard", "Table", "Chart", "Sidebar", "Mega Menu"].includes(tag))) {
    return "Dense";
  }

  if (block.tags.some((tag) => ["Hero", "Empty State", "Modal", "Split", "Bento"].includes(tag))) {
    return "Airy";
  }

  return "Balanced";
}

function getLayoutType(slug: string, block: Block) {
  if (slug === "grid-layout") {
    return "Layout system block";
  }
  if (block.tags.some((tag) => ["Form", "Card", "Tooltip", "Modal"].includes(tag))) {
    return "Interface primitive";
  }

  if (block.tags.some((tag) => ["Navigation", "Tabs", "Sidebar", "Header"].includes(tag))) {
    return "Navigation surface";
  }

  if (block.tags.some((tag) => ["Hero", "Section", "Landing"].includes(tag))) {
    return "Marketing surface";
  }

  return "Design system reference block";
}

function getInteraction(block: Block) {
  if (block.tags.some((tag) => ["Tooltip", "Modal", "Dropdown"].includes(tag))) {
    return "Triggered or contextual interaction";
  }

  if (block.tags.some((tag) => ["Navigation", "Tabs", "Sidebar"].includes(tag))) {
    return "Persistent navigation behavior";
  }

  if (block.tags.some((tag) => ["Hover", "Motion", "Animation"].includes(tag))) {
    return "Motion-supported transition";
  }

  return block.code ? "Directly adaptable static skeleton" : "Surface reference";
}

function compactUnique(items: Array<string | undefined>) {
  const seen = new Set<string>();

  return items.filter((item): item is string => {
    if (!item || seen.has(item)) {
      return false;
    }

    seen.add(item);
    return true;
  });
}
