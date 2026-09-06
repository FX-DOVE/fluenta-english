import type { Course } from "@/lib/types";

export const COURSES: Course[] = [
  {
    slug: "english-foundations",
    title: "English Foundations",
    subtitle: "Build core vocabulary, greetings, and everyday phrases",
    level: "Beginner",
    category: "General",
    color: "from-sky-500 to-blue-600",
    description:
      "Perfect for Spanish and Japanese speakers starting English. Learn greetings, introductions, numbers, and survival phrases with clear explanations and practice.",
    outcomes: [
      "Introduce yourself confidently",
      "Ask and answer basic questions",
      "Use numbers, time, and prices",
      "Navigate cafés, shops, and travel",
    ],
    lessons: [
      {
        slug: "hello-and-introductions",
        title: "Hello & Introductions",
        durationMin: 12,
        content: `## Welcome to Fluenta

In this lesson you will learn how to greet people and introduce yourself.

### Key phrases
- **Hello / Hi** — Hola / こんにちは
- **My name is…** — Me llamo… / 私の名前は…です
- **Nice to meet you** — Encantado/a / はじめまして

### Practice dialogue
**A:** Hi! My name is Ana.  
**B:** Nice to meet you, Ana. I'm Ken.

### Tip for Spanish speakers
English does not change verb endings for "I / you / we" the same way Spanish does. Memorize whole phrases first.

### Tip for Japanese speakers
English requires a subject pronoun almost always: *I am Ken* (not just *Ken*).`,
        quiz: [
          {
            id: "q1",
            prompt: 'How do you say "Nice to meet you"?',
            options: ["See you later", "Nice to meet you", "Good night", "Excuse me"],
            correctIndex: 1,
          },
          {
            id: "q2",
            prompt: "Complete: My name ___ Maria.",
            options: ["am", "is", "are", "be"],
            correctIndex: 1,
          },
          {
            id: "q3",
            prompt: "Which greeting is informal?",
            options: ["Good evening", "Hi", "How do you do", "Good morning"],
            correctIndex: 1,
          },
        ],
      },
      {
        slug: "numbers-and-time",
        title: "Numbers & Time",
        durationMin: 15,
        content: `## Numbers 1–100 and telling time

### Numbers
1 one · 2 two · 3 three · 10 ten · 20 twenty · 100 one hundred

### Asking the time
- **What time is it?**
- **It's 3:00** — It's three o'clock.
- **It's 3:30** — It's three thirty / half past three.

### Prices
- How much is this? — It's $12.

Practice saying your phone number slowly, digit by digit.`,
      },
      {
        slug: "everyday-survival",
        title: "Everyday Survival Phrases",
        durationMin: 14,
        content: `## Survive your first day abroad

- Where is the bathroom?
- I don't understand. Can you speak slowly?
- How much does this cost?
- I'd like water, please.
- Thank you / You're welcome.

Repeat each phrase aloud three times.`,
      },
      {
        slug: "foundations-review",
        title: "Foundations Review Quiz",
        durationMin: 10,
        content: `## Review checkpoint

You've covered greetings, numbers, and survival phrases. Take the quiz to lock in your progress.`,
        quiz: [
          {
            id: "r1",
            prompt: '"How much is this?" is used for…',
            options: ["Greetings", "Prices", "Time only", "Names"],
            correctIndex: 1,
          },
          {
            id: "r2",
            prompt: "It's 2:00 means…",
            options: ["Half past two", "Two o'clock", "Twenty", "Tomorrow"],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
  {
    slug: "conversation-boost",
    title: "Conversation Boost",
    subtitle: "Speak naturally in daily conversations",
    level: "Beginner",
    category: "Speaking",
    color: "from-emerald-500 to-teal-600",
    description:
      "Practice small talk, follow-up questions, and polite English so conversations feel natural—not memorized.",
    outcomes: [
      "Keep a 2-minute small talk going",
      "Ask follow-up questions",
      "Use polite requests",
      "Handle misunderstandings",
    ],
    lessons: [
      {
        slug: "small-talk-starters",
        title: "Small Talk Starters",
        durationMin: 13,
        content: `## Start conversations easily

- How's your day going?
- What do you do?
- Have you been here before?
- The weather is nice today, isn't it?

**Follow-ups:** Really? Why? How was it?`,
      },
      {
        slug: "polite-requests",
        title: "Polite Requests",
        durationMin: 12,
        content: `## Soften your English

- Could you help me?
- Would you mind opening the window?
- I was wondering if…

Politeness = confidence in English culture.`,
        quiz: [
          {
            id: "p1",
            prompt: "Most polite option:",
            options: ["Give me water", "Water!", "Could I have some water, please?", "I want water now"],
            correctIndex: 2,
          },
        ],
      },
      {
        slug: "clarifying",
        title: "Clarifying & Repair",
        durationMin: 11,
        content: `## When you don't understand

- Sorry, could you repeat that?
- Do you mean…?
- Let me check I understand: …`,
      },
    ],
  },
  {
    slug: "grammar-clarity",
    title: "Grammar Clarity",
    subtitle: "Tenses, articles, and word order demystified",
    level: "Intermediate",
    category: "Grammar",
    color: "from-violet-500 to-purple-600",
    description:
      "Target the grammar points that confuse Spanish and Japanese learners most: articles (a/the), tense choice, and SVO word order.",
    outcomes: [
      "Choose present / past / future correctly",
      "Use a / an / the with confidence",
      "Build clear SVO sentences",
      "Avoid common L1 transfer errors",
    ],
    lessons: [
      {
        slug: "present-vs-past",
        title: "Present vs Past",
        durationMin: 16,
        content: `## Choose the right tense

- **Present simple:** habits — I study every day.
- **Present continuous:** now — I am studying.
- **Past simple:** finished — I studied yesterday.

Spanish tip: Don't translate every "estoy" into continuous English.  
Japanese tip: Time words (yesterday) usually need past tense in English.`,
        quiz: [
          {
            id: "g1",
            prompt: "Yesterday I ___ to the park.",
            options: ["go", "goes", "went", "going"],
            correctIndex: 2,
          },
          {
            id: "g2",
            prompt: "Right now she ___ coffee.",
            options: ["drinks", "is drinking", "drank", "drink"],
            correctIndex: 1,
          },
        ],
      },
      {
        slug: "articles-a-the",
        title: "Articles: a / an / the",
        durationMin: 14,
        content: `## The tiny words that matter

- **a/an** = one, not specific — I need a pen.
- **the** = specific / known — The pen on the table.
- No article for general plurals — Cats are cute.

Japanese speakers: English needs articles where Japanese often omits them. Practice with nouns you use daily.`,
      },
      {
        slug: "word-order",
        title: "English Word Order",
        durationMin: 12,
        content: `## Subject + Verb + Object

English loves fixed order: **I like sushi.**

Adverbs of frequency often go before the main verb: I **always** drink tea.`,
      },
    ],
  },
  {
    slug: "business-english",
    title: "Business English Essentials",
    subtitle: "Emails, meetings, and professional tone",
    level: "Intermediate",
    category: "Career",
    color: "from-amber-500 to-orange-600",
    description:
      "Write clearer emails, speak up in meetings, and sound professional without sounding robotic.",
    outcomes: [
      "Write a clear professional email",
      "Join meetings with confidence",
      "Present a short update",
      "Negotiate politely",
    ],
    lessons: [
      {
        slug: "email-structure",
        title: "Email Structure",
        durationMin: 15,
        content: `## A clean email every time

1. Subject line (specific)
2. Greeting
3. Purpose in sentence 1
4. Details / ask
5. Closing + name

Example subject: **Quick question about Friday's demo**`,
      },
      {
        slug: "meeting-phrases",
        title: "Meeting Phrases",
        durationMin: 13,
        content: `## Sound useful in meetings

- Can I add something?
- Just to clarify…
- Let's take this offline.
- I'll follow up by email.`,
        quiz: [
          {
            id: "b1",
            prompt: "What does \"Let's take this offline\" mean?",
            options: [
              "Turn off the internet",
              "Discuss later privately",
              "End the company",
              "Share the screen",
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        slug: "status-update",
        title: "Give a Status Update",
        durationMin: 12,
        content: `## 30-second update formula

1. What I finished
2. What I'm doing now
3. Blockers / next step`,
      },
    ],
  },
  {
    slug: "listening-lab",
    title: "Listening Lab",
    subtitle: "Train your ear for real-world English",
    level: "Intermediate",
    category: "Listening",
    color: "from-rose-500 to-pink-600",
    description:
      "Decode reduced speech, connect sounds, and practice active listening strategies designed for ES and JA learners.",
    outcomes: [
      "Catch key words in fast speech",
      "Recognize reductions (gonna, wanna)",
      "Use prediction strategies",
      "Summarize what you heard",
    ],
    lessons: [
      {
        slug: "connected-speech",
        title: "Connected Speech",
        durationMin: 14,
        content: `## Why English sounds fast

Native speakers link words: **Did you** → "Didja", **going to** → "gonna".

Listen for stress on content words (nouns, verbs), not every syllable.`,
      },
      {
        slug: "listening-strategies",
        title: "Listening Strategies",
        durationMin: 12,
        content: `## Active listening toolkit

1. Predict topic from context
2. Listen for gist first
3. Note key nouns/verbs
4. Replay for details`,
      },
      {
        slug: "listening-check",
        title: "Listening Check Quiz",
        durationMin: 10,
        content: `## Check your understanding of listening strategies.`,
        quiz: [
          {
            id: "l1",
            prompt: "First listen should focus on…",
            options: ["Every word", "Gist / main idea", "Spelling", "Accent only"],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
  {
    slug: "pronunciation-power",
    title: "Pronunciation Power",
    subtitle: "Clear sounds, stress, and intonation",
    level: "Advanced",
    category: "Speaking",
    color: "from-cyan-500 to-brand-700",
    description:
      "Sharpen the sounds that Spanish and Japanese speakers find hardest: /r/ vs /l/, /θ/, vowel length, and sentence stress.",
    outcomes: [
      "Distinguish /r/ and /l/",
      "Use sentence stress for meaning",
      "Improve /θ/ and /ð/",
      "Sound clearer in recordings",
    ],
    lessons: [
      {
        slug: "r-vs-l",
        title: "R vs L Clarity",
        durationMin: 15,
        content: `## Minimal pairs

- right / light
- rice / lice
- collect / correct

Japanese tip: Practice tongue tip for /l/ (touch ridge) vs /r/ (no touch, curl slightly).`,
      },
      {
        slug: "th-sounds",
        title: "The TH Sounds",
        durationMin: 12,
        content: `## /θ/ and /ð/

Tongue between teeth: **think**, **this**, **brother**.

Spanish tip: Avoid replacing with /t/ or /d/ in careful speech.`,
      },
      {
        slug: "stress-and-intonation",
        title: "Stress & Intonation",
        durationMin: 14,
        content: `## Meaning lives in stress

- I wanted the **blue** one. (not red)
- I **wanted** the blue one. (past desire)

Rising intonation often marks yes/no questions.`,
        quiz: [
          {
            id: "pr1",
            prompt: "Which word is typically stressed for contrast?",
            options: ["the", "a", "blue (in 'blue one')", "of"],
            correctIndex: 2,
          },
        ],
      },
      {
        slug: "pronunciation-final",
        title: "Pronunciation Final Check",
        durationMin: 10,
        content: `## Final pronunciation checkpoint

Review R/L, TH, and stress—then take the quiz.`,
        quiz: [
          {
            id: "pf1",
            prompt: "For /l/, the tongue tip should…",
            options: ["Stay in the throat", "Touch the ridge behind teeth", "Never move", "Touch the lips"],
            correctIndex: 1,
          },
          {
            id: "pf2",
            prompt: "/θ/ as in 'think' needs the tongue…",
            options: ["Behind the lips only", "Between the teeth", "Rolled", "Silent"],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  const lesson = course.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  const index = course.lessons.findIndex((l) => l.slug === lessonSlug);
  return { course, lesson, index };
}
