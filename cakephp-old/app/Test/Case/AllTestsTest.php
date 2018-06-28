<?php

/**
 * Created by IntelliJ IDEA.
 * User: morita
 * Date: 2018/06/28
 * Time: 10:08
 */

require_once APP . DS . 'Vendor' . DS . 'PHPUnit' . DS . 'autoload.php';

class AllTests extends CakeTestSuite
{
	public static function suite()
	{
		$suite = new CakeTestSuite('All tests');
		$suite->addTestDirectory(TESTS . 'Case' . DS . 'Controller');
		$suite->addTestDirectory(TESTS . 'Case' . DS . 'Model');
		$suite->addTestDirectory(TESTS . 'Case' . DS . 'View');
		return $suite;
	}
}
