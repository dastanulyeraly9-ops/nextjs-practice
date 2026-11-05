"use client";

import { useState } from "react";
import ModeratorShell from "../../components/ModeratorShell";

const initialMessages = [
  {
    id: 1,
    name: "Алихан Сәрсен",
    subject: "Тапсырыстың кешігуі",
    message: "Менің тапсырысым әлі жеткізілген жоқ.",
    date: "05.11.2026",
    status: "Жаңа",
  },
  {
    id: 2,
    name: "Айдана Мұрат",
    subject: "Дрон туралы сұрақ",
    message: "Дроным қай жерде екенін білгім келеді.",
    date: "05.11.2026",
    status: "Жаңа",
  },
  {
    id: 3,
    name: "Данияр Ермек",
    subject: "Тапсырысты болдырмау",
    message: "Мен тапсырысымды тоқтатқым келеді.",
    date: "04.11.2026",
    status: "Қаралды",
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState("Барлығы");

  const filtered = messages.filter(
    (message) =>
      filter === "Барлығы" || message.status === filter
  );

  return (
    <ModeratorShell activePath="/moderator/messages">
      <div>
        <h2 className="text-2xl font-bold">
          Хабарламалар мен шағымдар
        </h2>

        <p className="text-sm text-slate-400 mt-2">
          Клиенттердің сұрақтары мен өтініштерін қарау
        </p>

        <div className="flex gap-3 mt-6 mb-5">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#111a2b] border border-slate-700 rounded-xl px-4 py-3"
          >
            <option>Барлығы</option>
            <option>Жаңа</option>
            <option>Қаралды</option>
          </select>
        </div>

        <div className="space-y-4">
          {filtered.map((message) => (
            <div
              key={message.id}
              className="bg-[#111a2b] border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <h3 className="font-bold text-lg">
                    {message.subject}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {message.name} · {message.date}
                  </p>
                </div>

                <span className="text-cyan-400 text-sm">
                  {message.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 mt-5">
                {message.message}
              </p>

              {message.status === "Жаңа" && (
                <button
                  onClick={() =>
                    setMessages((current) =>
                      current.map((item) =>
                        item.id === message.id
                          ? { ...item, status: "Қаралды" }
                          : item
                      )
                    )
                  }
                  className="mt-5 bg-cyan-400/10 text-cyan-400 rounded-xl px-4 py-3 text-sm"
                >
                  ✓ Қаралды деп белгілеу
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </ModeratorShell>
  );
}