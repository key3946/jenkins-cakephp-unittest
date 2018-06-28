<?php

/**
 * Created by IntelliJ IDEA.
 * User: morita
 * Date: 2018/06/28
 * Time: 14:38
 */

set_error_handler(
	function ($errno, $errstr, $errfile, $errline) {
		// エラーが発生した場合、ErrorExceptionを発生させる
		throw new ErrorException(
			$errstr, 0, $errno, $errfile, $errline
		);
	}
);


class MycmdShell extends Shell
{
	function main()
	{
		try {
			$test_arr = array(1, 2);
			print($test_arr[3]);
			$this->out('OK'); // 標準出力には $this->out() を利用。
		} catch (ErrorException $e) {
			$previous = $e->getPrevious();
			printf("%s %s(%d)\n", $e->getMessage(), $e->getFile(), $e->getLine());
			printf("# %s %s(%d)\n", $previous->getMessage(), $previous->getFile(), $previous->getLine());
			$this->error("script failed", "");
		}
	}

	function main2()
	{
		$this->error("エラーじゃないよ");
	}
}

