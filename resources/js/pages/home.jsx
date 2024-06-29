import { AppLayout } from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import MetaTags from '@/components/meta-tags';
import { IconInvoice } from '@irsyadadl/paranoid';

export default function Home(props) {
    return (
        <div>
            <Head title="Home" />
            <MetaTags
                title="SalesApp - Aplikasi Penjualan Barang SparePart"
                description="Temukan solusi lengkap untuk penjualan sparepart barang dengan SalesApp. Nikmati kemudahan dalam manajemen stok, penjualan, dan pelanggan."
                url={route('home')}
            />
            <Hero />
        </div>
    );
}

function Hero() {
    return (
        <div className="relative isolate -mt-6 mb-6 overflow-hidden border-b bg-background lg:-mt-16 lg:mb-16 max-h-screen h-full">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-secondary">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-sky-500 to-gray-900 opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-10 pt-0 sm:pb-24 lg:flex lg:px-8 lg:py-24">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <h1 className="mt-10 text-4xl flex font-bold tracking-tight text-foreground sm:text-6xl">
                        <IconInvoice w="40" h="40" /> Penjualan
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut debitis sequi itaque perferendis possimus saepe? Corrupti commodi quasi pariatur recusandae at, quae voluptatibus, rerum perspiciatis vel quidem fugiat esse?
                    </p>
                </div>
            </div>
        </div>
    );
}

Home.layout = (page) => <AppLayout children={page} />;