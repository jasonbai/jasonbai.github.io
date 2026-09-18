import { MotionConfig, motion } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  BookOpen,
  Camera,
  ChefHat,
  Github,
  Keyboard,
  Languages,
  Mail,
  Orbit,
  TrendingUp,
  QrCode,
  X,
} from "lucide-react";
import siteLogo from "./img/logo.png";
import wechatQrCode from "./img/wechat-qrcode.jpg";

const ETFWIN_URL = "http://www.etfwin.com";

const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, url: "https://github.com/jasonbai" },
  { name: "小红书", icon: Camera, url: "https://xhslink.com/m/22pjLIX7FW0" },
  {
    name: "知识星球",
    icon: Orbit,
    url: "https://wx.zsxq.com/group/48885444521218",
  },
  { name: "Email", icon: Mail, url: "mailto:170236806@qq.com" },
];

const PROJECTS = [
  {
    title: "Kids-type",
    description: "用 Vibe Coding 给女儿做的英语打字练习网站，练指法，也记单词。",
    link: "https://kids-type.pages.dev/",
    icon: Keyboard,
    category: "儿童英语学习",
    why: "女儿在学校用的打字软件，让我想起了小时候的电脑课。我想让她练习真正的键盘指法，也让敲出来的内容有学习价值，于是把打字练习和她正在学的 KET / PET 英语词汇结合起来。",
    status:
      "内置 KET 1500 词和 PET 2000 词，按 CEFR 等级与词频整理。练习时提供手指提示和即时对错反馈，完成单词后结合发音、释义及 AI 生成的儿童入门例句巩固记忆。无需注册，进度保存在浏览器本地，打开就能练。",
    next: "项目已开源，采用纯前端静态站设计。希望这份给女儿的小工具也能帮助更多孩子，欢迎自行部署，或 Fork 后改成适合自己孩子的版本。",
  },
  {
    title: "AI Menu",
    description: "AI 驱动的多餐厅智能点菜 SaaS 平台。",
    link: "https://aimenu.vercel.app/",
    icon: BookOpen,
    category: "项目开发",
    why: "餐厅菜单不是简单的信息展示，它牵涉菜品理解、用户偏好、多人协作和下单效率。",
    status:
      "正在把 AI 推荐、菜单结构化和多餐厅 SaaS 流程整合到一个可用产品里。",
    next: "继续强化商家侧配置、用户侧推荐解释，以及更稳定的点单决策链路。",
  },
  {
    title: "HowtoCook - Skill",
    description: "一个专为家庭做菜设计的 Claude Code 技能。",
    link: "https://github.com/jasonbai/howtocook",
    icon: ChefHat,
    category: "居家生活",
    why: "做饭是一个典型的高频生活问题：约束很多，但很多经验可以被结构化和复用。",
    status:
      "把家常菜流程、食材替换和步骤拆解沉淀成可调用的 Claude Code Skill。",
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

const ETF_FEATURES = [
  "市场全景",
  "动量轮动",
  "技术分析",
  "AI 解读",
  "组合诊断",
];

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

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.65 },
};

export default function App() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const wechatDialog = useRef<HTMLDialogElement>(null);
  const wechatButton = (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-controls="wechat-dialog"
      onClick={() => wechatDialog.current?.showModal()}
    >
      <QrCode size={18} aria-hidden="true" />
      微信公众号
      <Plus size={16} aria-hidden="true" />
    </button>
  );
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        跳转到正文
      </a>
      <header className="site-shell header">
        <a href="#" className="brand" aria-label="尾灯白 首页">
          <img src={siteLogo} alt="" width="32" height="32" />
          尾灯白<span className="brand-dot">®</span>
        </a>
        <nav aria-label="主导航">
          <a href="#projects">
            作品 <span>01</span>
          </a>
          <a href="#about">
            关于 <span>02</span>
          </a>
          <a href="#contact" className="nav-contact">
            找到我 <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="site-shell hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT BUILDER · 持续构建中
            </p>
            <h1>
              Vibe in,
              <br />
              <span>value out.</span>
              <i>↗</i>
            </h1>
            <p className="hero-subtitle">
              你好，我是尾灯白。一个爱折腾的手艺人
            </p>
            <p className="hero-description">
              我平时研究 A 股和 ETF，也喜欢用 AI 写代码、做工具。
              <br className="desktop-break" />
              这里记录我做过的项目，以及在投资、学习和生活中的一些尝试。
            </p>
            <a href="#projects" className="button-primary">
              探索我的作品 <ArrowUpRight size={19} />
            </a>
          </motion.div>
          <div className="orbit-scene" aria-hidden="true">
            <div className="orbit-grid" />
            <div className="orbit-glow" />
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="orbital orbital-three" />
            <div className="core">
              <span>V</span>
            </div>
            <span className="orbit-label label-ai">✳ AI WORKFLOWS</span>
            <span className="orbit-label label-finance">
              ↗ FINANCIAL RESEARCH
            </span>
            <span className="orbit-label label-systems">
              ⌘ PERSONAL SYSTEMS
            </span>
            <div className="coordinate">
              IDEAS → SYSTEMS → VALUE
              <br />
              EXPERIMENT / BUILD / REPEAT
            </div>
          </div>
          <div className="hero-bottom">
            <span>AI · 金融投研 · 个人系统</span>
            <a href="#projects">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
            <span>PERSONAL LAB / 2026</span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <div>
            {[0, 1, 2, 3].map((n) => (
              <span key={n}>
                IDEAS INTO SYSTEMS <b>✳</b> BUILD WITH INTENTION <b>✳</b> VIBE
                IN, VALUE OUT <b>✳</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <section id="projects" className="site-shell section">
          <motion.div {...reveal} className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                想法，正在发生<span>.</span>
              </h2>
            </div>
            <p>
              从一个问题出发，
              <br />
              做一些真正用得上的东西。
            </p>
          </motion.div>
          <motion.a
            {...reveal}
            href={ETFWIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project"
          >
            <div className="featured-copy">
              <p className="eyebrow">
                <span className="status-dot" /> 当前专注 / FEATURED PROJECT
              </p>
              <h3>
                ETFWin<span>↗</span>
              </h3>
              <h4>在市场噪声中，寻找秩序。</h4>
              <p>
                把市场全景、动量轮动、技术分析、AI
                解读和组合诊断放进同一条工作流，留下可以回看的判断。
              </p>
              <div className="tags">
                {ETF_FEATURES.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <span className="text-link">
                探索 ETF 投研工作台 <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="market-art" aria-hidden="true">
              <div className="market-top">
                <span>ETFWin / RESEARCH WORKSPACE</span>
                <span className="chart-badge">概念示意</span>
              </div>
              <div className="market-title">
                Find your edge.<small>把观察，变成可追踪的判断。</small>
              </div>
              <svg viewBox="0 0 520 210" fill="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="var(--brand-red)" stopOpacity=".3" />
                    <stop offset="1" stopColor="var(--brand-red)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 175 L30 166 L58 184 L86 135 L115 143 L142 115 L171 130 L200 83 L229 101 L258 87 L288 107 L317 64 L346 78 L375 41 L404 59 L433 29 L464 39 L495 12 L520 22 V210 H0Z"
                  fill="url(#chartFill)"
                />
                <path
                  className="chart-line"
                  d="M0 175 L30 166 L58 184 L86 135 L115 143 L142 115 L171 130 L200 83 L229 101 L258 87 L288 107 L317 64 L346 78 L375 41 L404 59 L433 29 L464 39 L495 12 L520 22"
                  stroke="var(--brand-red)"
                  strokeWidth="2.5"
                />
                <path
                  d="M0 188 Q130 180 260 140 T520 86"
                  stroke="#64748b"
                  strokeDasharray="5 5"
                />
              </svg>
              <div className="market-bottom">
                <span>
                  <i /> RESEARCH
                </span>
                <span>ANALYZE</span>
                <span>REFLECT ↗</span>
              </div>
            </div>
          </motion.a>
          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <motion.article
                {...reveal}
                key={project.title}
                className={`project-item ${openProject === index ? "is-open" : ""}`}
              >
                <div className="project-summary">
                  <span className="project-number">0{index + 2}</span>
                  <div className="project-symbol">
                    <project.icon size={23} />
                  </div>
                  <div className="project-title">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>
                        {project.title}
                        <ArrowUpRight size={20} />
                      </h3>
                    </a>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-category">{project.category}</span>
                  <button
                    className="expand-button"
                    aria-label={`${openProject === index ? "收起" : "展开"} ${project.title} 详情`}
                    aria-expanded={openProject === index}
                    aria-controls={`project-${index}`}
                    onClick={() =>
                      setOpenProject(openProject === index ? null : index)
                    }
                  >
                    {openProject === index ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </button>
                </div>
                <div
                  id={`project-${index}`}
                  hidden={openProject !== index}
                  className="project-details"
                >
                  <dl>
                    {[
                      ["WHY", project.why],
                      ["NOW", project.status],
                      ["NEXT", project.next],
                    ].map(([label, body]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{body}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    访问项目 <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <section id="themes" className="themes-section">
          <div className="site-shell section">
            <motion.div {...reveal} className="section-heading">
              <div>
                <p className="eyebrow">THE EXPLORATION SPACE</p>
                <h2>
                  不同方向，同一种好奇心<span>.</span>
                </h2>
              </div>
              <span className="asterisk" aria-hidden="true">
                ✳
              </span>
            </motion.div>
            <div className="theme-grid">
              {BUILD_THEMES.map((theme, i) => (
                <motion.article
                  {...reveal}
                  key={theme.title}
                  className="theme-card"
                >
                  <span className="eyebrow">
                    0{i + 1} /{" "}
                    {["WORKFLOW", "RESEARCH", "LEARNING", "EVERYDAY"][i]}
                  </span>
                  <h3>{theme.title}</h3>
                  <p>{theme.body}</p>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="site-shell section about-section">
          <motion.div {...reveal}>
            <p className="eyebrow">02 / THE BUILDER</p>
            <h2>
              持续构建，
              <br />
              也持续<span className="serif-word">提问。</span>
            </h2>
            <div className="about-signature">
              <img src={siteLogo} alt="尾灯白 的头像" width="44" height="44" />
              <div>
                尾灯白<small>Builder / Explorer / Lifelong learner</small>
              </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="about-body">
            <p>
              我长期关注 AI
              工具、自动化系统、金融投研和学习型产品。这些方向并不完全相同，但都指向同一类工作：把高频、复杂或容易流失的经验，整理成更稳定、更容易复用的流程。
            </p>
            <div className="questions">
              {LONG_TERM_QUESTIONS.map((q, i) => (
                <p key={q}>
                  <span>0{i + 1}</span>
                  {q}
                </p>
              ))}
            </div>
            <div className="social-links">{wechatButton}</div>
          </motion.div>
        </section>
        <section id="timeline" className="site-shell timeline-section">
          <p className="eyebrow">A WORK IN PROGRESS / 长期积累</p>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <motion.article {...reveal} key={item.year}>
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>
        <section id="contact" className="site-shell contact-section">
          <motion.div {...reveal}>
            <p className="eyebrow">
              <span className="status-dot" /> 03 / STAY CONNECTED
            </p>
            <h2>
              下一个想法，
              <br />
              从一次对话开始<span>↗</span>
            </h2>
            <p>如果你也在构建自己的工具、工作流或长期系统，欢迎交流。</p>
            <div className="social-links">
              {wechatButton}
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                  {social.name}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <dialog
        ref={wechatDialog}
        id="wechat-dialog"
        className="wechat-dialog"
        aria-labelledby="wechat-dialog-title"
        aria-describedby="wechat-dialog-description"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom
            ) wechatDialog.current?.close();
          }
        }}
      >
        <button
          type="button"
          className="wechat-dialog-close"
          aria-label="关闭二维码"
          onClick={() => wechatDialog.current?.close()}
          autoFocus
        >
          <X size={20} aria-hidden="true" />
        </button>
        <p className="eyebrow">STAY CONNECTED / 微信公众号</p>
        <h2 id="wechat-dialog-title">微信扫码，保持联系。</h2>
        <img src={wechatQrCode} alt="尾灯白的微信公众号二维码" width="258" height="258" />
        <p id="wechat-dialog-description">
          使用微信扫一扫，关注我的公众号。<br />
          手机浏览时，可保存图片后在微信中识别。
        </p>
      </dialog>
      <footer className="site-shell footer">
        <a className="brand" href="#">
          尾灯白<span className="brand-dot">®</span>
        </a>
        <span>VIBE IN, VALUE OUT.</span>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2026 晋ICP备2024041192号-2
        </a>
        <a href="#" aria-label="回到顶部">
          ↑ BACK TO TOP
        </a>
      </footer>
    </MotionConfig>
  );
}
