node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'ls'

    stage 'docker'
    def testImage = docker.build("test-image",".")

    testImage.inside {
            sh 'git clone https://github.com/key3946/jenkins-cakephp-unittest.git'
            sh

        }
}