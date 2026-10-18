import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────
//  MANUAL KNOWLEDGE BASE — website ka full data
// ─────────────────────────────────────────────
const KB = [
  {
    tags: ['hi', 'hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening', 'howdy', 'sup'],
    answer: "Hey! 👋 I'm Subhan —a Full-Stack Developer. Feel free to ask me about my services, projects, skills, or how to work with me!",
  },
  {
    tags: ['who', 'subhan', 'about', 'yourself', 'tell me', 'introduce', 'bio', 'background', 'developer', 'are you'],
    answer: "I'm **Subhan** — a Full-Stack Developer and Computer Science student. I specialize in combining robust backend architectures with cutting-edge AI integrations and custom chatbots. 💡\n\nMy goal is to build automated, efficient digital tools that optimize business operations and elevate user experiences. I'm based in **Lahore, Pakistan** 🇵🇰 and work with clients worldwide.",
  },
  {
    tags: ['skill', 'tech', 'technolog', 'stack', 'language', 'framework', 'tools', 'know', 'expertise', 'react', 'node', 'mongodb', 'javascript', 'laravel', 'firebase', 'tailwind', 'figma', 'express'],
    answer: "Here are the technologies I work with:\n\n**React** — modern UI development\n**Node.js & Express.js** — scalable server-side apps\n**MongoDB** — NoSQL database\n**JavaScript (ES6+)** — full stack logic\n**Tailwind CSS** — rapid, clean styling\n**Firebase** — real-time database & auth\n**Laravel** — PHP framework\n**AI Integrations & Chatbots** — custom AI-powered solutions\n**Figma / UI/UX** — design & prototyping",
  },
  {
    tags: ['service', 'offer', 'provide', 'help', 'build', 'create', 'make', 'develop', 'what can you do'],
    answer: "Here's what I offer:\n\n1. 🌐 **Web Development** — Responsive, modern websites (SEO-friendly & fast)\n2. 📱 **Mobile Development** — Cross-platform iOS & Android apps\n3. 🎨 **UI/UX Design** — Beautiful, user-centered interfaces with Figma\n4. ⚡ **Performance Optimization** — Speed, scalability & reliability\n5. 🛒 **E-commerce Solutions** — Secure payment & inventory systems\n6. 🔌 **API Development** — RESTful & GraphQL APIs\n\nWant details on any specific service? Just ask!",
  },
  {
    tags: ['web development', 'website', 'web app', 'frontend', 'backend', 'full stack', 'fullstack', 'responsive', 'seo'],
    answer: "Web development is my core specialty! 🌐 I build responsive, modern websites from concept to deployment — including SEO-friendly structure, performance optimization, and clean code. Whether it's a landing page or a complex full-stack app, I've got you covered.",
  },
  {
    tags: ['mobile', 'android', 'ios', 'app', 'cross-platform', 'native'],
    answer: "I build **cross-platform mobile applications** that run smoothly on both iOS and Android. 📱 My apps focus on native performance and intuitive user experience — so your users get the best of both worlds.",
  },
  {
    tags: ['ui', 'ux', 'design', 'figma', 'interface', 'user experience', 'prototype', 'wireframe'],
    answer: "I love designing clean, intuitive interfaces! 🎨 I use **Figma** to create user-centered UI/UX designs that are visually stunning and easy to use. Accessibility and usability are always at the top of my priority list.",
  },
  {
    tags: ['ecommerce', 'e-commerce', 'shop', 'store', 'shopping', 'payment', 'cart', 'inventory', 'sales'],
    answer: "I build **E-commerce platforms** that are secure, fast, and conversion-focused. 🛒 From payment gateway integration to inventory management and analytics — I handle the full stack so you can focus on growing your business.",
  },
  {
    tags: ['api', 'rest', 'graphql', 'endpoint', 'integration'],
    answer: "I design and build **scalable APIs** — both RESTful and GraphQL — with proper documentation and testing. 🔌 Whether it's for a mobile app, web platform, or third-party integration, I'll make sure your backend is rock-solid.",
  },
  {
    tags: ['ai', 'chatbot', 'artificial intelligence', 'gemini', 'openai', 'bot', 'automation', 'intelligent', 'nexmove'],
    answer: "AI integrations and chatbots are one of my biggest strengths! 🤖\n\nOne of my best examples is the **NexMove Chatbot** — I built it using the **Gemini API** to automate customer interactions and answer real-time inquiries with intelligent conversational design.\n\n👉 Check it out: https://thomasshelbay348-cmd.github.io/chatbot/",
  },
  {
    tags: ['project', 'portfolio', 'work', 'showcase', 'built', 'created', 'example', 'demo', 'live'],
    answer: "Here are some of my featured projects:\n\n1. 🎬 **NetVibe** — Streaming & entertainment platform\n👉 https://netvibe-nine.vercel.app/\n\n2. 🏛️ **BJ Architects** — Architecture firm website with chatbot\n👉 https://bjarchitectspk.vercel.app/\n\n3. ✈️ **Airport Luggage Van** — London luxury baggage transport\n👉 https://airportluggage-van.vercel.app/\n\n4. 📚 **Al Fatima Academy** — Online Islamic education platform\n👉 https://www.alfatimaacademy.com/\n\n5. 💼 **My Portfolio** — Personal full-stack portfolio\n👉 https://business-portfolio-ecru-gamma.vercel.app/\n\n6. 🤖 **NexMove Chatbot** — AI-powered chatbot (Gemini API)\n👉 https://thomasshelbay348-cmd.github.io/chatbot/",
  },
  {
    tags: ['netvibe', 'streaming', 'movie', 'series', 'anime', 'drama', 'entertainment'],
    answer: "**NetVibe** is one of my projects — a modern streaming & entertainment web app where users can discover trending movies, top-rated TV series, anime, and Korean dramas. 🎬\n\n🛠️ Built with: HTML, Tailwind, TypeScript, Next.js\n👉 https://netvibe-nine.vercel.app/",
  },
  {
    tags: ['bj architect', 'architecture', 'bim', 'construction', 'saudi', 'uae', 'australia'],
    answer: "I built the **BJ Architects** website for a global architecture firm with 13+ years of experience across Saudi Arabia, UAE, Australia, and Pakistan. The site includes 3D BIM modeling info (LOD 300-500) and a custom chatbot I developed. 🏛️\n\n👉 https://bjarchitectspk.vercel.app/",
  },
  {
    tags: ['airport', 'luggage', 'van', 'london', 'transport', 'mercedes', 'booking', 'travel'],
    answer: "I developed the **Airport Luggage Van** platform — an elite London logistics website for luxury bulk baggage transport. It features instant booking, a Mercedes fleet display (MWB, LWB, Luton Vans), and multilingual support. ✈️\n\n👉 https://airportluggage-van.vercel.app/",
  },
  {
    tags: ['al fatima', 'fatima', 'academy', 'islamic', 'quran', 'tajweed', 'tafseer', 'arabic', 'education'],
    answer: "I built **Al Fatima Academy** — a comprehensive online Islamic education platform for Quranic learning, Tajweed, Tafseer, and Arabic courses. It includes certified tutors, flexible scheduling, and a global student portal. 📚\n\n👉 https://www.alfatimaacademy.com/",
  },
  {
    tags: ['nexmove', 'nex move'],
    answer: "I developed the **NexMove Chatbot** for NexMove Development — an AI-integrated chatbot using the Gemini API to handle customer interactions automatically with primary & secondary knowledge systems. 🤖\n\n🛠️ Stack: HTML, JavaScript, Gemini API\n👉 https://thomasshelbay348-cmd.github.io/chatbot/",
  },
  {
    tags: ['contact', 'reach', 'hire', 'email', 'phone', 'whatsapp', 'message', 'get in touch', 'connect', 'talk'],
    answer: "You can reach me directly through any of these:\n\n📧 **Email:** shiekhsubhan62@gmail.com\n📞 **Phone:** +92 371 1441930\n💬 **WhatsApp:** https://wa.me/923711441930\n💼 **LinkedIn:** https://www.linkedin.com/in/subhan-shiekh12345\n🐙 **GitHub:** https://github.com/thomasshelbay348-cmd\n📍 **Location:** Lahore, Pakistan\n\nI'm always open to exciting projects — don't hesitate to reach out! 😊",
  },
  {
    tags: ['location', 'where', 'based', 'city', 'country', 'lahore', 'pakistan'],
    answer: "I'm based in **Lahore, Pakistan** 🇵🇰 but I work with clients locally and internationally — remote work is no problem at all!",
  },
  {
    tags: ['email', 'mail', 'gmail'],
    answer: "📧 My email address is: **shiekhsubhan62@gmail.com**\n\nFeel free to drop me a message anytime!",
  },
  {
    tags: ['whatsapp', 'wp', 'wa'],
    answer: "💬 You can message me directly on WhatsApp — I'm usually quick to respond!\n👉 https://wa.me/923711441930",
  },
  {
    tags: ['linkedin'],
    answer: "💼 Connect with me on LinkedIn:\n👉 https://www.linkedin.com/in/subhan-shiekh12345",
  },
  {
    tags: ['github', 'git', 'repo', 'repository', 'code', 'source'],
    answer: "🐙 Check out my GitHub for code samples and projects:\n👉 https://github.com/thomasshelbay348-cmd",
  },
  {
    tags: ['price', 'cost', 'charge', 'rate', 'fee', 'budget', 'how much', 'quote'],
    answer: "My pricing depends on the project scope and requirements. I offer **competitive rates** tailored to your budget. 💰\n\nFor a custom quote, let's talk:\n📧 shiekhsubhan62@gmail.com\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['available', 'hire', 'freelance', 'freelancer', 'work together', 'collaborate'],
    answer: "Yes, I'm available for freelance projects and collaborations! 🤝 Whether it's a short task or a long-term build, I'd love to work together.\n\n📧 shiekhsubhan62@gmail.com\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['experience', 'year', 'how long', 'professional', 'senior', 'junior'],
    answer: "I have hands-on experience working on real-world projects for clients across **UK, Saudi Arabia, UAE, Australia, and Pakistan**. My work spans web development, AI chatbots, mobile apps, e-commerce, and UI/UX design. 🌍\n\nEvery project I take on, I treat as if it's my own.",
  },
  {
    tags: ['performance', 'speed', 'optimize', 'fast', 'scalable', 'loading'],
    answer: "Performance matters a lot to me! ⚡ I optimize websites and applications for speed, scalability, and reliability — making sure they perform at their best no matter the load or conditions.",
  },
  {
    tags: ['thank', 'thanks', 'thank you', 'thx', 'appreciated', 'great', 'awesome', 'nice', 'helpful'],
    answer: "You're very welcome! 😊 It's great talking with you. Feel free to ask me anything else!",
  },
  {
    tags: ['bye', 'goodbye', 'see you', 'later', 'take care'],
    answer: "Goodbye! 👋 It was great chatting with you. Feel free to come back anytime — I'm always here!",
  },

  // ── PACKAGES & PRICING ──
  {
    tags: ['package', 'plan', 'pricing plan', 'tier', 'bundle', 'deal', 'which plan'],
    answer: "I offer 3 flexible packages:\n\n🥉 **Starter** — Landing page / simple site\n• Responsive design + Basic SEO\n• 1 revision round\n• ⏱️ 3–5 days  |  💰 From $100\n\n🥈 **Growth** — Multi-page site / web app\n• Full-stack + API + UI/UX design\n• 3 revision rounds\n• ⏱️ 7–14 days  |  💰 From $300\n\n🥇 **Premium** — Complex app / e-commerce / AI\n• Admin dashboard + AI chatbot + Payments\n• Unlimited revisions + 1 month support\n• ⏱️ 14–30 days  |  💰 From $700\n\nNeed something custom? 📧 shiekhsubhan62@gmail.com",
  },
  {
    tags: ['starter', 'basic plan', 'cheapest', 'simple plan', 'landing page price'],
    answer: "🥉 **Starter Package** — Perfect for small businesses!\n\n✅ Landing page or simple website\n✅ Fully responsive design\n✅ Basic SEO optimization\n✅ Contact form integration\n✅ 1 round of revisions\n⏱️ Delivery: 3–5 business days\n💰 Starting from **$100**\n\n📧 shiekhsubhan62@gmail.com\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['growth', 'standard plan', 'mid plan', 'medium', 'web app plan'],
    answer: "🥈 **Growth Package** — Ideal for growing businesses!\n\n✅ Multi-page website or web app\n✅ Full-stack development (frontend + backend)\n✅ API integration\n✅ UI/UX design included\n✅ Database setup (MongoDB/Firebase)\n✅ 3 rounds of revisions\n⏱️ Delivery: 7–14 business days\n💰 Starting from **$300**\n\n📧 shiekhsubhan62@gmail.com",
  },
  {
    tags: ['premium', 'enterprise', 'advanced plan', 'ai plan', 'ecommerce plan', 'full package'],
    answer: "🥇 **Premium Package** — For complex, feature-rich applications!\n\n✅ Complex full-stack app / e-commerce\n✅ AI & chatbot integration\n✅ Admin dashboard\n✅ Payment gateway integration\n✅ Performance & SEO optimization\n✅ Unlimited revisions\n✅ 1 month post-launch support\n⏱️ Delivery: 14–30 business days\n💰 Starting from **$700**\n\n📧 shiekhsubhan62@gmail.com",
  },

  // ── FAQs ──
  {
    tags: ['faq', 'frequently asked', 'common question', 'people ask'],
    answer: "Here are the most common questions I get:\n\n❓ **How long does a project take?**\n→ 3–30 days depending on complexity\n\n❓ **Do you work with international clients?**\n→ Yes! I work remotely worldwide 🌍\n\n❓ **What if I don't like the result?**\n→ I offer revision rounds in every package\n\n❓ **Do you provide hosting/deployment?**\n→ Yes — Vercel, Netlify, Firebase, or custom server\n\n❓ **Do you sign NDAs?**\n→ Absolutely, your project is 100% confidential\n\n❓ **What payment methods do you accept?**\n→ JazzCash, Easypaisa, PayPal, Wise, USDT, Bank Transfer\n\n❓ **Can I see your previous work?**\n→ Yes! Ask me to 'show your projects'\n\nMore questions? 💬 https://wa.me/923711441930",
  },
  {
    tags: ['how long', 'timeline', 'how much time', 'duration', 'deadline', 'delivery time', 'when done'],
    answer: "Project timelines vary by scope:\n\n⏱️ Simple landing page → 3–5 days\n⏱️ Multi-page website → 7–14 days\n⏱️ Full-stack web app → 14–21 days\n⏱️ E-commerce + AI → 21–30 days\n⏱️ Custom/complex → Discussed individually\n\nI always aim to deliver on time or earlier! If you have a specific deadline, let me know and I'll confirm if it's feasible. 📅",
  },
  {
    tags: ['revision', 'change', 'edit after', 'modification', 'update', 'redo'],
    answer: "Yes, revisions are included in every package! 🔄\n\n🥉 Starter → 1 revision round\n🥈 Growth → 3 revision rounds\n🥇 Premium → Unlimited revisions\n\nA revision round covers changes to existing features. New features added after development may be priced separately. I always make sure you're 100% happy! 😊",
  },
  {
    tags: ['hosting', 'deployment', 'deploy', 'server', 'vercel', 'netlify', 'domain', 'live'],
    answer: "Yes, I handle deployment too! 🚀\n\nI can deploy on:\n• **Vercel** — Best for Next.js/React (free tier available)\n• **Netlify** — Great for static sites\n• **Firebase Hosting** — Perfect for real-time apps\n• **Custom VPS/cPanel** — For PHP/Laravel projects\n\nDomain registration & setup assistance also available!",
  },
  {
    tags: ['international', 'remote', 'overseas', 'outside pakistan', 'worldwide', 'abroad'],
    answer: "Absolutely! 🌍 I work remotely with clients from UK, UAE, Saudi Arabia, Australia, USA, and more. Time zones are never a problem — I'm flexible with communication. All work is done via WhatsApp, email, or any platform you prefer.",
  },
  {
    tags: ['maintenance', 'support after', 'post launch', 'after delivery', 'bug fix after'],
    answer: "Yes, I provide post-launch support! 🛠️\n\n• **Starter & Growth** — 7 days free bug fixes after delivery\n• **Premium** — 1 month free post-launch support\n• **Ongoing maintenance** — Available as a separate retainer\n\nI don't just hand over and disappear — I make sure everything runs smoothly! 💪",
  },

  // ── TERMS & CONDITIONS ──
  {
    tags: ['terms', 'condition', 'terms and condition', 'agreement', 'contract', 'rules', 'policy'],
    answer: "📄 **My Working Terms & Conditions:**\n\n1. **Kickoff** — 50% advance payment required before work begins\n2. **Final Payment** — Remaining 50% due upon completion & approval\n3. **Revisions** — Included per package; extra revisions billed separately\n4. **Ownership** — Full source code & files transferred after final payment\n5. **Confidentiality** — Your project details are strictly private\n6. **Timeline** — Agreed deadlines respected; client-caused delays not counted\n7. **Cancellation** — Mid-project cancellation: advance is non-refundable\n8. **Communication** — Timely feedback from client expected for smooth delivery\n\nNeed a formal contract or NDA? Just ask!\n📧 shiekhsubhan62@gmail.com",
  },
  {
    tags: ['nda', 'confidential', 'privacy', 'secret', 'non disclosure', 'data safe'],
    answer: "Your project is 100% confidential! 🔒\n\n• I never share client details, code, or business info with anyone\n• Happy to sign a formal **NDA** before starting\n• Source code & assets belong to you after final payment\n• No portfolio usage of your project without your permission\n\nYour trust is my top priority. 🤝",
  },
  {
    tags: ['payment', 'pay', 'jazzcash', 'easypaisa', 'paypal', 'wise', 'usdt', 'crypto', 'how to pay', 'payment method'],
    answer: "💳 **Accepted Payment Methods:**\n\n🇵🇰 **Pakistan (Local):**\n• JazzCash\n• Easypaisa\n• Bank Transfer (Meezan, HBL, UBL)\n\n🌍 **International:**\n• PayPal\n• Wise (TransferWise)\n• USDT (Crypto)\n• Bank Wire Transfer\n\n**Payment Terms:**\n• 50% advance to start the project\n• 50% on final delivery\n\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['refund', 'money back', 'cancel', 'cancellation'],
    answer: "📋 **Refund & Cancellation Policy:**\n\n• **Before work starts** — Full refund ✅\n• **Work in progress (< 50% done)** — 50% of advance refundable\n• **Work in progress (> 50% done)** — No refund; you receive all completed work\n• **After delivery** — No refund; revisions offered instead\n• **Bug fixes** — Always free within the support period\n\nI aim for 100% client satisfaction, so refunds are very rare! 😊",
  },
  {
    tags: ['source code', 'code ownership', 'files', 'ownership', 'intellectual property'],
    answer: "🗂️ **After project completion and full payment:**\n\n✅ 100% of source code delivered to you\n✅ All design files (Figma, assets, images)\n✅ Database schemas & API documentation\n✅ Deployment credentials & access\n✅ Full ownership — it's completely yours!\n\nI retain zero rights to your project after delivery. 🔐",
  },

  // ── CUSTOMER SUPPORT ──
  {
    tags: ['problem', 'issue', 'bug', 'not working', 'broken', 'error', 'crash', 'fix', 'help me'],
    answer: "Oh no, let me help! 🔧\n\nFor fastest support, reach me here:\n💬 **WhatsApp (fastest):** https://wa.me/923711441930\n📧 **Email:** shiekhsubhan62@gmail.com\n\nPlease share:\n• What the issue is\n• Screenshots if possible\n• Which device/browser you're using\n\nI typically respond within a few hours! ⚡",
  },
  {
    tags: ['response time', 'how fast', 'when reply', 'how quick', 'fast response'],
    answer: "⚡ I'm usually very responsive!\n\n• **WhatsApp** — Within 1–3 hours (fastest)\n• **Email** — Within 24 hours\n• **Working hours** — 9 AM – 10 PM PKT (UTC+5)\n\nFor urgent matters, WhatsApp is always best:\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['start project', 'how to start', 'begin', 'get started', 'next step', 'process', 'workflow', 'procedure', 'how does it work'],
    answer: "Getting started is simple! Here's my process:\n\n📋 **Step 1** — Share your project idea & requirements\n💬 **Step 2** — We discuss details, timeline & price\n📝 **Step 3** — Agreement finalized (contract/NDA if needed)\n💳 **Step 4** — 50% advance payment\n🛠️ **Step 5** — I build & share regular progress updates\n✅ **Step 6** — You review & request revisions if needed\n🚀 **Step 7** — Final delivery + remaining payment\n🎉 **Step 8** — Post-launch support period begins!\n\nReady? Let's talk:\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['update', 'progress', 'status', 'how is it going'],
    answer: "I keep clients updated throughout the project! 📊\n\n• Regular updates via WhatsApp or email\n• Demo links shared at key milestones\n• Open communication throughout — no surprises!\n\nHave an active project? Ping me directly:\n💬 https://wa.me/923711441930",
  },
  {
    tags: ['complaint', 'not happy', 'unhappy', 'disappointed', 'not satisfied', 'dissatisfied'],
    answer: "I'm sorry to hear that! 😔 Your satisfaction is my top priority.\n\nPlease reach out so I can make it right:\n💬 **WhatsApp:** https://wa.me/923711441930\n📧 **Email:** shiekhsubhan62@gmail.com\n\nI'll do everything to resolve your concern quickly and professionally. I stand by my work 100%! 💪",
  },
  {
    tags: ['testimonial', 'review', 'feedback', 'rating', 'client say', 'happy client', 'recommendation'],
    answer: "I've worked with clients from UK, UAE, Saudi Arabia, Australia, and Pakistan — all satisfied! 🌟\n\nSome highlights:\n✅ **BJ Architects** — Full website + chatbot (international)\n✅ **Al Fatima Academy** — Complete online education platform\n✅ **Airport Luggage Van** — London logistics platform\n✅ **NexMove** — AI-powered chatbot system\n\nWant to verify? Ask me to 'show your projects' for all live demo links!",
  },
  {
    tags: ['technology recommend', 'which tech', 'what should i use', 'suggest', 'recommend stack', 'advice', 'consulting', 'what to use'],
    answer: "Here's what I recommend based on project type:\n\n🌐 **Simple website** → HTML + Tailwind + Vercel\n⚛️ **Dynamic web app** → React + Node.js + MongoDB\n🛒 **E-commerce** → Next.js + Stripe + MongoDB\n📱 **Mobile app** → React Native\n🤖 **AI chatbot** → Gemini API + Node.js\n🔥 **Real-time features** → Firebase\n🐘 **Large-scale backend** → Laravel + MySQL\n\nNot sure what fits? Let's chat — free consultation!\n💬 https://wa.me/923711441930",
  },
];

// ─────────────────────────────────────────────
//  MATCHING ENGINE — keyword-based local search
// ─────────────────────────────────────────────
function getAnswer(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  let bestScore = 0;
  let bestAnswer = null;

  for (const entry of KB) {
    let score = 0;
    for (const tag of entry.tags) {
      if (msg.includes(tag)) {
        score += tag.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  if (bestAnswer) return bestAnswer;

  return "Hmm, I'm not sure about that one! 🤔 But I can help you with:\n\n• What **services** I offer\n• My **projects** & live demos\n• My **skills** & tech stack\n• How to **contact** me\n\nTry asking something like: *\"What do you offer?\"* or *\"Show me your projects\"* 😊";
}

// ─────────────────────────────────────────────
//  MARKDOWN RENDERER — bold + line breaks
// ─────────────────────────────────────────────
function AnswerText({ text }) {
  const lines = text.split('\n');
  return (
    <span>
      {lines.map((line, i) => {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <span key={i}>
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </span>
  );
}

const starterMessage = {
  role: 'assistant',
  content: "Hey! 👋 I'm Subhan — a Full-Stack Developer. Ask me anything about my services, projects, skills, or how to work together!",
};

const suggestions = [
  'What services do you offer?',
  'Show me your projects',
  'How can I contact you?',
  'What are your skills?',
];

const createId = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

function ChatIcon({ close = false }) {
  return close ? (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.48 3 2 6.94 2 11.8c0 2.76 1.45 5.25 3.84 6.84L5 22l4.13-1.38c.9.25 1.86.38 2.87.38 5.52 0 10-3.94 10-8.8S17.52 3 12 3z" />
    </svg>
  );
}

function SendIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>;
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([starterMessage]);
  const [draft, setDraft] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  const closeChat = () => {
    setIsOpen(false);
    setMessages([starterMessage]);
    setDraft('');
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeChat();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const sendMessage = (value) => {
    const content = value.trim();
    if (!content || isTyping) return;

    const userMsg = { role: 'user', content, id: createId() };
    setMessages((prev) => [...prev, userMsg]);
    setDraft('');
    setIsTyping(true);

    // Local KB lookup with simulated typing delay
    setTimeout(() => {
      const reply = getAnswer(content);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply, id: createId() }]);
      setIsTyping(false);
      inputRef.current?.focus();
    }, 600);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(draft);
  };

  return (
    <div className="portfolio-assistant">
      {isOpen && (
        <section
          className="portfolio-assistant__panel"
          id="portfolio-chat-panel"
          role="dialog"
          aria-label="Subhan's portfolio assistant"
          aria-modal="false"
        >
          <header className="portfolio-assistant__header">
            <img className="portfolio-assistant__avatar" src="/images/img.jpg" alt="" />
            <div className="portfolio-assistant__identity">
              <h2>Subhan's Assistant</h2>
              <p><span className="portfolio-assistant__online-dot" /> Portfolio support</p>
            </div>
            <button
              className="portfolio-assistant__close"
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
            >
              <ChatIcon close />
            </button>
          </header>

          <div className="portfolio-assistant__notice">
            Ask about Subhan's portfolio, services, projects, skills, or contact details.
          </div>

          <div className="portfolio-assistant__messages" role="log" aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => (
              <div
                className={`portfolio-assistant__message portfolio-assistant__message--${message.role}`}
                key={message.id || `${message.role}-${index}`}
              >
                {message.role === 'assistant'
                  ? <AnswerText text={message.content} />
                  : message.content}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="portfolio-assistant__suggestions" aria-label="Suggested questions">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)} disabled={isTyping}>
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            {isTyping && (
              <div className="portfolio-assistant__typing" role="status" aria-label="Assistant is replying">
                <span /><span /><span />
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="portfolio-assistant__composer" onSubmit={handleSubmit}>
            <label className="portfolio-assistant__sr-only" htmlFor="portfolio-chat-input">Message the portfolio assistant</label>
            <input
              ref={inputRef}
              id="portfolio-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about the portfolio…"
              maxLength={1200}
              autoComplete="off"
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !draft.trim()} aria-label="Send message">
              <SendIcon />
            </button>
          </form>
          <p className="portfolio-assistant__disclaimer">Instant answers · Portfolio topics only</p>
        </section>
      )}

      <button
        className={`portfolio-assistant__toggle${isOpen ? ' portfolio-assistant__toggle--open' : ''}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="portfolio-chat-panel"
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        onClick={() => {
          if (isOpen) {
            closeChat();
          } else {
            setIsOpen(true);
          }
        }}
      >
        <ChatIcon close={isOpen} />
      </button>
    </div>
  );
}
