"use client";

import { useState } from "react";
import AdminShell from "../AdminShell";

type Drone = {
  id: string;
  model: string;
  battery: number;
  status: string;
  location: string;
};

const initialDrones: Drone[] = [
  { id: "DR-001", model: "QFly Pro X1", battery: 95, status: "Бос", location: "Жиембет жырау 2" },
  { id: "DR-002", model: "QFly Pro X1", battery: 72, status: "Жеткізуде", location: "Есіл ауданы" },
  { id: "DR-003", model: "QFly Mini", battery: 43, status: "Зарядталуда", location: "Дрон орталығы" },
  { id: "DR-004", model: "QFly Pro X2", battery: 88, status: "Бос", location: "Жиембет жырау 2" },
];

export default function DronesPage() {
  const [drones, setDrones] = useState(initialDrones);

  function changeStatus(id: string, status: string) {
    setDrones((current) =>
      current.map((drone) =>
        drone.id === id ? { ...drone, status } : drone
      )
    );
  }

  return (
    <AdminShell>
      <div className="mb-7">
        <p className="text-sm text-cyan-400">Ұшу инфрақұрылымы</p>
        <h2 className="mt-2 text-3xl font-bold">Дрондар және карта</h2>
        <p className="mt-2 text-slate-400">
          Дрондардың жағдайын, қуатын және орналасуын бақылау.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Барлық дрондар</p>
          <p className="mt-2 text-3xl font-bold">{drones.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Бос дрондар</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">
            {drones.filter((d) => d.status === "Бос").length}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <p className="text-sm text-slate-400">Жеткізудегі дрондар</p>
          <p className="mt-2 text-3xl font-bold text-cyan-400">
            {drones.filter((d) => d.status === "Жеткізуде").length}
          </p>
        </div>
      </div>

      <section className="mb-6 rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <h3 className="mb-4 text-lg font-bold">Дрон орталығының картасы</h3>

        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0b1728]">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          <div className="relative z-10 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-5 text-center">
            <div className="text-4xl">🚁</div>
            <p className="mt-2 font-bold text-cyan-300">Q'Fly дрон орталығы</p>
            <p className="mt-1 text-sm text-slate-400">Жиембет жырау 2</p>
            <span className="mt-3 inline-block rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">
              Орталық белсенді
            </span>
          </div>

          <div className="absolute left-[12%] top-[20%] text-2xl">📍</div>
          <div className="absolute right-[15%] top-[25%] text-2xl">📍</div>
          <div className="absolute bottom-[18%] left-[25%] text-2xl">📍</div>
          <div className="absolute bottom-[15%] right-[22%] text-2xl">📍</div>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Ескерту: бұл әзірге демонстрациялық карта, нақты GPS деректері қосылмаған.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <h3 className="mb-5 text-lg font-bold">Дрондар тізімі</h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="text-slate-500">
              <tr className="border-b border-white/10">
                <th className="py-3">Дрон ID</th>
                <th>Моделі</th>
                <th>Батарея</th>
                <th>Орналасуы</th>
                <th>Мәртебесі</th>
              </tr>
            </thead>

            <tbody>
              {drones.map((drone) => (
                <tr key={drone.id} className="border-b border-white/5">
                  <td className="py-4 font-semibold">{drone.id}</td>
                  <td>{drone.model}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${
                            drone.battery < 50 ? "bg-amber-400" : "bg-emerald-400"
                          }`}
                          style={{ width: `${drone.battery}%` }}
                        />
                      </div>
                      <span>{drone.battery}%</span>
                    </div>
                  </td>
                  <td className="text-slate-400">{drone.location}</td>
                  <td>
                    <select
                      value={drone.status}
                      onChange={(e) => changeStatus(drone.id, e.target.value)}
                      className="rounded-lg border border-white/10 bg-[#080d19] px-2 py-2 text-xs outline-none"
                    >
                      <option>Бос</option>
                      <option>Жеткізуде</option>
                      <option>Зарядталуда</option>
                      <option>Техникалық тексеруде</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}