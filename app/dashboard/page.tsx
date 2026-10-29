
import Link from "next/link";

const drones = [
  { id: "QF-001", status: "Бос", color: "bg-emerald-100 text-emerald-700" },
  { id: "QF-002", status: "Бос", color: "bg-emerald-100 text-emerald-700" },
  { id: "QF-003", status: "Зарядталуда", color: "bg-amber-100 text-amber-700" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] px-5 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-semibold text-blue-700">
          ← Q'Fly басты беті
        </Link>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Q'Fly бақылау орталығы
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Дрондар картасы
            </h1>
            <p className="mt-2 text-slate-600">
              Астана қаласындағы хабтың орналасуы және дрондардың демо күйі.
            </p>
          </div>

          <Link
            href="/delivery"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Жеткізуге тапсырыс беру
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-bold">Астана қаласының картасы</h2>
              <p className="mt-1 text-sm text-slate-600">
                Хаб мекенжайы: Жиембет жырау, 2
              </p>
            </div>

            <iframe
              title="Астана қаласының картасы"
              src="https://www.openstreetmap.org/export/embed.html?bbox=71.35%2C51.10%2C71.52%2C51.19&layer=mapnik&marker=51.136%2C71.430"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />

            <div className="p-5 text-sm text-slate-500">
              Карта OpenStreetMap арқылы көрсетіледі. Маркердің нақты мекенжайға
              сәйкестігін жобаны таныстырмас бұрын тексеріңіз.
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Дрондардың күйі</h2>
            <p className="mt-2 text-sm text-slate-500">
              Төмендегі мәліметтер — демонстрациялық деректер. Нақты дрондардан
              алынған ақпарат емес.
            </p>

            <div className="mt-5 space-y-3">
              {drones.map((drone) => (
                <div
                  key={drone.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4"
                >
                  <div>
                    <p className="font-bold">{drone.id}</p>
                    <p className="mt-1 text-sm text-slate-500">Q'Fly дроны</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${drone.color}`}>
                    {drone.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-4">
              <p className="font-semibold text-blue-900">Жобаның шектеулері</p>
              <p className="mt-2 text-sm leading-6 text-blue-800">
                Бұл нұсқада дрондарды нақты уақыт режимінде бақылау және
                жеткізу маршрутын есептеу әлі іске қосылмаған.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-8 border-t border-slate-200 py-5 text-sm text-slate-500">
          Q'Fly © 2026 · Демонстрациялық жоба
        </footer>
      </div>
    </main>
  );
}