<?php namespace Blog;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model {

	 protected $fillable = array('id', 'name', 'email','contact_number','position');
}
