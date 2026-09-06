import type { Course, Lang, Lesson, QuizQuestion } from "./types";
import { categoryLabel, levelLabel } from "./i18n";

type LessonLoc = {
  title: string;
  quiz?: { prompt: string }[];
};

type CourseLoc = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  lessons: Record<string, LessonLoc>;
};

const COURSE_I18N: Record<string, Record<Lang, CourseLoc>> = 
{
  "english-foundations": {
    "en": {
      "title": "English Foundations",
      "subtitle": "Build core vocabulary, greetings, and everyday phrases",
      "description": "Perfect for Spanish and Japanese speakers starting English. Learn greetings, introductions, numbers, and survival phrases with clear explanations and practice.",
      "outcomes": [
        "Introduce yourself confidently",
        "Ask and answer basic questions",
        "Use numbers, time, and prices",
        "Navigate cafés, shops, and travel"
      ],
      "lessons": {
        "hello-and-introductions": {
          "title": "Hello & Introductions",
          "quiz": [
            {
              "prompt": "How do you say \"Nice to meet you\"?"
            },
            {
              "prompt": "Complete: My name ___ Maria."
            },
            {
              "prompt": "Which greeting is informal?"
            }
          ]
        },
        "numbers-and-time": {
          "title": "Numbers & Time"
        },
        "everyday-survival": {
          "title": "Everyday Survival Phrases"
        },
        "foundations-review": {
          "title": "Foundations Review Quiz",
          "quiz": [
            {
              "prompt": "\"How much is this?\" is used for…"
            },
            {
              "prompt": "It's 2:00 means…"
            }
          ]
        }
      }
    },
    "es": {
      "title": "Fundamentos de inglés",
      "subtitle": "Vocabulario básico, saludos y frases del día a día",
      "description": "Ideal para hispanohablantes y hablantes de japonés que empiezan inglés. Aprende saludos, presentaciones, números y frases de supervivencia con explicaciones claras y práctica.",
      "outcomes": [
        "Presentarte con confianza",
        "Hacer y responder preguntas básicas",
        "Usar números, la hora y precios",
        "Moverte en cafés, tiendas y viajes"
      ],
      "lessons": {
        "hello-and-introductions": {
          "title": "Hola y presentaciones",
          "quiz": [
            {
              "prompt": "¿Cómo se dice \"Nice to meet you\"?"
            },
            {
              "prompt": "Completa: My name ___ Maria."
            },
            {
              "prompt": "¿Qué saludo es informal?"
            }
          ]
        },
        "numbers-and-time": {
          "title": "Números y la hora"
        },
        "everyday-survival": {
          "title": "Frases de supervivencia diaria"
        },
        "foundations-review": {
          "title": "Repaso de fundamentos",
          "quiz": [
            {
              "prompt": "\"How much is this?\" se usa para…"
            },
            {
              "prompt": "It's 2:00 significa…"
            }
          ]
        }
      }
    },
    "ja": {
      "title": "英語の基礎",
      "subtitle": "基本語彙・あいさつ・日常フレーズを身につける",
      "description": "英語を始めるスペイン語・日本語話者向け。あいさつ、自己紹介、数字、サバイバルフレーズをわかりやすく練習します。",
      "outcomes": [
        "自信を持って自己紹介できる",
        "基本的な質問のやりとりができる",
        "数字・時刻・値段を使える",
        "カフェ・店・旅行で通じる"
      ],
      "lessons": {
        "hello-and-introductions": {
          "title": "あいさつと自己紹介",
          "quiz": [
            {
              "prompt": "「Nice to meet you」はどう言いますか？"
            },
            {
              "prompt": "穴埋め: My name ___ Maria."
            },
            {
              "prompt": "くだけたあいさつはどれ？"
            }
          ]
        },
        "numbers-and-time": {
          "title": "数字と時刻"
        },
        "everyday-survival": {
          "title": "日常サバイバルフレーズ"
        },
        "foundations-review": {
          "title": "基礎復習クイズ",
          "quiz": [
            {
              "prompt": "「How much is this?」の用途は…"
            },
            {
              "prompt": "It's 2:00 の意味は…"
            }
          ]
        }
      }
    }
  },
  "conversation-boost": {
    "en": {
      "title": "Conversation Boost",
      "subtitle": "Speak naturally in daily conversations",
      "description": "Practice small talk, follow-up questions, and polite English so conversations feel natural—not memorized.",
      "outcomes": [
        "Keep a 2-minute small talk going",
        "Ask follow-up questions",
        "Use polite requests",
        "Handle misunderstandings"
      ],
      "lessons": {
        "small-talk-starters": {
          "title": "Small Talk Starters"
        },
        "polite-requests": {
          "title": "Polite Requests",
          "quiz": [
            {
              "prompt": "Most polite option:"
            }
          ]
        },
        "clarifying": {
          "title": "Clarifying & Repair"
        }
      }
    },
    "es": {
      "title": "Impulso conversacional",
      "subtitle": "Habla con naturalidad en conversaciones diarias",
      "description": "Practica small talk, preguntas de seguimiento e inglés cortés para que las conversaciones se sientan naturales, no memorizadas.",
      "outcomes": [
        "Mantener un small talk de 2 minutos",
        "Hacer preguntas de seguimiento",
        "Usar peticiones corteses",
        "Manejar malentendidos"
      ],
      "lessons": {
        "small-talk-starters": {
          "title": "Inicios de small talk"
        },
        "polite-requests": {
          "title": "Peticiones corteses",
          "quiz": [
            {
              "prompt": "La opción más cortés:"
            }
          ]
        },
        "clarifying": {
          "title": "Clarificar y reparar"
        }
      }
    },
    "ja": {
      "title": "会話ブースト",
      "subtitle": "日常会話で自然に話す",
      "description": "スモールトーク、フォローアップ質問、丁寧な英語を練習し、暗記ではなく自然な会話に。",
      "outcomes": [
        "2分のスモールトークを続けられる",
        "フォローアップ質問ができる",
        "丁寧な依頼ができる",
        "誤解に対応できる"
      ],
      "lessons": {
        "small-talk-starters": {
          "title": "スモールトークの始め方"
        },
        "polite-requests": {
          "title": "丁寧な依頼",
          "quiz": [
            {
              "prompt": "いちばん丁寧な選択肢:"
            }
          ]
        },
        "clarifying": {
          "title": "確認と修復"
        }
      }
    }
  },
  "grammar-clarity": {
    "en": {
      "title": "Grammar Clarity",
      "subtitle": "Tenses, articles, and word order demystified",
      "description": "Target the grammar points that confuse Spanish and Japanese learners most: articles (a/the), tense choice, and SVO word order.",
      "outcomes": [
        "Choose present / past / future correctly",
        "Use a / an / the with confidence",
        "Build clear SVO sentences",
        "Avoid common L1 transfer errors"
      ],
      "lessons": {
        "present-vs-past": {
          "title": "Present vs Past",
          "quiz": [
            {
              "prompt": "Yesterday I ___ to the park."
            },
            {
              "prompt": "Right now she ___ coffee."
            }
          ]
        },
        "articles-a-the": {
          "title": "Articles: a / an / the"
        },
        "word-order": {
          "title": "English Word Order"
        }
      }
    },
    "es": {
      "title": "Gramática clara",
      "subtitle": "Tiempos, artículos y orden de palabras sin misterio",
      "description": "Enfocado en lo que más confunde a hispanohablantes y hablantes de japonés: artículos (a/the), elección de tiempo y orden SVO.",
      "outcomes": [
        "Elegir presente / pasado / futuro correctamente",
        "Usar a / an / the con confianza",
        "Construir oraciones SVO claras",
        "Evitar errores típicos de transferencia L1"
      ],
      "lessons": {
        "present-vs-past": {
          "title": "Presente vs pasado",
          "quiz": [
            {
              "prompt": "Yesterday I ___ to the park."
            },
            {
              "prompt": "Right now she ___ coffee."
            }
          ]
        },
        "articles-a-the": {
          "title": "Artículos: a / an / the"
        },
        "word-order": {
          "title": "Orden de palabras en inglés"
        }
      }
    },
    "ja": {
      "title": "文法の明確化",
      "subtitle": "時制・冠詞・語順をわかりやすく",
      "description": "スペイン語・日本語話者がつまずきやすい冠詞（a/the）、時制選択、SVO語順に焦点。",
      "outcomes": [
        "現在／過去／未来を正しく選べる",
        "a / an / the を自信を持って使える",
        "明確なSVO文を作れる",
        "母語干渉のよくある誤りを避けられる"
      ],
      "lessons": {
        "present-vs-past": {
          "title": "現在と過去",
          "quiz": [
            {
              "prompt": "Yesterday I ___ to the park."
            },
            {
              "prompt": "Right now she ___ coffee."
            }
          ]
        },
        "articles-a-the": {
          "title": "冠詞: a / an / the"
        },
        "word-order": {
          "title": "英語の語順"
        }
      }
    }
  },
  "business-english": {
    "en": {
      "title": "Business English Essentials",
      "subtitle": "Emails, meetings, and professional tone",
      "description": "Write clearer emails, speak up in meetings, and sound professional without sounding robotic.",
      "outcomes": [
        "Write a clear professional email",
        "Join meetings with confidence",
        "Present a short update",
        "Negotiate politely"
      ],
      "lessons": {
        "email-structure": {
          "title": "Email Structure"
        },
        "meeting-phrases": {
          "title": "Meeting Phrases",
          "quiz": [
            {
              "prompt": "What does \"Let's take this offline\" mean?"
            }
          ]
        },
        "status-update": {
          "title": "Give a Status Update"
        }
      }
    },
    "es": {
      "title": "Inglés de negocios esencial",
      "subtitle": "Emails, reuniones y tono profesional",
      "description": "Escribe emails más claros, participa en reuniones y suena profesional sin sonar robótico.",
      "outcomes": [
        "Escribir un email profesional claro",
        "Participar en reuniones con confianza",
        "Presentar una actualización breve",
        "Negociar con cortesía"
      ],
      "lessons": {
        "email-structure": {
          "title": "Estructura de emails"
        },
        "meeting-phrases": {
          "title": "Frases para reuniones",
          "quiz": [
            {
              "prompt": "¿Qué significa \"Let's take this offline\"?"
            }
          ]
        },
        "status-update": {
          "title": "Dar un status update"
        }
      }
    },
    "ja": {
      "title": "ビジネス英語の基本",
      "subtitle": "メール・会議・プロのトーン",
      "description": "より明確なメール、会議での発言、ロボットっぽくないプロの話し方を身につける。",
      "outcomes": [
        "明確なビジネスメールを書ける",
        "自信を持って会議に参加できる",
        "短い進捗報告ができる",
        "丁寧に交渉できる"
      ],
      "lessons": {
        "email-structure": {
          "title": "メール構成"
        },
        "meeting-phrases": {
          "title": "会議フレーズ",
          "quiz": [
            {
              "prompt": "「Let's take this offline」の意味は？"
            }
          ]
        },
        "status-update": {
          "title": "進捗アップデート"
        }
      }
    }
  },
  "listening-lab": {
    "en": {
      "title": "Listening Lab",
      "subtitle": "Train your ear for real-world English",
      "description": "Decode reduced speech, connect sounds, and practice active listening strategies designed for ES and JA learners.",
      "outcomes": [
        "Catch key words in fast speech",
        "Recognize reductions (gonna, wanna)",
        "Use prediction strategies",
        "Summarize what you heard"
      ],
      "lessons": {
        "connected-speech": {
          "title": "Connected Speech"
        },
        "listening-strategies": {
          "title": "Listening Strategies"
        },
        "listening-check": {
          "title": "Listening Check Quiz",
          "quiz": [
            {
              "prompt": "First listen should focus on…"
            }
          ]
        }
      }
    },
    "es": {
      "title": "Laboratorio de escucha",
      "subtitle": "Entrena el oído para el inglés real",
      "description": "Decodifica el habla reducida, conecta sonidos y practica estrategias de escucha activa diseñadas para aprendices ES y JA.",
      "outcomes": [
        "Captar palabras clave en habla rápida",
        "Reconocer reducciones (gonna, wanna)",
        "Usar estrategias de predicción",
        "Resumir lo que escuchaste"
      ],
      "lessons": {
        "connected-speech": {
          "title": "Habla conectada"
        },
        "listening-strategies": {
          "title": "Estrategias de escucha"
        },
        "listening-check": {
          "title": "Quiz de escucha",
          "quiz": [
            {
              "prompt": "La primera escucha debe enfocarse en…"
            }
          ]
        }
      }
    },
    "ja": {
      "title": "リスニングラボ",
      "subtitle": "リアルな英語の耳を鍛える",
      "description": "縮約された話し方を解読し、音をつなぎ、ES・JA学習者向けのアクティブリスニングを練習。",
      "outcomes": [
        "速い発話のキーワードを捉える",
        "縮約（gonna, wanna）を認識する",
        "予測ストラテジーを使う",
        "聞いた内容を要約する"
      ],
      "lessons": {
        "connected-speech": {
          "title": "連結音声"
        },
        "listening-strategies": {
          "title": "リスニング戦略"
        },
        "listening-check": {
          "title": "リスニング確認クイズ",
          "quiz": [
            {
              "prompt": "最初のリスニングで集中すべきは…"
            }
          ]
        }
      }
    }
  },
  "pronunciation-power": {
    "en": {
      "title": "Pronunciation Power",
      "subtitle": "Clear sounds, stress, and intonation",
      "description": "Sharpen the sounds that Spanish and Japanese speakers find hardest: /r/ vs /l/, /θ/, vowel length, and sentence stress.",
      "outcomes": [
        "Distinguish /r/ and /l/",
        "Use sentence stress for meaning",
        "Improve /θ/ and /ð/",
        "Sound clearer in recordings"
      ],
      "lessons": {
        "r-vs-l": {
          "title": "R vs L Clarity"
        },
        "th-sounds": {
          "title": "The TH Sounds"
        },
        "stress-and-intonation": {
          "title": "Stress & Intonation",
          "quiz": [
            {
              "prompt": "Which word is typically stressed for contrast?"
            }
          ]
        },
        "pronunciation-final": {
          "title": "Pronunciation Final Check",
          "quiz": [
            {
              "prompt": "For /l/, the tongue tip should…"
            },
            {
              "prompt": "/θ/ as in 'think' needs the tongue…"
            }
          ]
        }
      }
    },
    "es": {
      "title": "Poder de pronunciación",
      "subtitle": "Sonidos claros, acento e entonación",
      "description": "Afina los sonidos más difíciles para hispanohablantes y hablantes de japonés: /r/ vs /l/, /θ/, duración vocálica y acento de oración.",
      "outcomes": [
        "Distinguir /r/ y /l/",
        "Usar el acento de oración para el significado",
        "Mejorar /θ/ y /ð/",
        "Sonar más claro en grabaciones"
      ],
      "lessons": {
        "r-vs-l": {
          "title": "Claridad R vs L"
        },
        "th-sounds": {
          "title": "Los sonidos TH"
        },
        "stress-and-intonation": {
          "title": "Acento y entonación",
          "quiz": [
            {
              "prompt": "¿Qué palabra suele acentuarse para contraste?"
            }
          ]
        },
        "pronunciation-final": {
          "title": "Chequeo final de pronunciación",
          "quiz": [
            {
              "prompt": "Para /l/, la punta de la lengua debe…"
            },
            {
              "prompt": "/θ/ como en 'think' necesita la lengua…"
            }
          ]
        }
      }
    },
    "ja": {
      "title": "発音パワー",
      "subtitle": "明瞭な音・ストレス・イントネーション",
      "description": "スペイン語・日本語話者が苦手な /r/ と /l/、/θ/、母音の長さ、文ストレスを磨く。",
      "outcomes": [
        "/r/ と /l/ を区別できる",
        "意味のための文ストレスを使える",
        "/θ/ と /ð/ を改善できる",
        "録音でより明瞭に聞こえる"
      ],
      "lessons": {
        "r-vs-l": {
          "title": "R と L の明瞭さ"
        },
        "th-sounds": {
          "title": "TH の音"
        },
        "stress-and-intonation": {
          "title": "ストレスとイントネーション",
          "quiz": [
            {
              "prompt": "対比で普通に強く読まれる語は？"
            }
          ]
        },
        "pronunciation-final": {
          "title": "発音最終チェック",
          "quiz": [
            {
              "prompt": "/l/ では舌先は…"
            },
            {
              "prompt": "'think' の /θ/ では舌は…"
            }
          ]
        }
      }
    }
  }
} as Record<string, Record<Lang, CourseLoc>>;

function localizeLesson(lesson: Lesson, loc: LessonLoc | undefined): Lesson {
  if (!loc) return lesson;
  const quiz: QuizQuestion[] | undefined = lesson.quiz?.map((q, i) => ({
    ...q,
    prompt: loc.quiz?.[i]?.prompt ?? q.prompt,
    // Keep English options — they are the language being taught / tested
  }));
  return {
    ...lesson,
    title: loc.title ?? lesson.title,
    quiz,
  };
}

/** Localized course catalog + lesson titles/quiz prompts. Lesson teaching bodies stay English. */
export function courseCopy(course: Course, lang: Lang): Course {
  const pack = COURSE_I18N[course.slug];
  const loc = pack?.[lang] ?? pack?.es ?? pack?.en;
  if (!loc) {
    return {
      ...course,
      // still localize category/level labels via display helpers in UI
    };
  }
  return {
    ...course,
    title: loc.title,
    subtitle: loc.subtitle,
    description: loc.description,
    outcomes: loc.outcomes,
    lessons: course.lessons.map((l) => localizeLesson(l, loc.lessons[l.slug])),
  };
}

export function courseCategoryLabel(course: Course, lang: Lang): string {
  return categoryLabel(lang, course.category);
}

export function courseLevelLabel(course: Course, lang: Lang): string {
  return levelLabel(lang, course.level);
}

