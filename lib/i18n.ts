export type Lang = 'en' | 'ru' | 'de'

export const LANGS: Lang[] = ['en', 'ru', 'de']

export interface Translation {
  meta: {
    title: string
    description: string
  }
  nav: {
    links: string[]
    buy: string
  }
  hero: {
    eyebrow: string
    titleLine2: string
    titleLine3: string
    description: string
    cta1: string
    cta2: string
    status: string
  }
  services: Array<{ title: string; description: string }>
  catalog: {
    eyebrow: string
    title: string
    filterAll: string
  }
  shipping: {
    eyebrow: string
    title: string
    titleAccent: string
    cards: Array<{
      badge: string
      title: string
      description: string
      details: string[]
    }>
  }
  contact: {
    eyebrow: string
    title1: string
    title2: string
    nameLabel: string
    phoneLabel: string
    messageLabel: string
    submitBtn: string
    address: { label: string; value: string }
    phone: { label: string; value: string }
    hours: { label: string; value: string }
  }
  product: {
    used: string
    new: string
    sold: string
  }
  modal: {
    gpu: string
    cpu: string
    ram: string
    storage: string
    more: string
    waBtn: string
    waText: (name: string, price: string) => string
  }
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'GreenZone PC — Ultimate Gaming Builds',
      description: 'Custom gaming PC builds engineered for dominance. Next-gen rigs built for those who refuse to compromise.',
    },
    nav: {
      links: ['CATALOG', 'BUILDS', 'TRADE-IN', 'CONTACTS'],
      buy: 'BUY',
    },
    hero: {
      eyebrow: 'NEXT-GEN GAMING RIGS',
      titleLine2: 'ULTIMATE',
      titleLine3: 'POWER',
      description:
        'Engineered for dominance. Built for those who refuse to compromise. Custom PC builds with bleeding-edge components.',
      cta1: 'EXPLORE BUILDS',
      cta2: 'GET CONSULTATION',
      status: 'ONLINE',
    },
    services: [
      { title: 'TRADE-IN', description: 'Exchange your old hardware for store credit toward your dream build.' },
      { title: 'DELIVERY', description: 'Fast, insured delivery directly to your door. Nationwide shipping.' },
      { title: 'GAMING', description: 'Optimized builds for competitive gaming at any budget tier.' },
      { title: 'PC BUILDING', description: 'Custom assembly by certified technicians. 3-year warranty included.' },
      { title: 'SUPPORT', description: '24/7 technical support for all our builds. Remote and on-site.' },
    ],
    catalog: {
      eyebrow: 'OUR SELECTION',
      title: 'READY BUILDS',
      filterAll: 'ALL',
    },
    shipping: {
      eyebrow: 'DELIVERY & SUPPORT',
      title: "WE'VE GOT YOU",
      titleAccent: 'COVERED',
      cards: [
        {
          badge: 'VIENNA ONLY',
          title: 'LOCAL DELIVERY',
          description:
            'Same-day delivery across Vienna. Order before 14:00 and receive your build by evening. Available Monday through Saturday.',
          details: ['Same-day, Mon–Sat', 'Free over €100 · From €8'],
        },
        {
          badge: 'AUSTRIA & EU',
          title: 'POSTAL SHIPPING',
          description:
            'Tracked delivery via Austrian Post and DPD. Fully insured, with live tracking from dispatch to your door.',
          details: ['1–3 business days', 'From €5'],
        },
        {
          badge: 'WALK-INS WELCOME',
          title: 'VISIT THE STORE',
          description:
            'Browse and test ready builds in person. Our team is always on-site to help you find the perfect setup.',
          details: ['Mon–Fri: 10:00–19:00', 'Sat: 11:00–17:00'],
        },
        {
          badge: 'ONLINE & PHONE',
          title: 'CUSTOMER SUPPORT',
          description:
            'Questions about your order, build, or warranty? Reach us via phone, email, or live chat — we respond fast.',
          details: ['Mon–Fri: 09:00–20:00', 'Sat: 10:00–17:00'],
        },
      ],
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      title1: 'INITIATE',
      title2: 'CONTACT',
      nameLabel: 'YOUR NAME',
      phoneLabel: 'PHONE NUMBER',
      messageLabel: 'MESSAGE',
      submitBtn: 'SEND MESSAGE',
      address: { label: 'ADDRESS', value: '123 Tech District,\nSilicon Valley, CA' },
      phone: { label: 'PHONE', value: '+1 (555) 000-1234' },
      hours: { label: 'HOURS', value: 'Mon–Sat: 10:00–20:00\nSun: Closed' },
    },
    product: {
      used: 'USED',
      new: 'NEW',
      sold: 'SOLD',
    },
    modal: {
      gpu: 'GPU',
      cpu: 'CPU',
      ram: 'RAM',
      storage: 'STORAGE',
      more: 'MORE SPECS',
      waBtn: 'I WANT THIS PC',
      waText: (name, price) =>
        `Hi! I want this PC: ${name} — $${price}. Can I get more info?`,
    },
  },

  ru: {
    meta: {
      title: 'GreenZone PC — Игровые ПК нового уровня',
      description: 'Кастомные игровые сборки ПК для тех, кто не идёт на компромисс. Передовые комплектующие на любой бюджет.',
    },
    nav: {
      links: ['КАТАЛОГ', 'СБОРКИ', 'ТРЕЙД-ИН', 'КОНТАКТЫ'],
      buy: 'КУПИТЬ',
    },
    hero: {
      eyebrow: 'ГЕЙМЕРСКИЕ СБОРКИ НОВОГО ПОКОЛЕНИЯ',
      titleLine2: 'ULTIMATE',
      titleLine3: 'POWER',
      description:
        'Создан для доминирования. Для тех, кто не идёт на компромисс. Кастомные сборки ПК на базе передовых комплектующих.',
      cta1: 'СМОТРЕТЬ СБОРКИ',
      cta2: 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ',
      status: 'ОНЛАЙН',
    },
    services: [
      { title: 'ТРЕЙД-ИН', description: 'Обменяйте старое железо на кредит в магазине для сборки своей мечты.' },
      { title: 'ДОСТАВКА', description: 'Быстрая, застрахованная доставка прямо до двери. По всей стране.' },
      { title: 'ГЕЙМИНГ', description: 'Оптимизированные сборки для соревновательного гейминга на любой бюджет.' },
      { title: 'СБОРКА ПК', description: 'Сборка сертифицированными техниками. Гарантия 3 года в комплекте.' },
      { title: 'ПОДДЕРЖКА', description: 'Техническая поддержка 24/7 для всех наших сборок. Удалённо и на месте.' },
    ],
    catalog: {
      eyebrow: 'НАШ ВЫБОР',
      title: 'ГОТОВЫЕ СБОРКИ',
      filterAll: 'ВСЕ',
    },
    shipping: {
      eyebrow: 'ДОСТАВКА И ПОДДЕРЖКА',
      title: 'МЫ ВАС',
      titleAccent: 'ПРИКРЫВАЕМ',
      cards: [
        {
          badge: 'ТОЛЬКО ВЕНА',
          title: 'МЕСТНАЯ ДОСТАВКА',
          description:
            'Доставка в день заказа по всей Вене. Оформите заказ до 14:00 и получите сборку вечером. Доступно с понедельника по субботу.',
          details: ['В день заказа, пн–сб', 'Бесплатно от €100 · от €8'],
        },
        {
          badge: 'АВСТРИЯ И ЕС',
          title: 'ПОЧТОВАЯ ДОСТАВКА',
          description:
            'Отслеживаемая доставка через Austrian Post и DPD. Полная страховка и трекинг от отправки до вашей двери.',
          details: ['1–3 рабочих дня', 'от €5'],
        },
        {
          badge: 'ЗАХОДИТЕ',
          title: 'ПОСЕТИТЕ МАГАЗИН',
          description:
            'Просматривайте и тестируйте готовые сборки лично. Наша команда всегда готова помочь найти идеальный вариант.',
          details: ['Пн–Пт: 10:00–19:00', 'Сб: 11:00–17:00'],
        },
        {
          badge: 'ОНЛАЙН И ТЕЛЕФОН',
          title: 'ПОДДЕРЖКА',
          description:
            'Вопросы о заказе, сборке или гарантии? Свяжитесь с нами по телефону, email или в чате — ответим быстро.',
          details: ['Пн–Пт: 09:00–20:00', 'Сб: 10:00–17:00'],
        },
      ],
    },
    contact: {
      eyebrow: 'СВЯЗАТЬСЯ С НАМИ',
      title1: 'НАПИШИТЕ',
      title2: 'НАМ',
      nameLabel: 'ВАШЕ ИМЯ',
      phoneLabel: 'НОМЕР ТЕЛЕФОНА',
      messageLabel: 'СООБЩЕНИЕ',
      submitBtn: 'ОТПРАВИТЬ',
      address: { label: 'АДРЕС', value: '123 Tech District,\nSilicon Valley, CA' },
      phone: { label: 'ТЕЛЕФОН', value: '+1 (555) 000-1234' },
      hours: { label: 'ЧАСЫ РАБОТЫ', value: 'Пн–Сб: 10:00–20:00\nВс: Закрыто' },
    },
    product: {
      used: 'БУ',
      new: 'НОВЫЙ',
      sold: 'ПРОДАНО',
    },
    modal: {
      gpu: 'ВИДЕОКАРТА',
      cpu: 'ПРОЦЕССОР',
      ram: 'ОПЕРАТИВКА',
      storage: 'ДИСК',
      more: 'ЕЩЁ ХАРАКТЕРИСТИКИ',
      waBtn: 'ХОЧУ ЭТОТ КОМПЬЮТЕР',
      waText: (name, price) =>
        `Здравствуйте! Хочу этот компьютер: ${name} — $${price}. Можно узнать подробнее?`,
    },
  },

  de: {
    meta: {
      title: 'GreenZone PC — Ultimate Gaming-PCs',
      description: 'Custom-Gaming-PC-Builds mit modernsten Komponenten. Für diejenigen, die keine Kompromisse eingehen.',
    },
    nav: {
      links: ['KATALOG', 'BUILDS', 'TRADE-IN', 'KONTAKT'],
      buy: 'KAUFEN',
    },
    hero: {
      eyebrow: 'GAMING-RIGS DER NÄCHSTEN GENERATION',
      titleLine2: 'ULTIMATE',
      titleLine3: 'POWER',
      description:
        'Entwickelt für Dominanz. Für diejenigen, die keine Kompromisse eingehen. Custom-PC-Builds mit modernsten Komponenten.',
      cta1: 'BUILDS ERKUNDEN',
      cta2: 'BERATUNG ANFRAGEN',
      status: 'ONLINE',
    },
    services: [
      { title: 'TRADE-IN', description: 'Tauschen Sie alte Hardware gegen Guthaben für Ihren Traum-Build.' },
      { title: 'LIEFERUNG', description: 'Schnelle, versicherte Lieferung direkt zu Ihrer Tür. Bundesweiter Versand.' },
      { title: 'GAMING', description: 'Optimierte Builds für kompetitives Gaming in jedem Budgetbereich.' },
      { title: 'PC-AUFBAU', description: 'Individuelle Montage von zertifizierten Technikern. 3 Jahre Garantie inklusive.' },
      { title: 'SUPPORT', description: '24/7 technischer Support für alle unsere Builds. Remote und vor Ort.' },
    ],
    catalog: {
      eyebrow: 'UNSERE AUSWAHL',
      title: 'FERTIGE BUILDS',
      filterAll: 'ALLE',
    },
    shipping: {
      eyebrow: 'LIEFERUNG & SUPPORT',
      title: 'WIR HABEN SIE',
      titleAccent: 'ABGEDECKT',
      cards: [
        {
          badge: 'NUR WIEN',
          title: 'LOKALE LIEFERUNG',
          description:
            'Lieferung am gleichen Tag in ganz Wien. Bestellen Sie vor 14:00 Uhr und erhalten Sie Ihren Build noch am Abend. Verfügbar Montag bis Samstag.',
          details: ['Am selben Tag, Mo–Sa', 'Kostenlos ab €100 · Ab €8'],
        },
        {
          badge: 'ÖSTERREICH & EU',
          title: 'POSTVERSAND',
          description:
            'Nachverfolgbare Lieferung per Austrian Post und DPD. Vollversichert mit Live-Tracking von der Absendung bis zur Tür.',
          details: ['1–3 Werktage', 'Ab €5'],
        },
        {
          badge: 'LAUFKUNDSCHAFT WILLKOMMEN',
          title: 'LADEN BESUCHEN',
          description:
            'Fertige Builds persönlich ansehen und testen. Unser Team ist immer vor Ort und hilft Ihnen, das perfekte Setup zu finden.',
          details: ['Mo–Fr: 10:00–19:00', 'Sa: 11:00–17:00'],
        },
        {
          badge: 'ONLINE & TELEFON',
          title: 'KUNDENDIENST',
          description:
            'Fragen zu Ihrer Bestellung, Ihrem Build oder der Garantie? Erreichen Sie uns per Telefon, E-Mail oder Live-Chat — wir antworten schnell.',
          details: ['Mo–Fr: 09:00–20:00', 'Sa: 10:00–17:00'],
        },
      ],
    },
    contact: {
      eyebrow: 'KONTAKT AUFNEHMEN',
      title1: 'KONTAKT',
      title2: 'AUFNEHMEN',
      nameLabel: 'IHR NAME',
      phoneLabel: 'TELEFONNUMMER',
      messageLabel: 'NACHRICHT',
      submitBtn: 'NACHRICHT SENDEN',
      address: { label: 'ADRESSE', value: '123 Tech District,\nSilicon Valley, CA' },
      phone: { label: 'TELEFON', value: '+1 (555) 000-1234' },
      hours: { label: 'ÖFFNUNGSZEITEN', value: 'Mo–Sa: 10:00–20:00\nSo: Geschlossen' },
    },
    product: {
      used: 'GEBRAUCHT',
      new: 'NEU',
      sold: 'VERKAUFT',
    },
    modal: {
      gpu: 'GRAFIKKARTE',
      cpu: 'PROZESSOR',
      ram: 'ARBEITSSPEICHER',
      storage: 'SPEICHER',
      more: 'MEHR SPECS',
      waBtn: 'ICH WILL DIESEN PC',
      waText: (name, price) =>
        `Hallo! Ich interessiere mich für diesen PC: ${name} — $${price}. Kann ich mehr erfahren?`,
    },
  },
}
