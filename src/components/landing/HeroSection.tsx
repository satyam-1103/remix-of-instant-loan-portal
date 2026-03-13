import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 lg:py-32">
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Zap className="h-4 w-4 text-accent" />
              Instant Approval in Minutes
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Get Cash When You
              <span className="block text-gradient"> Need It Most</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70">
              Quick payday loans from ₹5,000 to ₹1,00,000. No paperwork, no lengthy process. 
              Apply online and get funds in your bank within minutes.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="bg-accent-gradient px-8 text-lg text-accent-foreground hover:opacity-90" asChild>
              <Link to="/borrower/apply">
                Apply for Loan <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 px-8 text-lg text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#calculator">Check Eligibility</a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: Clock, label: "5-Min Approval", desc: "Instant decisions" },
              { icon: Shield, label: "100% Secure", desc: "Bank-grade encryption" },
              { icon: Zap, label: "Direct Transfer", desc: "Money in minutes" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-heading text-sm font-semibold text-primary-foreground">{item.label}</p>
                  <p className="text-xs text-primary-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
