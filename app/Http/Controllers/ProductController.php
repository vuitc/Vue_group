<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\ChiTietHoaDon;
use App\Models\HoaDon;
use App\Models\User;


class ProductController extends Controller
{
    /**
     * Hiển thị danh sách sản phẩm.
     *
     * @return \Illuminate\View\View
     */
    // bảng products
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    // bảng dạnh mục
    public function categories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }
    // bảng hóa đơn
    public function hoadons()
    {
        $hoadons = HoaDon::all();
        return response()->json($hoadons);
    }
    // bảng chi tiết hóa đơn
    public function chitiethoadon($id)
    {
        $hoadon = ChiTietHoaDon::find($id);
        if ($hoadon) {
            return response()->json($hoadon, 200);
        } else {
            return response()->json(['message' => 'Khong tim thay hoa don'], 404);
        }
    }
    // bảng user
    public function user()
    {
        $user = User::all();
        return response()->json($user);
    }


    /**
     * Lưu sản phẩm mới vào cơ sở dữ liệu.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
            'category' => 'required'
        ]);

        $product = Product::create($validatedData);
        return response()->json($product, 201);
    }

    /**
     * Hiển thị thông tin của một sản phẩm cụ thể.
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        if ($product) {
            return response()->json($product, 200);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    /**
     * Cập nhật thông tin của một sản phẩm.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
            'category' => 'required',
            'image' => 'required',
            'soluongton' => 'required|numeric',
            'trongluong' => 'required|numeric',
            'quanlity' => 'required|numeric',
        ]);

        if ($product) {
            $product->update($validatedData);
            return response()->json($product, 200);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    /**
     * Xoá một sản phẩm.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product) {
            $product->delete();
            return response()->json(null, 204);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
