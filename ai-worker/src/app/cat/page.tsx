"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { CatTranslator } from "@/components/CatTranslator";

export default function CatPage() {
  return (
    <div className="min-h-screen bg-surface">
      <nav className="sticky top-0 z-50 h-12 flex items-center px-5 md:px-10 bg-surface/80 backdrop-blur-lg border-b border-border-light">
        <Link href="/" className="flex items-center gap-2 text-muted hover:text-accent-deep transition-colors">
          <ArrowLeft className="text-base" />
          <span className="text-sm">返回</span>
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-10 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">🐱</span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              猫咪<span className="text-gradient-cute">翻译官</span>
            </h1>
            <p className="text-muted text-sm mt-1">选择你家猫咪的行为，让小伙伴帮你翻译它在想什么~</p>
          </div>
        </div>
        <CatTranslator />
      </main>
    </div>
  );
}
