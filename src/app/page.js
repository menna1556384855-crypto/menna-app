import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-100">
        <h2 className="text-blue-700 font-bold text-xl mb-2">جامعة عين شمس</h2>
        <h3 className="text-slate-600 font-medium mb-6">كلية التربية النوعية</h3>
        
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
          أدوات التواصل الرقمي في حياتنا اليومية
        </h1>
        
        <div className="space-y-2 mb-10 text-slate-700">
          <p>إعداد الطالبة: <span className="font-bold">منة الله محمود محمد</span></p>
          <p>قسم تكنولوجيا التعليم - الفرقة الثالثة</p>
          <p>المادة: مواقع الويب التعليمية (2025/2026)</p>
        </div>

        <Link href="/units" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
          ابدأ التعلم الآن
        </Link>
      </div>
    </div>
  );
}