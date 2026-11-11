import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Color Palette — Executive Precision Craft (Matte Carbon, Warm Amber-Gold & Emerald)
  static const Color background = Color(0xFF0D1117);    // Deep matte carbon
  static const Color surface = Color(0xFF161B22);       // Elevated graphite surface
  static const Color surfaceLight = Color(0xFF21262D);  // High-contrast slate
  static const Color surfaceCard = Color(0xFF161B22);   // Card surface

  static const Color primary = Color(0xFFF59E0B);       // Warm Burnished Amber / Gold
  static const Color secondary = Color(0xFFD97706);     // Rich Bronze
  static const Color accent = Color(0xFF10B981);        // Forest Emerald
  static const Color emerald = Color(0xFF10B981);       // Emerald success
  static const Color amber = Color(0xFFF59E0B);         // Amber alias
  static const Color rose = Color(0xFFF43F5E);          // Coral rose error

  static const Color textPrimary = Color(0xFFF8FAFC);   // Crisp ivory white
  static const Color textSecondary = Color(0xFF94A3B8); // Muted slate steel
  static const Color textMuted = Color(0xFF64748B);     // Dim slate
  static const Color border = Color(0x33F59E0B);        // Subtle warm amber border

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
