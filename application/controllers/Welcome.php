<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Message_model','message');
	}

	public function index(){
		$this->load->view('welcome_message');
	}

	public function save(){
		header("Content-type: text/javascript");
		try{
			$Message = new $this->message();
			$Message->setMessage($this->input->post('message'));
			$Message->registerMessage();
			echo json_encode('OK');
		}catch(Exception $e){
			echo json_encode($e->getMessage().' '.$e->getCode());
		}
	}
}
