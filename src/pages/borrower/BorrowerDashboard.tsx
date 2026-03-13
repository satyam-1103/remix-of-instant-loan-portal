import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IndianRupee, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function BorrowerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Welcome back, Rajesh 👋</h1>
        <p className="text-sm text-muted-foreground">Here's your loan overview</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <IndianRupee className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-3 font-heading text-2xl font-bold text-foreground">₹25,000</p>
            <p className="text-xs text-muted-foreground">Active Loan Amount</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
              <Clock className="h-5 w-5 text-warning" />
            </div>
            <p className="mt-3 font-heading text-2xl font-bold text-foreground">8 days</p>
            <p className="text-xs text-muted-foreground">Until Next Payment</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <p className="mt-3 font-heading text-2xl font-bold text-foreground">3</p>
            <p className="text-xs text-muted-foreground">Loans Repaid</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Active Loan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-sm text-muted-foreground">Loan ID</p>
                <p className="font-heading font-semibold text-foreground">LN-2847</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-heading font-semibold text-foreground">₹25,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tenure</p>
                <p className="font-heading font-semibold text-foreground">14 days</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="bg-success/10 text-success border-success/20" variant="outline">Active</Badge>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90" asChild>
                <Link to="/borrower/repayment">Make Payment <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/borrower/history">View Details</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
