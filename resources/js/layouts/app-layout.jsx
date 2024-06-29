
import { SiteFooter } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

export function AppLayout({ children }) {
    return (
        <div>
            
            <Toaster />
            <Navbar />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 py-6 md:py-16">
                {children}
            </main>
            <SiteFooter/>
        </div>
    );
}