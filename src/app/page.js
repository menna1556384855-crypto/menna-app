import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center py-20 px-6 md:px-12 lg:px-16" dir="rtl">
      {/* Hero Section واخد عرض وعمق الصفحة بالكامل */}
      <div className="w-full max-w-none text-center space-y-8">
        
        <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold rounded-full text-base md:text-lg mb-2 animate-pulse">
          🚀 مشروع مادة مواقع الويب التعليمية - الفرقة الثالثة
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
          مرحباً بكم في منصة <span className="text-emerald-400">menna-app</span> لتكنولوجيا المعلومات 💻
        </h1>

        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          بيئة رقمية تفاعلية مصممة لتمكين الطلاب من فهم أدوات التواصل الرقمي، قواعد السلامة، آليات المواطنة الرقمية الفعالة والآمنة.
        </p>

        {/* أزرار الانتقال والتحكم كاملة العرض والمتجاوبة */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <Link href="/units" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xl rounded-xl transition-all shadow-lg hover:scale-105 duration-200">
            اكتشف الوحدات والدروس 🗺️
          </Link>
          <Link href="/exam" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xl rounded-xl transition-all shadow-lg hover:scale-105 duration-200">
            خوض الاختبار التفاعلي 📝
          </Link>
          <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xl rounded-xl transition-all border border-slate-700">
            عن المنصة والمطور 👤
          </Link>
        </div>

        {/* كروت توضيحية سريعة في الأسفل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-right max-w-6xl mx-auto">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="font-bold text-xl text-emerald-400 mb-2">📚 محتوى غني وموسع</h3>
            <p className="text-slate-400">شرح عميق ومفصل لسيناريوهات منهج ICT لتوفير مادة علمية متكاملة وقوية للمتعلم.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="font-bold text-xl text-purple-400 mb-2">🎮 أنشطة ومحاكاة تفاعلية</h3>
            <p className="text-slate-400">تطبيق عملي فوري مبني على مواقف حقيقية لقياس سرعة بديهة وأمان الطلاب.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="font-bold text-xl text-indigo-400 mb-2">⚡ تصميم عصري وسريع</h3>
            <p className="text-slate-400">مبني بأحدث تقنيات الويب العالمية Next.js مع استغلال المساحات والتجاوب الكامل للشاشة.</p>
          </div>
        </div>

      </div>
    </div>
  );
}