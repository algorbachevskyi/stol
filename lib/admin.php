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