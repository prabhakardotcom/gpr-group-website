import React, { useState } from 'react';
import { PORTFOLIO_ENTITIES, CORPORATE_INFO } from '../data/portalData';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalType, setModalType] = useState<'governance' | 'privacy' | null>(null);

  return (
    <>
      <footer className="w-full bg-[#ffffff] text-[#0b1c30] border-t border-slate-200/80 mt-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
            {/* Column 1: Brand & Headquarters */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  alt="GPR Group Logo"
                  className="h-11 w-auto object-contain shrink-0 rounded"
                  src={CORPORATE_INFO.logoUrl}
                />
                <div className="flex flex-col">
                  <span className="font-space text-lg font-bold text-[#0b1c30] tracking-tight leading-none">
                    GPR GROUP
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-[#44474d] font-semibold mt-0.5">
                    DIVERSE BUSINESSES · ONE GROUP
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#44474d] max-w-md pr-4 leading-relaxed">
                An authoritative institution driving sustainable enterprise development, fiscal excellence, and cross-sector growth across hospitality, healthcare education, global commerce, civil infrastructure, and capital investments.
              </p>

              <div className="flex items-start gap-3 pt-2 text-[#44474d]">
                <span className="material-symbols-outlined text-[#75777e] mt-0.5 text-[20px] shrink-0">
                  corporate_fare
                </span>
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold text-[#0b1c30] block mb-0.5">
                    Corporate Headquarters
                  </span>
                  <span>{CORPORATE_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Executive Navigation */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1c30] font-space">
                Executive Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#44474d]">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0b1c30] transition-colors text-left"
                  >
                    Corporate Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('about-gpr-group');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0b1c30] transition-colors text-left"
                  >
                    About GPR Group
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('our-businesses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0b1c30] transition-colors text-left"
                  >
                    Strategic Sectors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('chairman');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0b1c30] transition-colors text-left"
                  >
                    Chairman&apos;s Secretariat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0b1c30] transition-colors text-left"
                  >
                    Institutional Inquiries
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Group Organizations Direct External Links */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1c30] font-space">
                Group Organizations
              </h4>
              <ul className="space-y-2.5 text-xs">
                {PORTFOLIO_ENTITIES.map((entity) => (
                  <li key={entity.id}>
                    <a
                      className="inline-flex items-center gap-1.5 text-[#44474d] hover:text-[#0b1c30] transition-colors group"
                      href={entity.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>{entity.name}</span>
                      <span className="material-symbols-outlined text-[13px] text-[#75777e] group-hover:text-[#0b1c30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        north_east
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#44474d]">
            <p>© 2026 GPR Group. All rights reserved. Diverse Businesses · One Group.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
              <span className="text-slate-400 hidden xl:inline">Corporate Office: Sri Vishnu Complex, opp. Colosseum Mall, Kharmanghat, Hyderabad</span>
              <span className="text-slate-300 hidden xl:inline">•</span>
              <button
                onClick={() => setModalType('governance')}
                className="hover:text-[#0b1c30] underline underline-offset-2 transition-colors cursor-pointer"
              >
                Institutional Governance
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#0b1c30] underline underline-offset-2 transition-colors cursor-pointer"
              >
                Legal Disclaimer &amp; Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Institutional Modal for Governance / Legal Dialogs */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-executive-reveal"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-700 text-[24px]">
                  {modalType === 'governance' ? 'account_balance' : 'policy'}
                </span>
                <h3 className="font-serif-heading text-2xl font-bold text-[#0b1c30]">
                  {modalType === 'governance' ? 'Institutional Governance Charter' : 'Legal Disclaimer & Regulatory Disclosure'}
                </h3>
              </div>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {modalType === 'governance' ? (
                <>
                  <p>
                    <strong>GPR Group Governance Principles:</strong> The Group operates under strict fiduciary standards, ethical stewardship, and regulatory compliance aligned with Indian statutory norms and Telangana state governing bodies.
                  </p>
                  <p>
                    Academic entities under the group (including GPR LacSo Nursing Colleges and LacSo Institute of Hotel Management) adhere strictly to syllabus guidelines established by accredited educational authorities (including Indian Nursing Council and relevant state universities).
                  </p>
                  <p>
                    Commercial infrastructure and investment divisions operate independently under their registered charters while maintaining centralized transparency and oversight via the Chairman’s Secretariat.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Official Information Notice:</strong> Information on this corporate portal is provided for informational and liaison purposes. Course admissions, syllabus revisions, and fee schedules are governed by official institutional prospectuses.
                  </p>
                  <p>
                    <strong>Investment Advisory:</strong> Financial services through GPR Growth Invest are subject to regulatory filings and NISM Series V-A certifications. Past performance is no guarantee of future returns.
                  </p>
                  <p>
                    <strong>Data Privacy:</strong> Queries submitted through our portal are stored exclusively to process direct institutional replies and are never transferred to third parties without express consent.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145]"
              >
                Close Charter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
