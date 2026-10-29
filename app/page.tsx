
const features = [
  {
    icon: "↗",
    title: "Жылдам жеткізу",
    description: "Қалалық кептелістерге тәуелсіз, әуе арқылы жеткізу.",
  },
  {
    icon: "◇",
    title: "2 кг-ға дейін",
    description: "Құжаттар, кілттер және шағын заттарға арналған.",
  },
  {
    icon: "◎",
    title: "10 км-ге дейін",
    description: "Белгіленген аймақтағы жеткізу мүмкіндігі.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold text-white">
              Q
            </span>
            <span className="text-2xl font-extrabold tracking-tight">
              Q<span className="text-blue-600">'</span>Fly
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-600">
              Қызмет туралы
            </a>
            <a href="#advantages" className="hover:text-blue-600">
              Артықшылықтар
            </a>
            <a href="/dashboard" className="hover:text-blue-600">
              Дрондар картасы
            </a>
          </div>

          <a
            href="/delivery"
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 sm:px-5"
          >
            Өтінім беру <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Дронмен жеткізудің жаңа мүмкіндігі
          </div>

          <h1 className="mt-7 text-5xl leading-[1.12] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Затыңды
            <br />
            <span className="text-blue-600">дронмен</span>
            <br />
            жылдам жеткіз.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Үйде маңызды затың қалып қойды ма? Q&apos;Fly арқылы
            қажетті затты бір мекенжайдан екіншісіне дронмен жеткізу
            идеясын пайдалан. Кептеліссіз жеткізуге жаңа қадам.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/delivery"
              className="rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Жеткізуге өтінім беру →
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-blue-400 hover:bg-blue-50"
            >
              Толығырақ
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 border-t border-slate-200 pt-7">
            <div>
              <p className="text-3xl font-extrabold">2 кг</p>
              <p className="mt-1 text-sm text-slate-500">
                Ең жоғары салмақ
              </p>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <p className="text-3xl font-extrabold">10 км</p>
              <p className="mt-1 text-sm text-slate-500">
                Ең жоғары қашықтық
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-blue-300/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 p-5 shadow-2xl shadow-blue-900/10 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-extrabold tracking-widest text-blue-800">
                Q&apos;FLY DELIVERY
              </span>
              <span className="text-sm font-bold text-blue-800">01 / 03</span>
            </div>

            <div className="flex min-h-[280px] items-center justify-center sm:min-h-[360px]">
              <svg
                viewBox="0 0 440 330"
                className="w-full drop-shadow-xl"
                role="img"
                aria-label="Жеткізу дроны мен сәлемдеме суреті"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="220" cy="280" rx="140" ry="18" fill="#7899cb" opacity=".3" />

                <path
                  d="M85 250 L145 228 L145 275 L85 290 Z"
                  fill="#91b2e5"
                />
                <path
                  d="M295 228 L355 250 L355 290 L295 275 Z"
                  fill="#91b2e5"
                />

                <g stroke="#273e64" strokeWidth="13" strokeLinecap="round" fill="none">
                  <path d="M130 122 L220 165 L310 122" />
                  <path d="M160 116 L220 86 L280 116" />
                </g>

                <g fill="#7398d8">
                  <ellipse cx="130" cy="112" rx="58" ry="13" />
                  <ellipse cx="310" cy="112" rx="58" ry="13" />
                  <ellipse cx="220" cy="78" rx="55" ry="12" />
                  <ellipse cx="220" cy="158" rx="55" ry="12" />
                </g>

                <g fill="#263b5e">
                  <rect x="74" y="108" width="112" height="8" rx="4" />
                  <rect x="254" y="108" width="112" height="8" rx="4" />
                  <rect x="164" y="74" width="112" height="8" rx="4" />
                  <rect x="164" y="154" width="112" height="8" rx="4" />
                </g>

                <path
                  d="M172 132 Q172 119 188 119 L252 119 Q268 119 268 132 L255 173 Q251 183 239 183 L201 183 Q189 183 185 173 Z"
                  fill="white"
                />
                <path d="M187 132 Q187 128 195 128 L245 128 Q253 128 253 132 L247 149 L193 149 Z" fill="#2563eb" />
                <path d="M198 157 L242 157 L236 175 L204 175 Z" fill="#dbeafe" />

                <path d="M190 195 L250 195 L260 211 L260 258 L180 258 L180 211 Z" fill="#e9ac62" />
                <path d="M190 195 L220 210 L250 195" fill="#f8cd92" />
                <path d="M220 210 L220 258" stroke="#fff0d7" strokeWidth="5" />
                <path d="M180 211 L220 228 L260 211" fill="none" stroke="#c68b47" strokeWidth="3" />

                <g fill="white">
                  <circle cx="130" cy="112" r="4" />
                  <circle cx="310" cy="112" r="4" />
                  <circle cx="220" cy="78" r="4" />
                  <circle cx="220" cy="158" r="4" />
                </g>
              </svg>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/85 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                ↗
              </div>
              <div>
                <p className="font-extrabold">Жеңіл. Жылдам. Ыңғайлы.</p>
                <p className="mt-1 text-sm text-slate-500">
                  Шағын заттарды жеткізуге арналған жоба
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-extrabold tracking-widest text-blue-600">
            Q&apos;FLY ТУРАЛЫ
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Қажетті затың — керек жерінде.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Q&apos;Fly — адамдарға шағын заттарды дрон арқылы жеткізу
            идеясын ұсынатын платформа. Тауарлар каталогы да, кәдімгі
            курьерлер де жоқ: пайдаланушы өз затына жеткізу өтінімін береді.
          </p>

          <div id="advantages" className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-[#f9fafc] p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-700">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#142238] p-7 text-white sm:p-11 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-widest text-blue-300">
              Q&apos;FLY — СЕНІҢ ЖЕТКІЗУ СЕРВИСІҢ
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Жеткізуге өтінім беруге дайынсың ба?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Заттың салмағы мен өлшемдерін көрсетіп, өтінім бетін аш.
            </p>
          </div>
          <a
            href="/delivery"
            className="shrink-0 rounded-xl bg-white px-6 py-4 text-center font-bold text-[#142238] transition hover:bg-blue-100"
          >
            Өтінім беру →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-sm text-slate-500">
        <span className="font-extrabold text-slate-900">
          Q<span className="text-blue-600">'</span>Fly
        </span>
        <span className="mx-2">·</span>
        Дронмен жеткізу платформасының оқу жобасы
        <p className="mt-2">© 2026 Q&apos;Fly</p>
      </footer>
    </main>
  );
}