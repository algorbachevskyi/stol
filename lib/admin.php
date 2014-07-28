<?php
/**
 * Created by PhpStorm.
 * User: olgor
 * Date: 12.12.13
 * Time: 20:28
 */

class admin {

    // PAGES
    function index($f3) {

//        var_dump(isset($loginResult)); exit;
//  Авторизація засобами fat free. Доробити

        $db = new DB\SQL('mysql:host=localhost;dbname=stol', 'root', '1');
        $mapper = new DB\SQL\Mapper($db, 'users');
        $auth = new Auth($mapper, array('id'=>'id','pw'=>'pw'));

        if($loginResult = $auth->login('admin','1111')) {
            var_dump('YES'); exit;
        } else {
            var_dump('NO'); exit;
        }

        $adminReg = false;

        if (!$adminReg) {
            $f3->reroute('/login');
        }

        echo 'main admin page';
    }

    function login($f3) {
        echo View::instance()->render('admin.htm');
    }

}