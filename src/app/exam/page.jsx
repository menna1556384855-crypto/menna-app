"use client";
import { useState } from "react";

export default function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      q: "ما هي الأداة الأنسب لإرسال تقرير غياب طبي رسمي لإدارة المدرسة؟",
      options: ["أ) مكالمة فيديو حية وعاجلة.", "ب) رسالة بريد إلكتروني رسمية.", "ج) رسالة نصية قصيرة مجهولة."],
      correct: 1,
    },
    {
      id: 2,
      q: "أي مما يلي يمثل سلوكاً صحيحاً لحماية الأمان الرقمي الشخصي؟",
      options: ["أ) مشاركة كلمة المرور مع الأصدقاء المقربين.", "ب) استخدام تاريخ الميلاد ككلمة مرور.", "ج) صياغة كلمة مرور قوية تحتوي على رموز وأرقام وحروف متباينة."],
      correct: 2,
    },
    {
      id: 3,
      q: "كل ما تفعله وتتركه من أثر وتعليقات ومواقع تزورها على الإنترنت يسمى بـ:",
      options: ["أ) البصمة الرقمية.", "ب) القرصنة الإلكترونية.", "ج) مكالمات الفيديو."],
      correct: 0,
    }
  ];

  const handleSelect = (qId, optionIdx) => {
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) currentScore++;
    });
    setScore(currentScore);
    setShowResult(true);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 py-12 px-6 md:px-12 lg:px-16" dir="rtl">
      <div className="w-full max-w-none space-y-12">
        
        <header className="border-b-4 border-purple-600 pb-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">📝 الاختبار التفاعلي الشامل لمادة ICT</h1>
          <p className="text-slate-600 text-lg md:text-xl mt-2">قيّم معلوماتك الرقمية الآن واكتشف مدى استيعابك للمواطنة والأمان الرقمي.</p>
        </header>

        {/* قائمة الأسئلة كاملة العرض */}
        <div className="space-y-8 w-full">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                السؤال {idx + 1}: {q.q}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelect(q.id, optIdx)}
                    className={`p-5 text-right font-medium rounded-2xl border text-lg transition-all ${
                      answers[q.id] === optIdx
                        ? "bg-purple-600 text-white border-purple-500 shadow-md"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={calculateScore}
            disabled={Object.keys(answers).length < questions.length}
            className="w-full md:w-auto px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-2xl transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            إرسال الإجابات ورؤية النتيجة الفورية 🎯
          </button>
        </div>

        {showResult && (
          <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-4 shadow-xl border border-purple-500/30">
            <h2 className="text-3xl font-black text-purple-400">🎉 النتيجة التعليمية النهائية لحسابك:</h2>
            <p className="text-2xl">
              لقد أجبت بشكل صحيح على <span className="text-purple-300 font-bold">{score}</span> من أصل <span className="font-bold">{questions.length}</span> أسئلة.
            </p>
            <p className="text-xl text-slate-400">
              نسبة التحصيل المعرفي: <span className="text-emerald-400 font-bold">{Math.round((score / questions.length) * 100)}%</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}