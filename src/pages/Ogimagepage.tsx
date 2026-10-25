import { toPng } from "html-to-image";
import { Globe, MapPin } from "lucide-react";
import { forwardRef, useRef, useState } from "react";
import { AnimatedBackground } from "src/features/home/components/ui/AnimatedBackground";

const DEFAULTS = {
  nameEn: "Vanneth Tak",
  roleEn: "Full-Stack Developer",
  tech: "Laravel · Node.js · React · TypeScript",
  location: "Phnom Penh, Cambodia",
  url: "vanneth-dev.github.io",
};

type Fields = typeof DEFAULTS;
type FieldKey = keyof Fields;

const FORM: { key: FieldKey; label: string }[] = [
  { key: "nameEn", label: "Name" },
  { key: "roleEn", label: "Role" },
  { key: "tech", label: "Technologies" },
  { key: "location", label: "Location" },
  { key: "url", label: "Website" },
];

const CARD = { width: 1200, height: 630 } as const;
const PREVIEW_SCALE = 0.7;
const SAVE_ENDPOINT = "/__save-og-image";

// AnimatedBackground canvas background
const BG = "radial-gradient(ellipse at center, #1a0033 0%, #000000 70%)";

// Hero overlay: from-black/70 via-purple-900/30 to-black/70
const HERO_OVERLAY =
  "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(88,28,135,0.3), rgba(0,0,0,0.7))";

// Hero h1: from-purple-400 via-pink-500 to-blue-400
const NAME_GRADIENT =
  "linear-gradient(90deg, #c084fc 0%, #ec4899 50%, #60a5fa 100%)";

// Scroll-progress bar: from-purple-500 via-pink-500 to-blue-500
const BAR_GRADIENT =
  "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)";

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

const Orb = ({
  size,
  color,
  top,
  left,
  right,
  bottom,
}: {
  size: number;
  color: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      borderRadius: "50%",
      background: color,
      filter: "blur(64px)",
    }}
  />
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 28px",
      borderRadius: 16,
      background: "rgba(0,0,0,0.3)",
      border: "1px solid rgba(168,85,247,0.4)",
      boxShadow: "0 0 32px rgba(168,85,247,0.15)",
      color: "#ffffff",
      fontSize: 22,
      fontWeight: 600,
    }}
  >
    {children}
  </div>
);

const OgCard = forwardRef<HTMLDivElement, Fields>(function OgCard(
  { nameEn, roleEn, tech, location, url },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        boxSizing: "border-box",
        width: CARD.width,
        height: CARD.height,
        padding: "64px 96px",
        overflow: "hidden",
        textAlign: "left",
        color: "#ffffff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Kantumruy Pro", sans-serif',
        background: BG,
      }}
    >
      {/* Your real site background (stars + lines), sized to the card */}
      <AnimatedBackground
        width={CARD.width}
        height={CARD.height}
        contained
        animate={false}
        starCount={120}
      />

      {/* Hero overlay */}
      <div
        style={{ position: "absolute", inset: 0, background: HERO_OVERLAY }}
      />

      {/* Hero orbs: purple / pink / blue */}
      <Orb size={420} color="rgba(168,85,247,0.22)" top={-120} left={-100} />
      <Orb size={360} color="rgba(236,72,153,0.2)" bottom={-120} right={-60} />
      <Orb size={280} color="rgba(59,130,246,0.2)" top={170} left={800} />

      {/* Floating decor from the home page, kept on the empty right side */}
      <div
        style={{
          position: "absolute",
          top: 110,
          right: 120,
          width: 128,
          height: 128,
          borderRadius: "50%",
          border: "1px solid rgba(168,85,247,0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 120,
          right: 260,
          width: 96,
          height: 96,
          border: "1px solid rgba(236,72,153,0.25)",
          transform: "rotate(45deg)",
        }}
      />

      {/* Progress-bar accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 4,
          background: BAR_GRADIENT,
          boxShadow: "0 0 16px rgba(168,85,247,0.5)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            borderRadius: 2,
            marginBottom: 28,
            background: BAR_GRADIENT,
          }}
        />

        <div
          style={{
            fontSize: 120,
            lineHeight: 1.2,
            fontWeight: 700,
            // fontStyle: "italic",
            letterSpacing: -2,
            whiteSpace: "nowrap",
            backgroundImage: NAME_GRADIENT,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {nameEn}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 46,
            lineHeight: 1.3,
            fontWeight: 300,
            letterSpacing: 0.5,
            color: "#ffffff",
          }}
        >
          {roleEn}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            lineHeight: 1.6,
            letterSpacing: 0.5,
            color: "#d8b4fe",
            whiteSpace: "pre",
          }}
        >
          {tech}
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 44 }}>
          <Pill>
            <MapPin size={24} color="#c084fc" />
            <span>{location}</span>
          </Pill>
          <Pill>
            <Globe size={24} color="#60a5fa" />
            <span>{url}</span>
          </Pill>
        </div>
      </div>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Page (unchanged logic + UI)                                        */
/* ------------------------------------------------------------------ */

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
