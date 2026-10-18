import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import 'kitkat_assistant_sheet.dart';

class AppDrawer extends StatelessWidget {
  final int selectedIndex;
  final Function(int) onTabSelected;

  const AppDrawer({
    super.key,
    required this.selectedIndex,
    required this.onTabSelected,
  });

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    final items = [
      {"icon": Icons.home_rounded, "label": "Home"},
      {"icon": Icons.person_rounded, "label": "About"},
      {"icon": Icons.work_history_rounded, "label": "Experience"},
      {"icon": Icons.code_rounded, "label": "Projects"},
      {"icon": Icons.workspace_premium_rounded, "label": "Certifications"},
      {"icon": Icons.description_rounded, "label": "Resume"},
      {"icon": Icons.mail_rounded, "label": "Contact"},
    ];

    return Drawer(
      backgroundColor: AppTheme.surface,
      child: SafeArea(
        child: Column(
          children: [
            // Header with Cover Icon / Profile
            Container(
              padding: const EdgeInsets.all(20),
              decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: AppTheme.border, width: 1)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 58,
                    height: 58,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: AppTheme.primary, width: 2),
                      boxShadow: [
                        BoxShadow(
                          color: AppTheme.primary.withValues(alpha: 0.35),
                          blurRadius: 10,
                        )
                      ],
                      image: const DecorationImage(
                        image: AssetImage("assets/images/profile.jpg"),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  const SizedBox(width: 14),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Suman Krishna",
                          style: TextStyle(
                            fontSize: 17,
                            fontWeight: FontWeight.w800,
                            color: Colors.white,
                          ),
                        ),
                        SizedBox(height: 3),
                        Text(
                          "ML & Flutter Engineer",
                          style: TextStyle(
                            fontSize: 12,
                            color: AppTheme.primary,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        SizedBox(height: 2),
                        Text(
                          "Google Student Ambassador",
                          style: TextStyle(
                            fontSize: 11,
                            color: AppTheme.textSecondary,
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),

            // Navigation Items
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.symmetric(vertical: 8),
                itemCount: items.length,
                itemBuilder: (context, index) {
                  final isSelected = selectedIndex == index;
                  final item = items[index];
                  return Container(
                    margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 3),
                    decoration: BoxDecoration(
                      color: isSelected ? AppTheme.primary.withValues(alpha: 0.15) : Colors.transparent,
                      borderRadius: BorderRadius.circular(14),
                      border: isSelected
                          ? Border.all(color: AppTheme.primary.withValues(alpha: 0.4))
                          : null,
                    ),
                    child: ListTile(
                      dense: true,
                      leading: Icon(
                        item["icon"] as IconData,
                        color: isSelected ? AppTheme.primary : AppTheme.textSecondary,
                        size: 20,
                      ),
                      title: Text(
                        item["label"] as String,
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
                          color: isSelected ? Colors.white : AppTheme.textPrimary,
                        ),
                      ),
                      trailing: isSelected
                          ? const Icon(Icons.arrow_forward_ios, size: 12, color: AppTheme.primary)
                          : null,
                      onTap: () {
                        Navigator.pop(context);
                        onTabSelected(index);
                      },
                    ),
                  );
                },
              ),
            ),

            // Ask KITKAT Banner in Drawer
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF0F2B48), Color(0xFF131D31)],
                ),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.primary.withValues(alpha: 0.4)),
              ),
              child: InkWell(
                onTap: () {
                  Navigator.pop(context);
                  KitkatAssistantSheet.show(context);
                },
                child: Row(
                  children: [
                    const CircleAvatar(
                      backgroundColor: AppTheme.primary,
                      radius: 18,
                      child: FaIcon(FontAwesomeIcons.wandMagicSparkles, size: 14, color: AppTheme.background),
                    ),
                    SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Ask KITKAT",
                            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white),
                          ),
                          Text(
                            "Suman's AI Voice Assistant",
                            style: TextStyle(fontSize: 11, color: AppTheme.textSecondary),
                          ),
                        ],
                      ),
                    ),
                    Icon(Icons.arrow_forward_ios, size: 12, color: AppTheme.primary),
                  ],
                ),
              ),
            ),

            // Social Icons Footer
            Container(
              padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 16),
              decoration: const BoxDecoration(
                border: Border(top: BorderSide(color: AppTheme.border, width: 0.8)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  IconButton(
                    icon: const FaIcon(FontAwesomeIcons.linkedin, size: 18, color: Color(0xFF0A66C2)),
                    tooltip: "LinkedIn",
                    onPressed: () => _launchUrl(PortfolioData.linkedin),
                  ),
                  IconButton(
                    icon: const FaIcon(FontAwesomeIcons.github, size: 18, color: Colors.white),
                    tooltip: "GitHub",
                    onPressed: () => _launchUrl(PortfolioData.github),
                  ),
                  IconButton(
                    icon: const FaIcon(FontAwesomeIcons.instagram, size: 18, color: Color(0xFFE1306C)),
                    tooltip: "Photography (@bruh.vision)",
                    onPressed: () => _launchUrl(PortfolioData.instagramPhoto),
                  ),
                  IconButton(
                    icon: const FaIcon(FontAwesomeIcons.globe, size: 18, color: AppTheme.primary),
                    tooltip: "Blog",
                    onPressed: () => _launchUrl(PortfolioData.blog),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
