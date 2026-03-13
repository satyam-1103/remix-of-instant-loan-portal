import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, ShieldCheck, Clock, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const verificationTasks = [
  { id: "VR001", borrower: "Arun Mehta", loanId: "LN-2026-0891", employer: "Tata Consultancy Services", designation: "Software Engineer", salary: "₹65,000", empId: "TCS-45821", assignedTo: "Neha Kapoor", requestDate: "2026-03-07", status: "Pending", priority: "High" },
  { id: "VR002", borrower: "Kavita Reddy", loanId: "LN-2026-0887", employer: "Infosys Ltd", designation: "Senior Analyst", salary: "₹55,000", empId: "INF-32104", assignedTo: "Rahul Verma", requestDate: "2026-03-06", status: "In Progress", priority: "Medium" },
  { id: "VR003", borrower: "Mohammed Irfan", loanId: "LN-2026-0879", employer: "Flipkart", designation: "Warehouse Manager", salary: "₹42,000", empId: "FK-98213", assignedTo: "Neha Kapoor", requestDate: "2026-03-05", status: "Verified", priority: "Low" },
  { id: "VR004", borrower: "Pooja Gupta", loanId: "LN-2026-0875", employer: "HDFC Bank", designation: "Relationship Manager", salary: "₹48,000", empId: "HDFC-77812", assignedTo: "Rahul Verma", requestDate: "2026-03-05", status: "Verified", priority: "Medium" },
  { id: "VR005", borrower: "Sanjay Patil", loanId: "LN-2026-0870", employer: "Local Shop (Self Employed)", designation: "Owner", salary: "₹30,000", empId: "—", assignedTo: "Neha Kapoor", requestDate: "2026-03-04", status: "Flagged", priority: "High" },
  { id: "VR006", borrower: "Lakshmi Iyer", loanId: "LN-2026-0865", employer: "Wipro Technologies", designation: "Test Lead", salary: "₹58,000", empId: "WIP-61920", assignedTo: "Rahul Verma", requestDate: "2026-03-03", status: "Rejected", priority: "High" },
];

const statusColor: Record<string, string> = {
  Pending: "bg-warning/10 text-warning border-warning/20",
  "In Progress": "bg-primary/10 text-primary border-primary/20",
  Verified: "bg-success/10 text-success border-success/20",
  Flagged: "bg-orange-100 text-orange-600 border-orange-200",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

const priorityColor: Record<string, string> = {
  High: "bg-destructive/10 text-destructive border-destructive/20",
  Medium: "bg-warning/10 text-warning border-warning/20",
  Low: "bg-muted text-muted-foreground",
};

const stats = [
  { label: "Total Tasks", value: "24", icon: ShieldCheck, color: "text-primary" },
  { label: "Pending", value: "8", icon: Clock, color: "text-warning" },
  { label: "Verified", value: "12", icon: CheckCircle2, color: "text-success" },
  { label: "Flagged / Rejected", value: "4", icon: AlertTriangle, color: "text-destructive" },
];

export default function HRVerification() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = verificationTasks.filter(t => {
    const matchSearch = t.borrower.toLowerCase().includes(search.toLowerCase()) || t.loanId.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">HR Verification Tasks</h1>
        <p className="text-sm text-muted-foreground">Verify borrower employment details for loan applications</p>
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
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search borrower or loan ID..." value={search} onChange={e => setSearch(e.target.value)} /></div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {["Pending", "In Progress", "Verified", "Flagged", "Rejected"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader><TableRow>
            <TableHead>Borrower</TableHead><TableHead>Employer</TableHead><TableHead>Designation</TableHead><TableHead>Salary</TableHead><TableHead>Assigned To</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {filtered.map(t => (
              <TableRow key={t.id}>
                <TableCell><p className="font-medium text-foreground">{t.borrower}</p><p className="text-xs text-muted-foreground">{t.loanId} · {t.requestDate}</p></TableCell>
                <TableCell><p className="text-sm">{t.employer}</p><p className="text-xs text-muted-foreground">ID: {t.empId}</p></TableCell>
                <TableCell className="text-sm">{t.designation}</TableCell>
                <TableCell className="text-sm font-medium">{t.salary}</TableCell>
                <TableCell className="text-sm">{t.assignedTo}</TableCell>
                <TableCell><Badge variant="outline" className={priorityColor[t.priority]}>{t.priority}</Badge></TableCell>
                <TableCell><Badge variant="outline" className={statusColor[t.status]}>{t.status}</Badge></TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild><Button variant="ghost" size="sm" className="text-xs">Review</Button></DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader><DialogTitle>Employment Verification — {t.borrower}</DialogTitle></DialogHeader>
                      <div className="space-y-3 py-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div><Label className="text-xs text-muted-foreground">Employer</Label><p className="text-sm font-medium">{t.employer}</p></div>
                          <div><Label className="text-xs text-muted-foreground">Employee ID</Label><p className="text-sm font-medium">{t.empId}</p></div>
                          <div><Label className="text-xs text-muted-foreground">Designation</Label><p className="text-sm font-medium">{t.designation}</p></div>
                          <div><Label className="text-xs text-muted-foreground">Salary</Label><p className="text-sm font-medium">{t.salary}</p></div>
                          <div><Label className="text-xs text-muted-foreground">Loan ID</Label><p className="text-sm font-medium">{t.loanId}</p></div>
                          <div><Label className="text-xs text-muted-foreground">Current Status</Label><Badge variant="outline" className={statusColor[t.status]}>{t.status}</Badge></div>
                        </div>
                        <div>
                          <Label>Verification Notes</Label>
                          <Textarea placeholder="Add verification notes, findings, or discrepancies..." />
                        </div>
                        <div>
                          <Label>Update Status</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Verified">✅ Verified</SelectItem>
                              <SelectItem value="Flagged">⚠️ Flagged for Review</SelectItem>
                              <SelectItem value="Rejected">❌ Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">Submit Verification</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
