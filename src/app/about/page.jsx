export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-indigo-600 pb-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">💡 عن المنصة التعليمية الرقمية</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-2">رؤية أكاديمية متكاملة لدمج التكنولوجيا الحديثة بالاستراتيجيات التعليمية.</p>
        </header>

        {/* بطاقة عرض تفاصيل المطور والموقع */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">👤 بطاقة هوية المطور الأكاديمي</h2>
            <div className="space-y-4 text-lg md:text-xl text-slate-600">
              <p>• <strong>الاسم الثلاثي:</strong> منة الله محمود محمد محمود</p>
              <p>• <strong>التخصص الأكاديمي:</strong> تكنولوجيا التعليم (Ed-Tech)</p>
              <p>• <strong>المرحلة الدراسية:</strong> الفرقة الثالثة</p>
              <p>• <strong>المادة البرمجية:</strong> مواقع الويب التعليمية (1)</p>
              <p>• <strong>العام الدراسي:</strong> 2025 / 2026</p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-100 p-8 md:p-12 rounded-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-400">🎯 الفلسفة التعليمية للموقع</h2>
            <p className="text-lg leading-relaxed text-slate-300 text-justify">
              يهدف هذا التطبيق الرقمي المصمم بإطار عمل <strong>Next.js</strong> وتنسيقات <strong>Tailwind CSS</strong> إلى محاكاة بيئات التعلم الرقمية الحديثة. تم بناء المحتوى وتوسيعه استناداً إلى معايير التصميم التعليمي (Instructional Design) لتنمية مهارات المواطنة الرقمية، وفهم آليات الأمان والحماية الرقمية الفعالة لدى الطلاب من خلال استراتيجيات التفاعل والمحاكاة الذكية القائمة على الأنشطة والمواقف الحقيقية.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}