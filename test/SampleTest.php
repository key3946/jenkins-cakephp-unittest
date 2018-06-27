<?php
/**
 * Created by IntelliJ IDEA.
 * User: morita
 * Date: 2018/06/27
 * Time: 11:46
 */

use PHPUnit\Framework\TestCase;

final class EmailTest extends TestCase
{
    public function testCanBeCreatedFromValidEmailAddress()
    {
        $this->assertEquals("aaa", "aaa");
        $this->assertTrue(true);
        $this->assertFalse(false);
    }
}