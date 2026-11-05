"use client";

import { useState } from "react";
import ModeratorShell from "../../components/ModeratorShell";

const initialDrones = [
  { id: "QF-001", location: "Жиембет жырау 2", status: "Бос" },
  { id: "QF-002", location: "Есіл ауданы", status: "Жеткізілуде" },
  { id: "QF-003", location: "Алматы ауданы", status: "Зарядталуда" },
  { id: "QF-004", location: "Сарыарқа ауданы", status: "Бос" },
  { id: "QF-005", location: "Байқоңыр ауданы", status: "Жеткізілуде" },
  { id: "QF-006", location: "Есіл ауданы", status: "Бос" },
];

export default function DronesPage() {
  const [drones, setDrones] = useState(initialDrones);

  function changeStatus(id: string) {
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
    <ModeratorShell activePath="/moderator/drones">
      <div>
        <h2 className="text-2xl font-bold">Дрондарды басқару</h2>
        <p className="text-sm text-slate-400 mt-2">
          Дрондардың жағдайы мен техникалық күйін бақылау
        </p>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {[
            ["Барлық дрон", drones.length],
            ["Бос", drones.filter((d) => d.status === "Бос").length],
            [
              "Жеткізілуде",
              drones.filter((d) => d.status === "Жеткізілуде").length,
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="text-3xl font-bold mt-3">{value}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5 mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-slate-500 border-b border-slate-700">
              <tr>
                <th className="py-4 pr-4">Дрон ID</th>
                <th className="py-4 pr-4">Орналасуы</th>
                <th className="py-4 pr-4">Күйі</th>
                <th className="py-4">Әрекет</th>
              </tr>
            </thead>

            <tbody>
              {drones.map((drone) => (
                <tr key={drone.id} className="border-b border-slate-800">
                  <td className="py-4 pr-4 font-bold">{drone.id}</td>
                  <td className="py-4 pr-4 text-slate-400">
                    {drone.location}
                  </td>
                  <td className="py-4 pr-4">
                    <span className="text-cyan-400">{drone.status}</span>
                  </td>
                  <td className="py-4">
                    {drone.status !== "Жеткізілуде" && (
                      <button
                        onClick={() => changeStatus(drone.id)}
                        className="bg-cyan-400/10 text-cyan-400 rounded-lg px-3 py-2"
                      >
                        Күйін өзгерту
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ModeratorShell>
  );
}