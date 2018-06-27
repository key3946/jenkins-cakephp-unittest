node{
    stage 'pwd'
    sh 'pwd'


    stage 'ls'
    sh 'rm -r -f ./jenkins-cakephp-unittest'
    sh 'ls'
    sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'

    stage 'docker-run'
    def testImage = docker.build("test-image","./jenkins-cakephp-unittest")

    testImage.inside {
            sh 'composer require --dev phpunit/phpunit ^4'
            sh './jenkins-cakephp-unittest/cakephp/lib/Cake/Console/cake test core AllTests'
        }
}