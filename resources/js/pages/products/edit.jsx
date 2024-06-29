// import React
import React, { useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductEdit() {
    const { product, errors } = usePage().props;
    const { data, setData, put, processing } = useForm({
        code: product.code,
        name: product.name,
        sale_price: product.sale_price,
        purchase_price: product.purchase_price,
        unit: product.unit,
        category: product.category,
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('products.update', product.id));
    };

    // Function to update form data on prop change
    useEffect(() => {
        setData('code', product.code);
        setData('name', product.name);
        setData('sale_price', product.sale_price);
        setData('purchase_price', product.purchase_price);
        setData('unit', product.unit);
        setData('category', product.category);
        setData('stock', product.stock);
    }, [product]);

    return (
        <>
            <Head>
                <title>Edit Product - Inventory Management</title>
            </Head>

            <AppLayout>
                <Container>
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-semibold">Edit Produk</h3>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <Label htmlFor="code">Kode Produk</Label>
                                    <Input
                                        id="code"
                                        type="text"
                                        className={`form-control ${errors.code ? 'border-red-500' : ''}`}
                                        value={data.code}
                                        onChange={(e) => setData('code', e.target.value)}
                                        required
                                        autoFocus
                                    />
                                    {errors.code && <div className="text-red-500">{errors.code}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="name">Nama Produk</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className={`form-control ${errors.name ? 'border-red-500' : ''}`}
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="sale_price">Harga Jual</Label>
                                    <Input
                                        id="sale_price"
                                        type="text"
                                        className={`form-control ${errors.sale_price ? 'border-red-500' : ''}`}
                                        value={data.sale_price}
                                        onChange={(e) => setData('sale_price', e.target.value)}
                                        required
                                    />
                                    {errors.sale_price && <div className="text-red-500">{errors.sale_price}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="purchase_price">Harga Beli</Label>
                                    <Input
                                        id="purchase_price"
                                        type="text"
                                        className={`form-control ${errors.purchase_price ? 'border-red-500' : ''}`}
                                        value={data.purchase_price}
                                        onChange={(e) => setData('purchase_price', e.target.value)}
                                        required
                                    />
                                    {errors.purchase_price && <div className="text-red-500">{errors.purchase_price}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="unit">Satuan</Label>
                                    <Input
                                        id="unit"
                                        type="text"
                                        className={`form-control ${errors.unit ? 'border-red-500' : ''}`}
                                        value={data.unit}
                                        onChange={(e) => setData('unit', e.target.value)}
                                        required
                                    />
                                    {errors.unit && <div className="text-red-500">{errors.unit}</div>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="category">Kategori</Label>
                                    <Input
                                        id="category"
                                        type="text"
                                        className={`form-control ${errors.category ? 'border-red-500' : ''}`}
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        required
                                    />
                                    {errors.category && <div className="text-red-500">{errors.category}</div>}
                                </div>    
                                   <div className="mb-4">
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input
                                        id="stock"
                                        type="text"
                                        className={`form-control ${errors.stock ? 'border-red-500' : ''}`}
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        required
                                    />
                                    {errors.stock && <div className="text-red-500">{errors.stock}</div>}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button type="submit" className={buttonVariants({ variant: 'primary', size: 'sm' })} disabled={processing}>
                                        {processing ? 'Menyimpan...' : 'Simpan'}
                                    </Button>
                                    <Link href={route('products.index')} className={buttonVariants({ variant: 'default', size: 'sm', extraClasses: 'ml-2' })}>Batal</Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </AppLayout>
        </>
    );
}
