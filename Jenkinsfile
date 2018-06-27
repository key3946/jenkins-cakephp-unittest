node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'rm -f jenkins-cakephp-unittest'
    sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'
    sh 'cd jenkins-cakephp-unittest'
    sh 'pwd'
    sh 'ls'
    sh 'cat Dockerfile'

    stage 'docker'
    def testImage = docker.build("test-image",".")

    testImage.inside {
            sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'
            sh 'cd jenkins-cakephp-unittest'
            sh 'composer require --dev phpunit/phpunit ^4'
            sh './vendor/bin/phpunit --bootstrap vendor/autoload.php test/SampleTest'
        }
}