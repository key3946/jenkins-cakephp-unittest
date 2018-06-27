node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'rm -r -f ./jenkins-cakephp-unittest'
    sh 'ls'
    sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'
    sh 'pwd'
    sh 'ls'
    sh 'cat jenkins-cakephp-unittest/Dockerfile'

    stage 'docker-run'
    def testImage = docker.build("test-image","./jenkins-cakephp-unittest")

    testImage.inside {
            sh 'php --version'
            sh 'ls'
            sh 'rm -r -f ./*'
            sh 'composer require --dev phpunit/phpunit ^4'
            sh './vendor/bin/phpunit --bootstrap vendor/autoload.php test/SampleTest'
        }
}