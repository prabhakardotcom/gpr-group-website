import React from 'react';
import { CORPORATE_INFO, PORTFOLIO_ENTITIES, CHAIRMAN_DATA } from '../data/portalData';
import { LiquidGoldShader } from '../components/LiquidGoldShader';
import { PageId } from '../components/Header';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const milestones = [
    {
      year: 'Foundational Era',
      title: 'Academic & Professional Mentorship Roots',
      desc: 'Founded on educational integrity and technical mastery under Chairman G. Prabhakar Rao, starting from collegiate faculty and institutional leadership in Telangana engineering institutions.'
    },
    {
      year: 'Institutional Expansion',
      title: 'Establishment of Healthcare & Hospitality Colleges',
      desc: 'Commissioning of GPR LacSo Nursing Colleges and LacSo Institute of Hotel Management at Sri Vishnu Complex in Kharmanghat, offering INC-aligned medical curricula and global hospitality standards.'
    },
    {
      year: 'Cross-Border Operations',
      title: 'Launch of Go Grow International',
      desc: 'Inception of global advisory networks and cross-border mobility corridors, connecting Indian youth to premier international employment and transnational study pathways.'
    },
    {
      year: 'Civil Development',
      title: 'Infrastructure & Plotted Real Estate (GPR Infra)',
      desc: 'Venturing into commercial and plotted civil frameworks across Hyderabad’s rapid growth corridors, executing high-standard urban developments.'
    },
    {
      year: 'Strategic Capital',
      title: 'Growth Advisory & Asset Allocation (GPR Growth Invest)',
      desc: 'Formalizing mutual fund distribution and long-term corporate equity strategies under certified NISM Series V-A fiduciary protocols.'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION WITH GOLDEN WEBGL SHADER */}
      <section className="relative w-full bg-[#0a192f] py-16 overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <LiquidGoldShader className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[#0a192f]/75 backdrop-blur-[1px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/85 to-transparent pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0f2442]/90 border border-amber-400/30 text-amber-200 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                CONGLOMERATE OVERVIEW
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
              About GPR Group
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              An authoritative multi-sector institution driving sustainable enterprise development, fiscal excellence, and cross-sector growth across healthcare education, hospitality, global commerce, civil infrastructure, and capital investments.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY & ETHOS */}
      <section className="w-full py-16 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold">
                INSTITUTIONAL FOUNDATION
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30]">
                Built on Integrity, Driven by Human Potential
              </h2>
              <p className="text-sm text-[#44474d] leading-relaxed">
                Headquartered at Sri Vishnu Complex in Kharmanghat, Hyderabad, GPR Group coordinates a network of institutions designed to empower generations through skill, economic resilience, and infrastructural modernization.
              </p>
              <p className="text-sm text-[#44474d] leading-relaxed">
                By uniting clinical education, culinary hospitality training, international employment networks, plotted land development, and strategic financial distribution, GPR Group operates as a unified engine for individual upward mobility and regional advancement.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('our-businesses')}
                  className="px-6 py-3 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-all cursor-pointer shadow-sm inline-flex items-center gap-2"
                >
                  <span>Explore Subsidiaries</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('chairman')}
                  className="px-6 py-3 rounded-lg bg-white border border-slate-200 text-[#0b1c30] text-xs font-semibold hover:bg-slate-100 transition-all cursor-pointer shadow-sm inline-flex items-center gap-2"
                >
                  <span>Chairman&apos;s Profile</span>
                  <span className="material-symbols-outlined text-[16px]">person</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a63]">
                    <span className="material-symbols-outlined text-[22px]">visibility</span>
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30]">Our Vision</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    To build a trusted, diversified group that creates lasting value through quality education, meaningful career opportunities, real estate development and informed financial services.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a63]">
                    <span className="material-symbols-outlined text-[22px]">flag</span>
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30]">Our Mission</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    To deliver transparent, compliant, and world-standard programs that equip local students and clients with competencies to compete at the highest global levels.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a63]">
                    <span className="material-symbols-outlined text-[22px]">balance</span>
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30]">Ethical Governance</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Upholding strict institutional accountability, zero-compromise compliance with government regulatory bodies, and honest, transparent counsel for families and investors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a63]">
                    <span className="material-symbols-outlined text-[22px]">hub</span>
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30]">Synergistic Scale</h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Unlocking cross-sector strengths between institutional education, real estate infrastructure, and capital solutions to foster enduring regional prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="w-full py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold">
              HISTORICAL TRAJECTORY
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Decades of Purposeful Growth
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              Tracing the disciplined journey of GPR Group from grassroots mentorship into an expansive multi-sector conglomerate.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0d1c32] border-4 border-white shadow"></div>
                <div className="p-5 rounded-2xl bg-[#eff4ff] border border-slate-200/70 hover:shadow-md transition-shadow">
                  <span className="text-xs font-space font-bold uppercase tracking-wider text-[#006a63] block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONGLOMERATE PORTFOLIO PREVIEW */}
      <section className="w-full py-16 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold">
                PORTFOLIO ENTITIES
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#0b1c30]">
                Five Operating Divisions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('our-businesses')}
              className="text-xs font-semibold text-[#006a63] hover:text-[#0b1c30] inline-flex items-center gap-1"
            >
              <span>View In-Depth Dossiers</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PORTFOLIO_ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#006a63] mb-3">
                    <span className="material-symbols-outlined text-[18px]">{entity.icon}</span>
                  </div>
                  <h4 className="font-serif-heading text-base font-bold text-[#0b1c30] leading-snug mb-1">
                    {entity.shortName}
                  </h4>
                  <p className="text-[11px] text-[#44474d] line-clamp-3">
                    {entity.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <a
                    href={entity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#006a63] hover:text-[#0b1c30] inline-flex items-center gap-1"
                  >
                    <span>{entity.domain}</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP LINK CTA */}
      <section className="w-full py-12 bg-[#0d1c32] text-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-heading text-2xl font-bold">
              Guided by Experienced Stewardship
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Read Chairman G. Prabhakar Rao&apos;s biography, leadership credentials, and Hyderabadi philosophy.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                onNavigate('chairman');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold hover:bg-slate-100 transition-all cursor-pointer shadow"
            >
              Chairman&apos;s Profile
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all cursor-pointer"
            >
              Contact Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
