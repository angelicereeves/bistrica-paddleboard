"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "en" | "sq";

const whatsapp = "https://wa.me/355696813214";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Centrali+Sarande+Albania";

const text = {
  en: {
    lang: "Shqip",
    title: "Bistrica Paddle",
    subtitle: "Paddle board rentals in Sarandë",
    desc: "Explore Sarandë from a new perspective. Find us on the beach in front of Restaurant Centrali.",
    book: "Book on WhatsApp",
    map: "Open in Google Maps",
    prices: "Prices",
    included: "Included",
    rules: "Quick Rules",
    strokes: "Basic SUP Strokes",
    strokesSub: "Beginners should know",
    contact: "Contact",
    location: "Promenade Sarandë • In front of Restaurant Centrali",
    items: ["Free photos", "Beginner friendly", "Easy & fun for everyone"],
    rulesList: [
      "Wear your life jacket",
      "Stay in the safe area",
      "No alcohol before paddling",
      "Respect others and the sea",
    ],
  },
  sq: {
    lang: "English",
    title: "Bistrica Paddle",
    subtitle: "Qira paddle board në Sarandë",
    desc: "Eksploro Sarandën nga një perspektivë e re. Na gjeni në plazh përpara Restaurant Centrali.",
    book: "Rezervo në WhatsApp",
    map: "Hape në Google Maps",
    prices: "Çmimet",
    included: "Përfshihet",
    rules: "Rregulla të Shpejta",
    strokes: "Teknikat Bazë të SUP",
    strokesSub: "Çfarë duhet të dijë një fillestar",
    contact: "Kontakt",
    location: "Promenada Sarandë • Përpara Restaurant Centrali",
    items: [
      "Foto falas",
      "E përshtatshme për fillestarë",
      "Argëtuese për të gjithë",
    ],
    rulesList: [
      "Vishni jelekun e shpëtimit",
      "Qëndroni në zonën e sigurt",
      "Jo alkool para aktivitetit",
      "Respektoni të tjerët dhe detin",
    ],
  },
};

const strokes = [
  {
    icon: "⬆️",
    enTitle: "Go Straight",
    sqTitle: "Shko Drejt",
    enText: "Forward stroke — paddle on one side, close to the board.",
    sqText: "Goditja përpara — vozit pranë bordit.",
  },
  {
    icon: "✋",
    enTitle: "Stop",
    sqTitle: "Ndalo",
    enText: "Reverse stroke — paddle backwards on one side.",
    sqText: "Goditja prapa — vozit mbrapsht nga njëra anë.",
  },
  {
    icon: "➡️",
    enTitle: "Go Right",
    sqTitle: "Shko Djathtas",
    enText: "Draw stroke — paddle on the side to turn the board.",
    sqText: "Goditja anësore — përdoret për të kthyer bordin.",
  },
  {
    icon: "⬅️",
    enTitle: "Go Left",
    sqTitle: "Shko Majtas",
    enText: "Draw stroke — paddle on the side to turn the board.",
    sqText: "Goditja anësore — përdoret për të kthyer bordin.",
  },
  {
    icon: "↪️",
    enTitle: "Turn Right",
    sqTitle: "Kthehu Djathtas",
    enText: "Use a sweep stroke or cross bow stroke on the left side.",
    sqText: "Përdor goditjen e gjerë ose diagonale nga ana e majtë.",
  },
  {
    icon: "↩️",
    enTitle: "Turn Left",
    sqTitle: "Kthehu Majtas",
    enText: "Use a sweep stroke or cross bow stroke on the right side.",
    sqText: "Përdor goditjen e gjerë ose diagonale nga ana e djathtë.",
  },
];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = text[lang];

  return (
    <main>
      <button
        className="language-btn"
        onClick={() => setLang(lang === "en" ? "sq" : "en")}
      >
        {t.lang}
      </button>

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/sunset.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/logo.JPG"
              alt="Bistrica Paddle Logo"
              width={220}
              height={220}
              priority
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "999px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                border: "4px solid rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.85)",
              }}
            />
          </div>

          <div className="hero-badge">🌊 SARANDË • ALBANIA</div>

          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>

          <p
            className="hero-text"
            style={{
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              fontWeight: 500,
            }}
          >
            {t.desc}
          </p>

          <p className="location">📍 {t.location}</p>

          <div className="hero-buttons">
            <a href={whatsapp} target="_blank" className="btn primary">
              💬 {t.book}
            </a>

            <a href={maps} target="_blank" className="btn secondary">
              📍 {t.map}
            </a>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="prices">
        <h2>{t.prices}</h2>

        <div className="price-grid">
          <div className="price-card">
            <span>🏄‍♂️ 1 Hour</span>
            <strong>10€</strong>
          </div>

          <div className="price-card">
            <span>🌊 2 Hours</span>
            <strong>18€</strong>
          </div>

          <div className="price-card popular">
            <small>Most Popular</small>
            <span>🌅 Sunset Paddle</span>
            <strong>15€</strong>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="info-grid">
        <div className="info-card">
          <h2>📸 {t.included}</h2>
          {t.items.map((item) => (
            <p key={item}>✓ {item}</p>
          ))}
        </div>

        <div className="info-card">
          <h2>🦺 {t.rules}</h2>
          {t.rulesList.map((rule) => (
            <p key={rule}>✓ {rule}</p>
          ))}
        </div>
      </section>

      {/* STROKES */}
      <section className="strokes">
        <h2>{t.strokes}</h2>
        <p className="section-subtitle">{t.strokesSub}</p>

        {/* INSTRUCTIONS IMAGE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          <Image
            src="/paddleinstructions.JPG"
            alt="Paddle Board Instructions"
            width={900}
            height={1200}
            style={{
              width: "100%",
              maxWidth: "850px",
              height: "auto",
              borderRadius: "24px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
              border: "4px solid white",
            }}
          />
        </div>

        <div className="stroke-grid">
          {strokes.map((stroke) => (
            <div className="stroke-card" key={stroke.enTitle}>
              <span>{stroke.icon}</span>
              <h3>{lang === "en" ? stroke.enTitle : stroke.sqTitle}</h3>
              <p>{lang === "en" ? stroke.enText : stroke.sqText}</p>
            </div>
          ))}
        </div>

        <div className="quick-tips">
          <p>
            🛡️ {lang === "en" ? "Keep your core tight" : "Mbaj trupin stabil"}
          </p>
          <p>🌊 {lang === "en" ? "Look ahead" : "Shiko përpara"}</p>
          <p>☀️ {lang === "en" ? "Enjoy the ride" : "Shijo udhëtimin"}</p>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <h2>{lang === "en" ? "Find Us" : "Na Gjeni"}</h2>

        <iframe
          src="https://www.google.com/maps?q=Centrali+Sarande+Albania&output=embed"
          loading="lazy"
        />
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>{t.contact}</h2>

        <div className="contact-grid">
          <a href="tel:+355693464901" className="contact-link">
            📞 Call: +355 69 346 4901
          </a>

          <a
            href="https://wa.me/355696813214"
            target="_blank"
            className="contact-link whatsapp-link"
          >
            💬 WhatsApp: +355 69 681 3214
          </a>

          <div className="social-links">
            <a
              href="https://www.instagram.com/bistrica_paddle_saranda/"
              target="_blank"
              className="social-btn instagram"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.tiktok.com/@bistrica_paddle_saranda"
              target="_blank"
              className="social-btn tiktok"
            >
              🎵 TikTok
            </a>
          </div>
        </div>

        <a href={whatsapp} target="_blank" className="btn primary">
          💬 {t.book}
        </a>
      </section>

      <footer>Bistrica Paddle • Sarandë, Albania</footer>
    </main>
  );
}