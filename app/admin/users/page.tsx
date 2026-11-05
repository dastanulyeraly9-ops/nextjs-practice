"use client";

import { useState } from "react";
import AdminShell from "../AdminShell";

const initialUsers = [
  { id: 1, name: "Аян Нұрлан", email: "ayan@gmail.com", role: "Пайдаланушы", status: "Белсенді" },
  { id: 2, name: "Дана Ермек", email: "dana@gmail.com", role: "Пайдаланушы", status: "Белсенді" },
  { id: 3, name: "Арман Болат", email: "arman@gmail.com", role: "Модератор", status: "Белсенді" },
  { id: 4, name: "Мирас Асқар", email: "miras@gmail.com", role: "Пайдаланушы", status: "Бұғатталған" },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
  );

  function toggleStatus(id: number) {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Белсенді" ? "Бұғатталған" : "Белсенді" }
          : user
      )
    );
  }

  return (
    <AdminShell>
      <div className="mb-7">
        <p className="text-sm text-cyan-400">Әкімшілік басқару</p>
        <h2 className="mt-2 text-3xl font-bold">Пайдаланушылар</h2>
        <p className="mt-2 text-slate-400">Тіркелген пайдаланушыларды басқару.</p>
      </div>

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Барлық пайдаланушы</p>
          <p className="mt-2 text-3xl font-bold">{users.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Белсенді</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">
            {users.filter((u) => u.status === "Белсенді").length}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Бұғатталған</p>
          <p className="mt-2 text-3xl font-bold text-red-400">
            {users.filter((u) => u.status === "Бұғатталған").length}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Аты немесе email бойынша іздеу..."
          className="mb-5 w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 text-white outline-none focus:border-cyan-400"
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="text-slate-500">
              <tr className="border-b border-white/10">
                <th className="py-3">ID</th>
                <th>Аты-жөні</th>
                <th>Email</th>
                <th>Рөлі</th>
                <th>Мәртебесі</th>
                <th>Әрекет</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/5">
                  <td className="py-4">{user.id}</td>
                  <td className="font-semibold">{user.name}</td>
                  <td className="text-slate-400">{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={user.status === "Белсенді" ? "text-emerald-400" : "text-red-400"}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs hover:bg-white/10"
                    >
                      {user.status === "Белсенді" ? "Бұғаттау" : "Қайта қосу"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <p className="py-8 text-center text-slate-500">Пайдаланушы табылмады.</p>
          )}
        </div>
      </div>
    </AdminShell>
  );
}