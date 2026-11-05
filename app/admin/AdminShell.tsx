"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "Басты бет", href: "/admin", icon: "⌂" },
  { title: "Пайдаланушылар", href: "/admin/users", icon: "👥" },
  { title: "Өтінімдер", href: "/admin/orders", icon: "📦" },
  { title: "Дрондар және карта", href: "/admin/drones", icon: "🚁" },
  { title: "Модераторлар", href: "/admin/moderators", icon: "🛡️" },
  { title: "Аналитика", href: "/admin/analytics", icon: "📊" },
  { title: "Жүйе баптаулары", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#080d19] text-white md:flex">
      <aside className="w-full border-b border-white/10 bg-[#101827] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <Link href="/admin" className="mb-8 block text-2xl font-black">
          Q'Fly <span className="text-cyan-400">Admin</span>
        </Link>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Басқару панелі
        </p>

        <nav className="grid grid-cols-2 gap-2 md:grid-cols-1">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  active
                    ? "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.icon}</span>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 p-5 md:p-8">
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-sm text-slate-500">Q'Fly басқару жүйесі</p>
            <h1 className="text-xl font-bold">Әкімші панелі</h1>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/5"
          >
            Сайтқа қайту
          </Link>
        </header>

        {children}
      </main>
    </div>
  );
}