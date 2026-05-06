import Link from 'next/link';

export default function Unit2Lesson1() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-green-600 mb-6">التواصل المتزامن (Synchronous)</h1>
      <div className="prose prose-slate bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <p className="text-lg leading-relaxed mb-4">
          هو تواصل يحدث في الوقت الفعلي (في نفس اللحظة) ويحتاج استجابة فورية[cite: 1].
        </p>
        <h3 className="font-bold mb-2">أمثلة:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>مكالمات الفيديو والشات المباشر[cite: 1].</li>
        </ul>
      </div>
      <div className="mt-8">
        <Link href="/units/unit2" className="text-blue-600 font-bold">← عودة لفهرس الوحدة</Link>
      </div>
    </div>
  );
}