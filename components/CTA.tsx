const LOGIN_URL = "https://app.xolacloud.com/login";

function ArrowRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
          Bring your branches onto one system
        </h2>
        <p className="max-w-md text-paper/60">
          Set up your first branch free for 14 days. No card required, and
          our team helps with the import.
        </p>
        <a
          href={LOGIN_URL}
          className="group mt-2 inline-flex items-center gap-2 rounded-md bg-flame px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-flameDark"
        >
          Start free trial
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
