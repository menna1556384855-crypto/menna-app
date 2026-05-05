// src/app/units/unit2/lesson1/page.jsx
export default function SyncVsAsync() {
  return (
    <div className="space-y-8">
      <header className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-emerald-500">
        <h1 className="text-2xl font-bold text-emerald-700 text-center">التواصل المتزامن وغير المتزامن</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-2 text-sm">1</span>
            التواصل المتزامن
          </h2>
          <p className="leading-relaxed">هو تواصل يحدث في نفس اللحظة مثل مكالمات الفيديو والشات المباشر ويحتاج استجابة فورية.</p>
          <ul className="mt-4 list-disc list-inside text-sm text-emerald-800">
            <li>مكالمات الفيديو</li>
            <li>الاجتماعات الطارئة</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-2 text-sm">2</span>
            التواصل غير المتزامن
          </h2>
          <p className="leading-relaxed">مثل البريد الالكتروني أو الرسائل المسجلة حيث يمكن للمستلم قرائتها والرد عليها في وقت لاحق.</p>
          <ul className="mt-4 list-disc list-inside text-sm text-orange-800">
            <li>البريد الإلكتروني</li>
            <li>التقارير الطويلة</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-inner border">
        <h3 className="font-bold mb-2">قاعدة ذهبية:</h3>
        <p className="text-slate-600 italic">نستخدم المتزامن في الأمور العاجلة، وغير المتزامن في التقارير الطويلة أو الأمور التي لا تحتاج سرعة.</p>
      </div>
    </div>
  );
}