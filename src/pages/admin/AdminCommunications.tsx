import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Mail, Phone, Send, Clock } from "lucide-react";

const smsLogs = [
  { to: "Rajesh Kumar", phone: "9876543210", template: "Loan Approved", status: "Delivered", date: "08 Mar 2026 14:30" },
  { to: "Priya Sharma", phone: "8765432109", template: "Payment Reminder", status: "Delivered", date: "08 Mar 2026 10:00" },
  { to: "Vikram Singh", phone: "5432109876", template: "Application Rejected", status: "Failed", date: "07 Mar 2026 16:45" },
  { to: "Sneha Gupta", phone: "6543210987", template: "Payment Due Tomorrow", status: "Pending", date: "08 Mar 2026 18:00" },
];

const emailLogs = [
  { to: "rajesh@email.com", subject: "Loan Agreement - LN-2847", status: "Sent", date: "08 Mar 2026" },
  { to: "priya@email.com", subject: "Welcome to PayDayQuick", status: "Sent", date: "08 Mar 2026" },
  { to: "amit@email.com", subject: "KYC Verification Pending", status: "Sent", date: "07 Mar 2026" },
];

const whatsappLogs = [
  { to: "Rajesh Kumar", phone: "9876543210", message: "Loan agreement sent", status: "Read", date: "08 Mar 2026" },
  { to: "Priya Sharma", phone: "8765432109", message: "Payment link shared", status: "Delivered", date: "08 Mar 2026" },
];

const logStatusColors: Record<string, string> = {
  Delivered: "bg-success/10 text-success border-success/20",
  Sent: "bg-success/10 text-success border-success/20",
  Read: "bg-accent/10 text-accent border-accent/20",
  Failed: "bg-destructive/10 text-destructive border-destructive/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
};

export default function AdminCommunications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Communications</h1>
        <p className="text-sm text-muted-foreground">Manage SMS, Email, and WhatsApp notifications</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10"><MessageSquare className="h-5 w-5 text-info" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">1,245</p>
          <p className="text-xs text-muted-foreground">SMS Sent Today</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"><Mail className="h-5 w-5 text-accent" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">342</p>
          <p className="text-xs text-muted-foreground">Emails Sent Today</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10"><Phone className="h-5 w-5 text-success" /></div>
          <p className="mt-3 font-heading text-2xl font-bold text-foreground">567</p>
          <p className="text-xs text-muted-foreground">WhatsApp Sent Today</p>
        </CardContent></Card>
      </div>

      <Tabs defaultValue="sms">
        <TabsList>
          <TabsTrigger value="sms">SMS</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>

        <TabsContent value="sms">
          <Card className="shadow-card mt-4">
            <CardContent className="pt-6">
              <table className="w-full text-sm">
                <thead><tr className="border-b text-left text-muted-foreground"><th className="pb-3 font-medium">To</th><th className="pb-3 font-medium">Phone</th><th className="pb-3 font-medium">Template</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Date</th></tr></thead>
                <tbody>{smsLogs.map((s, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 font-medium text-foreground">{s.to}</td>
                    <td className="py-3 text-muted-foreground">{s.phone}</td>
                    <td className="py-3 text-muted-foreground">{s.template}</td>
                    <td className="py-3"><Badge variant="outline" className={logStatusColors[s.status]}>{s.status}</Badge></td>
                    <td className="py-3 text-muted-foreground text-xs">{s.date}</td>
                  </tr>
                ))}</tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="shadow-card mt-4">
            <CardContent className="pt-6">
              <table className="w-full text-sm">
                <thead><tr className="border-b text-left text-muted-foreground"><th className="pb-3 font-medium">To</th><th className="pb-3 font-medium">Subject</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Date</th></tr></thead>
                <tbody>{emailLogs.map((e, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 text-foreground">{e.to}</td>
                    <td className="py-3 text-muted-foreground">{e.subject}</td>
                    <td className="py-3"><Badge variant="outline" className={logStatusColors[e.status]}>{e.status}</Badge></td>
                    <td className="py-3 text-muted-foreground">{e.date}</td>
                  </tr>
                ))}</tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp">
          <Card className="shadow-card mt-4">
            <CardContent className="pt-6">
              <table className="w-full text-sm">
                <thead><tr className="border-b text-left text-muted-foreground"><th className="pb-3 font-medium">To</th><th className="pb-3 font-medium">Phone</th><th className="pb-3 font-medium">Message</th><th className="pb-3 font-medium">Status</th><th className="pb-3 font-medium">Date</th></tr></thead>
                <tbody>{whatsappLogs.map((w, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 font-medium text-foreground">{w.to}</td>
                    <td className="py-3 text-muted-foreground">{w.phone}</td>
                    <td className="py-3 text-muted-foreground">{w.message}</td>
                    <td className="py-3"><Badge variant="outline" className={logStatusColors[w.status]}>{w.status}</Badge></td>
                    <td className="py-3 text-muted-foreground">{w.date}</td>
                  </tr>
                ))}</tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compose">
          <Card className="shadow-card mt-4">
            <CardContent className="space-y-4 pt-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Channel</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select channel" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Recipients</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select recipients" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Borrowers</SelectItem>
                    <SelectItem value="overdue">Overdue Borrowers</SelectItem>
                    <SelectItem value="active">Active Loan Holders</SelectItem>
                    <SelectItem value="custom">Custom List</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Template</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select template" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reminder">Payment Reminder</SelectItem>
                    <SelectItem value="approved">Loan Approved</SelectItem>
                    <SelectItem value="disbursed">Loan Disbursed</SelectItem>
                    <SelectItem value="overdue">Overdue Notice</SelectItem>
                    <SelectItem value="custom">Custom Message</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea placeholder="Type your message..." rows={4} />
              </div>
              <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90"><Send className="mr-2 h-4 w-4" />Send Message</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
