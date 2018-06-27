node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'ls'

    stage 'docker'
    docker.image

    def testImage = docker.build("test-image","./dockerfile")
    testImage.inside {
            sh 'php --version'
        }
}