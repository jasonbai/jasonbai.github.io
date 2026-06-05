import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Camera,
  ChefHat,
  Github,
  Languages,
  Mail,
  Orbit,
  TrendingUp,
} from "lucide-react";
import siteLogo from "./img/logo.png";

const ETFWIN_URL = "http://www.etfwin.com";

const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, url: "https://github.com/jasonbai" },
  { name: "小红书", icon: Camera, url: "https://xhslink.com/m/22pjLIX7FW0" },
  { name: "知识星球", icon: Orbit, url: "https://wx.zsxq.com/group/48885444521218" },
  { name: "Email", icon: Mail, url: "mailto:170236806@qq.com" },
];

const FOOTER_PAGE_LINKS = [
  { label: "主题", href: "#themes" },
  { label: "项目", href: "#projects" },
  { label: "关于", href: "#about" },
  { label: "时间线", href: "#timeline" },
  { label: "联系", href: "#contact" },
];

const PROJECTS = [
  {
    title: "AI Menu",
    description: "AI 驱动的多餐厅智能点菜 SaaS 平台。",
    link: "https://aimenu.vercel.app/",
    icon: BookOpen,
    category: "项目开发",
    why: "餐厅菜单不是简单的信息展示，它牵涉菜品理解、用户偏好、多人协作和下单效率。",
    status: "正在把 AI 推荐、菜单结构化和多餐厅 SaaS 流程整合到一个可用产品里。",
    next: "继续强化商家侧配置、用户侧推荐解释，以及更稳定的点单决策链路。",
  },
  {
    title: "HowtoCook - Skill",
    description: "一个专为家庭做菜设计的 Claude Code 技能。",
    link: "https://github.com/jasonbai/howtocook",
    icon: ChefHat,
    category: "居家生活",
    why: "做饭是一个典型的高频生活问题：约束很多，但很多经验可以被结构化和复用。",
    status: "把家常菜流程、食材替换和步骤拆解沉淀成可调用的 Claude Code Skill。",
    next: "让它更懂家庭厨房的真实限制，比如时间、库存、口味和失败兜底方案。",
  },
  {
    title: "English-to-Chinese Translator - Skill",
    description: "一个专为雅思学习者设计的 Claude Code 技能。",
    link: "https://github.com/jasonbai/english-to-chinese-translator",
    icon: Languages,
    category: "语言学习",
    why: "翻译不只是把英文换成中文，更重要的是帮助学习者理解表达、结构和语感。",
    status: "围绕雅思学习场景设计翻译、解释和表达迁移的工作流。",
    next: "补充更多错题复盘、表达积累和长期记忆相关的学习闭环。",
  },
  {
    title: "AutoRiskModel",
    description: "自动化风控建模项目。",
    link: "https://github.com/jasonbai/autoriskmodel",
    icon: TrendingUp,
    category: "命令行工具",
    why: "风控建模里大量流程是重复的：数据检查、变量处理、模型训练和报告输出。",
    status: "把自动化建模流程做成更标准的命令行工具，减少机械劳动。",
    next: "继续补足模型解释、稳定性检查和更适合真实业务协作的输出格式。",
  },
];

const ETF_FEATURES = ["市场全景", "动量轮动", "技术分析", "AI 解读", "组合诊断"];

const BUILD_THEMES = [
  {
    title: "AI 工作流",
    body: "把复杂任务拆成可复用的技能、提示词、工具链和自动化流程，让 AI 不只是回答问题，而是参与生产。",
  },
  {
    title: "金融投研",
    body: "用数据、模型和界面辅助 ETF 研究决策，把零散判断沉淀成可追踪、可复盘的投研系统。",
  },
  {
    title: "学习工具",
    body: "围绕语言学习、知识吸收和个人成长做小工具，关注的不只是效率，还有长期积累的质量。",
  },
  {
    title: "生活系统",
    body: "把做饭、记录、复盘这类日常问题也产品化，训练自己把经验变成结构的能力。",
  },
];

const LONG_TERM_QUESTIONS = [
  "AI 工具如何更自然地进入个人工作流？",
  "投资研究如何从零散观察变成稳定流程？",
  "经验和技能如何沉淀为可复用的结构？",
  "自动化如何提高产出，同时保留人的判断？",
];

const TIMELINE = [
  {
    year: "2026",
    title: "ETFWin",
    body: "搭建 ETF 投研工作台，把市场全景、动量轮动、技术分析、AI 解读和组合诊断放进同一条工作流。",
  },
  {
    year: "2025",
    title: "Claude Code Skills",
    body: "把做饭、翻译、学习和自动化任务拆成技能，实验个人技能库如何成为长期生产力资产。",
  },
  {
    year: "2024",
    title: "AutoRiskModel",
    body: "尝试把风控建模中的重复步骤标准化，减少从数据到模型报告之间的机械消耗。",
  },
  {
    year: "Ongoing",
    title: "Personal Systems",
    body: "持续整理产品实验、AI 工作流、投资研究、学习方法和生活自动化，留下能被复用的结构。",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="site-shell">
        <nav className="border-b border-ink/15 py-5">
          <div className="flex items-center justify-between gap-6">
            <a href="/" className="inline-flex items-center gap-3" aria-label="JasonBai 首页">
              <img
                src={siteLogo}
                alt=""
                width={38}
                height={38}
                className="h-9 w-9 rounded-full object-cover grayscale"
                decoding="async"
              />
              <span className="font-serif text-2xl font-semibold tracking-tight">JasonBai</span>
            </a>
            <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55 sm:flex">
              <a href="#themes" className="hover:text-ink">Themes</a>
              <a href="#projects" className="hover:text-ink">Projects</a>
              <a href="#about" className="hover:text-ink">Notes</a>
              <a href="#contact" className="hover:text-ink">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="site-shell">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 content-between gap-14 py-10 md:min-h-[780px] md:grid-cols-[minmax(0,1fr)_260px] md:py-14"
        >
          <div className="flex flex-col justify-center">
            <p className="kicker">Personal Website / 2026</p>
            <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.6rem,11vw,9.5rem)] font-semibold leading-[0.86] tracking-tight">
              Vibe in,
              <br />
              value out.
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl md:leading-9">
              让灵感有去处，让价值有形状。那些闪现的直觉、走过的弯路与反复确认的判断，最终会沉淀成工具、系统和作品。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={ETFWIN_URL} target="_blank" rel="noopener noreferrer" className="button-dark">
                ETFWin <ArrowRight size={16} strokeWidth={1.9} />
              </a>
              <a href="#themes" className="button-light">
                查看我在构建什么
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div>
              <p className="kicker">Now</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight">ETF 投研</h2>
              <p className="mt-4 text-sm leading-7 text-ink/62">
                ETFWin 是我最近打磨最多的作品：在价格、风格与情绪之间，寻找更清晰的秩序，也留下可以回看的判断。
              </p>
            </div>
            <div className="border-t border-ink/15 pt-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {ETF_FEATURES.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </motion.section>

        <section id="themes" className="section-grid border-t border-ink/15 py-14 md:py-20">
          <div>
            <p className="kicker">What I Build</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
              我在构建什么
            </h2>
          </div>
          <div className="theme-grid">
            {BUILD_THEMES.map((theme, index) => (
              <motion.article
                key={theme.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="theme-card"
              >
                <span className="theme-number">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{theme.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/62">{theme.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-grid border-t border-ink/15 py-14 md:py-20">
          <div>
            <p className="kicker">Selected Work</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
              精选项目
            </h2>
          </div>
          <div className="project-index">
            {PROJECTS.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="project-row group"
              >
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60">
                    {project.description}
                  </p>
                  <dl className="project-notes">
                    <div>
                      <dt>Why</dt>
                      <dd>{project.why}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>{project.status}</dd>
                    </div>
                    <div>
                      <dt>Next</dt>
                      <dd>{project.next}</dd>
                    </div>
                  </dl>
                </div>
                <div className="project-icon" aria-hidden>
                  <project.icon size={20} strokeWidth={1.8} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="about" className="section-grid border-t border-ink/15 py-14 md:py-20">
          <div>
            <p className="kicker">About</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
              持续构建
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-ink/70">
            <p>
              我长期关注 AI 工具、自动化系统、金融投研和学习型产品。这些方向并不完全相同，但都指向同一类工作：把高频、复杂或容易流失的经验，整理成更稳定、更容易复用的流程。
            </p>
            <ul className="question-list">
              {LONG_TERM_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="timeline" className="section-grid border-t border-ink/15 py-14 md:py-20">
          <div>
            <p className="kicker">Accumulation</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
              长期积累
            </h2>
          </div>
          <div className="timeline-list">
            {TIMELINE.map((item) => (
              <article key={`${item.year}-${item.title}`} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="quiet-contact"
        >
          <div>
            <p className="kicker">Stay Connected</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              保持连接
            </h2>
          </div>
          <div className="quiet-contact-body">
            <p>
              如果你也在构建自己的工具、工作流或长期系统，欢迎交流。我通常关注 AI、投研、学习工具和个人自动化这些方向。
            </p>
            <div className="quiet-contact-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-contact-link"
                >
                  <social.icon size={15} strokeWidth={1.8} aria-hidden />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer id="contact" className="site-shell border-t border-ink/15 py-10">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={siteLogo}
                alt=""
                width={34}
                height={34}
                className="h-8 w-8 rounded-full object-cover grayscale"
                decoding="async"
              />
              <span className="font-serif text-2xl font-semibold tracking-tight">JasonBai</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-ink/56">Vibe in, value out</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <FooterColumn title="页面" items={FOOTER_PAGE_LINKS} />
            <FooterColumn
              title="项目"
              items={PROJECTS.map((project) => ({ label: project.title, href: project.link }))}
              external
            />
            <div>
              <h3 className="footer-title">社交</h3>
              <ul className="mt-4 space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink/55 transition-colors hover:text-ink"
                    >
                      <social.icon size={14} strokeWidth={1.8} aria-hidden />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-ink/45">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            © 2026 晋ICP备2024041192号-2
          </a>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({
  title,
  items,
  external = false,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
  external?: boolean;
}) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-ink/55 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
