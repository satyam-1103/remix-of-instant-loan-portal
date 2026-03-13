import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Eye, CheckCircle, XCircle, User, FileText, CreditCard, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const loans = [
  { id: "LN-2847", name: "Rajesh Kumar", phone: "9876543210", amount: "₹25,000", tenure: "14 days", score: 720, risk: "Low", status: "Pending Approval", docs: "Verified", bde: "Ravi Sharma", hr: "Neha Kapoor", appliedDate: "08 Mar 2026", purpose: "Medical Emergency", salary: "₹45,000", company: "TCS", pan: "ABCDE1234F", aadhaar: "XXXX-XXXX-5678", bankVerified: true },
  { id: "LN-2846", name: "Priya Sharma", phone: "8765432109", amount: "₹15,000", tenure: "7 days", score: 680, risk: "Medium", status: "Under Review", docs: "Pending", bde: "Priya Nair", hr: "Unassigned", appliedDate: "08 Mar 2026", purpose: "Utility Bills", salary: "₹32,000", company: "Infosys", pan: "FGHIJ5678K", aadhaar: "XXXX-XXXX-1234", bankVerified: true },
  { id: "LN-2845", name: "Amit Patel", phone: "7654321098", amount: "₹50,000", tenure: "30 days", score: 710, risk: "Low", status: "Pending Approval", docs: "Verified", bde: "Amit Gupta", hr: "Rahul Verma", appliedDate: "07 Mar 2026", purpose: "Rent Payment", salary: "₹58,000", company: "Own Business", pan: "KLMNO9012P", aadhaar: "XXXX-XXXX-9012", bankVerified: true },
  { id: "LN-2844", name: "Sneha Gupta", phone: "6543210987", amount: "₹10,000", tenure: "7 days", score: 750, risk: "Low", status: "Approved", docs: "Verified", bde: "Ravi Sharma", hr: "Neha Kapoor", appliedDate: "07 Mar 2026", purpose: "Personal Expense", salary: "₹40,000", company: "Wipro", pan: "QRSTU3456V", aadhaar: "XXXX-XXXX-3456", bankVerified: true },
  { id: "LN-2843", name: "Vikram Singh", phone: "5432109876", amount: "₹30,000", tenure: "14 days", score: 520, risk: "High", status: "Rejected", docs: "Flagged", bde: "Priya Nair", hr: "Unassigned", appliedDate: "06 Mar 2026", purpose: "Business Expense", salary: "₹22,000", company: "Freelancer", pan: "WXYZA7890B", aadhaar: "XXXX-XXXX-7890", bankVerified: false },
  { id: "LN-2842", name: "Meera Iyer", phone: "4321098765", amount: "₹35,000", tenure: "21 days", score: 690, risk: "Medium", status: "Disbursed", docs: "Verified", bde: "Amit Gupta", hr: "Rahul Verma", appliedDate: "05 Mar 2026", purpose: "Medical Emergency", salary: "₹48,000", company: "HCL", pan: "CDEFG1234H", aadhaar: "XXXX-XXXX-4321", bankVerified: true },
];

const riskColors: Record<string, string> = { Low: "text-success", Medium: "text-warning", High: "text-destructive" };
const statusColors: Record<string, string> = {
  "Pending Approval": "bg-warning/10 text-warning border-warning/20",
  "Under Review": "bg-info/10 text-info border-info/20",
  Approved: "bg-success/10 text-success border-success/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
  Disbursed: "bg-accent/10 text-accent border-accent/20",
};

const bdeList = ["Ravi Sharma", "Priya Nair", "Amit Gupta", "Sanjay Reddy"];
const hrList = ["Neha Kapoor", "Rahul Verma", "Sunita Das"];

export default function AdminLoans() {
  const [selectedLoan, setSelectedLoan] = useState<typeof loans[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Loan Applications</h1>
          <p className="text-sm text-muted-foreground">{loans.length} applications • {loans.filter(l => l.status === "Pending Approval").length} pending approval</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { label: "Pending", count: loans.filter(l => l.status === "Pending Approval").length, color: "bg-warning/10 text-warning" },
          { label: "Under Review", count: loans.filter(l => l.status === "Under Review").length, color: "bg-info/10 text-info" },
          { label: "Approved", count: loans.filter(l => l.status === "Approved").length, color: "bg-success/10 text-success" },
          { label: "Disbursed", count: loans.filter(l => l.status === "Disbursed").length, color: "bg-accent/10 text-accent" },
          { label: "Rejected", count: loans.filter(l => l.status === "Rejected").length, color: "bg-destructive/10 text-destructive" },
        ].map(s => (
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
              <Input placeholder="Search by ID, name, phone..." className="w-72 pl-9" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select>
                <SelectTrigger className="w-32"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="disbursed">Disbursed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-36"><SelectValue placeholder="BDE" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All BDEs</SelectItem>
                  {bdeList.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-36"><SelectValue placeholder="HR Verifier" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All HR</SelectItem>
                  {hrList.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-28"><SelectValue placeholder="Risk" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
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
                  <th className="pb-3 font-medium">Loan ID</th>
                  <th className="pb-3 font-medium">Borrower</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Tenure</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Risk</th>
                  <th className="pb-3 font-medium">BDE</th>
                  <th className="pb-3 font-medium">HR Verifier</th>
                  <th className="pb-3 font-medium">Docs</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 font-medium text-foreground">{loan.id}</td>
                    <td className="py-3">
                      <div>
                        <p className="font-medium text-foreground">{loan.name}</p>
                        <p className="text-xs text-muted-foreground">{loan.phone}</p>
                      </div>
                    </td>
                    <td className="py-3 font-medium text-foreground">{loan.amount}</td>
                    <td className="py-3 text-muted-foreground">{loan.tenure}</td>
                    <td className="py-3"><span className={`font-medium ${loan.score >= 650 ? "text-success" : "text-destructive"}`}>{loan.score}</span></td>
                    <td className="py-3"><span className={`font-medium ${riskColors[loan.risk]}`}>{loan.risk}</span></td>
                    <td className="py-3">
                      <Select defaultValue={loan.bde}>
                        <SelectTrigger className="h-7 w-28 text-xs"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {bdeList.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-3">
                      <Select defaultValue={loan.hr}>
                        <SelectTrigger className="h-7 w-28 text-xs"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {hrList.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                          <SelectItem value="Unassigned">Unassigned</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-3"><Badge variant="secondary" className="text-xs">{loan.docs}</Badge></td>
                    <td className="py-3"><Badge variant="outline" className={statusColors[loan.status]}>{loan.status}</Badge></td>
                    <td className="py-3">
                      <div className="flex gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedLoan(loan)}><Eye className="h-4 w-4" /></Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="font-heading">Loan Application — {selectedLoan?.id}</DialogTitle>
                            </DialogHeader>
                            {selectedLoan && (
                              <Tabs defaultValue="details">
                                <TabsList>
                                  <TabsTrigger value="details">Details</TabsTrigger>
                                  <TabsTrigger value="documents">Documents</TabsTrigger>
                                  <TabsTrigger value="credit">Credit</TabsTrigger>
                                  <TabsTrigger value="assignment">Assignment</TabsTrigger>
                                </TabsList>
                                <TabsContent value="details" className="mt-4 space-y-4">
                                  <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                      <User className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                      <p className="font-heading text-lg font-bold text-foreground">{selectedLoan.name}</p>
                                      <p className="text-sm text-muted-foreground">{selectedLoan.phone} • {selectedLoan.company}</p>
                                    </div>
                                    <Badge variant="outline" className={`ml-auto ${statusColors[selectedLoan.status]}`}>{selectedLoan.status}</Badge>
                                  </div>
                                  <div className="grid grid-cols-3 gap-3">
                                    <div className="rounded-lg bg-muted/50 p-3">
                                      <p className="text-xs text-muted-foreground">Loan Amount</p>
                                      <p className="font-heading text-lg font-bold text-foreground">{selectedLoan.amount}</p>
                                    </div>
                                    <div className="rounded-lg bg-muted/50 p-3">
                                      <p className="text-xs text-muted-foreground">Tenure</p>
                                      <p className="font-heading text-lg font-bold text-foreground">{selectedLoan.tenure}</p>
                                    </div>
                                    <div className="rounded-lg bg-muted/50 p-3">
                                      <p className="text-xs text-muted-foreground">Monthly Salary</p>
                                      <p className="font-heading text-lg font-bold text-foreground">{selectedLoan.salary}</p>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div><span className="text-muted-foreground">Purpose:</span> <span className="font-medium text-foreground">{selectedLoan.purpose}</span></div>
                                    <div><span className="text-muted-foreground">Applied:</span> <span className="font-medium text-foreground">{selectedLoan.appliedDate}</span></div>
                                    <div><span className="text-muted-foreground">PAN:</span> <span className="font-medium text-foreground">{selectedLoan.pan}</span></div>
                                    <div><span className="text-muted-foreground">Aadhaar:</span> <span className="font-medium text-foreground">{selectedLoan.aadhaar}</span></div>
                                  </div>
                                </TabsContent>
                                <TabsContent value="documents" className="mt-4 space-y-3">
                                  {["PAN Card", "Aadhaar Card", "Salary Slip", "Bank Statement", "Selfie"].map(doc => (
                                    <div key={doc} className="flex items-center justify-between rounded-lg border p-3">
                                      <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-sm font-medium text-foreground">{doc}</span>
                                      </div>
                                      <div className="flex gap-2">
                                        <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">Uploaded</Badge>
                                        <Button variant="ghost" size="sm">View</Button>
                                      </div>
                                    </div>
                                  ))}
                                </TabsContent>
                                <TabsContent value="credit" className="mt-4 space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-lg border p-4 text-center">
                                      <p className="text-sm text-muted-foreground">Credit Score</p>
                                      <p className={`font-heading text-3xl font-bold ${selectedLoan.score >= 650 ? "text-success" : "text-destructive"}`}>{selectedLoan.score}</p>
                                    </div>
                                    <div className="rounded-lg border p-4 text-center">
                                      <p className="text-sm text-muted-foreground">Risk Level</p>
                                      <p className={`font-heading text-3xl font-bold ${riskColors[selectedLoan.risk]}`}>{selectedLoan.risk}</p>
                                    </div>
                                  </div>
                                  <div className="rounded-lg bg-muted/50 p-4">
                                    <p className="text-xs font-medium text-muted-foreground mb-2">Bank Verification</p>
                                    <Badge variant="outline" className={selectedLoan.bankVerified ? "bg-success/10 text-success border-success/20" : "bg-destructive/10 text-destructive border-destructive/20"}>
                                      {selectedLoan.bankVerified ? "✓ Verified" : "✗ Not Verified"}
                                    </Badge>
                                  </div>
                                </TabsContent>
                                <TabsContent value="assignment" className="mt-4 space-y-4">
                                  <div className="space-y-3">
                                    <div>
                                      <label className="text-sm font-medium text-muted-foreground">Assign BDE (Business Development Executive)</label>
                                      <Select defaultValue={selectedLoan.bde}>
                                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                          {bdeList.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-muted-foreground">Assign HR Verifier</label>
                                      <Select defaultValue={selectedLoan.hr}>
                                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                          {hrList.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                                          <SelectItem value="Unassigned">Unassigned</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Save Assignment</Button>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            )}
                            <Separator />
                            <div className="flex gap-2">
                              <Button className="bg-success text-success-foreground hover:bg-success/90"><CheckCircle className="mr-2 h-4 w-4" />Approve</Button>
                              <Button variant="destructive"><XCircle className="mr-2 h-4 w-4" />Reject</Button>
                              <Button variant="outline">Send for Manual Review</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm" className="text-success"><CheckCircle className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" className="text-destructive"><XCircle className="h-4 w-4" /></Button>
                      </div>
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
