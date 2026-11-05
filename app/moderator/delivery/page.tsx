"use client";

import { useState } from "react";
import ModeratorShell from "../../components/ModeratorShell";

const drones = [
  { id: "QF-001", order: "QF-1021", top: "18%", left: "15%", delay: "0s" },
  { id: "QF-002", order: "QF-1022", top: "35%", left: "70%", delay: "1s" },
  { id: "QF-003", order: "QF-1023", top: "65%", left: "25%", delay: "2s" },
  { id: "QF-004", order: "QF-1024", top: "75%", left: "75%", delay: "3s" },
  { id: "QF-005", order: "QF-1025", top: "45%", left: "45%", delay: "1.5s" },
  { id: "QF-006", order: "QF-1026", top: "15%", left: "85%", delay: "2.5s" },
  { id: "QF-007", order: "QF-1027", top: "85%", left: "48%", delay: "0.5s" },
];

export default function DeliveryPage() {
  const [selected, setSelected] = useState("QF-001");

  return (
    <ModeratorShell activePath="/moderator/delivery">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Жеткізуді бақылау</h2>
          <p className="text-sm text-slate-400 mt-2">
            Астана қаласындағы белсенді дрондардың қозғалысы
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            ["Белсенді жеткізу", "7"],
            ["Ұшып жүрген дрон", "7"],
            ["Бос дрондар", "12"],
            ["Барлық дрон", "19"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="text-3xl font-bold mt-3 text-cyan-400">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5">
          <div className="flex flex-wrap justify-between gap-3 mb-5">
            <div>
              <h3 className="font-bold text-lg">Астана — дрондар картасы</h3>
              <p className="text-xs text-slate-500 mt-1">
                Демонстрациялық карта · Жалған координаттар
              </p>
            </div>

            <span className="text-green-400 text-sm">
              ● 7 дрон белсенді
            </span>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-2xl border border-slate-700 bg-[#101d2b]">
            {/* Карта жолдары */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute w-[120%] h-5 bg-slate-600/50 top-[25%] -left-10 rotate-12" />
              <div className="absolute w-[120%] h-4 bg-slate-600/50 top-[65%] -left-10 -rotate-12" />
              <div className="absolute h-[120%] w-5 bg-slate-600/50 left-[30%] top-0 rotate-12" />
              <div className="absolute h-[120%] w-4 bg-slate-600/50 left-[72%] top-0 -rotate-12" />
              <div className="absolute w-full h-2 bg-cyan-900/50 top-[48%] rotate-6" />
            </div>

            <div className="absolute top-5 left-5 z-10 bg-[#080d18]/90 rounded-xl px-4 py-3">
              <p className="font-bold text-sm">Астана қаласы</p>
              <p className="text-xs text-slate-400 mt-1">Жиембет жырау 2 — дрон хабы</p>
            </div>

            {/* Дрон хабы */}
            <div className="absolute z-10 top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-xl">
                🏢
              </div>
              <p className="text-xs text-cyan-300 mt-2 whitespace-nowrap">
                Q'Fly HUB
              </p>
            </div>

            {/* Қозғалатын дрондар */}
            {drones.map((drone, index) => (
              <button
                key={drone.id}
                onClick={() => setSelected(drone.id)}
                className={`drone-marker absolute z-20 rounded-full w-11 h-11 flex items-center justify-center text-xl border-2 ${
                  selected === drone.id
                    ? "bg-cyan-400 border-white scale-125"
                    : "bg-[#0b2034] border-cyan-400"
                }`}
                style={{
                  top: drone.top,
                  left: drone.left,
                  animationDelay: drone.delay,
                }}
                title={drone.id}
              >
                🚁
              </button>
            ))}

            <div className="absolute bottom-5 left-5 bg-[#080d18]/90 rounded-xl p-4 text-xs space-y-2">
              <p className="text-cyan-400">🚁 Дрон — жеткізілуде</p>
              <p className="text-green-400">● Белсенді</p>
              <p className="text-slate-400">🏢 Дрон хабы</p>
            </div>
          </div>

          <style jsx>{`
            @keyframes droneFly {
              0% { transform: translate(0, 0); }
              25% { transform: translate(28px, -18px); }
              50% { transform: translate(48px, 12px); }
              75% { transform: translate(18px, 30px); }
              100% { transform: translate(0, 0); }
            }

            .drone-marker {
              animation: droneFly 7s ease-in-out infinite;
            }
          `}</style>
        </div>

        <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5">
          <h3 className="font-bold text-lg mb-4">Белсенді дрондар</h3>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {drones.map((drone) => (
              <button
                key={drone.id}
                onClick={() => setSelected(drone.id)}
                className={`text-left rounded-xl p-4 border transition ${
                  selected === drone.id
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-slate-800 bg-[#080d18]"
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-bold">{drone.id}</span>
                  <span className="text-green-400 text-xs">● Ұшуда</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Тапсырыс: {drone.order}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#111a2b] border border-cyan-400/20 rounded-2xl p-5">
          <p className="text-sm text-slate-400">Таңдалған дрон</p>
          <h3 className="text-xl font-bold mt-2">{selected}</h3>
          <p className="text-sm text-cyan-400 mt-2">
            {drones.find((d) => d.id === selected)?.order} · Жеткізілуде
          </p>
        </div>
      </div>
    </ModeratorShell>
  );
}