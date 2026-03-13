import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, IndianRupee, Users, Link2, Copy } from "lucide-react";

const partners = [
  { id: "PTR-001", name: "QuickFin DSA", contact: "Ravi Agarwal", phone: "9876500001", email: "ravi@quickfin.com", type: "DSA", status: "Active", leadsSubmitted: 145, converted: 87, commission: "₹1,74,000", pending: "₹23,000", referralCode: "QFIN2024" },
  { id: "PTR-002", name: "MoneyFirst", contact: "Sita Menon", phone: "8765400002", email: "sita@moneyfirst.com", type: "Referral", status: "Active", leadsSubmitted: 89, converted: 45, commission: "₹90,000", pending: "₹12,000", referralCode: "MF2025" },
  { id: "PTR-003", name: "LoanBazaar Agent", contact: "Deepak Jha", phone: "7654300003", email: "deepak@lb.com", type: "Agent", status: "Active", leadsSubmitted: 210, converted: 120, commission: "₹3,60,000", pending: "₹45,000", referralCode: "LBA2024" },
  { id: "PTR-004", name: "CashEasy Partners", contact: "Neha Patel", phone: "6543200004", email: "neha@casheasy.com", type: "DSA", status: "Inactive", leadsSubmitted: 34, converted: 12, commission: "₹24,000", pending: "₹0", referralCode: "CE2024" },
];

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  Inactive: "bg-muted text-muted-foreground border-border",
};

export default function AdminPartners() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Partner / Agent Module</h1>
          <p className="text-sm text-muted-foreground">Manage DSA, referral partners, and agents</p>
        </div>
        <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Add Partner</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"><Briefcase className="h-5 w-5 text-accent" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">4</p>
          <p className="text-xs text-muted-foreground">Total Partners</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10"><Users className="h-5 w-5 text-info" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">478</p>
          <p className="text-xs text-muted-foreground">Total Leads</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10"><IndianRupee className="h-5 w-5 text-success" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹6.48L</p>
          <p className="text-xs text-muted-foreground">Total Commission Paid</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10"><IndianRupee className="h-5 w-5 text-warning" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹80,000</p>
          <p className="text-xs text-muted-foreground">Pending Commission</p>
        </CardContent></Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search partners..." className="w-72 pl-9" /></div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">Partner</th><th className="pb-3 font-medium">Type</th><th className="pb-3 font-medium">Leads</th><th className="pb-3 font-medium">Converted</th><th className="pb-3 font-medium">Commission</th><th className="pb-3 font-medium">Pending</th><th className="pb-3 font-medium">Referral Code</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Actions</th>
              </tr></thead>
              <tbody>
                {partners.map(p => (
                  <tr key={p.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3"><div><p className="font-medium text-foreground">{p.name}</p><p className="text-xs text-muted-foreground">{p.contact} • {p.phone}</p></div></td>
                    <td className="py-3"><Badge variant="secondary">{p.type}</Badge></td>
                    <td className="py-3 text-foreground">{p.leadsSubmitted}</td>
                    <td className="py-3 text-success font-medium">{p.converted}</td>
                    <td className="py-3 font-medium text-foreground">{p.commission}</td>
                    <td className="py-3 text-warning font-medium">{p.pending}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-1">
                        <code className="rounded bg-muted px-2 py-0.5 text-xs">{p.referralCode}</code>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0"><Copy className="h-3 w-3" /></Button>
                      </div>
                    </td>
                    <td className="py-3"><Badge variant="outline" className={statusColors[p.status]}>{p.status}</Badge></td>
                    <td className="py-3"><Button variant="ghost" size="sm">View</Button></td>
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
