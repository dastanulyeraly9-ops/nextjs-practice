
"use client";

import Link from "next/link";
import { useState } from "react";

export default function DeliveryPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Өтінім демо режимінде толтырылды. Нақты тапсырыс әлі жіберілген жоқ.");
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-5 py-8 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-semibold text-blue-700">
          ← Q'Fly басты беті
        </Link>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Q'Fly жеткізу қызметі
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Жеткізуге тапсырыс беру
          </h1>
          <p className="mt-3 text-slate-600">
            Жеткізгіңіз келетін зат туралы мәліметтерді толтырыңыз.
            Демонстрациялық нұсқада нақты тапсырыс жіберілмейді.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block font-medium">Заттың сипаттамасы</label>
              <input
                required
                placeholder="Мысалы: кілт, құжат, кітап"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Салмағы (кг)</label>
                <input
                  required
                  type="number"
                  min="0.01"
                  max="2"
                  step="0.01"
                  placeholder="Мысалы: 0.5"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
                <p className="mt-1 text-xs text-slate-500">Демо шектеуі: 2 кг-ға дейін</p>
              </div>

              <div>
                <label className="mb-2 block font-medium">Қаптама түрі</label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="" disabled>Таңдаңыз</option>
                  <option>Қорап</option>
                  <option>Пакет</option>
                  <option>Конверт</option>
                  <option>Басқа</option>
                </select>
              </div>
            </div>

            <div>
              <p className="mb-2 font-medium">Заттың өлшемдері (см)</p>
              <div className="grid grid-cols-3 gap-3">
                <input required type="number" min="1" placeholder="Ұзындығы" aria-label="Ұзындығы, см" className="min-w-0 rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-blue-500" />
                <input required type="number" min="1" placeholder="Ені" aria-label="Ені, см" className="min-w-0 rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-blue-500" />
                <input required type="number" min="1" placeholder="Биіктігі" aria-label="Биіктігі, см" className="min-w-0 rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Жіберушінің мекенжайы</label>
              <input required placeholder="Қай жерден алып кету керек?" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label className="mb-2 block font-medium">Алушының мекенжайы</label>
              <input required placeholder="Қай жерге жеткізу керек?" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label className="mb-2 block font-medium">Байланыс телефоны</label>
              <input required type="tel" placeholder="+7 7XX XXX XX XX" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
            </div>

            <button type="submit" className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700">
              Өтінімді тексеру
            </button>

            {message && (
              <p role="status" className="rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}