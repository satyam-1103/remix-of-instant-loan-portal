import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, CreditCard, Smartphone, Building } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const schedule = [
  { date: "21 Mar 2026", amount: "₹12,750", principal: "₹12,500", interest: "₹250", status: "Upcoming" },
  { date: "07 Mar 2026", amount: "₹12,750", principal: "₹12,500", interest: "₹250", status: "Paid" },
];

export default function BorrowerRepayment() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Repayment</h1>
        <p className="text-sm text-muted-foreground">Manage your loan repayments</p>
      </div>

      <Card className="shadow-card border-accent/30">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Next Payment Due</p>
          <p className="mt-1 font-heading text-3xl font-bold text-foreground">₹12,750</p>
          <p className="text-sm text-muted-foreground">Due on 21 March 2026 • 13 days left</p>
          <Separator className="my-4" />
          <p className="text-xs font-medium text-muted-foreground mb-3">Choose Payment Method</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "UPI", icon: Smartphone, desc: "Google Pay, PhonePe" },
              { label: "Net Banking", icon: Building, desc: "All banks supported" },
              { label: "Debit Card", icon: CreditCard, desc: "Visa, Mastercard" },
              { label: "Auto Debit", icon: IndianRupee, desc: "Set up NACH mandate" },
            ].map(m => (
              <button key={m.label} className="flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:border-accent hover:bg-accent/5">
                <m.icon className="h-5 w-5 text-accent" />
                <div><p className="text-sm font-medium text-foreground">{m.label}</p><p className="text-xs text-muted-foreground">{m.desc}</p></div>
              </button>
            ))}
          </div>
          <Button className="mt-4 w-full bg-accent-gradient text-lg text-accent-foreground hover:opacity-90" size="lg">Pay ₹12,750</Button>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="font-heading text-lg">EMI Schedule</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {schedule.map((s, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{s.date}</p>
                  <p className="text-xs text-muted-foreground">Principal: {s.principal} + Interest: {s.interest}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-heading font-semibold text-foreground">{s.amount}</span>
                  <Badge variant="outline" className={s.status === "Paid" ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20"}>{s.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
