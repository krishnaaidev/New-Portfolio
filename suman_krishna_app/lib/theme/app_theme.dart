import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Color Palette — Rose/Coral + Blue (matching web portfolio)
  static const Color background = Color(0xFF0C0810);   // Deep charcoal-rose
  static const Color surface = Color(0xFF1A0E16);      // Dark rose-tinted surface
  static const Color surfaceLight = Color(0xFF2A1520); // Slightly lighter surface
  static const Color surfaceCard = Color(0xFF1F1018);  // Card background

  static const Color primary = Color(0xFFF43F5E);      // Rose — main brand color
  static const Color secondary = Color(0xFF3B82F6);    // Blue — secondary brand color
  static const Color accent = Color(0xFFFB7185);       // Coral — warm highlight
  static const Color emerald = Color(0xFF10B981);      // Green — success/badges
  static const Color amber = Color(0xFFF59E0B);        // Gold — awards/highlights
  static const Color rose = Color(0xFFF43F5E);         // Rose alias

  static const Color textPrimary = Color(0xFFFDF2F4);  // Warm white
  static const Color textSecondary = Color(0xFFC4A4B0); // Muted rose-grey
  static const Color textMuted = Color(0xFF7E6070);    // Dimmed text
  static const Color border = Color(0x44F43F5E);       // Glassmorphic rose border

  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: background,
      primaryColor: primary,
      colorScheme: const ColorScheme.dark(
        primary: primary,
        secondary: secondary,
        surface: surface,
        onSurface: textPrimary,
      ),
      textTheme: GoogleFonts.plusJakartaSansTextTheme(
        ThemeData(brightness: Brightness.dark).textTheme,
      ),
      cardTheme: CardThemeData(
        color: surfaceCard,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(18),
          side: const BorderSide(color: border, width: 1),
        ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        scrolledUnderElevation: 0,
      ),
      dialogTheme: DialogThemeData(
        backgroundColor: surfaceCard,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
          side: const BorderSide(color: border, width: 1.5),
        ),
      ),
    );
  }
}
