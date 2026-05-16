"use client";
import { useState } from "react";

export default function Lesson2() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!subject) {
      alert("تنبيه ذكي: ترك خانة 'الموضوع' فارغة يعطي انطباعاً بعدم الاحترافية! يرجى ملء الخانة.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-blue-500 pb-6">
          <span className="text-blue-600 font-bold text-lg md:text-xl block mb-2">الوحدة الأولى: أدوات التواصل والأمان الرقمي</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">الدرس الثاني: كيف تكتب رسالة إلكترونية رسمية؟</h1>
        </header>

        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-3 h-8 bg-blue-500 rounded-full inline-block"></span>
            أهمية البريد الإلكتروني وهيكله الأساسي
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 text-justify">
            يعتبر البريد الإلكتروني هو الطريقة الرسمية والأكثر تنظيماً للتواصل عبر الإنترنت، سواء مع معلميك في المدرسة، أو مع الجهات التعليمية والمؤسسات المختلفة. لإرسال رسالة ناجحة واحترافية تلبي الغرض، يجب عليك فهم الهيكل الأساسي لصفحة البريد الإلكتروني وكيفية صياغة كل جزء فيها بعناية.
          </p>
        </section>

        {/* محاكاة واجهة بريد إلكتروني تفاعلية كاملة العرض */}
        <section className="bg-slate-900 text-slate-100 p-8 md:p-12 rounded-3xl shadow-xl space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">💻 محاكي صندوق البريد الإلكتروني التفاعلي</h3>
            <p className="text-slate-400 mt-2">جرب كتابة رسالة رسمية لمعلمك واختبر مدى جاهزيتها للإرسال:</p>
          </div>

          <form onSubmit={handleSend} className="space-y-6 text-slate-900">
            <div>
              <label className="block text-slate-300 font-bold mb-2 text-lg">إلى (To):</label>
              <input 
                type="email" 
                placeholder="مثال: teacher@school.com" 
                value={to} 
                onChange={(e) => setTo(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-white border border-slate-700 text-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-2 text-lg">العنوان أو الموضوع (Subject):</label>
              <input 
                type="text" 
                placeholder="اكتب عنواناً مختصراً للرسالة هنا..." 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-4 rounded-xl bg-white border border-slate-700 text-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-2 text-lg">نص الرسالة الفعلي (Email Body):</label>
              <textarea 
                rows="6" 
                placeholder="ابدأ بالتحية الرسمية.. ثم اعرض طلبك بوضوح.. واختم باسمك الثنائي" 
                value={body} 
                onChange={(e) => setBody(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-white border border-slate-700 text-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-xl hover:bg-blue-600 transition-colors shadow-md">
              إرسال الرسالة الرقمية 🚀
            </button>
          </form>

          {submitted && (
            <div className="p-6 bg-blue-500/20 border border-blue-500 rounded-2xl text-blue-300 space-y-2">
              <h4 className="font-bold text-xl">🎉 تم الإرسال بنجاح! تحليل رسالتك:</h4>
              <p>• تم التوجيه بدقة إلى: {to}</p>
              <p>• العنوان المعتمد: {subject}</p>
              <p className="text-sm text-slate-400">ملاحظة تعليمية: تأكد دائماً أن نص الرسالة يبدأ بـ (الأستاذ الفاضل...) وينتهي باسمك لتوثيق الهوية.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}