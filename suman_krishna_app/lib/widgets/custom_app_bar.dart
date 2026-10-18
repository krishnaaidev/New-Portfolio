import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';
import 'kitkat_assistant_sheet.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final int selectedIndex;
  final Function(int) onTabSelected;

  const CustomAppBar({
    super.key,
    required this.selectedIndex,
    required this.onTabSelected,
  });

  @override
  Size get preferredSize => const Size.fromHeight(68);

  final List<String> _tabs = const [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Certifications",
    "Resume",
    "Contact",
  ];

  @override
  Widget build(BuildContext context) {
    final isDesktop = Responsive.isDesktop(context);

    return Container(
      decoration: BoxDecoration(
        color: AppTheme.background.withValues(alpha: 0.92),
        border: const Border(
          bottom: BorderSide(color: AppTheme.border, width: 1),
        ),
      ),
      padding: EdgeInsets.symmetric(
        horizontal: isDesktop ? 36 : 16,
      ),
      child: SafeArea(
        child: Row(
          children: [
            // Mobile Menu Drawer Button
            if (!isDesktop)
              IconButton(
                icon: const Icon(Icons.menu, color: AppTheme.textPrimary),
                onPressed: () => Scaffold.of(context).openDrawer(),
              ),

            // Brand Logo & Name
            InkWell(
              onTap: () => onTabSelected(0),
              borderRadius: BorderRadius.circular(12),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                child: Row(
                  children: [
                    Container(
                      width: 36,
                      height: 36,
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [AppTheme.primary, AppTheme.secondary],
                        ),
                        borderRadius: BorderRadius.circular(10),
                        boxShadow: [
                          BoxShadow(
                            color: AppTheme.primary.withValues(alpha: 0.3),
                            blurRadius: 8,
                          )
                        ],
                      ),
                      child: const Center(
                        child: Text(
                          "SK",
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w900,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    const Text(
                      "Suman Krishna",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w800,
                        color: Colors.white,
                        letterSpacing: -0.2,
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const Spacer(),

            // Desktop Navigation Tabs
            if (isDesktop)
              Row(
                children: List.generate(_tabs.length, (index) {
                  final isSelected = selectedIndex == index;
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: TextButton(
                      style: TextButton.styleFrom(
                        foregroundColor: isSelected ? AppTheme.primary : AppTheme.textSecondary,
                        backgroundColor: isSelected ? AppTheme.primary.withValues(alpha: 0.1) : Colors.transparent,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20),
                          side: isSelected
                              ? BorderSide(color: AppTheme.primary.withValues(alpha: 0.3))
                              : BorderSide.none,
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                      ),
                      onPressed: () => onTabSelected(index),
                      child: Text(
                        _tabs[index],
                        style: TextStyle(
                          fontSize: 13.5,
                          fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
                        ),
                      ),
                    ),
                  );
                }),
              ),

            const SizedBox(width: 12),

            // Top KITKAT Assistant Action Button
            ElevatedButton.icon(
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.surfaceCard,
                foregroundColor: AppTheme.primary,
                side: const BorderSide(color: AppTheme.primary, width: 1.2),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                elevation: 4,
                shadowColor: AppTheme.primary.withValues(alpha: 0.3),
              ),
              onPressed: () => KitkatAssistantSheet.show(context),
              icon: const FaIcon(FontAwesomeIcons.wandMagicSparkles, size: 14),
              label: Text(
                isDesktop ? "Ask KITKAT" : "KITKAT",
                style: const TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
