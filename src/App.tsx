import { motion } from "motion/react";
import {
  Github,
  Camera,
  Orbit,
  Mail,
  ArrowRight,
  BookOpen,
  ChefHat,
  Languages,
  TrendingUp,
} from "lucide-react";
import siteLogo from "./img/logo.png";

/** Auto Risk 展示区块专用仓库链接（与页尾社交 GitHub 主页无关） */
const ETFWIN_URL = "http://www.etfwin.com";

const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, url: "https://github.com/jasonbai" },
  { name: "小红书", icon: Camera, url: "https://xhslink.com/m/22pjLIX7FW0" },
  { name: "知识星球", icon: Orbit, url: "https://wx.zsxq.com/group/48885444521218" },
  { name: "Email", icon: Mail, url: "mailto:170236806@qq.com" },
];

/** 页脚「页面」列 */
const FOOTER_PAGE_LINKS = [
  { label: "项目", href: "#projects" },
  { label: "关于", href: "#about" },
  { label: "联系", href: "#contact" },
];

const PROJECTS = [
  {
    title: "AI Menu",
    description: "AI 驱动的多餐厅智能点菜 SaaS 平台",
    link: "https://aimenu.vercel.app/",
    icon: BookOpen,
    category: "项目开发"
  },
  {
    title: "HowtoCook - SKill",
    description: "一个专为家庭做菜设计的 Claude Code 技能",
    link: "https://github.com/jasonbai/howtocook",
    icon: ChefHat,
    category: "居家生活"
  },
  {
    title: "English-to-Chinese Translator - Skill",
    description: "一个专为雅思学习者设计的 Claude Code 技能",
    link: "https://github.com/jasonbai/english-to-chinese-translator",
    icon: Languages,
    category: "语言学习"
  },
  {
    title: "AutoRiskModel",
    description: "自动化风控建模项目。",
    link: "https://github.com/jasonbai/autoriskmodel",
    icon: TrendingUp,
    category: "命令行工具"
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <img
            src={siteLogo}
            alt="JasonBai 个人网站"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10 shrink-0"
            decoding="async"
          />
          JasonBai
        </a>
        <div className="flex gap-6 text-sm font-medium easlo-text-muted">
          <a href="#projects" className="hover:text-black transition-colors">项目</a>
          <a href="#about" className="hover:text-black transition-colors">关于</a>
          <a href="#contact" className="hover:text-black transition-colors">联系</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-6 md:pt-4 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 -mt-1 md:-mt-2"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-[8px] font-bold uppercase tracking-widest mb-6 md:mb-8">
            Available for new projects
          </div>
          {/* Hero Text Banner */}
          <div className="w-full max-w-5xl mx-auto bg-black/[0.03] rounded-2xl py-16 md:py-24 px-6 md:px-12">
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black text-center leading-none">
                  ETF 投研
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black/70 text-center tracking-wide">
                  全链路、智能化
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2">
                {["市场全景", "动量轮动", "技术分析", "AI 解读", "组合诊断"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-black/10 text-xs md:text-sm font-medium text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base text-black/40 font-medium mt-1">
                覆盖 ETF 研究决策全流程
              </p>
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex flex-col items-center gap-3 md:gap-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black text-center leading-tight">
                    ETFWin
                  </h2>
                </div>
                <a
                  href={ETFWIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="easlo-button-primary"
                >
                  <ArrowRight size={18} strokeWidth={2} />
                  {ETFWIN_URL.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <section id="projects" className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold tracking-tight">精选项目</h2>
            <a href="https://github.com/jasonbai" className="text-sm font-semibold flex items-center gap-1 hover:underline">
              查看全部 <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="easlo-card group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                      <project.icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest easlo-text-muted">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="easlo-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-bold gap-1">
                    查看详情 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Newsletter/Contact CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black rounded-[2rem] p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4 tracking-tight">让我们一起创造。</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a href="mailto:170236806@qq.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors">
            立即联系
          </a>
        </motion.section>
      </main>

      <footer id="contact" className="border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">
            <div className="shrink-0 lg:max-w-[240px]">
              <div className="flex items-center gap-2.5 text-xl font-bold tracking-tighter">
                <img
                  src={siteLogo}
                  alt="JasonBai 个人网站"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10 shrink-0"
                  decoding="async"
                />
                JasonBai
              </div>
              <p className="mt-3 text-sm easlo-text-muted leading-relaxed">
              Vibe in, value out
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1 min-w-0">
              <div>
                <h3 className="text-sm font-bold text-black mb-4">页面</h3>
                <ul className="space-y-3 text-sm">
                  {FOOTER_PAGE_LINKS.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="easlo-text-muted hover:text-black transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black mb-4">项目</h3>
                <ul className="space-y-3 text-sm">
                  {PROJECTS.map((project) => (
                    <li key={project.title}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="easlo-text-muted hover:text-black transition-colors"
                      >
                        {project.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black mb-4">社交</h3>
                <ul className="space-y-3 text-sm">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 easlo-text-muted hover:text-black transition-colors"
                      >
                        <social.icon size={14} strokeWidth={2} aria-hidden />
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-2 text-xs easlo-text-muted text-center">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              © 2026 晋ICP备2024041192号-2
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
