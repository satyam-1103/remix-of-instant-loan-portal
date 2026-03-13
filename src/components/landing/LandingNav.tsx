import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient">
            <span className="text-lg font-bold text-accent-foreground">₹</span>
          </div>
          <span className="font-heading text-xl font-bold text-foreground">PayDay<span className="text-gradient">Quick</span></span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#calculator" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Calculator</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild><Link to="/borrower">Login</Link></Button>
          <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90" asChild>
            <Link to="/borrower/apply">Apply Now</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#calculator" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Calculator</a>
            <a href="#features" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>How It Works</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>FAQ</a>
            <Button variant="ghost" asChild><Link to="/borrower">Login</Link></Button>
            <Button className="bg-accent-gradient text-accent-foreground" asChild><Link to="/borrower/apply">Apply Now</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
}
