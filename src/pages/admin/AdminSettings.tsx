import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Settings, Shield, Users, CreditCard, Bell } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Configure system settings and policies</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="loan">Loan Policy</TabsTrigger>
          <TabsTrigger value="users">Users & Roles</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-4">
          <Card className="shadow-card"><CardContent className="space-y-4 pt-6">
            <h3 className="font-heading font-semibold text-foreground">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Company Name</Label><Input defaultValue="PayDayQuick Financial Services" /></div>
              <div><Label>Registration Number</Label><Input defaultValue="NBFC-12345" /></div>
              <div><Label>Support Email</Label><Input defaultValue="support@paydayquick.com" /></div>
              <div><Label>Support Phone</Label><Input defaultValue="+91 1800 123 4567" /></div>
            </div>
            <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Save Changes</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="loan" className="mt-4 space-y-4">
          <Card className="shadow-card"><CardContent className="space-y-4 pt-6">
            <h3 className="font-heading font-semibold text-foreground">Loan Parameters</h3>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Min Loan Amount</Label><Input defaultValue="5000" /></div>
              <div><Label>Max Loan Amount</Label><Input defaultValue="100000" /></div>
              <div><Label>Interest Rate (% per week)</Label><Input defaultValue="2" /></div>
              <div><Label>Processing Fee (%)</Label><Input defaultValue="2" /></div>
              <div><Label>Late Payment Fee (%)</Label><Input defaultValue="5" /></div>
              <div><Label>Min Credit Score</Label><Input defaultValue="550" /></div>
            </div>
            <Separator />
            <h3 className="font-heading font-semibold text-foreground">Auto Approval Rules</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between"><Label>Enable Auto Approval</Label><Switch defaultChecked /></div>
              <div className="flex items-center justify-between"><Label>Min Score for Auto Approval</Label><Input className="w-24" defaultValue="650" /></div>
              <div className="flex items-center justify-between"><Label>Min Salary for Auto Approval</Label><Input className="w-24" defaultValue="15000" /></div>
              <div className="flex items-center justify-between"><Label>Fraud Check Required</Label><Switch defaultChecked /></div>
            </div>
            <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Save Policy</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="users" className="mt-4 space-y-4">
          <Card className="shadow-card"><CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Team Members</h3>
              <Button size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">Add User</Button>
            </div>
            {[
              { name: "Admin User", email: "admin@paydayquick.com", role: "Super Admin" },
              { name: "Ravi Sharma", email: "ravi@paydayquick.com", role: "BDE" },
              { name: "Priya Nair", email: "priya@paydayquick.com", role: "BDE" },
              { name: "Neha Kapoor", email: "neha@paydayquick.com", role: "HR Verifier" },
              { name: "Rahul Verma", email: "rahul@paydayquick.com", role: "HR Verifier" },
              { name: "Sunil Kumar", email: "sunil@paydayquick.com", role: "Collection Manager" },
            ].map(u => (
              <div key={u.email} className="flex items-center justify-between rounded-lg border p-3">
                <div><p className="text-sm font-medium text-foreground">{u.name}</p><p className="text-xs text-muted-foreground">{u.email}</p></div>
                <div className="flex items-center gap-2">
                  <Select defaultValue={u.role}>
                    <SelectTrigger className="w-40 h-8 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                      <SelectItem value="Operations Manager">Operations Manager</SelectItem>
                      <SelectItem value="Credit Manager">Credit Manager</SelectItem>
                      <SelectItem value="Collection Manager">Collection Manager</SelectItem>
                      <SelectItem value="BDE">BDE</SelectItem>
                      <SelectItem value="HR Verifier">HR Verifier</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="ghost" size="sm" className="text-destructive text-xs">Remove</Button>
                </div>
              </div>
            ))}
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4 space-y-4">
          <Card className="shadow-card"><CardContent className="space-y-4 pt-6">
            <h3 className="font-heading font-semibold text-foreground">Notification Settings</h3>
            {[
              "Application submitted — SMS to borrower",
              "Loan approved — SMS + WhatsApp to borrower",
              "Loan disbursed — SMS + Email to borrower",
              "Payment reminder — SMS 1 day before due date",
              "Payment overdue — SMS + WhatsApp daily",
              "KYC verified — Email to borrower",
            ].map(n => (
              <div key={n} className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm text-foreground">{n}</span>
                <Switch defaultChecked />
              </div>
            ))}
            <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Save Settings</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-4 space-y-4">
          <Card className="shadow-card"><CardContent className="space-y-4 pt-6">
            <h3 className="font-heading font-semibold text-foreground">API Integrations</h3>
            {[
              { name: "Signzy (KYC)", status: "Connected" },
              { name: "Experian (Credit Bureau)", status: "Connected" },
              { name: "Razorpay (Payment Gateway)", status: "Connected" },
              { name: "MSG91 (SMS Gateway)", status: "Connected" },
              { name: "Meta WhatsApp Business API", status: "Not Connected" },
              { name: "Cashfree (Penny Drop)", status: "Not Connected" },
            ].map(i => (
              <div key={i.name} className="flex items-center justify-between rounded-lg border p-3">
                <div><p className="text-sm font-medium text-foreground">{i.name}</p></div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${i.status === "Connected" ? "text-success" : "text-muted-foreground"}`}>{i.status}</span>
                  <Button variant="outline" size="sm" className="text-xs">{i.status === "Connected" ? "Configure" : "Connect"}</Button>
                </div>
              </div>
            ))}
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
