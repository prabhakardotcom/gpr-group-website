import React, { useState } from 'react';
import { CORPORATE_INFO, PORTFOLIO_ENTITIES } from '../data/portalData';
import { LiquidGoldShader } from '../components/LiquidGoldShader';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    division: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const randomNum = Math.floor(1000 + Math.random() * 9000);

    setTimeout(() => {
      setSubmittedToken(`GPR-${randomNum}`);
      setSubmitting(false);
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        division: '',
        subject: '',
        message: '',
        consent: false,
      });

      const alertEl = document.getElementById('submissionAlert');
      if (alertEl) {
        alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO HEADER SECTION WITH GOLDEN ANIMATED WEBGL SHADER */}
      <section className="relative w-full bg-[#0a192f] py-16 overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <LiquidGoldShader className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[#0a192f]/75 backdrop-blur-[0.5px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/80 to-[#0a192f]/85 pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f2442]/90 border border-amber-400/30 text-amber-200 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  GET IN TOUCH
                </span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-sm animate-reveal-title">
                Contact GPR Group &amp; Member Organizations
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
                Reach out to our corporate headquarters in Hyderabad or connect directly with the admissions and administrative desks of our member institutions.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="p-4 rounded-2xl bg-[#0d223f]/85 border border-amber-400/25 shadow-lg backdrop-blur-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <span className="text-[11px] text-amber-200/90 uppercase tracking-wider block font-semibold">
                    Central Admissions Helpline
                  </span>
                  <a
                    className="font-space text-base font-bold text-white hover:text-amber-300 transition-colors"
                    href={`tel:${CORPORATE_INFO.helplineGeneral.replace(/\s+/g, '')}`}
                  >
                    {CORPORATE_INFO.helplineGeneral}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTACT WORKSPACE */}
      <section className="w-full bg-[#f8f9ff] py-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN: HEADQUARTERS & ENTITY DIRECTORY */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Card 1: Corporate Office Details */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#006a63] font-bold">
                      Headquarters
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-[11px] font-semibold">
                      Telangana, IN
                    </span>
                  </div>

                  <h2 className="font-serif-heading text-2xl font-bold text-[#0b1c30] mb-3">
                    GPR Group Corporate Office &amp; General Inquiries
                  </h2>

                  <p className="text-xs text-[#44474d] mb-6 leading-relaxed">
                    Centrally handling institutional administration, cross-sector governance, academic accreditation dialogues, and strategic investments.
                  </p>

                  <div className="space-y-4">
                    {/* Address Block */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center shrink-0 text-[#0b1c30]">
                        <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                      </div>
                      <div>
                        <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30] mb-0.5">
                          Corporate Address
                        </h3>
                        <p className="text-xs text-[#44474d] leading-relaxed">
                          {CORPORATE_INFO.address}
                        </p>
                      </div>
                    </div>

                    {/* Helplines Block */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center shrink-0 text-[#0b1c30]">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30] mb-0.5">
                          Verified Helplines
                        </h3>
                        <div className="flex flex-col gap-1 text-xs text-[#44474d]">
                          <div className="flex items-center justify-between">
                            <span>Central &amp; Admissions:</span>
                            <a className="font-semibold text-[#0b1c30] hover:text-[#006a63]" href={`tel:${CORPORATE_INFO.helplineAdmissions}`}>
                              {CORPORATE_INFO.helplineAdmissions}
                            </a>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Corporate Queries:</span>
                            <a className="font-semibold text-[#0b1c30] hover:text-[#006a63]" href={`tel:${CORPORATE_INFO.helplineGeneral}`}>
                              {CORPORATE_INFO.helplineGeneral}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hours Block */}
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center shrink-0 text-[#0b1c30]">
                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                      </div>
                      <div>
                        <h3 className="font-serif-heading text-lg font-bold text-[#0b1c30] mb-0.5">
                          Operational Desk Hours
                        </h3>
                        <p className="text-xs text-[#44474d] leading-relaxed">
                          Monday – Saturday: 9:30 AM – 6:00 PM IST<br />
                          Sunday: Reserved for Scheduled Admissions Visits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Building Facade Image */}
                <div className="mt-5 rounded-xl overflow-hidden border border-slate-200 bg-white">
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      alt="Sri Vishnu Complex - GPR Group Head Office Building Facade"
                      className="w-full h-full object-cover"
                      src={CORPORATE_INFO.images.daytimeFacade}
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0d1c32]/85 text-white text-[10px] uppercase font-semibold flex items-center gap-1 backdrop-blur-md">
                      <span className="material-symbols-outlined text-[13px]">photo_camera</span>
                      Building Facade
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 text-[#0b1c30] text-[10px] font-semibold backdrop-blur-md">
                      Main Entrance View
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[#44474d] text-[11px]">
                      <span className="material-symbols-outlined text-[16px] text-[#006a63]">storefront</span>
                      <span>Sri Vishnu Complex exterior landmarks: GPR LacSo Nursing &amp; High School signage</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 bg-[#eff4ff] border border-slate-200 rounded-xl p-3 flex items-center gap-2.5 text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[20px] text-[#006a63] shrink-0">verified_user</span>
                  <p className="text-[11px] text-[#0b1c30]">
                    Strict governance protocol: Direct institutional responses delivered within 1 business day.
                  </p>
                </div>
              </div>

              {/* Card 2: Official Entity Directory */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30] mb-2">
                  Official Entity Directory
                </h3>
                <p className="text-xs text-[#44474d] mb-4">
                  For course syllabi, specialized academic admissions, real estate joint-ventures, or investment decks, launch direct division portals:
                </p>

                <div className="space-y-2.5">
                  {PORTFOLIO_ENTITIES.map((item) => (
                    <a
                      key={item.id}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:bg-[#eff4ff] hover:-translate-y-0.5 hover:shadow-md hover:border-[#0d1c32]/40 transition-all duration-300 group shadow-sm"
                      href={item.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#0b1c30] group-hover:text-[#006a63]">
                            {item.name}
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#eff4ff] text-[#006f67]">
                            {item.category.split(' ')[0]}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#44474d] block mt-0.5">
                          {item.domain}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#006a63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        north_east
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-xl bg-[#eff4ff] border border-slate-200 text-[#44474d] text-xs leading-relaxed">
                  <span className="font-semibold text-[#0b1c30]">Advisory Note:</span> For individual course admissions, verified fee structures, prospectus requests, or commercial tender proposals, visitors are encouraged to visit the official website directly.
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE FORM & GEOGRAPHIC LOCATION */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Card 1: Interactive Corporate Contact Form */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#44474d] font-bold">
                    DIRECT COMMUNICATIONS
                  </span>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0b1c30] mt-1">
                    Interactive Corporate Contact Form
                  </h2>
                  <p className="text-xs sm:text-sm text-[#44474d] mt-1.5">
                    Submit an inquiry directly to group directors, university liaison officers, or investment executives.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="fullName">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Ramesh Reddy"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="emailAddress">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="phoneNumber">
                        Contact Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="divisionSelect">
                        Organization / Division of Interest <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="divisionSelect"
                          required
                          value={formData.division}
                          onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                          className="w-full h-11 px-3.5 pr-10 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all appearance-none cursor-pointer shadow-sm"
                        >
                          <option value="" disabled>Select an organizational desk</option>
                          <option value="General GPR Group Enquiry">General GPR Group Enquiry</option>
                          <option value="GPR LacSo Nursing Admissions">GPR LacSo Nursing Admissions</option>
                          <option value="LacSo Hotel Management">LacSo Hotel Management</option>
                          <option value="GPR Infra">GPR Infra</option>
                          <option value="Go Grow International">Go Grow International</option>
                          <option value="GPR Growth Invest">GPR Growth Invest</option>
                          <option value="Chairman's Office">Chairman&apos;s Office</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] pointer-events-none text-slate-400">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="subject">
                      Inquiry Purpose
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Academic Admission / Commercial Partnership / Media"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#0b1c30]" htmlFor="messageQuery">
                      Message / Query <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="messageQuery"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your specific academic course, enterprise requirement, or institutional request in detail..."
                      className="w-full p-3.5 rounded-lg bg-white border border-slate-300 text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1c32] transition-all resize-y shadow-sm"
                    ></textarea>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-slate-200/80 shadow-sm flex items-start gap-2.5">
                    <input
                      id="consentCheck"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded text-[#0d1c32] focus:ring-[#0d1c32] cursor-pointer"
                    />
                    <label className="text-xs text-[#44474d] cursor-pointer leading-relaxed" htmlFor="consentCheck">
                      I consent to GPR Group and its accredited member entities storing my communication details solely to process this formal inquiry, pursuant to corporate privacy standards.
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-[#44474d] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#006a63]">lock</span>
                      Encrypted executive routing
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#0d1c32] text-white hover:bg-[#213145] disabled:opacity-75 rounded-lg text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>{submitting ? 'Transmitting...' : 'Submit Enquiry'}</span>
                      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>

                {/* Submission Success Alert */}
                {submittedToken && (
                  <div id="submissionAlert" className="mt-6 p-4 rounded-xl bg-[#99efe5]/80 text-[#00504a] border border-[#006f67]/30 animate-executive-reveal">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[26px]">task_alt</span>
                      <div>
                        <h4 className="font-serif-heading text-lg font-bold">
                          Enquiry Dispatched Successfully
                        </h4>
                        <p className="text-xs mt-0.5">
                          Your communication has been filed with the selected desk. Reference token <strong>#{submittedToken}</strong> issued.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card 2: Geographic Location & Landmark Images */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#44474d] font-bold">
                      GEOGRAPHIC LOCATION
                    </span>
                    <h3 className="font-serif-heading text-xl font-bold text-[#0b1c30]">
                      Kharmanghat, Hyderabad Hub
                    </h3>
                  </div>
                  <a
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-medium transition-colors border border-slate-200 shadow-sm"
                    href="https://www.google.com/maps/search/?api=1&query=GPR+Group,+4th+Floor,+Sri+Vishnu+Complex,+opp.+Colosseum+Mall,+Saroornagar,+Janki+Enclave,+Bhagya+Nagar,+Kharmanghat,+Hyderabad,+Telangana+500035"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>View on Google Maps</span>
                    <span className="material-symbols-outlined text-[14px]">north_east</span>
                  </a>
                </div>

                {/* Map Visual Container */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-72 w-full border border-slate-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${CORPORATE_INFO.images.mapSnapshot}")` }}
                  ></div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#0d1c32] text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">domain</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0b1c30] block">
                          Sri Vishnu Complex, Opp. Colosseum Mall
                        </span>
                        <span className="text-[11px] text-[#44474d]">
                          Janki Enclave, Bhagya Nagar, Kharmanghat, Saroornagar, Hyderabad 500035
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#99efe5] text-[#006f67] text-[10px] uppercase font-bold hidden md:inline-block">
                      HQ Campus
                    </span>
                  </div>
                </div>

                {/* Landmark Photo Thumbnails */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="group relative flex items-center gap-3 p-2.5 rounded-xl bg-[#eff4ff] border border-slate-200 shadow-sm overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all">
                    <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0 relative">
                      <img
                        alt="Sri Vishnu Complex Daylight Entrance"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={CORPORATE_INFO.images.daytimeFacade}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">Daytime Entrance</span>
                      <span className="text-[11px] text-[#44474d] leading-tight mt-0.5">
                        Look for the blue Sri Vishnu / GPR LacSo signage above road level
                      </span>
                    </div>
                  </div>

                  <div className="group relative flex items-center gap-3 p-2.5 rounded-xl bg-[#eff4ff] border border-slate-200 shadow-sm overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all">
                    <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0 relative">
                      <img
                        alt="Sri Vishnu Complex Evening Landmark"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={CORPORATE_INFO.images.eveningFacade}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">Evening Landmark</span>
                      <span className="text-[11px] text-[#44474d] leading-tight mt-0.5">
                        Well-lit complex opposite Colosseum Mall in Kharmanghat
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-[#eff4ff] border border-slate-200 text-[#44474d] text-xs">
                  <span className="material-symbols-outlined text-[18px] shrink-0 text-[#006a63]">info</span>
                  <p>
                    <strong>Institutional Disclosure:</strong> All verified telephone lines and geographical coordinates represent the formal administrative headquarters. Secondary programmatic schedules and auxiliary desk records are managed directly under the GPR institutional charter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
