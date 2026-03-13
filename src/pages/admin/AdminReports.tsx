import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Download, FileText, TrendingUp, IndianRupee, Users, AlertTriangle } from "lucide-react";

const reports = [
  { title: "Loan Disbursement Report", desc: "All loans disbursed with amounts, dates, and borrower info", icon: IndianRupee, color: "bg-accent/10 text-accent" },
  { title: "Repayment Report", desc: "Track all repayments, on-time vs late payments", icon: TrendingUp, color: "bg-success/10 text-success" },
  { title: "Agent Performance", desc: "BDE and agent-wise lead conversion and collection metrics", icon: Users, color: "bg-info/10 text-info" },
  { title: "Collection Report", desc: "Overdue accounts, recovery rates, and agent performance", icon: AlertTriangle, color: "bg-warning/10 text-warning" },
  { title: "Profit & Loss Report", desc: "Revenue from interest, fees minus defaults and costs", icon: BarChart3, color: "bg-accent/10 text-accent" },
  { title: "NPA Report", desc: "Non-performing assets, aging analysis, provision requirements", icon: AlertTriangle, color: "bg-destructive/10 text-destructive" },
];

const recentExports = [
  { name: "Disbursement_Mar2026.xlsx", date: "08 Mar 2026", size: "245 KB", type: "Excel" },
  { name: "Collection_Report_Feb2026.pdf", date: "01 Mar 2026", size: "1.2 MB", type: "PDF" },
  { name: "Agent_Performance_Q1.xlsx", date: "28 Feb 2026", size: "340 KB", type: "Excel" },
];

export default function AdminReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-sm text-muted-foreground">Generate and export business reports</p>
        </div>
        <Select>
          <SelectTrigger className="w-40"><SelectValue placeholder="Time Period" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map(r => (
          <Card key={r.title} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardContent className="p-5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${r.color}`}><r.icon className="h-5 w-5" /></div>
              <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">{r.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline" className="text-xs"><Download className="mr-1 h-3 w-3" />Excel</Button>
                <Button size="sm" variant="outline" className="text-xs"><Download className="mr-1 h-3 w-3" />PDF</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader><CardTitle className="font-heading text-lg">Recent Exports</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentExports.map(e => (
              <div key={e.name} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.name}</p>
                    <p className="text-xs text-muted-foreground">{e.date} • {e.size}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
