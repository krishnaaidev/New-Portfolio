import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Color Palette — Hacker Theme (Terminal Green on Black)
  static const Color background = Color(0xFF080808);    // Pure black
  static const Color surface = Color(0xFF0E0E0E);       // Near-black surface
  static const Color surfaceLight = Color(0xFF161616);  // Slightly lifted
  static const Color surfaceCard = Color(0xFF111111);   // Card background

  static const Color primary = Color(0xFF00E676);       // Terminal green
  static const Color secondary = Color(0xFFEAB308);     // Amber contrast
  static const Color accent = Color(0xFF69F0AE);        // Lighter green highlight
  static const Color emerald = Color(0xFF22C55E);       // Emerald success
  static const Color amber = Color(0xFFEAB308);         // Amber alias
  static const Color rose = Color(0xFFF43F5E);          // Red — errors/warnings only

  static const Color textPrimary = Color(0xFFE8E8E8);   // Off-white
  static const Color textSecondary = Color(0xFF8A9A8A); // Muted green-grey
  static const Color textMuted = Color(0xFF4A5A4A);     // Dim text
  static const Color border = Color(0x2200E676);        // Subtle green border

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
