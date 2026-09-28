const providers = [
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
        <path
          fill="#000"
          d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"
        />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
        <path
          fill="#000"
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.19-1.79 4.13-1.15 1.15-2.93 2.4-6.05 2.4-4.83 0-8.6-3.89-8.6-8.72s3.77-8.72 8.6-8.72c2.6 0 4.51 1.03 5.91 2.35l2.31-2.31C18.75 1.44 16.13 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.27-1.17 8.37-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.47-.17-2.05H12.48Z"
        />
      </svg>
    ),
  },
];

export function SocialLogin() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex w-full items-center gap-4 text-sm text-neutral-400">
        <span className="h-px flex-1 bg-neutral-100" />
        or
        <span className="h-px flex-1 bg-neutral-100" />
      </div>
      <div className="flex gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={`Continue with ${provider.name}`}
            className="grid size-14 place-items-center rounded-xl border border-neutral-100 transition-colors hover:bg-neutral-50"
          >
            {provider.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
