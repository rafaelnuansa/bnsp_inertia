// import React
import React from "react";

// import Link
import { Link } from '@inertiajs/react';
import { buttonVariants } from "@/components/ui/button";

export default function Pagination({ links, align }) {
    return (
        <nav className={`mt-4 flex gap-1 ${align}`}>
            {links.map((link, index) => (
                <Link
                    key={index} // Adding key prop with unique value (index in this case)
                    href={link.url ? link.url : '#'}
                    className={buttonVariants({ variant: 'outline' })}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
