
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type OrderStatus =
  | "Күтуде"
  | "Қабылданды"
  | "Дайындалуда"
  | "Жеткізілуде"
  | "Аяқталды"
  | "Бас тартылды";

type Order = {
  id: string;
  item: string;
  from: string;
  to: string;
  date: string;
  price: number;
  status: OrderStatus;
};

const initialOrders: Order[] = [
  {
    id: "QF-1001",
    item: "Үйдің кілті",
    from: "Жиембет жырау, 2",
    to: "EXPO аумағы",
    date: "29.10.2026",
    price: 1200,
    status: "Жеткізілуде",
  },
  {
    id: "QF-1002",
    item: "Құжаттар",
    from: "Сарыарқа даңғылы",
    to: "Қабанбай батыр даңғылы",
    date: "28.10.2026",
    price: 1500,
    status: "Аяқталды",
  },
  {
    id: "QF-1003",
    item: "Кітап",
    from: "Мәңгілік Ел көшесі",
    to: "Ботаникалық бақ маңы",
    date: "29.10.2026",
    price: 1000,
    status: "Күтуде",
  },
  {
    id: "QF-1004",
    item: "Жеке зат",
    from: "Қала орталығы",
    to: "Есіл ауданы",
    date: "27.10.2026",
    price: 1300,
    status: "Бас тартылды",
  },
];

const statuses: OrderStatus[] = [
  "Күтуде",
  "Қабылданды",
  "Дайындалуда",
  "Жеткізілуде",
  "Аяқталды",
  "Бас тартылды",
];

const statusStyles: Record<OrderStatus, string> = {
  "Күтуде": "bg-amber-100 text-amber-800",
  "Қабылданды": "bg-blue-100 text-blue-800",
  "Дайындалуда": "bg-violet-100 text-violet-800",
  "Жеткізілуде": "bg-sky-100 text-sky-800",
  "Аяқталды": "bg-emerald-100 text-emerald-800",
  "Бас тартылды": "bg-red-100 text-red-800",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [filter, setFilter] = useState("Барлығы");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("qfly-orders");
      if (saved) {
        setOrders(JSON.parse(saved) as Order[]);
      }
    } catch {
      // Сақталған деректер оқылмаса, бастапқы демо тапсырыстар қалады.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("qfly-orders", JSON.stringify(orders));
    }
  }, [orders, ready]);

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filter === "Барлығы" || order.status === filter;
    const query = search.toLowerCase();
    const matchesSearch =
      order.id.toLowerCase().includes(query) ||
      order.item.toLowerCase().includes(query) ||
      order.to.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  function cancelOrder(id: string) {
    setOrders((current) =>
      current.map((order) =>
        order.id === id && order.status === "Күтуде"
          ? { ...order, status: "Бас тартылды" }
          : order
      )
    );
  }

  function advanceOrder(id: string) {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== id) return order;

        const nextStatus: Partial<Record<OrderStatus, OrderStatus>> = {
          "Күтуде": "Қабылданды",
          "Қабылданды": "Дайындалуда",
          "Дайындалуда": "Жеткізілуде",
          "Жеткізілуде": "Аяқталды",
        };

        const next = nextStatus[order.status];
        return next ? { ...order, status: next } : order;
      })
    );
  }

  const countByStatus = (status: OrderStatus) =>
    orders.filter((order) => order.status === status).length;

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 py-8 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-semibold text-blue-700">
          ← Q'Fly басты беті
        </Link>

        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Пайдаланушы кабинеті
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Менің тапсырыстарым
          </h1>
          <p className="mt-3 text-slate-600">
            Тапсырыстардың тарихын және олардың ағымдағы статусын қараңыз.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { label: "Барлық тапсырыс", value: orders.length },
            { label: "Күтуде", value: countByStatus("Күтуде") },
            { label: "Жеткізілуде", value: countByStatus("Жеткізілуде") },
            { label: "Аяқталды", value: countByStatus("Аяқталды") },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="mt-7 rounded-3xl bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Тапсырыс нөмірі, зат немесе мекенжай..."
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <Link
              href="/delivery"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              + Жаңа тапсырыс
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Барлығы", ...statuses].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === status
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {filteredOrders.map((order) => (
              <article
                key={order.id}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {order.id} · {order.date}
                    </p>
                    <h2 className="mt-2 text-lg font-bold">{order.item}</h2>
                    <p className="mt-2 text-sm text-slate-600">
                      <span className="font-medium">Қайдан:</span> {order.from}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      <span className="font-medium">Қайда:</span> {order.to}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <span className={`rounded-full px-3 py-1.5 text-sm font-semibold ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                    <p className="font-bold">{order.price.toLocaleString("kk-KZ")} ₸</p>
                  </div>
                </div>

                {expanded === order.id && (
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="font-semibold">Тапсырыстың орындалу кезеңдері</p>
                    <div className="mt-4 space-y-3">
                      {statuses.slice(0, 5).map((status, index) => {
                        const progress = statuses.indexOf(order.status);
                        const done =
                          order.status !== "Бас тартылды" && index <= progress;

                        return (
                          <div key={status} className="flex items-center gap-3">
                            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${done ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500"}`}>
                              {done ? "✓" : index + 1}
                            </span>
                            <span className={done ? "font-medium" : "text-slate-500"}>
                              {status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {order.status === "Бас тартылды" && (
                      <p className="mt-3 text-sm text-red-700">
                        Бұл тапсырыс тоқтатылған.
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      setExpanded(expanded === order.id ? null : order.id)
                    }
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                  >
                    {expanded === order.id ? "Жасыру" : "Толығырақ"}
                  </button>

                  {order.status === "Күтуде" && (
                    <button
                      onClick={() => cancelOrder(order.id)}
                      className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                    >
                      Тапсырыстан бас тарту
                    </button>
                  )}

                  {["Күтуде", "Қабылданды", "Дайындалуда", "Жеткізілуде"].includes(order.status) && (
                    <button
                      onClick={() => advanceOrder(order.id)}
                      className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                    >
                      Демо: келесі статус
                    </button>
                  )}
                </div>
              </article>
            ))}

            {filteredOrders.length === 0 && (
              <div className="rounded-2xl bg-slate-50 p-8 text-center">
                <p className="font-semibold">Тапсырыс табылмады</p>
                <p className="mt-2 text-sm text-slate-500">
                  Іздеу сөзін немесе статус сүзгісін өзгертіп көріңіз.
                </p>
              </div>
            )}
          </div>
        </section>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Ескерту: бұл оқу жобасының демонстрациялық нұсқасы. Тапсырыстар осы
          браузерде сақталады. Статусты өзгерту батырмасы тек тексеруге арналған;
          нақты дронның күйін өзгертпейді.
        </p>
      </div>
    </main>
  );
}