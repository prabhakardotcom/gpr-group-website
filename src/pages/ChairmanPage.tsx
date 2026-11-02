import React, { useEffect, useState } from 'react';
import { CHAIRMAN_DATA, CORPORATE_INFO } from '../data/portalData';
import { LiquidGoldShader } from '../components/LiquidGoldShader';
import { PageId } from '../components/Header';

interface ChairmanPageProps {
  onNavigate: (page: PageId) => void;
}

export const ChairmanPage: React.FC<ChairmanPageProps> = ({ onNavigate }) => {
  const [yearsCount, setYearsCount] = useState(0);
  const [sectorsCount, setSectorsCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setYearsCount(Math.round(easeOutExpo * 25));
      setSectorsCount(Math.round(easeOutExpo * 5));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Subtle Ambient Accents */}
        <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-[#d3e4fe]/30 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-80 left-0 w-80 h-80 rounded-full bg-[#99efe5]/20 blur-3xl pointer-events-none -z-10"></div>

        {/* 1. EXECUTIVE HEADER HERO WITH GOLDEN WEBGL SHADER BACKGROUND */}
        <header className="mb-10 relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-amber-300/40 bg-[#0a192f]">
          {/* Dynamic Animated Golden WebGL Shader Canvas */}
          <div className="absolute inset-0 w-full h-full object-cover pointer-events-none">
            <LiquidGoldShader className="w-full h-full object-cover" />
          </div>

          {/* Navy Gradient Overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0d1c32]/85 to-[#0a192f]/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1c32]/80 backdrop-blur-md text-amber-200 border border-amber-400/40 text-xs tracking-widest uppercase mb-4 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
              <span className="font-semibold text-amber-100">Executive Leadership</span>
              <span className="text-amber-300/60">•</span>
              <span className="text-[10px] tracking-wider text-amber-300/90 font-medium">Sovereign Governance</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md animate-executive-hero">
                  {CHAIRMAN_DATA.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-[1px] w-8 bg-gradient-to-r from-amber-400 to-transparent"></span>
                  <p className="font-serif-heading text-xl sm:text-2xl text-amber-200/90 font-semibold tracking-wide">
                    {CHAIRMAN_DATA.shortTitle}
                  </p>
                </div>
              </div>

              <div className="max-w-xl text-left lg:text-right">
                <p className="font-serif-heading text-base sm:text-lg text-slate-100/90 leading-relaxed drop-shadow font-medium">
                  Leading a diversified multi-sector enterprise with a steadfast commitment to accessible education, healthcare development, and values-driven business growth.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* 2. CHAIRMAN PROFILE & QUICK LEADERSHIP FACTS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Portrait Column */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative bg-white rounded-2xl border border-amber-300/40 shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600"></div>
              <div className="p-4 sm:p-6 pb-4">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 shadow-sm border border-slate-200">
                  <img
                    alt="G. Prabhakar Rao, Chairman of GPR Group seated in corporate executive boardroom"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    src={CHAIRMAN_DATA.portraitImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-200 font-semibold">
                        Office of the Chair
                      </span>
                      <span className="font-serif-heading text-xl font-bold text-white">
                        {CHAIRMAN_DATA.name}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-amber-400/30">
                      <span className="material-symbols-outlined text-[20px] text-amber-300">verified</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-[#44474d] font-semibold">
                    {CHAIRMAN_DATA.name}, Chairman
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300/50 font-medium">
                    Institutional Sovereign
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Accent Strip Below Portrait */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-amber-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-[#006a63] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block font-space text-3xl font-bold text-[#0b1c30]">
                  {yearsCount}+
                </span>
                <span className="text-[11px] text-[#44474d] uppercase tracking-wider font-semibold">
                  Years of Stewardship
                </span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-amber-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c76c00] via-amber-400 to-[#c76c00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block font-space text-3xl font-bold text-[#0b1c30]">
                  {sectorsCount}
                </span>
                <span className="text-[11px] text-[#44474d] uppercase tracking-wider font-semibold">
                  Strategic Sectors
                </span>
              </div>
            </div>

            {/* Foundational Vision Strip */}
            <div className="mt-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#006a63]"></div>
                <span className="text-xs uppercase tracking-widest text-[#44474d] font-semibold">
                  Foundational Vision
                </span>
              </div>
              <p className="text-xs text-[#0b1c30] leading-relaxed">
                Championing inclusive regional development, world-class healthcare education, and ethical enterprise across Telangana and global corridors.
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#44474d]">
                <span className="font-medium">Hyderabad Corporate Secretariat</span>
                <span className="material-symbols-outlined text-[16px] text-[#006a63]">shield</span>
              </div>
            </div>
          </div>

          {/* Quick Leadership Facts & Dossier Side */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
            {/* Leadership Overview Dossier */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#44474d] block font-semibold">
                    Governance Dossier
                  </span>
                  <h2 className="font-serif-heading text-2xl font-bold text-[#0b1c30]">
                    Leadership Overview
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/40">
                  <span className="text-[11px] uppercase tracking-wider text-[#44474d] block mb-1 font-semibold">
                    Executive Position
                  </span>
                  <span className="font-space text-base font-bold text-[#0b1c30]">Chairman &amp; Founder</span>
                  <p className="text-xs text-[#44474d] mt-1">Lead Architect of Group Strategy &amp; Governance</p>
                </div>

                <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/40">
                  <span className="text-[11px] uppercase tracking-wider text-[#44474d] block mb-1 font-semibold">
                    Corporate Base
                  </span>
                  <span className="font-space text-base font-bold text-[#0b1c30]">Hyderabad, Telangana</span>
                  <p className="text-xs text-[#44474d] mt-1">Headquartered in Karmanghat Campus Corridor</p>
                </div>

                <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/40 md:col-span-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#44474d] block mb-1 font-semibold">
                    Group Scope &amp; Enterprises
                  </span>
                  <span className="text-sm font-semibold text-[#0b1c30] block">
                    5 Member Organizations Across Multi-Industry Sectors
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-white text-[#0b1c30] text-xs shadow-sm border border-slate-200 font-medium">
                      LacSo IHM
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-[#0b1c30] text-xs shadow-sm border border-slate-200 font-medium">
                      GPR LacSo Nursing
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-[#0b1c30] text-xs shadow-sm border border-slate-200 font-medium">
                      Go Grow International
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-[#0b1c30] text-xs shadow-sm border border-slate-200 font-medium">
                      GPR Infra
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white text-[#0b1c30] text-xs shadow-sm border border-slate-200 font-medium">
                      GPR Growth Invest
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1c32] text-white md:col-span-2 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300/70 to-transparent"></div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-200 block mb-1 font-semibold">
                    Foundational Ethos
                  </span>
                  <p className="font-serif-heading text-lg sm:text-xl text-white italic">
                    “Service with Purpose, Growth with Integrity”
                  </p>
                </div>
              </div>
            </div>

            {/* Chairman's Message */}
            <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute -right-4 -bottom-6 select-none opacity-5 text-slate-900 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">format_quote</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006a63]"></div>
                <span className="text-xs uppercase tracking-widest text-[#44474d] font-semibold">
                  Chairman&apos;s Secretariat Message
                </span>
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0b1c30] mb-4">
                Building Institutional Value Anchored in Human Dignity
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#44474d] leading-relaxed">
                <p className="relative pl-4 text-[#0b1c30] font-serif-heading text-base sm:text-lg italic font-medium">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-[#c76c00] rounded-full"></span>
                  {CHAIRMAN_DATA.message}
                </p>
                <p>
                  True corporate resilience does not emerge from short-term fiscal expansion; it is cultivated through structural governance, transparent operations, and the deliberate empowerment of the communities we touch. As Telangana continues its ascendancy as a premier innovation corridor, GPR Group remains dedicated to creating pathways for youth and professionals to excel globally.
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-100">
                <div>
                  <span className="font-serif-heading text-lg font-bold text-[#0b1c30] block">
                    {CHAIRMAN_DATA.name}
                  </span>
                  <span className="text-[11px] text-[#44474d] uppercase tracking-wider font-semibold">
                    {CHAIRMAN_DATA.title}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#006a63] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    Executive Seal
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 3. STRATEGIC FOCUS AREAS: 3 PILLARS */}
        <section className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#44474d] font-bold block mb-1">
                Guiding Framework
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#0b1c30]">
                Strategic Focus Areas
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#44474d] max-w-md mt-2 md:mt-0 leading-relaxed">
              The three foundational pillars steering resource allocation, governance policies, and philanthropic outreach across all five member organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHAIRMAN_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] mb-4 border border-slate-200/50">
                    <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold block mb-1">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#0b1c30] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006a63]"></span>
                    {pillar.entities}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ROOTED IN HYDERABAD: CULTURE, STEWARDSHIP & COMMUNITY IMPACT */}
        <section className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#99efe5]/50 text-[#006f67] text-xs tracking-widest uppercase mb-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#006a63]"></span>
                REGIONAL ANCHOR &amp; HERITAGE
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30] tracking-tight">
                Rooted in Hyderabad: Culture, Stewardship &amp; Community Impact
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#44474d] max-w-lg mt-2 md:mt-0 leading-relaxed">
              How Hyderabad’s timeless spirit of warmth, entrepreneurial ambition, and cultural confluence shapes Chairman G. Prabhakar Rao’s institutional philosophy across Telangana and beyond.
            </p>
          </div>

          {/* 2-Column Visual Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* Card 1: Historic Old Hyderabad */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  alt="Historic Old Hyderabad Charminar with bustling pearl bazaars and architectural heritage"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={CORPORATE_INFO.images.charminarHeritage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/80 via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold border border-slate-200 shadow-sm inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Historic Old Hyderabad · Cultural Soul &amp; Trust
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-serif-heading text-2xl font-bold text-[#0b1c30] mb-2">
                    The Soul of Hyderabad: Trust, Hospitality &amp; Humility
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                    Decades of living and working in Hyderabad have ingrained the values of Ganga-Jamuni tehzeeb, genuine human warmth, and accessible opportunities into every initiative led by Chairman Rao. Deeply committed to grassroots community welfare in Kharmanghat, Saroornagar, and broader Telangana, he ensures that quality healthcare and vocational education are placed within reach of every aspiring family, regardless of economic background.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-xs font-medium border border-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-[#006a63]">verified</span>
                    True leadership begins with honoring where we come from.
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Modern HITEC City */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  alt="Modern Hyderabad Cyberabad and HITEC City skyline at sunrise with elevated metro"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={CORPORATE_INFO.images.cyberabadSkyline}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32]/80 via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold border border-slate-200 shadow-sm inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006a63]"></span>
                    HITEC City &amp; Cyberabad · Future-Forward Growth
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-serif-heading text-2xl font-bold text-[#0b1c30] mb-2">
                    The Gateway of Ambition: Empowering Hyderabad’s Next Generation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                    Guided by the Chairman’s forward-looking conviction that Hyderabad stands as one of the world&apos;s greatest innovation and service corridors, GPR Group actively prepares local youth for global mobility. Through GPR LacSo Nursing Colleges, LacSo IHM, Go Grow International, and GPR Infra, he builds vital bridges connecting Hyderabadi talent directly to premier international careers and world-class regional civic infrastructure.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-xs font-medium border border-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-[#006a63]">trending_up</span>
                    Equipping local talent with world-standard competencies.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection Quote Callout Box */}
          <div className="relative bg-[#eff4ff]/80 rounded-2xl border border-amber-300/40 p-6 sm:p-8 shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-[#006a63] to-amber-500"></div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[28px]">format_quote</span>
              </div>
              <div className="flex-1">
                <blockquote className="font-serif-heading text-base sm:text-xl text-[#0b1c30] leading-relaxed italic font-medium">
                  {CHAIRMAN_DATA.hyderabadQuote}
                </blockquote>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="font-bold text-[#0b1c30] uppercase tracking-wider">
                    — {CHAIRMAN_DATA.name}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#44474d] font-medium">
                    Chairman &amp; Founder, GPR Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VERIFICATION & GOVERNANCE TRANSPARENCY NOTE */}
        <section className="mb-14">
          <div className="rounded-2xl bg-[#eff4ff] border border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#006a63] shrink-0 shadow-sm border border-slate-200">
                <span className="material-symbols-outlined text-[22px]">policy</span>
              </div>
              <p className="text-xs text-[#44474d] leading-relaxed">
                <strong className="text-[#0b1c30] font-semibold">Institutional Governance Notice:</strong> Official biographical and corporate governance milestones are verified through GPR Group official records. For corporate inquiries with the Chairman’s Office, please visit the Contact page.
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0b1c30] text-xs tracking-wide font-semibold shadow-sm border border-slate-200 inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#006a63]"></span>
                Records Verified 2026
              </span>
            </div>
          </div>
        </section>

        {/* 6. DIRECT CTAs: CONNECT WITH LEADERSHIP */}
        <section className="bg-[#0d1c32] text-white rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-slate-700/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#d6e3ff] block mb-2 font-semibold">
                Connect with Leadership
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                Engage with the Chairman&apos;s Secretariat
              </h2>
              <p className="text-xs sm:text-sm text-[#b9c7e4] mt-2 leading-relaxed">
                Direct institutional proposals, strategic joint-ventures, academic affiliations, or sovereign investor relations to the Chairman&apos;s executive administrative desk.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold hover:bg-slate-100 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Office</span>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('our-businesses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 backdrop-blur-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Group Businesses</span>
                <span className="material-symbols-outlined text-[18px]">business_center</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
