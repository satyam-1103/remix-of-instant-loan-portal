import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, UserCheck, AlertTriangle, IndianRupee, Eye } from "lucide-react";

const borrowers = [
  { id: "BRW-001", name: "Rajesh Kumar", phone: "9876543210", email: "rajesh@email.com", city: "Mumbai", kycStatus: "Verified", totalLoans: 3, activeLoans: 1, totalBorrowed: "₹75,000", repaid: "₹50,000", creditScore: 720, joinedDate: "Jan 2025" },
  { id: "BRW-002", name: "Priya Sharma", phone: "8765432109", email: "priya@email.com", city: "Delhi", kycStatus: "Verified", totalLoans: 2, activeLoans: 1, totalBorrowed: "₹35,000", repaid: "₹20,000", creditScore: 680, joinedDate: "Mar 2025" },
  { id: "BRW-003", name: "Amit Patel", phone: "7654321098", email: "amit@email.com", city: "Bangalore", kycStatus: "Pending", totalLoans: 1, activeLoans: 1, totalBorrowed: "₹50,000", repaid: "₹0", creditScore: 710, joinedDate: "Feb 2026" },
  { id: "BRW-004", name: "Sneha Gupta", phone: "6543210987", email: "sneha@email.com", city: "Pune", kycStatus: "Verified", totalLoans: 4, activeLoans: 0, totalBorrowed: "₹80,000", repaid: "₹80,000", creditScore: 750, joinedDate: "Jun 2024" },
  { id: "BRW-005", name: "Vikram Singh", phone: "5432109876", email: "vikram@email.com", city: "Jaipur", kycStatus: "Rejected", totalLoans: 1, activeLoans: 0, totalBorrowed: "₹0", repaid: "₹0", creditScore: 520, joinedDate: "Mar 2026" },
];

const kycColors: Record<string, string> = {
  Verified: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function AdminBorrowers() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Borrower Management</h1>
        <p className="text-sm text-muted-foreground">{borrowers.length} registered borrowers</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"><UserCheck className="h-5 w-5 text-accent" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">1,245</p>
          <p className="text-xs text-muted-foreground">Active Borrowers</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10"><IndianRupee className="h-5 w-5 text-success" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹2.4 Cr</p>
          <p className="text-xs text-muted-foreground">Total Repaid</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10"><AlertTriangle className="h-5 w-5 text-warning" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">23</p>
          <p className="text-xs text-muted-foreground">KYC Pending</p>
        </CardContent></Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search borrowers..." className="w-72 pl-9" /></div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">Borrower</th><th className="pb-3 font-medium">City</th><th className="pb-3 font-medium">KYC</th><th className="pb-3 font-medium">Score</th><th className="pb-3 font-medium">Loans</th><th className="pb-3 font-medium">Borrowed</th><th className="pb-3 font-medium">Repaid</th><th className="pb-3 font-medium">Joined</th><th className="pb-3 font-medium">Actions</th>
              </tr></thead>
              <tbody>
                {borrowers.map(b => (
                  <tr key={b.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3"><div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8"><AvatarFallback className="bg-accent/10 text-accent text-xs">{b.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback></Avatar>
                      <div><p className="font-medium text-foreground">{b.name}</p><p className="text-xs text-muted-foreground">{b.phone}</p></div>
                    </div></td>
                    <td className="py-3 text-muted-foreground">{b.city}</td>
                    <td className="py-3"><Badge variant="outline" className={kycColors[b.kycStatus]}>{b.kycStatus}</Badge></td>
                    <td className="py-3"><span className={`font-medium ${b.creditScore >= 650 ? "text-success" : "text-destructive"}`}>{b.creditScore}</span></td>
                    <td className="py-3 text-muted-foreground">{b.totalLoans} ({b.activeLoans} active)</td>
                    <td className="py-3 font-medium text-foreground">{b.totalBorrowed}</td>
                    <td className="py-3 text-success font-medium">{b.repaid}</td>
                    <td className="py-3 text-muted-foreground">{b.joinedDate}</td>
                    <td className="py-3"><Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button></td>
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
