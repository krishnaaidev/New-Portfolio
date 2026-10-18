import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../data/portfolio_data.dart';
import '../theme/app_theme.dart';
import '../utils/responsive.dart';
import '../utils/url_helper.dart';

class ContactScreen extends StatefulWidget {
  const ContactScreen({super.key});

  @override
  State<ContactScreen> createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _subjectCtrl = TextEditingController();
  final _messageCtrl = TextEditingController();

  @override
  void dispose() {
    _nameCtrl.dispose();
    _emailCtrl.dispose();
    _subjectCtrl.dispose();
    _messageCtrl.dispose();
    super.dispose();
  }

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      UrlHelper.launchEmail(
        context,
        email: PortfolioData.emailInstitutional,
        subject: _subjectCtrl.text.trim().isNotEmpty
            ? _subjectCtrl.text.trim()
            : "Collaboration / Opportunity - Suman Krishna",
        body: "From: ${_nameCtrl.text.trim()} (${_emailCtrl.text.trim()})\n\n${_messageCtrl.text.trim()}",
      );

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          backgroundColor: AppTheme.emerald,
          content: Text("Opening email client to send message to Suman Krishna!"),
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
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
                "Let's Build Something Impactful",
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w900,
                  color: Colors.white,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 6),
              const Text(
                "Available for machine learning engineering, Flutter mobile app development, and technical collaborations.",
                style: TextStyle(fontSize: 14, color: AppTheme.textSecondary),
              ),
              const SizedBox(height: 32),

              isDesktop
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(flex: 3, child: _buildContactForm()),
                        const SizedBox(width: 32),
                        Expanded(flex: 2, child: _buildDirectDetails()),
                      ],
                    )
                  : Column(
                      children: [
                        _buildContactForm(),
                        const SizedBox(height: 28),
                        _buildDirectDetails(),
                      ],
                    ),
              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildContactForm() {
    return Container(
      padding: const EdgeInsets.all(28),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: AppTheme.border),
      ),
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Send a Direct Message",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.white),
            ),
            const SizedBox(height: 18),
            TextFormField(
              controller: _nameCtrl,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: _inputDecoration("Your Name", Icons.person_outline),
              validator: (v) => v == null || v.trim().isEmpty ? "Please enter your name" : null,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _emailCtrl,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: _inputDecoration("Your Email Address", Icons.email_outlined),
              validator: (v) => v == null || !v.contains("@") ? "Please enter a valid email" : null,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _subjectCtrl,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: _inputDecoration("Subject / Purpose", Icons.subject),
              validator: (v) => v == null || v.trim().isEmpty ? "Please enter a subject" : null,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _messageCtrl,
              maxLines: 4,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: _inputDecoration("Message", Icons.message_outlined),
              validator: (v) => v == null || v.trim().isEmpty ? "Please enter your message" : null,
            ),
            const SizedBox(height: 22),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primary,
                  foregroundColor: AppTheme.background,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                ),
                onPressed: _submitForm,
                icon: const Icon(Icons.send_rounded, size: 18),
                label: const Text(
                  "Transmit Message",
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  InputDecoration _inputDecoration(String label, IconData icon) {
    return InputDecoration(
      labelText: label,
      labelStyle: const TextStyle(color: AppTheme.textMuted, fontSize: 13),
      prefixIcon: Icon(icon, color: AppTheme.primary, size: 18),
      filled: true,
      fillColor: AppTheme.surfaceLight,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: const BorderSide(color: AppTheme.border),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: const BorderSide(color: AppTheme.border),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(16),
        borderSide: const BorderSide(color: AppTheme.primary),
      ),
    );
  }

  Widget _buildDirectDetails() {
    return Container(
      padding: const EdgeInsets.all(26),
      decoration: BoxDecoration(
        color: AppTheme.surfaceCard,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: AppTheme.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "Contact Coordinates",
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.white),
          ),
          const SizedBox(height: 20),
          _contactItem(
            icon: const Icon(Icons.mail_outline, color: AppTheme.primary, size: 16),
            label: "Institutional Email",
            value: PortfolioData.emailInstitutional,
            copyValue: PortfolioData.emailInstitutional,
            onTap: () => UrlHelper.launchEmail(context, email: PortfolioData.emailInstitutional),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const Icon(Icons.alternate_email, color: AppTheme.primary, size: 16),
            label: "Primary Email",
            value: PortfolioData.emailPersonal,
            copyValue: PortfolioData.emailPersonal,
            onTap: () => UrlHelper.launchEmail(context, email: PortfolioData.emailPersonal),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const Icon(Icons.phone_outlined, color: AppTheme.emerald, size: 16),
            label: "Telephone / WhatsApp",
            value: PortfolioData.phone,
            copyValue: PortfolioData.phone,
            onTap: () => UrlHelper.launchPhone(context, PortfolioData.phone),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const Icon(Icons.location_on_outlined, color: AppTheme.amber, size: 16),
            label: "Location",
            value: PortfolioData.location,
            copyValue: PortfolioData.location,
            onTap: () => UrlHelper.copyToClipboard(context, PortfolioData.location, "Location"),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const FaIcon(FontAwesomeIcons.linkedin, color: Color(0xFF0A66C2), size: 16),
            label: "LinkedIn Professional",
            value: "in/suman-krishna-7a17a6275",
            copyValue: PortfolioData.linkedin,
            onTap: () => UrlHelper.launchURL(context, PortfolioData.linkedin),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const FaIcon(FontAwesomeIcons.github, color: Colors.white, size: 16),
            label: "GitHub Code Repository",
            value: "github.com/krishnaaidev",
            copyValue: PortfolioData.github,
            onTap: () => UrlHelper.launchURL(context, PortfolioData.github),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const FaIcon(FontAwesomeIcons.instagram, color: Color(0xFFE1306C), size: 16),
            label: "Instagram Photography",
            value: "@bruh.vision",
            copyValue: PortfolioData.instagramPhoto,
            onTap: () => UrlHelper.launchURL(context, PortfolioData.instagramPhoto),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const FaIcon(FontAwesomeIcons.instagram, color: Color(0xFFA855F7), size: 16),
            label: "Instagram Personal",
            value: "@krishna.ai.dev",
            copyValue: PortfolioData.instagramPersonal,
            onTap: () => UrlHelper.launchURL(context, PortfolioData.instagramPersonal),
          ),
          const Divider(color: AppTheme.border, height: 24),
          _contactItem(
            icon: const FaIcon(FontAwesomeIcons.globe, color: AppTheme.primary, size: 16),
            label: "Technical Blog",
            value: "blogsitesk.netlify.app",
            copyValue: PortfolioData.blog,
            onTap: () => UrlHelper.launchURL(context, PortfolioData.blog),
          ),
        ],
      ),
    );
  }

  Widget _contactItem({
    required Widget icon,
    required String label,
    required String value,
    required VoidCallback onTap,
    String? copyValue,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 4),
        child: Row(
          children: [
            Container(
              width: 38,
              height: 38,
              decoration: BoxDecoration(
                color: AppTheme.primary.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Center(child: icon),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(label, style: const TextStyle(fontSize: 11, color: AppTheme.textSecondary)),
                  const SizedBox(height: 2),
                  Text(
                    value,
                    style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white),
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
            if (copyValue != null)
              IconButton(
                icon: const Icon(Icons.copy, size: 16, color: AppTheme.textMuted),
                tooltip: "Copy $label",
                onPressed: () => UrlHelper.copyToClipboard(context, copyValue, label),
              )
            else
              const Icon(Icons.arrow_outward, size: 14, color: AppTheme.textMuted),
          ],
        ),
      ),
    );
  }
}
