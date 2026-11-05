import AdminShell from "./AdminShell";

const stats = [
  { title: "Барлық пайдаланушылар", value: "1 248", change: "+12%", icon: "👥" },
  { title: "Жаңа өтінімдер", value: "86", change: "+8%", icon: "📦" },
  { title: "Белсенді дрондар", value: "24", change: "18 бос", icon: "🚁" },
  { title: "Модераторлар", value: "8", change: "Белсенді", icon: "🛡️" },
];

const recentOrders = [
  { id: "#QF-1024", user: "Аян Нұрлан", item: "Құжат салынған пакет", status: "Жеткізілуде" },
  { id: "#QF-1023", user: "Дана Ермек", item: "Ұмыт қалған кілт", status: "Күтуде" },
  { id: "#QF-1022", user: "Арман Болат", item: "Шағын сөмке", status: "Аяқталды" },
];

export default function AdminPage() {
  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-sm text-cyan-400">Басқару орталығы</p>
        <h2 className="mt-2 text-3xl font-bold">Қош келдіңіз, әкімші!</h2>
        <p className="mt-2 text-slate-400">
          Q'Fly жүйесінің жалпы жағдайы мен негізгі көрсеткіштері.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs text-emerald-400">{stat.change}</span>
            </div>
            <p className="mt-5 text-sm text-slate-400">{stat.title}</p>
            <p className="mt-1 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-white/10 bg-[#111c2d] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Соңғы өтінімдер</h3>
            <p className="mt-1 text-sm text-slate-400">Жүйедегі соңғы тапсырыстар</p>
          </div>
          <a href="/admin/orders" className="text-sm text-cyan-400 hover:text-cyan-300">
            Барлығын көру →
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="text-slate-500">
              <tr className="border-b border-white/10">
                <th className="py-3">Нөмірі</th>
                <th>Пайдаланушы</th>
                <th>Жүк түрі</th>
                <th>Мәртебесі</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-white/5">
                  <td className="py-4 font-semibold">{order.id}</td>
                  <td>{order.user}</td>
                  <td>{order.item}</td>
                  <td>
                    <span className={`rounded-full px-3 py-1 text-xs ${
                      order.status === "Аяқталды"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : order.status === "Жеткізілуде"
                        ? "bg-cyan-500/15 text-cyan-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="font-bold">Жүйе жағдайы</h3>
          <p className="mt-3 text-sm text-emerald-400">● Барлық жүйелер қалыпты жұмыс істеп тұр</p>
          <p className="mt-2 text-sm text-slate-400">Сервер: Қалыпты</p>
          <p className="mt-1 text-sm text-slate-400">Дрон желісі: Қосылған</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111c2d] p-5">
          <h3 className="font-bold">Әкімші әрекеттері</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="/admin/users" className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">Пайдаланушылар</a>
            <a href="/admin/orders" className="rounded-xl bg-white/10 px-4 py-2 text-sm">Өтінімдер</a>
            <a href="/admin/settings" className="rounded-xl bg-white/10 px-4 py-2 text-sm">Баптаулар</a>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}