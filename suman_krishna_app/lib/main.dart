import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'screens/about_screen.dart';
import 'screens/certifications_screen.dart';
import 'screens/contact_screen.dart';
import 'screens/experience_screen.dart';
import 'screens/home_screen.dart';
import 'screens/projects_screen.dart';
import 'screens/resume_screen.dart';
import 'theme/app_theme.dart';
import 'utils/responsive.dart';
import 'widgets/app_drawer.dart';
import 'widgets/custom_app_bar.dart';
import 'widgets/kitkat_assistant_sheet.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const SumanKrishnaApp());
}

class SumanKrishnaApp extends StatelessWidget {
  const SumanKrishnaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Suman Krishna",
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: const MainPortfolioScaffold(),
    );
  }
}

class MainPortfolioScaffold extends StatefulWidget {
  const MainPortfolioScaffold({super.key});

  @override
  State<MainPortfolioScaffold> createState() => _MainPortfolioScaffoldState();
}

class _MainPortfolioScaffoldState extends State<MainPortfolioScaffold> {
  int _currentTab = 0;

  void _navigateToTab(int index) {
    setState(() {
      _currentTab = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDesktop = Responsive.isDesktop(context);

    final screens = [
      HomeScreen(onNavigate: _navigateToTab),
      const AboutScreen(),
      const ExperienceScreen(),
      const ProjectsScreen(),
      const CertificationsScreen(),
      const ResumeScreen(),
      const ContactScreen(),
    ];

    return Scaffold(
      backgroundColor: AppTheme.background,
      appBar: CustomAppBar(
        selectedIndex: _currentTab,
        onTabSelected: _navigateToTab,
      ),
      drawer: isDesktop
          ? null
          : AppDrawer(
              selectedIndex: _currentTab,
              onTabSelected: _navigateToTab,
            ),
      body: IndexedStack(
        index: _currentTab,
        children: screens,
      ),
      // Floating KITKAT Voice Assistant Button
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppTheme.surfaceCard,
        foregroundColor: AppTheme.primary,
        elevation: 6,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(28),
          side: const BorderSide(color: AppTheme.primary, width: 1.5),
        ),
        icon: Container(
          padding: const EdgeInsets.all(4),
          decoration: const BoxDecoration(
            shape: BoxShape.circle,
            gradient: LinearGradient(
              colors: [AppTheme.primary, AppTheme.secondary],
            ),
          ),
          child: const FaIcon(FontAwesomeIcons.wandMagicSparkles, size: 14, color: Colors.white),
        ),
        label: const Text(
          "Ask KITKAT",
          style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, letterSpacing: 0.3),
        ),
        onPressed: () => KitkatAssistantSheet.show(context),
      ),
      // Mobile Bottom Navigation Bar (for quick thumb reach on mobile)
      bottomNavigationBar: isDesktop
          ? null
          : Container(
              decoration: const BoxDecoration(
                color: AppTheme.surface,
                border: Border(top: BorderSide(color: AppTheme.border, width: 0.8)),
              ),
              child: NavigationBar(
                backgroundColor: Colors.transparent,
                indicatorColor: AppTheme.primary.withValues(alpha: 0.2),
                selectedIndex: _currentTab > 4 ? 0 : _currentTab,
                onDestinationSelected: (idx) {
                  _navigateToTab(idx);
                },
                destinations: const [
                  NavigationDestination(
                    icon: Icon(Icons.home_outlined),
                    selectedIcon: Icon(Icons.home, color: AppTheme.primary),
                    label: "Home",
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.person_outline),
                    selectedIcon: Icon(Icons.person, color: AppTheme.primary),
                    label: "About",
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.work_outline),
                    selectedIcon: Icon(Icons.work, color: AppTheme.primary),
                    label: "Experience",
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.code_outlined),
                    selectedIcon: Icon(Icons.code, color: AppTheme.primary),
                    label: "Projects",
                  ),
                  NavigationDestination(
                    icon: Icon(Icons.workspace_premium_outlined),
                    selectedIcon: Icon(Icons.workspace_premium, color: AppTheme.primary),
                    label: "Certs",
                  ),
                ],
              ),
            ),
    );
  }
}
