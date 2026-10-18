/**
 * ============================================================================
 * Kikat AI Voice Agent — Suman Krishna's Portfolio Companion
 * ============================================================================
 * Persona: Kikat (Female Voice AI Assistant)
 * Voice: Natural English female/girl voice synthesis via Web Speech API
 * Mic: Speech-to-Text Voice Recognition via Web Speech API
 * Positioning: Floating bottom-right corner before footer (Self-contained CSS)
 * ============================================================================
 */

(function () {
  "use strict";

  // Prevent double-initialization
  if (window.KikatAgentInitialized) return;
  window.KikatAgentInitialized = true;

  /* ==========================================================================
     1. Inject Self-Contained Styles
     Guarantees Kikat is ALWAYS beautifully styled and floats in bottom-right corner
     even under aggressive browser/CDN caching.
     ========================================================================== */
  function injectSelfContainedStyles() {
    if (document.getElementById("kikat-agent-styles")) return;

    const css = `
/* ==========================================================================
   KIKAT AI VOICE AGENT FLOATING STYLES (Self-Contained)
   ========================================================================== */
#kikat-launcher {
  position: fixed !important;
  bottom: 26px !important;
  right: 26px !important;
  width: 62px !important;
  height: 62px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #0284c7 0%, #8b5cf6 50%, #ec4899 100%) !important;
  border: 2px solid rgba(255, 255, 255, 0.45) !important;
  box-shadow: 0 10px 30px rgba(2, 132, 199, 0.5), 0 0 25px rgba(139, 92, 246, 0.4) !important;
  cursor: pointer !important;
  z-index: 99999 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #ffffff !important;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  animation: kikat-launcher-pulse 3s infinite !important;
  padding: 0 !important;
  margin: 0 !important;
  outline: none !important;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent !important;
}

#kikat-launcher:hover {
  transform: scale(1.08) translateY(-3px) !important;
  box-shadow: 0 16px 40px rgba(56, 189, 248, 0.65), 0 0 30px rgba(236, 72, 153, 0.45) !important;
}

#kikat-launcher.open {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
  border-color: rgba(239, 68, 68, 0.6) !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
  animation: none !important;
}

@keyframes kikat-launcher-pulse {
  0% {
    box-shadow: 0 8px 25px rgba(2, 132, 199, 0.5), 0 0 0 0 rgba(139, 92, 246, 0.6);
  }
  70% {
    box-shadow: 0 8px 25px rgba(2, 132, 199, 0.5), 0 0 0 18px rgba(139, 92, 246, 0);
  }
  100% {
    box-shadow: 0 8px 25px rgba(2, 132, 199, 0.5), 0 0 0 0 rgba(139, 92, 246, 0);
  }
}

.kikat-launcher-avatar {
  width: 38px !important;
  height: 38px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 1.45rem !important;
  transition: transform 0.35s ease !important;
  color: #ffffff !important;
}

#kikat-launcher.open .kikat-launcher-avatar {
  transform: rotate(90deg) !important;
}

.kikat-launcher-badge {
  position: absolute !important;
  top: -2px !important;
  right: -2px !important;
  width: 17px !important;
  height: 17px !important;
  background: #10b981 !important;
  border: 3px solid #0b101c !important;
  border-radius: 50% !important;
  box-shadow: 0 0 8px #10b981 !important;
}

.kikat-launcher-tooltip {
  position: absolute !important;
  right: 76px !important;
  white-space: nowrap !important;
  background: rgba(11, 16, 28, 0.96) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  color: #ffffff !important;
  padding: 0.55rem 1rem !important;
  border-radius: 999px !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
  border: 1px solid rgba(56, 189, 248, 0.4) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(56, 189, 248, 0.25) !important;
  pointer-events: none !important;
  opacity: 0 !important;
  transform: translateX(10px) !important;
  transition: all 0.25s ease !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

#kikat-launcher:hover .kikat-launcher-tooltip {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

/* Floating Chat Window */
#kikat-widget {
  position: fixed !important;
  bottom: 98px !important;
  right: 26px !important;
  width: 400px !important;
  max-width: calc(100vw - 32px) !important;
  height: 590px !important;
  max-height: calc(100vh - 120px) !important;
  background: linear-gradient(180deg, rgba(13, 20, 36, 0.98) 0%, rgba(9, 13, 26, 0.98) 100%) !important;
  backdrop-filter: blur(28px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
  border: 1px solid rgba(56, 189, 248, 0.35) !important;
  border-radius: 24px !important;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
  z-index: 99998 !important;
  display: none !important;
  flex-direction: column !important;
  overflow: hidden !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transform: translateY(20px) scale(0.95) !important;
  transform-origin: bottom right !important;
  transition: all 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
  color: #f1f5f9 !important;
  box-sizing: border-box !important;
}

#kikat-widget * {
  box-sizing: border-box !important;
}

#kikat-widget.active {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) scale(1) !important;
  pointer-events: auto !important;
}

/* Header */
.kikat-header {
  padding: 0.95rem 1.15rem !important;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.98), rgba(30, 27, 75, 0.92)) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 0.75rem !important;
  flex-shrink: 0 !important;
}

.kikat-header-left {
  display: flex !important;
  align-items: center !important;
  gap: 0.7rem !important;
}

.kikat-avatar-wrap {
  position: relative !important;
  width: 44px !important;
  height: 44px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #06b6d4, #a855f7, #ec4899) !important;
  padding: 2px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.35) !important;
}

.kikat-avatar-img {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
  background: #0f172a !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 1.35rem !important;
  color: #38bdf8 !important;
}

.kikat-online-dot {
  position: absolute !important;
  bottom: 0 !important;
  right: 0 !important;
  width: 12px !important;
  height: 12px !important;
  background: #10b981 !important;
  border: 2px solid #0f172a !important;
  border-radius: 50% !important;
  box-shadow: 0 0 6px #10b981 !important;
}

.kikat-header-title {
  font-size: 1.05rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.2 !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.45rem !important;
  letter-spacing: -0.01em !important;
}

.kikat-voice-badge {
  font-size: 0.68rem !important;
  padding: 0.18rem 0.5rem !important;
  border-radius: 999px !important;
  background: rgba(168, 85, 247, 0.22) !important;
  color: #d8b4fe !important;
  border: 1px solid rgba(168, 85, 247, 0.4) !important;
  font-weight: 700 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.25rem !important;
}

.kikat-header-subtitle {
  font-size: 0.74rem !important;
  color: #94a3b8 !important;
  margin-top: 2px !important;
}

.kikat-header-actions {
  display: flex !important;
  align-items: center !important;
  gap: 0.45rem !important;
  flex-shrink: 0 !important;
}

/* Sound Wave Animation Bars */
.kikat-waves {
  display: flex !important;
  align-items: center !important;
  gap: 3px !important;
  height: 20px !important;
  padding: 0 0.4rem !important;
  opacity: 0.4 !important;
  transition: opacity 0.25s ease !important;
}

.kikat-waves.speaking {
  opacity: 1 !important;
}

.kikat-wave-bar {
  width: 3px !important;
  height: 6px !important;
  background: #38bdf8 !important;
  border-radius: 3px !important;
  transition: height 0.15s ease !important;
}

.kikat-waves.speaking .kikat-wave-bar:nth-child(1) {
  animation: kikat-wave-bounce 0.6s ease-in-out infinite alternate !important;
}
.kikat-waves.speaking .kikat-wave-bar:nth-child(2) {
  animation: kikat-wave-bounce 0.45s ease-in-out infinite 0.15s alternate !important;
}
.kikat-waves.speaking .kikat-wave-bar:nth-child(3) {
  animation: kikat-wave-bounce 0.7s ease-in-out infinite 0.3s alternate !important;
}
.kikat-waves.speaking .kikat-wave-bar:nth-child(4) {
  animation: kikat-wave-bounce 0.52s ease-in-out infinite 0.1s alternate !important;
}

@keyframes kikat-wave-bounce {
  0% {
    height: 4px;
    background: #38bdf8;
  }
  50% {
    background: #818cf8;
  }
  100% {
    height: 19px;
    background: #ec4899;
  }
}

.kikat-header-btn {
  width: 32px !important;
  height: 32px !important;
  border-radius: 8px !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  color: #cbd5e1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  font-size: 0.88rem !important;
  transition: all 0.2s ease !important;
  padding: 0 !important;
}

.kikat-header-btn:hover {
  background: rgba(56, 189, 248, 0.22) !important;
  color: #ffffff !important;
  border-color: rgba(56, 189, 248, 0.45) !important;
}

.kikat-header-btn.muted {
  color: #f87171 !important;
  background: rgba(239, 68, 68, 0.18) !important;
  border-color: rgba(239, 68, 68, 0.35) !important;
}

/* Quick Question Chips */
.kikat-chips-container {
  padding: 0.65rem 0.9rem !important;
  background: rgba(15, 23, 42, 0.65) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
  display: flex !important;
  gap: 0.45rem !important;
  overflow-x: auto !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
  flex-shrink: 0 !important;
}

.kikat-chips-container::-webkit-scrollbar {
  display: none !important;
}

.kikat-chip {
  flex-shrink: 0 !important;
  font-size: 0.74rem !important;
  font-weight: 600 !important;
  font-family: inherit !important;
  padding: 0.38rem 0.8rem !important;
  border-radius: 999px !important;
  background: rgba(30, 41, 59, 0.8) !important;
  border: 1px solid rgba(56, 189, 248, 0.25) !important;
  color: #93c5fd !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  white-space: nowrap !important;
}

.kikat-chip:hover {
  background: rgba(56, 189, 248, 0.25) !important;
  color: #ffffff !important;
  border-color: #38bdf8 !important;
  transform: translateY(-1px) !important;
}

/* Messages Body */
.kikat-body {
  flex: 1 1 auto !important;
  padding: 1rem !important;
  overflow-y: auto !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.85rem !important;
  scroll-behavior: smooth !important;
}

.kikat-body::-webkit-scrollbar {
  width: 5px !important;
}

.kikat-body::-webkit-scrollbar-track {
  background: transparent !important;
}

.kikat-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15) !important;
  border-radius: 4px !important;
}

.kikat-message-row {
  display: flex !important;
  align-items: flex-start !important;
  gap: 0.65rem !important;
  max-width: 90% !important;
  animation: kikat-msg-pop 0.25s ease forwards !important;
}

@keyframes kikat-msg-pop {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.kikat-message-row.user {
  margin-left: auto !important;
  flex-direction: row-reverse !important;
}

.kikat-msg-avatar {
  width: 28px !important;
  height: 28px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #06b6d4, #a855f7) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.85rem !important;
  color: #ffffff !important;
  flex-shrink: 0 !important;
  margin-top: 2px !important;
}

.kikat-bubble {
  padding: 0.8rem 1rem !important;
  border-radius: 18px !important;
  font-size: 0.86rem !important;
  line-height: 1.52 !important;
  word-break: break-word !important;
  position: relative !important;
}

.kikat-message-row.bot .kikat-bubble {
  background: rgba(30, 41, 59, 0.85) !important;
  border: 1px solid rgba(255, 255, 255, 0.09) !important;
  color: #e2e8f0 !important;
  border-top-left-radius: 4px !important;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28) !important;
}

.kikat-message-row.user .kikat-bubble {
  background: linear-gradient(135deg, #0284c7 0%, #7c3aed 100%) !important;
  color: #ffffff !important;
  border-top-right-radius: 4px !important;
  box-shadow: 0 4px 18px rgba(2, 132, 199, 0.35) !important;
}

.kikat-bubble strong {
  color: #38bdf8 !important;
  font-weight: 700 !important;
}

.kikat-message-row.user .kikat-bubble strong {
  color: #ffffff !important;
}

.kikat-bubble a {
  color: #38bdf8 !important;
  text-decoration: underline !important;
  font-weight: 600 !important;
}

.kikat-msg-footer {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-top: 0.55rem !important;
  padding-top: 0.4rem !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  font-size: 0.72rem !important;
  color: #94a3b8 !important;
}

.kikat-replay-btn {
  background: none !important;
  border: none !important;
  color: #38bdf8 !important;
  font-size: 0.74rem !important;
  font-family: inherit !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.25rem !important;
  padding: 0.18rem 0.45rem !important;
  border-radius: 6px !important;
  transition: all 0.2s ease !important;
}

.kikat-replay-btn:hover {
  background: rgba(56, 189, 248, 0.18) !important;
  color: #ffffff !important;
}

/* Typing Indicator */
.kikat-typing-dots {
  display: flex !important;
  align-items: center !important;
  gap: 5px !important;
  padding: 0.4rem 0.5rem !important;
}

.kikat-typing-dot {
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
  background: #38bdf8 !important;
  animation: kikat-typing-blink 1.2s infinite ease-in-out !important;
}

.kikat-typing-dot:nth-child(2) {
  animation-delay: 0.2s !important;
}
.kikat-typing-dot:nth-child(3) {
  animation-delay: 0.4s !important;
}

@keyframes kikat-typing-blink {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.3;
  }
  40% {
    transform: scale(1.15);
    opacity: 1;
    background: #ec4899;
  }
}

/* Input Bar */
.kikat-footer {
  padding: 0.8rem 0.95rem !important;
  background: rgba(15, 23, 42, 0.98) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  flex-shrink: 0 !important;
}

.kikat-input-form {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  background: rgba(30, 41, 59, 0.75) !important;
  border: 1px solid rgba(56, 189, 248, 0.28) !important;
  border-radius: 999px !important;
  padding: 0.3rem 0.4rem 0.3rem 0.95rem !important;
  transition: all 0.2s ease !important;
}

.kikat-input-form:focus-within {
  border-color: #38bdf8 !important;
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.35) !important;
}

.kikat-input {
  flex: 1 !important;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  color: #ffffff !important;
  font-size: 0.86rem !important;
  font-family: inherit !important;
  padding: 0.3rem 0 !important;
}

.kikat-input::placeholder {
  color: #64748b !important;
  font-size: 0.82rem !important;
}

.kikat-btn-icon {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  border: none !important;
  background: transparent !important;
  color: #94a3b8 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  font-size: 0.95rem !important;
  transition: all 0.2s ease !important;
  padding: 0 !important;
}

.kikat-btn-icon:hover {
  color: #38bdf8 !important;
  background: rgba(56, 189, 248, 0.16) !important;
}

.kikat-mic-btn.listening {
  color: #ef4444 !important;
  background: rgba(239, 68, 68, 0.22) !important;
  animation: kikat-mic-glow 1s infinite alternate !important;
}

@keyframes kikat-mic-glow {
  from {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  to {
    box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
  }
}

.kikat-send-btn {
  background: linear-gradient(135deg, #0284c7, #8b5cf6) !important;
  color: #ffffff !important;
}

.kikat-send-btn:hover {
  background: linear-gradient(135deg, #38bdf8, #a855f7) !important;
  transform: scale(1.05) !important;
}

/* Mobile Responsive */
@media (max-width: 480px) {
  #kikat-widget {
    right: 12px !important;
    left: 12px !important;
    width: auto !important;
    max-width: none !important;
    bottom: 86px !important;
    height: calc(100vh - 105px) !important;
    max-height: 560px !important;
    border-radius: 20px !important;
  }
  #kikat-launcher {
    bottom: 18px !important;
    right: 18px !important;
    width: 56px !important;
    height: 56px !important;
  }
  .kikat-launcher-tooltip {
    display: none !important;
  }
}
`;

    const style = document.createElement("style");
    style.id = "kikat-agent-styles";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  // Inject styles immediately
  injectSelfContainedStyles();

  // Agent State
  const state = {
    isOpen: false,
    isVoiceEnabled: localStorage.getItem("kikat_voice") !== "false",
    isSpeaking: false,
    isListening: false,
    selectedVoice: null,
    currentUtterance: null,
    recognition: null,
    history: []
  };

  /* ==========================================================================
     2. Comprehensive Knowledge Base about Suman Krishna
     ========================================================================== */
  const knowledgeBase = [
    // 1. Identity & Overview
    {
      intent: "about_suman",
      keywords: ["who is suman", "about suman", "tell me about yourself", "who are you", "bio", "introduction", "overview", "background", "profile"],
      spoken: "Suman Krishna is a final-year Computer Science undergraduate at CT Institute of Engineering, Management and Technology with a CGPA of 8.0 out of 10. He is a Google Student Ambassador, a Google Developer Groups member, and an AI and Data Science engineer specializing in machine learning, multimodal deep learning, Flutter mobile development, and executive analytics.",
      response: `<strong>Suman Krishna</strong> is a final-year Computer Science undergraduate at <strong>CT Institute of Engineering, Management &amp; Technology</strong> (CGPA: <strong>8.0 / 10.0</strong>, graduating 2026).<br><br>
      He serves as an official <strong>Google Student Ambassador</strong> and core <strong>Google Developer Groups (GDG) Member</strong>. His engineering focus spans:
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li>End-to-end Machine Learning pipelines &amp; LLM systems (<strong>AIHire</strong>)</li>
        <li>Cross-platform mobile applications with <strong>Flutter &amp; Dart</strong> (<strong>CTG Faculty App</strong>)</li>
        <li>Multimodal Deep Learning (BERT, Wav2Vec 2.0, ResNet-LSTM)</li>
        <li>Executive Business Intelligence &amp; Data Analytics (Power BI &amp; Python)</li>
      </ul>`
    },

    // 2. CTG Faculty App (Flutter & Dart)
    {
      intent: "ctg_faculty_app",
      keywords: ["ctg faculty", "faculty app", "kra", "kpi", "ct group", "flutter app", "appraisal app", "ctgroup", "flutter"],
      spoken: "The CTG Faculty App is an institutional digital performance management system engineered using Flutter and Dart with Material 3 UI for CT Group of Institutions. It evaluates faculty, heads of department, and heads of institutes across a one thousand mark framework with three-tier role-based access control and automated Excel and PDF reports.",
      response: `<strong>CTG Faculty App: KRA &amp; KPI Performance Management System</strong><br><br>
      An institutional cross-platform mobile application engineered with <strong>Flutter &amp; Dart</strong> for <strong>CT Group of Institutions</strong>:<br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Tech Stack:</strong> Flutter, Dart, Material 3, Provider State Management, SQLite, REST API, SheetJS Excel/PDF Export.</li>
        <li><strong>1,000-Mark Framework:</strong> Evaluates teaching efficacy, research papers, patents, student feedback, and departmental leadership.</li>
        <li><strong>3-Tier RBAC:</strong> Dedicated portals for Faculty self-appraisal, HOD review, and HOI executive sanction.</li>
        <li><strong>Repository:</strong> <a href="https://github.com/krishnaaidev/CTGroup-KRA-KPI" target="_blank" rel="noopener noreferrer">krishnaaidev/CTGroup-KRA-KPI</a></li>
      </ul>`
    },

    // 3. AIHire Capstone Project
    {
      intent: "aihire",
      keywords: ["aihire", "ai hire", "capstone", "interview platform", "candidate evaluation", "interview bot", "resume screener"],
      spoken: "AIHire is Suman's B.Tech Capstone Project. It is an autonomous recruitment platform combining fine-tuned Large Language Models, real-time speech evaluation, emotion and confidence tracking, and automated resume parsing with over 95 percent match accuracy.",
      response: `<strong>AIHire: Autonomous AI Interview &amp; Candidate Evaluation Platform</strong><br><br>
      Suman's flagship <strong>B.Tech Capstone Project (2026)</strong>:<br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>AI Interviewer:</strong> Dynamically generates context-aware technical follow-up questions from candidate speech in real time.</li>
        <li><strong>Multimodal Prosody:</strong> Real-time audio streaming evaluating sentiment, confidence, and speech clarity.</li>
        <li><strong>Automated Resume Screener:</strong> Evaluates PDF and DOCX resumes against complex job descriptions with <strong>95%+ precision</strong>.</li>
        <li><strong>Tech Stack:</strong> Fine-tuned LLMs, FastAPI, Next.js, Python, Docker, Render.</li>
        <li><strong>Repository:</strong> <a href="https://github.com/krishnaaidev/aihire2" target="_blank" rel="noopener noreferrer">krishnaaidev/aihire2</a></li>
      </ul>`
    },

    // 4. RedRob Standardized Test Score
    {
      intent: "redrob_score",
      keywords: ["redrob", "763", "red rob", "test score", "assessment score", "technical assessment", "aptitude score"],
      spoken: "Suman achieved a standardized score of 763 out of 1000 on the RedRob Online Technical Assessment, demonstrating top-tier cognitive reasoning, algorithmic coding, and software engineering problem-solving.",
      response: `<strong>RedRob Technical Assessment Benchmark</strong><br><br>
      <div style="display: flex; align-items: center; gap: 0.6rem; margin: 0.5rem 0;">
        <span style="font-size: 1.5rem; font-weight: 800; color: #10b981;">763 / 1000</span>
        <span style="font-size: 0.76rem; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 0.25rem 0.6rem; border-radius: 999px; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.35);">Distinction Tier</span>
      </div>
      This standardized assessment rigorously measures algorithmic problem-solving, cognitive agility, data structures, quantitative aptitude, and core software engineering competence.`
    },

    // 5. Certifications (NASSCOM FutureSkills Prime Gold)
    {
      intent: "certifications",
      keywords: ["certificate", "certifications", "nasscom", "gold", "futureskills", "aws cloud", "gen ai 101", "adobe", "prompt engineering", "dataops"],
      spoken: "Suman holds seven NASSCOM FutureSkills Prime Gold Category Certifications, approved by the Government of India. These include a 100 percent perfect score in AWS Cloud Practitioner, 100 percent in Gen AI 101, 98 percent in Adobe Generative AI, 96 percent in Prompt Engineering, and 93 percent in Deep Learning and NLP.",
      response: `<strong>7x NASSCOM FutureSkills Prime Gold Certifications</strong> (Govt. of India Approved):<br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0; font-size: 0.83rem;">
        <li>🥇 <strong>AWS Cloud Practitioner Essentials:</strong> 100% Perfect Score</li>
        <li>🥇 <strong>Gen AI 101:</strong> 100% Perfect Score</li>
        <li>🥇 <strong>Adobe Creativity &amp; GenAI:</strong> 98.00% Score</li>
        <li>🥇 <strong>Generative AI by Adobe:</strong> 98.00% Score</li>
        <li>🥇 <strong>Prompt Engineering:</strong> 96.00% Score</li>
        <li>🥇 <strong>Deep Learning, NLP &amp; GenAI:</strong> 93.00% Score</li>
        <li>🥇 <strong>Modern DataOps Intelligence:</strong> 91.25% Score</li>
      </ul>
      <a href="certifications.html" style="font-weight: 700;">View all Certificate PDFs &rarr;</a>`
    },

    // 6. Multimodal Depression Detection System
    {
      intent: "depression_detection",
      keywords: ["depression", "mental health", "multimodal depression", "daic-woz", "psychiatric", "wav2vec", "bert"],
      spoken: "The Multimodal Depression Detection System is a clinician-inspired deep learning research project. It combines BERT for language analysis, Wav2Vec 2.0 for vocal speech audio, and ResNet-LSTM for facial landmarks on clinical datasets.",
      response: `<strong>Multimodal Depression Detection System</strong><br><br>
      A clinical psychiatric screening pipeline combining tri-modal late fusion:<br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Text:</strong> BERT transformer embeddings analyzing sentiment and linguistic cues.</li>
        <li><strong>Audio:</strong> Wav2Vec 2.0 extracting speech tone, pause cadence, and acoustic stress.</li>
        <li><strong>Visual:</strong> ResNet-LSTM tracking facial Action Units and micro-expressions on USC DAIC-WOZ clinical data.</li>
        <li><strong>Backend:</strong> Low-latency FastAPI streaming backend with a telehealth Chrome Extension.</li>
      </ul>`
    },

    // 7. Plant Disease Recognition System
    {
      intent: "plant_disease",
      keywords: ["plant", "crop", "disease", "plantvillage", "leaf", "agriculture", "cnn project"],
      spoken: "Suman built a deep Convolutional Neural Network trained on over 54,000 PlantVillage images, achieving 96.7 percent test accuracy across 38 crop disease classes, paired with a real-time Flask web application.",
      response: `<strong>Plant &amp; Crop Disease Recognition System</strong><br><br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Model:</strong> Deep CNN trained on 54,000+ PlantVillage images across 38 classes.</li>
        <li><strong>Accuracy:</strong> <strong>96.7%</strong> test accuracy using CLAHE normalization.</li>
        <li><strong>Application:</strong> Real-time photo upload diagnosis with organic and chemical treatment advice deployed with Flask.</li>
      </ul>`
    },

    // 8. Other Projects & Complete Portfolio
    {
      intent: "other_projects",
      keywords: ["superstore", "power bi", "career guidance", "air pollution", "robo car", "jarvis", "projects list", "all projects"],
      spoken: "In addition to AIHire and the CTG Faculty App, Suman has built a Superstore Sales and Profit Business Intelligence dashboard for EduTech Solutions, an Air Pollution AQI Forecaster, a Career Guidance AI, an autonomous obstacle avoidance Robo Car, and JARVIS voice assistant.",
      response: `<strong>Other Featured Systems by Suman:</strong><br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Superstore Analytics BI:</strong> 4-page interactive Power BI dashboard with automated Python EDA for EduTech Solutions.</li>
        <li><strong>Air Pollution &amp; AQI Forecaster:</strong> Time-series forecasting for PM2.5 concentrations.</li>
        <li><strong>Career Guidance AI:</strong> Decision tree classifier predicting optimal college branches.</li>
        <li><strong>Robo Car:</strong> Autonomous hardware obstacle-avoidance vehicle.</li>
        <li><strong>JARVIS Voice Assistant:</strong> Desktop OS automation and speech assistant in Python.</li>
      </ul>
      <a href="projects.html" style="font-weight: 700;">Explore All 9 Projects &rarr;</a>`
    },

    // 9. Work Experience & Internships
    {
      intent: "experience",
      keywords: ["experience", "internship", "intern", "edutech", "averixis", "work history", "job", "career"],
      spoken: "Suman worked as a Data Analytics Intern at EduTech Solutions from April to June 2026, building executive Power BI dashboards and running A B tests. Before that, from June to September 2025, he was a Machine Learning Intern and Trainee at Averixis Solutions, developing computer vision pipelines and cutting model latency by 40 percent.",
      response: `<strong>Work Experience &amp; Internships:</strong><br><br>
      <strong>1. Data Analytics Intern — EduTech Solutions</strong> (Apr 2026 – Jun 2026)<br>
      Built executive Power BI &amp; Excel KPI dashboards, conducted A/B testing and customer churn predictive cohorts in Python &amp; SQL.<br><br>
      <strong>2. Machine Learning Intern &amp; Trainee — Averixis Solutions</strong> (Jun 2025 – Sep 2025)<br>
      Constructed production ML pipelines (~94% accuracy), and optimized model validation frameworks, reducing inference latency by <strong>40%</strong>.<br><br>
      <a href="experience.html" style="font-weight: 700;">View Complete Career Timeline &rarr;</a>`
    },

    // 10. Google Ambassador & GDG Roles
    {
      intent: "google_roles",
      keywords: ["google", "ambassador", "gdg", "google developer groups", "community", "leadership", "mentoring", "united fest"],
      spoken: "Suman is an official Google Student Ambassador since September 2025 and a core member of Google Developer Groups since September 2026. He has organized workshops, study jams, and mentored over 500 student developers. He was also Head Coordinator for United Fest with over 500 attendees.",
      response: `<strong>Leadership &amp; Community Roles:</strong><br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Google Student Ambassador:</strong> (Sep 2025 – Present) Campus technical representative organizing cloud study jams, dev workshops, and mentoring 500+ student engineers.</li>
        <li><strong>Google Developer Groups (GDG) Member:</strong> (Sep 2026 – Present) Facilitating open-source sprints and developer conferences.</li>
        <li><strong>Head Coordinator — United Fest:</strong> Led 10+ departmental coordinators, 50+ volunteers, and 500+ attendees.</li>
        <li><strong>Byteverse 1.0 Hackathon Lead:</strong> Managed technical support and cloud deployments for 250+ hackers.</li>
      </ul>`
    },

    // 11. Photography & Instagram (@bruh.vision)
    {
      intent: "photography",
      keywords: ["photography", "photos", "bruh.vision", "camera", "instagram", "cinematography", "pictures", "visual", "gallery"],
      spoken: "Suman is an award-winning photographer and cinematographer who won first prize in cinematography. You can check out his curated photography page on Instagram at bruh.vision, as well as his personal page at krishna.ai.dev. The portfolio also features an interactive gallery with his best eight photos.",
      response: `<strong>Photography &amp; Cinematography:</strong><br><br>
      Suman won <strong>1st Prize in Cinematography &amp; Photography</strong> in 2023. He captures street portraits, macro nature, and architectural aesthetics.<br><br>
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.6rem;">
        <a href="https://instagram.com/bruh.vision" target="_blank" rel="noopener noreferrer" class="social-pill" style="font-size: 0.75rem;">
          <i class="fa-brands fa-instagram" style="color: #e1306c;"></i> @bruh.vision (Photography)
        </a>
        <a href="https://instagram.com/krishna.ai.dev" target="_blank" rel="noopener noreferrer" class="social-pill" style="font-size: 0.75rem;">
          <i class="fa-brands fa-instagram" style="color: #a855f7;"></i> @krishna.ai.dev (Personal)
        </a>
      </div>
      <a href="about.html#gallery" style="font-weight: 700;">Open Portfolio Photo Lightbox &rarr;</a>`
    },

    // 12. Chess Rating
    {
      intent: "chess",
      keywords: ["chess", "rating", "chess.com", "750", "board", "game"],
      spoken: "Suman has a Chess.com rating of 750 plus. He achieved second position at the Annual Sports Meet chess tournament, using strategic calculation and tactical foresight.",
      response: `<strong>Chess Strategy:</strong><br><br>
      ♟️ <strong>Chess.com Rating:</strong> <strong>750+</strong><br>
      🏆 <strong>Tournament:</strong> 2nd Position at Annual Inter-Department Sports Meet (Dec 2024).<br>
      Suman approaches software architecture much like chess: thinking multiple moves ahead, evaluating defensive positions, and calculating strategic trade-offs.`
    },

    // 13. Education & Academic Background
    {
      intent: "education",
      keywords: ["education", "college", "university", "btech", "b.tech", "cgpa", "ct institute", "gpa", "school", "degree"],
      spoken: "Suman is pursuing his Bachelor of Technology in Computer Science and Engineering at CT Institute of Engineering, Management and Technology in Jalandhar, graduating in 2026 with a CGPA of 8.0 out of 10.",
      response: `<strong>Academic Education:</strong><br><br>
      🎓 <strong>B.Tech in Computer Science &amp; Engineering</strong><br>
      <strong>Institution:</strong> CT Institute of Engineering, Management &amp; Technology, Jalandhar, Punjab<br>
      <strong>Timeline:</strong> 2022 – 2026 (Final Year)<br>
      <strong>Current CGPA:</strong> <strong>8.0 / 10.0</strong><br>
      <strong>Core Coursework:</strong> Machine Learning, Data Structures &amp; Algorithms, Deep Learning, Cloud Computing, Database Management, Computer Vision, Operating Systems.`
    },

    // 14. Skills & Tech Stack
    {
      intent: "skills",
      keywords: ["skills", "technologies", "tech stack", "languages", "python", "flutter", "dart", "pytorch", "tensorflow", "tools"],
      spoken: "Suman's tech stack includes Python, Flutter, Dart, PyTorch, TensorFlow, Scikit-learn, OpenCV, Hugging Face Transformers, Next.js, FastAPI, Flask, SQL, and Power BI with DAX modeling.",
      response: `<strong>Technical Stack &amp; Core Competencies:</strong><br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li><strong>Languages:</strong> Python, Dart, SQL, JavaScript (ES6+), TypeScript, C/C++</li>
        <li><strong>AI &amp; Deep Learning:</strong> PyTorch, TensorFlow, Scikit-learn, OpenCV, Hugging Face, BERT, Wav2Vec 2.0, CNNs, Prompt Engineering</li>
        <li><strong>Mobile &amp; Web:</strong> Flutter (Material 3), FastAPI, Flask, Next.js 14, Node.js, HTML5/CSS3</li>
        <li><strong>Data Analytics &amp; BI:</strong> Power BI, DAX, Pandas, NumPy, SheetJS, Seaborn</li>
        <li><strong>Cloud &amp; DevOps:</strong> AWS Cloud Practitioner, Docker, Git, GitHub, Render, Netlify</li>
      </ul>`
    },

    // 15. Contact & Hiring
    {
      intent: "contact",
      keywords: ["contact", "hire", "email", "phone", "reach", "hire him", "whatsapp", "call", "collaborate", "get in touch", "number", "location"],
      spoken: "You can contact Suman by email at krishna.techx.31@gmail.com, or his institutional email suman2301275@ctiemt.ctgroup.in, or by phone at +91 96081 10425. He is open to Machine Learning, Data Science, and Software Engineering roles.",
      response: `<strong>Get in Touch with Suman Krishna:</strong><br><br>
      📧 <strong>Primary Email:</strong> <a href="mailto:krishna.techx.31@gmail.com">krishna.techx.31@gmail.com</a><br>
      🏛️ <strong>Institutional Email:</strong> <a href="mailto:suman2301275@ctiemt.ctgroup.in">suman2301275@ctiemt.ctgroup.in</a><br>
      📞 <strong>Phone / WhatsApp:</strong> <a href="tel:+919608110425">+91-96081-10425</a><br>
      💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/suman-krishna-7a17a6275" target="_blank" rel="noopener noreferrer">suman-krishna</a><br>
      💻 <strong>GitHub:</strong> <a href="https://github.com/krishnaaidev" target="_blank" rel="noopener noreferrer">krishnaaidev</a><br>
      📍 <strong>Location:</strong> Jalandhar, Punjab (Campus) • Samastipur, Bihar (Hometown)<br><br>
      <a href="contact.html" style="font-weight: 700;">Open Contact Form &rarr;</a>`
    },

    // 16. Resume
    {
      intent: "resume",
      keywords: ["resume", "cv", "download resume", "pdf resume", "curriculum vitae"],
      spoken: "You can view Suman's ATS-friendly web resume right on this portfolio, or download the full PDF resume directly.",
      response: `<strong>Suman Krishna's Resume:</strong><br><br>
      📄 Suman's comprehensive resume includes all academic milestones, the Flutter CTG Faculty App, AIHire, 7 NASSCOM Gold Certifications, and RedRob assessment score.<br><br>
      <a href="resume.html" class="btn btn-primary btn-sm" style="display: inline-flex; margin-right: 0.5rem; text-decoration: none;">
        <i class="fa-regular fa-file-lines"></i> View Resume Page
      </a>
      <a href="assets/docs/Suman_Krishna_Resume.pdf" target="_blank" class="btn btn-secondary btn-sm" style="display: inline-flex; text-decoration: none;">
        <i class="fa-regular fa-file-pdf"></i> Download PDF
      </a>`
    },

    // 17. About Kikat herself
    {
      intent: "who_is_kikat",
      keywords: ["who are you", "what is your name", "kikat", "what are you", "your name", "are you an ai"],
      spoken: "Hi! My name is Kikat. I am Suman Krishna's personal AI agent! I am here to tell you anything you want to know about Suman's engineering projects, skills, certifications, and background. You can ask me by typing or speaking through your microphone!",
      response: `✨ <strong>Hi! I'm Kikat!</strong><br><br>
      I am Suman Krishna's personal AI agent and voice guide. I have full knowledge of Suman's:
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li>AI, Machine Learning, and Flutter projects</li>
        <li>7x NASSCOM FutureSkills Prime Gold Certifications</li>
        <li>RedRob 763/1000 technical assessment score</li>
        <li>Work experience at EduTech &amp; Averixis</li>
        <li>Community leadership as a Google Student Ambassador &amp; GDG Member</li>
        <li>Instagram photography at <strong>@bruh.vision</strong></li>
      </ul>
      You can type any question or tap the microphone to talk with me!`
    },

    // 18. Why Hire Suman?
    {
      intent: "why_hire",
      keywords: ["why hire", "should i hire", "strengths", "value", "hire suman", "why should we hire"],
      spoken: "You should hire Suman because he bridges production AI systems with real-world mobile and web engineering. He built AIHire with fine-tuned LLMs, engineered an institutional Flutter app for thousands of users, achieved a 763 score on RedRob, holds seven NASSCOM Gold Certifications, and actively leads developer communities as a Google Student Ambassador.",
      response: `<strong>Why Hire Suman Krishna?</strong><br><br>
      <ul style="margin: 0.5rem 0 0.5rem 1.2rem; padding: 0;">
        <li>🚀 <strong>Proven Production Engineering:</strong> Shipped <strong>AIHire</strong> (multimodal recruitment AI) and the <strong>CTG Faculty App</strong> (Flutter &amp; Dart for CT Group).</li>
        <li>📊 <strong>Top-Tier Aptitude:</strong> Scored <strong>763 / 1000</strong> on the standardized RedRob online assessment.</li>
        <li>🥇 <strong>Govt. Certified Excellence:</strong> <strong>7x NASSCOM Gold Certifications</strong> with 100% in AWS Cloud and GenAI 101.</li>
        <li>👥 <strong>Leadership &amp; Mentorship:</strong> Official <strong>Google Student Ambassador</strong> and core <strong>GDG Member</strong> mentoring 500+ students.</li>
        <li>⚡ <strong>Cross-Functional Versatility:</strong> Deep learning, Flutter cross-platform apps, full-stack backends, and executive analytics.</li>
      </ul>
      <a href="contact.html" style="font-weight: 700;">Schedule an Interview &rarr;</a>`
    },

    // 19. Greetings
    {
      intent: "greeting",
      keywords: ["hello", "hi", "hey", "good morning", "good evening", "good afternoon", "namaste", "howdy", "sup", "what's up"],
      spoken: "Hello there! I'm Kikat, Suman Krishna's AI voice agent. How can I help you today? You can ask me about Suman's projects, experience, or contact details!",
      response: `👋 <strong>Hello! Nice to meet you!</strong><br><br>
      I'm <strong>Kikat</strong>, Suman's AI voice agent. What would you like to explore about Suman today?<br><br>
      <em>Try asking:</em>
      <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.4rem;">
        <button class="kikat-chip" onclick="window.KikatAgent.ask('Who is Suman?')">Who is Suman?</button>
        <button class="kikat-chip" onclick="window.KikatAgent.ask('Tell me about AIHire')">Tell me about AIHire</button>
        <button class="kikat-chip" onclick="window.KikatAgent.ask('Tell me about CTG Faculty App')">CTG Faculty App (Flutter)</button>
      </div>`
    },

    // 20. Gratitude & Pleasantries
    {
      intent: "gratitude",
      keywords: ["thank you", "thanks", "awesome", "great", "cool", "helpful", "good job", "love it"],
      spoken: "You're very welcome! I'm delighted to help. Don't hesitate to reach out to Suman if you'd like to collaborate or discuss an opportunity!",
      response: `😊 <strong>You're very welcome!</strong><br><br>
      Feel free to ask me anything else, or click below to connect directly with Suman:<br><br>
      <a href="contact.html" style="font-weight: 700;">Reach out via Contact Page &rarr;</a>`
    }
  ];

  // Fallback response for unhandled questions
  const fallback = {
    spoken: "I'd love to help you with that! Suman Krishna is a Machine Learning and Flutter engineer, Google Student Ambassador, and GDG member with seven NASSCOM Gold Certifications and a 763 RedRob score. Here are a few topics you can ask me about.",
    response: `I'm happy to tell you all about Suman Krishna! Here are some quick topics you can ask me about:<br><br>
    <div style="display: flex; flex-direction: column; gap: 0.35rem;">
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('Who is Suman Krishna?')">📌 Who is Suman Krishna?</button>
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('Tell me about the CTG Faculty App')">📱 CTG Faculty App (Flutter &amp; Dart)</button>
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('Tell me about AIHire')">🤖 AIHire Autonomous Interview Platform</button>
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('What is Suman\\'s RedRob score?')">🎯 RedRob Test Score (763 / 1000)</button>
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('What certifications does Suman hold?')">🥇 7x NASSCOM Gold Certifications</button>
      <button class="kikat-chip" style="text-align: left;" onclick="window.KikatAgent.ask('How can I contact Suman?')">📬 Contact &amp; Hiring Information</button>
    </div>`
  };

  /* ==========================================================================
     3. Query Matching Engine
     ========================================================================== */
  function findBestMatch(userText) {
    const clean = userText.toLowerCase().trim();

    // Check direct keyword match
    for (const item of knowledgeBase) {
      for (const kw of item.keywords) {
        if (clean.includes(kw)) {
          return item;
        }
      }
    }

    // Token-based matching
    const tokens = clean.split(/\s+/).filter(t => t.length > 2);
    let bestItem = null;
    let maxMatches = 0;

    for (const item of knowledgeBase) {
      let matches = 0;
      for (const kw of item.keywords) {
        for (const token of tokens) {
          if (kw.includes(token)) {
            matches++;
          }
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestItem = item;
      }
    }

    if (maxMatches >= 2 && bestItem) {
      return bestItem;
    }

    return fallback;
  }

  /* ==========================================================================
     4. Speech Synthesis (Girl Voice)
     ========================================================================== */
  function initSpeechSynthesis() {
    if (!("speechSynthesis" in window)) {
      console.warn("Kikat: Web Speech Synthesis not supported in this browser.");
      return;
    }

    function selectBestFemaleVoice() {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const preferredNames = [
        "Google UK English Female",
        "Microsoft Zira",
        "Samantha",
        "Victoria",
        "Karen",
        "Moira",
        "Tessa",
        "Fiona",
        "Veena",
        "Microsoft Jenny",
        "Google US English"
      ];

      for (const name of preferredNames) {
        const found = voices.find(v => v.name.toLowerCase().includes(name.toLowerCase()));
        if (found) {
          state.selectedVoice = found;
          return;
        }
      }

      // Regex fallback: look for female indicators in English
      const regexMatch = voices.find(v =>
        /female|girl|woman|zira|samantha|victoria|karen|moira|fiona/i.test(v.name) &&
        v.lang.startsWith("en")
      );
      if (regexMatch) {
        state.selectedVoice = regexMatch;
        return;
      }

      // Any English voice
      const anyEnglish = voices.find(v => v.lang.startsWith("en"));
      state.selectedVoice = anyEnglish || voices[0];
    }

    selectBestFemaleVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = selectBestFemaleVoice;
    }
  }

  function speakText(text) {
    if (!state.isVoiceEnabled || !("speechSynthesis" in window)) return;

    // Stop ongoing speech
    stopSpeaking();

    // Clean text for speech
    const cleanSpeech = text
      .replace(/<[^>]*>/g, " ")
      .replace(/https?:\/\/\S+/g, "link")
      .replace(/&amp;/g, "and")
      .replace(/&rarr;/g, "")
      .replace(/[*_#`~]/g, "")
      .replace(/763\s*\/\s*1000/g, "763 out of 1000")
      .replace(/8\.0\s*\/\s*10\.0/g, "8.0 out of 10")
      .replace(/96\.7%/g, "96.7 percent")
      .replace(/95%\+/g, "over 95 percent")
      .trim();

    if (!cleanSpeech) return;

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    if (state.selectedVoice) {
      utterance.voice = state.selectedVoice;
    }

    // Friendly, articulate, youthful girl voice parameters
    utterance.pitch = 1.15;
    utterance.rate = 1.02;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      state.isSpeaking = true;
      updateWavesVisualizer(true);
    };

    utterance.onend = () => {
      state.isSpeaking = false;
      updateWavesVisualizer(false);
    };

    utterance.onerror = () => {
      state.isSpeaking = false;
      updateWavesVisualizer(false);
    };

    state.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    state.isSpeaking = false;
    updateWavesVisualizer(false);
  }

  function updateWavesVisualizer(speaking) {
    const waves = document.getElementById("kikat-waves");
    if (waves) {
      if (speaking) {
        waves.classList.add("speaking");
      } else {
        waves.classList.remove("speaking");
      }
    }
  }

  /* ==========================================================================
     5. Speech Recognition (Mic Input)
     ========================================================================== */
  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      state.isListening = true;
      const micBtn = document.getElementById("kikat-mic-btn");
      const input = document.getElementById("kikat-input");
      if (micBtn) micBtn.classList.add("listening");
      if (input) input.placeholder = "Listening to you... Speak now!";
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const input = document.getElementById("kikat-input");
      if (input) input.value = transcript;
      handleUserSubmit(transcript);
    };

    recognition.onerror = (event) => {
      console.warn("Kikat: Speech recognition error", event.error);
      resetMicUI();
    };

    recognition.onend = () => {
      resetMicUI();
    };

    return recognition;
  }

  function toggleListening() {
    if (!state.recognition) {
      state.recognition = initSpeechRecognition();
    }

    if (!state.recognition) {
      alert("Voice input is best supported in Chrome, Edge, and Safari. You can also type your question right here!");
      return;
    }

    if (state.isListening) {
      state.recognition.stop();
      resetMicUI();
    } else {
      stopSpeaking();
      try {
        state.recognition.start();
      } catch (err) {
        console.warn("Recognition start error:", err);
      }
    }
  }

  function resetMicUI() {
    state.isListening = false;
    const micBtn = document.getElementById("kikat-mic-btn");
    const input = document.getElementById("kikat-input");
    if (micBtn) micBtn.classList.remove("listening");
    if (input) input.placeholder = "Ask Kikat anything about Suman...";
  }

  /* ==========================================================================
     6. UI DOM Creation & Attachment
     ========================================================================== */
  function injectKikatWidget() {
    // If elements already exist, do not re-create
    if (document.getElementById("kikat-launcher")) return;

    // Launcher Button (Floating bottom right)
    const launcher = document.createElement("button");
    launcher.id = "kikat-launcher";
    launcher.className = "kikat-launcher";
    launcher.setAttribute("aria-label", "Open Kikat AI Voice Agent");
    launcher.title = "Ask Kikat (AI Voice Agent)";
    launcher.innerHTML = `
      <div class="kikat-launcher-avatar" id="kikat-launcher-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
      </div>
      <span class="kikat-launcher-badge"></span>
      <div class="kikat-launcher-tooltip">
        <i class="fa-solid fa-volume-high" style="color: #38bdf8;"></i>
        <span>Ask Kikat (Girl Voice AI)</span>
      </div>
    `;

    // Widget Window (Floating right above launcher)
    const widget = document.createElement("div");
    widget.id = "kikat-widget";
    widget.className = "kikat-widget";
    widget.setAttribute("role", "dialog");
    widget.setAttribute("aria-label", "Kikat AI Voice Agent Chat");

    const voiceIcon = state.isVoiceEnabled ? "fa-volume-high" : "fa-volume-xmark";
    const voiceMutedClass = state.isVoiceEnabled ? "" : "muted";

    widget.innerHTML = `
      <!-- Header -->
      <div class="kikat-header">
        <div class="kikat-header-left">
          <div class="kikat-avatar-wrap">
            <div class="kikat-avatar-img">
              <i class="fa-solid fa-face-smile-wink"></i>
            </div>
            <span class="kikat-online-dot"></span>
          </div>
          <div>
            <div class="kikat-header-title">
              <span>Kikat</span>
              <span class="kikat-voice-badge"><i class="fa-solid fa-headphones"></i> Girl Voice AI</span>
            </div>
            <div class="kikat-header-subtitle">Suman Krishna's AI Guide</div>
          </div>
        </div>

        <div class="kikat-header-actions">
          <!-- Voice Waves Animation -->
          <div class="kikat-waves" id="kikat-waves" title="Speaking indicator">
            <span class="kikat-wave-bar"></span>
            <span class="kikat-wave-bar"></span>
            <span class="kikat-wave-bar"></span>
            <span class="kikat-wave-bar"></span>
          </div>

          <!-- Voice Toggle -->
          <button class="kikat-header-btn ${voiceMutedClass}" id="kikat-voice-toggle" title="Toggle Girl Voice Audio">
            <i class="fa-solid ${voiceIcon}"></i>
          </button>

          <!-- Close Button -->
          <button class="kikat-header-btn" id="kikat-close-btn" title="Close Kikat">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Quick Chips Bar -->
      <div class="kikat-chips-container" id="kikat-chips">
        <button class="kikat-chip" data-q="Who is Suman?">📌 Who is Suman?</button>
        <button class="kikat-chip" data-q="Tell me about CTG Faculty App">📱 CTG Faculty App (Flutter)</button>
        <button class="kikat-chip" data-q="Tell me about AIHire">🤖 AIHire Capstone</button>
        <button class="kikat-chip" data-q="What is his RedRob score?">🎯 RedRob: 763/1000</button>
        <button class="kikat-chip" data-q="What certifications does Suman hold?">🥇 7x NASSCOM Gold</button>
        <button class="kikat-chip" data-q="Tell me about his photography">📸 Photography (@bruh.vision)</button>
        <button class="kikat-chip" data-q="What is Suman's chess rating?">♟️ Chess: 750+</button>
        <button class="kikat-chip" data-q="Why should we hire Suman?">🚀 Why Hire Suman?</button>
        <button class="kikat-chip" data-q="How can I contact Suman?">📬 Contact &amp; Hire</button>
      </div>

      <!-- Message History Container -->
      <div class="kikat-body" id="kikat-body">
        <!-- Default Welcome Message -->
        <div class="kikat-message-row bot">
          <div class="kikat-msg-avatar"><i class="fa-solid fa-sparkles"></i></div>
          <div class="kikat-bubble">
            👋 Hi! I'm <strong>Kikat</strong>, Suman Krishna's AI voice agent!<br><br>
            I'm here to answer any questions you have about Suman's software systems, <strong>AIHire</strong>, the <strong>CTG Faculty App (Flutter &amp; Dart)</strong>, his <strong>763 RedRob score</strong>, 7x NASSCOM Gold Certifications, or photography.<br><br>
            <em>Type a question below or tap the microphone to talk with me!</em>
            <div class="kikat-msg-footer">
              <span>Kikat AI Guide</span>
              <button class="kikat-replay-btn" onclick="window.KikatAgent.speak('Hi! I am Kikat, Suman Krishna\\'s personal AI agent. Feel free to ask me anything about his projects, experience, skills, or achievements!')">
                <i class="fa-solid fa-volume-high"></i> Listen
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Footer -->
      <div class="kikat-footer">
        <form class="kikat-input-form" id="kikat-form">
          <input type="text" class="kikat-input" id="kikat-input" placeholder="Ask Kikat anything about Suman..." autocomplete="off">
          <button type="button" class="kikat-btn-icon kikat-mic-btn" id="kikat-mic-btn" title="Speak to Kikat (Microphone)">
            <i class="fa-solid fa-microphone"></i>
          </button>
          <button type="submit" class="kikat-btn-icon kikat-send-btn" id="kikat-send-btn" title="Send Question">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(widget);

    // Bind Event Listeners
    launcher.addEventListener("click", toggleWidget);
    document.getElementById("kikat-close-btn").addEventListener("click", closeWidget);

    const voiceToggleBtn = document.getElementById("kikat-voice-toggle");
    voiceToggleBtn.addEventListener("click", () => {
      state.isVoiceEnabled = !state.isVoiceEnabled;
      localStorage.setItem("kikat_voice", state.isVoiceEnabled ? "true" : "false");
      const icon = voiceToggleBtn.querySelector("i");
      if (state.isVoiceEnabled) {
        voiceToggleBtn.classList.remove("muted");
        icon.className = "fa-solid fa-volume-high";
        speakText("Voice enabled! I'm ready to talk.");
      } else {
        voiceToggleBtn.classList.add("muted");
        icon.className = "fa-solid fa-volume-xmark";
        stopSpeaking();
      }
    });

    // Mic button
    document.getElementById("kikat-mic-btn").addEventListener("click", toggleListening);

    // Chips click
    document.getElementById("kikat-chips").addEventListener("click", (e) => {
      const chip = e.target.closest(".kikat-chip");
      if (chip) {
        const question = chip.getAttribute("data-q") || chip.textContent;
        handleUserSubmit(question);
      }
    });

    // Form submit
    document.getElementById("kikat-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("kikat-input");
      const val = input.value.trim();
      if (val) {
        handleUserSubmit(val);
        input.value = "";
      }
    });
  }

  function toggleWidget() {
    if (state.isOpen) {
      closeWidget();
    } else {
      openWidget();
    }
  }

  function openWidget() {
    state.isOpen = true;
    const widget = document.getElementById("kikat-widget");
    const launcher = document.getElementById("kikat-launcher");
    const icon = document.getElementById("kikat-launcher-icon");

    if (widget) widget.classList.add("active");
    if (launcher) launcher.classList.add("open");
    if (icon) icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    const input = document.getElementById("kikat-input");
    if (input) input.focus();
  }

  function closeWidget() {
    state.isOpen = false;
    stopSpeaking();
    if (state.isListening && state.recognition) {
      state.recognition.stop();
      resetMicUI();
    }

    const widget = document.getElementById("kikat-widget");
    const launcher = document.getElementById("kikat-launcher");
    const icon = document.getElementById("kikat-launcher-icon");

    if (widget) widget.classList.remove("active");
    if (launcher) launcher.classList.remove("open");
    if (icon) icon.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
  }

  /* ==========================================================================
     7. Message Handling & Rendering
     ========================================================================== */
  function handleUserSubmit(userQuestion) {
    if (!userQuestion || !userQuestion.trim()) return;

    if (!state.isOpen) {
      openWidget();
    }

    appendUserMessage(userQuestion);

    // Show Typing Indicator
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const match = findBestMatch(userQuestion);
      appendBotMessage(match.response, match.spoken);
      speakText(match.spoken);
    }, 420);
  }

  function appendUserMessage(text) {
    const body = document.getElementById("kikat-body");
    if (!body) return;

    const row = document.createElement("div");
    row.className = "kikat-message-row user";
    row.innerHTML = `
      <div class="kikat-bubble">${escapeHtml(text)}</div>
    `;
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  }

  function appendBotMessage(htmlContent, spokenText) {
    const body = document.getElementById("kikat-body");
    if (!body) return;

    const row = document.createElement("div");
    row.className = "kikat-message-row bot";

    const escapedSpoken = (spokenText || "").replace(/'/g, "\\'").replace(/"/g, "&quot;");

    row.innerHTML = `
      <div class="kikat-msg-avatar"><i class="fa-solid fa-sparkles"></i></div>
      <div class="kikat-bubble">
        ${htmlContent}
        <div class="kikat-msg-footer">
          <span>Kikat • Voice Agent</span>
          <button class="kikat-replay-btn" onclick="window.KikatAgent.speak('${escapedSpoken}')">
            <i class="fa-solid fa-volume-high"></i> Replay Voice
          </button>
        </div>
      </div>
    `;

    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  }

  function showTypingIndicator() {
    const body = document.getElementById("kikat-body");
    if (!body) return;

    const indicator = document.createElement("div");
    indicator.id = "kikat-typing-indicator";
    indicator.className = "kikat-message-row bot";
    indicator.innerHTML = `
      <div class="kikat-msg-avatar"><i class="fa-solid fa-sparkles"></i></div>
      <div class="kikat-bubble" style="padding: 0.5rem 0.8rem;">
        <div class="kikat-typing-dots">
          <span class="kikat-typing-dot"></span>
          <span class="kikat-typing-dot"></span>
          <span class="kikat-typing-dot"></span>
        </div>
      </div>
    `;
    body.appendChild(indicator);
    body.scrollTop = body.scrollHeight;
  }

  function removeTypingIndicator() {
    const ind = document.getElementById("kikat-typing-indicator");
    if (ind) ind.remove();
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ==========================================================================
     8. Public API
     ========================================================================== */
  window.KikatAgent = {
    open: openWidget,
    close: closeWidget,
    ask: function (question) {
      handleUserSubmit(question);
    },
    speak: function (text) {
      speakText(text);
    },
    stop: stopSpeaking
  };

  /* ==========================================================================
     9. Bootstrapping
     ========================================================================== */
  function boot() {
    injectSelfContainedStyles();
    injectKikatWidget();
    initSpeechSynthesis();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
