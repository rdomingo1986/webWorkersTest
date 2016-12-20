<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Message_model extends CI_Model {
  public $message;

  public function __construct(){
    parent::__construct();
    $this->message = null;
  }

  public function setMessage($message){
    $this->message = $message;
  }

  public function registerMessage(){
    try{
      $this->db->insert('my_table',array(
        'message' => $this->message
      ));
    }catch(Exception $e){
      throw new Exception($e->getMessage().' '.$e->getCode());
    }
  }
}