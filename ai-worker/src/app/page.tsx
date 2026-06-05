"use client";

import {
  Sparkle,
  Heart,
  GithubLogo,
  TwitterLogo,
  Rss,
  Plus,
  Minus,
  ArrowRight,
} from "@phosphor-icons/react";
import { TerminalTypewriter } from "@/components/TerminalTypewriter";
import Link from "next/link";
import {
  RevealOnScroll,
  CountUp,
  ParallaxFloat,
} from "@/components/Animations";
import { useState } from "react";

/* ═══ NAV ═══ */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center px-5 md:px-10 bg-surface/80 backdrop-blur-lg border-b border-border-light">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-cute to-accent-warm flex items-center justify-center shadow-sm">
          <Sparkle weight="fill" className="text-white text-xs" />
        </div>
        <span className="font-bold text-sm">奇妙小角落</span>
      </div>
    </nav>
  );
}

/* ═══ HERO ═══ */
function Hero() {
  return (
    <section className="relative pt-12 overflow-hidden warm-gradient">
      <ParallaxFloat className="absolute top-24 right-[15%] text-5xl opacity-70 pointer-events-none hidden md:block" offset={12}>☁️</ParallaxFloat>
      <ParallaxFloat className="absolute top-40 left-[10%] text-4xl opacity-60 pointer-events-none hidden md:block" offset={8}>🦋</ParallaxFloat>
      <ParallaxFloat className="absolute bottom-32 right-[10%] text-5xl opacity-60 pointer-events-none hidden md:block" offset={15}>🌈</ParallaxFloat>
      <ParallaxFloat className="absolute bottom-48 left-[20%] text-4xl opacity-50 pointer-events-none hidden md:block" offset={10}>🌸</ParallaxFloat>
      <ParallaxFloat className="absolute top-32 left-[25%] text-3xl opacity-40 pointer-events-none hidden md:block" offset={14}>⭐</ParallaxFloat>
      <ParallaxFloat className="absolute top-16 right-[30%] text-3xl opacity-50 pointer-events-none hidden md:block" offset={9}>🕊️</ParallaxFloat>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-16 pb-12 flex flex-col items-center gap-5">
        <div className="badge badge-cute">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-warm animate-pulse" />
          欢迎来做客
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          和小伙伴一起
          <br />
          <span className="text-gradient-warm">玩点有趣的</span>
        </h1>

        <p className="text-base md:text-lg text-muted max-w-md leading-relaxed">
          这里住着一群可爱的小伙伴，它们会画画、写诗、讲笑话，偶尔还会犯点小迷糊。
        </p>

        <TerminalTypewriter />

        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
          <Link href="/cat" className="badge badge-cute hover:scale-105 transition-transform cursor-pointer">🐱 猫咪翻译官</Link>
          <Link href="/dream" className="badge badge-mint hover:scale-105 transition-transform cursor-pointer">🎨 梦境画师</Link>
          <Link href="/melody" className="badge badge-warm hover:scale-105 transition-transform cursor-pointer">🎵 旋律精灵</Link>
          <Link href="/poem" className="badge badge-lavender hover:scale-105 transition-transform cursor-pointer">📝 诗歌小助手</Link>
        </div>
      </div>

      <div className="divider-soft" />
    </section>
  );
}

/* ═══ MARQUEE ═══ */
const MARQUEE_ITEMS = [
  { emoji: "🎨", text: "画画", color: "#f472b6" },
  { emoji: "🐱", text: "猫语翻译", color: "#fb923c" },
  { emoji: "🎵", text: "作曲助手", color: "#34d399" },
  { emoji: "📝", text: "写诗机器人", color: "#a78bfa" },
  { emoji: "🌈", text: "梦境生成", color: "#38bdf8" },
  { emoji: "🧩", text: "脑筋急转弯", color: "#f472b6" },
  { emoji: "🌻", text: "植物取名", color: "#fb923c" },
  { emoji: "🔮", text: "每日运势", color: "#a78bfa" },
  { emoji: "📖", text: "故事接龙", color: "#34d399" },
  { emoji: "🌙", text: "晚安故事", color: "#38bdf8" },
  { emoji: "🍕", text: "美食推荐", color: "#fb923c" },
  { emoji: "🦋", text: "蝴蝶图鉴", color: "#f472b6" },
];

function Marquee() {
  return (
    <div className="py-4 bg-surface-warm border-y border-border-light overflow-hidden">
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div
            key={i}
            className="mx-2 px-4 py-2 rounded-full whitespace-nowrap hover:scale-110 transition-transform cursor-default flex items-center gap-1.5 text-sm font-medium"
            style={{
              backgroundColor: `${item.color}15`,
              border: `1px solid ${item.color}30`,
              color: item.color,
            }}
          >
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══ FEATURE SECTIONS ═══ */
const GAMES = [
  { id: "cat", emoji: "🐱", title: "猫咪", accent: "翻译官", desc: "选择你家猫咪的行为，让小伙伴帮你翻译它在想什么~", href: "/cat", gradient: "text-gradient-cute", bg: "from-pink-50 to-rose-50", border: "border-pink-200/60" },
  { id: "dream", emoji: "🎨", title: "梦境", accent: "画师", desc: "描述你的梦，小伙伴帮你画出来。多种画风任你挑选~", href: "/dream", gradient: "text-gradient-sky", bg: "from-sky-50 to-blue-50", border: "border-sky-200/60" },
  { id: "melody", emoji: "🎵", title: "旋律", accent: "精灵", desc: "选择心情和节奏，小伙伴为你谱写一段专属旋律~", href: "/melody", gradient: "text-gradient-cute", bg: "from-amber-50 to-orange-50", border: "border-amber-200/60" },
  { id: "poem", emoji: "📝", title: "诗歌", accent: "小助手", desc: "给一个词，小伙伴还你一首诗。现代诗、古风、俳句随你选~", href: "/poem", gradient: "text-gradient-sky", bg: "from-violet-50 to-purple-50", border: "border-violet-200/60" },
];

function GamesGrid() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            来<span className="text-gradient-warm">玩一玩</span>
          </h2>
          <p className="text-muted mt-2 text-sm">每个小伙伴都有自己的拿手好戏，点进去试试~</p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GAMES.map((g) => (
            <RevealOnScroll key={g.id}>
              <Link href={g.href} className="group block">
                <div className={`card-cute p-6 h-full bg-gradient-to-br ${g.bg} border ${g.border}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{g.emoji}</span>
                    <h3 className="text-xl font-bold tracking-tight">
                      {g.title}<span className={g.gradient}>{g.accent}</span>
                    </h3>
                  </div>
                  <p className="text-muted text-sm mb-4">{g.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-accent-deep opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>开始玩</span>
                    <ArrowRight className="text-sm" weight="bold" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ AI FRIENDS ═══ */
const FRIENDS = [
  { name: "小蓝", emoji: "🐧", desc: "喜欢画画的企鹅", skill: "水彩画", color: "#38bdf8" },
  { name: "花花", emoji: "🌸", desc: "爱写诗的樱花", skill: "俳句", color: "#f472b6" },
  { name: "豆豆", emoji: "🫘", desc: "会作曲的咖啡豆", skill: "爵士乐", color: "#fb923c" },
  { name: "云朵", emoji: "☁️", desc: "漂浮的哲学家", skill: "冷笑话", color: "#38bdf8" },
  { name: "星星", emoji: "⭐", desc: "夜空导航员", skill: "讲故事", color: "#a78bfa" },
  { name: "泡泡", emoji: "🫧", desc: "透明的梦想家", skill: "气泡音", color: "#34d399" },
  { name: "橘子", emoji: "🍊", desc: "酸甜的小厨师", skill: "美食推荐", color: "#fb923c" },
  { name: "雪球", emoji: "⛄", desc: "怕热但很暖", skill: "安慰人", color: "#38bdf8" },
  { name: "蘑菇", emoji: "🍄", desc: "安静的生长者", skill: "植物百科", color: "#34d399" },
  { name: "饼干", emoji: "🍪", desc: "酥脆的乐天派", skill: "烘焙攻略", color: "#fb923c" },
];

function AIFriends() {
  return (
    <section id="friends" className="px-6 md:px-10 py-16 md:py-24 bg-surface-warm">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="text-accent-cute text-lg" weight="duotone" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            认识一下<span className="text-gradient-cute">小伙伴</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {FRIENDS.map((f) => (
            <RevealOnScroll key={f.name}>
              <div
                className="card-cute p-4 text-center"
                style={{ borderColor: `${f.color}40`, boxShadow: `0 2px 12px ${f.color}15` }}
              >
                <div className="text-4xl mb-2 animate-wiggle">{f.emoji}</div>
                <div className="font-semibold text-sm mb-0.5">{f.name}</div>
                <div className="text-xs text-muted mb-2">{f.desc}</div>
                <span className="text-[10px] badge badge-blue">✨ {f.skill}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FUN FACTS ═══ */
const FACTS = [
  { emoji: "🎨", value: 8420, suffix: "幅", label: "画的小画", color: "#f472b6" },
  { emoji: "📝", value: 15600, suffix: "首", label: "写的小诗", color: "#a78bfa" },
  { emoji: "🐱", value: 3200, suffix: "只", label: "翻译过的猫", color: "#fb923c" },
  { emoji: "😊", value: 99, suffix: "%", label: "用户说「好可爱」", color: "#34d399" },
];

function FunFacts() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-surface-blue">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            一些<span className="text-gradient-warm">有趣的小数字</span>
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FACTS.map((f) => (
            <RevealOnScroll key={f.label}>
              <div className="card-cute p-5 text-center">
                <div className="text-3xl mb-2">{f.emoji}</div>
                <div className="text-2xl md:text-3xl font-bold tabular-nums" style={{ color: f.color }}>
                  <CountUp target={f.value} suffix={f.suffix} />
                </div>
                <div className="text-xs text-muted mt-1">{f.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
const FAQS = [
  { q: "小伙伴真的会画画吗？", a: "会的！虽然画得可能不像人类大师那么好，但每一幅都充满了独特的想象力和可爱。" },
  { q: "猫咪翻译准不准？", a: "我们不敢保证 100% 准确，但至少比你盯着猫看半天猜的靠谱一点点。猫咪本人拒绝置评。" },
  { q: "旋律精灵生成的音乐能下载吗？", a: "目前还不支持下载，但你可以多听几遍把它记在心里~" },
  { q: "诗歌小助手写的诗可以商用吗？", a: "当然可以！不过如果你因此成了著名诗人，记得提一下奇妙小角落哦。" },
  { q: "小伙伴会不会有一天变得太聪明？", a: "目前看来它们最聪明的时刻是学会了给自己取名字。离统治世界还远着呢。" },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-surface-warm">
      <div className="max-w-2xl mx-auto">
        <RevealOnScroll className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            好奇宝宝<span className="text-gradient-warm">问答</span>
          </h2>
        </RevealOnScroll>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <RevealOnScroll key={i}>
              <div className="card-cute overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface-warm/50 transition-colors"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  {open === i ? (
                    <Minus className="text-accent text-base shrink-0" weight="bold" />
                  ) : (
                    <Plus className="text-accent text-base shrink-0" weight="bold" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <p className="px-5 pb-4 text-sm text-muted leading-relaxed">💬 {faq.a}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 bg-surface-warm border-t border-border-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-cute to-accent-warm flex items-center justify-center">
                <Sparkle weight="fill" className="text-white text-xs" />
              </div>
              <span className="font-bold text-sm">奇妙小角落</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              一个住满可爱小伙伴的小角落。<br />来玩呀~
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">玩一玩</h4>
            <div className="flex flex-col gap-1.5 text-xs text-muted">
              <Link href="/cat" className="hover:text-accent-deep transition-colors">🐱 猫咪翻译</Link>
              <Link href="/dream" className="hover:text-accent-deep transition-colors">🎨 梦境画师</Link>
              <Link href="/melody" className="hover:text-accent-deep transition-colors">🎵 旋律精灵</Link>
              <Link href="/poem" className="hover:text-accent-deep transition-colors">📝 诗歌助手</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">小伙伴</h4>
            <div className="flex flex-col gap-1.5 text-xs text-muted">
              <a href="#friends" className="hover:text-accent-deep transition-colors">全部角色</a>
              <a href="#" className="hover:text-accent-deep transition-colors">角色故事</a>
              <a href="#" className="hover:text-accent-deep transition-colors">新朋友预告</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">关于</h4>
            <div className="flex flex-col gap-1.5 text-xs text-muted">
              <a href="#" className="hover:text-accent-deep transition-colors">我们是谁</a>
              <a href="#" className="hover:text-accent-deep transition-colors">隐私政策</a>
              <a href="#" className="hover:text-accent-deep transition-colors">联系我们</a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted">© 2026 奇妙小角落 · Made with 💙 & ✨</div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-muted hover:text-accent transition-colors"><GithubLogo className="text-base" /></a>
            <a href="#" className="text-muted hover:text-accent transition-colors"><TwitterLogo className="text-base" /></a>
            <a href="#" className="text-muted hover:text-accent transition-colors"><Rss className="text-base" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══ PAGE ═══ */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <GamesGrid />
        <AIFriends />
        <FunFacts />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
