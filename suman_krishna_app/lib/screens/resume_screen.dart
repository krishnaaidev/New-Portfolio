import 'package:flutter/material.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';
import '../utils/url_helper.dart';

class ResumeScreen extends StatelessWidget {
  const ResumeScreen({super.key});

  static const String resumePdfUrl =
      "https://github.com/krishnaaidev/New-Portfolio/raw/main/assets/docs/Suman_Krishna_Resume.pdf";

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
              // Header with Actions
              Wrap(
                alignment: WrapAlignment.spaceBetween,
                crossAxisAlignment: WrapCrossAlignment.center,
                spacing: 16,
                runSpacing: 16,
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
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      ElevatedButton.icon(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primary,
                          foregroundColor: AppTheme.background,
                          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                        ),
                        onPressed: () => UrlHelper.launchURL(context, resumePdfUrl),
                        icon: const Icon(Icons.picture_as_pdf, size: 16),
                        label: const Text("View PDF", style: TextStyle(fontWeight: FontWeight.bold)),
                      ),
                      const SizedBox(width: 10),
                      OutlinedButton.icon(
                        style: OutlinedButton.styleFrom(
                          foregroundColor: AppTheme.primary,
                          side: const BorderSide(color: AppTheme.primary),
                          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                        ),
                        onPressed: () => UrlHelper.launchEmail(
                          context,
                          email: PortfolioData.emailInstitutional,
                          subject: "Opportunity Discussion - Suman Krishna",
                          body: "Hi Suman, I would like to request an updated copy of your resume.",
                        ),
                        icon: const Icon(Icons.mail_outline, size: 16),
                        label: const Text("Email Resume", style: TextStyle(fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 32),

              // Education Section
              _buildSectionTitle("Formal Education & Academic Foundation", Icons.school),
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
    return Column(
      children: PortfolioData.educationList.map((edu) {
        final isBTech = edu.degree.toLowerCase().contains("b.tech");
        return Container(
          margin: const EdgeInsets.only(bottom: 12),
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: AppTheme.surfaceCard,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: isBTech ? AppTheme.primary.withValues(alpha: 0.35) : AppTheme.border),
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CircleAvatar(
                backgroundColor: AppTheme.surfaceLight,
                child: Icon(
                  isBTech ? Icons.school : Icons.account_balance,
                  color: isBTech ? AppTheme.primary : AppTheme.secondary,
                  size: 20,
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: Text(
                            edu.degree,
                            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                          decoration: BoxDecoration(
                            color: AppTheme.emerald.withValues(alpha: 0.15),
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(color: AppTheme.emerald.withValues(alpha: 0.3)),
                          ),
                          child: Text(
                            edu.score,
                            style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: AppTheme.emerald),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4),
                    Text(
                      edu.institution,
                      style: const TextStyle(fontSize: 13.5, color: AppTheme.primary, fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      "${edu.boardOrAffiliation} • ${edu.location} (${edu.period})",
                      style: const TextStyle(fontSize: 12, color: AppTheme.textSecondary),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      }).toList(),
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
