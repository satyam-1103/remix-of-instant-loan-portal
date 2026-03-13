import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is a payday loan?", a: "A payday loan is a short-term loan designed to cover urgent expenses until your next paycheck. Loan amounts range from ₹5,000 to ₹1,00,000 with tenures of 7 to 30 days." },
  { q: "What documents do I need?", a: "You'll need your PAN card, Aadhaar card, latest salary slip, and bank statement. All documents can be uploaded digitally." },
  { q: "How fast can I get the money?", a: "Once approved, funds are transferred to your bank account within minutes. The entire process from application to disbursement can take as little as 15 minutes." },
  { q: "What are the interest rates?", a: "Our interest rates start from 2% per week. The exact rate depends on your credit profile, loan amount, and tenure." },
  { q: "Can I repay early?", a: "Yes! You can repay your loan early with no prepayment penalties. Early repayment can also improve your credit score on our platform." },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div className="mx-auto mt-10 max-w-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-5">
                <AccordionTrigger className="font-heading text-left font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
