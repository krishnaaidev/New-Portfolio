import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';

class ResumeScreen extends StatelessWidget {
  const ResumeScreen({super.key});

  Future<void> _launchEmail() async {
    final uri = Uri.parse("mailto:${PortfolioData.emailInstitutional}?subject=Opportunity%20Discussion%20-%20Suman%20Krishna");
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: Responsive.pagePadding(context),
      child: Center(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: Responsive.contentWidth(context)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header with Download Action
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Curriculum Vitae",
                        style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.w900,
                          color: Colors.white,
                          letterSpacing: -0.5,
                        ),
                      ),
                      SizedBox(height: 6),
                      Text(
                        "Verified academic credentials, internships, project architectures, and skills.",
                        style: TextStyle(fontSize: 14, color: AppTheme.textSecondary),
                      ),
                    ],
                  ),
                  ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppTheme.primary,
                      foregroundColor: AppTheme.background,
                      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                    ),
                    onPressed: _launchEmail,
                    icon: const Icon(Icons.send, size: 16),
                    label: const Text("Request Resume PDF", style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
              const SizedBox(height: 32),

              // Education Section
              _buildSectionTitle("Education", Icons.school),
              const SizedBox(height: 12),
              _buildEducationCard(),
              const SizedBox(height: 32),

              // Technical Skills Breakdown
              _buildSectionTitle("Technical Skills & Frameworks", Icons.code),
              const SizedBox(height: 12),
              _buildSkillsCard(),
              const SizedBox(height: 32),

              // Capstone & Production Projects Summary
              _buildSectionTitle("Flagship Systems on Resume", Icons.rocket_launch),
              const SizedBox(height: 12),
              _buildResumeProjectTile(
                title: "CT Group KRA & KPI Performance Management System",
                tech: "Flutter, Dart, Material 3, Cross-Platform Mobile & Web, SQLite, REST API, Excel/PDF Export",
                bullets: [
                  "Architected and developed a production cross-platform appraisal platform with Flutter & Dart for CT Group of Institutions, tracking academic, research, and administrative performance across a strict 1,000-Mark framework.",
                  "Implemented 3-tier Role-Based Access Control (RBAC) governance for Faculty self-appraisal, HOD departmental review, and HOI executive sanction with JWT security.",
                  "Engineered dynamic scoring engine with real-time mark calculation, documentation attachment verification, and transparent audit logging.",
                  "Built automated one-click Excel & PDF export enabling instant generation of formatted institutional accreditation spreadsheets.",
                ],
              ),
              const SizedBox(height: 16),
              _buildResumeProjectTile(
                title: "AIHire — Autonomous AI Recruitment & Candidate Evaluation Platform",
                tech: "Python, FastAPI, React, Gemini LLM API, Docker, PostgreSQL",
                bullets: [
                  "B.Tech Capstone Project: Designed and deployed an end-to-end autonomous technical screening platform evaluating code and problem-solving.",
                  "Constructed multi-stage LLM prompt evaluation chains with sandboxed code compilation.",
                  "Automated objective rubric assessment reducing technical screening turnarounds by over 80%.",
                ],
              ),
              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title, IconData icon) {
    return Row(
      children: [
        Icon(icon, size: 20, color: AppTheme.primary),
        const SizedBox(width: 10),
        Text(
          title,
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.white),
        ),
      ],
    );
  }

  Widget _buildEducationCard() {
    return Container(
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppTheme.border),
      ),
      child: const Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CircleAvatar(
            backgroundColor: Color(0xFF1E293B),
            child: Icon(Icons.school, color: AppTheme.primary, size: 20),
          ),
          SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Bachelor of Technology — Computer Science & Engineering",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                ),
                SizedBox(height: 4),
                Text(
                  "CT Institute of Engineering, Management & Technology (CTIEMT), Jalandhar, Punjab",
                  style: TextStyle(fontSize: 13, color: AppTheme.primary, fontWeight: FontWeight.w600),
                ),
                SizedBox(height: 6),
                Text(
                  "2023 – 2027 • Current Cumulative CGPA: 8.0 / 10.0",
                  style: TextStyle(fontSize: 12.5, color: AppTheme.textSecondary),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSkillsCard() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppTheme.border),
      ),
      child: Column(
        children: PortfolioData.skills.entries.map((entry) {
          return Padding(
            padding: const EdgeInsets.only(bottom: 14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  width: 180,
                  child: Text(
                    entry.key,
                    style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white),
                  ),
                ),
                Expanded(
                  child: Wrap(
                    spacing: 8,
                    runSpacing: 6,
                    children: entry.value.map((skill) {
                      return Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppTheme.surfaceLight,
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: AppTheme.primary.withValues(alpha: 0.2)),
                        ),
                        child: Text(
                          skill,
                          style: const TextStyle(fontSize: 11.5, color: AppTheme.textSecondary),
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          );
        }).toList(),
      ),
    );
  }

  Widget _buildResumeProjectTile({
    required String title,
    required String tech,
    required List<String> bullets,
  }) {
    return Container(
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: AppTheme.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
          ),
          const SizedBox(height: 4),
          Text(
            "Technologies: $tech",
            style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppTheme.primary),
          ),
          const SizedBox(height: 12),
          ...bullets.map((b) => Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Padding(
                      padding: EdgeInsets.only(top: 4),
                      child: Icon(Icons.arrow_right, size: 16, color: AppTheme.primary),
                    ),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Text(
                        b,
                        style: const TextStyle(fontSize: 13, height: 1.45, color: AppTheme.textPrimary),
                      ),
                    ),
                  ],
                ),
              )),
        ],
      ),
    );
  }
}
