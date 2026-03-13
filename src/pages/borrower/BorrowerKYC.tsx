import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle, Clock, XCircle, FileText, Camera } from "lucide-react";

const documents = [
  { name: "PAN Card", status: "Verified", icon: FileText, file: "pan_rajesh.jpg" },
  { name: "Aadhaar Card (Front)", status: "Verified", icon: FileText, file: "aadhaar_front.jpg" },
  { name: "Aadhaar Card (Back)", status: "Verified", icon: FileText, file: "aadhaar_back.jpg" },
  { name: "Salary Slip (Latest)", status: "Pending", icon: FileText, file: "salary_feb.pdf" },
  { name: "Bank Statement (3 months)", status: "Not Uploaded", icon: FileText, file: null },
  { name: "Selfie Verification", status: "Not Uploaded", icon: Camera, file: null },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  Verified: { color: "bg-success/10 text-success border-success/20", icon: CheckCircle },
  Pending: { color: "bg-warning/10 text-warning border-warning/20", icon: Clock },
  Rejected: { color: "bg-destructive/10 text-destructive border-destructive/20", icon: XCircle },
  "Not Uploaded": { color: "bg-muted text-muted-foreground border-border", icon: Upload },
};

export default function BorrowerKYC() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">KYC Verification</h1>
        <p className="text-sm text-muted-foreground">Upload your documents for verification</p>
      </div>

      <Card className="shadow-card">
        <CardContent className="p-5">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">KYC Progress</span>
                <span className="font-medium text-foreground">3/6 completed</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-muted">
                <div className="h-2 w-1/2 rounded-full bg-accent-gradient" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {documents.map(doc => {
          const config = statusConfig[doc.status];
          const StatusIcon = config.icon;
          return (
            <Card key={doc.name} className="shadow-card">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <doc.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{doc.name}</p>
                    {doc.file && <p className="text-xs text-muted-foreground">{doc.file}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={config.color}>
                    <StatusIcon className="mr-1 h-3 w-3" />{doc.status}
                  </Badge>
                  {doc.status === "Not Uploaded" && (
                    <Button size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                      <Upload className="mr-1 h-4 w-4" />Upload
                    </Button>
                  )}
                  {doc.status === "Rejected" && (
                    <Button size="sm" variant="outline">Re-upload</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
