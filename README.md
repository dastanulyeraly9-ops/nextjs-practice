# Next.js Practice

## 1. Жоба туралы

Бұл жоба Next.js фреймворкі арқылы құрылды. Next.js React негізінде веб-қосымшалар жасауға арналған.

## 2. Қолданылған командалар

| Команда | Қызметі |
|---|---|
| `node -v` | Node.js нұсқасын көрсетеді |
| `npm.cmd -v` | npm нұсқасын көрсетеді |
| `npx.cmd create-next-app@latest nextjs-practice` | Жаңа Next.js жобасын құрады |
| `cd nextjs-practice` | Жоба бумасына өтеді |
| `npm.cmd run dev` | Жобаны әзірлеу режимінде іске қосады |
| `npm.cmd run build` | Жобаның production нұсқасын құрастырады |
| `npm.cmd run start` | Құрастырылған жобаны іске қосады |
| `git add .` | Файлдарды commit жасауға дайындайды |
| `git commit -m "Add project documentation"` | Өзгерістерді Git тарихында сақтайды |
| `git push` | Өзгерістерді GitHub-қа жібереді |

## 3. Жоба құрылымы

```text
nextjs-practice/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 4. Файлдар мен бумалардың қызметі

- `app/` — веб-қосымшаның беттері мен құрылымы.
- `app/page.tsx` — басты беттің коды.
- `app/layout.tsx` — беттердің ортақ құрылымы.
- `app/globals.css` — жалпы стильдер.
- `public/` — суреттер және статикалық файлдар.
- `package.json` — жобаның тәуелділіктері мен командалары.
- `package-lock.json` — npm пакеттерінің нақты нұсқаларын бекітеді.
- `next.config.ts` — Next.js баптаулары.
- `tsconfig.json` — TypeScript баптаулары.
- `README.md` — жоба туралы ақпарат пен нұсқаулық.

## 5. Жобаны іске қосу

PowerShell терминалында:

```powershell
npm.cmd run dev
```

Браузерде http://localhost:3000 мекенжайын ашыңыз.