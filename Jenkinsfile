node{
    stage 'pwd'
    sh 'pwd'


    stage 'ls'
    sh 'rm -r -f ./jenkins-cakephp-unittest'
    sh 'ls'
    sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'
    sh 'chmod +x ./jenkins-cakephp-unittest/cakephp/lib/Cake/Console/cake'

    stage 'docker-run'
    def testImage = docker.build("test-image2","./jenkins-cakephp-unittest")

    testImage.inside {
            sh 'cd jenkins-cakephp-unittest'
            sh 'pwd'
            sh 'composer require --dev phpunit/phpunit 3.7.*'
            sh 'ls'
            sh 'ls vendor'
            sh 'cat /app/Config/bootstrap.php'
            sh './jenkins-cakephp-unittest/cakephp/lib/Cake/Console/cake test core AllTests'
        }
}