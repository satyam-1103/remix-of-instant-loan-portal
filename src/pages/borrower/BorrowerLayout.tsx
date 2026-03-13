import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, FileText, Upload, CreditCard, History, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", path: "/borrower", icon: Home },
  { label: "Apply Loan", path: "/borrower/apply", icon: FileText },
  { label: "KYC", path: "/borrower/kyc", icon: Upload },
  { label: "Repayment", path: "/borrower/repayment", icon: CreditCard },
  { label: "History", path: "/borrower/history", icon: History },
  { label: "Profile", path: "/borrower/profile", icon: User },
];

export default function BorrowerLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient">
              <span className="text-sm font-bold text-accent-foreground">₹</span>
            </div>
            <span className="font-heading text-lg font-bold text-foreground">PayDay<span className="text-gradient">Quick</span></span>
          </Link>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Tab navigation */}
        <nav className="mb-6 flex gap-1 overflow-x-auto rounded-xl border bg-card p-1.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <Outlet />
      </div>
    </div>
  );
}
