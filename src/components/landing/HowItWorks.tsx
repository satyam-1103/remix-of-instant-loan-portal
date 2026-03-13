import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Apply Online", desc: "Fill a simple form with your basic details and loan requirements." },
  { step: "02", title: "Verify KYC", desc: "Upload PAN, Aadhaar, and salary slip. Takes under 2 minutes." },
  { step: "03", title: "Get Approved", desc: "Our AI engine evaluates your profile and gives instant decision." },
  { step: "04", title: "Receive Funds", desc: "Approved amount is transferred to your bank within minutes." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground">How It Works</h2>
          <p className="mt-2 text-muted-foreground">Four simple steps to get your loan.</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-gradient">
                <span className="font-heading text-xl font-bold text-accent-foreground">{s.step}</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
