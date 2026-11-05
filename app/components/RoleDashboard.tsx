
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Role = "user" | "moderator" | "admin";

type Props = {
  role: Role;
};

const config = {
  user: {
    title: "Пайдаланушы кабинеті",
    subtitle: "Жеткізу қызметін пайдалану",
    menu: [
      ["Басты бет", "/user", "⌂"],
      ["Өтінім беру", "/delivery", "＋"],
      ["Менің тапсырыстарым", "/orders", "▤"],
      ["Дрондар картасы", "/dashboard", "◎"],
    ],
    stats: [
      ["Менің тапсырыстарым", "12", "▤"],
      ["Жеткізілуде", "2", "↗"],
      ["Аяқталған", "10", "✓"],
    ],
  },
  moderator: {
    title: "Модератор кабинеті",
    subtitle: "Өтінімдер мен жеткізу процесін бақылау",
    menu: [
      ["Басты бет", "/moderator", "⌂"],
      ["Тапсырыстарды өңдеу", "/moderator/orders", "▤"],
      ["Жеткізуді бақылау", "/moderator/delivery", "↗"],
      ["Дрондар", "/moderator/drones", "◎"],
      ["Хабарламалар", "/moderator/messages", "✉"],
    ],
    stats: [
      ["Қаралуда", "5", "◷"],
      ["Бүгін аяқталған", "24", "✓"],
    ],
  },
  admin: {
    title: "Әкімші кабинеті",
    subtitle: "Q'Fly платформасын басқару",
    menu: [
      ["Басты бет", "/admin", "⌂"],
      ["Пайдаланушылар", "#users", "♙"],
      ["Рөлдерді тағайындау", "#roles", "♧"],
      ["Модераторлар", "#moderators", "♟"],
      ["Барлық тапсырыстар", "#all-orders", "▤"],
      ["Дрондарды басқару", "#drones", "◎"],
      ["Жүйе баптаулары", "#settings", "⚙"],
    ],
    stats: [
      ["Пайдаланушылар", "1 248", "♙"],
      ["Барлық тапсырыс", "3 562", "▤"],
      ["Белсенді дрондар", "18", "✦"],
    ],
  },
};

const initialUsers = [
  { id: 1, name: "Алихан Сәрсен", email: "alikhan@mail.kz", role: "user" },
  { id: 2, name: "Айдана Мұрат", email: "aidana@mail.kz", role: "moderator" },
  { id: 3, name: "Данияр Ермек", email: "daniyar@mail.kz", role: "user" },
  { id: 4, name: "Мирас Әли", email: "miras@mail.kz", role: "admin" },
];

const initialDrones = [
  { id: "QF-001", location: "Астана, Есіл ауданы", status: "Бос" },
  { id: "QF-002", location: "Астана, Алматы ауданы", status: "Жеткізуде" },
  { id: "QF-003", location: "Жиембет жырау 2", status: "Зарядталуда" },
  { id: "QF-004", location: "Астана, Сарыарқа ауданы", status: "Бос" },
];

export default function RoleDashboard({ role }: Props) {
  const info = config[role];
  const pathname = usePathname();

  const [users, setUsers] = useState(initialUsers);
  const [drones, setDrones] = useState(initialDrones);

  function changeUserRole(id: number, newRole: string) {
    setUsers((current) =>
      current.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  }

  function changeDroneStatus(id: string) {
    setDrones((current) =>
      current.map((drone) =>
        drone.id === id
          ? {
              ...drone,
              status:
                drone.status === "Бос"
                  ? "Техникалық қызметте"
                  : "Бос",
            }
          : drone
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#080d18] text-white flex">
      {/* Сол жақ мәзір */}
      <aside className="hidden lg:flex w-64 shrink-0 bg-[#0d1525] border-r border-slate-800 flex-col p-5">
        <Link href="/" className="text-3xl font-bold mb-10">
          Q<span className="text-cyan-400">'</span>Fly
        </Link>

        <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
          Басқару мәзірі
        </p>

        <nav className="space-y-2">
          {info.menu.map(([label, href, icon]) => {
            const active =
              pathname === href ||
              (href !== "/moderator" &&
                href !== "/user" &&
                pathname.startsWith(href + "/"));

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition ${
                  active
                    ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-xl">{icon}</span>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-slate-800 pt-5">
          <p className="text-sm font-semibold">
            {role === "user"
              ? "User"
              : role === "moderator"
                ? "Moderator"
                : "Admin"}
          </p>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Demo аккаунт
          </p>
          <Link
            href="/logout"
            className="text-sm text-red-400 hover:text-red-300"
          >
            ↪ Жүйеден шығу
          </Link>
        </div>
      </aside>

      <section className="flex-1 min-w-0 p-5 sm:p-8 lg:p-10">
        {/* Жоғарғы тақырып */}
        <header className="mb-9 pr-4">
          <p className="text-cyan-400 text-sm mb-2">
            Q'FLY / {role.toUpperCase()}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold">
            {info.title}
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            {info.subtitle}
          </p>
        </header>

        {/* Статистика */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          {info.stats.map(([label, value, icon]) => (
            <div
              key={label}
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between mb-5">
                <p className="text-sm text-slate-400">{label}</p>
                <span className="text-cyan-400 text-2xl">{icon}</span>
              </div>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-xs text-slate-500 mt-2">
                Демо көрсеткіші
              </p>
            </div>
          ))}
        </div>

        {/* Пайдаланушы бөлімі */}
        {role === "user" && (
          <>
            <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-7 mb-6">
              <p className="text-4xl mb-4">🚁</p>
              <h2 className="text-2xl font-bold mb-3">
                Затыңызды дрон арқылы жеткізіңіз
              </h2>
              <p className="text-slate-400 text-sm mb-6 max-w-xl">
                Ұмыт қалған тұрмыстық затыңызды 2 кг-ға дейін
                және 10 км қашықтыққа жеткізуге өтінім беріңіз.
              </p>
              <Link
                href="/delivery"
                className="inline-block bg-cyan-400 text-slate-950 font-bold rounded-xl px-6 py-3 hover:bg-cyan-300"
              >
                Жаңа өтінім беру →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Link
                href="/orders"
                className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400"
              >
                <h3 className="font-bold text-lg mb-2">
                  Менің тапсырыстарым
                </h3>
                <p className="text-sm text-slate-400">
                  Тапсырыстардың күйін және тарихын қарау.
                </p>
              </Link>

              <Link
                href="/dashboard"
                className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400"
              >
                <h3 className="font-bold text-lg mb-2">
                  Дрондар картасы
                </h3>
                <p className="text-sm text-slate-400">
                  Дрондардың орналасуын картадан бақылау.
                </p>
              </Link>
            </div>
          </>
        )}

        {/* Модератордың басты беті */}
        {role === "moderator" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold">
                  Модератордың басқару панелі
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Қажетті бөлімді таңдап, жұмысты бастаңыз.
                </p>
              </div>
              <span className="hidden sm:inline-flex text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2">
                Жүйе белсенді
              </span>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              <Link
                href="/moderator/orders"
                className="group bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-[#142137] transition"
              >
                <span className="text-3xl">📋</span>
                <h2 className="text-lg font-bold mt-4 mb-2">
                  Тапсырыстарды өңдеу
                </h2>
                <p className="text-sm text-slate-400">
                  Жаңа тапсырыстарды тексеру, қабылдау және қабылдамау.
                </p>
                <p className="text-cyan-400 text-sm mt-5 group-hover:translate-x-1 transition">
                  Бөлімді ашу →
                </p>
              </Link>

              <Link
                href="/moderator/delivery"
                className="group bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-[#142137] transition"
              >
                <span className="text-3xl">🚁</span>
                <h2 className="text-lg font-bold mt-4 mb-2">
                  Жеткізуді бақылау
                </h2>
                <p className="text-sm text-slate-400">
                  Астана картасынан дрондардың қозғалысын бақылау.
                </p>
                <p className="text-cyan-400 text-sm mt-5 group-hover:translate-x-1 transition">
                  Картаны ашу →
                </p>
              </Link>

              <Link
                href="/moderator/drones"
                className="group bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-[#142137] transition"
              >
                <span className="text-3xl">🛸</span>
                <h2 className="text-lg font-bold mt-4 mb-2">
                  Дрондарды басқару
                </h2>
                <p className="text-sm text-slate-400">
                  Дрондардың техникалық жағдайы мен жұмыс күйі.
                </p>
                <p className="text-cyan-400 text-sm mt-5 group-hover:translate-x-1 transition">
                  Бөлімді ашу →
                </p>
              </Link>

              <Link
                href="/moderator/messages"
                className="group bg-[#111a2b] border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-[#142137] transition"
              >
                <span className="text-3xl">✉️</span>
                <h2 className="text-lg font-bold mt-4 mb-2">
                  Хабарламалар мен шағымдар
                </h2>
                <p className="text-sm text-slate-400">
                  Клиенттердің сұрақтары мен шағымдарын қарау.
                </p>
                <p className="text-cyan-400 text-sm mt-5 group-hover:translate-x-1 transition">
                  Бөлімді ашу →
                </p>
              </Link>
            </div>
          </div>
        )}

        {/* Әкімші бөлімі */}
        {role === "admin" && (
          <>
            <div
              id="users"
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6 mb-6"
            >
              <h2 className="text-xl font-bold mb-1">
                Пайдаланушыларды басқару
              </h2>
              <p className="text-sm text-slate-400 mb-5">
                Тіркелген аккаунттар және олардың жүйедегі рөлдері.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-slate-500 border-b border-slate-700">
                    <tr>
                      <th className="py-3 pr-4">Аты-жөні</th>
                      <th className="py-3 pr-4">Email</th>
                      <th className="py-3">Рөлі</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-slate-800"
                      >
                        <td className="py-4 pr-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="py-4 pr-4 text-slate-400">
                          {user.email}
                        </td>
                        <td className="py-4">
                          <select
                            value={user.role}
                            onChange={(e) =>
                              changeUserRole(user.id, e.target.value)
                            }
                            className="bg-[#080d18] border border-slate-700 rounded-lg px-3 py-2 text-white"
                          >
                            <option value="user">User</option>
                            <option value="moderator">Moderator</option>
                            <option value="admin">Admin</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              id="roles"
              className="grid md:grid-cols-2 gap-5 mb-6"
            >
              <div
                id="moderators"
                className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">
                  Рөлдерді тағайындау
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Пайдаланушыға User, Moderator немесе Admin рөлін
                  таңдауға болады.
                </p>
                <span className="text-cyan-400 text-sm">
                  Рөлді өзгерту кестесі жоғарыда орналасқан.
                </span>
              </div>

              <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Модераторлар
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Қазіргі демо жүйеде 6 модератор тіркелген.
                </p>
                <span className="text-cyan-400 text-sm">
                  Модератор рөлін пайдаланушы кестесінен беруге болады.
                </span>
              </div>
            </div>

            <div
              id="all-orders"
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6 mb-6"
            >
              <h3 className="font-bold text-lg mb-2">
                Барлық тапсырыстар
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Жүйедегі барлық жеткізу өтінімдерін бақылау.
              </p>
              <Link
                href="/orders"
                className="text-cyan-400 text-sm"
              >
                Тапсырыстар тізімін ашу →
              </Link>
            </div>

            <div
              id="drones"
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6 mb-6"
            >
              <h2 className="text-xl font-bold mb-1">
                Дрондарды басқару
              </h2>
              <p className="text-sm text-slate-400 mb-5">
                Дронның жұмыс күйін демо режимінде өзгертуге болады.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-slate-500 border-b border-slate-700">
                    <tr>
                      <th className="py-3 pr-4">Дрон ID</th>
                      <th className="py-3 pr-4">Орналасқан жері</th>
                      <th className="py-3 pr-4">Күйі</th>
                      <th className="py-3">Әрекет</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drones.map((drone) => (
                      <tr
                        key={drone.id}
                        className="border-b border-slate-800"
                      >
                        <td className="py-4 pr-4 font-semibold">
                          {drone.id}
                        </td>
                        <td className="py-4 pr-4 text-slate-400 whitespace-nowrap">
                          {drone.location}
                        </td>
                        <td className="py-4 pr-4">
                          {drone.status}
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => changeDroneStatus(drone.id)}
                            className="rounded-lg bg-cyan-400/10 text-cyan-400 px-3 py-2 hover:bg-cyan-400/20 whitespace-nowrap"
                          >
                            Күйін өзгерту
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              id="settings"
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="font-bold text-lg mb-2">
                Жүйе баптаулары
              </h3>
              <p className="text-sm text-slate-400">
                Жеткізу шектеулері: максималды салмақ — 2 кг,
                қашықтық — 10 км.
              </p>
            </div>
          </>
        )}

        {/* Телефонға арналған мәзір */}
        <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
          {info.menu.map(([label, href, icon]) => (
            <Link
              key={label}
              href={href}
              className={`border rounded-xl p-3 text-sm transition ${
                pathname === href
                  ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400"
                  : "bg-[#111a2b] border-slate-800 text-slate-300"
              }`}
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