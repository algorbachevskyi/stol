<?php
/**
 * Created by PhpStorm.
 * User: olgor
 * Date: 12.12.13
 * Time: 21:26
 */

class main {

    // PAGES

    function index($f3) {

//        $f3->set('main', 'true');
        $f3->set('title', 'Головна');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('slider.htm');
        echo View::instance()->render('info.htm');
        echo View::instance()->render('footer.htm');
    }

    function mainpage($f3) {

        $f3->set('mainpage', 'true');
        $f3->set('title', 'Будинок');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('building.htm');
//        echo View::instance()->render('info.htm');
        echo View::instance()->render('footer.htm');
    }

    function pluses($f3) {

        $f3->set('pluses', 'true');
        $f3->set('title', 'Переваги');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('pluses.htm');
        echo View::instance()->render('footer.htm');
    }

    function flats($f3) {

        $f3->set('flats', 'true');
        $f3->set('title', 'Квартири');

        $floorNumber = isset($_POST['floor-number']) ? $_POST['floor-number'] : '2';

        $f3->set('floorNumber',$floorNumber);

        echo View::instance()->render('header.htm');
        echo View::instance()->render('flats.htm');
        echo View::instance()->render('footer.htm');
    }

    function showroom($f3) {

        $f3->set('showroom', 'true');
        $f3->set('title', 'Шоу-рум');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('showroom.htm');

        echo View::instance()->render('footer.htm');
    }

    function structure($f3) {

        $f3->set('structure', 'true');
        $f3->set('title', 'Інфраструктура');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('structure.htm');
        echo View::instance()->render('footer.htm');
    }

    function contacts($f3) {

        $f3->set('contacts', 'true');
        $f3->set('title', 'Знайти нас');

        echo View::instance()->render('header.htm');
        echo View::instance()->render('contacts.htm');
        echo View::instance()->render('footer.htm');

    }

    // POST REQUESTS

    // AJAX REQUESTS

    function firstAjax() {
//        if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

        $kv = $_POST['flat'];
        $output = Array('kvartyra' => $kv);
        echo json_encode($output);
    }


}