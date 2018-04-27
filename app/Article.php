<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['author_id', 'title','content'];
    
    public function author() 
    {
        return $this->belongsTo(User::class);
    }
}
