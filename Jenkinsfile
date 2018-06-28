node{
    stage('clean'){
        steps {
            deleteDir()
        }
    }
    stage('checkout'){
        steps {
            checkout scm
        }
    }
        stage 'pwd'
        sh 'pwd'
    stage('docker-run'){
        steps {
            def testImage = docker.build("test-image2","./jenkins-cakephp-unittest"
            testImage.inside {
                        sh './jenkins-cakephp-unittest/cakephp/lib/Cake/Console/cake test core AllTests'
            }
        }
    }
}