/**
 * ============================================================================
 * Suman Krishna Portfolio — Projects Master Dataset (12 Engineering Systems)
 * ============================================================================
 * Complete technical specifications, architectures, models, and quantifiable
 * metrics for all 12 flagship engineering and research projects.
 * ============================================================================
 */

const projectsData = [
  {
    id: "aihire",
    title: "AIHire — Autonomous AI Candidate Screening & Interview Platform",
    category: "ml",
    categoryLabel: "Generative AI & LLM Systems",
    badge: "B.Tech Capstone Flagship",
    date: "2026 • CT Institute of Engineering, Management & Technology",
    status: "Production Prototype",
    image: "assets/images/projects/aihire.svg",
    shortDesc: "End-to-end recruitment intelligence system combining LLM-driven adaptive technical interviews, real-time speech transcription, semantic rubric scoring, and algorithmic resume-job matching to eliminate interviewer bias.",
    fullDesc: "AIHire is an autonomous recruitment intelligence engine architected to scale technical screening while ensuring objective, rubric-grounded evaluation. Candidates engage in real-time, context-adaptive coding and architecture interviews where fine-tuned LLMs parse candidate speech, probe problem-solving depth, and synthesize structured candidate performance dossiers with zero human intervention.",
    highlights: [
      "Engineered context-adaptive prompt pipelines using Gemini 1.5 & GPT-4o with dynamic multi-turn follow-up probing based on candidate AST syntax and explanation.",
      "Integrated low-latency Web Speech STT and sentiment confidence tracking with under 350ms response streaming.",
      "Architected automated resume-job semantic parser extracting skills, experience vectors, and matching fit scores using cosine similarity on sentence embeddings.",
      "Containerized microservices stack deployed with FastAPI REST API, Next.js dashboard, PostgreSQL database, and Docker on Render cloud."
    ],
    metrics: [
      { label: "Evaluation Latency", value: "< 350ms" },
      { label: "Resume Match Precision", value: "95.4%" },
      { label: "Screening Throughput", value: "10x Speedup" }
    ],
    tags: ["LLMs", "FastAPI", "Next.js", "Python", "Speech-to-Text", "Docker", "PostgreSQL", "LangChain"],
    githubUrl: "https://github.com/krishnaaidev/aihire2",
    demoUrl: "https://aihire-preview.onrender.com"
  },
  {
    id: "kra-app",
    title: "CT Group KRA & KPI Performance Management System",
    category: "flutter",
    categoryLabel: "Flutter & Cross-Platform Systems",
    badge: "Institutional Production System",
    date: "2026 • CT Group of Institutions",
    status: "Active Institutional Deployment",
    image: "assets/images/projects/kra-app.svg",
    shortDesc: "Enterprise cross-platform performance appraisal suite engineered with Flutter & Dart for CT Group of Institutions, digitizing 1,000-mark faculty evaluations across a 3-tier Role-Based Access Control hierarchy.",
    fullDesc: "An institutional digital governance application built from schematic to production for CT Group of Institutions. Replacing legacy paper appraisal logs, the application standardizes 1,000 quantifiable assessment markers spanning teaching pedagogy, peer-reviewed research publications, patents, student feedback scores, and institutional leadership across thousands of faculty records on Android, iOS, and Web.",
    highlights: [
      "Engineered responsive cross-platform interface using Flutter 3 & Dart with Material 3 design system, supporting mobile and desktop viewport adaptations.",
      "Architected a 3-tier Role-Based Access Control (RBAC) governance framework: Level-1 Faculty Self-Appraisal, Level-2 HOD Departmental Review, and Level-3 HOI Executive Sanction.",
      "Engineered real-time calculation engine dynamically aggregating 1,000 scoring units with evidence verification, digital file uploads, and tamper-proof audit trails.",
      "Integrated one-click automated Excel and PDF export pipelines formatted to meet NAAC and NBA accreditation compliance standards."
    ],
    metrics: [
      { label: "Evaluation Framework", value: "1,000 Marks" },
      { label: "Governance Architecture", value: "3-Tier RBAC" },
      { label: "Platform Targets", value: "Android, iOS & Web" }
    ],
    tags: ["Flutter", "Dart", "Material 3", "Cross-Platform", "RBAC", "REST APIs", "SQLite", "Excel/PDF Export"],
    githubUrl: "https://github.com/krishnaaidev/CTGroup-KRA-KPI",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "ai-doc-assistant",
    title: "AI Document Assistant — RAG-Powered Knowledge Engine",
    category: "ml",
    categoryLabel: "Generative AI & LLMs",
    badge: "Retrieval-Augmented Generation",
    date: "2026",
    status: "Production Deployed",
    image: "assets/images/projects/ai-doc-assistant.svg",
    shortDesc: "Production-grade Retrieval-Augmented Generation (RAG) knowledge engine enabling multi-document semantic question-answering across PDFs, Word docs, and technical specs with grounded citations.",
    fullDesc: "AI Document Assistant bridges enterprise knowledge bases with Large Language Models without hallucination risk. Users upload arbitrary PDFs, DOCX, and TXT manuals; the pipeline ingests, chunks, embeds, and indexes content into a high-dimensional FAISS vector store. A conversational agent dynamically retrieves relevant semantic passages and constructs verified, citation-backed answers.",
    highlights: [
      "Engineered modular RAG pipeline: document chunking with RecursiveCharacterTextSplitter, dense embeddings via sentence-transformers, and FAISS vector index retrieval.",
      "Implemented hybrid search fusing dense semantic vector similarity with BM25 keyword matching for enhanced retrieval recall on complex technical documents.",
      "Integrated Google Gemini 1.5 API with contextual prompt guardrails enforcing strict document grounding and page/paragraph reference citations.",
      "Developed interactive Streamlit web application with drag-and-drop ingestion, conversational memory, confidence scoring, and document preview panel."
    ],
    metrics: [
      { label: "Retrieval Architecture", value: "Hybrid BM25+V" },
      { label: "Vector Index Store", value: "FAISS" },
      { label: "Inference Latency", value: "< 280ms" }
    ],
    tags: ["RAG", "LangChain", "FAISS", "Gemini API", "Sentence Transformers", "Python", "Streamlit", "Vector DB"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "multimodal-depression",
    title: "Multimodal Depression Detection & Affect Analysis System",
    category: "ml",
    categoryLabel: "Deep Learning & Multimodal AI",
    badge: "Flagship Clinical Research",
    date: "2025 • Research Benchmark",
    status: "Research Benchmark",
    image: "assets/images/projects/multimodal-depression.svg",
    shortDesc: "Clinician-inspired tri-modal deep learning architecture fusing linguistic syntax (BERT), acoustic prosody (Wav2Vec 2.0), and facial micro-expressions (ResNet-LSTM) for objective mental health screening.",
    fullDesc: "Designed and trained on the clinical USC DAIC-WOZ semi-structured clinical interview dataset to overcome single-modality diagnosis limitations. The network simultaneously processes speech audio spectrograms, conversational text transcripts, and facial landmark video sequences, fusing high-level representations through a multi-head self-attention late fusion layer.",
    highlights: [
      "Trained audio feature extractor utilizing fine-tuned Wav2Vec 2.0 representations capturing prosody, fundamental pitch jitter, and vocal inflection cues.",
      "Fine-tuned BERT-base transformer for semantic analysis of diagnostic interview transcripts detecting cognitive distortion markers.",
      "Engineered ResNet-50 + bidirectional LSTM visual pipeline tracking Action Units (AUs) and facial gaze avoidance frequencies.",
      "Formulated cross-attention late fusion mechanism achieving an 84.6% F1-score across validation cohorts with diagnostic explainability heatmaps."
    ],
    metrics: [
      { label: "Diagnostic F1-Score", value: "84.6%" },
      { label: "Modality Scope", value: "Tri-Modal (Text/Audio/Video)" },
      { label: "Benchmark Dataset", value: "USC DAIC-WOZ" }
    ],
    tags: ["PyTorch", "BERT", "Wav2Vec 2.0", "ResNet", "LSTM", "Late Fusion", "Computer Vision", "NLP"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "ct-events",
    title: "CT Events — Campus Event & Ticketing Management Platform",
    category: "flutter",
    categoryLabel: "Flutter & Cloud Backend",
    badge: "Campus Mobile Platform",
    date: "2026 • CT Group of Institutions",
    status: "Active Campus Deployment",
    image: "assets/images/projects/ct-events.svg",
    shortDesc: "Full-stack cross-platform mobile application built with Flutter & Firebase, serving 5,000+ campus students with event discovery, one-tap registration, dynamic QR ticketing, and admin analytics.",
    fullDesc: "CT Events centralizes campus engagement across cultural, hackathon, and sports festivals. The mobile application delivers real-time event feeds, categorized discovery, interactive calendar sync, automated push notifications, and tamper-resistant QR entry passes, supported by a comprehensive administrative management dashboard.",
    highlights: [
      "Built responsive mobile client using Flutter & Dart following Clean Architecture and Riverpod state management.",
      "Integrated Firebase Firestore real-time listeners for live seat availability, waitlisting, and instant schedule updates.",
      "Engineered cryptographic QR code ticketing engine with offline-capable gate scanner validation preventing ticket reuse.",
      "Implemented Firebase Cloud Messaging (FCM) automated push notifications for event reminders, venue shifts, and winner announcements."
    ],
    metrics: [
      { label: "Target Userbase", value: "5,000+ Students" },
      { label: "Ticketing System", value: "Dynamic QR" },
      { label: "Check-in Latency", value: "< 1.0s" }
    ],
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "QR Ticketing", "Push Notifications", "Riverpod", "Material 3"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "ct-epass",
    title: "CT E-Pass — Digital Gate Pass & Visitor Security System",
    category: "flutter",
    categoryLabel: "Flutter & Security Systems",
    badge: "Institutional Security Suite",
    date: "2026 • CT Group of Institutions",
    status: "Active Campus Security Deployment",
    image: "assets/images/projects/ct-epass.svg",
    shortDesc: "Smart campus access control system replacing paper gate registers with cryptographically verifiable QR passes, real-time guard checkpoints, automated parent alerts, and admin audit trails.",
    fullDesc: "CT E-Pass digitizes gate security across CT Group university campuses. Students and faculty request verified exit/entry passes directly through the mobile interface; hostel wardens and authorities approve passes in real-time; campus security personnel scan passes with zero physical contact, logging timestamped access records directly to cloud databases.",
    highlights: [
      "Engineered dual-interface mobile application for pass requesters (students/staff) and checkpoint security personnel (gate guards).",
      "Implemented dynamic time-bound QR tokens with cryptographic hash verification to eliminate screenshot forgery.",
      "Integrated real-time approval pipelines sending automated SMS/push notifications to guardians and hostel authorities.",
      "Constructed administrative dashboard providing real-time campus occupancy headcounts, emergency lockdown flags, and CSV audit reports."
    ],
    metrics: [
      { label: "Guard Validation", value: "< 1.2s per Scan" },
      { label: "Security Protocol", value: "Time-Bound QR Hash" },
      { label: "Audit Tracking", value: "100% Digital Log" }
    ],
    tags: ["Flutter", "Dart", "Firebase", "QR Code", "Security Systems", "RBAC", "Cloud Functions", "REST APIs"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "plant-disease",
    title: "Plant & Crop Pathology Diagnostic Vision System",
    category: "cv",
    categoryLabel: "Computer Vision & Deep Learning",
    badge: "Computer Vision Production",
    date: "2025 – 2026",
    status: "Live Web Deployment",
    image: "assets/images/projects/plant-disease.svg",
    shortDesc: "Deep Convolutional Neural Network trained on 54,000+ PlantVillage leaf images across 38 crop-disease pairs, attaining 96.7% classification accuracy with real-time browser diagnostic deployment.",
    fullDesc: "An agricultural AI diagnostics platform engineered to empower farmers with instant smartphone crop pathology detection. The system preprocesses field images under variable ambient lighting and outputs multi-class disease classifications along with organic and chemical treatment recommendations.",
    highlights: [
      "Trained deep CNN architecture leveraging transfer learning with MobileNetV2 and ResNet-50 backbones on 54,000+ annotated leaf images.",
      "Engineered robust image preprocessing pipeline incorporating Contrast Limited Adaptive Histogram Equalization (CLAHE) and data augmentation.",
      "Deployed lightweight Flask REST API and web interface returning classification confidence scores in under 120ms.",
      "Constructed comprehensive pathology remediation database delivering actionable pest and fungal treatment advice for each diagnosed class."
    ],
    metrics: [
      { label: "Classification Accuracy", value: "96.7%" },
      { label: "Pathology Classes", value: "38 Crop Pairs" },
      { label: "Inference Latency", value: "< 120ms" }
    ],
    tags: ["TensorFlow", "Keras", "CNN", "OpenCV", "MobileNetV2", "Flask", "Python", "Image Processing"],
    githubUrl: "https://github.com/krishnaaidev/Plant-Disease-Recognition-System",
    demoUrl: "https://blogsitesk.netlify.app/?article=1"
  },
  {
    id: "superstore-bi",
    title: "Enterprise Sales & Profit Intelligence Suite",
    category: "bi",
    categoryLabel: "Data Engineering & Business Intelligence",
    badge: "Industry Internship Project",
    date: "Jun 2025 – Sep 2025 • EduTech Solutions",
    status: "Completed & Benchmarked",
    image: "assets/images/projects/superstore-bi.svg",
    shortDesc: "Production 4-page Power BI executive intelligence suite analyzing 50,000+ transaction records, featuring 25+ custom DAX time-intelligence models and profit margin sensitivity forecasting.",
    fullDesc: "Engineered during a data analytics internship at EduTech Solutions to transform raw enterprise transactional logs into predictive executive intelligence. The suite provides interactive regional profitability breakdowns, discount leak detection, customer cohort retention metrics, and shipping logistics optimization.",
    highlights: [
      "Engineered relational star-schema data model linking sales transactions, customer demographics, regional tables, and return logs.",
      "Authored 25+ advanced DAX calculations covering Year-Over-Year growth, Moving Averages, Customer Lifetime Value (CLV), and Profit Sensitivity.",
      "Conducted automated Python exploratory data analysis detecting persistent gross-margin losses within specific discounted office furniture lines.",
      "Formulated dynamic discount capping policy simulation projecting a 4.2% margin recovery across vulnerable retail territories."
    ],
    metrics: [
      { label: "Dataset Records", value: "50,000+ Rows" },
      { label: "Analytical Depth", value: "25+ DAX Measures" },
      { label: "Suite Coverage", value: "4 Executive Pages" }
    ],
    tags: ["Power BI", "DAX", "Python", "Pandas", "Data Modeling", "Star Schema", "Business Intelligence", "SQL"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "career-guidance",
    title: "Career Guidance & Talent Recommendation Engine",
    category: "ml",
    categoryLabel: "Machine Learning & Predictive Systems",
    badge: "Cloud Deployed System",
    date: "Jan 2026 – Mar 2026",
    status: "Live on Render Cloud",
    image: "assets/images/projects/career-guidance.svg",
    shortDesc: "Data-driven talent recommendation engine predicting optimal career trajectories and generating personalized upskilling roadmaps based on technical competencies, psychometrics, and academic milestones.",
    fullDesc: "An algorithmic recommendation engine designed to bridge the engineering talent-opportunity gap. The system benchmarks student skill inventories against contemporary tech industry job architectures, outputting predictive role match probabilities and curated skill gap resolution roadmaps.",
    highlights: [
      "Constructed end-to-end predictive pipeline using Scikit-learn with automated one-hot encoding, feature normalization, and hyperparameter tuning.",
      "Evaluated Random Forest and Gradient Boosted Tree ensemble classifiers, achieving 94.2% precision on multi-class role predictions.",
      "Implemented dynamic skill-gap radar visualization contrasting candidate capability vectors against industry benchmarks.",
      "Deployed interactive Flask web interface on Render cloud providing instantaneous recommendations and automated learning paths."
    ],
    metrics: [
      { label: "Prediction Precision", value: "94.2%" },
      { label: "Inference Latency", value: "< 280ms" },
      { label: "Cloud Hosting", value: "Render Cloud" }
    ],
    tags: ["Machine Learning", "Scikit-learn", "Python", "Flask", "Pandas", "Feature Engineering", "Render Cloud"],
    githubUrl: "https://github.com/krishnaaidev/Career-Guidance",
    demoUrl: "https://career-guidance-pixel2predict.onrender.com"
  },
  {
    id: "air-pollution",
    title: "Epidemiological Health Risk Modeling via Air Quality Analytics",
    category: "bi",
    categoryLabel: "Epidemiological Data Science",
    badge: "Environmental Research",
    date: "Apr 2026 – Jun 2026",
    status: "Research Benchmark",
    image: "assets/images/projects/air-pollution.svg",
    shortDesc: "Statistical and machine learning regression analysis correlating continuous atmospheric pollutants (PM2.5, PM10, NOx, SO2, CO, O3) with cardiorespiratory morbidity thresholds.",
    fullDesc: "An empirical epidemiological study analyzing the non-linear relationship between atmospheric pollutant concentrations and public health risks. Merged multi-year meteorological time-series records with clinical epidemiological parameters to formulate data-driven exposure risk thresholds.",
    highlights: [
      "Processed multi-source meteorological and sensor datasets spanning particulate matter (PM2.5, PM10) and toxic gaseous compounds.",
      "Modeled non-linear exposure-response relationships using polynomial regression and Generalized Additive Models (GAMs).",
      "Identified critical vulnerability tipping points for pediatric and geriatric demographic cohorts under sustained winter inversions.",
      "Generated policy recommendation benchmarks for municipal real-time air quality alert triggers."
    ],
    metrics: [
      { label: "Pollutants Tracked", value: "6 Major Compounds" },
      { label: "Temporal Scale", value: "Multi-Year Series" },
      { label: "Analytical Model", value: "Non-Linear GAMs" }
    ],
    tags: ["Data Science", "Python", "Pandas", "NumPy", "Statsmodels", "Seaborn", "Time-Series Analysis", "Epidemiology"],
    githubUrl: "https://github.com/krishnaaidev/Air-Pollution-Health-Risk-Analysis",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "robo-car",
    title: "Dual-Mode Teleoperated Autonomous Robotic Platform",
    category: "iot",
    categoryLabel: "Robotics & Embedded Systems",
    badge: "Hardware Prototype",
    date: "Feb 2026 • University Technical Exhibition",
    status: "Fabricated & Exhibited",
    image: "assets/images/projects/robo-car.svg",
    shortDesc: "Custom-fabricated dual-mode robotic vehicle engineered with Arduino Uno microcontroller, HC-05 Bluetooth transceiver, and L298N dual H-bridge motor driver with mobile serial telemetry.",
    fullDesc: "Designed and fabricated from schematic circuit layout to physical chassis assembly. Features dual operational control modes: tethered manual joystick guidance and wireless Bluetooth serial communication paired with a custom Android telemetry application.",
    highlights: [
      "Designed circuit schematics integrating Arduino Uno microcontroller with L298N high-current motor drivers and DC gear motors.",
      "Authored embedded C++ firmware with PWM speed modulation, differential steering algorithms, and fail-safe interrupt routines.",
      "Engineered HC-05 wireless Bluetooth serial packet parsing protocol ensuring low-latency mobile control up to 15 meters.",
      "Exhibited chassis prototype at the university technical symposium, demonstrating autonomous obstacle avoidance and teleoperation."
    ],
    metrics: [
      { label: "Control Modes", value: "Dual (Wired / BT)" },
      { label: "Wireless Range", value: "Up to 15 Meters" },
      { label: "Drive System", value: "Differential PWM" }
    ],
    tags: ["Arduino", "Embedded C++", "Bluetooth HC-05", "L298N", "Hardware Design", "Robotics", "IoT"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://sumankrishnaportfolio.netlify.app/projects"
  },
  {
    id: "jarvis-assistant",
    title: "J.A.R.V.I.S. Context-Aware AI Desktop Assistant",
    category: "ml",
    categoryLabel: "NLP & Voice Intelligence",
    badge: "Desktop Intelligence",
    date: "2025 – Present",
    status: "Active Development",
    image: "assets/images/projects/jarvis.svg",
    shortDesc: "Proactive desktop intelligence assistant integrating local speech recognition, conversational intent parsing, operating system automation, and local LLM context memory.",
    fullDesc: "An advanced desktop productivity system moving past scripted voice macros toward contextual reasoning and workflow automation. Incorporates real-time speech-to-text processing, intent extraction, local file indexing, and external API querying.",
    highlights: [
      "Engineered low-latency audio capture and speech recognition pipeline with local text-to-speech feedback.",
      "Implemented intent classification models mapping spoken natural queries to automated OS routines, browser searches, and app controls.",
      "Integrated local LLM pipeline via LangChain for conversational memory, code explanation, and document summarization.",
      "Published comprehensive architectural breakdowns on technical blog detailing pipeline optimization and latency benchmarks."
    ],
    metrics: [
      { label: "Voice Latency", value: "< 380ms" },
      { label: "Command Scope", value: "50+ Built-in Intents" },
      { label: "Architecture", value: "Modular Event Pipeline" }
    ],
    tags: ["Python", "NLP", "SpeechRecognition", "Pyttsx3", "OS Automation", "LangChain", "Local LLM"],
    githubUrl: "https://github.com/krishnaaidev",
    demoUrl: "https://blogsitesk.netlify.app/?article=3"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
