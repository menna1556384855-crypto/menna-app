export default function Unit3Lesson1() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        <header className="border-b-4 border-indigo-500 pb-6">
          <span className="text-indigo-600 font-bold text-lg md:text-xl block mb-2">الوحدة الثالثة: المواطنة الرقمية والمسؤوليات</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الأول: البصمة الرقمية والمواطنة الأخلاقية</h1>
        </header>

        {/* البصمة الرقمية */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-indigo-500 rounded-full inline-block"></span>
            بصمتك الرقمية - أثرك الذي لا يزول أبداً
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            هل تعلم أن كل نقرة زر، وكل تعليق تكتبه، وكل صورة ترفعها، وكل موقع ويب تزوره يترك وراءه أثراً خفياً؟ هذا الأثر التكنولوجي يسمى <strong>البصمة الرقمية (Digital Footprint)</strong>. إنها بمثابة سجل رقمي دائم ومستمر يختص بك وحدك، ويقوم ببناء صورتك وسمعتك أمام العالم الافتراضي والمستقبلي بالكامل. ما تنشره اليوم قد يراه مديرك في العمل بعد عشر سنوات! لذلك اجعل بصمتك إيجابية دائماً ونظيفة، ولا تنشر إلا المعرفة النافعة.
          </p>
        </section>

        {/* الحقوق والمسؤوليات */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">⚖️ ميزان المواطنة الرقمية - حقوقك ومسؤولياتك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-4">
              <h3 className="font-bold text-2xl text-indigo-900">1. حقوقك الرقمية الصارمة:</h3>
              <ul className="space-y-2 text-slate-700 text-lg list-disc list-inside">
                <li><strong>الحق في الخصوصية والأمان:</strong> حماية بياناتك وصورك من أي تسريب.</li>
                <li><strong>الحق في الحماية من التنمر:</strong> ألا يتعرض لك أحد بالإساءة أو التهديد.</li>
                <li><strong>الحق في استخدام الإنترنت:</strong> الوصول للمعلومات والتعلم بحرية تامة في أي وقت.</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-2xl text-slate-900">2. مسؤولياتك الأخلاقية:</h3>
              <ul className="space-y-2 text-slate-700 text-lg list-disc list-inside">
                <li><strong>احترام الآخرين:</strong> تقبل الاختلاف وعدم الإساءة لمشاعر وزملائك الرقميين.</li>
                <li><strong>عدم قرصنة المحتوى:</strong> احترام حقوق الملكية الفكرية وعدم سرقة الأكواد أو الكتب.</li>
                <li><strong>نشر الحقائق فقط:</strong> التحقق من مصادر الأخبار قبل عمل مشاركة (Share).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* التعامل مع المشكلات الرقمية والتوجيه */}
        <section className="bg-indigo-950 text-indigo-100 p-8 md:p-12 rounded-3xl shadow-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">🚨 خطة الإنقاذ الفوري - كيف تتصرف إذا واجهت خطراً رقمياً؟</h2>
          <p className="text-lg leading-relaxed text-indigo-200">
            أثناء إبحارك في الإنترنت، قد تتعرض لمواقف غير مريحة؛ مثل رسالة تنمر من شخص غريب، أو ظهور محتوى غير لائق يسبب لك الانزعاج. القاعدة الأساسية هنا: <strong>لا تواجه المشكلة بمفردك، ولا ترد على المزعجين مطلقاً</strong>. اتبع الخطوات التالية فوراً:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-slate-900">
            <div className="p-4 bg-white rounded-xl font-bold text-center">1. التوقف فوراً وعدم الرد</div>
            <div className="p-4 bg-white rounded-xl font-bold text-center">2. أخذ لقطة شاشة (Screenshot) للتوثيق</div>
            <div className="p-4 bg-white rounded-xl font-bold text-center">3. عمل حظر كامل للحساب المزعج (Block)</div>
            <div className="p-4 bg-white rounded-xl font-bold text-center">4. إخبار الوالدين أو معلمك في المدرسة فوراً</div>
          </div>
        </section>
      </div>
    </div>
  );
}