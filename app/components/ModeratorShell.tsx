import Link from "next/link";
import type { ReactNode } from "react";

const menu = [
  ["Басты бет", "/moderator", "⌂"],
  ["Тапсырыстарды өңдеу", "/moderator/orders", "▤"],
  ["Жеткізуді бақылау", "/moderator/delivery", "↗"],
  ["Дрондар", "/moderator/drones", "◎"],
  ["Хабарламалар", "/moderator/messages", "✉"],
];

export default function ModeratorShell({
  children,
  activePath,
}: {
  children: ReactNode;
  activePath: string;
}) {
  return (
    <main className="min-h-screen bg-[#080d18] text-white flex">
      <aside className="hidden lg:flex w-64 shrink-0 bg-[#0d1525] border-r border-slate-800 flex-col p-5">
        <Link href="/" className="text-3xl font-bold mb-10">
          Q<span className="text-cyan-400">'</span>Fly
        </Link>

        <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
          Басқару мәзірі
        </p>

        <nav className="space-y-2">
          {menu.map(([label, href, icon]) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition ${
                activePath === href
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-800 pt-5">
          <p className="text-sm font-semibold">Moderator</p>
          <p className="text-xs text-slate-500 mt-1 mb-4">Demo аккаунт</p>
          <Link href="/logout" className="text-sm text-red-400">
            ↪ Жүйеден шығу
          </Link>
        </div>
      </aside>

      <section className="flex-1 min-w-0 p-5 sm:p-8 lg:p-10">
        <header className="mb-8 pr-24 sm:pr-32">
          <p className="text-cyan-400 text-sm mb-2">
            Q'FLY / MODERATOR
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Модератор кабинеті
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Өтінімдер мен жеткізу процесін басқару
          </p>
        </header>

        {children}

        <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
          {menu.map(([label, href, icon]) => (
            <Link
              key={href}
              href={href}
              className="bg-[#111a2b] border border-slate-800 rounded-xl p-3 text-sm"
            >
              <span className="text-cyan-400 mr-2">{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-slate-500 text-center mt-10">
          Q'Fly © 2026 · Демонстрациялық интерфейс
        </p>
      </section>
    </main>
  );
}