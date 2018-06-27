node{
    stage 'pwd'
    sh 'pwd'

    stage 'ls'
    sh 'ls'

    stage 'docker'
    docker.image

    def customImage = docker.build("test:${env.BUILD_ID}")
    customImage.inside {
            sh 'php --version'
        }
}