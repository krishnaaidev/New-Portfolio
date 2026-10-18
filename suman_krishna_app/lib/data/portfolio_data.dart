class ProjectItem {
  final String id;
  final String title;
  final String category;
  final String categoryLabel;
  final String date;
  final String badge;
  final String shortDesc;
  final String fullDesc;
  final List<String> highlights;
  final List<String> tags;
  final Map<String, String> metrics;
  final String github;
  final String demo;
  final String image;

  const ProjectItem({
    required this.id,
    required this.title,
    required this.category,
    required this.categoryLabel,
    required this.date,
    required this.badge,
    required this.shortDesc,
    required this.fullDesc,
    required this.highlights,
    required this.tags,
    required this.metrics,
    required this.github,
    required this.demo,
    required this.image,
  });
}

class CertificateItem {
  final String title;
  final String issuer;
  final String score;
  final String id;
  final String date;
  final String badge;
  final String description;

  const CertificateItem({
    required this.title,
    required this.issuer,
    required this.score,
    required this.id,
    required this.date,
    required this.badge,
    required this.description,
  });
}

class ExperienceItem {
  final String role;
  final String company;
  final String period;
  final String location;
  final String type;
  final List<String> points;
  final List<String> tech;

  const ExperienceItem({
    required this.role,
    required this.company,
    required this.period,
    required this.location,
    required this.type,
    required this.points,
    required this.tech,
  });
}

class PortfolioData {
  static const String name = "Suman Krishna";
  static const String role = "Machine Learning & Flutter Engineer";
  static const String institution = "CT Institute of Engineering, Management & Technology (CTIEMT)";
  static const String education = "B.Tech in Computer Science & Engineering (2023 – 2027)";
  static const String cgpa = "8.0 / 10.0";
  static const String redRobScore = "763 / 1000";
  static const String chessRating = "750+";

  // Contact Information
  static const String emailInstitutional = "suman2301275@ctiemt.ctgroup.in";
  static const String emailPersonal = "krishna.techx.31@gmail.com";
  static const String phone = "+91 9798442880";
  static const String github = "https://github.com/krishnaaidev";
  static const String linkedin = "https://linkedin.com/in/suman-krishna-7a17a6275";
  static const String instagramPhoto = "https://instagram.com/bruh.vision";
  static const String instagramPersonal = "https://instagram.com/krishna.ai.dev";
  static const String blog = "https://blogsitesk.netlify.app";

  // Bio
  static const String summary =
      "Final-year Computer Science undergraduate at CT Institute of Engineering, Management & Technology with an 8.0 CGPA. Official Google Student Ambassador (since Sep 2025) and core Google Developer Groups (GDG) Member (since Sep 2026). Specialized in architecting end-to-end Machine Learning systems, cross-platform Flutter applications, and data-driven analytics.";

  // Key Stats
  static const List<Map<String, String>> stats = [
    {"label": "Standardized Test", "value": "763 / 1000", "sub": "RedRob Benchmark"},
    {"label": "Degree CGPA", "value": "8.0 / 10", "sub": "B.Tech CSE (CTIEMT)"},
    {"label": "NASSCOM Gold", "value": "7x Gold", "sub": "100% in AWS & GenAI"},
    {"label": "Chess Rating", "value": "750+", "sub": "Tactical Play"},
  ];

  // Projects
  static const List<ProjectItem> projects = [
    ProjectItem(
      id: "kra-app",
      title: "CT Group KRA & KPI Performance Management System",
      category: "flutter",
      categoryLabel: "Flutter Mobile & Cross-Platform",
      date: "2026 • CT Group of Institutions",
      badge: "Institutional System",
      shortDesc:
          "Cross-platform performance evaluation system engineered with Flutter & Dart for CT Group of Institutions, managing 1,000-mark faculty appraisals with 3-tier RBAC and automated Excel/PDF report generation.",
      fullDesc:
          "A secure, multi-tier institutional digital governance application engineered with Flutter and Dart for CT Group of Institutions. The app digitizes the complete institutional appraisal workflow across 1,000 quantifiable metrics spanning teaching efficacy, research publications, patents, student feedback, and departmental leadership with native Android, iOS, and web access.",
      highlights: [
        "Engineered cross-platform mobile and web interface using Flutter & Dart with responsive Material 3 components.",
        "Implemented a 3-tier Role-Based Access Control (RBAC) governance hierarchy: Faculty self-appraisal, HOD departmental review, and HOI executive sanction.",
        "Developed a dynamic 1,000-Mark scoring calculation engine with real-time validation, evidence attachments, and audit trails.",
        "Built one-click automated Excel & PDF report generation for institutional accreditation and annual faculty reviews."
      ],
      tags: ["Flutter", "Dart", "Material 3", "Cross-Platform", "RBAC", "SQLite", "REST API", "Excel/PDF Export"],
      metrics: {"Scale": "1,000 Marks", "Framework": "Flutter & Dart", "Target": "Android, iOS & Web"},
      github: "https://github.com/krishnaaidev/CTGroup-KRA-KPI",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "aihire",
      title: "AIHire — Autonomous AI Recruitment & Candidate Evaluation",
      category: "ml",
      categoryLabel: "Full-Stack AI & LLM Systems",
      date: "2026 • B.Tech Capstone Project",
      badge: "Capstone Project",
      shortDesc:
          "AI-driven automated candidate screening and technical interview engine utilizing custom prompt pipelines, real-time code evaluation, semantic rubric scoring, and objective analytics.",
      fullDesc:
          "An autonomous hiring intelligence platform designed to eliminate recruiter bias and scale technical screening. Candidates undergo interactive AI interviews evaluating code syntax, problem-solving, and verbal explanation, with automated rubric generation and recruiter dashboards.",
      highlights: [
        "Architected complete end-to-end autonomous interview workflow with LLM prompt chains and sandbox code evaluation.",
        "Engineered multi-dimensional scoring evaluating problem-solving speed, code cyclomatic complexity, and communication clarity.",
        "Designed real-time recruiter dashboard displaying comparative percentile rankings and automated candidate summaries."
      ],
      tags: ["Python", "FastAPI", "React", "Gemini LLM API", "Docker", "PostgreSQL"],
      metrics: {"Role": "B.Tech Capstone", "Accuracy": "Automated Rubrics", "Efficiency": "85% Screening Speedup"},
      github: "https://github.com/krishnaaidev/aihire2",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "depression-detection",
      title: "Multimodal Depression Detection System",
      category: "ml",
      categoryLabel: "Deep Learning & Multimodal NLP",
      date: "2025 • Research",
      badge: "Flagship Research",
      shortDesc:
          "Clinician-inspired multimodal AI screening combining BERT (text), Wav2Vec 2.0 (audio), and ResNet-LSTM (video/facial cues) with real-time emotion tracking.",
      fullDesc:
          "An advanced diagnostic screening pipeline leveraging multimodal deep learning to fuse acoustic, linguistic, and visual signals trained on the clinical USC DAIC-WOZ dataset.",
      highlights: [
        "Fuses acoustic signals (Wav2Vec 2.0), linguistic syntax (BERT), and visual micro-expressions (ResNet-LSTM).",
        "Trained on clinical USC DAIC-WOZ interview corpus with multi-head attention late fusion.",
        "Attained robust cross-validation F1-score with interpretable diagnostic attention weights."
      ],
      tags: ["PyTorch", "BERT", "Wav2Vec 2.0", "ResNet", "Late Fusion", "Python"],
      metrics: {"Modality": "Tri-Modal", "Dataset": "USC DAIC-WOZ", "Architecture": "Late Fusion Attention"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "superstore-bi",
      title: "Superstore Sales & Profit BI Intelligence Suite",
      category: "bi",
      categoryLabel: "Enterprise BI & Data Analytics",
      date: "Jun 2025 – Sep 2025 • EduTech Solutions",
      badge: "Industry Internship Project",
      shortDesc:
          "Production 4-page Power BI executive intelligence suite featuring advanced DAX time-intelligence, profit-discount sensitivity models, and automated Python EDA.",
      fullDesc:
          "Engineered during the Machine Learning internship at EduTech Solutions to transform 50,000+ transaction records into predictive executive intelligence.",
      highlights: [
        "Engineered 4-page Power BI dashboard with 25+ custom DAX measures.",
        "Conducted automated Python EDA pipeline detecting chronic loss-making subcategories.",
        "Formulated dynamic discount caps reversing localized margin leaks."
      ],
      tags: ["Power BI", "DAX", "Python", "Pandas", "Data Modeling", "Business Intelligence"],
      metrics: {"Records": "50,000+", "DAX Measures": "25+", "Pages": "4-Page Suite"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "plant-disease",
      title: "Plant Disease Recognition System (PlantVillage)",
      category: "cv",
      categoryLabel: "Computer Vision & Deep Learning",
      date: "2025",
      badge: "Computer Vision",
      shortDesc:
          "Deep Convolutional Neural Network trained on 54,000+ PlantVillage images across 38 crop-disease pairs attaining ~95% classification accuracy with Flask web deployment.",
      fullDesc:
          "Empowering agricultural stakeholders with real-time leaf pathology diagnostics from raw smartphone photography.",
      highlights: [
        "Custom CNN with data augmentation and transfer learning across 38 plant disease classes.",
        "Achieved ~95% test classification accuracy on 54,000+ benchmark images.",
        "Deployed via lightweight Flask REST API with instant diagnostic output."
      ],
      tags: ["TensorFlow", "Keras", "CNN", "OpenCV", "Flask", "Python"],
      metrics: {"Images": "54,000+", "Classes": "38 Crop Classes", "Accuracy": "~95%"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "air-pollution",
      title: "Air Pollution Health Risk Analysis",
      category: "ml",
      categoryLabel: "Epidemiological Data Science",
      date: "2025",
      badge: "Data Science",
      shortDesc:
          "Statistical and machine learning regression analysis correlating atmospheric pollutants (PM2.5, PM10, NOx) with cardiorespiratory morbidity.",
      fullDesc:
          "Epidemiological time-series modeling identifying non-linear threshold limits for metropolitan health advisories.",
      highlights: [
        "Analyzed multi-year environmental pollutant time-series records.",
        "Employed Scikit-Learn regression models isolating statistically significant risk multipliers.",
        "Produced automated visual reports of air quality index trends."
      ],
      tags: ["Python", "Scikit-Learn", "Statsmodels", "Seaborn", "Time-Series"],
      metrics: {"Pollutants": "PM2.5, PM10, NOx", "Modeling": "Non-linear Regression", "Insights": "Health Risk Indices"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "career-guidance",
      title: "Career Guidance AI Recommendation Engine",
      category: "ml",
      categoryLabel: "Predictive Analytics",
      date: "2024",
      badge: "Machine Learning",
      shortDesc:
          "Predictive machine learning model providing personalized career path recommendations based on academic records, psychometrics, and technical assessments.",
      fullDesc:
          "Built using ensemble decision trees to offer objective career mapping for undergraduate students.",
      highlights: [
        "Engineered feature normalization pipeline for mixed categorical and numerical student metrics.",
        "Trained Random Forest and Gradient Boosting classifiers.",
        "Interactive consultation interface with skill-gap recommendations."
      ],
      tags: ["Python", "Scikit-Learn", "Ensemble Learning", "Streamlit"],
      metrics: {"Features": "Multi-Factor", "Engine": "Gradient Boosted Trees", "Platform": "Interactive AI"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
    ProjectItem(
      id: "robo-car",
      title: "Dual Wired & Bluetooth Autonomous Robotic Car",
      category: "iot",
      categoryLabel: "Robotics & Embedded Systems",
      date: "2024",
      badge: "Hardware & IoT",
      shortDesc:
          "Dual-mode robotic vehicle engineered with Arduino Uno, HC-05 Bluetooth transceiver, and L298N dual H-bridge motor driver with Android serial control.",
      fullDesc:
          "Hands-on embedded engineering project bridging microcontroller firmware with wireless mobile telemetry.",
      highlights: [
        "Designed hardware schematic with Arduino Uno, L298N driver, and HC-05 Bluetooth.",
        "Authored C/C++ firmware with PWM speed modulation and fail-safe interrupt routines.",
        "Paired with custom Android Bluetooth serial controller application."
      ],
      tags: ["Arduino Uno", "C/C++", "HC-05 Bluetooth", "L298N", "Hardware", "IoT"],
      metrics: {"Microcontroller": "Arduino Uno", "Wireless": "HC-05 Bluetooth", "Driver": "L298N H-Bridge"},
      github: "https://github.com/krishnaaidev",
      demo: "",
      image: "assets/images/profile.jpg",
    ),
  ];

  // Certifications
  static const List<CertificateItem> certificates = [
    CertificateItem(
      title: "RedRob Standardized Technical Assessment",
      issuer: "RedRob Global Benchmark",
      score: "763 / 1000",
      id: "RR-763-DISTINCTION",
      date: "2026",
      badge: "Distinction Score",
      description: "Standardized evaluation in core Computer Science, algorithmic problem solving, software design, and analytical aptitude.",
    ),
    CertificateItem(
      title: "AWS Cloud Practitioner & Architecture",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "100%",
      id: "NASSCOM-AWS-100",
      date: "2026",
      badge: "Perfect Score (Gold)",
      description: "Cloud computing fundamentals, VPC architecture, IAM security, EC2, S3 storage, and serverless architectures.",
    ),
    CertificateItem(
      title: "Generative AI 101: LLMs & Applications",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "100%",
      id: "NASSCOM-GENAI-100",
      date: "2026",
      badge: "Perfect Score (Gold)",
      description: "Transformer architectures, prompt engineering, attention mechanisms, RAG pipelines, and enterprise generative AI integration.",
    ),
    CertificateItem(
      title: "Data Literacy & Analytical Foundations",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "98.00%",
      id: "NASSCOM-DL-98",
      date: "2026",
      badge: "Gold Certificate",
      description: "Data-informed decision making, statistical inference, exploratory data analysis, and visual storytelling.",
    ),
    CertificateItem(
      title: "Big Data Analytics & Ecosystems",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "96.00%",
      id: "NASSCOM-BDA-96",
      date: "2026",
      badge: "Gold Certificate",
      description: "Distributed data computing, MapReduce, Hadoop ecosystem, and scalable analytics architectures.",
    ),
    CertificateItem(
      title: "Enterprise AI & Business Transformation",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "96.00%",
      id: "NASSCOM-EAI-96",
      date: "2026",
      badge: "Gold Certificate",
      description: "Strategic AI adoption, ethical AI governance, ROI calculation, and ML operationalization (MLOps).",
    ),
    CertificateItem(
      title: "Python for Data Science & ML",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "93.00%",
      id: "NASSCOM-PY-93",
      date: "2025",
      badge: "Gold Certificate",
      description: "Advanced Python, NumPy, Pandas, Scikit-Learn, data wrangling, and statistical predictive modeling.",
    ),
    CertificateItem(
      title: "Deep Learning & Neural Networks",
      issuer: "NASSCOM FutureSkills Prime • Govt. of India",
      score: "91.25%",
      id: "NASSCOM-DLNN-91",
      date: "2025",
      badge: "Gold Certificate",
      description: "Feedforward networks, backpropagation, CNNs, RNNs, optimization algorithms, and transfer learning in PyTorch/TensorFlow.",
    ),
  ];

  // Work Experience
  static const List<ExperienceItem> experiences = [
    ExperienceItem(
      role: "Machine Learning Intern & Trainee",
      company: "EduTech Solutions",
      period: "Jun 2025 – Sep 2025",
      location: "India (Hybrid)",
      type: "Internship",
      points: [
        "Architected enterprise Power BI dashboards with 25+ DAX measures evaluating multi-region sales, margin leakage, and customer segmentation.",
        "Built automated Python data cleaning & EDA pipelines processing 50,000+ retail transactions with Pandas and Seaborn.",
        "Conducted profit-discount sensitivity analysis isolating chronically loss-making product subcategories and formulating discount ceiling caps.",
        "Delivered technical presentations to senior management recommending data-driven pricing strategies."
      ],
      tech: ["Python", "Power BI", "DAX", "Pandas", "Scikit-Learn", "Data Modeling"],
    ),
    ExperienceItem(
      role: "Data Science Intern",
      company: "Averixis Solutions",
      period: "Oct 2025 – Jan 2026",
      location: "India (Remote)",
      type: "Internship",
      points: [
        "Constructed predictive machine learning regression and classification models using Scikit-Learn for business performance forecasting.",
        "Implemented rigorous feature engineering pipelines including categorical encoding, outlier clipping, and collinearity reduction.",
        "Designed diagnostic data visualization reports translating raw metric variance into actionable operational recommendations.",
        "Collaborated with cross-functional engineering teams to validate model stability and deploy containerized inference scripts."
      ],
      tech: ["Python", "NumPy", "Scikit-Learn", "Matplotlib", "SQL", "Git"],
    ),
    ExperienceItem(
      role: "Google Student Ambassador",
      company: "Google",
      period: "Sep 2025 – Present",
      location: "CTIEMT, Jalandhar",
      type: "Leadership",
      points: [
        "Serving as official university liaison connecting students with Google Developer technologies, AI tools, and technical resources.",
        "Organized hands-on technical workshops on Gemini API, Cloud Fundamentals, and modern software development for 200+ students.",
        "Spearheaded student study groups for Google Cloud skill badges and collaborative hackathons."
      ],
      tech: ["Google Cloud", "Gemini API", "Community Leadership", "Public Speaking"],
    ),
    ExperienceItem(
      role: "Core Member",
      company: "Google Developer Groups (GDG)",
      period: "Sep 2026 – Present",
      location: "Jalandhar Chapter",
      type: "Community",
      points: [
        "Active core member participating in tech symposiums, developer showcases, and open-source hackathons.",
        "Facilitating peer mentoring in Machine Learning, Flutter mobile app development, and competitive programming.",
        "Collaborating on community tech initiatives promoting AI literacy across technical colleges."
      ],
      tech: ["Flutter", "Machine Learning", "Open Source", "Developer Advocacy"],
    ),
  ];

  // Photography Gallery (from instagram.com/bruh.vision)
  static const List<String> photographyImages = [
    "assets/images/photography/photo1.jpg",
    "assets/images/photography/photo8.jpg",
    "assets/images/photography/photo2.png",
    "assets/images/photography/photo3.png",
    "assets/images/photography/photo4.png",
    "assets/images/photography/photo5.png",
    "assets/images/photography/photo6.png",
  ];

  // Technical Skills
  static const Map<String, List<String>> skills = {
    "Programming Languages": ["Dart", "Python", "SQL", "C / C++", "HTML / CSS / JavaScript"],
    "Mobile & Cross-Platform": ["Flutter", "Material 3", "Provider", "REST APIs", "SQLite", "Responsive Layouts"],
    "Machine Learning & AI": ["PyTorch", "TensorFlow", "Scikit-Learn", "BERT", "Wav2Vec 2.0", "CNNs", "Gemini API", "Prompt Engineering"],
    "Data Science & Analytics": ["Pandas", "NumPy", "Power BI", "DAX", "Matplotlib", "Seaborn", "Statsmodels", "EDA"],
    "Tools & Platforms": ["Git / GitHub", "Docker", "VS Code", "Android Studio", "Linux / macOS", "Arduino Uno"],
  };
}
