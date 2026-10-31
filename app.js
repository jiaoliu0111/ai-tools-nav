const categories = [
  { id: "all", name: "全部" },
  { id: "writing", name: "写作办公" },
  { id: "coding", name: "编程开发" },
  { id: "image", name: "图像设计" },
  { id: "video", name: "视频音频" },
  { id: "automation", name: "自动化" },
  { id: "research", name: "搜索研究" },
  { id: "marketing", name: "营销增长" },
  { id: "productivity", name: "效率协作" },
];

const tools = [
  {
    name: "ChatGPT",
    category: "writing",
    summary: "适合通用问答、内容生成、头脑风暴、表格整理和工作流辅助。",
    tags: ["对话", "写作", "办公"],
    pricing: "免费 / 订阅",
    url: "https://chatgpt.com",
    initials: "CG",
    featured: true,
  },
  {
    name: "Claude",
    category: "writing",
    summary: "适合长文分析、文档摘要、写作润色和复杂任务拆解。",
    tags: ["长文本", "写作", "分析"],
    pricing: "免费 / 订阅",
    url: "https://claude.ai",
    initials: "CL",
    featured: true,
  },
  {
    name: "Perplexity",
    category: "research",
    summary: "适合带来源的搜索问答、资料收集、主题研究和快速调研。",
    tags: ["搜索", "研究", "引用"],
    pricing: "免费 / 订阅",
    url: "https://www.perplexity.ai",
    initials: "PX",
    featured: true,
  },
  {
    name: "Cursor",
    category: "coding",
    summary: "面向开发者的 AI 代码编辑器，适合项目理解、重构和代码生成。",
    tags: ["代码", "IDE", "开发"],
    pricing: "免费 / 订阅",
    url: "https://www.cursor.com",
    initials: "CU",
    featured: true,
  },
  {
    name: "GitHub Copilot",
    category: "coding",
    summary: "在编辑器和 GitHub 工作流中提供代码补全、解释和聊天辅助。",
    tags: ["代码补全", "开发", "GitHub"],
    pricing: "订阅",
    url: "https://github.com/features/copilot",
    initials: "GH",
    featured: false,
  },
  {
    name: "agent-qa",
    category: "coding",
    summary: "网页与移动端 AI 测试，具备 memidex 持久记忆、经验证的自我改进、MCP 接入和可回看证据。",
    tags: ["AI 测试", "MCP", "memidex"],
    pricing: "模型费用另计",
    url: "https://vostride.com",
    initials: "QA",
    featured: false,
  },
  {
    name: "Midjourney",
    category: "image",
    summary: "适合高质量概念图、海报视觉、风格探索和创意图像生成。",
    tags: ["绘图", "设计", "视觉"],
    pricing: "订阅",
    url: "https://www.midjourney.com",
    initials: "MJ",
    featured: true,
  },
  {
    name: "Canva AI",
    category: "image",
    summary: "适合快速制作社媒图、演示素材、品牌视觉和轻量设计内容。",
    tags: ["设计", "模板", "社媒"],
    pricing: "免费 / 订阅",
    url: "https://www.canva.com/ai",
    initials: "CA",
    featured: false,
  },
  {
    name: "Runway",
    category: "video",
    summary: "适合 AI 视频生成、视频编辑、画面扩展和创意短片制作。",
    tags: ["视频", "生成", "剪辑"],
    pricing: "免费 / 订阅",
    url: "https://runwayml.com",
    initials: "RW",
    featured: true,
  },
  {
    name: "ElevenLabs",
    category: "video",
    summary: "适合语音合成、配音、本地化音频和多语言内容生产。",
    tags: ["语音", "配音", "音频"],
    pricing: "免费 / 订阅",
    url: "https://elevenlabs.io",
    initials: "EL",
    featured: false,
  },
  {
    name: "Zapier AI",
    category: "automation",
    summary: "将表单、邮件、CRM、文档等服务串联成自动化流程。",
    tags: ["自动化", "工作流", "集成"],
    pricing: "免费 / 订阅",
    url: "https://zapier.com/ai",
    initials: "ZA",
    featured: false,
  },
  {
    name: "Notion AI",
    category: "productivity",
    summary: "适合知识库整理、会议记录、项目文档和团队协作内容生成。",
    tags: ["笔记", "协作", "文档"],
    pricing: "订阅",
    url: "https://www.notion.com/product/ai",
    initials: "NO",
    featured: false,
  },
  {
    name: "Gamma",
    category: "productivity",
    summary: "适合快速生成演示文稿、网页式汇报和结构化提案。",
    tags: ["演示", "文档", "提案"],
    pricing: "免费 / 订阅",
    url: "https://gamma.app",
    initials: "GA",
    featured: false,
  },
  {
    name: "DeepL Write",
    category: "writing",
    summary: "适合英文润色、语气调整、翻译改写和商务表达优化。",
    tags: ["润色", "翻译", "英文"],
    pricing: "免费 / 订阅",
    url: "https://www.deepl.com/write",
    initials: "DW",
    featured: false,
  },
  {
    name: "Fireflies",
    category: "productivity",
    summary: "适合会议转写、纪要提取、行动项整理和团队知识沉淀。",
    tags: ["会议", "转写", "纪要"],
    pricing: "免费 / 订阅",
    url: "https://fireflies.ai",
    initials: "FF",
    featured: false,
  },
  {
    name: "Synthesia",
    category: "video",
    summary: "适合用虚拟人快速制作培训视频、产品讲解和多语言内容。",
    tags: ["虚拟人", "视频", "培训"],
    pricing: "订阅",
    url: "https://www.synthesia.io",
    initials: "SY",
    featured: false,
  },
  {
    name: "Buffer AI Assistant",
    category: "marketing",
    summary: "适合社媒文案生成、内容改写、发布思路和营销素材初稿。",
    tags: ["社媒", "营销", "文案"],
    pricing: "免费 / 订阅",
    url: "https://buffer.com/ai-assistant",
    initials: "BF",
    featured: false,
  },
];

const state = {
  category: "all",
  query: "",
};

const categoryList = document.querySelector("#categoryList");
const toolGrid = document.querySelector("#toolGrid");
const featuredTools = document.querySelector("#featuredTools");
const resultCount = document.querySelector("#resultCount");
const toolTotal = document.querySelector("#toolTotal");
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const emptyState = document.querySelector("#emptyState");
const searchForm = document.querySelector("#searchForm");

function categoryName(categoryId) {
  return categories.find((category) => category.id === categoryId)?.name || "其他";
}

function countByCategory(categoryId) {
  if (categoryId === "all") {
    return tools.length;
  }

  return tools.filter((tool) => tool.category === categoryId).length;
}

function matchesQuery(tool, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    tool.name,
    tool.summary,
    tool.pricing,
    categoryName(tool.category),
    ...tool.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase().trim());
}

function filteredTools() {
  return tools.filter((tool) => {
    const inCategory = state.category === "all" || tool.category === state.category;
    return inCategory && matchesQuery(tool, state.query);
  });
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map((category) => {
      const pressed = category.id === state.category ? "true" : "false";
      return `
        <button class="category-button" type="button" data-category="${category.id}" aria-pressed="${pressed}">
          <span class="category-name">${category.name}</span>
          <span class="category-count">${countByCategory(category.id)}</span>
        </button>
      `;
    })
    .join("");
}

function renderToolCard(tool, featured = false) {
  const tagMarkup = tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const className = featured ? "featured-card" : "tool-card";

  return `
    <article class="${className}">
      <div class="card-head">
        <span class="tool-logo">${tool.initials}</span>
        <div class="tool-title">
          <h3>${tool.name}</h3>
          <span>${categoryName(tool.category)} · ${tool.pricing}</span>
        </div>
      </div>
      <p class="tool-desc">${tool.summary}</p>
      <div class="tag-row">${tagMarkup}</div>
      <a class="card-link" href="${tool.url}" target="_blank" rel="noreferrer">访问官网</a>
    </article>
  `;
}

function renderInlineAd() {
  return `
    <a class="ad-slot inline-ad ad-with-image" href="mailto:ads@example.com">
      <img
        class="ad-image"
        src="./assets/ads/ai-native.png"
        alt="AI 数据分析和芯片抽象广告图"
        loading="lazy"
      />
      <span class="ad-content">
        <span class="ad-kicker">信息流广告</span>
        <strong>智能办公推广位</strong>
        <span>Native Card · 可放工具推荐、优惠活动或联盟链接</span>
      </span>
    </a>
  `;
}

function renderFeatured() {
  featuredTools.innerHTML = tools
    .filter((tool) => tool.featured)
    .slice(0, 3)
    .map((tool) => renderToolCard(tool, true))
    .join("");
}

function renderTools() {
  const results = filteredTools();
  resultCount.textContent = `${results.length} 个结果`;
  toolTotal.textContent = `${tools.length} 个工具`;
  emptyState.hidden = results.length > 0;

  toolGrid.innerHTML = results
    .map((tool, index) => {
      const card = renderToolCard(tool);
      return index === 5 ? `${card}${renderInlineAd()}` : card;
    })
    .join("");
}

function render() {
  renderCategories();
  renderFeatured();
  renderTools();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTools();
});

clearSearch.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  searchInput.focus();
  renderTools();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

render();
