"use client";

import { useState } from "react";
import AdminShell from "../AdminShell";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("Q'Fly");
  const [maxWeight, setMaxWeight] = useState("2");
  const [maxDistance, setMaxDistance] = useState("10");
  const [maintenance, setMaintenance] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  function saveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <AdminShell>
      <div className="mb-7">
        <p className="text-sm text-cyan-400">Жүйені басқару</p>
        <h2 className="mt-2 text-3xl font-bold">Жүйе баптаулары</h2>
        <p className="mt-2 text-slate-400">
          Q'Fly платформасының негізгі параметрлерін басқару.
        </p>
      </div>

      <form onSubmit={saveSettings} className="space-y-6">
        <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="mb-5 text-lg font-bold">Жалпы баптаулар</h3>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Сайт атауы
              </label>
              <input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Максималды жүк салмағы (кг)
              </label>
              <input
                type="number"
                min="0.1"
                max="2"
                step="0.1"
                value={maxWeight}
                onChange={(e) => setMaxWeight(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Максималды жеткізу қашықтығы (км)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={maxDistance}
                onChange={(e) => setMaxDistance(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="mb-5 text-lg font-bold">Хабарландырулар</h3>

          <label className="flex cursor-pointer items-center justify-between gap-4 border-b border-white/5 py-4">
            <div>
              <p className="font-medium">Әкімші хабарландырулары</p>
              <p className="mt-1 text-sm text-slate-400">
                Жаңа өтінімдер туралы хабар алу.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-5 w-5 accent-cyan-400"
            />
          </label>

          <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
            <div>
              <p className="font-medium">Техникалық қызмет режимі</p>
              <p className="mt-1 text-sm text-slate-400">
                Қосылған кезде сайт техникалық қызмет режимінде болады.
              </p>
            </div>

            <input
              type="checkbox"
              checked={maintenance}
              onChange={(e) => setMaintenance(e.target.checked)}
              className="h-5 w-5 accent-cyan-400"
            />
          </label>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="mb-3 text-lg font-bold">Қауіпсіздік</h3>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Әкімші рұқсаты</p>
              <p className="mt-1 text-sm text-slate-400">
                Бұл бөлім тек әкімшіге арналған.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">
              Қорғалған
            </span>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Өзгерістерді сақтау
          </button>

          {saved && (
            <span className="text-sm text-emerald-400">
              ✓ Баптаулар сақталды!
            </span>
          )}
        </div>
      </form>

      <p className="mt-5 text-xs text-slate-500">
        Ескерту: бұл демонстрациялық баптаулар. Деректер серверге сақталмайды.
      </p>
    </AdminShell>
  );
}