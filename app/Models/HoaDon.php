<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoaDon extends Model
{
    use HasFactory;
    protected $table = 'hoadons';
    protected $fillable = [
        'user_id', 'total_amount', 'phone','diachi'
    ];
}
