
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Role = "user" | "moderator" | "admin";

const roles: {
  id: Role;
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "user",
    title: "User",
    description: "Жеткізуге өтінім беру",
    icon: "👤",
  },
  {
    id: "moderator",
    title: "Moderator",
    description: "Өтінімдерді басқару",
    icon: "🛡️",
  },
  {
    id: "admin",
    title: "Admin",
    description: "Жүйені басқару",
    icon: "⚙️",
  },
];

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState<Role>("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const routes: Record<Role, string> = {
      user: "/user",
      moderator: "/moderator",
      admin: "/admin",
    };

    // Таңдалған рөлді сақтау
    document.cookie = `qfly-role=${role}; path=/; max-age=86400; SameSite=Lax`;

    // Бұрын сұралған бетті тексеру
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");

    const destination =
      next && next.startsWith("/") && !next.startsWith("//")
        ? next
        : routes[role];

    router.push(destination);
  }

  return (
    <main className="min-h-screen bg-[#080d18] text-white flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">

        <div className="hidden md:block">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Q<span className="text-cyan-400">'</span>Fly
          </Link>

          <div className="mt-16">
            <div className="text-7xl mb-8">🚁</div>

            <h1 className="text-5xl font-bold leading-tight">
              Your items.
              <br />
              Your sky.
              <br />
              <span className="text-cyan-400">Your Q'Fly.</span>
            </h1>

            <p className="text-slate-400 mt-6 text-lg max-w-md">
              Ұмыт қалған заттарыңызды дрон арқылы жылдам әрі ыңғайлы жеткізіңіз.
            </p>
          </div>

          <div className="mt-12 flex gap-8 text-sm text-slate-400">
            <span>⚡ Жылдам жеткізу</span>
            <span>📍 10 км дейін</span>
            <span>📦 2 кг дейін</span>
          </div>
        </div>

        <div className="bg-[#111a2b] border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl">

          <div className="md:hidden mb-8">
            <Link href="/" className="text-3xl font-bold">
              Q<span className="text-cyan-400">'</span>Fly
            </Link>
          </div>

          <div className="mb-8">
            <p className="text-cyan-400 text-sm font-semibold mb-2">
              ҚОШ КЕЛДІҢІЗ!
            </p>

            <h2 className="text-3xl font-bold">
              Жүйеге кіру
            </h2>

            <p className="text-slate-400 mt-2">
              Аккаунтыңызға кіру үшін мәліметтерді енгізіңіз.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Құпиясөз
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөзді енгізіңіз"
                className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-3">
                Жүйеге қай рөлмен кіресіз?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {roles.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    className={`rounded-xl border p-3 text-left transition ${
                      role === item.id
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-slate-700 bg-[#080d18] hover:border-slate-500"
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      {item.icon}
                    </div>

                    <div className="font-semibold text-sm">
                      {item.title}
                    </div>

                    <div className="text-xs text-slate-500 mt-1">
                      {item.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl py-3.5 transition"
            >
              Жүйеге кіру →
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-7">
            Аккаунтыңыз жоқ па?{" "}
            <Link
              href="/register"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Тіркелу
            </Link>
          </p>

          <p className="text-center text-xs text-slate-600 mt-6">
            Demo нұсқасы · Демонстрациялық авторизация
          </p>

          <div className="text-center mt-5">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-cyan-400 transition"
            >
              ← Басты бетке қайту
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}