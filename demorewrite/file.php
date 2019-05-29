<?php
// file_put_contents('index.shtml','qwerty123456');
ob_start();
echo 5678;
// file_put_contents('index.shtml',ob_get_contents());
file_put_contents('index.shtml',ob_get_clean());
//ob_clean();