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
            sh 'ls /var/lib/jenkins/workspace/testpp/jenkins-cakephp-unittest/cakephp/lib/Cake'
            sh 'mkdir /var/lib/jenkins/workspace/testpp/jenkins-cakephp-unittest/cakephp/lib/Cake/TestSuite/PHPUnit'
            sh 'cp ./vendor/autoload.php /var/lib/jenkins/workspace/testpp/jenkins-cakephp-unittest/cakephp/lib/Cake/TestSuite/PHPUnit/autoload.php'
            sh './jenkins-cakephp-unittest/cakephp/lib/Cake/Console/cake test core AllTests'
        }
}