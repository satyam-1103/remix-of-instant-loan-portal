import { Link } from "react-router-dom";

export function LandingFooter() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient">
                <span className="text-sm font-bold text-accent-foreground">₹</span>
              </div>
              <span className="font-heading text-lg font-bold text-foreground">PayDay<span className="text-gradient">Quick</span></span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Quick, transparent payday loans designed for your emergency needs.</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Instant Loan</a></li>
              <li><a href="#" className="hover:text-foreground">Salary Advance</a></li>
              <li><a href="#" className="hover:text-foreground">Payday Loan</a></li>
              <li><a href="#" className="hover:text-foreground">Emergency Loan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Grievance Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PayDayQuick. All rights reserved. | RBI registered NBFC
        </div>
      </div>
    </footer>
  );
}
