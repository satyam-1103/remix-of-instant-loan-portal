import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { CRMLayout } from "./components/crm/CRMLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminLoans from "./pages/admin/AdminLoans";
import AdminDisbursements from "./pages/admin/AdminDisbursements";
import AdminCollections from "./pages/admin/AdminCollections";
import AdminBorrowers from "./pages/admin/AdminBorrowers";
import AdminPartners from "./pages/admin/AdminPartners";
import AdminReports from "./pages/admin/AdminReports";
import AdminCommunications from "./pages/admin/AdminCommunications";
import AdminSettings from "./pages/admin/AdminSettings";
import HREmployees from "./pages/admin/HREmployees";
import HRAttendance from "./pages/admin/HRAttendance";
import HRPayroll from "./pages/admin/HRPayroll";
import HRVerification from "./pages/admin/HRVerification";
import BorrowerLayout from "./pages/borrower/BorrowerLayout";
import BorrowerDashboard from "./pages/borrower/BorrowerDashboard";
import BorrowerApply from "./pages/borrower/BorrowerApply";
import BorrowerKYC from "./pages/borrower/BorrowerKYC";
import BorrowerRepayment from "./pages/borrower/BorrowerRepayment";
import BorrowerHistory from "./pages/borrower/BorrowerHistory";
import BorrowerProfile from "./pages/borrower/BorrowerProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Admin CRM */}
          <Route path="/admin" element={<CRMLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<AdminLeads />} />
            <Route path="loans" element={<AdminLoans />} />
            <Route path="disbursements" element={<AdminDisbursements />} />
            <Route path="collections" element={<AdminCollections />} />
            <Route path="borrowers" element={<AdminBorrowers />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="communications" element={<AdminCommunications />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="hr/employees" element={<HREmployees />} />
            <Route path="hr/attendance" element={<HRAttendance />} />
            <Route path="hr/payroll" element={<HRPayroll />} />
            <Route path="hr/verification" element={<HRVerification />} />
          </Route>

          {/* Borrower Portal */}
          <Route path="/borrower" element={<BorrowerLayout />}>
            <Route index element={<BorrowerDashboard />} />
            <Route path="apply" element={<BorrowerApply />} />
            <Route path="kyc" element={<BorrowerKYC />} />
            <Route path="repayment" element={<BorrowerRepayment />} />
            <Route path="history" element={<BorrowerHistory />} />
            <Route path="profile" element={<BorrowerProfile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
