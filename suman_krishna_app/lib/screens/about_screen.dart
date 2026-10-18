import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  void _showImageDialog(BuildContext context, String assetPath) {
    showDialog(
      context: context,
      builder: (context) => Dialog(
        backgroundColor: Colors.transparent,
        child: Stack(
          alignment: Alignment.topRight,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: Image.asset(assetPath, fit: BoxFit.contain),
            ),
            IconButton.filledTonal(
              icon: const Icon(Icons.close, color: Colors.white),
              onPressed: () => Navigator.pop(context),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDesktop = Responsive.isDesktop(context);

    return SingleChildScrollView(
      padding: Responsive.pagePadding(context),
      child: Center(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: Responsive.contentWidth(context)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header
              const Text(
                "Engineering with Purpose",
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w900,
                  color: Colors.white,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 6),
              const Text(
                "Machine Learning practitioner, Flutter cross-platform developer, and community advocate.",
                style: TextStyle(fontSize: 14, color: AppTheme.textSecondary),
              ),
              const SizedBox(height: 32),

              // Bio + Quick Overview Row
              isDesktop
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(flex: 3, child: _buildBioCard()),
                        const SizedBox(width: 24),
                        Expanded(flex: 2, child: _buildMilestonesCard()),
                      ],
                    )
                  : Column(
                      children: [
                        _buildBioCard(),
                        const SizedBox(height: 20),
                        _buildMilestonesCard(),
                      ],
                    ),
              const SizedBox(height: 36),

              // Extracurricular Highlights (Chess + Photography)
              const Text(
                "Beyond Code: Creative & Strategic Pursuits",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w800,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 16),
              _buildExtracurriculars(context),
              const SizedBox(height: 36),

              // Photography Gallery Grid
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Visual Storytelling Gallery",
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        "Captured moments and cinematic compositions from @bruh.vision",
                        style: TextStyle(fontSize: 12.5, color: AppTheme.textSecondary),
                      ),
                    ],
                  ),
                  TextButton.icon(
                    onPressed: () => _launchUrl(PortfolioData.instagramPhoto),
                    icon: const FaIcon(FontAwesomeIcons.instagram, size: 14, color: Color(0xFFE1306C)),
                    label: const Text("@bruh.vision", style: TextStyle(color: Color(0xFFE1306C), fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
              const SizedBox(height: 16),

              _buildPhotoGallery(context),
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildBioCard() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: AppTheme.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: AppTheme.primary.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Icon(Icons.school, color: AppTheme.primary, size: 22),
              ),
              const SizedBox(width: 14),
              const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Academic Background",
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                  ),
                  Text(
                    "CT Institute of Engineering, Management & Tech",
                    style: TextStyle(fontSize: 12, color: AppTheme.textSecondary),
                  ),
                ],
              )
            ],
          ),
          const SizedBox(height: 18),
          const Text(
            "I am Suman Krishna, a final-year Computer Science undergraduate at CTIEMT (2023–2027) with an academic CGPA of 8.0 / 10.0.\n\n"
            "My engineering philosophy bridges statistical machine learning rigor with production software delivery. Through two industry internships at EduTech Solutions and Averixis Solutions, I've developed end-to-end data analytics pipelines, Power BI executive suites, and machine learning models for business forecasting.\n\n"
            "I architected the production institutional app — CT Group KRA & KPI Performance Management System — using Flutter & Dart for cross-platform governance, and built AIHire as my B.Tech capstone platform.",
            style: TextStyle(fontSize: 14, height: 1.6, color: AppTheme.textPrimary),
          ),
        ],
      ),
    );
  }

  Widget _buildMilestonesCard() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: AppTheme.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "Key Roles & Badges",
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
          ),
          const SizedBox(height: 16),
          _milestoneTile(
            title: "Google Student Ambassador",
            sub: "Official liaison organizing AI & Cloud workshops (Since Sep 2025)",
            icon: FontAwesomeIcons.google,
            color: AppTheme.amber,
          ),
          const Divider(color: AppTheme.border, height: 24),
          _milestoneTile(
            title: "GDG Member",
            sub: "Core community advocate for AI and Flutter (Since Sep 2026)",
            icon: FontAwesomeIcons.users,
            color: AppTheme.secondary,
          ),
          const Divider(color: AppTheme.border, height: 24),
          _milestoneTile(
            title: "RedRob Assessment Distinction",
            sub: "Standardized benchmark score: 763 / 1000",
            icon: FontAwesomeIcons.bullseye,
            color: AppTheme.emerald,
          ),
          const Divider(color: AppTheme.border, height: 24),
          _milestoneTile(
            title: "7x NASSCOM Gold Certifications",
            sub: "100% in AWS Cloud Computing & Generative AI 101",
            icon: FontAwesomeIcons.award,
            color: AppTheme.primary,
          ),
        ],
      ),
    );
  }

  Widget _milestoneTile({
    required String title,
    required String sub,
    required FaIconData icon,
    required Color color,
  }) {
    return Row(
      children: [
        Container(
          width: 38,
          height: 38,
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.15),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Center(child: FaIcon(icon, color: color, size: 16)),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              const SizedBox(height: 2),
              Text(
                sub,
                style: const TextStyle(fontSize: 11.5, color: AppTheme.textSecondary),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildExtracurriculars(BuildContext context) {
    return Row(
      children: [
        // Chess Card
        Expanded(
          child: Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: AppTheme.surfaceCard,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: AppTheme.border),
            ),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    color: AppTheme.amber.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Center(
                    child: FaIcon(FontAwesomeIcons.chessKnight, color: AppTheme.amber, size: 20),
                  ),
                ),
                const SizedBox(width: 14),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Chess Rating: 750+",
                        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white),
                      ),
                      Text(
                        "Tactical and positional play enthusiast on Chess.com",
                        style: TextStyle(fontSize: 12, color: AppTheme.textSecondary),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(width: 16),
        // Instagram Card
        Expanded(
          child: InkWell(
            onTap: () => _launchUrl(PortfolioData.instagramPhoto),
            borderRadius: BorderRadius.circular(20),
            child: Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: AppTheme.surfaceCard,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: const Color(0xFFE1306C).withValues(alpha: 0.4)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      color: const Color(0xFFE1306C).withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Center(
                      child: FaIcon(FontAwesomeIcons.instagram, color: Color(0xFFE1306C), size: 22),
                    ),
                  ),
                  const SizedBox(width: 14),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "@bruh.vision",
                          style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Colors.white),
                        ),
                        Text(
                          "Cinematography & Photography handle",
                          style: TextStyle(fontSize: 12, color: AppTheme.textSecondary),
                        ),
                      ],
                    ),
                  ),
                  const Icon(Icons.arrow_forward_ios, size: 14, color: Color(0xFFE1306C)),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildPhotoGallery(BuildContext context) {
    final columns = Responsive.gridColumns(context, desktop: 4, tablet: 3, mobile: 2);
    final images = PortfolioData.photographyImages;

    return Column(
      children: [
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: images.length,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: columns,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 1.0,
          ),
          itemBuilder: (context, index) {
            final path = images[index];
            return InkWell(
              onTap: () => _showImageDialog(context, path),
              borderRadius: BorderRadius.circular(16),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: Image.asset(path, fit: BoxFit.cover),
              ),
            );
          },
        ),
        const SizedBox(height: 16),
        // For More Visit Handle Banner
        InkWell(
          onTap: () => _launchUrl(PortfolioData.instagramPhoto),
          borderRadius: BorderRadius.circular(18),
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  const Color(0xFFE1306C).withValues(alpha: 0.15),
                  const Color(0xFF833AB4).withValues(alpha: 0.15),
                ],
              ),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFE1306C).withValues(alpha: 0.4)),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FaIcon(FontAwesomeIcons.instagram, color: Color(0xFFE1306C), size: 18),
                SizedBox(width: 10),
                Text(
                  "For More, Visit Insta Handle: @bruh.vision",
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                SizedBox(width: 8),
                Icon(Icons.arrow_forward, size: 16, color: Color(0xFFE1306C)),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
