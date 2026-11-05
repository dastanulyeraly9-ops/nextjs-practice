"use client";

import { useState } from "react";
import AdminShell from "../AdminShell";

type Moderator = {
  id: number;
  name: string;
  email: string;
  department: string;
  status: string;
};

const initialModerators: Moderator[] = [
  {
    id: 1,
    name: "Арман Болат",
    email: "arman@gmail.com",
    department: "Өтінімдерді бақылау",
    status: "Белсенді",
  },
  {
    id: 2,
    name: "Айдана Серік",
    email: "aidana@gmail.com",
    department: "Пайдаланушыларды қолдау",
    status: "Белсенді",
  },
  {
    id: 3,
    name: "Мирас Қанат",
    email: "miras@gmail.com",
    department: "Дрондарды бақылау",
    status: "Белсенді",
  },
];

export default function ModeratorsPage() {
  const [moderators, setModerators] = useState(initialModerators);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("Өтінімдерді бақылау");

  function addModerator(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    setModerators((current) => [
      ...current,
      {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        department,
        status: "Белсенді",
      },
    ]);

    setName("");
    setEmail("");
    setDepartment("Өтінімдерді бақылау");
    setShowForm(false);
  }

  function toggleStatus(id: number) {
    setModerators((current) =>
      current.map((moderator) =>
        moderator.id === id
          ? {
              ...moderator,
              status:
                moderator.status === "Белсенді"
                  ? "Белсенді емес"
                  : "Белсенді",
            }
          : moderator
      )
    );
  }

  function deleteModerator(id: number) {
    if (confirm("Бұл модераторды өшіруге сенімдісіз бе?")) {
      setModerators((current) =>
        current.filter((moderator) => moderator.id !== id)
      );
    }
  }

  return (
    <AdminShell>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">Қызметкерлерді басқару</p>
          <h2 className="mt-2 text-3xl font-bold">Модераторлар</h2>
          <p className="mt-2 text-slate-400">
            Модераторларды қосу, басқару және олардың белсенділігін бақылау.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          + Модератор қосу
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={addModerator}
          className="mb-6 grid gap-4 rounded-2xl border border-cyan-500/20 bg-[#111c2d] p-5 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Аты-жөні
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Мысалы: Ерлан Асқар"
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Жауапты бөлім
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none"
            >
              <option>Өтінімдерді бақылау</option>
              <option>Пайдаланушыларды қолдау</option>
              <option>Дрондарды бақылау</option>
            </select>
          </div>

          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950"
            >
              Сақтау
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-xl bg-white/10 px-5 py-3"
            >
              Болдырмау
            </button>
          </div>
        </form>
      )}

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Барлық модератор</p>
          <p className="mt-2 text-3xl font-bold">{moderators.length}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Белсенді</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">
            {moderators.filter((m) => m.status === "Белсенді").length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Белсенді емес</p>
          <p className="mt-2 text-3xl font-bold text-amber-400">
            {moderators.filter((m) => m.status !== "Белсенді").length}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <h3 className="mb-5 text-lg font-bold">Модераторлар тізімі</h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <thead className="text-slate-500">
              <tr className="border-b border-white/10">
                <th className="py-3">ID</th>
                <th>Аты-жөні</th>
                <th>Email</th>
                <th>Жауапты бөлім</th>
                <th>Мәртебесі</th>
                <th>Әрекеттер</th>
              </tr>
            </thead>

            <tbody>
              {moderators.map((moderator) => (
                <tr key={moderator.id} className="border-b border-white/5">
                  <td className="py-4">{moderator.id}</td>
                  <td className="font-semibold">{moderator.name}</td>
                  <td className="text-slate-400">{moderator.email}</td>
                  <td>{moderator.department}</td>
                  <td>
                    <span
                      className={
                        moderator.status === "Белсенді"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }
                    >
                      {moderator.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleStatus(moderator.id)}
                        className="rounded-lg border border-white/10 px-3 py-2 text-xs hover:bg-white/10"
                      >
                        {moderator.status === "Белсенді"
                          ? "Тоқтату"
                          : "Қосу"}
                      </button>

                      <button
                        onClick={() => deleteModerator(moderator.id)}
                        className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10"
                      >
                        Өшіру
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}