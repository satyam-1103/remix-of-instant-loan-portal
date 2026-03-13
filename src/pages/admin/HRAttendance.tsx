import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, Timer } from "lucide-react";
import { useState } from "react";

const attendanceData = [
  { id: "EMP001", name: "Ravi Sharma", dept: "Sales", date: "2026-03-08", checkIn: "09:02 AM", checkOut: "06:15 PM", hours: "9h 13m", status: "Present" },
  { id: "EMP002", name: "Priya Nair", dept: "Sales", date: "2026-03-08", checkIn: "09:30 AM", checkOut: "06:00 PM", hours: "8h 30m", status: "Present" },
  { id: "EMP003", name: "Neha Kapoor", dept: "Operations", date: "2026-03-08", checkIn: "10:15 AM", checkOut: "06:45 PM", hours: "8h 30m", status: "Late" },
  { id: "EMP004", name: "Rahul Verma", dept: "Operations", date: "2026-03-08", checkIn: "—", checkOut: "—", hours: "—", status: "Absent" },
  { id: "EMP005", name: "Sunil Kumar", dept: "Collections", date: "2026-03-08", checkIn: "08:55 AM", checkOut: "06:30 PM", hours: "9h 35m", status: "Present" },
  { id: "EMP006", name: "Anjali Mehta", dept: "Credit", date: "2026-03-08", checkIn: "—", checkOut: "—", hours: "—", status: "On Leave" },
  { id: "EMP008", name: "Deepa Joshi", dept: "HR", date: "2026-03-08", checkIn: "09:00 AM", checkOut: "—", hours: "—", status: "Present" },
];

const leaveRequests = [
  { id: "LR001", emp: "Anjali Mehta", empId: "EMP006", type: "Sick Leave", from: "2026-03-07", to: "2026-03-10", days: 4, reason: "Medical treatment", status: "Approved" },
  { id: "LR002", emp: "Rahul Verma", empId: "EMP004", type: "Casual Leave", from: "2026-03-08", to: "2026-03-08", days: 1, reason: "Personal work", status: "Pending" },
  { id: "LR003", emp: "Vikram Singh", empId: "EMP007", type: "Earned Leave", from: "2026-03-15", to: "2026-03-20", days: 6, reason: "Family vacation", status: "Pending" },
  { id: "LR004", emp: "Ravi Sharma", empId: "EMP001", type: "Casual Leave", from: "2026-02-25", to: "2026-02-25", days: 1, reason: "Doctor appointment", status: "Approved" },
  { id: "LR005", emp: "Priya Nair", empId: "EMP002", type: "Sick Leave", from: "2026-02-10", to: "2026-02-11", days: 2, reason: "Fever", status: "Approved" },
  { id: "LR006", emp: "Sunil Kumar", empId: "EMP005", type: "Casual Leave", from: "2026-01-20", to: "2026-01-20", days: 1, reason: "Family event", status: "Rejected" },
];

const statusColor: Record<string, string> = {
  Present: "bg-success/10 text-success border-success/20",
  Late: "bg-warning/10 text-warning border-warning/20",
  Absent: "bg-destructive/10 text-destructive border-destructive/20",
  "On Leave": "bg-primary/10 text-primary border-primary/20",
  Approved: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

const stats = [
  { label: "Present Today", value: "38", icon: CheckCircle2, color: "text-success" },
  { label: "Late Arrivals", value: "4", icon: Timer, color: "text-warning" },
  { label: "Absent", value: "3", icon: XCircle, color: "text-destructive" },
  { label: "On Leave", value: "2", icon: AlertCircle, color: "text-primary" },
];

export default function HRAttendance() {
  const [monthFilter, setMonthFilter] = useState("march");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Attendance & Leave</h1>
        <p className="text-sm text-muted-foreground">Track daily attendance and manage leave requests</p>
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

      <Tabs defaultValue="attendance">
        <TabsList>
          <TabsTrigger value="attendance"><Clock className="mr-1.5 h-4 w-4" />Daily Attendance</TabsTrigger>
          <TabsTrigger value="leave"><Calendar className="mr-1.5 h-4 w-4" />Leave Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="mt-4">
          <Card className="shadow-card"><CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Today — March 8, 2026</h3>
              <Select value={monthFilter} onValueChange={setMonthFilter}>
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
                <TableHead>Employee</TableHead><TableHead>Department</TableHead><TableHead>Check In</TableHead><TableHead>Check Out</TableHead><TableHead>Hours</TableHead><TableHead>Status</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {attendanceData.map(a => (
                  <TableRow key={a.id}>
                    <TableCell><p className="font-medium text-foreground">{a.name}</p><p className="text-xs text-muted-foreground">{a.id}</p></TableCell>
                    <TableCell className="text-sm">{a.dept}</TableCell>
                    <TableCell className="text-sm">{a.checkIn}</TableCell>
                    <TableCell className="text-sm">{a.checkOut}</TableCell>
                    <TableCell className="text-sm font-medium">{a.hours}</TableCell>
                    <TableCell><Badge variant="outline" className={statusColor[a.status]}>{a.status}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="leave" className="mt-4">
          <Card className="shadow-card"><CardContent className="pt-6">
            <h3 className="mb-4 font-heading font-semibold text-foreground">Leave Requests</h3>
            <Table>
              <TableHeader><TableRow>
                <TableHead>Employee</TableHead><TableHead>Leave Type</TableHead><TableHead>Duration</TableHead><TableHead>Days</TableHead><TableHead>Reason</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {leaveRequests.map(l => (
                  <TableRow key={l.id}>
                    <TableCell><p className="font-medium text-foreground">{l.emp}</p><p className="text-xs text-muted-foreground">{l.empId}</p></TableCell>
                    <TableCell className="text-sm">{l.type}</TableCell>
                    <TableCell className="text-sm">{l.from} → {l.to}</TableCell>
                    <TableCell className="text-sm font-medium">{l.days}</TableCell>
                    <TableCell className="max-w-[150px] truncate text-sm text-muted-foreground">{l.reason}</TableCell>
                    <TableCell><Badge variant="outline" className={statusColor[l.status]}>{l.status}</Badge></TableCell>
                    <TableCell>
                      {l.status === "Pending" ? (
                        <div className="flex gap-1">
                          <Button size="sm" className="h-7 bg-success/90 text-xs text-white hover:bg-success">Approve</Button>
                          <Button size="sm" variant="outline" className="h-7 text-xs text-destructive">Reject</Button>
                        </div>
                      ) : <span className="text-xs text-muted-foreground">—</span>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
