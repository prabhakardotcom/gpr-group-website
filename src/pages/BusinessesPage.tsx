import React, { useState } from 'react';
import { PORTFOLIO_ENTITIES } from '../data/portalData';
import { LiquidGoldShader } from '../components/LiquidGoldShader';
import { PageId } from '../components/Header';

interface BusinessesPageProps {
  onNavigate: (page: PageId) => void;
}

export const BusinessesPage: React.FC<BusinessesPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [matrixSearch, setMatrixSearch] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Divisions' },
    { id: 'nursing-colleges', label: '01. Healthcare Education' },
    { id: 'hotel-management', label: '02. Hospitality' },
    { id: 'go-grow', label: '03. Global Services' },
    { id: 'gpr-infra', label: '04. Infrastructure' },
    { id: 'growth-invest', label: '05. Growth Capital' },
  ];

  const displayedEntities = activeFilter === 'all'
    ? PORTFOLIO_ENTITIES
    : PORTFOLIO_ENTITIES.filter((e) => e.id === activeFilter);

  const filteredMatrix = PORTFOLIO_ENTITIES.filter((e) => {
    const q = matrixSearch.toLowerCase();
    return (
      e.name.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      e.jurisdiction.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.domain.toLowerCase().includes(q)
    );
  });

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
    if (id !== 'all') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* TOP HERO & CONTEXT BANNER WITH LIQUID GOLD WEBGL SHADER */}
      <section className="relative w-full bg-[#0a192f] py-16 overflow-hidden min-h-[380px] flex items-center">
        {/* Animated Liquid Gold WebGL Shader Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <LiquidGoldShader className="w-full h-full object-cover" />
        </div>

        {/* Dark Navy & Vignette Overlay */}
        <div className="absolute inset-0 bg-[#0a192f]/75 backdrop-blur-[1px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/85 to-transparent pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0f2442]/90 border border-amber-400/30 text-amber-200 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Our Operating Businesses
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
              Our Businesses
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
              GPR Group brings together organizations working across education, international careers, real estate and financial services. Visit each organization’s official website to learn more.
            </p>

            {/* Institutional Trust Notice */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-[#0d223f]/85 border border-amber-400/25 rounded-xl shadow-lg backdrop-blur-md max-w-2xl">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-400">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">Institutional Registry Note:</strong> All external links connect directly to the respective entity&apos;s verified website. No placeholder or third-party links are used.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ENTITY SHOWCASE SECTION */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12">
        {/* Filter / Quick-Jump Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
          <div className="flex items-center gap-2 text-[#44474d] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[18px]">domain</span>
            <span>Portfolio Breakdown (5 Operating Divisions)</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0d1c32] text-white font-semibold shadow-sm'
                    : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Entities List */}
        <div className="space-y-8">
          {displayedEntities.map((entity) => (
            <article
              key={entity.id}
              id={entity.id}
              className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Details & Accreditations */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded bg-[#99efe5] text-[#006f67] text-[11px] font-semibold tracking-wider uppercase">
                      {entity.tagline}
                    </span>
                    {entity.subCategory && (
                      <span className="px-2.5 py-0.5 rounded bg-[#eff4ff] text-[#44474d] text-[11px]">
                        {entity.subCategory}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0b1c30]">
                      {entity.name}
                    </h2>
                    <p className="text-sm text-[#44474d] mt-1 leading-relaxed">
                      {entity.description}
                    </p>
                  </div>

                  {/* Program Offerings Bento (Nursing Specific) */}
                  {entity.programs && (
                    <div className="bg-[#eff4ff] rounded-xl p-4 space-y-3">
                      <h3 className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wide flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#006a63] text-[18px]">school</span>
                        Programs Offered
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {entity.programs.map((prog, idx) => (
                          <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-semibold text-[#0b1c30] block">{prog.name}</span>
                            <span className="text-[#44474d] block mt-0.5">{prog.duration}</span>
                            <span className="text-[11px] text-[#006a63] font-semibold mt-1 inline-block">
                              Eligibility: {prog.eligibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Campus & Clinical Facilities (Nursing) */}
                  {entity.facilities && (
                    <div>
                      <h4 className="text-[11px] font-semibold text-[#44474d] uppercase tracking-wider mb-2">
                        Campus &amp; Clinical Simulation Facilities
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#0b1c30]">
                        {entity.facilities.map((fac, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#eff4ff]">
                            <span className="material-symbols-outlined text-[16px] text-[#006a63]">
                              {idx % 2 === 0 ? 'biotech' : 'medical_services'}
                            </span>
                            <span className="truncate">{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strategic Pillars (Hospitality, Go Grow, Infra, Growth Invest) */}
                  {entity.pillars && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {entity.pillars.map((pillar, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-[#eff4ff] space-y-1">
                          <div className="flex items-center gap-2 text-[#0b1c30] font-semibold text-xs">
                            <span className="material-symbols-outlined text-[#006a63] text-[18px]">
                              {pillar.icon}
                            </span>
                            <span>{pillar.title}</span>
                          </div>
                          <p className="text-[11px] text-[#44474d] leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Operational Index / Standards Bar for Infra */}
                  {entity.id === 'gpr-infra' && (
                    <div className="p-4 bg-[#eff4ff] rounded-xl space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-[#0b1c30] uppercase tracking-wider">
                          Quality Engineering Compliance Index
                        </span>
                        <span className="text-[#006a63] font-semibold">Tier-1 Standards</span>
                      </div>
                      <div className="w-full bg-[#d3e4fe] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#006a63] h-full rounded-full w-[94%]"></div>
                      </div>
                      <div className="flex justify-between items-center text-[#44474d] text-[11px]">
                        <span>Standardization: BIS &amp; Municipal Codes</span>
                        <span>Zero-Deviation Delivery Target</span>
                      </div>
                    </div>
                  )}

                  {/* Compliance Notice for Growth Invest */}
                  {entity.compliance && (
                    <div className="p-3 bg-[#eff4ff] rounded-xl text-[#44474d] text-xs flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-[#006a63] shrink-0 mt-0.5">
                        policy
                      </span>
                      <div>
                        <strong className="text-[#0b1c30] font-semibold">Institutional Governance Notice:</strong>{' '}
                        {entity.compliance}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Visual Dossier & Link Out */}
                <div className="lg:col-span-5 bg-[#eff4ff]/70 border border-slate-200/70 rounded-xl p-5 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Location or Portal URL block */}
                    {entity.location && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-semibold text-[#44474d] uppercase tracking-wider block">
                          Official Location
                        </span>
                        <div className="flex items-start gap-1.5 text-[#0b1c30] text-xs">
                          <span className="material-symbols-outlined text-[#75777e] text-[18px] shrink-0 mt-0.5">
                            pin_drop
                          </span>
                          <span className="leading-relaxed">{entity.location}</span>
                        </div>
                      </div>
                    )}

                    {/* Admissions Hotline if present */}
                    {entity.phone && (
                      <div className="p-3 bg-white rounded-lg space-y-1 shadow-sm">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006a63] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">call</span>
                          Admissions Hotline
                        </span>
                        <div className="font-space text-base font-bold text-[#0b1c30]">
                          {entity.phone}
                        </div>
                        <p className="text-[11px] text-[#44474d]">Central institutional counseling desk</p>
                      </div>
                    )}

                    {/* Visual Facility Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden relative shadow-sm group">
                      <img
                        alt={entity.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        src={entity.image}
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0d1c32]/85 text-white text-[11px] backdrop-blur-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">apartment</span>
                        <span>{entity.badge}</span>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[11px] font-semibold text-[#44474d] uppercase tracking-wider block">
                        Official Portal
                      </span>
                      <span className="font-space text-base font-bold text-[#0b1c30] block truncate">
                        {entity.domain}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-all shadow-sm group"
                      href={entity.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Visit {entity.domain}</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        north_east
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPREHENSIVE MATRIX / LEDGER SECTION */}
      <section className="w-full bg-[#eff4ff] py-16 border-t border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#44474d] font-bold">
                Institutional Ledger
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#0b1c30]">
                Comparative Operating Matrix
              </h2>
              <p className="text-xs sm:text-sm text-[#44474d]">
                Synchronized summary of verified corporate entities, primary domains, and direct digital endpoints.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Filter entities, sectors..."
                  value={matrixSearch}
                  onChange={(e) => setMatrixSearch(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0d1c32] w-56"
                />
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-[16px] text-slate-400">
                  search
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#006a63] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#006a63]"></span>
                <span>All 5 Entities Active &amp; Verified</span>
              </div>
            </div>
          </div>

          {/* Ledger Table */}
          <div className="w-full overflow-x-auto rounded-2xl shadow-sm bg-white border border-slate-200/90">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#e5eeff] text-[#44474d] text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4">Operating Entity</th>
                  <th className="py-3.5 px-4">Sector Classification</th>
                  <th className="py-3.5 px-4">Base Jurisdiction</th>
                  <th className="py-3.5 px-4">Key Programs / Services</th>
                  <th className="py-3.5 px-4 text-right">Official Endpoint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-[#0b1c30]">
                {filteredMatrix.map((item) => (
                  <tr key={item.id} className="hover:bg-[#eff4ff]/60 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-semibold block text-[#0b1c30]">{item.name}</span>
                      <span className="text-[#75777e] text-[11px]">{item.domain}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#eff4ff] text-[#0b1c30] text-[11px] font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#44474d]">{item.jurisdiction}</td>
                    <td className="py-3.5 px-4 max-w-xs text-[#44474d] truncate">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        className="inline-flex items-center gap-1 font-semibold text-[#006a63] hover:text-[#0b1c30] transition-colors"
                        href={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>{item.domain}</span>
                        <span className="material-symbols-outlined text-[13px]">north_east</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA / SECRETARIAT SUPPORT */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-[#0d1c32] text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#006a63]/20 blur-2xl pointer-events-none"></div>
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#9cf2e8] font-semibold">
              Institutional Inquiries
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
              Need specific guidance across group entities?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact the Chairman’s Secretariat or our corporate coordination team in Hyderabad for institutional partnerships, academic admissions, and commercial joint ventures.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold hover:bg-slate-100 transition-all cursor-pointer shadow-md"
            >
              <span>Contact Secretariat</span>
            </button>
            <button
              onClick={() => {
                onNavigate('about-gpr-group');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all cursor-pointer"
            >
              <span>About GPR Group</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
