/**
 * Suman Krishna Portfolio - Projects Data
 * Machine Learning, Computer Vision, Data Analytics, Deep Learning, Full-Stack & Robotics
 */

const projectsData = [
  {
    id: "aihire",
    title: "AIHire: Autonomous AI Interview & Candidate Evaluation Platform",
    category: "ml",
    categoryLabel: "LLMs, NLP & AI Interview",
    featured: true,
    badge: "B.Tech Capstone",
    status: "Academic Capstone (2026)",
    date: "2026 — B.Tech Capstone Project",
    image: "assets/images/projects/aihire.svg",
    shortDesc: "End-to-end recruitment decision-support system fusing Large Language Models (LLMs), NLP, speech processing, and automated resume screening for autonomous candidate evaluation.",
    fullDesc: "AIHire is a next-generation recruitment decision-support platform engineered as a B.Tech Capstone Project at CT Institute of Engineering, Management and Technology. It autonomously conducts and scores technical interviews using fine-tuned LLMs, real-time speech-to-text processing, sentiment and confidence tracking, and algorithmic resume-to-job matching.",
    highlights: [
      "Engineered an autonomous AI interviewer that dynamically generates context-aware follow-up technical questions based on candidate responses.",
      "Integrated real-time audio speech-to-text and NLP emotion/confidence scoring pipelines.",
      "Built an automated resume screener parsing PDF/DOCX resumes against multi-attribute job descriptions to generate instant fit scores.",
      "Architected clean microservices using Next.js, FastAPI, Docker containers, and cloud deployment pipelines."
    ],
    tags: ["LLMs", "FastAPI", "Next.js", "Python", "Speech-to-Text", "NLP", "Docker", "Resume Screener"],
    metrics: [
      { label: "Evaluation Latency", value: "< 350ms streaming" },
      { label: "Resume Parsing Match", value: "95%+ Accuracy" },
      { label: "Deployment", value: "Docker + Render" }
    ],
    github: "https://github.com/krishnaaidev/aihire2",
    demo: "#"
  },
  {
    id: "kra-app",
    title: "CT Group KRA & KPI Performance Management System",
    category: "bi",
    categoryLabel: "Flutter Mobile & Cross-Platform",
    featured: true,
    badge: "Institutional System",
    status: "Deployed & Active",
    date: "2026 — CT Group of Institutions",
    image: "assets/images/projects/kra-app.svg",
    shortDesc: "Cross-platform performance evaluation system engineered with Flutter & Dart for CT Group of Institutions, managing 1,000-mark faculty appraisals with 3-tier RBAC and automated Excel/PDF report generation.",
    fullDesc: "A secure, multi-tier institutional digital governance application engineered with Flutter and Dart for CT Group of Institutions. The app digitizes the complete institutional appraisal workflow across 1,000 quantifiable metrics spanning teaching efficacy, research publications, patents, student feedback, and departmental leadership with native Android, iOS, and web access.",
    highlights: [
      "Engineered cross-platform mobile and web interface using Flutter & Dart with responsive Material 3 components.",
      "Implemented a 3-tier Role-Based Access Control (RBAC) governance hierarchy: Faculty self-appraisal, HOD departmental review, and HOI executive sanction.",
      "Developed a dynamic 1,000-Mark scoring calculation engine with real-time validation, evidence attachments, and audit trails.",
      "Built one-click automated Excel & PDF report generation for institutional accreditation and annual faculty reviews."
    ],
    tags: ["Flutter", "Dart", "Cross-Platform", "Material 3", "State Management", "RBAC", "REST API", "Excel/PDF Export"],
    metrics: [
      { label: "Framework Scale", value: "1,000 Marks" },
      { label: "Core Framework", value: "Flutter & Dart" },
      { label: "Platforms", value: "Android, iOS & Web" }
    ],
    github: "https://github.com/krishnaaidev/CTGroup-KRA-KPI",
    demo: "#"
  },
  {
    id: "multimodal-depression",
    title: "Multimodal Depression Detection System",
    category: "ml",
    categoryLabel: "Deep Learning & NLP",
    featured: true,
    badge: "Flagship Research",
    status: "Active Research & Development",
    date: "May 2026 – Present",
    image: "assets/images/projects/multimodal-depression.svg",
    shortDesc: "Clinician-inspired multimodal AI screening combining BERT (text), Wav2Vec 2.0 (audio), and ResNet-LSTM (video/facial cues) with real-time emotion tracking.",
    fullDesc: "An advanced mental health diagnostic screening pipeline leveraging multimodal deep learning to fuse acoustic, linguistic, and visual signals. Trained on the clinical USC DAIC-WOZ (Distress Analysis Interview Corpus - Wizard of Oz) dataset, the architecture uses a late-fusion multi-head attention network to correlate verbal expressions with vocal prosody and micro-facial movements.",
    highlights: [
      "Secured and preprocessed the USC DAIC-WOZ multimodal clinical dataset (audio, transcriptions, facial action units).",
      "Architected tri-modal late fusion model combining BERT, Wav2Vec 2.0, and ResNet-LSTM networks.",
      "Engineered real-time analysis backend using FastAPI and WebSockets for live emotion tracking.",
      "Developed a companion Chrome extension designed for passive telehealth consultation monitoring."
    ],
    tags: ["BERT", "Wav2Vec2", "ResNet-LSTM", "FastAPI", "WebSockets", "PyTorch", "DAIC-WOZ", "Multimodal AI"],
    metrics: [
      { label: "Data Modalities", value: "3 (Text, Audio, Video)" },
      { label: "Clinical Corpus", value: "USC DAIC-WOZ" },
      { label: "Latency Target", value: "< 250ms streaming" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "#"
  },
  {
    id: "superstore-bi",
    title: "Superstore Sales & Profit Analytics Dashboard",
    category: "bi",
    categoryLabel: "Data Analytics & BI",
    featured: true,
    badge: "Industry Project",
    status: "Production Ready",
    date: "June 2026 — for EduTech Solutions",
    image: "assets/images/projects/superstore-bi.svg",
    shortDesc: "Interactive 4-page Power BI executive dashboard coupled with automated Python EDA and profit-discount sensitivity analysis.",
    fullDesc: "Designed and engineered during the Data Analytics internship at EduTech Solutions. Built an end-to-end data pipeline transforming raw transaction records into strategic business insights. Features 4 synchronized Power BI report pages with cross-filtering, drill-through hierarchies, automated one-click Python exploratory data analysis (EDA), and deep-dive margin optimization.",
    highlights: [
      "Built 4 synchronized Power BI interactive pages covering Sales Executive Summary, Product Profitability, Regional Segments, and Return Trends.",
      "Authored automated one-click Python EDA scripts that output instant statistical profiling, distributions, and anomaly reports.",
      "Conducted profit-discount sensitivity deep dive, isolating chronic loss-making SKU subcategories and recommending discount threshold caps.",
      "Delivered executive-ready KPIs directly impacting business sales strategy and marketing allocation."
    ],
    tags: ["Power BI", "Python", "SQL", "DAX", "Data Modeling", "EDA", "Business Intelligence", "Excel"],
    metrics: [
      { label: "Interactive Pages", value: "4 Linked Views" },
      { label: "Data Volume", value: "50,000+ Records" },
      { label: "Loss Reduction", value: "Identified Key SKUs" }
    ],
    github: "https://github.com/krishnaaidev/superstore-powerbi-dashboard",
    demo: "https://sumankrishnaportfolio.netlify.app"
  },
  {
    id: "plant-disease",
    title: "Plant & Crop Disease Recognition System",
    category: "cv",
    categoryLabel: "Computer Vision & CNNs",
    featured: true,
    badge: "96.7% Accuracy",
    status: "Deployed Web App",
    date: "Jul 2025 – Nov 2025",
    image: "assets/images/projects/plant-disease.svg",
    shortDesc: "End-to-end computer vision web platform for automated crop disease diagnosis from leaf photographs, achieving ~96.7% accuracy across 38 classes.",
    fullDesc: "A complete agro-tech AI solution built to empower farmers and agronomists with rapid, automated plant pathology detection. The system trains a custom Convolutional Neural Network on the benchmark PlantVillage dataset (over 54,000 images), performing advanced image augmentation, normalization, and feature extraction. Packaged and deployed as a responsive web app.",
    highlights: [
      "Trained custom deep Convolutional Neural Networks (CNNs) reaching 96.7% diagnostic test accuracy across 38 healthy/diseased crop categories.",
      "Implemented comprehensive image preprocessing pipeline including CLAHE contrast equalization, rotation augmentation, and normalization.",
      "Developed a lightweight Flask web application allowing instantaneous photo uploads with instant disease classification and confidence scoring.",
      "Provided actionable organic and chemical remediation guidelines alongside each diagnosis."
    ],
    tags: ["TensorFlow", "CNN", "OpenCV", "Flask", "Python", "Image Processing", "PlantVillage"],
    metrics: [
      { label: "Model Accuracy", value: "96.7%" },
      { label: "Crop Classes", value: "38 Categories" },
      { label: "Inference Time", value: "< 120ms" }
    ],
    github: "https://github.com/krishnaaidev/Plant-Disease-Recognition-System",
    demo: "https://blogsitesk.netlify.app/?article=1"
  },
  {
    id: "career-guidance",
    title: "Career Guidance & Job Recommendation System",
    category: "ml",
    categoryLabel: "Machine Learning & RecSys",
    featured: true,
    badge: "Live on Render",
    status: "Deployed Live",
    date: "Jan 2026 – Mar 2026",
    image: "assets/images/projects/career-guidance.svg",
    shortDesc: "Data-driven career recommendation engine predicting optimal job roles and generating targeted upskilling roadmaps based on technical competencies.",
    fullDesc: "An intelligent recommendation engine engineered to bridge the talent-opportunity gap for engineering students and job seekers. Evaluates user skills, coding competencies, academic marks, and behavioral traits against industry job profiles to output match probabilities, role suggestions, and targeted skill acquisition paths.",
    highlights: [
      "Engineered an end-to-end predictive pipeline with Scikit-learn, handling data cleaning, one-hot encoding, and hyperparameter-tuned classification.",
      "Implemented intelligent skill-gap radar analysis that contrasts candidate profile vs industry benchmark standards.",
      "Deployed on Render cloud with an intuitive interactive UI providing immediate recommendations and personalized learning links.",
      "Published a detailed technical breakdown article covering recommendation theory and model benchmarks."
    ],
    tags: ["Machine Learning", "Scikit-learn", "Python", "Flask", "Render", "Feature Engineering", "Pandas"],
    metrics: [
      { label: "Prediction Match", value: "94.2% Precision" },
      { label: "Deployment", value: "Render Cloud" },
      { label: "Response Time", value: "< 300ms" }
    ],
    github: "https://github.com/krishnaaidev/Career-Guidance",
    demo: "https://career-guidance-pixel2predict.onrender.com"
  },
  {
    id: "air-pollution",
    title: "Health Risk Analysis using Air Pollution Parameters",
    category: "bi",
    categoryLabel: "Data Science & Healthcare",
    featured: false,
    badge: "Environmental Data",
    status: "Completed",
    date: "Apr 2026 – Jun 2026",
    image: "assets/images/projects/air-pollution.svg",
    shortDesc: "Epidemiological predictive modeling analyzing airborne pollutants (PM2.5, PM10, NOx, SO2, CO, Ozone) to quantify cardiovascular & respiratory risks.",
    fullDesc: "Conducted an in-depth empirical study assessing the direct statistical correlation between concentrated atmospheric pollutants and human mortality / hospital admission metrics. Merged meteorological time-series records with clinical epidemiological parameters to formulate actionable exposure risk thresholds for public health advisory.",
    highlights: [
      "Processed multi-source environmental datasets spanning particulate matter (PM2.5, PM10) and gaseous compounds (NOx, SO2, CO, O3).",
      "Modeled non-linear exposure-response curves using regression and generalized additive models.",
      "Identified critical vulnerability indices for pediatric and geriatric populations.",
      "Generated data-driven policy recommendations for municipal air quality warning thresholds."
    ],
    tags: ["Data Analytics", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Epidemiology", "Time-Series"],
    metrics: [
      { label: "Key Pollutants", value: "6 Monitored" },
      { label: "Timeframe", value: "Multi-year Series" },
      { label: "Risk Factors", value: "Cardio & Resp." }
    ],
    github: "https://github.com/krishnaaidev/Air-Pollution-Health-Risk-Analysis",
    demo: "https://sumankrishnaportfolio.netlify.app"
  },
  {
    id: "robo-car",
    title: "Design & Fabrication of Dual Wired & Bluetooth Robo Car",
    category: "iot",
    categoryLabel: "Robotics & Embedded Systems",
    featured: false,
    badge: "Hardware & IoT",
    status: "Fabricated Prototype",
    date: "Feb 2026",
    image: "assets/images/projects/robo-car.svg",
    shortDesc: "Custom-fabricated dual-mode robotic vehicle powered by Arduino Uno, HC-05 Bluetooth module, and L298N dual H-bridge motor driver.",
    fullDesc: "Designed and fabricated an autonomous/teleoperated robotic platform from circuit schematic to physical assembly. Features dual operational control modes: tethered manual wired joystick control and wireless Bluetooth communication via custom Android mobile application.",
    highlights: [
      "Engineered hardware schematics integrating Arduino Uno microcontroller with L298N motor driver and DC gear motors.",
      "Programmed embedded firmware in C++ for real-time serial packet parsing and differential steering control.",
      "Implemented HC-05 wireless Bluetooth communication module pairing with mobile controllers.",
      "Participated with the chassis in university robotics exhibition and technical showcase."
    ],
    tags: ["Arduino", "Embedded C++", "Bluetooth HC-05", "L298N", "Hardware Design", "Robotics"],
    metrics: [
      { label: "Control Modes", value: "Dual (Wired/BT)" },
      { label: "Wireless Range", value: "Up to 15m" },
      { label: "Architecture", value: "Differential Drive" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "#"
  },
  {
    id: "jarvis-assistant",
    title: "J.A.R.V.I.S. AI Voice Assistant",
    category: "ml",
    categoryLabel: "NLP & Voice AI",
    featured: false,
    badge: "In Progress",
    status: "Active Development",
    date: "2025 – Present",
    image: "assets/images/projects/jarvis.svg",
    shortDesc: "Next-generation proactive voice assistant with natural language processing, intelligent desktop automation, and contextual conversational memory.",
    fullDesc: "An advanced desktop intelligence assistant designed to move past simple scripted voice commands toward true context-aware conversation and automated workflows. Incorporates speech-to-text, intent parsing, automated system task execution, and knowledge retrieval.",
    highlights: [
      "Engineered speech recognition and text-to-speech audio pipelines for low-latency hands-free interaction.",
      "Implemented intent extraction models mapping spoken natural queries to automated OS and browser tasks.",
      "Drafted comprehensive architectural insights published on personal technical blog.",
      "Incorporating local LLM integration for conversational memory and contextual reasoning."
    ],
    tags: ["Python", "NLP", "SpeechRecognition", "Pyttsx3", "OS Automation", "AI Assistant"],
    metrics: [
      { label: "Voice Latency", value: "< 400ms" },
      { label: "Command Set", value: "50+ Built-in Intents" },
      { label: "Architecture", value: "Modular Pipeline" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "https://blogsitesk.netlify.app/?article=3"
  },
  {
    id: "ct-events",
    title: "CT Events — College Event Management Platform",
    category: "flutter",
    categoryLabel: "Flutter Mobile & Full-Stack",
    featured: true,
    badge: "Institutional App",
    status: "Deployed & Active",
    date: "2026 — CT Group of Institutions",
    image: "assets/images/projects/kra-app.svg",
    shortDesc: "Full-stack college event management app built with Flutter & Firebase, enabling students to discover, register, and track campus events with real-time updates and admin dashboard.",
    fullDesc: "CT Events is an institutional event management platform developed for CT Group of Institutions. It allows students to browse upcoming campus events, register with one tap, receive push notifications, and check-in via QR code. Admins can create events, manage attendee lists, and publish announcements — all from a unified dashboard.",
    highlights: [
      "Built cross-platform mobile app (Android & iOS) with Flutter & Dart using Material 3 design system.",
      "Integrated Firebase Firestore for real-time event data sync and Firebase Auth for secure student login.",
      "Implemented QR-code based event check-in system with attendance tracking and PDF export.",
      "Developed admin dashboard for event creation, registration management, and push notification dispatch.",
      "Added event calendar view, category filters (Tech, Cultural, Sports), and countdown timers."
    ],
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "QR Code", "Push Notifications", "Admin Dashboard", "Material 3"],
    metrics: [
      { label: "Platform", value: "Android & iOS" },
      { label: "Backend", value: "Firebase Firestore" },
      { label: "Feature", value: "QR Check-In" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "#"
  },
  {
    id: "ct-epass",
    title: "CT E-Pass — Digital Gate Pass & Visitor Management System",
    category: "flutter",
    categoryLabel: "Flutter Mobile & IoT",
    featured: true,
    badge: "Campus Security System",
    status: "Deployed & Active",
    date: "2026 — CT Group of Institutions",
    image: "assets/images/projects/kra-app.svg",
    shortDesc: "Smart digital gate-pass system replacing paper-based visitor logs at CT Group campuses. Features QR-based entry, real-time guard verification, student/staff pass generation, and admin oversight.",
    fullDesc: "CT E-Pass modernizes campus access control by replacing manual paper entry registers with a fully digital, QR-driven pass system. Students and staff generate verified digital passes through the app. Security personnel scan QR codes at the gate for real-time validation. Admins monitor all campus entry/exit logs from a centralized dashboard with filtering and export capabilities.",
    highlights: [
      "Designed and developed end-to-end Flutter mobile application for pass generation and QR scanning.",
      "Implemented dynamic QR code generation with time-bound expiry and tamper-detection validation.",
      "Built real-time Firebase sync between student pass requests and security guard verification screens.",
      "Added admin panel with entry/exit audit logs, date-range filters, and CSV export for compliance.",
      "Integrated offline guard mode with local cache fallback ensuring uninterrupted campus security."
    ],
    tags: ["Flutter", "Dart", "Firebase", "QR Code", "Campus Security", "Real-Time Sync", "Admin Panel", "IoT"],
    metrics: [
      { label: "Pass Type", value: "Student & Visitor" },
      { label: "Validation", value: "QR + Time-Bound" },
      { label: "Logging", value: "Real-Time Audit Trail" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "#"
  },
  {
    id: "ai-doc-assistant",
    title: "AI Document Assistant — RAG-Powered Knowledge Chat",
    category: "ml",
    categoryLabel: "LLMs & Retrieval-Augmented Generation",
    featured: true,
    badge: "Generative AI",
    status: "Completed",
    date: "2026",
    image: "assets/images/projects/aihire.svg",
    shortDesc: "Retrieval-Augmented Generation (RAG) system that lets users upload PDFs, Word docs, or text files and instantly chat with their documents using LLM-powered semantic search.",
    fullDesc: "AI Document Assistant is a production-grade RAG pipeline that transforms static documents into interactive knowledge bases. Users upload any PDF, DOCX, or TXT file; the system chunks, embeds, and indexes the content using FAISS vector store. A conversational LLM then answers natural language questions grounded strictly in the uploaded document context — no hallucinations, citations included.",
    highlights: [
      "Built end-to-end RAG pipeline: document ingestion → chunking → embedding (sentence-transformers) → FAISS vector index → LLM retrieval-augmented response.",
      "Integrated Google Gemini API as the generative backbone with custom prompt templates enforcing document-grounded answers.",
      "Implemented multi-document support with source citation — responses include the exact page and paragraph they came from.",
      "Designed clean Streamlit web UI with drag-and-drop upload, conversation history, and answer confidence display.",
      "Added hybrid search combining dense vector similarity and BM25 keyword retrieval for improved recall on technical documents."
    ],
    tags: ["RAG", "LangChain", "FAISS", "Gemini API", "Sentence Transformers", "Python", "Streamlit", "Vector DB"],
    metrics: [
      { label: "Architecture", value: "RAG + FAISS Index" },
      { label: "LLM Backend", value: "Gemini API" },
      { label: "Retrieval", value: "Hybrid Dense + BM25" }
    ],
    github: "https://github.com/krishnaaidev",
    demo: "#"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
