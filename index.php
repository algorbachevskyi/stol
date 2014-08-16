<?php

$f3=require('lib/base.php');

$f3->config('config.ini');

// Routing
$f3->route('POST /@controller/@action [ajax]','@controller->@action');
$f3->route('POST /@controller/@action','@controller->@action');

$f3->route('GET /','main->index');
$f3->route('GET /main','main->mainpage');
$f3->route('GET /pluses','main->pluses');
$f3->route('GET /flats','main->flats');
$f3->route('GET /showroom','main->showroom');
$f3->route('GET /structure','main->structure');
$f3->route('GET /contacts','main->contacts');
$f3->route('GET /admin','admin->index');
$f3->route('GET /login','admin->login');

$f3->route('POST /flats','main->flats');
$f3->route('POST /contacts','main->contacts');
$f3->route('POST /admin','admin->index');

// Українська версія для справжніх козаків!

//$f3->route('GET /%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0','main->index');
//$f3->route('GET /%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%B3%D0%B8','main->pluses');
//$f3->route('GET /%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B8','main->flats');
//$f3->route('GET /main','main->index');
//$f3->route('GET /main','main->index');
//$f3->route('GET /main','main->index');

//$f3->route('GET /',
//	function($f3) {
////		$classes=array(
////			'Base'=>
////				array(
////					'hash',
////					'json',
////					'session'
////				),
////			'Cache'=>
////				array(
////					'apc',
////					'memcache',
////					'wincache',
////					'xcache'
////				),
////			'DB\SQL'=>
////				array(
////					'pdo',
////					'pdo_dblib',
////					'pdo_mssql',
////					'pdo_mysql',
////					'pdo_odbc',
////					'pdo_pgsql',
////					'pdo_sqlite',
////					'pdo_sqlsrv'
////				),
////			'DB\Jig'=>
////				array('json'),
////			'DB\Mongo'=>
////				array(
////					'json',
////					'mongo'
////				),
////			'Auth'=>
////				array('ldap','pdo'),
////			'Bcrypt'=>
////				array(
////					'mcrypt',
////					'openssl'
////				),
////			'Image'=>
////				array('gd'),
////			'Lexicon'=>
////				array('iconv'),
////			'SMTP'=>
////				array('openssl'),
////			'Web'=>
////				array('curl','openssl','simplexml'),
////			'Web\Geo'=>
////				array('geoip','json'),
////			'Web\OpenID'=>
////				array('json','simplexml'),
////			'Web\Pingback'=>
////				array('dom','xmlrpc')
////		);
////		$f3->set('classes',$classes);
////		echo View::instance()->render('welcome.htm');
//        echo 'main page <br/><br/>';
//	}
//);

// DataBase Initialization
//$db=new DB\SQL(
//    'mysql:host=localhost;port=8080;dbname=st_base',
//    'root',
//    '1'
//);

// Error page
$f3->set('ONERROR',
    function($f3) {
        echo 'Errorrrr';
        var_dump($f3->get('ERROR.text'));
    }
);

$f3->run();


//$f3->set('result',$db->exec('SELECT name FROM users WHERE id=?', $f3->get('GET.userID')));
//echo Template::instance()->render('bd_res.htm');

//$user=new DB\SQL\Mapper($db,'users');
//$user->load(array('id=?',$f3->get('GET.id')));
//var_dump($user->name);
//$user->erase();
//
//$f3->error(404);