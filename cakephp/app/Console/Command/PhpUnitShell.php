<?php
/**
 * Created by IntelliJ IDEA.
 * User: morita
 * Date: 2018/06/28
 * Time: 9:41
 */
require_once APP . DS . 'Vendor' . DS . 'PHPUnit' . DS . 'autoload.php';
App::uses('TestShell', 'Console/Command');

class MyTestShell extends TestShell
{
}

