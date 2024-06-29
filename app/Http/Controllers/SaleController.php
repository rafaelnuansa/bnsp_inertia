<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    /**
     * Menampilkan daftar penjualan.
     */
    public function index()
    {
        $sales = Sale::latest()->paginate(10);

        return inertia('sales/index', [
            'sales' => $sales,
        ]);
    }

    /**
     * Menampilkan formulir untuk membuat penjualan baru.
     */
    public function create()
    {
        $products = Product::all();

        return inertia('sales/create', [
            'products' => $products,
        ]);
    }

    /**
     * Menyimpan penjualan baru ke penyimpanan.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'invoice_number' => 'required',
            'invoice_date' => 'required|date',
            'customer_name' => 'required',
            'product_code' => 'required|exists:products,code',
            'quantity' => 'required|integer|min:1',
        ]);

        $product = Product::where('code', $request->product_code)->first();

        if (!$product) {
            return back()->with('error', 'Product not found.');
        }

        // Calculate unit price based on the product's sale price
        $unit_price = $product->sale_price;

        // Calculate total price
        $total_price = $unit_price * $request->quantity;

        // Begin a database transaction
        DB::beginTransaction();

        try {
            // Create the sale record
            $sale = Sale::create([
                'invoice_number' => $request->invoice_number,
                'invoice_date' => $request->invoice_date,
                'customer_name' => $request->customer_name,
                'product_code' => $request->product_code,
                'quantity' => $request->quantity,
                'unit_price' => $unit_price,
                'total_price' => $total_price,
            ]);

            // Decrease the product stock
            $product->decrement('stock', $request->quantity);

            // Commit the transaction
            DB::commit();

            flashMessage('Penjualan berhasil dibuat', 'success');
            return redirect()->route('sales.index')->with('success', 'Sale created successfully.');
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollBack();
            return back()->with('error', 'Failed to create sale: ' . $e->getMessage());
        }
    }

    /**
     * Menampilkan formulir untuk mengedit penjualan.
     */
    public function edit(Sale $sale)
    {
        $products = Product::all();

        return inertia('sales/edit', [
            'sale' => $sale,
            'products' => $products,
        ]);
    }

    /**
     * Memperbarui penjualan yang ada di penyimpanan.
     */
    public function update(Request $request, Sale $sale)
    {
        // Validate the request data
        $request->validate([
            'invoice_number' => 'required',
            'invoice_date' => 'required|date',
            'customer_name' => 'required',
            'product_code' => 'required|exists:products,code',
            'quantity' => 'required|integer|min:1',
        ]);

        $product = Product::where('code', $request->product_code)->first();

        if (!$product) {
            return back()->with('error', 'Product not found.');
        }

        // Calculate unit price based on the product's sale price
        $unit_price = $product->sale_price;

        // Calculate total price
        $total_price = $unit_price * $request->quantity;

        // Begin a database transaction
        DB::beginTransaction();

        try {
            // Update the sale record
            $sale->update([
                'invoice_number' => $request->invoice_number,
                'invoice_date' => $request->invoice_date,
                'customer_name' => $request->customer_name,
                'product_code' => $request->product_code,
                'quantity' => $request->quantity,
                'unit_price' => $unit_price,
                'total_price' => $total_price,
            ]);

            // Calculate difference in quantity
            $diffQuantity = $request->quantity - $sale->quantity;

            // Adjust product stock accordingly
            if ($diffQuantity != 0) {
                $product->increment('stock', $diffQuantity);
            }

            // Commit the transaction
            DB::commit();

            return redirect()->route('sales.index')->with('success', 'Sale updated successfully.');
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollBack();
            return back()->with('error', 'Failed to update sale: ' . $e->getMessage());
        }
    }

    /**
     * Menghapus penjualan dari penyimpanan.
     */
    public function destroy(Sale $sale)
    {
        $product = Product::where('code', $sale->product_code)->first();
        if ($product) {
            $product->increment('stock', $sale->quantity);
        }
        // Delete the sale
        $sale->delete();
        return redirect()->back()->with('success', 'Penjualan berhasil dihapus.');
    }
}
