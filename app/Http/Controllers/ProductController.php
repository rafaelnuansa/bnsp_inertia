<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->paginate(10);
        return inertia('products/index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'code' => 'required|unique:products',
            'name' => 'required',
            'sale_price' => 'required|numeric',
            'purchase_price' => 'required|numeric',
            'unit' => 'required',
            'category' => 'required',
            'stock' => 'required|numeric',
        ]);

        // Instantiate a new Product object
        $product = new Product();
        $product->code = $request->code;
        $product->name = $request->name;
        $product->sale_price = $request->sale_price;
        $product->purchase_price = $request->purchase_price;
        $product->unit = $request->unit;
        $product->category = $request->category;
        $product->stock = $request->stock;

        // Save the product
        $product->save();

        flashMessage('Produk berhasil dibuat', 'success');
        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return inertia('products/show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return inertia('products/edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        // Validate the request data
        $request->validate([
            'code' => 'required|unique:products,code,' . $product->id,
            'name' => 'required',
            'sale_price' => 'required|numeric',
            'purchase_price' => 'required|numeric',
            'unit' => 'required',
            'category' => 'required',
            'stock' => 'required|numeric',
        ]);

        // Update the product with validated data
        $product->update([
            'code' => $request->code,
            'name' => $request->name,
            'sale_price' => $request->sale_price,
            'purchase_price' => $request->purchase_price,
            'unit' => $request->unit,
            'category' => $request->category,
            'stock' => $request->stock,
        ]);

        flashMessage('Produk berhasil diupdate', 'success');
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        flashMessage('Produk berhasil dihapus', 'success');
        return redirect()->back();
    }
}
