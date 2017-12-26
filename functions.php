<?php

vaR_dump($_POST);
//TODO: simple test
exec("asterisk -x 'channel originate Local/8000@cos-all-init application MusicOnHold'");

?>
