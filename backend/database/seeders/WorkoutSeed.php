<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Workout;

class WorkoutSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $workout = new Workout();
        $workout->shedule =  "2024-09-17";
        $workout->user_id = 1;
        $workout->workout_types_id = 1;
        $workout->content = "400/400x12";
        $workout->save();
        
        $workout = new Workout();
        $workout->shedule =  "2024-09-18";
        $workout->user_id = 1;
        $workout->workout_types_id = 2;
        $workout->content = "кросс 90мин";
        $workout->save();
        
        $workout = new Workout();
        $workout->shedule =  "2024-09-19";
        $workout->user_id = 1;
        $workout->workout_types_id = 3;
        $workout->is_group = 1;
        $workout->content = "СКА Арена";
        $workout->save();

    }
}
