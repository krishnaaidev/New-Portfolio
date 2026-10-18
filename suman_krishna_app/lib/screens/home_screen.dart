import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';
import '../widgets/kitkat_assistant_sheet.dart';

class HomeScreen extends StatelessWidget {
  final Function(int) onNavigate;

  const HomeScreen({super.key, required this.onNavigate});

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDesktop = Responsive.isDesktop(context);
    final isTablet = Responsive.isTablet(context);

    return SingleChildScrollView(
      padding: Responsive.pagePadding(context),
      child: Center(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: Responsive.contentWidth(context)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Hero Section
              _buildHero(context, isDesktop, isTablet),
              const SizedBox(height: 36),

              // Key Stats Grid
              _buildStatsGrid(context),
              const SizedBox(height: 48),

              // Featured Systems Section Header
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Featured Engineering Systems",
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.w800,
                            color: Colors.white,
                          ),
                        ),
                        SizedBox(height: 4),
                        Text(
                          "Production cross-platform Flutter applications & deep learning architectures",
                          style: TextStyle(fontSize: 13, color: AppTheme.textSecondary),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12),
                  TextButton.icon(
                    onPressed: () => onNavigate(3), // Navigate to projects
                    icon: const Text("View All (8)"),
                    label: const Icon(Icons.arrow_forward, size: 16),
                    style: TextButton.styleFrom(foregroundColor: AppTheme.primary),
                  ),
                ],
              ),
              const SizedBox(height: 20),

              // Featured Project 1: CT Group KRA & KPI App (Flutter)
              _buildFeaturedCard(
                context: context,
                title: "CT Group KRA & KPI Performance Management System",
                badge: "Institutional System",
                tech: "Flutter, Dart, Material 3, RBAC, SQLite, Excel/PDF Export",
                desc:
                    "Cross-platform performance evaluation system engineered using Flutter & Dart for CT Group of Institutions. Evaluates faculty, HODs, and HOIs across a 1,000-mark framework with 3-tier Role-Based Access Control, offline sync, and automated one-click accreditation reporting.",
                accentColor: AppTheme.primary,
                iconWidget: const FaIcon(FontAwesomeIcons.mobileScreen, color: AppTheme.primary, size: 18),
                github: "https://github.com/krishnaaidev/CTGroup-KRA-KPI",
              ),
              const SizedBox(height: 20),

              // Featured Project 2: AIHire Capstone
              _buildFeaturedCard(
                context: context,
                title: "AIHire — Autonomous AI Recruitment & Candidate Evaluation",
                badge: "B.Tech Capstone Project",
                tech: "Python, FastAPI, React, Gemini LLM API, Docker, PostgreSQL",
                desc:
                    "Autonomous candidate screening engine utilizing custom LLM prompt pipelines, real-time code evaluation, semantic rubric scoring, and objective recruiter analytics to eliminate human bias.",
                accentColor: AppTheme.accent,
                iconWidget: const FaIcon(FontAwesomeIcons.brain, color: AppTheme.accent, size: 18),
                github: "https://github.com/krishnaaidev/aihire2",
              ),
              const SizedBox(height: 48),

              // Quick Contact & Socials Bar
              _buildBottomBanner(context),
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHero(BuildContext context, bool isDesktop, bool isTablet) {
    return Container(
      padding: EdgeInsets.all(isDesktop ? 36 : 22),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            AppTheme.surfaceCard,
            AppTheme.surfaceLight.withValues(alpha: 0.8),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(28),
        border: Border.all(color: AppTheme.border, width: 1.5),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.4),
            blurRadius: 24,
            offset: const Offset(0, 8),
          )
        ],
      ),
      child: isDesktop
          ? Row(
              children: [
                Expanded(child: _buildHeroText(context)),
                const SizedBox(width: 36),
                _buildCoverIcon(180),
              ],
            )
          : Column(
              children: [
                _buildCoverIcon(140),
                const SizedBox(height: 24),
                _buildHeroText(context),
              ],
            ),
    );
  }

  Widget _buildCoverIcon(double size) {
    return Stack(
      alignment: Alignment.center,
      children: [
        // Glowing halo
        Container(
          width: size + 20,
          height: size + 20,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: RadialGradient(
              colors: [
                AppTheme.primary.withValues(alpha: 0.4),
                Colors.transparent,
              ],
            ),
          ),
        ),
        // Image Circle (Cover Icon)
        Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            border: Border.all(color: AppTheme.primary, width: 3),
            boxShadow: [
              BoxShadow(
                color: AppTheme.primary.withValues(alpha: 0.35),
                blurRadius: 16,
                spreadRadius: 2,
              )
            ],
            image: const DecorationImage(
              image: AssetImage("assets/images/profile.jpg"),
              fit: BoxFit.cover,
            ),
          ),
        ),
        // Online status dot
        Positioned(
          bottom: 10,
          right: 10,
          child: Container(
            width: 22,
            height: 22,
            decoration: BoxDecoration(
              color: AppTheme.emerald,
              shape: BoxShape.circle,
              border: Border.all(color: AppTheme.background, width: 3),
              boxShadow: const [
                BoxShadow(
                  color: AppTheme.emerald,
                  blurRadius: 8,
                )
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildHeroText(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Badges row
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            _pillBadge("Google Student Ambassador", AppTheme.amber, const FaIcon(FontAwesomeIcons.google, size: 11, color: AppTheme.amber)),
            _pillBadge("GDG Member", AppTheme.secondary, const FaIcon(FontAwesomeIcons.users, size: 11, color: AppTheme.secondary)),
            _pillBadge("RedRob 763/1000", AppTheme.primary, const FaIcon(FontAwesomeIcons.bullseye, size: 11, color: AppTheme.primary)),
          ],
        ),
        const SizedBox(height: 16),
        const Text(
          "Suman Krishna",
          style: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.w900,
            color: Colors.white,
            letterSpacing: -0.5,
          ),
        ),
        const SizedBox(height: 4),
        const Text(
          "Machine Learning & Flutter Engineer",
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w700,
            color: AppTheme.primary,
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          PortfolioData.summary,
          style: TextStyle(
            fontSize: 14,
            height: 1.55,
            color: AppTheme.textSecondary,
          ),
        ),
        const SizedBox(height: 22),
        // CTA Buttons
        Wrap(
          spacing: 12,
          runSpacing: 10,
          children: [
            ElevatedButton.icon(
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.primary,
                foregroundColor: AppTheme.background,
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                elevation: 4,
              ),
              onPressed: () => onNavigate(3), // Projects
              icon: const Icon(Icons.rocket_launch, size: 16),
              label: const Text("View Projects", style: TextStyle(fontWeight: FontWeight.w700)),
            ),
            OutlinedButton.icon(
              style: OutlinedButton.styleFrom(
                foregroundColor: Colors.white,
                side: const BorderSide(color: AppTheme.primary),
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
              ),
              onPressed: () => KitkatAssistantSheet.show(context),
              icon: const FaIcon(FontAwesomeIcons.wandMagicSparkles, size: 14, color: AppTheme.primary),
              label: const Text("Chat with KITKAT", style: TextStyle(fontWeight: FontWeight.w600)),
            ),
            IconButton.filledTonal(
              icon: const FaIcon(FontAwesomeIcons.linkedin, size: 18),
              onPressed: () => _launchUrl(PortfolioData.linkedin),
            ),
            IconButton.filledTonal(
              icon: const FaIcon(FontAwesomeIcons.github, size: 18),
              onPressed: () => _launchUrl(PortfolioData.github),
            ),
            IconButton.filledTonal(
              icon: const FaIcon(FontAwesomeIcons.instagram, size: 18, color: Color(0xFFE1306C)),
              tooltip: "@bruh.vision",
              onPressed: () => _launchUrl(PortfolioData.instagramPhoto),
            ),
          ],
        ),
      ],
    );
  }

  Widget _pillBadge(String text, Color color, Widget icon) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color.withValues(alpha: 0.35)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          icon,
          const SizedBox(width: 6),
          Text(
            text,
            style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: color),
          ),
        ],
      ),
    );
  }

  Widget _buildStatsGrid(BuildContext context) {
    final isDesktop = Responsive.isDesktop(context);
    final count = isDesktop ? 4 : (Responsive.isTablet(context) ? 2 : 2);

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: PortfolioData.stats.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: count,
        crossAxisSpacing: 14,
        mainAxisSpacing: 14,
        childAspectRatio: isDesktop ? 1.7 : 1.5,
      ),
      itemBuilder: (context, index) {
        final stat = PortfolioData.stats[index];
        return Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: AppTheme.surfaceCard,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: AppTheme.border),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                stat["value"]!,
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                  color: AppTheme.primary,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                stat["label"]!,
                style: const TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
              Text(
                stat["sub"]!,
                style: const TextStyle(
                  fontSize: 11,
                  color: AppTheme.textSecondary,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildFeaturedCard({
    required BuildContext context,
    required String title,
    required String badge,
    required String tech,
    required String desc,
    required Color accentColor,
    required Widget iconWidget,
    required String github,
  }) {
    return Container(
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: accentColor.withValues(alpha: 0.35)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  color: accentColor.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Center(
                  child: iconWidget,
                ),
              ),
              const SizedBox(width: 12),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: accentColor.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: accentColor.withValues(alpha: 0.4)),
                ),
                child: Text(
                  badge,
                  style: TextStyle(fontSize: 11, color: accentColor, fontWeight: FontWeight.bold),
                ),
              ),
              const Spacer(),
              if (github.isNotEmpty)
                IconButton(
                  icon: const FaIcon(FontAwesomeIcons.github, size: 18, color: Colors.white),
                  tooltip: "View GitHub Repo",
                  onPressed: () => _launchUrl(github),
                ),
            ],
          ),
          const SizedBox(height: 14),
          Text(
            title,
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w800,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            tech,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w600,
              color: accentColor,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            desc,
            style: const TextStyle(fontSize: 13.5, color: AppTheme.textSecondary, height: 1.5),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomBanner(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            AppTheme.primary.withValues(alpha: 0.12),
            AppTheme.secondary.withValues(alpha: 0.12),
          ],
        ),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: AppTheme.primary.withValues(alpha: 0.3)),
      ),
      child: Row(
        children: [
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Have an engineering challenge or opportunity?",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                ),
                SizedBox(height: 4),
                Text(
                  "Get in touch directly or chat with KITKAT for instant technical verified answers.",
                  style: TextStyle(fontSize: 12.5, color: AppTheme.textSecondary),
                ),
              ],
            ),
          ),
          const SizedBox(width: 16),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: AppTheme.primary,
              foregroundColor: AppTheme.background,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
            ),
            onPressed: () => onNavigate(6), // Contact
            child: const Text("Contact Suman", style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }
}
