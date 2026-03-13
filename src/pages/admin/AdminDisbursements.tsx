import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, IndianRupee, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

const disbursements = [
  { id: "DSB-1001", loanId: "LN-2844", name: "Sneha Gupta", amount: "₹10,000", method: "Bank Transfer", status: "Completed", date: "07 Mar 2026", utr: "UTR123456789", bank: "SBI - XXXX5678" },
  { id: "DSB-1002", loanId: "LN-2842", name: "Meera Iyer", amount: "₹35,000", method: "Bank Transfer", status: "Completed", date: "05 Mar 2026", utr: "UTR987654321", bank: "HDFC - XXXX4321" },
  { id: "DSB-1003", loanId: "LN-2845", name: "Amit Patel", amount: "₹50,000", method: "Bank Transfer", status: "Pending", date: "08 Mar 2026", utr: "-", bank: "ICICI - XXXX9012" },
  { id: "DSB-1004", loanId: "LN-2847", name: "Rajesh Kumar", amount: "₹25,000", method: "UPI", status: "Processing", date: "08 Mar 2026", utr: "-", bank: "Axis - XXXX3456" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  Processing: "bg-info/10 text-info border-info/20",
  Failed: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function AdminDisbursements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Disbursements</h1>
        <p className="text-sm text-muted-foreground">Track all loan disbursements</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10"><IndianRupee className="h-5 w-5 text-success" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹45,000</p>
          <p className="text-xs text-muted-foreground">Total Disbursed Today</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10"><Clock className="h-5 w-5 text-warning" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-muted-foreground">Pending Disbursements</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"><CheckCircle className="h-5 w-5 text-accent" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹4.2 Cr</p>
          <p className="text-xs text-muted-foreground">Total Disbursed (Lifetime)</p>
        </CardContent></Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search disbursements..." className="w-72 pl-9" /></div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">ID</th><th className="pb-3 font-medium">Loan ID</th><th className="pb-3 font-medium">Borrower</th><th className="pb-3 font-medium">Amount</th><th className="pb-3 font-medium">Method</th><th className="pb-3 font-medium">Bank</th><th className="pb-3 font-medium">UTR</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Date</th>
              </tr></thead>
              <tbody>
                {disbursements.map(d => (
                  <tr key={d.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 font-medium text-foreground">{d.id}</td>
                    <td className="py-3 text-accent font-medium">{d.loanId}</td>
                    <td className="py-3 text-foreground">{d.name}</td>
                    <td className="py-3 font-medium text-foreground">{d.amount}</td>
                    <td className="py-3 text-muted-foreground">{d.method}</td>
                    <td className="py-3 text-muted-foreground text-xs">{d.bank}</td>
                    <td className="py-3 text-xs font-mono text-muted-foreground">{d.utr}</td>
                    <td className="py-3"><Badge variant="outline" className={statusColors[d.status]}>{d.status}</Badge></td>
                    <td className="py-3 text-muted-foreground">{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
