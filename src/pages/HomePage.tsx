import React, { useEffect, useState } from 'react';
import { PORTFOLIO_ENTITIES, CHAIRMAN_DATA, CORPORATE_INFO } from '../data/portalData';
import { LiquidGoldShader } from '../components/LiquidGoldShader';
import { PageId } from '../components/Header';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [entitiesCount, setEntitiesCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  // Animated counters
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setEntitiesCount(Math.round(easeOutExpo * 5));
      setExperienceCount(Math.round(easeOutExpo * 25));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION WITH ANIMATED WEBGL SHADER BACKGROUND */}
      <section className="relative w-full overflow-hidden pt-8 pb-16 min-h-[720px] flex items-center bg-[#0a192f]">
        {/* Dynamic Animated WebGL Shader Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <LiquidGoldShader className="w-full h-full object-cover" />
        </div>

        {/* Corporate Dark Gradient Overlays for optimal legibility */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/75 to-[#0a192f]/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(156,242,232,0.18),transparent_70%)]"></div>

        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs font-semibold tracking-wider uppercase shadow-lg animate-badge-pulse transition-all">
                <span className="w-2 h-2 rounded-full bg-[#9cf2e8] animate-pulse shadow-[0_0_8px_#9cf2e8]"></span>
                GROUP PORTFOLIO &amp; ENTERPRISE
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight drop-shadow-md">
                GPR Group — <br className="hidden sm:inline" />
                <span className="animate-hero-gradient font-medium drop-shadow-sm">Diverse Businesses.</span> One Group.
              </h1>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-sm font-normal">
                A diversified multi-sector group operating across healthcare education, hospitality &amp; catering technology, infrastructure, global growth services, and strategic investments in Hyderabad and beyond.
              </p>

              {/* Vision Block */}
              <div className="p-5 rounded-xl backdrop-blur-md bg-white/90 border border-white/40 shadow-xl border-l-4 border-l-[#006a63] max-w-2xl">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#006a63] font-bold mb-1">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Our Vision</span>
                </div>
                <p className="font-serif-heading text-lg sm:text-xl text-[#0b1c30] leading-snug italic font-medium">
                  “To build a trusted, diversified group that creates lasting value through quality education, meaningful career opportunities, real estate development and informed financial services.”
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('our-businesses')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0b1c30] text-sm font-semibold shadow-lg hover:bg-slate-100 hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Explore Our Businesses</span>
                  <span className="material-symbols-outlined text-[18px] text-[#006a63]">south</span>
                </button>
                <button
                  onClick={() => onNavigate('about-gpr-group')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg backdrop-blur-md bg-white/20 border border-white/40 text-white text-sm font-medium shadow-md hover:bg-white/30 transition-all cursor-pointer"
                >
                  <span>About the Group</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Graphic & Strategic Framework */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end flex-col space-y-4">
              {/* Strategic Synergy Network */}
              <div className="relative w-full max-w-sm rounded-2xl backdrop-blur-md bg-white/95 border border-white/40 shadow-xl p-5 hover:shadow-2xl transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#44474d] font-semibold">
                    Strategic Synergy
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#99efe5] text-[#006f67] text-[11px] font-semibold">
                    Active Matrix
                  </span>
                </div>

                <div className="relative w-full h-36 flex items-center justify-center bg-[#eff4ff]/80 rounded-lg p-2">
                  <svg className="w-full h-full text-[#44474d]/40" fill="none" viewBox="0 0 300 140">
                    <line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="150" x2="60" y1="70" y2="35" />
                    <line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="150" x2="240" y1="70" y2="35" />
                    <line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="150" x2="50" y1="70" y2="105" />
                    <line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="150" x2="150" y1="70" y2="125" />
                    <line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="150" x2="250" y1="70" y2="105" />
                    
                    {/* Center Node */}
                    <circle className="fill-[#0d1c32]" cx="150" cy="70" r="18" />
                    <text fill="#ffffff" fontFamily="Space Grotesk" fontSize="9" fontWeight="700" textAnchor="middle" x="150" y="74">
                      GPR
                    </text>

                    {/* Outer Nodes */}
                    <circle className="fill-[#d3e4fe]" cx="60" cy="35" r="11" />
                    <text className="fill-[#0b1c30]" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="60" y="38">
                      NUR
                    </text>

                    <circle className="fill-[#d3e4fe]" cx="240" cy="35" r="11" />
                    <text className="fill-[#0b1c30]" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="240" y="38">
                      IHM
                    </text>

                    <circle className="fill-[#d3e4fe]" cx="50" cy="105" r="11" />
                    <text className="fill-[#0b1c30]" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="50" y="108">
                      GGI
                    </text>

                    <circle className="fill-[#d3e4fe]" cx="150" cy="125" r="11" />
                    <text className="fill-[#0b1c30]" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="150" y="128">
                      INF
                    </text>

                    <circle className="fill-[#d3e4fe]" cx="250" cy="105" r="11" />
                    <text className="fill-[#0b1c30]" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="250" y="108">
                      INV
                    </text>
                  </svg>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#44474d]">Conglomerate Status</span>
                    <span className="font-semibold text-[#006a63]">Verified Operations</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#44474d]">Corporate Base</span>
                    <span className="font-semibold text-[#0b1c30]">Hyderabad, Telangana</span>
                  </div>
                </div>
              </div>

              {/* Strategic Framework Card */}
              <div className="w-full max-w-sm rounded-xl backdrop-blur-md bg-white/95 border border-white/40 shadow-xl border-l-4 border-l-[#006a63] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold">
                    Strategic Framework
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0b1c30] text-[10px] font-semibold">
                    Pillars
                  </span>
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30] leading-snug">
                  Our Business Strategy
                </h3>
                <div className="space-y-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-[#eff4ff]/80 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#006a63] shrink-0 mt-0.5">
                      category
                    </span>
                    <div>
                      <span className="font-semibold text-[#0b1c30] block leading-snug">Sector Specialization</span>
                      <span className="text-[#44474d] text-[11px] leading-relaxed">Building strong businesses in healthcare education, careers, real estate &amp; finance.</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#eff4ff]/80 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#006a63] shrink-0 mt-0.5">
                      verified_user
                    </span>
                    <div>
                      <span className="font-semibold text-[#0b1c30] block leading-snug">Trust &amp; Dependability</span>
                      <span className="text-[#44474d] text-[11px] leading-relaxed">Clear communication and dependable practices across all operations.</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#eff4ff]/80 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#006a63] shrink-0 mt-0.5">
                      trending_up
                    </span>
                    <div>
                      <span className="font-semibold text-[#0b1c30] block leading-snug">Capability &amp; Growth</span>
                      <span className="text-[#44474d] text-[11px] leading-relaxed">Investing in people, disciplined expansion, and modern technology.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KEY STATS ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 mt-4">
            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/95 border border-white/50 shadow-xl flex flex-col justify-between metric-card-interactive group cursor-default">
              <span className="material-symbols-outlined text-[#006a63] text-[28px] mb-2 metric-icon-anim inline-block">
                domain
              </span>
              <div>
                <div className="font-space text-3xl sm:text-4xl font-bold text-[#0b1c30] leading-none group-hover:text-[#006a63] transition-colors duration-200">
                  {entitiesCount}
                </div>
                <div className="text-xs text-[#44474d] mt-1.5 font-medium">Operating Entities</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/95 border border-white/50 shadow-xl flex flex-col justify-between metric-card-interactive group cursor-default">
              <span className="material-symbols-outlined text-[#006a63] text-[28px] mb-2 metric-icon-anim inline-block">
                hub
              </span>
              <div>
                <div className="font-space text-lg sm:text-xl font-bold text-[#0b1c30] leading-tight group-hover:text-[#006a63] transition-colors duration-200">
                  Healthcare, IHM &amp; Infra
                </div>
                <div className="text-xs text-[#44474d] mt-1.5 font-medium">Core Sector Matrix</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/95 border border-white/50 shadow-xl flex flex-col justify-between metric-card-interactive group cursor-default">
              <span className="material-symbols-outlined text-[#006a63] text-[28px] mb-2 metric-icon-anim inline-block">
                location_city
              </span>
              <div>
                <div className="font-space text-2xl sm:text-3xl font-bold text-[#0b1c30] leading-none group-hover:text-[#006a63] transition-colors duration-200">
                  Hyderabad
                </div>
                <div className="text-xs text-[#44474d] mt-1.5 font-medium">Institutional HQ</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl backdrop-blur-md bg-white/95 border border-white/50 shadow-xl flex flex-col justify-between metric-card-interactive group cursor-default">
              <span className="material-symbols-outlined text-[#c76c00] text-[28px] mb-2 metric-icon-anim inline-block">
                verified
              </span>
              <div>
                <div className="font-space text-2xl sm:text-3xl font-bold text-[#0b1c30] leading-none group-hover:text-[#c76c00] transition-colors duration-200">
                  Decades
                </div>
                <div className="text-xs text-[#44474d] mt-1.5 font-medium">Combined Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARY PORTFOLIO SECTION */}
      <section className="w-full py-16 bg-[#f8f9ff]" id="businesses">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#006a63] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006a63]"></span>
              Subsidiary Portfolio
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Our Member Organizations
            </h2>
            <p className="text-base text-[#44474d] leading-relaxed">
              GPR Group brings together organizations working across education, international careers, real estate and financial services. Visit each organization’s official website to learn more.
            </p>
          </div>

          {/* Grid of 5 Organizations: 3 top row, 2 bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: GPR LacSo Nursing Colleges */}
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="relative w-full h-44 rounded-lg overflow-hidden shadow-sm group shrink-0">
                  <img
                    alt="GPR LacSo Nursing Colleges Campus Building"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlLCEg6AZFFgy_5xezlhsEXu82sFprMJGTsxWU2zUi0WocjBWc6pUXsAkv4gaJGyqDesDUPHLH6PS7kTvFBQuq17LbV0YT9il5QrGsUvbwUsw3_GbQo9_fkQ_zRIUaDtZA1WcM_u_63SxAOezejh_crdP1TdGoQJyVPZ9Mhh_CXhkXQhwkk4ojSSv6N_mUMRZQnlIDkuA2CVsyuOMDVKUb-KQCj97suLYXLaiEgcBJvhk5yA4nS3L"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d1c32]/90 via-[#0d1c32]/40 to-transparent p-2.5 text-white flex items-center justify-between">
                    <span className="text-[11px] tracking-wider uppercase font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-[#9cf2e8]">apartment</span>
                      Karmanghat Campus Facility
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#006a63] text-white text-[10px] font-semibold uppercase">
                      Headquarters
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="px-2.5 py-1 rounded bg-[#99efe5] text-[#006f67] text-[11px] uppercase tracking-wider font-semibold">
                    Healthcare &amp; Clinical Education
                  </span>
                  <span className="material-symbols-outlined text-[#006a63] text-[22px]">medical_services</span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] leading-snug">
                    GPR LacSo Nursing Colleges
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Nursing education, including B.Sc. Nursing and GNM.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#eff4ff] space-y-1.5 text-xs text-[#0b1c30] mt-auto">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#75777e]">pin_drop</span>
                    <span>Karmanghat, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#75777e]">call</span>
                    <span>Admissions: +91 8297975050</span>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-colors shadow-sm"
                  href="https://www.lacsonursing.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit Official Website</span>
                  <span className="material-symbols-outlined text-[15px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Card 2: LacSo Institute of Hotel Management */}
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#e5eeff] text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold">
                    Hospitality &amp; Culinary Arts
                  </span>
                  <span className="material-symbols-outlined text-[#0b1c30] text-[22px]">restaurant</span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] leading-snug">
                    LacSo Institute of Hotel Management and Catering Technology
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Hospitality education and training.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#eff4ff] flex items-center justify-between text-xs mt-auto">
                  <span className="text-[#44474d]">Domain Status</span>
                  <span className="inline-flex items-center gap-1 text-[#006a63] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Verified Official Portal
                  </span>
                </div>
              </div>

              <div className="pt-5">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-colors shadow-sm"
                  href="https://www.lacsoihm.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit Official Website</span>
                  <span className="material-symbols-outlined text-[15px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Card 3: Go Grow International */}
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#e5eeff] text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold">
                    Global Advisory &amp; Trade
                  </span>
                  <span className="material-symbols-outlined text-[#0b1c30] text-[22px]">public</span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] leading-snug">
                    Go Grow International
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    International career and overseas employment services.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#eff4ff] flex items-center justify-between text-xs mt-auto">
                  <span className="text-[#44474d]">Global Reach</span>
                  <span className="inline-flex items-center gap-1 text-[#006a63] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Verified Enterprise Portal
                  </span>
                </div>
              </div>

              <div className="pt-5">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-colors shadow-sm"
                  href="https://www.gogrowinternational.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit Official Website</span>
                  <span className="material-symbols-outlined text-[15px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Card 4: GPR Infra */}
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#e5eeff] text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold">
                    Infrastructure &amp; Development
                  </span>
                  <span className="material-symbols-outlined text-[#0b1c30] text-[22px]">apartment</span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] leading-snug">
                    GPR Infra
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Real estate and plotted development.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#eff4ff] flex items-center justify-between text-xs mt-auto">
                  <span className="text-[#44474d]">Focus Territory</span>
                  <span className="text-[#0b1c30] font-semibold">Hyderabad Regional Belt</span>
                </div>
              </div>

              <div className="pt-5">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-colors shadow-sm"
                  href="https://www.gprhyd.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit Official Website</span>
                  <span className="material-symbols-outlined text-[15px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Card 5: GPR Growth Invest */}
            <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all lg:col-span-2">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-[11px] uppercase tracking-wider font-semibold">
                    Strategic Capital &amp; Investments
                  </span>
                  <span className="material-symbols-outlined text-amber-600 text-[22px]">trending_up</span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] leading-snug">
                    GPR Growth Invest
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Mutual fund distribution and financial services.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#eff4ff] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs mt-auto">
                  <div className="flex items-center gap-1.5 text-[#44474d]">
                    <span className="material-symbols-outlined text-[16px] text-amber-600 shrink-0">info</span>
                    <span>Compliance Note: Details marked for review per group compliance; consult entity directly.</span>
                  </div>
                  <span className="text-[#006a63] font-semibold shrink-0">Direct Advisory</span>
                </div>
              </div>

              <div className="pt-5 flex justify-start sm:justify-end">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-colors shadow-sm"
                  href="https://www.gprgi.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit Official Website</span>
                  <span className="material-symbols-outlined text-[15px]">north_east</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE HEADQUARTERS & OPERATIONAL PRESENCE */}
      <section className="w-full py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#006a63] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006a63]"></span>
              Corporate Headquarters &amp; Operational Presence
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Established Physical Footprint in Hyderabad
            </h2>
            <p className="text-base text-[#44474d] leading-relaxed">
              Anchored at Karmanghat, Sagar Road, Hyderabad, GPR Group&apos;s landmark multi-story headquarters and academic complex houses our flagship institutions, centralized administration, and executive operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Building 1: Daytime Campus */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-md flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  alt="GPR Group Main Academic &amp; Institutional Complex daytime"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlLCEg6AZFFgy_5xezlhsEXu82sFprMJGTsxWU2zUi0WocjBWc6pUXsAkv4gaJGyqDesDUPHLH6PS7kTvFBQuq17LbV0YT9il5QrGsUvbwUsw3_GbQo9_fkQ_zRIUaDtZA1WcM_u_63SxAOezejh_crdP1TdGoQJyVPZ9Mhh_CXhkXQhwkk4ojSSv6N_mUMRZQnlIDkuA2CVsyuOMDVKUb-KQCj97suLYXLaiEgcBJvhk5yA4nS3L"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/95 backdrop-blur-md text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                    Daytime Campus Facade
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30]">
                    Main Institutional &amp; Academic Complex
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    Housing GPR LacSo Nursing Colleges, advanced clinical skills simulation laboratories, lecture halls, and academic counseling suites along the primary Karmanghat corridor.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#44474d] font-medium pt-2">
                  <span className="material-symbols-outlined text-[18px] text-[#006a63]">location_on</span>
                  <span>Karmanghat &apos;X&apos; Roads, Sagar Road, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Building 2: Evening Perspective */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-md flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  alt="GPR Group Campus Building evening perspective"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC56NExJfSWi2OUl9gWIDGTI8lTbAWEsSsX1cmeCMsN6Cp6lJRqU_JrUrcCqaoBx0IGXGolakHinNs73T0Y5Dfvj2PuDdGr2ij9dBhvtK2exknxJbUdFYC19bRpQl_UuQSN30RmfqxPyok9w1M1fLI-8ddwld9BjOrJ7fHx1CKYtTIqz8hOB55Rg6iBmORtDRnHjN1pXjrA1e3-WaqyeSbCRSuOaOhIk8ibFS_2XFhWWV6sGzYiLgoA"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/95 backdrop-blur-md text-[#0b1c30] text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                    Evening Perspective &amp; Commercial Hub
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30]">
                    Central Administrative &amp; Commercial Facility
                  </h3>
                  <p className="text-xs text-[#44474d] leading-relaxed">
                    The prominent multi-level facility serving as the regional headquarters, coordinating institutional services, infrastructure initiatives, and corporate liaison across Telangana.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#44474d] font-medium pt-2">
                  <span className="material-symbols-outlined text-[18px] text-[#006a63]">domain</span>
                  <span>Central Corporate Liaison &amp; Operational Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP LEADERSHIP SPOTLIGHT */}
      <section className="w-full py-16 bg-[#eff4ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Executive Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl bg-slate-100 group">
                  <img
                    alt="Chairman G. Prabhakar Rao"
                    className="w-full h-full object-cover object-top aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                    src={CHAIRMAN_DATA.secondaryPortrait}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0d1c32]/95 via-[#0d1c32]/50 to-transparent p-5 text-white">
                    <div className="font-serif-heading text-2xl font-bold">{CHAIRMAN_DATA.name}</div>
                    <div className="text-[11px] tracking-wider uppercase opacity-90 mt-0.5 font-medium">
                      {CHAIRMAN_DATA.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stewardship Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-700 font-bold">
                  <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                  Group Leadership Spotlight
                </div>

                <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0b1c30]">
                  Visionary Stewardship Guiding Diverse Frontiers
                </h2>

                <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
                  {CHAIRMAN_DATA.biography}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                    <div className="font-space text-2xl font-bold text-[#0b1c30]">
                      {experienceCount}+
                    </div>
                    <p className="text-xs text-[#44474d] mt-1 font-medium">
                      Professional Leadership &amp; Mentorship
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                    <div className="font-space text-lg font-bold text-[#0b1c30]">
                      M.Tech &amp; MBA
                    </div>
                    <p className="text-xs text-[#44474d] mt-1 font-medium">
                      JNTU Alumnus &amp; NISM Series V-A Certified
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                    <div className="font-space text-lg font-bold text-[#0b1c30]">
                      Academician
                    </div>
                    <p className="text-xs text-[#44474d] mt-1 font-medium">
                      Turned Dynamic Multi-Sector Entrepreneur
                    </p>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      onNavigate('chairman');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold shadow-sm hover:bg-[#213145] transition-all cursor-pointer"
                  >
                    <span>Read Chairman&apos;s Profile</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONNECT / ADMISSIONS & ENQUIRY BANNER */}
      <section className="w-full py-16 bg-[#f8f9ff]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0d1c32] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded bg-white/10 text-[#d6e3ff] text-xs uppercase tracking-widest font-semibold">
                  Corporate Headquarters &amp; Institutional Liaison
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                  Connect Directly with GPR Group
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Whether exploring student admissions at our nursing institutions, corporate hospitality curricula, infrastructure partnerships, or institutional investments, our Secretariat in Hyderabad welcomes your inquiry.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9cf2e8] text-[18px]">phone_in_talk</span>
                    <span>Admissions Helpline: <strong>+91 8297975050</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9cf2e8] text-[18px]">location_on</span>
                    <span>Karmanghat / Central Office, Hyderabad</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0b1c30] text-xs font-semibold shadow-md hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <span>Send Institutional Inquiry</span>
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </button>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all"
                  href={`tel:${CORPORATE_INFO.helplineAdmissions.replace(/\s+/g, '')}`}
                >
                  <span>Call Admissions Desk</span>
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
