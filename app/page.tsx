"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "en" | "sq" | "fr" | "it" | "es";
type SectionKey = "rentals" | "yoga" | "training" | "games";

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
    subtitle: "Paddleboard Rentals & SUP Experiences in Sarandë",
    desc: "Discover the beautiful coastline of Sarandë from the water. Find us on the beach in front of Restaurant Centrali.",
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
    chooseExperience: "Choose Your SUP Experience",
    chooseSub: "Choose your perfect SUP experience—rent a paddleboard, enjoy SUP Yoga, improve your technique, or compete with friends.",
    reserve: "Reserve Your Yoga Spot",
    bookTraining: "Book a Training Session",
    bookTeam: "Register Your Team",
    viewDetails: "View Details",
    hideDetails: "Hide Details",
    meetingPoint: "Meeting Point",
    meetingPointDesc: "Meet at our Yoga Dock relay station before the event begins.",
    boardsIncluded: "Boards Included",
    boardsIncludedDesc:
      "Premium boards are provided for every team, including ST, Monster, Vapor, Fusion, RF Blue, and Magma.",
    dynamics: "Dynamics",
    winningCondition: "Winning Condition",
    goldenRule: "Golden Rule",
    oneHour: "1 Hour",
    supYoga: "SUP Yoga",
    trainingSession: "Training Session",
    trainingMembership: "Training Membership",
    sessions8: "8 sessions",
    teamChallenge: "Team Challenge",
    perTeam: "per team",
    sunsetPaddle: "Sunset Paddle",
    gameTitles: [
      "🛶 Game 1: The Yoga Dock Rescue",
      "🎿 Game 2: The Human Ski",
      "🤼 Game 3: Board Gladiator",
      "🎈 Game 4: Color Hunt",
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
    chooseExperience: "Zgjidh Eksperiencën SUP",
    chooseSub: "Merr një bord me qira, bëj yoga, përmirëso teknikën ose garo me miqtë.",
    reserve: "Rezervo Vendin",
    bookTraining: "Rezervo Trajnimin",
    bookTeam: "Rezervo Ekipin",
    viewDetails: "Shiko Detajet",
    hideDetails: "Fshih Detajet",
    meetingPoint: "Pika e Takimit",
    meetingPointDesc: "Takimi bëhet te stacioni ynë Yoga Dock para fillimit të eventit.",
    boardsIncluded: "Bordet Përfshihen",
    boardsIncludedDesc:
      "Bordet premium ofrohen për çdo ekip, duke përfshirë ST, Monster, Vapor, Fusion, RF Blue dhe Magma.",
    dynamics: "Dinamika",
    winningCondition: "Kushti i Fitores",
    goldenRule: "Rregulli i Artë",
    oneHour: "1 Orë",
    supYoga: "SUP Yoga",
    trainingSession: "Seancë Trajnimi",
    trainingMembership: "Abonim Trajnimi",
    sessions8: "8 seanca",
    teamChallenge: "Sfida me Ekipe",
    perTeam: "për ekip",
    sunsetPaddle: "Sunset Paddle",
    gameTitles: [
      "🛶 Loja 1: Shpëtimi te Yoga Dock",
      "🎿 Loja 2: Ski Njerëzor",
      "🤼 Loja 3: Gladiatori mbi Bord",
      "🎈 Loja 4: Gjuetia e Ngjyrave",
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
    chooseExperience: "Choisissez Votre Expérience SUP",
    chooseSub: "Louez une planche, rejoignez le yoga, entraînez votre technique ou jouez en équipe.",
    reserve: "Réserver Votre Place",
    bookTraining: "Réserver l’Entraînement",
    bookTeam: "Réserver Votre Équipe",
    viewDetails: "Voir les Détails",
    hideDetails: "Masquer les Détails",
    meetingPoint: "Point de Rendez-vous",
    meetingPointDesc: "Rendez-vous à notre station relais Yoga Dock avant le début de l’événement.",
    boardsIncluded: "Planches Incluses",
    boardsIncludedDesc:
      "Des planches premium sont fournies pour chaque équipe, notamment ST, Monster, Vapor, Fusion, RF Blue et Magma.",
    dynamics: "Déroulement",
    winningCondition: "Condition de Victoire",
    goldenRule: "Règle d’Or",
    oneHour: "1 Heure",
    supYoga: "SUP Yoga",
    trainingSession: "Séance d’Entraînement",
    trainingMembership: "Abonnement Entraînement",
    sessions8: "8 séances",
    teamChallenge: "Défi en Équipe",
    perTeam: "par équipe",
    sunsetPaddle: "Sunset Paddle",
    gameTitles: [
      "🛶 Jeu 1 : Le Sauvetage du Yoga Dock",
      "🎿 Jeu 2 : Le Ski Humain",
      "🤼 Jeu 3 : Gladiateur sur Planche",
      "🎈 Jeu 4 : Chasse aux Couleurs",
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
    chooseExperience: "Scegli la Tua Esperienza SUP",
    chooseSub: "Noleggia una tavola, prova yoga, allena la tecnica o gareggia con gli amici.",
    reserve: "Prenota il Tuo Posto",
    bookTraining: "Prenota l’Allenamento",
    bookTeam: "Prenota la Tua Squadra",
    viewDetails: "Vedi Dettagli",
    hideDetails: "Nascondi Dettagli",
    meetingPoint: "Punto d’Incontro",
    meetingPointDesc: "Ci incontriamo alla nostra stazione Yoga Dock prima dell’inizio dell’evento.",
    boardsIncluded: "Tavole Incluse",
    boardsIncludedDesc:
      "Tavole premium fornite per ogni squadra, incluse ST, Monster, Vapor, Fusion, RF Blue e Magma.",
    dynamics: "Dinamica",
    winningCondition: "Condizione di Vittoria",
    goldenRule: "Regola d’Oro",
    oneHour: "1 Ora",
    supYoga: "SUP Yoga",
    trainingSession: "Sessione di Allenamento",
    trainingMembership: "Abbonamento Allenamento",
    sessions8: "8 sessioni",
    teamChallenge: "Sfida a Squadre",
    perTeam: "per squadra",
    sunsetPaddle: "Sunset Paddle",
    gameTitles: [
      "🛶 Gioco 1: Il Salvataggio al Yoga Dock",
      "🎿 Gioco 2: Lo Sci Umano",
      "🤼 Gioco 3: Gladiatore sulla Tavola",
      "🎈 Gioco 4: Caccia ai Colori",
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
    chooseExperience: "Elige Tu Experiencia SUP",
    chooseSub: "Alquila una tabla, prueba yoga, entrena tu técnica o compite con amigos.",
    reserve: "Reserva Tu Lugar",
    bookTraining: "Reservar Entrenamiento",
    bookTeam: "Reservar Tu Equipo",
    viewDetails: "Ver Detalles",
    hideDetails: "Ocultar Detalles",
    meetingPoint: "Punto de Encuentro",
    meetingPointDesc: "Nos reunimos en nuestra estación Yoga Dock antes de comenzar el evento.",
    boardsIncluded: "Tablas Incluidas",
    boardsIncludedDesc:
      "Se proporcionan tablas premium para cada equipo, incluidas ST, Monster, Vapor, Fusion, RF Blue y Magma.",
    dynamics: "Dinámica",
    winningCondition: "Condición de Victoria",
    goldenRule: "Regla de Oro",
    oneHour: "1 Hora",
    supYoga: "SUP Yoga",
    trainingSession: "Sesión de Entrenamiento",
    trainingMembership: "Membresía de Entrenamiento",
    sessions8: "8 sesiones",
    teamChallenge: "Reto por Equipos",
    perTeam: "por equipo",
    sunsetPaddle: "Sunset Paddle",
    gameTitles: [
      "🛶 Juego 1: El Rescate del Yoga Dock",
      "🎿 Juego 2: El Esquí Humano",
      "🤼 Juego 3: Gladiador sobre la Tabla",
      "🎈 Juego 4: Búsqueda de Colores",
    ],
  },
};

const experiences: Record<
  SectionKey,
  Record<
    Lang,
    {
      label: string;
      heading: string;
      price: string;
      image: string;
      imageAlt: string;
      intro: string;
      together: string;
      items: { title: string; desc: string }[];
      note: string;
      limited: string;
      buttonType: "book" | "reserve" | "training" | "team";
      rules?: { title: string; desc: string }[];
      gameDetails?: {
        title: string;
        boards: string;
        focus: string;
        logistics: string;
        dynamics: string[];
        winning: string;
        goldenRule: string;
      }[];
    }
  >
> = {
  rentals: {
    en: {
      label: "🏄 Paddleboard Rentals",
      heading: "🏄 Explore the Coast of Sarandë by Paddleboard",
      price: "10€ / Hour • 15€ Sunset Paddle",
      image: "/paddlerentals.png",
      imageAlt: "Paddleboard rental information in Sarandë",
      intro:
        "Rent a paddleboard and enjoy the coastline of Sarandë from the water. Perfect for beginners, couples, families, and friends.",
      together: "Your Rental Includes",
      items: [
        { title: "🏄 1 Hour Rental", desc: "A quick and fun paddle close to the shore." },
        { title: "🌅 Sunset Paddle", desc: "A beautiful evening session during the best light of the day." },
        { title: "📸 Free Photos", desc: "Capture your experience on the water." },
        { title: "🦺 Safety Included", desc: "Life jackets, a safety briefing, and basic paddling guidance are included." },
        { title: "✨ Beginner Friendly", desc: "Perfect for beginners, yet fun for every skill level." },
      ],
      note: "Find us on the beach in front of Restaurant Centrali.",
      limited: "Stay in the safe area, respect the sea, and wear your life jacket.",
      buttonType: "book",
    },
    sq: {
      label: "🏄 Qira Paddleboard",
      heading: "🏄 Eksploro Sarandën me Paddleboard",
      price: "10€ për 1 orë • 15€ sunset paddle",
      image: "/paddlerentals.png",
      imageAlt: "Informacion për qira paddleboard në Sarandë",
      intro:
        "Merr një paddleboard me qira dhe shijo bregdetin e Sarandës nga uji. Perfekte për fillestarë, çifte, familje dhe miq.",
      together: "Përfshirë në qira:",
      items: [
        { title: "🏄 Qira 1 Orë", desc: "Një xhiro e shpejtë dhe argëtuese pranë bregut." },
        { title: "🌅 Sunset Paddle", desc: "Një seancë e bukur në mbrëmje me dritën më të mirë." },
        { title: "📸 Foto Falas", desc: "Kujtime nga eksperienca jote mbi ujë." },
        { title: "🦺 Siguria Përfshihet", desc: "Jelekë shpëtimi dhe udhëzime bazë të përfshira." },
        { title: "✨ Për Fillestarë", desc: "E lehtë, argëtuese dhe për të gjitha nivelet." },
      ],
      note: "Na gjeni në plazh përpara Restaurant Centrali.",
      limited: "Qëndroni në zonën e sigurt, respektoni detin dhe vishni jelekun e shpëtimit.",
      buttonType: "book",
    },
    fr: {
      label: "🏄 Location Paddleboard",
      heading: "🏄 Explorez Sarandë en Paddleboard",
      price: "10€ pour 1 heure • 15€ sunset paddle",
      image: "/paddlerentals.png",
      imageAlt: "Informations de location de paddleboard à Sarandë",
      intro:
        "Louez une planche et profitez de la côte de Sarandë depuis l’eau. Parfait pour les débutants, couples, familles et amis.",
      together: "Points forts :",
      items: [
        { title: "🏄 Location 1 Heure", desc: "Une sortie rapide et amusante près du rivage." },
        { title: "🌅 Sunset Paddle", desc: "Une belle session du soir avec la meilleure lumière." },
        { title: "📸 Photos Gratuites", desc: "Gardez un souvenir de votre expérience sur l’eau." },
        { title: "🦺 Sécurité Incluse", desc: "Gilets de sauvetage et conseils de base fournis." },
        { title: "✨ Débutants Bienvenus", desc: "Facile, amusant et adapté à tous les niveaux." },
      ],
      note: "Retrouvez-nous sur la plage devant le Restaurant Centrali.",
      limited: "Restez dans la zone sécurisée, respectez la mer et portez votre gilet.",
      buttonType: "book",
    },
    it: {
      label: "🏄 Noleggio Paddleboard",
      heading: "🏄 Scopri Sarandë in Paddleboard",
      price: "10€ per 1 ora • 15€ sunset paddle",
      image: "/paddlerentals.png",
      imageAlt: "Informazioni noleggio paddleboard a Sarandë",
      intro:
        "Noleggia una tavola e goditi la costa di Sarandë dall’acqua. Perfetto per principianti, coppie, famiglie e amici.",
      together: "Dettagli noleggio:",
      items: [
        { title: "🏄 Noleggio 1 Ora", desc: "Un giro veloce e divertente vicino alla riva." },
        { title: "🌅 Sunset Paddle", desc: "Una bellissima sessione serale con la luce migliore." },
        { title: "📸 Foto Gratuite", desc: "Ricordi della tua esperienza sull’acqua." },
        { title: "🦺 Sicurezza Inclusa", desc: "Giubbotti salvagente e indicazioni base inclusi." },
        { title: "✨ Per Principianti", desc: "Facile, divertente e adatto a tutti i livelli." },
      ],
      note: "Ci trovi sulla spiaggia davanti al Restaurant Centrali.",
      limited: "Rimani nell’area sicura, rispetta il mare e indossa il giubbotto.",
      buttonType: "book",
    },
    es: {
      label: "🏄 Alquiler Paddleboard",
      heading: "🏄 Explora Sarandë en Paddleboard",
      price: "10€ por 1 hora • 15€ sunset paddle",
      image: "/paddlerentals.png",
      imageAlt: "Información de alquiler de paddleboard en Sarandë",
      intro:
        "Alquila una tabla y disfruta la costa de Sarandë desde el agua. Perfecto para principiantes, parejas, familias y amigos.",
      together: "Detalles del alquiler:",
      items: [
        { title: "🏄 Alquiler 1 Hora", desc: "Un paseo rápido y divertido cerca de la orilla." },
        { title: "🌅 Sunset Paddle", desc: "Una hermosa sesión de tarde con la mejor luz." },
        { title: "📸 Fotos Gratis", desc: "Recuerdos de tu experiencia en el agua." },
        { title: "🦺 Seguridad Incluida", desc: "Chalecos salvavidas e instrucciones básicas incluidas." },
        { title: "✨ Para Principiantes", desc: "Fácil, divertido y apto para todos los niveles." },
      ],
      note: "Encuéntranos en la playa frente al Restaurant Centrali.",
      limited: "Permanece en la zona segura, respeta el mar y usa tu chaleco.",
      buttonType: "book",
    },
  },
  yoga: {
    en: {
      label: "🧘 SUP Yoga",
      heading: "🌊 Ready to Take Your Yoga Practice to the Water?",
      price: "20€ per person",
      image: "/yoga1.jpg",
      imageAlt: "SUP Yoga class on paddle boards in Sarandë",
      intro:
        "Discover the perfect balance of strength, mindfulness, and nature with our beginner-friendly SUP Yoga Class.",
      together: "What we will experience together:",
      items: [
        { title: "📋 Safety First", desc: "A quick land briefing to help you feel comfortable and confident." },
        { title: "🌬️ Centering & Breathing", desc: "Mindful breathing to connect with the movement of the water." },
        { title: "🧘 Gentle Warm-up", desc: "Low-to-the-board poses to adapt to the board’s stability." },
        { title: "🔥 Active Flow", desc: "Fun, balance-focused poses to challenge and empower you." },
        { title: "🌌 Floating Savasana & Relaxation", desc: "Relax on your board, listen to the water, and drift into calm." },
      ],
      note: "No previous SUP or yoga experience required.",
      limited: "Spaces are limited to ensure everyone gets personal attention.",
      buttonType: "reserve",
    },
    sq: {
      label: "🧘 SUP Yoga",
      heading: "🌊 Gati ta Çosh Yogën Mbi Ujë?",
      price: "20€ për person",
      image: "/yoga1.jpg",
      imageAlt: "Klasë SUP Yoga në Sarandë",
      intro:
        "Zbulo balancën mes forcës, qetësisë dhe natyrës me klasën tonë SUP Yoga për fillestarë.",
      together: "Çfarë do të përjetojmë së bashku:",
      items: [
        { title: "📋 Siguria Së Pari", desc: "Një udhëzim i shkurtër në tokë për t’u ndier rehat." },
        { title: "🌬️ Frymëmarrje", desc: "Frymëmarrje e ndërgjegjshme për t’u lidhur me lëvizjen e ujit." },
        { title: "🧘 Ngrohje e Lehtë", desc: "Pozicione të ulëta mbi bord për stabilitet." },
        { title: "🔥 Flow Aktiv", desc: "Pozicione argëtuese me fokus te balanca." },
        { title: "🌌 Floating Savasana", desc: "Relaksim mbi bord duke dëgjuar ujin." },
      ],
      note: "Nuk kërkohet eksperiencë e mëparshme në SUP apo yoga.",
      limited: "Vendet janë të kufizuara për vëmendje personale.",
      buttonType: "reserve",
    },
    fr: {
      label: "🧘 SUP Yoga",
      heading: "🌊 Prêt à Emmener Votre Yoga sur l’Eau ?",
      price: "20€ par personne",
      image: "/yoga1.jpg",
      imageAlt: "Cours de SUP Yoga à Sarandë",
      intro:
        "Découvrez l’équilibre entre force, pleine conscience et nature avec notre cours de SUP Yoga pour débutants.",
      together: "Ce que nous vivrons ensemble :",
      items: [
        { title: "📋 Sécurité Avant Tout", desc: "Un court briefing sur terre pour vous sentir à l’aise." },
        { title: "🌬️ Respiration", desc: "Respiration consciente pour suivre le mouvement de l’eau." },
        { title: "🧘 Échauffement Doux", desc: "Postures basses pour s’adapter à la stabilité." },
        { title: "🔥 Flow Actif", desc: "Postures amusantes axées sur l’équilibre." },
        { title: "🌌 Savasana Flottant", desc: "Relaxation sur la planche au son de l’eau." },
      ],
      note: "Aucune expérience SUP ou yoga n’est requise.",
      limited: "Les places sont limitées pour garantir une attention personnalisée.",
      buttonType: "reserve",
    },
    it: {
      label: "🧘 SUP Yoga",
      heading: "🌊 Pronto a Portare lo Yoga sull’Acqua?",
      price: "20€ a persona",
      image: "/yoga1.jpg",
      imageAlt: "Lezione SUP Yoga a Sarandë",
      intro:
        "Scopri equilibrio, forza e natura con la nostra lezione di SUP Yoga adatta ai principianti.",
      together: "Cosa vivremo insieme:",
      items: [
        { title: "📋 Sicurezza Prima", desc: "Breve briefing a terra per sentirti sicuro." },
        { title: "🌬️ Respirazione", desc: "Respirazione consapevole seguendo il movimento dell’acqua." },
        { title: "🧘 Riscaldamento", desc: "Posizioni basse per adattarti alla tavola." },
        { title: "🔥 Flow Attivo", desc: "Posizioni divertenti focalizzate sull’equilibrio." },
        { title: "🌌 Savasana Galleggiante", desc: "Relax sulla tavola ascoltando l’acqua." },
      ],
      note: "Non serve esperienza SUP o yoga.",
      limited: "I posti sono limitati per garantire attenzione personale.",
      buttonType: "reserve",
    },
    es: {
      label: "🧘 SUP Yoga",
      heading: "🌊 ¿Listo para Llevar tu Yoga al Agua?",
      price: "20€ por persona",
      image: "/yoga1.jpg",
      imageAlt: "Clase de SUP Yoga en Sarandë",
      intro:
        "Descubre equilibrio, fuerza y naturaleza con nuestra clase de SUP Yoga para principiantes.",
      together: "Lo que viviremos juntos:",
      items: [
        { title: "📋 Seguridad Primero", desc: "Breve explicación en tierra para sentirte cómodo." },
        { title: "🌬️ Respiración", desc: "Respiración consciente con el movimiento del agua." },
        { title: "🧘 Calentamiento", desc: "Posturas bajas para adaptarte a la tabla." },
        { title: "🔥 Flow Activo", desc: "Posturas divertidas enfocadas en el equilibrio." },
        { title: "🌌 Savasana Flotante", desc: "Relajación sobre la tabla escuchando el agua." },
      ],
      note: "No se requiere experiencia previa en SUP ni yoga.",
      limited: "Las plazas son limitadas para atención personalizada.",
      buttonType: "reserve",
    },
  },
  training: {
    en: {
      label: "🏋️ SUP Training Club",
      heading: "🏄‍♂️ Intermediate SUP Training Club",
      price: "25€ session • 160€ monthly membership",
      image: "/paddletraining.jpeg",
      imageAlt: "SUP training club in Sarandë",
      intro:
        "Already comfortable on a paddleboard? Take your skills to the next level with our coached morning training sessions.",
      together: "What we do:",
      items: [
        { title: "🗓️ Mondays & Thursdays", desc: "7:30 AM, the perfect time for glassy water and no crowd." },
        { title: "⏳ 1 Full Hour", desc: "A full hour of action, coaching, fitness, and technique." },
        { title: "🏃 Coastal Fitness Paddle", desc: "Not a slow tour — expect a real workout along the coast." },
        { title: "🎯 Stroke Coaching", desc: "Real-time corrections to improve technique, power, and control." },
        { title: "⚡ Speed Intervals & Turns", desc: "High-intensity intervals plus pivot turns around the buoys." },
        { title: "🧘 Board Stretching", desc: "Finish with stretching and recovery on the water." },
      ],
      note: "Requirement: you must be able to stand up easily and maintain a straight course.",
      limited: "Limited group sizes ensure personalized coaching. Leash and PFD are required.",
      buttonType: "training",
    },
    sq: {
      label: "🏋️ SUP Training Club",
      heading: "🏄‍♂️ Klubi i Trajnimit SUP për Nivel Mesatar",
      price: "25€ seanca • 160€ abonimi mujor",
      image: "/paddletraining.jpeg",
      imageAlt: "SUP training në Sarandë",
      intro:
        "Nëse di të bësh paddle dhe dëshiron të përmirësosh teknikën, kjo është për ty.",
      together: "Çfarë bëjmë:",
      items: [
        { title: "🗓️ Të Hënën & Të Enjten", desc: "Në 7:30 të mëngjesit, kur uji është i qetë." },
        { title: "⏳ 1 Orë e Plotë", desc: "Një orë me aksion, trajnim, fitness dhe teknikë." },
        { title: "🏃 Paddle Fitness", desc: "Jo tur i ngadaltë — është stërvitje e vërtetë." },
        { title: "🎯 Korrigjim Teknikash", desc: "Udhëzime për teknikë, fuqi dhe kontroll." },
        { title: "⚡ Intervale & Kthesa", desc: "Intervale shpejtësie dhe pivot turns rreth bovave." },
        { title: "🧘 Stretching", desc: "Përfundojmë me stretching mbi ujë." },
      ],
      note: "Kërkesë: duhet të ngrihesh lehtë në këmbë dhe të mbash drejtimin.",
      limited: "Vendet janë të kufizuara. Leash dhe jeleku janë të detyrueshme.",
      buttonType: "training",
    },
    fr: {
      label: "🏋️ Club d’Entraînement SUP",
      heading: "🏄‍♂️ Club d’Entraînement SUP Intermédiaire",
      price: "25€ la séance • 160€ abonnement mensuel",
      image: "/paddletraining.jpeg",
      imageAlt: "Entraînement SUP à Sarandë",
      intro:
        "Vous savez déjà pagayer ? Améliorez votre technique avec un entraînement matinal sur l’eau.",
      together: "Ce que nous faisons :",
      items: [
        { title: "🗓️ Lundis & Jeudis", desc: "À 7h30, le moment idéal avec une eau calme." },
        { title: "⏳ 1 Heure Complète", desc: "Une heure d’action, coaching, fitness et technique." },
        { title: "🏃 Paddle Fitness", desc: "Pas une balade lente — un vrai entraînement côtier." },
        { title: "🎯 Coaching Technique", desc: "Corrections en temps réel pour puissance et contrôle." },
        { title: "⚡ Intervalles & Virages", desc: "Intervalles rapides et pivot turns autour des bouées." },
        { title: "🧘 Étirements", desc: "Fin avec étirements et récupération sur l’eau." },
      ],
      note: "Condition : pouvoir se lever facilement et garder une trajectoire droite.",
      limited: "Places limitées. Leash et gilet de sauvetage obligatoires.",
      buttonType: "training",
    },
    it: {
      label: "🏋️ SUP Training Club",
      heading: "🏄‍♂️ Club di Allenamento SUP Intermedio",
      price: "25€ sessione • 160€ abbonamento mensile",
      image: "/paddletraining.jpeg",
      imageAlt: "Allenamento SUP a Sarandë",
      intro:
        "Sai già pagaiare? Migliora la tecnica con un fantastico allenamento mattutino sull’acqua.",
      together: "Cosa facciamo:",
      items: [
        { title: "🗓️ Lunedì & Giovedì", desc: "Alle 7:30, il momento perfetto con acqua calma." },
        { title: "⏳ 1 Ora Completa", desc: "Un’ora di azione, coaching, fitness e tecnica." },
        { title: "🏃 Paddle Fitness", desc: "Non è un tour lento — è un vero allenamento." },
        { title: "🎯 Coaching Tecnico", desc: "Correzioni in tempo reale per potenza e controllo." },
        { title: "⚡ Intervalli & Virate", desc: "Intervalli intensi e pivot turn intorno alle boe." },
        { title: "🧘 Stretching", desc: "Si conclude con stretching e recupero sull’acqua." },
      ],
      note: "Requisito: riuscire ad alzarsi facilmente e mantenere una rotta dritta.",
      limited: "Posti limitati. Leash e giubbotto salvagente obbligatori.",
      buttonType: "training",
    },
    es: {
      label: "🏋️ SUP Training Club",
      heading: "🏄‍♂️ Club de Entrenamiento SUP Intermedio",
      price: "25€ sesión • 160€ membresía mensual",
      image: "/paddletraining.jpeg",
      imageAlt: "Entrenamiento SUP en Sarandë",
      intro:
        "¿Ya sabes remar? Mejora tu técnica con un entrenamiento increíble por la mañana sobre el agua.",
      together: "Lo que hacemos:",
      items: [
        { title: "🗓️ Lunes & Jueves", desc: "A las 7:30 AM, el momento perfecto con agua tranquila." },
        { title: "⏳ 1 Hora Completa", desc: "Una hora de acción, coaching, fitness y técnica." },
        { title: "🏃 Paddle Fitness", desc: "No es un tour lento — es un entrenamiento real." },
        { title: "🎯 Correcciones Técnicas", desc: "Correcciones en tiempo real para potencia y control." },
        { title: "⚡ Intervalos & Giros", desc: "Intervalos intensos y pivot turns alrededor de las boyas." },
        { title: "🧘 Estiramiento", desc: "Terminamos con recuperación y estiramientos sobre el agua." },
      ],
      note: "Requisito: poder ponerte de pie fácilmente y mantener línea recta.",
      limited: "Plazas limitadas. Leash y chaleco salvavidas obligatorios.",
      buttonType: "training",
    },
  },
  games: {
    en: {
      label: "🏆 SUP Team Challenge",
      heading: "🏆 SUP Team Challenge",
      price: "15€ per team • Teams of 3",
      image: "/paddleinfo.png",
      imageAlt: "SUP team challenge games in Sarandë",
      intro:
        "Gather your team of three and take on four exciting SUP challenges that test teamwork, balance, strategy, and speed.",
      together: "The Four Challenge Events",
      items: [
        { title: "🛶 The Rescue", desc: "A high-stakes progressive relay race." },
        { title: "🎿 The Human Ski", desc: "Two people stand across two parallel boards and move together." },
        { title: "🤼 Board Gladiator", desc: "The ultimate balance duel. Last one standing wins." },
        { title: "🎈 Color Hunt", desc: "Speed and partner strategy to collect floating treasures." },
        { title: "📍 Yoga Dock Station", desc: "The challenge takes place right at our yoga dock relay station." },
        { title: "🏄 Boards Provided", desc: "Premium boards included: ST, Monster, Vapor, Fusion, and Magma." },
      ],
      note: "Entry Fee: 15€ per team (only 5€ per person).",
      limited: "Spaces are limited to ensure a safe and enjoyable event for every team.",
      rules: [
        {
          title: "🛶 The Rescue Rules",
          desc: "Two teams race at the same time. Participant 1 starts standing from the shoreline, paddles to the yoga dock, picks up Participant 2 seated or kneeling at the front, goes around the dock, returns to shore, picks up Participant 3, then all 3 paddle back to touch the yoga dock. Participant 1 must stay standing the entire time. If they fall, they must fully remount before continuing.",
        },
        {
          title: "🎿 The Human Ski Rules",
          desc: "Two participants use two boards in parallel. Each person places one foot on each board and they move together from the shoreline to the finish line. If someone falls or the boards separate too much, they must stop, realign the boards, climb back up, and continue from the same spot.",
        },
        {
          title: "🤼 Board Gladiator Rules",
          desc: "Two competitors stand face-to-face on one stable board near the yoga dock. They rock the board using their legs and balance to destabilize each other. The last person standing wins. Physical contact, pushing, paddle contact, or outside objects are not allowed.",
        },
        {
          title: "🎈 Color Hunt Rules",
          desc: "Two team members ride one board and collect floating objects of their assigned color. One person steers while standing, and the other kneels at the front to collect. The first team to return to shore with all objects of their color wins. Wrong colors must be returned exactly where they were found.",
        },
      ],
      gameDetails: [
        {
          title: "🛶 Game 1: The Yoga Dock Rescue",
          boards: "Boards: ST and Monster",
          focus: "Focus: Strategy, endurance, and progressive load.",
          logistics:
            "2 teams compete at the same time. One large board per team. Participant 1 starts at the shoreline; Participants 2 and 3 wait at the yoga dock and shoreline.",
          dynamics: [
            "Participant 1 starts standing from the shoreline and paddles to the yoga dock.",
            "Participant 1 picks up Participant 2, who travels seated or kneeling at the front of the board.",
            "They go completely around the yoga dock and return to the shoreline.",
            "Participant 3 gets on the board at the shoreline, then the full team paddles back toward the yoga dock.",
          ],
          winning:
            "The first team to touch the yoga dock with all 3 team members on board wins.",
          goldenRule:
            "Participant 1 must remain standing during the entire course. If they fall, they must fully remount before continuing.",
        },
        {
          title: "🎿 Game 2: The Human Ski",
          boards: "Boards: Vapor, RF Blue, Fusion, and Magma",
          focus:
            "Focus: Synchronization, leg strength, coordination, and guaranteed laughs.",
          logistics:
            "2 participants per team. Each pair uses two boards positioned parallel to each other.",
          dynamics: [
            "Both participants stand across the two parallel boards.",
            "Each person places their left foot on the left board and right foot on the right board.",
            "On the start signal, they coordinate their movements to advance in a straight line.",
            "They continue from the shoreline to the finish line or until they touch the yoga dock.",
          ],
          winning: "The first pair to cross the finish line wins.",
          goldenRule:
            "If a participant falls or the boards separate too much, they must stop, realign the boards, climb back up, and resume from that exact spot.",
        },
        {
          title: "🤼 Game 3: The Board Gladiator",
          boards: "Board: ST",
          focus: "Focus: Balance, rail control, and staying power.",
          logistics:
            "The widest and most stable board is placed near the yoga dock. One competitor from each team steps onto the same board.",
          dynamics: [
            "Both competitors stand face-to-face on opposite ends of the board.",
            "On the signal, they move their legs, bend their knees, and rock the board side to side.",
            "The goal is to create waves using the board’s rails and destabilize the opponent.",
          ],
          winning:
            "The last participant remaining standing wins. One point is awarded to their team.",
          goldenRule:
            "Physical contact is strictly prohibited. No pushing, paddle contact, or outside objects. The water must only be shaken through movement of the board.",
        },
        {
          title: "🎈 Game 4: Color Hunt",
          boards: "Boards: Fusion and Vapor",
          focus: "Focus: Partner strategy, steering, and maneuvering speed.",
          logistics:
            "4 to 5 floating objects of two different colors are scattered in the water. 2 members per team participate on one board.",
          dynamics: [
            "Each team is assigned a color and paddles from the shoreline toward the floating objects.",
            "One participant stands and maneuvers the board.",
            "The second participant kneels at the front and collects the objects of their assigned color.",
          ],
          winning:
            "The first team to return to the shoreline with all objects of their assigned color on board wins.",
          goldenRule:
            "If a team picks up the wrong color, they must return it exactly to the place where they found it before continuing.",
        },
      ],
            buttonType: "team",
    },
    sq: {
      label: "🏆 SUP Team Challenge",
      heading: "🏆 Sfida SUP me Ekipe",
      price: "15€ për ekip • Ekipe me 3 persona",
      image: "/paddleinfo.png",
      imageAlt: "Lojëra SUP me ekipe në Sarandë",
      intro:
        "Mblidh ekipin dhe jepni maksimumin. Strategji, balancë, punë në ekip dhe shumë argëtim.",
      together: "4 lojërat epike:",
      items: [
        { title: "🛶 The Rescue", desc: "Garë relay progresive me shumë aksion." },
        { title: "🎿 The Human Ski", desc: "Dy persona mbi dy borde paralele lëvizin së bashku." },
        { title: "🤼 Board Gladiator", desc: "Duel balance. Fiton ai që qëndron i fundit." },
        { title: "🎈 Color Hunt", desc: "Shpejtësi dhe strategji për të mbledhur objektet lundruese." },
        { title: "📍 Yoga Dock Station", desc: "Sfida zhvillohet pranë yoga dock." },
        { title: "🏄 Bordet Përfshihen", desc: "Borde premium: ST, Monster, Vapor, Fusion dhe Magma." },
      ],
      note: "Regjistrimi kushton vetëm 15€ për ekip, pra 5€ për person.",
      limited: "Vendet janë shumë të kufizuara për logjistikë dhe siguri.",
      rules: [
        {
          title: "🛶 Rregullat e The Rescue",
          desc: "Dy ekipe garojnë njëkohësisht. Pjesëmarrësi 1 nis në këmbë nga bregu, shkon te yoga dock, merr Pjesëmarrësin 2 ulur ose në gjunjë përpara, bën xhiro rreth dock, kthehet në breg, merr Pjesëmarrësin 3 dhe pastaj të tre kthehen te yoga dock. Pjesëmarrësi 1 duhet të qëndrojë në këmbë gjatë gjithë kohës. Nëse bie, duhet të hipë përsëri plotësisht para se të vazhdojë.",
        },
        {
          title: "🎿 Rregullat e The Human Ski",
          desc: "Dy pjesëmarrës përdorin dy borde paralele. Secili vendos një këmbë në secilin bord dhe lëvizin së bashku deri në finish. Nëse dikush bie ose bordet ndahen shumë, duhet të ndalojnë, t’i rregullojnë bordet paralel, të hipin përsëri dhe të vazhdojnë nga i njëjti vend.",
        },
        {
          title: "🤼 Rregullat e Board Gladiator",
          desc: "Dy garues qëndrojnë përballë njëri-tjetrit mbi një bord të qëndrueshëm pranë yoga dock. Ata lëkundin bordin me këmbë dhe balancë për të destabilizuar kundërshtarin. Fiton ai që qëndron i fundit në këmbë. Kontakti fizik, shtyrja, prekja me lopatë ose objektet e jashtme nuk lejohen.",
        },
        {
          title: "🎈 Rregullat e Color Hunt",
          desc: "Dy anëtarë të ekipit përdorin një bord dhe mbledhin objektet lundruese me ngjyrën e tyre. Njëri drejton në këmbë dhe tjetri qëndron në gjunjë përpara për të mbledhur objektet. Fiton ekipi që kthehet i pari në breg me të gjitha objektet e ngjyrës së vet. Ngjyrat e gabuara duhet të kthehen aty ku u gjetën.",
        },
      ],
      gameDetails: [
        {
          title: "🛶 Loja 1: The Yoga Dock Rescue",
          boards: "Borde: ST dhe Monster",
          focus: "Fokusi: Strategji, qëndrueshmëri dhe ngarkesë progresive.",
          logistics:
            "2 ekipe garojnë njëkohësisht. Një bord i madh për çdo ekip. Pjesëmarrësi 1 nis nga bregu; Pjesëmarrësit 2 dhe 3 presin te yoga dock dhe te bregu.",
          dynamics: [
            "Pjesëmarrësi 1 nis në këmbë nga bregu dhe shkon me paddle te yoga dock.",
            "Pjesëmarrësi 1 merr Pjesëmarrësin 2, i cili qëndron ulur ose në gjunjë në pjesën e përparme të bordit.",
            "Ata bëjnë xhiro plotësisht rreth yoga dock dhe kthehen në breg.",
            "Pjesëmarrësi 3 hipën në bord në breg, pastaj i gjithë ekipi kthehet me forcë drejt yoga dock.",
          ],
          winning:
            "Fiton ekipi i parë që prek yoga dock me të 3 anëtarët në bord.",
          goldenRule:
            "Pjesëmarrësi 1 duhet të qëndrojë në këmbë gjatë gjithë kursit. Nëse bie, duhet të hipë përsëri plotësisht para se të vazhdojë.",
        },
        {
          title: "🎿 Loja 2: The Human Ski",
          boards: "Borde: Vapor, RF Blue, Fusion dhe Magma",
          focus:
            "Fokusi: Sinkronizim, forcë këmbësh, koordinim dhe shumë të qeshura.",
          logistics:
            "2 pjesëmarrës për çdo ekip. Çdo çift përdor dy borde të vendosura paralel.",
          dynamics: [
            "Të dy pjesëmarrësit qëndrojnë mbi dy bordet paralele.",
            "Secili vendos këmbën e majtë në bordin e majtë dhe këmbën e djathtë në bordin e djathtë.",
            "Pas sinjalit të nisjes, ata koordinojnë lëvizjet për të ecur drejt.",
            "Ata vazhdojnë nga bregu deri te finishi ose deri sa të prekin yoga dock.",
          ],
          winning: "Fiton çifti i parë që kalon vijën e finishit.",
          goldenRule:
            "Nëse dikush bie ose bordet ndahen shumë, ata duhet të ndalojnë, t’i vendosin bordet paralel, të hipin përsëri dhe të vazhdojnë nga i njëjti vend.",
        },
        {
          title: "🤼 Loja 3: Board Gladiator",
          boards: "Bord: ST",
          focus: "Fokusi: Balancë, kontroll i bordit dhe qëndrueshmëri.",
          logistics:
            "Bordi më i gjerë dhe më stabil vendoset pranë yoga dock. Një garues nga çdo ekip hipën në të njëjtin bord.",
          dynamics: [
            "Të dy garuesit qëndrojnë përballë njëri-tjetrit në skaje të kundërta të bordit.",
            "Pas sinjalit, ata lëvizin këmbët, përkulen dhe lëkundin bordin anash.",
            "Qëllimi është të krijojnë valë me bordin dhe të destabilizojnë kundërshtarin.",
          ],
          winning:
            "Fiton pjesëmarrësi që qëndron i fundit në këmbë. Ekipi i tij merr një pikë.",
          goldenRule:
            "Kontakti fizik është i ndaluar. Nuk lejohen shtyrjet, prekjet me lopatë ose objekte të jashtme. Uji duhet të lëkundet vetëm nga lëvizja e bordit.",
        },
        {
          title: "🎈 Loja 4: Color Hunt",
          boards: "Borde: Fusion dhe Vapor",
          focus: "Fokusi: Strategji në çift, drejtim dhe shpejtësi manovrimi.",
          logistics:
            "4 deri në 5 objekte lundruese me dy ngjyra vendosen në ujë. 2 anëtarë të ekipit marrin pjesë në një bord.",
          dynamics: [
            "Çdo ekip merr një ngjyrë dhe niset nga bregu drejt objekteve lundruese.",
            "Njëri pjesëmarrës qëndron në këmbë dhe drejton bordin.",
            "Pjesëmarrësi tjetër qëndron në gjunjë përpara dhe mbledh objektet me ngjyrën e ekipit.",
          ],
          winning:
            "Fiton ekipi i parë që kthehet në breg me të gjitha objektet e ngjyrës së vet në bord.",
          goldenRule:
            "Nëse marrin gabimisht një ngjyrë tjetër, duhet ta kthejnë saktësisht aty ku e gjetën para se të vazhdojnë.",
        },
      ],
            buttonType: "team",
    },
    fr: {
      label: "🏆 Défi SUP en Équipe",
      heading: "🏆 Défi SUP en Équipe",
      price: "15€ par équipe • Équipes de 3",
      image: "/paddleinfo.png",
      imageAlt: "Jeux SUP en équipe à Sarandë",
      intro:
        "Rassemblez votre équipe. Stratégie, équilibre, travail d’équipe et amusement garantis.",
      together: "Les 4 jeux épiques :",
      items: [
        { title: "🛶 The Rescue", desc: "Une course relais progressive pleine d’action." },
        { title: "🎿 The Human Ski", desc: "Deux personnes sur deux planches parallèles avancent ensemble." },
        { title: "🤼 Board Gladiator", desc: "Le duel ultime d’équilibre. Le dernier debout gagne." },
        { title: "🎈 Color Hunt", desc: "Vitesse et stratégie en duo pour collecter les objets flottants." },
        { title: "📍 Yoga Dock Station", desc: "Le challenge se déroule à la station yoga dock." },
        { title: "🏄 Planches Fournies", desc: "Planches premium : ST, Monster, Vapor, Fusion et Magma." },
      ],
      note: "Inscription seulement 15€ par équipe, soit 5€ par personne.",
      limited: "Places strictement limitées pour la logistique et la sécurité.",
      rules: [
        {
          title: "🛶 Règles de The Rescue",
          desc: "Deux équipes courent en même temps. Le participant 1 part debout du rivage, rejoint le yoga dock, récupère le participant 2 assis ou à genoux à l’avant, fait le tour du dock, revient au rivage, récupère le participant 3, puis les 3 pagaient jusqu’au yoga dock. Le participant 1 doit rester debout tout le temps. S’il tombe, il doit remonter complètement avant de continuer.",
        },
        {
          title: "🎿 Règles de The Human Ski",
          desc: "Deux participants utilisent deux planches parallèles. Chacun place un pied sur chaque planche et ils avancent ensemble jusqu’à l’arrivée. Si quelqu’un tombe ou si les planches s’écartent trop, ils doivent s’arrêter, réaligner les planches, remonter et continuer depuis le même endroit.",
        },
        {
          title: "🤼 Règles de Board Gladiator",
          desc: "Deux concurrents se tiennent face à face sur une planche stable près du yoga dock. Ils font bouger la planche avec les jambes et l’équilibre pour déstabiliser l’adversaire. Le dernier debout gagne. Contact physique, poussée, contact avec la pagaie ou objets extérieurs interdits.",
        },
        {
          title: "🎈 Règles de Color Hunt",
          desc: "Deux membres utilisent une planche et ramassent les objets flottants de leur couleur. Une personne dirige debout, l’autre reste à genoux à l’avant pour collecter. La première équipe qui revient au rivage avec tous ses objets gagne. Les mauvaises couleurs doivent être remises exactement où elles ont été trouvées.",
        },
      ],
      gameDetails: [
        {
          title: "🛶 Jeu 1 : The Yoga Dock Rescue",
          boards: "Planches : ST et Monster",
          focus: "Objectif : stratégie, endurance et charge progressive.",
          logistics:
            "2 équipes concourent en même temps. Une grande planche par équipe. Le participant 1 part du rivage ; les participants 2 et 3 attendent au yoga dock et au rivage.",
          dynamics: [
            "Le participant 1 part debout du rivage et pagaie jusqu’au yoga dock.",
            "Il récupère le participant 2, assis ou à genoux à l’avant de la planche.",
            "Ils font complètement le tour du yoga dock et reviennent au rivage.",
            "Le participant 3 monte sur la planche au rivage, puis l’équipe complète repart vers le yoga dock.",
          ],
          winning:
            "La première équipe qui touche le yoga dock avec les 3 membres sur la planche gagne.",
          goldenRule:
            "Le participant 1 doit rester debout pendant tout le parcours. S’il tombe, il doit remonter complètement avant de continuer.",
        },
        {
          title: "🎿 Jeu 2 : The Human Ski",
          boards: "Planches : Vapor, RF Blue, Fusion et Magma",
          focus:
            "Objectif : synchronisation, force des jambes, coordination et rires garantis.",
          logistics:
            "2 participants par équipe. Chaque duo utilise deux planches placées en parallèle.",
          dynamics: [
            "Les deux participants se tiennent sur les deux planches parallèles.",
            "Chacun place le pied gauche sur la planche gauche et le pied droit sur la planche droite.",
            "Au signal, ils coordonnent leurs mouvements pour avancer en ligne droite.",
            "Ils avancent du rivage jusqu’à la ligne d’arrivée ou jusqu’au yoga dock.",
          ],
          winning: "Le premier duo à franchir la ligne d’arrivée gagne.",
          goldenRule:
            "Si quelqu’un tombe ou si les planches s’écartent trop, ils doivent s’arrêter, réaligner les planches, remonter et reprendre exactement au même endroit.",
        },
        {
          title: "🤼 Jeu 3 : Board Gladiator",
          boards: "Planche : ST",
          focus: "Objectif : équilibre, contrôle des rails et résistance.",
          logistics:
            "La planche la plus large et stable est placée près du yoga dock. Un compétiteur de chaque équipe monte sur la même planche.",
          dynamics: [
            "Les deux compétiteurs se tiennent face à face aux extrémités opposées de la planche.",
            "Au signal, ils bougent les jambes, plient les genoux et font basculer la planche de côté.",
            "Le but est de créer des vagues avec les rails de la planche et de déstabiliser l’adversaire.",
          ],
          winning:
            "Le dernier participant debout gagne. Un point est attribué à son équipe.",
          goldenRule:
            "Le contact physique est strictement interdit. Pas de poussée, contact avec la pagaie ou objets extérieurs. L’eau doit être agitée uniquement par le mouvement de la planche.",
        },
        {
          title: "🎈 Jeu 4 : Color Hunt",
          boards: "Planches : Fusion et Vapor",
          focus: "Objectif : stratégie en duo, pilotage et vitesse de manœuvre.",
          logistics:
            "4 à 5 objets flottants de deux couleurs sont placés dans l’eau. 2 membres par équipe participent sur une seule planche.",
          dynamics: [
            "Chaque équipe reçoit une couleur et part du rivage vers les objets flottants.",
            "Un participant reste debout et dirige la planche.",
            "Le second reste à genoux à l’avant et collecte les objets de sa couleur.",
          ],
          winning:
            "La première équipe qui revient au rivage avec tous les objets de sa couleur gagne.",
          goldenRule:
            "Si une équipe prend la mauvaise couleur, elle doit la remettre exactement où elle l’a trouvée avant de continuer.",
        },
      ],
            buttonType: "team",
    },
    it: {
      label: "🏆 SUP Team Challenge",
      heading: "🏆 SUP Team Challenge",
      price: "15€ per squadra • Squadre da 3",
      image: "/paddleinfo.png",
      imageAlt: "Giochi SUP a squadre a Sarandë",
      intro:
        "Raduna la tua squadra. Strategia, equilibrio, lavoro di squadra e puro divertimento.",
      together: "I 4 giochi epici:",
      items: [
        { title: "🛶 The Rescue", desc: "Una staffetta progressiva ricca di azione." },
        { title: "🎿 The Human Ski", desc: "Due persone su due tavole parallele avanzano insieme." },
        { title: "🤼 Board Gladiator", desc: "Il duello finale di equilibrio. Vince l’ultimo in piedi." },
        { title: "🎈 Color Hunt", desc: "Velocità e strategia per raccogliere oggetti galleggianti." },
        { title: "📍 Yoga Dock Station", desc: "La sfida si svolge presso lo yoga dock." },
        { title: "🏄 Tavole Incluse", desc: "Tavole premium: ST, Monster, Vapor, Fusion e Magma." },
      ],
      note: "Iscrizione solo 15€ per squadra, cioè 5€ a persona.",
      limited: "Posti strettamente limitati per logistica e sicurezza.",
      rules: [
        {
          title: "🛶 Regole di The Rescue",
          desc: "Due squadre gareggiano contemporaneamente. Il partecipante 1 parte in piedi dalla riva, arriva allo yoga dock, prende il partecipante 2 seduto o in ginocchio davanti, gira intorno al dock, torna a riva, prende il partecipante 3 e poi tutti e 3 tornano al yoga dock. Il partecipante 1 deve restare in piedi per tutto il tempo. Se cade, deve risalire completamente prima di continuare.",
        },
        {
          title: "🎿 Regole di The Human Ski",
          desc: "Due partecipanti usano due tavole parallele. Ognuno mette un piede su ogni tavola e avanzano insieme fino al traguardo. Se qualcuno cade o le tavole si separano troppo, devono fermarsi, riallineare le tavole, risalire e continuare dallo stesso punto.",
        },
        {
          title: "🤼 Regole di Board Gladiator",
          desc: "Due concorrenti stanno faccia a faccia su una tavola stabile vicino allo yoga dock. Devono muovere la tavola con gambe ed equilibrio per destabilizzare l’avversario. Vince l’ultimo che rimane in piedi. Vietati contatto fisico, spinte, contatto con la pagaia o oggetti esterni.",
        },
        {
          title: "🎈 Regole di Color Hunt",
          desc: "Due membri usano una tavola e raccolgono gli oggetti galleggianti del proprio colore. Una persona guida in piedi, l’altra sta in ginocchio davanti per raccogliere. Vince la prima squadra che torna a riva con tutti gli oggetti del proprio colore. I colori sbagliati devono essere rimessi esattamente dove sono stati trovati.",
        },
      ],
      gameDetails: [
        {
          title: "🛶 Gioco 1: The Yoga Dock Rescue",
          boards: "Tavole: ST e Monster",
          focus: "Focus: strategia, resistenza e carico progressivo.",
          logistics:
            "2 squadre gareggiano contemporaneamente. Una tavola grande per squadra. Il partecipante 1 parte dalla riva; i partecipanti 2 e 3 aspettano allo yoga dock e alla riva.",
          dynamics: [
            "Il partecipante 1 parte in piedi dalla riva e pagaia fino allo yoga dock.",
            "Prende il partecipante 2, seduto o in ginocchio davanti alla tavola.",
            "Fanno tutto il giro dello yoga dock e tornano alla riva.",
            "Il partecipante 3 sale sulla tavola alla riva, poi tutta la squadra torna verso lo yoga dock.",
          ],
          winning:
            "Vince la prima squadra che tocca lo yoga dock con tutti e 3 i membri sulla tavola.",
          goldenRule:
            "Il partecipante 1 deve restare in piedi per tutto il percorso. Se cade, deve risalire completamente prima di continuare.",
        },
        {
          title: "🎿 Gioco 2: The Human Ski",
          boards: "Tavole: Vapor, RF Blue, Fusion e Magma",
          focus:
            "Focus: sincronizzazione, forza delle gambe, coordinazione e risate assicurate.",
          logistics:
            "2 partecipanti per squadra. Ogni coppia usa due tavole posizionate in parallelo.",
          dynamics: [
            "I due partecipanti stanno sulle due tavole parallele.",
            "Ognuno mette il piede sinistro sulla tavola sinistra e il piede destro sulla tavola destra.",
            "Al segnale, coordinano i movimenti per avanzare in linea retta.",
            "Avanzano dalla riva fino al traguardo o fino allo yoga dock.",
          ],
          winning: "Vince la prima coppia che attraversa il traguardo.",
          goldenRule:
            "Se qualcuno cade o le tavole si separano troppo, devono fermarsi, riallineare le tavole, risalire e riprendere dallo stesso punto.",
        },
        {
          title: "🤼 Gioco 3: Board Gladiator",
          boards: "Tavola: ST",
          focus: "Focus: equilibrio, controllo dei rail e resistenza.",
          logistics:
            "La tavola più larga e stabile viene posizionata vicino allo yoga dock. Un concorrente per squadra sale sulla stessa tavola.",
          dynamics: [
            "I due concorrenti stanno faccia a faccia alle estremità opposte della tavola.",
            "Al segnale, muovono le gambe, piegano le ginocchia e fanno oscillare la tavola.",
            "L’obiettivo è creare onde con i rail della tavola e destabilizzare l’avversario.",
          ],
          winning:
            "Vince l’ultimo partecipante che rimane in piedi. La sua squadra riceve un punto.",
          goldenRule:
            "Il contatto fisico è severamente vietato. Niente spinte, contatto con la pagaia o oggetti esterni. L’acqua deve essere mossa solo dal movimento della tavola.",
        },
        {
          title: "🎈 Gioco 4: Color Hunt",
          boards: "Tavole: Fusion e Vapor",
          focus: "Focus: strategia di coppia, guida e velocità di manovra.",
          logistics:
            "4 o 5 oggetti galleggianti di due colori vengono sparsi in acqua. 2 membri per squadra partecipano su una sola tavola.",
          dynamics: [
            "Ogni squadra riceve un colore e parte dalla riva verso gli oggetti galleggianti.",
            "Un partecipante sta in piedi e guida la tavola.",
            "Il secondo sta in ginocchio davanti e raccoglie gli oggetti del colore assegnato.",
          ],
          winning:
            "Vince la prima squadra che torna a riva con tutti gli oggetti del proprio colore sulla tavola.",
          goldenRule:
            "Se una squadra prende un colore sbagliato, deve rimetterlo esattamente dove lo ha trovato prima di continuare.",
        },
      ],
            buttonType: "team",
    },
    es: {
      label: "🏆 SUP Team Challenge",
      heading: "🏆 SUP Team Challenge",
      price: "15€ por equipo • Equipos de 3",
      image: "/paddleinfo.png",
      imageAlt: "Juegos SUP por equipos en Sarandë",
      intro:
        "Reúne a tu equipo. Estrategia, equilibrio, trabajo en equipo y diversión garantizada.",
      together: "Los 4 juegos épicos:",
      items: [
        { title: "🛶 The Rescue", desc: "Una carrera de relevos progresiva llena de acción." },
        { title: "🎿 The Human Ski", desc: "Dos personas sobre dos tablas paralelas avanzan juntas." },
        { title: "🤼 Board Gladiator", desc: "El duelo final de equilibrio. Gana el último en pie." },
        { title: "🎈 Color Hunt", desc: "Velocidad y estrategia en pareja para recoger objetos flotantes." },
        { title: "📍 Yoga Dock Station", desc: "El challenge se realiza en la estación yoga dock." },
        { title: "🏄 Tablas Incluidas", desc: "Tablas premium: ST, Monster, Vapor, Fusion y Magma." },
      ],
      note: "La inscripción cuesta solo 15€ por equipo, apenas 5€ por persona.",
      limited: "Plazas estrictamente limitadas por logística y seguridad.",
      rules: [
        {
          title: "🛶 Reglas de The Rescue",
          desc: "Dos equipos compiten al mismo tiempo. El participante 1 sale de pie desde la orilla, llega al yoga dock, recoge al participante 2 sentado o de rodillas al frente, rodea el dock, vuelve a la orilla, recoge al participante 3 y luego los 3 reman hasta tocar el yoga dock. El participante 1 debe permanecer de pie todo el tiempo. Si cae, debe subir completamente antes de continuar.",
        },
        {
          title: "🎿 Reglas de The Human Ski",
          desc: "Dos participantes usan dos tablas paralelas. Cada persona coloca un pie en cada tabla y avanzan juntas hasta la meta. Si alguien cae o las tablas se separan demasiado, deben detenerse, realinear las tablas, subir de nuevo y continuar desde el mismo lugar.",
        },
        {
          title: "🤼 Reglas de Board Gladiator",
          desc: "Dos competidores se colocan frente a frente sobre una tabla estable cerca del yoga dock. Mueven la tabla con las piernas y el equilibrio para desestabilizar al oponente. Gana el último en pie. No se permite contacto físico, empujar, tocar con el remo ni usar objetos externos.",
        },
        {
          title: "🎈 Reglas de Color Hunt",
          desc: "Dos miembros usan una tabla y recogen objetos flotantes de su color asignado. Una persona dirige de pie y la otra va de rodillas al frente para recoger. Gana el primer equipo que vuelve a la orilla con todos los objetos de su color. Los colores equivocados deben devolverse exactamente donde se encontraron.",
        },
      ],
      gameDetails: [
        {
          title: "🛶 Juego 1: The Yoga Dock Rescue",
          boards: "Tablas: ST y Monster",
          focus: "Enfoque: estrategia, resistencia y carga progresiva.",
          logistics:
            "2 equipos compiten al mismo tiempo. Una tabla grande por equipo. El participante 1 empieza en la orilla; los participantes 2 y 3 esperan en el yoga dock y la orilla.",
          dynamics: [
            "El participante 1 sale de pie desde la orilla y rema hasta el yoga dock.",
            "Recoge al participante 2, que va sentado o de rodillas en la parte delantera de la tabla.",
            "Rodean completamente el yoga dock y regresan a la orilla.",
            "El participante 3 sube a la tabla en la orilla, y luego todo el equipo vuelve hacia el yoga dock.",
          ],
          winning:
            "Gana el primer equipo que toca el yoga dock con los 3 miembros sobre la tabla.",
          goldenRule:
            "El participante 1 debe permanecer de pie durante todo el recorrido. Si cae, debe subir completamente antes de continuar.",
        },
        {
          title: "🎿 Juego 2: The Human Ski",
          boards: "Tablas: Vapor, RF Blue, Fusion y Magma",
          focus:
            "Enfoque: sincronización, fuerza de piernas, coordinación y muchas risas.",
          logistics:
            "2 participantes por equipo. Cada pareja usa dos tablas colocadas en paralelo.",
          dynamics: [
            "Los dos participantes se colocan sobre las dos tablas paralelas.",
            "Cada persona pone el pie izquierdo en la tabla izquierda y el pie derecho en la tabla derecha.",
            "Con la señal de inicio, coordinan sus movimientos para avanzar en línea recta.",
            "Avanzan desde la orilla hasta la meta o hasta tocar el yoga dock.",
          ],
          winning: "Gana la primera pareja que cruza la línea de meta.",
          goldenRule:
            "Si alguien cae o las tablas se separan demasiado, deben detenerse, realinear las tablas, subir de nuevo y continuar desde el mismo punto.",
        },
        {
          title: "🤼 Juego 3: Board Gladiator",
          boards: "Tabla: ST",
          focus: "Enfoque: equilibrio, control de la tabla y resistencia.",
          logistics:
            "La tabla más ancha y estable se coloca cerca del yoga dock. Un competidor de cada equipo sube a la misma tabla.",
          dynamics: [
            "Los dos competidores se colocan frente a frente en extremos opuestos de la tabla.",
            "Con la señal, mueven las piernas, flexionan las rodillas y balancean la tabla de lado a lado.",
            "El objetivo es crear olas usando los bordes de la tabla para desestabilizar al oponente.",
          ],
          winning:
            "Gana el último participante que permanezca de pie. Su equipo recibe un punto.",
          goldenRule:
            "El contacto físico está estrictamente prohibido. No se permite empujar, tocar con el remo ni usar objetos externos. El agua solo puede moverse con el movimiento de la tabla.",
        },
        {
          title: "🎈 Juego 4: Color Hunt",
          boards: "Tablas: Fusion y Vapor",
          focus: "Enfoque: estrategia en pareja, dirección y velocidad de maniobra.",
          logistics:
            "4 o 5 objetos flotantes de dos colores se colocan en el agua. 2 miembros por equipo participan en una sola tabla.",
          dynamics: [
            "Cada equipo recibe un color y sale desde la orilla hacia los objetos flotantes.",
            "Un participante va de pie y dirige la tabla.",
            "El segundo va de rodillas en la parte delantera y recoge los objetos de su color.",
          ],
          winning:
            "Gana el primer equipo que regresa a la orilla con todos los objetos de su color sobre la tabla.",
          goldenRule:
            "Si un equipo recoge un color equivocado, debe devolverlo exactamente al lugar donde lo encontró antes de continuar.",
        },
      ],
            buttonType: "team",
    },
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

function GameDetailCards({
  games,
  t,
}: {
  games: NonNullable<(typeof experiences)["games"][Lang]["gameDetails"]>;
  t: (typeof text)[Lang];
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.85rem",
        marginBottom: "1.5rem",
        textAlign: "left",
      }}
    >
      {games.map((game, index) => {
        const themes = [
          {
            border: "#0ea5e9",
            bg: "linear-gradient(135deg,#eff9ff 0%,#dff4ff 100%)",
            panel: "#eef9ff",
          },
          {
            border: "#22c55e",
            bg: "linear-gradient(135deg,#f3fff7 0%,#e4faec 100%)",
            panel: "#f2fff6",
          },
          {
            border: "#f97316",
            bg: "linear-gradient(135deg,#fff8f2 0%,#ffeddc 100%)",
            panel: "#fff7ef",
          },
          {
            border: "#eab308",
            bg: "linear-gradient(135deg,#fffdf0 0%,#fff8d7 100%)",
            panel: "#fffdf2",
          },
        ];
        const theme = themes[index % themes.length];

        return (
        <details
          key={game.title}
          style={{
            background: "#ffffff",
            border: `2px solid ${theme.border}`,
            borderRadius: "18px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              padding: "1rem 1.1rem",
              color: theme.border,
              fontWeight: 900,
              fontSize: "1.05rem",
              lineHeight: 1.4,
              background: theme.bg,
            }}
          >
            {t.gameTitles?.[index] ?? game.title}
          </summary>

          <div
            style={{
              padding: "1rem 1.1rem 1.15rem",
              borderTop: "1px solid rgba(10,93,120,0.10)",
              color: "#284b57",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              {[game.boards, game.focus, game.logistics].map((line) => (
                <p
                  key={line}
                  style={{
                    margin: 0,
                    lineHeight: 1.65,
                    background: theme.panel,
                    borderRadius: "12px",
                    padding: "0.75rem 0.85rem",
                    border: "1px solid rgba(10,93,120,0.08)",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            <h4
              style={{
                color: "#143642",
                margin: "0 0 0.6rem",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {t.dynamics}
            </h4>

            <ol
              style={{
                margin: "0 0 1rem 1.25rem",
                padding: 0,
                lineHeight: 1.65,
              }}
            >
              {game.dynamics.map((step) => (
                <li key={step} style={{ marginBottom: "0.35rem" }}>
                  {step}
                </li>
              ))}
            </ol>

            <div
              style={{
                display: "grid",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  background: "#eef9fc",
                  borderRadius: "14px",
                  padding: "0.85rem 1rem",
                  borderLeft: "4px solid #0a5d78",
                }}
              >
                <strong style={{ color: "#0a5d78" }}>
                  {t.winningCondition}
                </strong>
                <p style={{ margin: "0.35rem 0 0", lineHeight: 1.65 }}>
                  {game.winning}
                </p>
              </div>

              <div
                style={{
                  background: "#fff8e8",
                  borderRadius: "14px",
                  padding: "0.85rem 1rem",
                  borderLeft: "4px solid #f59e0b",
                }}
              >
                <strong style={{ color: "#a16207" }}>⭐ {t.goldenRule}</strong>
                <p style={{ margin: "0.35rem 0 0", lineHeight: 1.65 }}>
                  {game.goldenRule}
                </p>
              </div>
            </div>
          </div>
        </details>
        );
      })}
    </div>
  );
}

function ActivityCard({
  sectionKey,
  experience,
  isOpen,
  onToggle,
  buttonText,
  t,
}: {
  sectionKey: SectionKey;
  experience: (typeof experiences)[SectionKey][Lang];
  isOpen: boolean;
  onToggle: (key: SectionKey) => void;
  buttonText: string;
  t: (typeof text)[Lang];
}) {
  return (
    <article
      style={{
        background: "rgba(255,255,255,0.96)",
        borderRadius: "26px",
        boxShadow: isOpen
          ? "0 18px 45px rgba(0,0,0,0.16)"
          : "0 10px 28px rgba(0,0,0,0.09)",
        border: isOpen
          ? "2px solid rgba(10,93,120,0.45)"
          : "1px solid rgba(10,93,120,0.12)",
        overflow: "hidden",
        transition: "all 0.25s ease",
      }}
    >
      <button
        onClick={() => onToggle(sectionKey)}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "230px",
              overflow: "hidden",
            }}
          >
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              width={900}
              height={1200}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "230px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0.45))",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "1rem",
                bottom: "1rem",
                background: "rgba(255,255,255,0.92)",
                color: "#0a5d78",
                borderRadius: "999px",
                padding: "0.45rem 0.85rem",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
              }}
            >
              {experience.price}
            </div>
          </div>

          <div
            style={{
              padding: "1.4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "#0a5d78",
                    fontSize: "1.55rem",
                    lineHeight: 1.15,
                  }}
                >
                  {experience.label}
                </h3>

                <p
                  style={{
                    margin: "0.7rem 0 0",
                    color: "#284b57",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {experience.intro}
                </p>
              </div>

              <span
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "999px",
                  background: "#0a5d78",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "1.45rem",
                  flex: "0 0 auto",
                  boxShadow: "0 8px 20px rgba(10,93,120,0.25)",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "#0a5d78",
                fontWeight: 800,
                fontSize: "0.95rem",
                marginTop: "0.25rem",
              }}
            >
              {isOpen ? t.hideDetails : t.viewDetails}
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 1.4rem 1.6rem",
            borderTop: "1px solid rgba(10,93,120,0.10)",
          }}
        >
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              paddingTop: "1.4rem",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#0a5d78",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {experience.heading}
            </h2>

            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                color: "#143642",
              }}
            >
              {experience.together}
            </h3>

            {experience.gameDetails && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#eef9fc",
                    borderRadius: "16px",
                    padding: "1rem",
                    borderLeft: "4px solid #0a5d78",
                  }}
                >
                  <strong style={{ color: "#0a5d78", display: "block", marginBottom: "0.35rem" }}>
                    📍 {t.meetingPoint}
                  </strong>
                  <span style={{ color: "#284b57", lineHeight: 1.6 }}>
                    {t.meetingPointDesc}
                  </span>
                </div>

                <div
                  style={{
                    background: "#eef9fc",
                    borderRadius: "16px",
                    padding: "1rem",
                    borderLeft: "4px solid #0a5d78",
                  }}
                >
                  <strong style={{ color: "#0a5d78", display: "block", marginBottom: "0.35rem" }}>
                    🏄 {t.boardsIncluded}
                  </strong>
                  <span style={{ color: "#284b57", lineHeight: 1.6 }}>
                    {t.boardsIncludedDesc}
                  </span>
                </div>
              </div>
            )}

            {experience.gameDetails ? (
              <GameDetailCards games={experience.gameDetails} t={t} />
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "1.5rem",
                }}
              >
                {experience.items.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "0.9rem 1rem",
                      borderRadius: "16px",
                      background: "#eef9fc",
                      boxShadow: "0 5px 14px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(10,93,120,0.08)",
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
                    <span style={{ color: "#284b57", lineHeight: 1.55 }}>
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <p
              style={{
                lineHeight: 1.7,
                marginBottom: "0.75rem",
                color: "#284b57",
                fontWeight: 600,
              }}
            >
              {experience.note}
            </p>

            <p
              style={{
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                color: "#284b57",
                fontWeight: 600,
              }}
            >
              {experience.limited}
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
              💬 {buttonText}
            </a>

            <button
              onClick={() => onToggle(sectionKey)}
              type="button"
              style={{
                display: "block",
                margin: "1.2rem auto 0",
                border: "none",
                background: "transparent",
                color: "#0a5d78",
                fontWeight: 900,
                fontSize: "0.98rem",
                cursor: "pointer",
                padding: "0.55rem 0.85rem",
              }}
              aria-label={t.hideDetails}
            >
              ▲ {t.hideDetails}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [openSection, setOpenSection] = useState<SectionKey | null>(null);
  const t = text[lang];

  const getButtonText = (section: SectionKey) => {
    const buttonType = experiences[section][lang].buttonType;

    if (buttonType === "reserve") return t.reserve;
    if (buttonType === "training") return t.bookTraining;
    if (buttonType === "team") return t.bookTeam;

    return t.book;
  };

  const toggleSection = (key: SectionKey) => {
    setOpenSection((current) => (current === key ? null : key));
  };

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

      <section className="prices">
        <h2>{t.prices}</h2>

        <div className="price-grid">
          <div className="price-card">
            <span>🏄‍♂️ {t.oneHour}</span>
            <strong>10€</strong>
          </div>

          <div className="price-card">
            <span>🧘 {t.supYoga}</span>
            <strong>20€</strong>
          </div>

          <div className="price-card">
            <span>🏋️ {t.trainingSession}</span>
            <strong>25€</strong>
          </div>

          <div className="price-card">
            <span>🎫 {t.trainingMembership}</span>
            <strong>160€</strong>
            <small style={{ color: "#284b57", fontWeight: 800 }}>{t.sessions8}</small>
          </div>

          <div className="price-card">
            <span>🏆 {t.teamChallenge}</span>
            <strong>15€</strong>
            <small style={{ color: "#284b57", fontWeight: 800 }}>{t.perTeam}</small>
          </div>

          <div className="price-card popular">
            <small>{t.mostPopular}</small>
            <span>🌅 {t.sunsetPaddle}</span>
            <strong>15€</strong>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "4rem 1.5rem",
          background: "linear-gradient(135deg, #f7fcff 0%, #e8f7fb 100%)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "2.4rem",
                color: "#0a5d78",
                marginBottom: "0.75rem",
              }}
            >
              {t.chooseExperience}
            </h2>
            <p
              style={{
                color: "#284b57",
                fontSize: "1.08rem",
                lineHeight: 1.7,
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              {t.chooseSub}
            </p>
          </div>

          <div style={{ display: "grid", gap: "1.4rem" }}>
            {(["rentals", "yoga", "training", "games"] as SectionKey[]).map(
              (section) => (
                <ActivityCard
                  key={section}
                  sectionKey={section}
                  experience={experiences[section][lang]}
                  isOpen={openSection === section}
                  onToggle={toggleSection}
                  buttonText={getButtonText(section)}
                  t={t}
                />
              )
            )}
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
