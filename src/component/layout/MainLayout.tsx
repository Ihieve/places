import type { ReactNode } from "react"; // ✅ type-only import
import BottomNav from "./BottomNav";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Page content */}
      <div className="pb-24">{children}</div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
}