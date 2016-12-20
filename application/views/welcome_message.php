<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo base_url('node_modules/bootstrap/dist/css/bootstrap.min.css');?>">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2 class="text-center">Arrancar tareas</h2>
				<div class="input-group">
					<input type="text" id="val" class="form-control">
					<span class="input-group-btn">
						<button type="button" id="start" class="btn btn-success">
							Iniciar!
						</button> 
					</span>
				</div>
				<span class="small" style="display:none;color:red;"></span>
			</div>
			<div class="col-md-6" id="tasks">
				<h2 class="text-center">Barras de Tareas</h2>
			</div>
		</div>
	</div>
	<input type="hidden" id="base_url" value="<?php echo base_url();?>" />
	<script src="<?php echo base_url('node_modules/jquery/dist/jquery.min.js');?>"></script>
	<script src="<?php echo base_url('node_modules/bootstrap/dist/js/bootstrap.min.js');?>"></script>
	<script src="<?php echo base_url('assets/js/main.js');?>"></script>
</body>
</html>