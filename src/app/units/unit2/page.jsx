import Link from 'next/link';

// تأكدي أن الدالة تبدأ بحرف كبير (Unit2Lesson3) وتسبقها كلمة export default
export default function Unit2Lesson3() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <div className="mb-6 flex items-center gap-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold">الدرس 3</span>
        <h1 className="text-3xl font-bold text-slate-900">اختيار الأداة المناسبة</h1>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-8">
        <h2 className="text-xl font-bold text-blue-600 mb-4">متى نستخدم كل نوع؟</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>• نستخدم <strong>التواصل المتزامن</strong> في الأمور العاجلة والطارئة.</p>
          <p>• نستخدم <strong>التواصل غير المتزامن</strong> في التقارير الطويلة أو الأمور التي لا تحتاج سرعة[cite: 1].</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/units/unit2" className="text-blue-600 font-bold hover:underline">
          ← عودة لدروس الوحدة الثانية
        </Link>
      </div>
    </div>
  );
}