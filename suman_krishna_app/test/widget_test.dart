import 'package:flutter_test/flutter_test.dart';
import 'package:suman_krishna_app/main.dart';

void main() {
  testWidgets('App loads smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const SumanKrishnaApp());
    expect(find.text('Suman Krishna'), findsWidgets);
  });
}
