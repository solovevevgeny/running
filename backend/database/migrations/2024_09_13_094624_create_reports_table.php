<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('workout_id')->fillable();
            $table->unsignedBigInteger('recovery')->nullable();
            $table->string('link')->nullable();
            $table->boolean('done')->nullable()->default(0);
            $table->text('comment')->nullable();
            $table->unsignedBigInteger('km')->nullable();
            $table->unsignedBigInteger('pulse')->nullable();
            $table->unsignedBigInteger('speed')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
