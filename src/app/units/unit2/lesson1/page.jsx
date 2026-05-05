export default function LessonOne() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <div className="mb-6 flex items-center gap-4">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">الدرس 1</span>
        <h1 className="text-3xl font-bold">التواصل المتزامن</h1>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-green-600 mb-4">ما هو التواصل المتزامن؟</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          هو تواصل يحدث في نفس اللحظة، حيث يتواجد الطرفان في نفس الوقت عبر الإنترنت[cite: 1].
        </p>
        
        <h3 className="font-bold mb-3">أمثلة عليه:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>مكالمات الفيديو (Video Calls)[cite: 1].</li>
          <li>غرف الدردشة المباشرة (Live Chat)[cite: 1].</li>
        </ul>

        <div className="mt-8 p-4 bg-green-50 rounded-xl border-r-4 border-green-500">
          <p className="font-bold">ملاحظة:</p>
          <p>هذا النوع يحتاج إلى استجابة فورية من الطرف الآخر[cite: 1].</p>
        </div>
      </div>
    </div>
  );
}