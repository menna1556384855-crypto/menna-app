import Link from 'next/link';

export default function UnitsPage() {
  const units = [
    { id: 1, title: 'المقدمة والبريد الإلكتروني', desc: 'كيف حولت التكنولوجيا العالم لقرية صغيرة' },
    { id: 2, title: 'أنواع التواصل (متزامن وغير متزامن)', desc: 'متى نستخدم مكالمات الفيديو ومتى نستخدم الرسائل' },
    { id: 3, title: 'المواطنة الرقمية والأمان', desc: 'البصمة الرقمية والحقوق والمسؤوليات' },
  ];

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-right">
        <h1 className="text-3xl font-bold text-slate-900">وحدات المنهج التعليمي</h1>
        <p className="text-slate-500 mt-2">استراتيجية التعلم القائم على النشاط والمحاكاة</p>
      </header>

      <div className="grid gap-6">
        {units.map((unit) => (
          <Link key={unit.id} href={`/units/unit${unit.id}`}
            className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 transition-colors group shadow-sm">
            <span className="text-blue-600 font-black text-2xl">0{unit.id}</span>
            <div className="text-right flex-1 px-8">
              <h3 className="font-bold text-xl group-hover:text-blue-600">{unit.title}</h3>
              <p className="text-slate-50">{unit.desc}</p>
            </div>
            <div className="bg-slate-100 p-2 rounded-full group-hover:bg-blue-50">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}