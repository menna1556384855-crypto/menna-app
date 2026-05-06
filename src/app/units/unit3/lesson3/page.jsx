import Link from 'next/link';

export default function Unit3Lesson3() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-red-600 mb-6">التقييم الإلكتروني</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <p className="text-lg leading-relaxed text-slate-700">
          هو عملية استخدام الأدوات الرقمية لتقييم أداء الطلاب بشكل فوري ودقيق.
        </p>
      </div>
      <Link href="/units/unit3" className="text-blue-600 font-bold underline">← عودة لفهرس الوحدة</Link>
    </div>
  );
}