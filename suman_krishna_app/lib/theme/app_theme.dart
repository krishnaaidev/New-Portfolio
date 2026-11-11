import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Color Palette — Senior Engineering Aesthetic (Obsidian Slate, Electric Cyan, Deep Indigo, Emerald)
  static const Color background = Color(0xFF0A0F1D);    // Deep obsidian slate
  static const Color surface = Color(0xFF0F172A);       // Midnight slate surface
  static const Color surfaceLight = Color(0xFF1E293B);  // Elevated slate
  static const Color surfaceCard = Color(0xFF151F38);   // High-contrast slate card

  static const Color primary = Color(0xFF38BDF8);       // Electric cyan / sky
  static const Color secondary = Color(0xFF6366F1);     // Deep indigo
  static const Color accent = Color(0xFF10B981);        // Vibrant emerald
  static const Color emerald = Color(0xFF10B981);       // Emerald success
  static const Color amber = Color(0xFFF59E0B);         // Warm amber warning
  static const Color rose = Color(0xFFF43F5E);          // Coral rose error

  static const Color textPrimary = Color(0xFFF8FAFC);   // Crisp white / slate 50
  static const Color textSecondary = Color(0xFF94A3B8); // Slate 400
  static const Color textMuted = Color(0xFF64748B);     // Slate 500
  static const Color border = Color(0x2B38BDF8);        // Subtle cyan-tinted border

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
          borderRadius: BorderRadius.circular(10),
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
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: border, width: 1.5),
        ),
      ),
    );
  }
}
