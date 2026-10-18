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
    categoryLabel: "Enterprise Web & Analytics",
    featured: true,
    badge: "Institutional System",
    status: "Deployed & Active",
    date: "2026 — CT Group of Institutions",
    image: "assets/images/projects/kra-app.svg",
    shortDesc: "Enterprise institutional performance appraisal platform managing and evaluating faculty, HODs, and HOIs across a rigorous 1,000-mark academic & administrative framework.",
    fullDesc: "A secure, multi-tier institutional digital governance application built for CT Group of Institutions. It digitizes the end-to-end appraisal workflow across 1,000 quantifiable metrics spanning teaching efficacy, research publications, patents, student feedback, and departmental leadership.",
    highlights: [
      "Implemented a 3-tier Role-Based Access Control (RBAC) governance hierarchy: Faculty self-appraisal, HOD departmental review, and HOI executive sanction.",
      "Engineered a dynamic 1,000-Mark scoring calculation engine with real-time validation, evidence attachments, and audit trails.",
      "Built one-click automated Excel (SheetJS) report generation for institutional accreditation and annual faculty reviews.",
      "Developed using Next.js 14 App Router, TypeScript, Tailwind CSS, Better-SQLite3, and JWT session authentication."
    ],
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Better-SQLite3", "RBAC", "SheetJS", "Data Analytics"],
    metrics: [
      { label: "Framework Scale", value: "1,000 Marks" },
      { label: "Role Hierarchy", value: "Faculty / HOD / HOI" },
      { label: "Reports Generated", value: "Instant XLSX" }
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
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
