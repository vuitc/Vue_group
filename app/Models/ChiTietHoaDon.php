<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietHoaDon extends Model
{
    use HasFactory;
    protected $table = 'chitiethoadons';
    protected $fillable = [
        'hoadon_id', 'product_id', 'quantity'
    ];
}
