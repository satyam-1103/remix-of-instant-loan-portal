import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin, Building, Shield } from "lucide-react";

export default function BorrowerProfile() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">My Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your account details</p>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-accent/10 text-accent text-xl font-bold">RK</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Rajesh Kumar</h2>
              <p className="text-sm text-muted-foreground">Member since January 2025</p>
              <Badge variant="outline" className="mt-1 bg-success/10 text-success border-success/20">KYC Verified</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardContent className="space-y-4 p-6">
          <h3 className="font-heading font-semibold text-foreground">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>First Name</Label><Input defaultValue="Rajesh" /></div>
            <div><Label>Last Name</Label><Input defaultValue="Kumar" /></div>
            <div><Label>Email</Label><Input defaultValue="rajesh@email.com" type="email" /></div>
            <div><Label>Phone</Label><Input defaultValue="+91 9876543210" /></div>
            <div><Label>Date of Birth</Label><Input defaultValue="1998-05-15" type="date" /></div>
            <div><Label>City</Label><Input defaultValue="Mumbai" /></div>
          </div>
          <Separator />
          <h3 className="font-heading font-semibold text-foreground">Employment Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Company</Label><Input defaultValue="TCS" /></div>
            <div><Label>Monthly Salary</Label><Input defaultValue="₹45,000" /></div>
          </div>
          <Separator />
          <h3 className="font-heading font-semibold text-foreground">Bank Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Bank Name</Label><Input defaultValue="State Bank of India" /></div>
            <div><Label>Account Number</Label><Input defaultValue="XXXX XXXX 5678" disabled /></div>
            <div><Label>IFSC Code</Label><Input defaultValue="SBIN0001234" disabled /></div>
            <div className="flex items-end"><Badge className="bg-success/10 text-success border-success/20 h-9" variant="outline"><Shield className="mr-1 h-3 w-3" />Bank Verified</Badge></div>
          </div>
          <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">Update Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
}
