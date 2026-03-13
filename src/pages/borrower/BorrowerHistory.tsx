import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const loans = [
  { id: "LN-2847", amount: "₹25,000", tenure: "14 days", status: "Active", disbursed: "08 Mar 2026", due: "22 Mar 2026", interest: "₹1,000", total: "₹26,500" },
  { id: "LN-2830", amount: "₹15,000", tenure: "7 days", status: "Closed", disbursed: "10 Feb 2026", due: "17 Feb 2026", interest: "₹300", total: "₹15,600" },
  { id: "LN-2815", amount: "₹20,000", tenure: "14 days", status: "Closed", disbursed: "05 Jan 2026", due: "19 Jan 2026", interest: "₹800", total: "₹21,200" },
  { id: "LN-2800", amount: "₹10,000", tenure: "7 days", status: "Closed", disbursed: "20 Dec 2025", due: "27 Dec 2025", interest: "₹200", total: "₹10,400" },
];

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  Closed: "bg-muted text-muted-foreground border-border",
  Overdue: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function BorrowerHistory() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Loan History</h1>
        <p className="text-sm text-muted-foreground">{loans.length} total loans</p>
      </div>

      <div className="space-y-3">
        {loans.map(loan => (
          <Card key={loan.id} className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-foreground">{loan.id}</span>
                    <Badge variant="outline" className={statusColors[loan.status]}>{loan.status}</Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Disbursed: {loan.disbursed} → Due: {loan.due}</p>
                </div>
                <div className="text-right">
                  <p className="font-heading text-lg font-bold text-foreground">{loan.amount}</p>
                  <p className="text-xs text-muted-foreground">{loan.tenure}</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 rounded-lg bg-muted/50 p-3 text-center text-xs">
                <div><p className="text-muted-foreground">Principal</p><p className="font-medium text-foreground">{loan.amount}</p></div>
                <div><p className="text-muted-foreground">Interest</p><p className="font-medium text-foreground">{loan.interest}</p></div>
                <div><p className="text-muted-foreground">Total</p><p className="font-medium text-foreground">{loan.total}</p></div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="text-xs"><Eye className="mr-1 h-3 w-3" />View Details</Button>
                <Button variant="outline" size="sm" className="text-xs"><Download className="mr-1 h-3 w-3" />Agreement</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
