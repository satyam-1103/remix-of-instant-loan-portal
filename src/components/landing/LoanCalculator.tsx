import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function LoanCalculator() {
  const [amount, setAmount] = useState(25000);
  const [tenure, setTenure] = useState(14);

  const interestRate = 0.02; // 2% per week
  const weeks = Math.ceil(tenure / 7);
  const interest = amount * interestRate * weeks;
  const processingFee = amount * 0.02;
  const totalPayable = amount + interest + processingFee;

  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl font-bold text-foreground">Loan Calculator</h2>
          <p className="mt-2 text-muted-foreground">See how much you'll pay — transparent pricing, no hidden fees.</p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-xl rounded-2xl border bg-card p-8 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-muted-foreground">Loan Amount</label>
                <span className="font-heading text-2xl font-bold text-foreground">₹{amount.toLocaleString('en-IN')}</span>
              </div>
              <Slider
                value={[amount]}
                onValueChange={(v) => setAmount(v[0])}
                min={5000}
                max={100000}
                step={1000}
                className="mt-4"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>₹5,000</span><span>₹1,00,000</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-muted-foreground">Tenure</label>
                <span className="font-heading text-2xl font-bold text-foreground">{tenure} days</span>
              </div>
              <Slider
                value={[tenure]}
                onValueChange={(v) => setTenure(v[0])}
                min={7}
                max={30}
                step={7}
                className="mt-4"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>7 days</span><span>30 days</span>
              </div>
            </div>

            <div className="space-y-3 rounded-xl bg-muted p-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Loan Amount</span>
                <span className="font-medium text-foreground">₹{amount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Interest ({(interestRate * 100).toFixed(0)}%/week)</span>
                <span className="font-medium text-foreground">₹{interest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Processing Fee (2%)</span>
                <span className="font-medium text-foreground">₹{processingFee.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-heading font-semibold text-foreground">Total Payable</span>
                  <span className="font-heading text-xl font-bold text-accent">₹{totalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-accent-gradient text-lg text-accent-foreground hover:opacity-90" size="lg" asChild>
              <Link to="/borrower/apply">Apply for ₹{amount.toLocaleString('en-IN')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
