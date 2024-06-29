import React from 'react';
import { Head, usePage, Link, router } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import Pagination from '@/shared/pagination';
import { Container } from '@/components/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Button, buttonVariants } from '@/components/ui/button';
import { IconBag, IconPencilBox, IconTrash } from '@irsyadadl/paranoid'; // Assuming IconTrash is imported from the correct location
import Delete from '@/shared/delete';
import { AlertAction } from '@/components/alert-action';

export default function SalesIndex() {
    const { sales } = usePage().props;

    return (
        <>
            <Head>
                <title>Sales - Inventory Management</title>
            </Head>

            <AppLayout>
                <Container>
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <IconBag className="size-4 mr-2" /> Data Penjualan
                                </div>
                                <Link href={route('sales.create')} className={buttonVariants({ variant: 'default' })}>
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Tambah Penjualan
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {sales.data.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableCell>No.</TableCell>
                                            <TableCell>Invoice Number</TableCell>
                                            <TableCell>Invoice Date</TableCell>
                                            <TableCell>Customer Name</TableCell>
                                            <TableCell>Product Code</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Unit Price</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {sales.data.map((sale, index) => (
                                            <TableRow key={sale.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{sale.invoice_number}</TableCell>
                                                <TableCell>{sale.invoice_date}</TableCell>
                                                <TableCell>{sale.customer_name}</TableCell>
                                                <TableCell>{sale.product_code}</TableCell>
                                                <TableCell>{sale.quantity}</TableCell>
                                                <TableCell>{sale.unit_price}</TableCell>
                                                <TableCell>{sale.total_price}</TableCell>
                                                <TableCell className="flex justify-end gap-1">
                                                    <Link href={route('sales.edit', sale.id)} className={buttonVariants({ variant: 'default', size: 'sm' })}><IconPencilBox/></Link>

                                                    <AlertAction
                                                        trigger={
                                                            <Button
                                                                onSelect={(e) => e.preventDefault()}
                                                                className={buttonVariants({ variant: 'destructive', size: 'sm' })}
                                                            >
                                                                <IconTrash />
                                                            </Button>
                                                        }
                                                        title="Hapus Data?"
                                                        description="Apakah kamu yakin akan menghapus data penjualan ini?"
                                                        action={() =>
                                                            router.delete(
                                                                route('sales.destroy', [sale]),
                                                                { preserveScroll: true },
                                                            )
                                                        }
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <p className="p-4 text-center text-gray-500">Tidak ada data penjualan yang tersedia.</p>
                            )}
                        </CardContent>
                    </Card>
                    <Pagination links={sales.links} />
                </Container>
            </AppLayout>
        </>
    );
}
