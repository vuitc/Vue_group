<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /** * Run the migrations. */ public function up(): void
    {
        Schema::create('hoadons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->decimal('total_amount', 8, 2);
            $table->string('phone');
            $table->string('diachi');
            $table->timestamps();
        });
    }
    /** * Reverse the migrations. */ public function down(): void
    {
        Schema::dropIfExists('hoadons');
    }
};
