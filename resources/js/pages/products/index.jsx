// import React
import React from "react";

// import Head, usePage, Link
import { Head, usePage, Link, router } from '@inertiajs/react';

// import component Pagination
import { AppLayout } from "@/layouts/app-layout";
import Pagination from "@/shared/pagination";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconBag, IconPencilBox, IconTrash } from "@irsyadadl/paranoid";
import { AlertAction } from "@/components/alert-action";


export default function ProductIndex() {
    // destruct props "products"
    const { products } = usePage().props;


    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <AppLayout>
                <Container>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <IconBag className="size-4 mr-2" /> Data Barang
                                </div>
                                <Link href="/products/create" className={buttonVariants({ variant: 'default' })}>
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Tambah Barang
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>Code</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Sale Price</TableCell>
                                        <TableCell>Purchase Price</TableCell>
                                        <TableCell>Unit</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Stok</TableCell>
                                        <TableCell className="flex justify-end">Actions</TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.data.map((product, index) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{product.code}</TableCell>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.sale_price}</TableCell>
                                            <TableCell>{product.purchase_price}</TableCell>
                                            <TableCell>{product.unit}</TableCell>
                                            <TableCell>{product.category}</TableCell>
                                            <TableCell>{product.stock}</TableCell>
                                            <TableCell className="flex justify-end gap-1">
                                                <Link href={route('products.edit', product.id)} className={buttonVariants({ variant: 'default', size: 'sm' })}><IconPencilBox/></Link>
                                             
                                                <AlertAction
                                                    trigger={
                                                        <Button
                                                            onSelect={(e) => e.preventDefault()}
                                                            className={buttonVariants({ variant: 'destructive', size: 'sm' })}
                                                        >
                                                            <IconTrash/>
                                                        </Button>
                                                    }
                                                    title="Hapus Data?"
                                                    description="Apakah kamu yakin akan menghapus data barang ini?"
                                                    action={() =>
                                                        router.delete(
                                                            route('products.destroy', [product]),
                                                            { preserveScroll: true },
                                                            
                                                        )
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Pagination links={products.links}/>
                </Container>
            </AppLayout>
        </>
    );
}
