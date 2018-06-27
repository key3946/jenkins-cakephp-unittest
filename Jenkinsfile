node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'ls'

    stage 'docker'
    def testImage = docker.build("test-image","./Dockerfile")

    testImage.inside {
            sh 'php --version'
        }
}