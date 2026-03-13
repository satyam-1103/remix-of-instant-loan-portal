import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2 } from "lucide-react";

export default function BorrowerApply() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(25000);
  const [tenure, setTenure] = useState("14");

  if (step === 4) {
    return (
      <div className="flex items-center justify-center py-16">
        <Card className="max-w-md shadow-card">
          <CardContent className="flex flex-col items-center p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h2 className="mt-4 font-heading text-xl font-bold text-foreground">Application Submitted!</h2>
            <p className="mt-2 text-sm text-muted-foreground">Your loan application for ₹{amount.toLocaleString('en-IN')} has been submitted. You'll receive a decision within 5 minutes.</p>
            <Button className="mt-6 bg-accent-gradient text-accent-foreground hover:opacity-90" onClick={() => setStep(1)}>Apply Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Apply for Loan</h1>
        <p className="text-sm text-muted-foreground">Complete 3 simple steps</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${step >= s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
              {s}
            </div>
            {s < 3 && <div className={`h-0.5 w-12 ${step > s ? "bg-accent" : "bg-muted"}`} />}
          </div>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {step === 1 && "Loan Details"}
          {step === 2 && "Personal Info"}
          {step === 3 && "Employment"}
        </span>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label className="text-sm text-muted-foreground">Loan Amount</Label>
                <p className="font-heading text-3xl font-bold text-foreground">₹{amount.toLocaleString('en-IN')}</p>
                <Slider value={[amount]} onValueChange={(v) => setAmount(v[0])} min={5000} max={100000} step={1000} className="mt-4" />
              </div>
              <div>
                <Label>Loan Tenure</Label>
                <Select value={tenure} onValueChange={setTenure}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="14">14 Days</SelectItem>
                    <SelectItem value="21">21 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Purpose of Loan</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select purpose" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="bills">Utility Bills</SelectItem>
                    <SelectItem value="rent">Rent Payment</SelectItem>
                    <SelectItem value="personal">Personal Expense</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label>First Name</Label><Input placeholder="Rajesh" /></div>
                <div><Label>Last Name</Label><Input placeholder="Kumar" /></div>
              </div>
              <div><Label>Email</Label><Input type="email" placeholder="rajesh@email.com" /></div>
              <div><Label>Mobile Number</Label><Input placeholder="+91 98765 43210" /></div>
              <div><Label>Date of Birth</Label><Input type="date" /></div>
              <div><Label>PAN Number</Label><Input placeholder="ABCDE1234F" /></div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label>Employment Type</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaried">Salaried</SelectItem>
                    <SelectItem value="self-employed">Self Employed</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Company Name</Label><Input placeholder="ABC Pvt Ltd" /></div>
              <div><Label>Monthly Salary</Label><Input placeholder="₹35,000" /></div>
              <div><Label>Bank Account Number</Label><Input placeholder="Enter account number" /></div>
              <div><Label>IFSC Code</Label><Input placeholder="SBIN0001234" /></div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
            <Button className="ml-auto bg-accent-gradient text-accent-foreground hover:opacity-90" onClick={() => setStep(step + 1)}>
              {step === 3 ? "Submit Application" : "Continue"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
