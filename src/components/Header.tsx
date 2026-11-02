import React, { useState } from 'react';
import { PORTFOLIO_ENTITIES, CORPORATE_INFO } from '../data/portalData';

export type PageId = 'home' | 'about-gpr-group' | 'our-businesses' | 'chairman' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-gpr-group', label: 'About GPR Group' },
    { id: 'our-businesses', label: 'Our Businesses' },
    { id: 'chairman', label: 'Chairman' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-slate-200/50">
      <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d1c32] rounded-lg p-1"
          >
            <img
              alt="GPR Group Logo"
              className="h-11 w-auto object-contain shrink-0 rounded"
              src={CORPORATE_INFO.logoUrl}
            />
            <div className="flex flex-col">
              <span className="font-space text-lg font-bold text-[#0b1c30] tracking-tight leading-none group-hover:text-[#0d1c32] transition-colors">
                GPR GROUP
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#44474d] font-semibold mt-0.5">
                DIVERSE BUSINESSES · ONE GROUP
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold shadow-sm'
                    : 'text-[#44474d] hover:text-[#0b1c30] hover:bg-[#eff4ff]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Stack */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Admissions Phone Hotline */}
          <a
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-300 bg-amber-50/90 hover:bg-amber-100 text-slate-800 font-semibold text-xs shadow-sm transition-all hover:shadow-[0_0_14px_rgba(217,119,6,0.25)]"
            href={`tel:${CORPORATE_INFO.helplineGeneral.replace(/\s+/g, '')}`}
            title="Call GPR Group Central Admissions Hotline"
          >
            <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{CORPORATE_INFO.helplineGeneral}</span>
          </a>

          {/* Our Businesses Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                onNavigate('our-businesses');
              }}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#0d1c32] text-white text-xs font-semibold hover:bg-[#213145] transition-all focus:outline-none focus:ring-2 focus:ring-[#0d1c32]"
              type="button"
              aria-expanded={dropdownOpen}
            >
              <span>Our Businesses</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Dropdown Card */}
            <div
              className={`absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-[0_20px_25px_-5px_rgba(10,25,47,0.12),0_10px_10px_-5px_rgba(10,25,47,0.06)] border border-slate-200/80 py-2 transition-all duration-150 z-50 ${
                dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#75777e] border-b border-slate-100 flex items-center justify-between">
                <span>Portfolio Entities</span>
                <span className="text-[10px] text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded font-medium">Verified</span>
              </div>
              <div className="py-1">
                {PORTFOLIO_ENTITIES.map((entity) => (
                  <a
                    key={entity.id}
                    className="flex items-center justify-between px-4 py-2 hover:bg-[#eff4ff] transition-colors text-[#0b1c30] group/item text-xs font-medium"
                    href={entity.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="truncate pr-2">{entity.name}</span>
                    <span className="material-symbols-outlined text-[13px] text-[#75777e] group-hover/item:text-[#0b1c30] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all">
                      north_east
                    </span>
                  </a>
                ))}
              </div>
              <div className="border-t border-slate-100 px-3 pt-2 pb-1">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onNavigate('our-businesses');
                  }}
                  className="w-full text-center py-1.5 text-[11px] font-semibold text-[#006a63] hover:text-[#0b1c30] bg-[#eff4ff] hover:bg-[#e5eeff] rounded-md transition-colors"
                >
                  View Full Operating Matrix →
                </button>
              </div>
            </div>
          </div>

          {/* Executive Avatar / Secretariat Profile Trigger */}
          <button
            onClick={() => onNavigate('chairman')}
            className="w-8 h-8 rounded-full bg-[#0b1c30] hover:bg-[#213145] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32]"
            title="Chairman's Secretariat"
            aria-label="Chairman's Secretariat"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-executive-reveal">
          <div className="flex flex-col space-y-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#e5eeff] text-[#0b1c30]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block px-3">
              Official Subsidiaries
            </span>
            <div className="grid grid-cols-1 gap-1">
              {PORTFOLIO_ENTITIES.map((entity) => (
                <a
                  key={entity.id}
                  href={entity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded"
                >
                  <span>{entity.name}</span>
                  <span className="material-symbols-outlined text-[14px] text-slate-400">north_east</span>
                </a>
              ))}
            </div>
            <div className="pt-2 px-3">
              <a
                href={`tel:${CORPORATE_INFO.helplineGeneral.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-amber-100 text-amber-900 text-xs font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                Admissions Helpline: {CORPORATE_INFO.helplineGeneral}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
