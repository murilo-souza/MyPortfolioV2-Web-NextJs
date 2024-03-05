export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={32} height={32} rx={8} fill="#52525B" />
        <path
          d="M16.724 17.112v-5.22m0 0v-5.22c1.805-.627 5.986-1.35 8.276.775-6.62.62-8.276 3.221-8.276 4.445zm0 2.224C13.92 13.093 8.247 10.037 8 6c2.394 1.778 7.49 5.143 8.724 4.383M16.741 26l-1.044-3.819-1.24-1.253 1.24-2.08 1.044-1.773 1.013 1.773 1.21 2.08-1.21 1.253L16.74 26z"
          stroke="#C4B5FD"
        />
      </svg>
      <span>My Portfolio</span>
    </strong>
  )
}
