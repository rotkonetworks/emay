export type FAQ = {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: "What is JMAP and why is it better than IMAP?",
    answer:
      "JMAP (JSON Meta Application Protocol) is a modern email protocol designed to be faster, more efficient, and more mobile-friendly than IMAP. It reduces data usage, improves battery life on mobile devices, and allows for instant, reliable push notifications. We built emay.me on JMAP to provide a superior email experience.",
  },
  {
    question: "Is emay.me really free?",
    answer:
      "Yes! Our Free plan gives you 100MB of storage and all the essential features you need for personal use. It's a great way to experience the speed of JMAP. You can upgrade to a paid plan anytime you need more storage or advanced features.",
  },
  {
    question: "Can I use my own domain with emay.me?",
    answer:
      "Absolutely. Our Business plan is designed for this. For just $20/year, you can connect your own domain and get professional email addresses (e.g., you@yourcompany.com) backed by our fast infrastructure.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "Privacy is at the core of our service. We do not track you, scan your emails to sell data, or show you ads. Our business model is simple: we offer a great product, and users who need more pay for it. Your data belongs to you, period.",
  },
  {
    question: "When will the native Android app be available?",
    answer:
      "Our native Android app is in the final stages of development and testing. We are working hard to release it as soon as possible. You can sign up on our homepage to be notified the moment it's released.",
  },
]
