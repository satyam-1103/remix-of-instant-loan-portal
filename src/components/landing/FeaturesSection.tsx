import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Clock, Banknote, FileText, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Smartphone, title: "100% Digital", desc: "Apply from anywhere using your phone. No branch visits needed." },
  { icon: Clock, title: "Instant Approval", desc: "AI-powered credit decisions in under 5 minutes." },
  { icon: Banknote, title: "Quick Disbursement", desc: "Money transferred directly to your bank account." },
  { icon: ShieldCheck, title: "Secure & Private", desc: "Bank-grade encryption protects your data." },
  { icon: FileText, title: "Minimal Documents", desc: "Just PAN, Aadhaar, and bank details needed." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our support team is always here to help." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground">Why Choose PayDayQuick?</h2>
          <p className="mt-2 text-muted-foreground">Fast, transparent, and designed for your emergency needs.</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
