<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use \App\Models\WorkoutType;

class WorkoutsTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $wp = new WorkoutType();
        $wp->title = "Интервальная";
        $wp->save();

        $wp = new WorkoutType();
        $wp->title = "Кросс";
        $wp->save();

        $wp = new WorkoutType();
        $wp->title = "Фартлек";
        $wp->save();
    }
}
