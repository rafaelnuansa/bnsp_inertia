import { Link, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconChevronDown } from "@irsyadadl/paranoid";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="border-b bg-secondary/50 py-1">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <Logo />
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Barang</NavLink>
                        <NavLink href="/sales">Penjualan</NavLink>
                    </div>
                    <div className="flex items-center gap-x-4">
                    <ThemeToggle />
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export function NavLink({ className, ...props }) {
    return (
        <Link
            className={cn("p-4 text-sm text-muted-foreground transition duration-200 hover:text-foreground", className)}
            {...props}
        />
    );
}