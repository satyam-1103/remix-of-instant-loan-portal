import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus, Phone, Mail, MapPin, Calendar, User, Briefcase, IndianRupee, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const leads = [
  { id: 1, name: "Arun Mehta", phone: "9876543210", email: "arun@email.com", source: "Website", status: "New", date: "08 Mar 2026", amount: "₹30,000", city: "Mumbai", age: 28, gender: "Male", occupation: "Salaried", company: "TCS", salary: "₹45,000", assignedTo: "Ravi (BDE)", notes: "Interested in salary advance", followUp: "09 Mar 2026" },
  { id: 2, name: "Kavita Reddy", phone: "8765432109", email: "kavita@email.com", source: "API", status: "Contacted", date: "08 Mar 2026", amount: "₹20,000", city: "Hyderabad", age: 32, gender: "Female", occupation: "Salaried", company: "Infosys", salary: "₹38,000", assignedTo: "Priya (BDE)", notes: "Called once, will call back", followUp: "10 Mar 2026" },
  { id: 3, name: "Suresh Nair", phone: "7654321098", email: "suresh@email.com", source: "Partner", status: "Qualified", date: "07 Mar 2026", amount: "₹50,000", city: "Bangalore", age: 35, gender: "Male", occupation: "Self Employed", company: "Own Business", salary: "₹60,000", assignedTo: "Amit (BDE)", notes: "Good profile, high salary", followUp: "08 Mar 2026" },
  { id: 4, name: "Deepa Joshi", phone: "6543210987", email: "deepa@email.com", source: "Website", status: "New", date: "07 Mar 2026", amount: "₹15,000", city: "Delhi", age: 25, gender: "Female", occupation: "Salaried", company: "Wipro", salary: "₹28,000", assignedTo: "Unassigned", notes: "", followUp: "09 Mar 2026" },
  { id: 5, name: "Manoj Tiwari", phone: "5432109876", email: "manoj@email.com", source: "Manual", status: "Converted", date: "06 Mar 2026", amount: "₹40,000", city: "Pune", age: 30, gender: "Male", occupation: "Salaried", company: "Accenture", salary: "₹52,000", assignedTo: "Ravi (BDE)", notes: "Converted to loan application LN-2848", followUp: "-" },
  { id: 6, name: "Anita Desai", phone: "9988776655", email: "anita@email.com", source: "Website", status: "Follow Up", date: "06 Mar 2026", amount: "₹25,000", city: "Chennai", age: 27, gender: "Female", occupation: "Salaried", company: "HCL", salary: "₹35,000", assignedTo: "Priya (BDE)", notes: "Asked for lower interest rate", followUp: "08 Mar 2026" },
  { id: 7, name: "Rahul Verma", phone: "8877665544", email: "rahul@email.com", source: "Partner", status: "Not Interested", date: "05 Mar 2026", amount: "₹10,000", city: "Jaipur", age: 40, gender: "Male", occupation: "Business", company: "Verma Traders", salary: "₹70,000", assignedTo: "Amit (BDE)", notes: "Got loan from another provider", followUp: "-" },
];

const statusColors: Record<string, string> = {
  New: "bg-info/10 text-info border-info/20",
  Contacted: "bg-warning/10 text-warning border-warning/20",
  Qualified: "bg-accent/10 text-accent border-accent/20",
  Converted: "bg-success/10 text-success border-success/20",
  "Follow Up": "bg-purple-100 text-purple-700 border-purple-200",
  "Not Interested": "bg-muted text-muted-foreground border-border",
};

export default function AdminLeads() {
  const [selectedLead, setSelectedLead] = useState<typeof leads[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Lead Management</h1>
          <p className="text-sm text-muted-foreground">{leads.length} total leads • {leads.filter(l => l.status === "New").length} new today</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import CSV</Button>
          <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" /> Add Lead
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: "Total", count: leads.length, color: "bg-foreground/10 text-foreground" },
          { label: "New", count: leads.filter(l => l.status === "New").length, color: "bg-info/10 text-info" },
          { label: "Contacted", count: leads.filter(l => l.status === "Contacted").length, color: "bg-warning/10 text-warning" },
          { label: "Qualified", count: leads.filter(l => l.status === "Qualified").length, color: "bg-accent/10 text-accent" },
          { label: "Converted", count: leads.filter(l => l.status === "Converted").length, color: "bg-success/10 text-success" },
          { label: "Lost", count: leads.filter(l => l.status === "Not Interested").length, color: "bg-muted text-muted-foreground" },
        ].map((s) => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="p-3 text-center">
              <p className="font-heading text-2xl font-bold text-foreground">{s.count}</p>
              <Badge variant="outline" className={`mt-1 text-xs ${s.color}`}>{s.label}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by name, phone, email..." className="w-72 pl-9" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select>
                <SelectTrigger className="w-32"><SelectValue placeholder="Source" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="partner">Partner</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="follow-up">Follow Up</SelectItem>
                  <SelectItem value="not-interested">Not Interested</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-36"><SelectValue placeholder="Assigned To" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Agents</SelectItem>
                  <SelectItem value="ravi">Ravi (BDE)</SelectItem>
                  <SelectItem value="priya">Priya (BDE)</SelectItem>
                  <SelectItem value="amit">Amit (BDE)</SelectItem>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-28"><SelectValue placeholder="City" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Contact</th>
                  <th className="pb-3 font-medium">City</th>
                  <th className="pb-3 font-medium">Source</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Salary</th>
                  <th className="pb-3 font-medium">Assigned To</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Follow Up</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3">
                      <div>
                        <p className="font-medium text-foreground">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.age}y • {lead.gender}</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground"><Phone className="h-3 w-3" /> {lead.phone}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground"><Mail className="h-3 w-3" /> {lead.email}</div>
                      </div>
                    </td>
                    <td className="py-3 text-muted-foreground">{lead.city}</td>
                    <td className="py-3"><Badge variant="secondary" className="text-xs">{lead.source}</Badge></td>
                    <td className="py-3 font-medium text-foreground">{lead.amount}</td>
                    <td className="py-3 text-muted-foreground">{lead.salary}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium ${lead.assignedTo === "Unassigned" ? "text-destructive" : "text-foreground"}`}>
                        {lead.assignedTo}
                      </span>
                    </td>
                    <td className="py-3"><Badge variant="outline" className={statusColors[lead.status] || ""}>{lead.status}</Badge></td>
                    <td className="py-3 text-xs text-muted-foreground">{lead.followUp}</td>
                    <td className="py-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedLead(lead)}>View</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="font-heading">Lead Details</DialogTitle>
                          </DialogHeader>
                          {selectedLead && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                  <User className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                  <p className="font-heading text-lg font-bold text-foreground">{selectedLead.name}</p>
                                  <p className="text-sm text-muted-foreground">{selectedLead.age}y • {selectedLead.gender} • {selectedLead.city}</p>
                                </div>
                                <Badge variant="outline" className={`ml-auto ${statusColors[selectedLead.status] || ""}`}>{selectedLead.status}</Badge>
                              </div>
                              <Separator />
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.phone}</span></div>
                                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.email}</span></div>
                                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.company}</span></div>
                                <div className="flex items-center gap-2"><IndianRupee className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.salary}/month</span></div>
                                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.city}</span></div>
                                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><span>{selectedLead.date}</span></div>
                              </div>
                              <div className="rounded-lg bg-muted/50 p-3">
                                <p className="text-xs font-medium text-muted-foreground">Requested Amount</p>
                                <p className="font-heading text-xl font-bold text-foreground">{selectedLead.amount}</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-xs font-medium text-muted-foreground">Notes</p>
                                <p className="text-sm text-foreground">{selectedLead.notes || "No notes yet"}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <p className="text-xs font-medium text-muted-foreground">Assigned To</p>
                                  <p className="text-sm font-medium text-foreground">{selectedLead.assignedTo}</p>
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-muted-foreground">Follow Up</p>
                                  <p className="text-sm font-medium text-foreground">{selectedLead.followUp}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">Convert to Application</Button>
                                <Button size="sm" variant="outline">Add Note</Button>
                                <Button size="sm" variant="outline">Reassign</Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </td>
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
