import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, Plus, Phone, Mail, UserCheck, Users, Building2, UserX } from "lucide-react";
import { useState } from "react";

const employees = [
  { id: "EMP001", name: "Ravi Sharma", email: "ravi@paydayquick.com", phone: "+91 98765 43210", department: "Sales", designation: "Business Development Executive", joiningDate: "2023-06-15", status: "Active", salary: "₹35,000" },
  { id: "EMP002", name: "Priya Nair", email: "priya@paydayquick.com", phone: "+91 87654 32109", department: "Sales", designation: "Senior BDE", joiningDate: "2022-11-01", status: "Active", salary: "₹45,000" },
  { id: "EMP003", name: "Neha Kapoor", email: "neha@paydayquick.com", phone: "+91 76543 21098", department: "Operations", designation: "HR Verifier", joiningDate: "2023-01-10", status: "Active", salary: "₹30,000" },
  { id: "EMP004", name: "Rahul Verma", email: "rahul@paydayquick.com", phone: "+91 65432 10987", department: "Operations", designation: "HR Verifier", joiningDate: "2023-03-20", status: "Active", salary: "₹30,000" },
  { id: "EMP005", name: "Sunil Kumar", email: "sunil@paydayquick.com", phone: "+91 54321 09876", department: "Collections", designation: "Collection Manager", joiningDate: "2022-08-05", status: "Active", salary: "₹50,000" },
  { id: "EMP006", name: "Anjali Mehta", email: "anjali@paydayquick.com", phone: "+91 43210 98765", department: "Credit", designation: "Credit Analyst", joiningDate: "2023-09-12", status: "On Leave", salary: "₹40,000" },
  { id: "EMP007", name: "Vikram Singh", email: "vikram@paydayquick.com", phone: "+91 32109 87654", department: "IT", designation: "Software Developer", joiningDate: "2024-01-08", status: "Active", salary: "₹60,000" },
  { id: "EMP008", name: "Deepa Joshi", email: "deepa@paydayquick.com", phone: "+91 21098 76543", department: "HR", designation: "HR Manager", joiningDate: "2022-04-15", status: "Active", salary: "₹55,000" },
  { id: "EMP009", name: "Amit Patel", email: "amit@paydayquick.com", phone: "+91 10987 65432", department: "Sales", designation: "BDE", joiningDate: "2024-02-20", status: "Resigned", salary: "₹32,000" },
];

const statusColor: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  "On Leave": "bg-warning/10 text-warning border-warning/20",
  Resigned: "bg-destructive/10 text-destructive border-destructive/20",
};

const stats = [
  { label: "Total Employees", value: "47", icon: Users, color: "text-primary" },
  { label: "Active", value: "42", icon: UserCheck, color: "text-success" },
  { label: "On Leave", value: "3", icon: Building2, color: "text-warning" },
  { label: "Resigned", value: "2", icon: UserX, color: "text-destructive" },
];

export default function HREmployees() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");

  const filtered = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === "all" || e.department === deptFilter;
    return matchSearch && matchDept;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Employee Directory</h1>
          <p className="text-sm text-muted-foreground">Manage all employees, roles, and departments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90"><Plus className="mr-2 h-4 w-4" />Add Employee</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Add New Employee</DialogTitle></DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div><Label>Full Name</Label><Input placeholder="Enter full name" /></div>
              <div><Label>Employee ID</Label><Input placeholder="EMP010" /></div>
              <div><Label>Email</Label><Input type="email" placeholder="email@paydayquick.com" /></div>
              <div><Label>Phone</Label><Input placeholder="+91 XXXXX XXXXX" /></div>
              <div><Label>Department</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {["Sales", "Operations", "Collections", "Credit", "IT", "HR"].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Designation</Label><Input placeholder="Enter designation" /></div>
              <div><Label>Salary</Label><Input placeholder="₹00,000" /></div>
              <div><Label>Joining Date</Label><Input type="date" /></div>
            </div>
            <Button className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">Add Employee</Button>
          </DialogContent>
        </Dialog>
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

      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search by name or ID..." value={search} onChange={e => setSearch(e.target.value)} /></div>
            <Select value={deptFilter} onValueChange={setDeptFilter}>
              <SelectTrigger className="w-40"><SelectValue placeholder="Department" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {["Sales", "Operations", "Collections", "Credit", "IT", "HR"].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader><TableRow>
              <TableHead>Employee</TableHead><TableHead>Department</TableHead><TableHead>Designation</TableHead><TableHead>Contact</TableHead><TableHead>Salary</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
            </TableRow></TableHeader>
            <TableBody>
              {filtered.map(e => (
                <TableRow key={e.id}>
                  <TableCell><div><p className="font-medium text-foreground">{e.name}</p><p className="text-xs text-muted-foreground">{e.id} · Joined {e.joiningDate}</p></div></TableCell>
                  <TableCell className="text-sm">{e.department}</TableCell>
                  <TableCell className="text-sm">{e.designation}</TableCell>
                  <TableCell><div className="flex flex-col gap-1"><span className="flex items-center gap-1 text-xs text-muted-foreground"><Phone className="h-3 w-3" />{e.phone}</span><span className="flex items-center gap-1 text-xs text-muted-foreground"><Mail className="h-3 w-3" />{e.email}</span></div></TableCell>
                  <TableCell className="text-sm font-medium">{e.salary}</TableCell>
                  <TableCell><Badge variant="outline" className={statusColor[e.status]}>{e.status}</Badge></TableCell>
                  <TableCell><Button variant="ghost" size="sm" className="text-xs">View</Button><Button variant="ghost" size="sm" className="text-xs text-destructive">Edit</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
