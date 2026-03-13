import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, AlertTriangle, Phone, IndianRupee, Clock } from "lucide-react";

const collections = [
  { id: "COL-001", loanId: "LN-2840", name: "Ramesh Yadav", amount: "₹12,500", dueDate: "01 Mar 2026", overdueDays: 7, totalDue: "₹13,125", lateFee: "₹625", status: "Overdue", agent: "Sunil Kumar", lastAction: "SMS sent", phone: "9876501234" },
  { id: "COL-002", loanId: "LN-2838", name: "Pooja Mishra", amount: "₹20,000", dueDate: "28 Feb 2026", overdueDays: 8, totalDue: "₹21,200", lateFee: "₹1,200", status: "Overdue", agent: "Sunil Kumar", lastAction: "Called - no answer", phone: "8765401234" },
  { id: "COL-003", loanId: "LN-2835", name: "Kiran Das", amount: "₹8,000", dueDate: "25 Feb 2026", overdueDays: 11, totalDue: "₹8,880", lateFee: "₹880", status: "Critical", agent: "Meena Rao", lastAction: "Visited - promised payment", phone: "7654301234" },
  { id: "COL-004", loanId: "LN-2844", name: "Sneha Gupta", amount: "₹10,500", dueDate: "14 Mar 2026", overdueDays: 0, totalDue: "₹10,500", lateFee: "₹0", status: "Upcoming", agent: "-", lastAction: "Reminder scheduled", phone: "6543201234" },
];

const statusColors: Record<string, string> = {
  Overdue: "bg-warning/10 text-warning border-warning/20",
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  Upcoming: "bg-info/10 text-info border-info/20",
  Collected: "bg-success/10 text-success border-success/20",
};

export default function AdminCollections() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Collections & Recovery</h1>
        <p className="text-sm text-muted-foreground">Manage overdue payments and recovery</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10"><AlertTriangle className="h-5 w-5 text-destructive" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹43,205</p>
          <p className="text-xs text-muted-foreground">Total Overdue Amount</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10"><Clock className="h-5 w-5 text-warning" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground">Overdue Accounts</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"><IndianRupee className="h-5 w-5 text-accent" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹2,705</p>
          <p className="text-xs text-muted-foreground">Total Late Fees</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10"><Phone className="h-5 w-5 text-success" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">94.2%</p>
          <p className="text-xs text-muted-foreground">Collection Rate</p>
        </CardContent></Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search..." className="w-64 pl-9" /></div>
            <Select><SelectTrigger className="w-32"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">Loan ID</th><th className="pb-3 font-medium">Borrower</th><th className="pb-3 font-medium">Due Amount</th><th className="pb-3 font-medium">Late Fee</th><th className="pb-3 font-medium">Total Due</th><th className="pb-3 font-medium">Overdue</th><th className="pb-3 font-medium">Agent</th><th className="pb-3 font-medium">Last Action</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Actions</th>
              </tr></thead>
              <tbody>
                {collections.map(c => (
                  <tr key={c.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 font-medium text-accent">{c.loanId}</td>
                    <td className="py-3"><div><p className="font-medium text-foreground">{c.name}</p><p className="text-xs text-muted-foreground">{c.phone}</p></div></td>
                    <td className="py-3 font-medium text-foreground">{c.amount}</td>
                    <td className="py-3 text-destructive font-medium">{c.lateFee}</td>
                    <td className="py-3 font-bold text-foreground">{c.totalDue}</td>
                    <td className="py-3"><span className={c.overdueDays > 0 ? "text-destructive font-medium" : "text-muted-foreground"}>{c.overdueDays > 0 ? `${c.overdueDays} days` : "-"}</span></td>
                    <td className="py-3 text-muted-foreground">{c.agent}</td>
                    <td className="py-3 text-xs text-muted-foreground">{c.lastAction}</td>
                    <td className="py-3"><Badge variant="outline" className={statusColors[c.status]}>{c.status}</Badge></td>
                    <td className="py-3"><div className="flex gap-1"><Button variant="ghost" size="sm">Call</Button><Button variant="ghost" size="sm">Note</Button></div></td>
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
