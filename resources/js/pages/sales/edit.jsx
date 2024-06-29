// import React
import React, { useState, useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SalesEdit() {
    const { sale, products, errors } = usePage().props; // Ambil data sales dan products dari usePage()
// console.log(sales);
    const { data, setData, put, processing } = useForm({
        invoice_number: sale.invoice_number.toString(),
        invoice_date: sale.invoice_date,
        customer_name: sale.customer_name,
        product_code: sale.product_code,
        quantity: sale.quantity,
    });

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fungsi untuk mencari produk berdasarkan kode atau nama
    const handleSearch = (term) => {
        if (!term.trim()) {
            setSearchResults([]);
            return;
        }

        const filteredProducts = products.filter(product =>
            product.code.toLowerCase().includes(term.toLowerCase()) ||
            product.name.toLowerCase().includes(term.toLowerCase())
        );

        setSearchResults(filteredProducts);
    };

    const handleProductSelect = (product) => {
        setData('product_code', product.code);
        setSearchResults([]); // Kosongkan hasil pencarian setelah pemilihan produk
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('sales.update', sale.id));
    };

    return (
        <>
            <Head>
                <title>Edit Sales - Inventory Management</title>
            </Head>

            <AppLayout>
                <Container>
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Edit Penjualan</h3>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <Label htmlFor="invoice_number">Nomor Faktur</Label>
                                    <Input
                                        id="invoice_number"
                                        type="text"
                                        className={`form-control ${errors.invoice_number ? 'border-red-500' : ''}`}
                                        value={data.invoice_number}
                                        onChange={(e) => setData('invoice_number', e.target.value)}
                                        required
                                        autoFocus
                                        placeholder="Masukkan nomor faktur"
                                    />
                                    {errors.invoice_number && <div className="text-red-500">{errors.invoice_number}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="invoice_date">Tanggal Faktur</Label>
                                    <Input
                                        id="invoice_date"
                                        type="date"
                                        className={`form-control ${errors.invoice_date ? 'border-red-500' : ''}`}
                                        value={data.invoice_date}
                                        onChange={(e) => setData('invoice_date', e.target.value)}
                                        required
                                        placeholder="Pilih tanggal faktur"
                                    />
                                    {errors.invoice_date && <div className="text-red-500">{errors.invoice_date}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="customer_name">Nama Pelanggan</Label>
                                    <Input
                                        id="customer_name"
                                        type="text"
                                        className={`form-control ${errors.customer_name ? 'border-red-500' : ''}`}
                                        value={data.customer_name}
                                        onChange={(e) => setData('customer_name', e.target.value)}
                                        required
                                        placeholder="Masukkan nama pelanggan"
                                    />
                                    {errors.customer_name && <div className="text-red-500">{errors.customer_name}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="product_code">Kode Produk</Label>
                                    <Input
                                        id="product_code"
                                        type="text"
                                        className={`form-control ${errors.product_code ? 'border-red-500' : ''}`}
                                        value={data.product_code}
                                        onChange={(e) => {
                                            setData('product_code', e.target.value);
                                            setSearchTerm(e.target.value); // Set searchTerm untuk pencarian produk
                                            handleSearch(e.target.value); // Panggil fungsi handleSearch saat nilai input berubah
                                        }}
                                        required
                                        placeholder="Cari produk berdasarkan kode atau nama"
                                    />
                                    {errors.product_code && <div className="text-red-500">{errors.product_code}</div>}
                                    {/* Tampilkan hasil pencarian */}
                                    {searchResults.length > 0 && (
                                        <ul className="absolute bg-white dark:bg-gray-800 z-10 border border-gray-200 rounded-md mt-1 max-w-7xl">
                                            {searchResults.map(product => (
                                                <li
                                                    key={product.id}
                                                    className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                                                    onClick={() => handleProductSelect(product)}
                                                >
                                                    {product.code} - {product.name} ({product.stock} {product.unit})
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="quantity">Jumlah</Label>
                                    <Input
                                        id="quantity"
                                        type="number"
                                        className={`form-control ${errors.quantity ? 'border-red-500' : ''}`}
                                        value={data.quantity}
                                        onChange={(e) => setData('quantity', e.target.value)}
                                        required
                                        placeholder="Masukkan jumlah produk"
                                    />
                                    {errors.quantity && <div className="text-red-500">{errors.quantity}</div>}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button type="submit" className={buttonVariants({ variant: 'primary', size: 'sm' })} disabled={processing}>
                                        {processing ? 'Menyimpan...' : 'Simpan'}
                                    </Button>
                                    <Link href={route('sales.index')} className={buttonVariants({ variant: 'default', size: 'sm', extraClasses: 'ml-2' })}>Batal</Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </AppLayout>
        </>
    );
}
