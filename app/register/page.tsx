
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Құпиясөздер бірдей емес!");
      return;
    }

    if (password.length < 6) {
      setError("Құпиясөз кемінде 6 таңбадан тұруы керек.");
      return;
    }

    router.push("/user");
  }

  return (
    <main className="min-h-screen bg-[#080d18] text-white flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-xl bg-[#111a2b] border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl">
        <Link href="/" className="text-3xl font-bold">
          Q<span className="text-cyan-400">'</span>Fly
        </Link>

        <div className="mt-8 mb-7">
          <p className="text-cyan-400 text-sm font-semibold mb-2">
            Q'FLY ПЛАТФОРМАСЫ
          </p>
          <h1 className="text-3xl font-bold">Тіркелу</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Жаңа аккаунт ашып, жеткізу қызметін пайдаланыңыз.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Толық аты-жөніңіз
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Аты-жөніңізді енгізіңіз"
              className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

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
              className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Телефон нөмірі
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 700 000 00 00"
              className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Құпиясөз
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Кемінде 6 таңба"
              className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Құпиясөзді қайталаңыз
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Құпиясөзді қайта енгізіңіз"
              className="w-full bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl py-3.5 transition"
          >
            Аккаунт ашу →
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-7">
          Аккаунтыңыз бар ма?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Жүйеге кіру
          </Link>
        </p>

        <p className="text-center text-xs text-slate-600 mt-6">
          Demo нұсқасы · Мәліметтер серверге сақталмайды
        </p>
      </div>
    </main>
  );
}