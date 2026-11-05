"use client";

import { useMemo, useState } from "react";
import ModeratorShell from "../../components/ModeratorShell";

type Status =
  | "Тексерілуде"
  | "Қабылданды"
  | "Жеткізілуде"
  | "Аяқталды"
  | "Қабылданбады"
  | "Болдырылмады";

type Order = {
  id: string;
  client: string;
  item: string;
  weight: string;
  date: string;
  address: string;
  status: Status;
  other: boolean;
};

const initialOrders: Order[] = [
  {
    id: "QF-1021",
    client: "Алихан Сәрсен",
    item: "Құжаттар",
    weight: "0.4 кг",
    date: "05.11.2026",
    address: "Есіл ауданы",
    status: "Тексерілуде",
    other: false,
  },
  {
    id: "QF-1022",
    client: "Айдана Мұрат",
    item: "Үй кілті",
    weight: "0.2 кг",
    date: "05.11.2026",
    address: "Алматы ауданы",
    status: "Қабылданды",
    other: false,
  },
  {
    id: "QF-1023",
    client: "Данияр Ермек",
    item: "Зарядтағыш",
    weight: "0.5 кг",
    date: "05.11.2026",
    address: "Сарыарқа ауданы",
    status: "Тексерілуде",
    other: true,
  },
  {
    id: "QF-1024",
    client: "Мирас Әли",
    item: "Әмиян",
    weight: "0.3 кг",
    date: "04.11.2026",
    address: "Есіл ауданы",
    status: "Жеткізілуде",
    other: false,
  },
  {
    id: "QF-1025",
    client: "Нұрсұлтан Бек",
    item: "Флешка",
    weight: "0.1 кг",
    date: "04.11.2026",
    address: "Байқоңыр ауданы",
    status: "Тексерілуде",
    other: true,
  },
  {
    id: "QF-1026",
    client: "Әсел Қанат",
    item: "Көзілдірік",
    weight: "0.2 кг",
    date: "03.11.2026",
    address: "Есіл ауданы",
    status: "Аяқталды",
    other: false,
  },
  {
    id: "QF-1027",
    client: "Ержан Төлеген",
    item: "Құлаққап",
    weight: "0.3 кг",
    date: "03.11.2026",
    address: "Алматы ауданы",
    status: "Қабылданбады",
    other: true,
  },
  {
    id: "QF-1028",
    client: "Аружан Нұр",
    item: "Көзілдірік қапшығы",
    weight: "0.2 кг",
    date: "02.11.2026",
    address: "Сарыарқа ауданы",
    status: "Болдырылмады",
    other: false,
  },
];

const statusColors: Record<Status, string> = {
  "Тексерілуде": "text-yellow-400 bg-yellow-400/10",
  "Қабылданды": "text-cyan-400 bg-cyan-400/10",
  "Жеткізілуде": "text-blue-400 bg-blue-400/10",
  "Аяқталды": "text-green-400 bg-green-400/10",
  "Қабылданбады": "text-red-400 bg-red-400/10",
  "Болдырылмады": "text-slate-400 bg-slate-400/10",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("Барлығы");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState<Order | null>(null);

  function updateStatus(id: string, status: Status) {
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );

    setSelected((current) =>
      current?.id === id ? { ...current, status } : current
    );
  }

  const filteredOrders = useMemo(() => {
    const result = orders.filter((order) => {
      const matchesFilter =
        filter === "Барлығы" ||
        (filter === "Иное" && order.other) ||
        order.status === filter;

      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.client.toLowerCase().includes(search.toLowerCase()) ||
        order.item.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });

    return [...result].sort((a, b) => {
      return sort === "newest"
        ? b.id.localeCompare(a.id)
        : a.id.localeCompare(b.id);
    });
  }, [orders, filter, search, sort]);

  const pending = orders.filter(
    (order) => order.status === "Тексерілуде"
  ).length;

  return (
    <ModeratorShell activePath="/moderator/orders">
      <div className="space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Тапсырыстарды өңдеу</h2>
            <p className="text-sm text-slate-400 mt-2">
              Клиенттердің тапсырыстарын тексеру және басқару
            </p>
          </div>

          <span className="rounded-xl bg-yellow-400/10 text-yellow-400 px-4 py-3 text-sm">
            Тексеруді күтуде: {pending}
          </span>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            ["Барлық тапсырыс", orders.length],
            ["Тексерілуде", pending],
            [
              "Жеткізілуде",
              orders.filter((o) => o.status === "Жеткізілуде").length,
            ],
            [
              "Аяқталды",
              orders.filter((o) => o.status === "Аяқталды").length,
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

        <div className="bg-[#111a2b] border border-slate-800 rounded-2xl p-5">
          <div className="flex flex-col lg:flex-row gap-3 mb-5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Тапсырыс №, клиент немесе зат бойынша іздеу..."
              className="flex-1 bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 text-sm"
            >
              <option>Барлығы</option>
              <option>Тексерілуде</option>
              <option>Қабылданды</option>
              <option>Жеткізілуде</option>
              <option>Аяқталды</option>
              <option>Қабылданбады</option>
              <option>Болдырылмады</option>
              <option>Иное</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#080d18] border border-slate-700 rounded-xl px-4 py-3 text-sm"
            >
              <option value="newest">Жаңадан ескіге</option>
              <option value="oldest">Ескіден жаңасына</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-slate-500 border-b border-slate-700">
                <tr>
                  <th className="py-4 pr-4">Тапсырыс №</th>
                  <th className="py-4 pr-4">Клиент</th>
                  <th className="py-4 pr-4">Зат</th>
                  <th className="py-4 pr-4">Салмақ</th>
                  <th className="py-4 pr-4">Күні</th>
                  <th className="py-4 pr-4">Күйі</th>
                  <th className="py-4">Әрекет</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-800 hover:bg-white/[0.02]"
                  >
                    <td className="py-4 pr-4 font-semibold whitespace-nowrap">
                      {order.id}
                    </td>
                    <td className="py-4 pr-4 whitespace-nowrap">
                      {order.client}
                    </td>
                    <td className="py-4 pr-4 whitespace-nowrap">
                      {order.item}
                      {order.other && (
                        <span className="ml-2 text-xs text-purple-400">
                          Иное
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-4">{order.weight}</td>
                    <td className="py-4 pr-4 whitespace-nowrap">
                      {order.date}
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => setSelected(order)}
                        className="text-cyan-400 hover:text-cyan-300 whitespace-nowrap"
                      >
                        Қарау →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredOrders.length === 0 && (
              <p className="text-center text-slate-500 py-10">
                Тапсырыстар табылмады.
              </p>
            )}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#111a2b] border border-slate-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Тапсырыс ақпараты</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-slate-400 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <p><span className="text-slate-400">Нөмірі:</span> {selected.id}</p>
              <p><span className="text-slate-400">Клиент:</span> {selected.client}</p>
              <p><span className="text-slate-400">Зат:</span> {selected.item}</p>
              <p><span className="text-slate-400">Салмағы:</span> {selected.weight}</p>
              <p><span className="text-slate-400">Мекенжай:</span> {selected.address}</p>
              <p>
                <span className="text-slate-400">Күйі:</span>{" "}
                <span className={statusColors[selected.status].split(" ")[0]}>
                  {selected.status}
                </span>
              </p>
            </div>

            {selected.other && (
              <div className="mt-5 bg-purple-400/10 border border-purple-400/20 rounded-xl p-4">
                <p className="text-purple-400 font-semibold mb-1">
                  Иное — арнайы тексеру
                </p>
                <p className="text-sm text-slate-300">
                  Бұл зат клиенттің стандартты тізімінде жоқ. Модератор
                  оның атауы мен сипаттамасын тексеруі керек.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-6">
              {selected.status === "Тексерілуде" && (
                <>
                  <button
                    onClick={() => updateStatus(selected.id, "Қабылданды")}
                    className="bg-green-500 hover:bg-green-400 text-white rounded-xl px-4 py-3 text-sm"
                  >
                    ✓ Қабылдау
                  </button>

                  <button
                    onClick={() => updateStatus(selected.id, "Қабылданбады")}
                    className="bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl px-4 py-3 text-sm"
                  >
                    ✕ Қабылдамау
                  </button>
                </>
              )}

              {!["Аяқталды", "Болдырылмады", "Қабылданбады"].includes(
                selected.status
              ) && (
                <button
                  onClick={() => updateStatus(selected.id, "Болдырылмады")}
                  className="bg-slate-700 hover:bg-slate-600 rounded-xl px-4 py-3 text-sm"
                >
                  Тапсырысты болдырмау
                </button>
              )}

              <button
                onClick={() => setSelected(null)}
                className="border border-slate-700 rounded-xl px-4 py-3 text-sm"
              >
                Жабу
              </button>
            </div>
          </div>
        </div>
      )}
    </ModeratorShell>
  );
}