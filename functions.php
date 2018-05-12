<?php

if(array_key_exists('store', $_GET)) {
	$var = json_encode($_POST); //perhaps it's good to encrypt this? Although any one with access to machine makes it obsolete
	file_put_contents('/tmp/test', $var); //TODO: there should be an appropriate place for this
}

if(array_key_exists('dial', $_GET)) {
	//TODO: do some thing here
}

?>
