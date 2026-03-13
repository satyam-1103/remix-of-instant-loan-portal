import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Users, FileCheck, AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { title: "Total Applications", value: "2,847", change: "+12.5%", up: true, icon: Users, color: "bg-info/10 text-info" },
  { title: "Approved Loans", value: "1,923", change: "+8.2%", up: true, icon: FileCheck, color: "bg-success/10 text-success" },
  { title: "Total Disbursed", value: "₹4.2 Cr", change: "+15.3%", up: true, icon: IndianRupee, color: "bg-accent/10 text-accent" },
  { title: "NPA / Overdue", value: "₹18.5L", change: "+2.1%", up: false, icon: AlertTriangle, color: "bg-destructive/10 text-destructive" },
];

const recentApplications = [
  { id: "LN-2847", name: "Rajesh Kumar", amount: "₹25,000", status: "Approved", date: "Today", score: 720 },
  { id: "LN-2846", name: "Priya Sharma", amount: "₹15,000", status: "Pending", date: "Today", score: 680 },
  { id: "LN-2845", name: "Amit Patel", amount: "₹50,000", status: "Under Review", date: "Yesterday", score: 710 },
  { id: "LN-2844", name: "Sneha Gupta", amount: "₹10,000", status: "Disbursed", date: "Yesterday", score: 750 },
  { id: "LN-2843", name: "Vikram Singh", amount: "₹30,000", status: "Rejected", date: "2 days ago", score: 520 },
];

const statusColors: Record<string, string> = {
  Approved: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  "Under Review": "bg-info/10 text-info border-info/20",
  Disbursed: "bg-accent/10 text-accent border-accent/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your lending operations</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title} className="shadow-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${s.up ? "text-success" : "text-destructive"}`}>
                  {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {s.change}
                </div>
              </div>
              <p className="mt-3 font-heading text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-heading text-lg">Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Borrower</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Score</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-3 font-medium text-foreground">{app.id}</td>
                      <td className="py-3 text-foreground">{app.name}</td>
                      <td className="py-3 font-medium text-foreground">{app.amount}</td>
                      <td className="py-3"><span className={`font-medium ${app.score >= 650 ? "text-success" : "text-destructive"}`}>{app.score}</span></td>
                      <td className="py-3"><Badge variant="outline" className={statusColors[app.status]}>{app.status}</Badge></td>
                      <td className="py-3 text-muted-foreground">{app.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Approval Rate", value: "67.5%", color: "bg-success" },
              { label: "Avg Loan Amount", value: "₹22,500", color: "bg-accent" },
              { label: "Avg Credit Score", value: "685", color: "bg-info" },
              { label: "Collection Rate", value: "94.2%", color: "bg-success" },
              { label: "Active Borrowers", value: "1,245", color: "bg-accent" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${item.color}`} />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
                <span className="font-heading text-sm font-semibold text-foreground">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
