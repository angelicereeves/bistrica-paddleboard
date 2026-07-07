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
    chooseExperience: "Choose Your SUP Experience",
    chooseSub: "Rent a board, join a yoga session, train your technique, or compete with friends.",
    reserve: "Reserve Your Spot",
    bookTraining: "Book Training",
    bookTeam: "Book Your Team",
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
    }
  >
> = {
  rentals: {
    en: {
      label: "🏄 Paddleboard Rentals",
      heading: "🏄 Explore Sarandë by Paddleboard",
      price: "10€ for 1 hour • 18€ for 2 hours • 15€ sunset paddle",
      image: "/paddleinfo.png",
      imageAlt: "Paddleboard rental information in Sarandë",
      intro:
        "Rent a paddleboard and enjoy the coastline of Sarandë from the water. Perfect for beginners, couples, families, and friends.",
      together: "Rental highlights:",
      items: [
        { title: "🏄 1 Hour Rental", desc: "A quick and fun paddle close to the shore." },
        { title: "🌊 2 Hour Rental", desc: "More time to explore, relax, and enjoy the sea." },
        { title: "🌅 Sunset Paddle", desc: "A beautiful evening session during the best light of the day." },
        { title: "📸 Free Photos", desc: "Capture your experience on the water." },
        { title: "🦺 Safety Included", desc: "Life jackets and basic guidance are provided." },
        { title: "✨ Beginner Friendly", desc: "Easy, fun, and welcoming for all levels." },
      ],
      note: "Find us on the beach in front of Restaurant Centrali.",
      limited: "Stay in the safe area, respect the sea, and wear your life jacket.",
      buttonType: "book",
    },
    sq: {
      label: "🏄 Qira Paddleboard",
      heading: "🏄 Eksploro Sarandën me Paddleboard",
      price: "10€ për 1 orë • 18€ për 2 orë • 15€ sunset paddle",
      image: "/paddleinfo.png",
      imageAlt: "Informacion për qira paddleboard në Sarandë",
      intro:
        "Merr një paddleboard me qira dhe shijo bregdetin e Sarandës nga uji. Perfekte për fillestarë, çifte, familje dhe miq.",
      together: "Përfshirë në qira:",
      items: [
        { title: "🏄 Qira 1 Orë", desc: "Një xhiro e shpejtë dhe argëtuese pranë bregut." },
        { title: "🌊 Qira 2 Orë", desc: "Më shumë kohë për të eksploruar dhe shijuar detin." },
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
      price: "10€ pour 1 heure • 18€ pour 2 heures • 15€ sunset paddle",
      image: "/paddleinfo.png",
      imageAlt: "Informations de location de paddleboard à Sarandë",
      intro:
        "Louez une planche et profitez de la côte de Sarandë depuis l’eau. Parfait pour les débutants, couples, familles et amis.",
      together: "Points forts :",
      items: [
        { title: "🏄 Location 1 Heure", desc: "Une sortie rapide et amusante près du rivage." },
        { title: "🌊 Location 2 Heures", desc: "Plus de temps pour explorer, se détendre et profiter de la mer." },
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
      price: "10€ per 1 ora • 18€ per 2 ore • 15€ sunset paddle",
      image: "/paddleinfo.png",
      imageAlt: "Informazioni noleggio paddleboard a Sarandë",
      intro:
        "Noleggia una tavola e goditi la costa di Sarandë dall’acqua. Perfetto per principianti, coppie, famiglie e amici.",
      together: "Dettagli noleggio:",
      items: [
        { title: "🏄 Noleggio 1 Ora", desc: "Un giro veloce e divertente vicino alla riva." },
        { title: "🌊 Noleggio 2 Ore", desc: "Più tempo per esplorare, rilassarti e goderti il mare." },
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
      price: "10€ por 1 hora • 18€ por 2 horas • 15€ sunset paddle",
      image: "/paddleinfo.png",
      imageAlt: "Información de alquiler de paddleboard en Sarandë",
      intro:
        "Alquila una tabla y disfruta la costa de Sarandë desde el agua. Perfecto para principiantes, parejas, familias y amigos.",
      together: "Detalles del alquiler:",
      items: [
        { title: "🏄 Alquiler 1 Hora", desc: "Un paseo rápido y divertido cerca de la orilla." },
        { title: "🌊 Alquiler 2 Horas", desc: "Más tiempo para explorar, relajarte y disfrutar el mar." },
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
        { title: "🌌 Floating Savasana", desc: "Relax on your board, listen to the water, and drift into calm." },
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
      image: "/paddleinfo.png",
      imageAlt: "SUP training club in Sarandë",
      intro:
        "Already know how to paddle? Train, level up your technique, and get an amazing morning workout on the water.",
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
      limited: "Spots are limited. Leash and PFD are required.",
      buttonType: "training",
    },
    sq: {
      label: "🏋️ SUP Training Club",
      heading: "🏄‍♂️ Klubi i Trajnimit SUP për Nivel Mesatar",
      price: "25€ seanca • 160€ abonimi mujor",
      image: "/paddleinfo.png",
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
      image: "/paddleinfo.png",
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
      image: "/paddleinfo.png",
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
      image: "/paddleinfo.png",
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
        "Gather your team and give it your all. Strategy, balance, teamwork, and pure fun are guaranteed.",
      together: "The 4 epic games:",
      items: [
        { title: "🛶 The Rescue", desc: "A high-stakes progressive relay race." },
        { title: "🎿 The Human Ski", desc: "Two people stand across two parallel boards and move together." },
        { title: "🤼 Board Gladiator", desc: "The ultimate balance duel. Last one standing wins." },
        { title: "🎈 Color Hunt", desc: "Speed and partner strategy to collect floating treasures." },
        { title: "📍 Yoga Dock Station", desc: "The challenge takes place right at our yoga dock relay station." },
        { title: "🏄 Boards Provided", desc: "Premium boards included: ST, Monster, Vapor, Fusion, and Magma." },
      ],
      note: "Registration is only 15€ per team, just 5€ per person.",
      limited: "Spots are strictly limited for logistics and safety.",
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

function ActivityCard({
  sectionKey,
  experience,
  isOpen,
  onToggle,
  buttonText,
}: {
  sectionKey: SectionKey;
  experience: (typeof experiences)[SectionKey][Lang];
  isOpen: boolean;
  onToggle: (key: SectionKey) => void;
  buttonText: string;
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
              {isOpen ? "Hide Details" : "View Details"}
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
                    background: "#f7fcff",
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
          </div>
        </div>
      )}
    </article>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [openSection, setOpenSection] = useState<SectionKey>("rentals");
  const t = text[lang];

  const getButtonText = (section: SectionKey) => {
    const buttonType = experiences[section][lang].buttonType;

    if (buttonType === "reserve") return t.reserve;
    if (buttonType === "training") return t.bookTraining;
    if (buttonType === "team") return t.bookTeam;

    return t.book;
  };

  const toggleSection = (key: SectionKey) => {
    setOpenSection((current) => (current === key ? "rentals" : key));
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

          <div className="price-card">
            <span>🏋️ Training Session</span>
            <strong>25€</strong>
          </div>

          <div className="price-card">
            <span>🎫 Training Membership</span>
            <strong>160€</strong>
            <small>8 sessions</small>
          </div>

          <div className="price-card">
            <span>🏆 Team Challenge</span>
            <strong>15€</strong>
            <small>per team</small>
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
