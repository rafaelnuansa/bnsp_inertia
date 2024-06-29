<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $products = [
            [
                'code' => 'SPK001',
                'name' => 'RAM 8GB DDR4',
                'sale_price' => 600000, 
                'purchase_price' => 500000, 
                'unit' => 'pcs',
                'category' => 'RAM',
                'stock' => 100
            ],
            [
                'code' => 'SPK002',
                'name' => 'SSD 256GB SATA',
                'sale_price' => 800000, 
                'purchase_price' => 700000, 
                'unit' => 'pcs',
                'category' => 'Storage',
                'stock' => 100
            ],
            [
                'code' => 'SPK003',
                'name' => 'CPU Cooler RGB',
                'sale_price' => 300000, 
                'purchase_price' => 250000, 
                'unit' => 'pcs',
                'category' => 'Cooling',
                'stock' => 100
            ],
        ];

        // Memasukkan data ke tabel products
        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
