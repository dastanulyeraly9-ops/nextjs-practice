"use client";

import AdminShell from "../AdminShell";

const monthlyData = [
  { month: "Мамыр", orders: 35 },
  { month: "Маусым", orders: 52 },
  { month: "Шілде", orders: 68 },
  { month: "Тамыз", orders: 45 },
  { month: "Қыркүйек", orders: 82 },
  { month: "Қазан", orders: 96 },
];

const maxOrders = Math.max(...monthlyData.map((item) => item.orders));

export default function AnalyticsPage() {
  return (
    <AdminShell>
      <div className="mb-7">
        <p className="text-sm text-cyan-400">Статистика және есеп</p>
        <h2 className="mt-2 text-3xl font-bold">Аналитика</h2>
        <p className="mt-2 text-slate-400">
          Q'Fly қызметінің негізгі көрсеткіштері мен статистикасы.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Жалпы өтінімдер</p>
          <p className="mt-2 text-3xl font-bold">1 284</p>
          <p className="mt-2 text-xs text-emerald-400">↑ 14% өткен аймен салыстырғанда</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Сәтті жеткізулер</p>
          <p className="mt-2 text-3xl font-bold">1 106</p>
          <p className="mt-2 text-xs text-emerald-400">86% сәттілік көрсеткіші</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Белсенді пайдаланушылар</p>
          <p className="mt-2 text-3xl font-bold">842</p>
          <p className="mt-2 text-xs text-cyan-400">Тіркелген пайдаланушылар</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Орташа жеткізу уақыты</p>
          <p className="mt-2 text-3xl font-bold">18 мин</p>
          <p className="mt-2 text-xs text-emerald-400">Жоспарланған уақыт ішінде</p>
        </div>
      </div>

      <section className="mt-6 rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <h3 className="text-lg font-bold">Айлар бойынша өтінімдер</h3>
        <p className="mt-1 text-sm text-slate-400">
          Соңғы алты айдағы өтінімдер саны
        </p>

        <div className="mt-8 flex h-64 items-end justify-around gap-3 border-b border-l border-white/10 px-3">
          {monthlyData.map((item) => (
            <div
              key={item.month}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <span className="text-xs text-slate-300">{item.orders}</span>
              <div
                className="w-full max-w-14 rounded-t-lg bg-cyan-500 transition-all hover:bg-cyan-300"
                style={{
                  height: `${(item.orders / maxOrders) * 75}%`,
                }}
              />
              <span className="text-center text-[10px] text-slate-500 sm:text-xs">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="mb-5 text-lg font-bold">Өтінім мәртебелері</h3>

          {[
            { name: "Аяқталды", value: 86, color: "bg-emerald-400" },
            { name: "Жеткізілуде", value: 9, color: "bg-cyan-400" },
            { name: "Күтуде", value: 4, color: "bg-amber-400" },
            { name: "Қабылданбады", value: 1, color: "bg-red-400" },
          ].map((item) => (
            <div key={item.name} className="mb-5">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="mb-5 text-lg font-bold">Жүйе тиімділігі</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Дрондардың қолжетімділігі</span>
              <span className="font-semibold text-emerald-400">96%</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Орташа батарея деңгейі</span>
              <span className="font-semibold text-cyan-400">78%</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Модератор белсенділігі</span>
              <span className="font-semibold text-emerald-400">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Қызмет сапасы</span>
              <span className="font-semibold text-emerald-400">98%</span>
            </div>
          </div>
        </section>
      </div>

      <p className="mt-5 text-xs text-slate-500">
        Ескерту: аналитикадағы сандар демонстрациялық деректер болып табылады.
      </p>
    </AdminShell>
  );
}