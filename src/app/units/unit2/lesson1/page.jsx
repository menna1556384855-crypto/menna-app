export default function Unit2Lesson1() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        <header className="border-b-4 border-amber-500 pb-6">
          <span className="text-amber-600 font-bold text-lg md:text-xl block mb-2">الوحدة الثانية: أنواع التواصل الرقمي</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الأول: التواصل المتزامن - اللحظة باللحظة</h1>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-8 bg-amber-500 rounded-full inline-block animate-pulse"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">مفهوم التواصل في الوقت الفعلي</h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            التواصل المتزامن (Synchronous Communication) هو العملية التفاعلية التي تتم بين طرفين أو أكثر في نفس اللحظة الزمنية الفعلية (الحية). حيث يقوم المرسل بصياغة وإرسال الرسالة، ويتلقى المستقبل الرسالة ويقوم بالرد عليها فوراً وبشكل لحظي دون أي تأخير زمني ملموس.
          </p>
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <h4 className="font-bold text-lg text-amber-900 mb-2">💡 متى نلجأ إليه حتماً؟</h4>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              نلجأ للتواصل المتزامن في <strong>الحالات الطارئة أو الأمور العاجلة</strong> التي لا تحتمل الانتظار، أو عند الرغبة في تبادل نقاش تفاعلي حي (مثل جلسات العصف الذهني في المشاريع البرمجية)، أو عند التواصل اليومي المباشر والمستمر مع أفراد الأسرة والأصدقاء المقربين للاطمئنان عليهم.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}