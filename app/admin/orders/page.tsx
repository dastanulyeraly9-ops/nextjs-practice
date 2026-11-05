"use client";

import { useState } from "react";
import AdminShell from "../AdminShell";

type Order = {
  id: string;
  user: string;
  item: string;
  weight: string;
  address: string;
  status: string;
};

const initialOrders: Order[] = [
  {
    id: "QF-1024",
    user: "Аян Нұрлан",
    item: "Құжат салынған пакет",
    weight: "0.5 кг",
    address: "Есіл ауданы, Астана",
    status: "Жеткізілуде",
  },
  {
    id: "QF-1023",
    user: "Дана Ермек",
    item: "Ұмыт қалған кілт",
    weight: "0.2 кг",
    address: "Сарыарқа ауданы, Астана",
    status: "Күтуде",
  },
  {
    id: "QF-1022",
    user: "Арман Болат",
    item: "Шағын сөмке",
    weight: "1.5 кг",
    address: "Алматы ауданы, Астана",
    status: "Аяқталды",
  },
  {
    id: "QF-1021",
    user: "Мирас Асқар",
    item: "Құжаттар",
    weight: "0.3 кг",
    address: "Байқоңыр ауданы, Астана",
    status: "Қабылданбады",
  },
];

const statuses = [
  "Күтуде",
  "Жеткізілуде",
  "Аяқталды",
  "Қабылданбады",
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("Барлығы");
  const [search, setSearch] = useState("");

  function changeStatus(id: string, status: string) {
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  }

  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      filter === "Барлығы" || order.status === filter;

    const matchesSearch =
      `${order.id} ${order.user} ${order.item}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <AdminShell>
      <div className="mb-7">
        <p className="text-sm text-cyan-400">Жеткізу жүйесі</p>
        <h2 className="mt-2 text-3xl font-bold">Өтінімдерді басқару</h2>
        <p className="mt-2 text-slate-400">
          Барлық жеткізу өтінімдерін бақылау және олардың мәртебесін өзгерту.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statuses.map((status) => (
          <div
            key={status}
            className="rounded-2xl border border-white/10 bg-[#111c2d] p-5"
          >
            <p className="text-sm text-slate-400">{status}</p>
            <p className="mt-2 text-3xl font-bold">
              {orders.filter((order) => order.status === status).length}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <div className="mb-5 grid gap-3 md:grid-cols-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Өтінім нөмірі немесе пайдаланушы..."
            className="rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#080d19] px-4 py-3 outline-none focus:border-cyan-400"
          >
            <option>Барлығы</option>
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="text-slate-500">
              <tr className="border-b border-white/10">
                <th className="py-3">Өтінім №</th>
                <th>Пайдаланушы</th>
                <th>Жүк</th>
                <th>Салмағы</th>
                <th>Мекенжай</th>
                <th>Мәртебесі</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-white/5">
                  <td className="py-4 font-semibold">{order.id}</td>
                  <td>{order.user}</td>
                  <td>{order.item}</td>
                  <td>{order.weight}</td>
                  <td className="text-slate-400">{order.address}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        changeStatus(order.id, e.target.value)
                      }
                      className="rounded-lg border border-white/10 bg-[#080d19] px-2 py-2 text-xs outline-none"
                    >
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <p className="py-8 text-center text-slate-500">
              Өтінім табылмады.
            </p>
          )}
        </div>
      </div>
    </AdminShell>
  );
}