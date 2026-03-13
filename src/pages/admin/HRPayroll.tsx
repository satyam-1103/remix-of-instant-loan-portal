import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IndianRupee, Download, TrendingUp, Users, Wallet, FileText } from "lucide-react";
import { useState } from "react";

const payrollData = [
  { id: "EMP001", name: "Ravi Sharma", dept: "Sales", basic: 25000, hra: 5000, allowances: 3000, pf: 2000, tax: 1000, deductions: 500, net: 29500, status: "Paid" },
  { id: "EMP002", name: "Priya Nair", dept: "Sales", basic: 32000, hra: 7000, allowances: 4000, pf: 2560, tax: 1500, deductions: 0, net: 38940, status: "Paid" },
  { id: "EMP003", name: "Neha Kapoor", dept: "Operations", basic: 20000, hra: 5000, allowances: 3000, pf: 1600, tax: 800, deductions: 400, net: 25200, status: "Paid" },
  { id: "EMP004", name: "Rahul Verma", dept: "Operations", basic: 20000, hra: 5000, allowances: 3000, pf: 1600, tax: 800, deductions: 0, net: 25600, status: "Pending" },
  { id: "EMP005", name: "Sunil Kumar", dept: "Collections", basic: 35000, hra: 8000, allowances: 5000, pf: 2800, tax: 2200, deductions: 0, net: 43000, status: "Paid" },
  { id: "EMP006", name: "Anjali Mehta", dept: "Credit", basic: 28000, hra: 6000, allowances: 4000, pf: 2240, tax: 1200, deductions: 560, net: 34000, status: "Pending" },
  { id: "EMP007", name: "Vikram Singh", dept: "IT", basic: 42000, hra: 10000, allowances: 6000, pf: 3360, tax: 3500, deductions: 0, net: 51140, status: "Paid" },
  { id: "EMP008", name: "Deepa Joshi", dept: "HR", basic: 38000, hra: 9000, allowances: 5500, pf: 3040, tax: 2800, deductions: 0, net: 46660, status: "Paid" },
];

const stats = [
  { label: "Total Payroll", value: "₹18.5L", icon: IndianRupee, color: "text-primary" },
  { label: "Employees Paid", value: "42/47", icon: Users, color: "text-success" },
  { label: "Avg Salary", value: "₹39,362", icon: TrendingUp, color: "text-accent-foreground" },
  { label: "Pending", value: "5", icon: Wallet, color: "text-warning" },
];

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function HRPayroll() {
  const [month, setMonth] = useState("march");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Payroll</h1>
          <p className="text-sm text-muted-foreground">Salary processing, deductions, and payslip management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export Payroll</Button>
          <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90"><FileText className="mr-2 h-4 w-4" />Generate Payslips</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map(s => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted"><s.icon className={`h-5 w-5 ${s.color}`} /></div>
              <div><p className="text-2xl font-bold text-foreground">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card"><CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading font-semibold text-foreground">Salary Breakdown</h3>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="march">March 2026</SelectItem>
              <SelectItem value="february">February 2026</SelectItem>
              <SelectItem value="january">January 2026</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader><TableRow>
            <TableHead>Employee</TableHead><TableHead>Basic</TableHead><TableHead>HRA</TableHead><TableHead>Allowances</TableHead><TableHead>PF</TableHead><TableHead>Tax</TableHead><TableHead>Other Ded.</TableHead><TableHead>Net Pay</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {payrollData.map(p => (
              <TableRow key={p.id}>
                <TableCell><p className="font-medium text-foreground">{p.name}</p><p className="text-xs text-muted-foreground">{p.id} · {p.dept}</p></TableCell>
                <TableCell className="text-sm">{fmt(p.basic)}</TableCell>
                <TableCell className="text-sm">{fmt(p.hra)}</TableCell>
                <TableCell className="text-sm">{fmt(p.allowances)}</TableCell>
                <TableCell className="text-sm text-destructive">-{fmt(p.pf)}</TableCell>
                <TableCell className="text-sm text-destructive">-{fmt(p.tax)}</TableCell>
                <TableCell className="text-sm text-destructive">{p.deductions > 0 ? `-${fmt(p.deductions)}` : "—"}</TableCell>
                <TableCell className="text-sm font-bold text-foreground">{fmt(p.net)}</TableCell>
                <TableCell><Badge variant="outline" className={p.status === "Paid" ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20"}>{p.status}</Badge></TableCell>
                <TableCell><Button variant="ghost" size="sm" className="text-xs">Payslip</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
