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
    yoga: "SUP Yoga",
    yogaTitle: "Find Your Balance on the Water",
    yogaDesc:
      "Discover the perfect balance of strength, mindfulness, and nature with our beginner-friendly SUP Yoga Class. Disconnect from routine, connect with the water, and enjoy a calming experience in Sarandë.",
    yogaBook: "Reserve Your Spot",
    yogaList: [
      "Safety briefing before entering the water",
      "Centering, breathing, and mindfulness",
      "Gentle warm-up on the board",
      "Fun balance-focused yoga flow",
      "Floating Savasana relaxation",
      "No previous SUP or yoga experience required",
    ],
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
    yoga: "SUP Yoga",
    yogaTitle: "Gjej Balancën Mbi Ujë",
    yogaDesc:
      "Zbuloni balancën perfekte mes forcës, qetësisë dhe natyrës me klasën tonë SUP Yoga për fillestarë. Largohuni nga rutina, lidheni me ujin dhe shijoni një eksperiencë relaksuese në Sarandë.",
    yogaBook: "Rezervo Vendin Tënd",
    yogaList: [
      "Udhëzime sigurie para hyrjes në ujë",
      "Frymëmarrje dhe qetësim",
      "Ngrohje e lehtë mbi bord",
      "Pozicione argëtuese për balancë",
      "Relaksim Floating Savasana",
      "Nuk kërkohet eksperiencë në SUP ose yoga",
    ],
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
    yoga: "SUP Yoga",
    yogaTitle: "Trouvez Votre Équilibre sur l’Eau",
    yogaDesc:
      "Découvrez l’équilibre parfait entre force, pleine conscience et nature avec notre cours de SUP Yoga adapté aux débutants. Déconnectez de la routine, connectez-vous à l’eau et profitez d’une expérience apaisante à Sarandë.",
    yogaBook: "Réserver Votre Place",
    yogaList: [
      "Briefing sécurité avant d’entrer dans l’eau",
      "Respiration et pleine conscience",
      "Échauffement doux sur la planche",
      "Flow amusant axé sur l’équilibre",
      "Relaxation Floating Savasana",
      "Aucune expérience SUP ou yoga requise",
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
    yoga: "SUP Yoga",
    yogaTitle: "Trova il Tuo Equilibrio sull’Acqua",
    yogaDesc:
      "Scopri il perfetto equilibrio tra forza, consapevolezza e natura con la nostra lezione di SUP Yoga adatta ai principianti. Stacca dalla routine, connettiti con l’acqua e goditi un’esperienza rilassante a Sarandë.",
    yogaBook: "Prenota il Tuo Posto",
    yogaList: [
      "Briefing di sicurezza prima di entrare in acqua",
      "Respirazione e mindfulness",
      "Riscaldamento dolce sulla tavola",
      "Flow divertente incentrato sull’equilibrio",
      "Relax Floating Savasana",
      "Non serve esperienza SUP o yoga",
    ],
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
    yoga: "SUP Yoga",
    yogaTitle: "Encuentra Tu Equilibrio en el Agua",
    yogaDesc:
      "Descubre el equilibrio perfecto entre fuerza, mindfulness y naturaleza con nuestra clase de SUP Yoga para principiantes. Desconecta de la rutina, conecta con el agua y disfruta una experiencia relajante en Sarandë.",
    yogaBook: "Reserva Tu Lugar",
    yogaList: [
      "Instrucciones de seguridad antes de entrar al agua",
      "Respiración y mindfulness",
      "Calentamiento suave sobre la tabla",
      "Flow divertido enfocado en el equilibrio",
      "Relajación Floating Savasana",
      "No se requiere experiencia en SUP ni yoga",
    ],
  },
};


const yogaExperience = {
  en: {
    heading: "{y.heading}",
    price: "{y.price}",
    intro:
      "Discover the perfect balance of strength, mindfulness, and nature with our SUP Yoga Class! Specially designed for beginners, this experience will help you disconnect from the routine and connect with the water.",
    together: "{y.together}",
    items: [
      {
        title: "📋 Safety First",
        desc: "A quick briefing on land to get you comfortable and confident on your board.",
      },
      {
        title: "🌬️ Centering & Breathing",
        desc: "Mindful breathing (Pranayama) to ground yourself and sync with the gentle movement of the water.",
      },
      {
        title: "🧘 Gentle Warm-up",
        desc: "Low-to-the-board poses to easily adapt to the board's stability.",
      },
      {
        title: "🔥 Active Flow",
        desc: "Fun, balance-focused poses to challenge and empower you.",
      },
      {
        title: "🌌 Floating Savasana",
        desc: "The ultimate relaxation—lying down on your board, listening to the water, and drifting into pure bliss.",
      },
    ],
    noExperience:
      "No previous SUP or yoga experience required! Just bring your energy and a desire to try something amazing. 🏄‍♂️☀️",
    limited:
      "{y.limited}",
  },
  sq: {
    heading: "🌊 Gati ta çosh praktikën tënde të yogës mbi ujë? 🧘‍♂️✨",
    price: "🧘 SUP Yoga • 20€ për person",
    intro:
      "Zbulo balancën perfekte mes forcës, ndërgjegjësimit dhe natyrës me klasën tonë SUP Yoga! E krijuar posaçërisht për fillestarë, kjo eksperiencë do të të ndihmojë të shkëputesh nga rutina dhe të lidhesh me ujin.",
    together: "Ja çfarë do të përjetojmë së bashku:",
    items: [
      {
        title: "📋 Siguria Së Pari",
        desc: "Një udhëzim i shkurtër në tokë për t’u ndier rehat dhe i sigurt mbi bord.",
      },
      {
        title: "🌬️ Qendërzim & Frymëmarrje",
        desc: "Frymëmarrje e ndërgjegjshme (Pranayama) për t’u qetësuar dhe për t’u sinkronizuar me lëvizjen e butë të ujit.",
      },
      {
        title: "🧘 Ngrohje e Lehtë",
        desc: "Pozicione pranë bordit për t’u përshtatur lehtë me stabilitetin e tij.",
      },
      {
        title: "🔥 Flow Aktiv",
        desc: "Pozicione argëtuese me fokus te balanca për të të sfiduar dhe fuqizuar.",
      },
      {
        title: "🌌 Floating Savasana",
        desc: "Relaksimi përfundimtar—shtrirë mbi bord, duke dëgjuar ujin dhe duke u zhytur në qetësi të plotë.",
      },
    ],
    noExperience:
      "Nuk kërkohet eksperiencë e mëparshme në SUP apo yoga! Sill vetëm energjinë tënde dhe dëshirën për të provuar diçka të mrekullueshme. 🏄‍♂️☀️",
    limited:
      "🚀 Vendet janë të kufizuara për t’i dhënë secilit vëmendje personale.",
  },
  fr: {
    heading: "🌊 Prêt à emmener votre pratique du yoga sur l’eau ? 🧘‍♂️✨",
    price: "🧘 SUP Yoga • 20€ par personne",
    intro:
      "Découvrez l’équilibre parfait entre force, pleine conscience et nature avec notre cours de SUP Yoga ! Spécialement conçu pour les débutants, cette expérience vous aidera à vous déconnecter de la routine et à vous connecter à l’eau.",
    together: "Voici ce que nous vivrons ensemble :",
    items: [
      {
        title: "📋 La Sécurité Avant Tout",
        desc: "Un court briefing sur la terre ferme pour vous sentir à l’aise et confiant sur votre planche.",
      },
      {
        title: "🌬️ Centrage & Respiration",
        desc: "Respiration consciente (Pranayama) pour vous ancrer et vous synchroniser avec le doux mouvement de l’eau.",
      },
      {
        title: "🧘 Échauffement Doux",
        desc: "Des postures près de la planche pour s’adapter facilement à sa stabilité.",
      },
      {
        title: "🔥 Flow Actif",
        desc: "Des postures amusantes axées sur l’équilibre pour vous challenger et vous renforcer.",
      },
      {
        title: "🌌 Savasana Flottant",
        desc: "La relaxation ultime — allongé sur votre planche, à l’écoute de l’eau, en pleine détente.",
      },
    ],
    noExperience:
      "Aucune expérience préalable en SUP ou en yoga n’est requise ! Apportez simplement votre énergie et l’envie d’essayer quelque chose d’incroyable. 🏄‍♂️☀️",
    limited:
      "🚀 Les places sont limitées afin que chacun bénéficie d’une attention personnalisée.",
  },
  it: {
    heading: "🌊 Pronto a portare la tua pratica yoga sull’acqua? 🧘‍♂️✨",
    price: "🧘 SUP Yoga • 20€ a persona",
    intro:
      "Scopri il perfetto equilibrio tra forza, consapevolezza e natura con la nostra lezione di SUP Yoga! Pensata appositamente per principianti, questa esperienza ti aiuterà a staccare dalla routine e a connetterti con l’acqua.",
    together: "Ecco cosa vivremo insieme:",
    items: [
      {
        title: "📋 Sicurezza Prima di Tutto",
        desc: "Un breve briefing a terra per farti sentire comodo e sicuro sulla tavola.",
      },
      {
        title: "🌬️ Centratura & Respirazione",
        desc: "Respirazione consapevole (Pranayama) per radicarti e sincronizzarti con il dolce movimento dell’acqua.",
      },
      {
        title: "🧘 Riscaldamento Dolce",
        desc: "Posizioni basse sulla tavola per adattarti facilmente alla sua stabilità.",
      },
      {
        title: "🔥 Flow Attivo",
        desc: "Posizioni divertenti focalizzate sull’equilibrio per sfidarti e darti energia.",
      },
      {
        title: "🌌 Savasana Galleggiante",
        desc: "Il relax definitivo—sdraiato sulla tavola, ascoltando l’acqua e lasciandoti andare al benessere.",
      },
    ],
    noExperience:
      "Non è richiesta alcuna esperienza precedente di SUP o yoga! Porta solo la tua energia e la voglia di provare qualcosa di fantastico. 🏄‍♂️☀️",
    limited:
      "🚀 I posti sono limitati per garantire attenzione personale a tutti.",
  },
  es: {
    heading: "🌊 ¿Listo para llevar tu práctica de yoga al agua? 🧘‍♂️✨",
    price: "🧘 SUP Yoga • 20€ por persona",
    intro:
      "Descubre el equilibrio perfecto entre fuerza, mindfulness y naturaleza con nuestra clase de SUP Yoga. Diseñada especialmente para principiantes, esta experiencia te ayudará a desconectarte de la rutina y conectar con el agua.",
    together: "Esto es lo que viviremos juntos:",
    items: [
      {
        title: "📋 Seguridad Primero",
        desc: "Una breve explicación en tierra para que te sientas cómodo y seguro sobre tu tabla.",
      },
      {
        title: "🌬️ Centro & Respiración",
        desc: "Respiración consciente (Pranayama) para conectar contigo y sincronizarte con el suave movimiento del agua.",
      },
      {
        title: "🧘 Calentamiento Suave",
        desc: "Posturas cerca de la tabla para adaptarte fácilmente a su estabilidad.",
      },
      {
        title: "🔥 Flow Activo",
        desc: "Posturas divertidas enfocadas en el equilibrio para desafiarte y empoderarte.",
      },
      {
        title: "🌌 Savasana Flotante",
        desc: "La relajación definitiva: acostarte sobre tu tabla, escuchar el agua y dejarte llevar por la calma.",
      },
    ],
    noExperience:
      "¡No se requiere experiencia previa en SUP ni yoga! Solo trae tu energía y ganas de probar algo increíble. 🏄‍♂️☀️",
    limited:
      "🚀 Las plazas son limitadas para asegurar atención personal para todos.",
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
  const y = yogaExperience[lang];

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

          <div className="price-card">
            <span>🧘 SUP Yoga</span>
            <strong>20€</strong>
          </div>

          <div className="price-card popular">
            <small>{t.mostPopular}</small>
            <span>🌅 Sunset Paddle</span>
            <strong>15€</strong>
          </div>
        </div>
      </section>



            <section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(135deg, #f7fcff 0%, #e8f7fb 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              order: 1,
            }}
          >
            <Image
              src="/yoga1.jpg"
              alt="SUP Yoga class on paddle boards in Sarandë"
              width={900}
              height={1200}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "26px",
                boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
                border: "4px solid white",
              }}
            />
          </div>

          <div
            style={{
              textAlign: "center",
              order: 2,
            }}
          >
            <h2
              style={{
                fontSize: "2.3rem",
                color: "#0a5d78",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {y.heading}
            </h2>

            <div
              style={{
                display: "inline-block",
                background: "#0a5d78",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              {y.price}
            </div>

            <p
              style={{
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                color: "#284b57",
                fontSize: "1.05rem",
              }}
            >
              {y.intro}
            </p>

            <h3
              style={{
                fontSize: "1.35rem",
                marginBottom: "1rem",
                color: "#143642",
              }}
            >
              {y.together}
            </h3>

            <div
              style={{
                display: "grid",
                gap: "0.85rem",
                marginBottom: "2rem",
              }}
            >
              {y.items.map((item) => (
                <div
                  key={item.title}
                  style={{
                    margin: 0,
                    padding: "0.95rem 1rem",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.85)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                    textAlign: "center",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      color: "#0a5d78",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.title}
                  </strong>
                  <span
                    style={{
                      color: "#284b57",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                lineHeight: 1.8,
                marginBottom: "1rem",
                color: "#284b57",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              {y.noExperience}
            </p>

            <p
              style={{
                lineHeight: 1.8,
                marginBottom: "2rem",
                color: "#284b57",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              {y.limited}
            </p>

            <a
              href={whatsapp}
              target="_blank"
              className="btn primary"
              style={{
                display: "inline-block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              💬 {t.yogaBook}
            </a>
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