import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

class UrlHelper {
  /// Opens an external URL (web links, GitHub, LinkedIn, etc.)
  static Future<void> launchURL(BuildContext context, String urlString) async {
    final trimmed = urlString.trim();
    if (trimmed.isEmpty) return;

    final uri = Uri.parse(trimmed);
    try {
      final launched = await launchUrl(
        uri,
        mode: LaunchMode.externalApplication,
      );
      if (!launched) {
        final fallback = await launchUrl(uri, mode: LaunchMode.platformDefault);
        if (!fallback) {
          await launchUrl(uri, mode: LaunchMode.inAppWebView);
        }
      }
    } catch (_) {
      try {
        await launchUrl(uri, mode: LaunchMode.inAppWebView);
      } catch (err) {
        if (!context.mounted) return;
        await Clipboard.setData(ClipboardData(text: trimmed));
        if (!context.mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text("Copied link to clipboard: $trimmed"),
            behavior: SnackBarBehavior.floating,
            duration: const Duration(seconds: 3),
          ),
        );
      }
    }
  }

  /// Opens mail client with pre-formatted email, subject and body
  static Future<void> launchEmail(
    BuildContext context, {
    required String email,
    String subject = "",
    String body = "",
  }) async {
    final Uri emailLaunchUri = Uri(
      scheme: 'mailto',
      path: email.trim(),
      queryParameters: {
        if (subject.isNotEmpty) 'subject': subject,
        if (body.isNotEmpty) 'body': body,
      },
    );

    try {
      final launched = await launchUrl(emailLaunchUri, mode: LaunchMode.externalApplication);
      if (!launched) {
        await launchUrl(emailLaunchUri, mode: LaunchMode.platformDefault);
      }
    } catch (_) {
      if (!context.mounted) return;
      await Clipboard.setData(ClipboardData(text: email));
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Email copied to clipboard: $email"),
          behavior: SnackBarBehavior.floating,
          duration: const Duration(seconds: 3),
        ),
      );
    }
  }

  /// Opens phone dialer
  static Future<void> launchPhone(BuildContext context, String phone) async {
    final cleanPhone = phone.replaceAll(RegExp(r'[^0-9+]'), '');
    final Uri phoneUri = Uri(scheme: 'tel', path: cleanPhone);

    try {
      final launched = await launchUrl(phoneUri, mode: LaunchMode.externalApplication);
      if (!launched) {
        await launchUrl(phoneUri, mode: LaunchMode.platformDefault);
      }
    } catch (_) {
      if (!context.mounted) return;
      await Clipboard.setData(ClipboardData(text: phone));
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Phone copied to clipboard: $phone"),
          behavior: SnackBarBehavior.floating,
          duration: const Duration(seconds: 3),
        ),
      );
    }
  }

  /// Copies text to clipboard and shows quick feedback
  static Future<void> copyToClipboard(BuildContext context, String text, String label) async {
    await Clipboard.setData(ClipboardData(text: text));
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("$label copied to clipboard!"),
        behavior: SnackBarBehavior.floating,
        duration: const Duration(seconds: 2),
      ),
    );
  }
}
