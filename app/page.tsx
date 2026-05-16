"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "en" | "sq" | "fr" | "it" | "es";

const whatsapp = "https://wa.me/355696813214";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Centrali+Sarande+Albania";

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "/flags/uk.png" },
  { code: "sq", label: "Shqip", flag: "/flags/albania.png" },
  { code: "fr", label: "Français", flag: "/flags/france.png" },
  { code: "it", label: "Italiano", flag: "/flags/italy.jpg" },
  { code: "es", label: "Español", flag: "/flags/spain.png" },
];

const text = {
  en: {
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
    findUs: "Find Us",
    location: "Promenade Sarandë • In front of Restaurant Centrali",
    items: ["Free photos", "Beginner friendly", "Easy & fun for everyone"],
    rulesList: [
      "Wear your life jacket",
      "Stay in the safe area",
      "No alcohol before paddling",
      "Respect others and the sea",
    ],
    mostPopular: "Most Popular",
    call: "Call",
    quickTips: ["Keep your core tight", "Look ahead", "Enjoy the ride"],
  },
  sq: {
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
    findUs: "Na Gjeni",
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
    mostPopular: "Më i Preferuari",
    call: "Telefono",
    quickTips: ["Mbaj trupin stabil", "Shiko përpara", "Shijo udhëtimin"],
  },
  fr: {
    title: "Bistrica Paddle",
    subtitle: "Location de paddle board à Sarandë",
    desc: "Découvrez Sarandë sous un nouvel angle. Retrouvez-nous sur la plage devant le Restaurant Centrali.",
    book: "Réserver sur WhatsApp",
    map: "Ouvrir dans Google Maps",
    prices: "Prix",
    included: "Inclus",
    rules: "Règles Rapides",
    strokes: "Techniques de Base SUP",
    strokesSub: "Ce que les débutants doivent savoir",
    contact: "Contact",
    findUs: "Nous Trouver",
    location: "Promenade de Sarandë • Devant le Restaurant Centrali",
    items: [
      "Photos gratuites",
      "Adapté aux débutants",
      "Facile et amusant pour tous",
    ],
    rulesList: [
      "Portez votre gilet de sauvetage",
      "Restez dans la zone sécurisée",
      "Pas d’alcool avant de pagayer",
      "Respectez les autres et la mer",
    ],
    mostPopular: "Le Plus Populaire",
    call: "Appeler",
    quickTips: [
      "Gardez le tronc stable",
      "Regardez devant vous",
      "Profitez de la balade",
    ],
  },
  it: {
    title: "Bistrica Paddle",
    subtitle: "Noleggio paddle board a Sarandë",
    desc: "Scopri Sarandë da una nuova prospettiva. Ci trovi sulla spiaggia davanti al Restaurant Centrali.",
    book: "Prenota su WhatsApp",
    map: "Apri in Google Maps",
    prices: "Prezzi",
    included: "Incluso",
    rules: "Regole Rapide",
    strokes: "Tecniche Base SUP",
    strokesSub: "Cosa devono sapere i principianti",
    contact: "Contatto",
    findUs: "Dove Siamo",
    location: "Lungomare di Sarandë • Davanti al Restaurant Centrali",
    items: [
      "Foto gratuite",
      "Adatto ai principianti",
      "Facile e divertente per tutti",
    ],
    rulesList: [
      "Indossa il giubbotto salvagente",
      "Rimani nell’area sicura",
      "Niente alcol prima di pagaiare",
      "Rispetta gli altri e il mare",
    ],
    mostPopular: "Più Popolare",
    call: "Chiama",
    quickTips: ["Mantieni il core stabile", "Guarda avanti", "Goditi il giro"],
  },
  es: {
    title: "Bistrica Paddle",
    subtitle: "Alquiler de paddle board en Sarandë",
    desc: "Explora Sarandë desde una nueva perspectiva. Encuéntranos en la playa frente al Restaurant Centrali.",
    book: "Reservar por WhatsApp",
    map: "Abrir en Google Maps",
    prices: "Precios",
    included: "Incluido",
    rules: "Reglas Rápidas",
    strokes: "Técnicas Básicas de SUP",
    strokesSub: "Lo que los principiantes deben saber",
    contact: "Contacto",
    findUs: "Encuéntranos",
    location: "Paseo marítimo de Sarandë • Frente al Restaurant Centrali",
    items: [
      "Fotos gratis",
      "Apto para principiantes",
      "Fácil y divertido para todos",
    ],
    rulesList: [
      "Usa tu chaleco salvavidas",
      "Permanece en la zona segura",
      "No alcohol antes de remar",
      "Respeta a los demás y al mar",
    ],
    mostPopular: "Más Popular",
    call: "Llamar",
    quickTips: [
      "Mantén el abdomen firme",
      "Mira hacia adelante",
      "Disfruta el paseo",
    ],
  },
};

const strokes = [
  {
    icon: "⬆️",
    title: {
      en: "Go Straight",
      sq: "Shko Drejt",
      fr: "Aller Tout Droit",
      it: "Vai Dritto",
      es: "Ir Recto",
    },
    desc: {
      en: "Forward stroke — paddle on one side, close to the board.",
      sq: "Goditja përpara — vozit pranë bordit.",
      fr: "Coup de pagaie avant — pagayez d’un côté, près de la planche.",
      it: "Pagaiata in avanti — pagaia su un lato, vicino alla tavola.",
      es: "Remada hacia adelante — rema de un lado, cerca de la tabla.",
    },
  },
  {
    icon: "✋",
    title: {
      en: "Stop",
      sq: "Ndalo",
      fr: "Arrêter",
      it: "Fermati",
      es: "Parar",
    },
    desc: {
      en: "Reverse stroke — paddle backwards on one side.",
      sq: "Goditja prapa — vozit mbrapsht nga njëra anë.",
      fr: "Coup arrière — pagayez vers l’arrière d’un côté.",
      it: "Pagaiata indietro — pagaia all’indietro su un lato.",
      es: "Remada inversa — rema hacia atrás de un lado.",
    },
  },
  {
    icon: "➡️",
    title: {
      en: "Go Right",
      sq: "Shko Djathtas",
      fr: "Aller à Droite",
      it: "Vai a Destra",
      es: "Ir a la Derecha",
    },
    desc: {
      en: "Draw stroke — paddle on the side to turn the board.",
      sq: "Goditja anësore — përdoret për të kthyer bordin.",
      fr: "Coup d’appel — pagayez sur le côté pour tourner la planche.",
      it: "Pagaiata laterale — usa il lato per girare la tavola.",
      es: "Remada lateral — rema de lado para girar la tabla.",
    },
  },
  {
    icon: "⬅️",
    title: {
      en: "Go Left",
      sq: "Shko Majtas",
      fr: "Aller à Gauche",
      it: "Vai a Sinistra",
      es: "Ir a la Izquierda",
    },
    desc: {
      en: "Draw stroke — paddle on the side to turn the board.",
      sq: "Goditja anësore — përdoret për të kthyer bordin.",
      fr: "Coup d’appel — pagayez sur le côté pour tourner la planche.",
      it: "Pagaiata laterale — usa il lato per girare la tavola.",
      es: "Remada lateral — rema de lado para girar la tabla.",
    },
  },
  {
    icon: "↪️",
    title: {
      en: "Turn Right",
      sq: "Kthehu Djathtas",
      fr: "Tourner à Droite",
      it: "Gira a Destra",
      es: "Girar a la Derecha",
    },
    desc: {
      en: "Use a sweep stroke or cross bow stroke on the left side.",
      sq: "Përdor goditjen e gjerë ose diagonale nga ana e majtë.",
      fr: "Utilisez un coup large ou croisé du côté gauche.",
      it: "Usa una pagaiata ampia o incrociata sul lato sinistro.",
      es: "Usa una remada amplia o cruzada del lado izquierdo.",
    },
  },
  {
    icon: "↩️",
    title: {
      en: "Turn Left",
      sq: "Kthehu Majtas",
      fr: "Tourner à Gauche",
      it: "Gira a Sinistra",
      es: "Girar a la Izquierda",
    },
    desc: {
      en: "Use a sweep stroke or cross bow stroke on the right side.",
      sq: "Përdor goditjen e gjerë ose diagonale nga ana e djathtë.",
      fr: "Utilisez un coup large ou croisé du côté droit.",
      it: "Usa una pagaiata ampia o incrociata sul lato destro.",
      es: "Usa una remada amplia o cruzada del lado derecho.",
    },
  },
];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = text[lang];

  return (
    <main>
      <div className="language-btn" aria-label="Language selector">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setLang(language.code)}
            className={lang === language.code ? "active-language" : ""}
            title={language.label}
            aria-label={language.label}
          >
            <Image
              src={language.flag}
              alt={language.label}
              width={28}
              height={28}
              className="flag-icon"
            />
          </button>
        ))}
      </div>

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
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

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        <Image
          src="/paddle1.png"
          alt="Paddle Board Instructions 1"
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
      </section>

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
            <small>{t.mostPopular}</small>
            <span>🌅 Sunset Paddle</span>
            <strong>15€</strong>
          </div>
        </div>
      </section>

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

      <section className="strokes">
        <h2>{t.strokes}</h2>
        <p className="section-subtitle">{t.strokesSub}</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3rem",
            marginTop: "2rem",
            width: "100%",
          }}
        >
          <Image
            src="/paddle2.png"
            alt="Paddle Board Instructions 2"
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
            <div className="stroke-card" key={stroke.title.en}>
              <span>{stroke.icon}</span>
              <h3>{stroke.title[lang]}</h3>
              <p>{stroke.desc[lang]}</p>
            </div>
          ))}
        </div>

        <div className="quick-tips">
          <p>🛡️ {t.quickTips[0]}</p>
          <p>🌊 {t.quickTips[1]}</p>
          <p>☀️ {t.quickTips[2]}</p>
        </div>
      </section>

      <section className="map-section">
        <h2>{t.findUs}</h2>

        <iframe
          src="https://www.google.com/maps?q=Centrali+Sarande+Albania&output=embed"
          loading="lazy"
        />
      </section>

      <section className="contact">
        <h2>{t.contact}</h2>

        <div className="contact-grid">
          <a href="tel:+355693464901" className="contact-link">
            📞 {t.call}: +355 69 346 4901
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