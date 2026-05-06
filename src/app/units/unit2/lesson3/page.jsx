import Link from 'next/link';

export default function Unit2Lesson3() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">قواعد اختيار أداة التواصل</h1>
      <div className="grid gap-4 mb-8">
        <div className="p-4 bg-green-50 border-r-4 border-green-500 rounded-lg">
          <p className="font-bold">استخدم المتزامن في:</p>
          <p>حالات الطوارئ والاجتماعات العاجلة[cite: 1].</p>
        </div>
        <div className="p-4 bg-orange-50 border-r-4 border-orange-500 rounded-lg">
          <p className="font-bold">استخدم غير المتزامن في:</p>
          <p>التقارير الطويلة والمهام التي لا تحتاج سرعة[cite: 1].</p>
        </div>
      </div>
      <Link href="/units/unit2" className="text-blue-600 font-bold">← عودة لفهرس الوحدة</Link>
    </div>
  );
}