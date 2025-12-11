export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  tags: string[];
  heroImage?: string;
  content: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string }
    | { type: "list"; items: string[] }
  >;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-agents-market-research-2025",
    title: "AI Agents Are Redefining Market Research in 2025",
    excerpt:
      "From noisy data streams to board‑ready insights: how agentic workflows compress research cycles from weeks to minutes.",
    date: "2025-12-01",
    author: "2laps Research",
    tags: ["AI Agents", "Market Intelligence", "Workflows"],
    heroImage: undefined,
    content: [
      {
        type: "paragraph",
        text:
          "Over the last 12 months, we’ve seen a structural shift: teams are moving away from manual desk research toward agentic systems that orchestrate multiple LLMs and data sources.",
      },
      { type: "heading", text: "From Search to Synthesis" },
      {
        type: "paragraph",
        text:
          "Instead of running dozens of searches and stitching notes, agents continuously crawl sources, deduplicate documents, and deliver succinct briefings with traceable citations.",
      },
      {
        type: "list",
        items: [
          "Automated ingestion from open web, filings, and transcripts",
          "Entity linking to normalize company, product, and event names",
          "Decision‑ready summaries with links to primary evidence",
        ],
      },
      { type: "heading", text: "What Teams Are Doing Differently" },
      {
        type: "quote",
        text:
          "Ramp‑ups that took a week now finish before lunch—and the output is more comprehensive.",
      },
      {
        type: "paragraph",
        text:
          "Early adopters start small—competitive benchmarking or earnings prep—and then expand to category tracking and strategy reviews.",
      },
    ],
  },
  {
    slug: "quant-vs-qual-why-you-need-both",
    title: "Quant vs Qual: Why You Need Both for Better Decisions",
    excerpt:
      "Blending scalable, quantitative indicators with qualitative nuance is the fastest path to confident decisions.",
    date: "2025-11-18",
    author: "2laps Research",
    tags: ["Quant", "Qual", "Decision‑Making"],
    content: [
      {
        type: "paragraph",
        text:
          "Quantitative metrics are great at signaling shifts, but they rarely explain the ‘why’. Pairing them with qualitative analysis from expert transcripts, filings, and press creates a closed feedback loop.",
      },
      { type: "heading", text: "A Simple Framework" },
      {
        type: "list",
        items: [
          "Use trending signals to detect change early",
          "Pull the most relevant primary sources",
          "Synthesize causes, risks, and expected impact",
        ],
      },
      {
        type: "paragraph",
        text:
          "Teams that operationalize this loop see fewer false positives and move faster with more conviction.",
      },
    ],
  },
  {
    slug: "playbook-earnings-prep-with-agents",
    title: "Playbook: Earnings Prep with AI Agents",
    excerpt:
      "A step‑by‑step approach to turn tickers into one‑click briefings—complete with citations and competitor context.",
    date: "2025-10-05",
    author: "2laps Research",
    tags: ["Playbook", "Earnings", "Automation"],
    content: [
      { type: "heading", text: "Inputs" },
      {
        type: "list",
        items: [
          "Ticker + peer set",
          "Last 4 quarters of filings and transcripts",
          "Recent broker notes and key news",
        ],
      },
      { type: "heading", text: "Outputs" },
      {
        type: "list",
        items: [
          "Executive summary with upside/downside drivers",
          "Consensus deltas and commentary heatmap",
          "Open questions for the call",
        ],
      },
    ],
  },
];



