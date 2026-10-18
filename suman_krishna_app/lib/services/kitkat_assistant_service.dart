import 'package:flutter/foundation.dart';
import 'package:flutter_tts/flutter_tts.dart';

class ChatMessage {
  final String text;
  final bool isUser;
  final DateTime timestamp;

  ChatMessage({
    required this.text,
    required this.isUser,
    DateTime? timestamp,
  }) : timestamp = timestamp ?? DateTime.now();
}

class KitkatAssistantService {
  static final KitkatAssistantService _instance = KitkatAssistantService._internal();
  factory KitkatAssistantService() => _instance;
  KitkatAssistantService._internal();

  final FlutterTts _tts = FlutterTts();
  bool _isSpeaking = false;
  bool _isVoiceEnabled = true;

  bool get isSpeaking => _isSpeaking;
  bool get isVoiceEnabled => _isVoiceEnabled;

  static const String introSpeech =
      "Hello! I am Kitkat, Suman Krishna's AI voice assistant. Feel free to ask me anything about Suman's projects, Flutter apps, machine learning skills, certifications, or experience. How can I help you today?";

  static const String introDisplay =
      "👋 Hello! I'm **KITKAT**, Suman Krishna's AI voice assistant!\n\nI can answer any questions about Suman's software engineering projects (like the **CT Group KRA & KPI Performance Management System** in Flutter, and **AIHire**), his **763 RedRob score**, 7x NASSCOM Gold Certifications, or photography.\n\n*Tap a topic below or type your question!*";

  Future<void> init() async {
    try {
      await _tts.setLanguage("en-IN");
      await _tts.setPitch(1.08); // Soft female pitch
      await _tts.setSpeechRate(0.5); // Natural articulate rate
      await _tts.setVolume(1.0);

      _tts.setStartHandler(() {
        _isSpeaking = true;
      });

      _tts.setCompletionHandler(() {
        _isSpeaking = false;
      });

      _tts.setErrorHandler((msg) {
        _isSpeaking = false;
        debugPrint("Kitkat TTS error: $msg");
      });
    } catch (e) {
      debugPrint("Kitkat TTS init error: $e");
    }
  }

  void toggleVoice() {
    _isVoiceEnabled = !_isVoiceEnabled;
    if (!_isVoiceEnabled) {
      stop();
    }
  }

  Future<void> speak(String text) async {
    if (!_isVoiceEnabled) return;
    try {
      await stop();
      // Clean markdown and symbols for speech
      final cleanText = text
          .replaceAll(RegExp(r'\*\*|\*|#|`|~|\[|\]'), '')
          .replaceAll(RegExp(r'https?:\/\/\S+'), 'link')
          .replaceAll('&', 'and')
          .replaceAll(RegExp(r'\bKITKAT\b', caseSensitive: false), 'Kitkat')
          .replaceAll('763 / 1000', '763 out of 1000')
          .replaceAll('8.0 / 10.0', '8.0 out of 10')
          .trim();

      if (cleanText.isNotEmpty) {
        await _tts.speak(cleanText);
      }
    } catch (e) {
      debugPrint("TTS speak error: $e");
    }
  }

  Future<void> stop() async {
    try {
      await _tts.stop();
      _isSpeaking = false;
    } catch (e) {
      debugPrint("TTS stop error: $e");
    }
  }

  String processQuery(String userQuestion) {
    final clean = userQuestion.toLowerCase().replaceAll(RegExp(r"[^\w\s]"), " ").trim();

    // 1. KITKAT Identity & Intro
    if (RegExp(r"\b(who are you|your name|what is your name|who is kitkat|who is kikat|kitkat|intro|introduce yourself|apna intro|intro do|intro de|tum kaun ho|aap kaun ho)\b").hasMatch(clean)) {
      return "Hello! I am KITKAT, Suman Krishna's AI voice assistant. I am here to guide you through Suman's portfolio and tell you all about his Flutter apps, machine learning systems, 763 RedRob score, 7x NASSCOM Gold certifications, and background. What would you like to know?";
    }

    // 2. Who is Suman Krishna
    if (RegExp(r"\b(who is suman|about suman|tell me about suman|suman krishna|who is krishna|suman kaun hai|bio|profile)\b").hasMatch(clean)) {
      return "Suman Krishna is a final-year Computer Science undergraduate at CT Institute of Engineering, Management & Technology with an 8.0 CGPA. He is an official Google Student Ambassador, Google Developer Groups member, and an engineer specializing in Machine Learning, Flutter mobile development, and data analytics.";
    }

    // 3. CT Group App (Flutter)
    if (RegExp(r"\b(ctg|faculty app|kra|kpi|flutter|flutter app|appraisal|ct group|ctgroup|performance management)\b").hasMatch(clean)) {
      return "CT Group KRA & KPI Performance Management System is a cross-platform institutional appraisal application engineered with Flutter & Dart for CT Group of Institutions. It evaluates faculty, heads of department, and heads of institutes across a 1,000-mark framework with 3-tier role-based access control (RBAC), SQLite offline sync, REST APIs, and automated Excel and PDF report generation.";
    }

    // 4. AIHire (Capstone)
    if (RegExp(r"\b(aihire|ai hire|capstone|interview platform|recruitment|b\.tech project)\b").hasMatch(clean)) {
      return "AIHire is Suman's B.Tech Capstone Project. It is an autonomous AI recruitment and candidate evaluation engine powered by LLMs (Gemini API), FastAPI, and React. It features automated rubric scoring, sandbox code execution, and real-time candidate ranking.";
    }

    // 5. RedRob Assessment Score
    if (RegExp(r"\b(redrob|test score|763|exam score|marks|benchmark|distinction)\b").hasMatch(clean)) {
      return "Suman scored 763 / 1000 on the standardized RedRob Technical Assessment, which places him in the top distinction benchmark for algorithmic problem solving, software design, and engineering aptitude.";
    }

    // 6. NASSCOM Certifications
    if (RegExp(r"\b(certificate|certifications|nasscom|gold|aws|genai|deep learning)\b").hasMatch(clean)) {
      return "Suman holds 7 Government of India-approved NASSCOM FutureSkills Prime Gold Certifications, including perfect 100% scores in both AWS Cloud Computing and Generative AI 101, 98% in Data Literacy, 96% in Big Data, and 96% in Enterprise AI.";
    }

    // 7. Education & CGPA
    if (RegExp(r"\b(education|cgpa|college|university|ctiemt|degree|b\.tech|gpa|marks)\b").hasMatch(clean)) {
      return "Suman is pursuing his Bachelor of Technology in Computer Science & Engineering (2023–2027) at CT Institute of Engineering, Management & Technology (CTIEMT), Jalandhar, Punjab, holding a cumulative CGPA of 8.0 out of 10.0.";
    }

    // 8. Work Experience & Internships
    if (RegExp(r"\b(internship|experience|work|edutech|averixis|company|jobs)\b").hasMatch(clean)) {
      return "Suman has completed two industry internships: Machine Learning Intern & Trainee at EduTech Solutions (Jun 2025 – Sep 2025), building Power BI suites and Python EDA for 50,000+ records, and Data Science Intern at Averixis Solutions (Oct 2025 – Jan 2026), developing predictive ML models.";
    }

    // 9. Google Ambassador & GDG
    if (RegExp(r"\b(google|ambassador|gdg|developer group|community|lead)\b").hasMatch(clean)) {
      return "Suman serves as an official Google Student Ambassador since September 2025 and as an active core member of Google Developer Groups (GDG) since September 2026, leading workshops on Gemini API and Cloud fundamentals.";
    }

    // 10. Chess Rating
    if (RegExp(r"\b(chess|rating|elo|750)\b").hasMatch(clean)) {
      return "Suman holds an active online chess rating of 750+, regularly playing tactical and positional chess games.";
    }

    // 11. Photography & Instagram
    if (RegExp(r"\b(photo|photography|camera|videography|instagram|insta|bruh\.vision|krishna\.ai\.dev)\b").hasMatch(clean)) {
      return "Suman is a passionate photographer and visual storyteller! You can view his creative cinematography and photography portfolio on Instagram at @bruh.vision, and his personal developer account at @krishna.ai.dev.";
    }

    // 12. Contact & Hire
    if (RegExp(r"\b(contact|email|phone|hire|call|reach|message|portfolio|linkedin|github)\b").hasMatch(clean)) {
      return "You can contact Suman directly via his institutional email at suman2301275@ctiemt.ctgroup.in, personal email at krishna.techx.31@gmail.com, or phone at +91 9798442880. You can also explore his code on GitHub at krishnaaidev and connect on LinkedIn.";
    }

    // Default Fallback
    return "Suman Krishna is a Machine Learning & Flutter engineer with an 8.0 CGPA, Google Student Ambassador, 763 RedRob score, and 7x NASSCOM Gold Certifications. You can ask me about his CT Group Flutter app, AIHire, internships, certifications, or photography!";
  }
}
