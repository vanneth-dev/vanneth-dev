import { toPng } from "html-to-image";
import { forwardRef, useRef, useState } from "react";

const DEFAULTS = {
  nameEn: "Vanneth Tak",
  roleEn: "Full-Stack Developer",
  tech: "Laravel  ·  Node.js  ·  React  ·  TypeScript",
  url: "vanneth-dev.github.io",
};

type Fields = typeof DEFAULTS;
type FieldKey = keyof Fields;

const FORM: { key: FieldKey; label: string }[] = [
  { key: "nameEn", label: "Name" },
  { key: "roleEn", label: "Role" },
  { key: "tech", label: "Technologies" },
  { key: "url", label: "Website" },
];

const CARD = { width: 1200, height: 630 } as const;
const PREVIEW_SCALE = 0.7;
const SAVE_ENDPOINT = "/__save-og-image";

// Same background as the site home page
const BG =
  "radial-gradient(ellipse at center, #1a0033 0%, #050208 70%, #000000 100%)";

const OgCard = forwardRef<HTMLDivElement, Fields>(function OgCard(
  { nameEn, roleEn, tech, url },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        width: CARD.width,
        height: CARD.height,
        padding: "64px 96px 120px",
        overflow: "hidden",
        color: "#ffffff",
        fontFamily: '"Inter", "Kantumruy Pro", sans-serif',
        background: BG,
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          width: 56,
          height: 4,
          borderRadius: 2,
          background: "#a855f7",
          marginBottom: 32,
        }}
      />

      {/* Name */}
      <div
        style={{
          maxWidth: "100%",
          fontSize: 108,
          lineHeight: 1.1,
          fontWeight: 800,
          letterSpacing: -3,
          whiteSpace: "nowrap",
          color: "#ffffff",
        }}
      >
        {nameEn}
      </div>

      {/* Role */}
      <div
        style={{
          marginTop: 16,
          fontSize: 40,
          lineHeight: 1.3,
          fontWeight: 500,
          color: "#c4b5fd",
        }}
      >
        {roleEn}
      </div>

      {/* Tech */}
      <div
        style={{
          marginTop: 32,
          fontSize: 22,
          fontWeight: 500,
          color: "#94a3b8",
          whiteSpace: "pre",
        }}
      >
        {tech}
      </div>

      {/* Footer: url */}
      <div
        style={{
          position: "absolute",
          left: 96,
          right: 96,
          bottom: 52,
          paddingTop: 22,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          fontSize: 21,
          fontWeight: 500,
          color: "#a5b4fc",
        }}
      >
        {url}
      </div>
    </div>
  );
});

export default function OgImagePage() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<Fields>({ ...DEFAULTS });
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateField = (key: FieldKey, value: string) => {
    setValues((previous) => ({
      ...previous,
      [key]: value,
    }));

    setMessage("");
    setError("");
  };

  const resetForm = () => {
    setValues({ ...DEFAULTS });
    setMessage("");
    setError("");
  };

  const generateImage = async () => {
    if (!cardRef.current || busy) return;

    setBusy(true);
    setMessage("");
    setError("");

    try {
      await document.fonts.ready;

      const dataUrl = await toPng(cardRef.current, {
        width: CARD.width,
        height: CARD.height,
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: "#000000",
      });

      const imageBlob = await (await fetch(dataUrl)).blob();

      const response = await fetch(SAVE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "image/png",
        },
        body: imageBlob,
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(details || `HTTP ${response.status}`);
      }

      setMessage("Image saved to public/assets/imgs/og-image.png");
    } catch (cause) {
      console.error("OG image generation failed:", cause);

      setError(
        cause instanceof Error
          ? `Failed to save image: ${cause.message}`
          : "An unexpected error occurred while saving the image.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070a12] px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Portfolio tools
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              OG Image Studio
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Design your social preview · 1200 × 630 px
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetForm}
              disabled={busy}
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 disabled:opacity-50"
            >
              Reset
            </button>

            <button
              type="button"
              onClick={generateImage}
              disabled={busy}
              className="rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-950/40 transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
            >
              {busy ? "Generating..." : "Generate & Save PNG"}
            </button>
          </div>
        </header>

        {message && (
          <div
            role="status"
            className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300"
          >
            <span className="mr-2">✓</span>
            {message}
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="font-semibold">Image content</h2>
            <p className="mt-1 text-sm text-slate-400">
              Edit the fields to update the preview instantly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FORM.map(({ key, label }) => (
              <label key={key} className="block space-y-2 text-sm">
                <span className="text-slate-400">{label}</span>

                <input
                  type="text"
                  value={values[key]}
                  onChange={(event) => updateField(key, event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-3 py-3 text-white outline-none transition focus:border-indigo-400"
                />
              </label>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">Live preview</h2>
              <p className="mt-1 text-sm text-slate-400">
                Exported images retain their full resolution.
              </p>
            </div>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
              1200 × 630 PNG
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0b1020] p-3 sm:p-5">
            <div
              style={{
                width: CARD.width * PREVIEW_SCALE,
                height: CARD.height * PREVIEW_SCALE,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: CARD.width,
                  height: CARD.height,
                  transform: `scale(${PREVIEW_SCALE})`,
                  transformOrigin: "top left",
                }}
              >
                <OgCard ref={cardRef} {...values} />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="font-semibold">Output location</h2>

          <code className="mt-3 block break-all rounded-lg bg-black/30 p-3 text-sm text-cyan-300">
            public/assets/imgs/og-image.png
          </code>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Clicking Generate & Save PNG writes directly to this path through
            the Vite development server. No file download is triggered.
          </p>
        </section>
      </div>
    </main>
  );
}
