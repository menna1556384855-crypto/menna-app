export default function Unit2Lesson2() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        <header className="border-b-4 border-cyan-500 pb-6">
          <span className="text-cyan-600 font-bold text-lg md:text-xl block mb-2">الوحدة الثانية: أنواع التواصل الرقمي</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الثاني: التواصل غير المتزامن وجدول اتخاذ القرار</h1>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-cyan-500 rounded-full inline-block"></span>
            التواصل المرن (غير المتزامن)
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            التواصل غير المتزامن (Asynchronous Communication) هو عملية تبادل المعلومات والرسائل والملفات بين الأشخاص دون اشتراط تواجد طرفي التواصل في نفس الوقت. يرسل المرسل رسالته كاملة، ويستطيع المستقبل قراءتها، تحليلها، والرد عليها بعمق في وقت لاحق عندما يتفرغ لذلك. نستخدمه في <strong>المواضيع المعقدة أو التقارير الطويلة</strong> التي تحتاج لوقت دراسة، أو عند التواصل الرسمي.
          </p>
        </section>

        {/* المكون الثالث: جدول اتخاذ القرار واخد عرض الصفحة بالكامل */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6 overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">📊 ميزان اتخاذ القرار واختيار الأداة المناسبة</h2>
          <div className="w-full overflow-x-auto pt-4">
            <table className="w-full text-right border-collapse text-base md:text-lg">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 rounded-r-xl">الموقف التعليمي أو الحياتي</th>
                  <th className="p-4">نوع التواصل الأنسب</th>
                  <th className="p-4 rounded-l-xl">الأداة المفضلة للتنفيذ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">اندلاع حريق أو مشكلة تقنية مفاجئة توقف العمل فوراً</td>
                  <td className="p-4 text-amber-600 font-bold">متزامن (فورى حاد)</td>
                  <td className="p-4">اتصال هاتفي مباشر / دردشة حية طارئة</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">إرسال مشروع التخرج النهائي للمشرف لمراجعته وتدقيقه</td>
                  <td className="p-4 text-cyan-600 font-bold">غير متزامن (مرن دسم)</td>
                  <td className="p-4">البريد الإلكتروني مع المرفقات</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">نقاش مع زميلك حول ترتيبات نزهة نهاية الأسبوع</td>
                  <td className="p-4 text-amber-600 font-bold">متزامن (تفاعلي)</td>
                  <td className="p-4">مكالمة فيديو أو رسائل نصية سريعة</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">إرسال تقرير غياب طبي رسمي لإدارة المدرسة</td>
                  <td className="p-4 text-cyan-600 font-bold">غير متزامن (رسمي)</td>
                  <td className="p-4">رسالة بريد إلكتروني رسمية للهيئة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}