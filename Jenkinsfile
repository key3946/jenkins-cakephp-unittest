pipeline{
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
                sh 'ls'
            }
        }
    }
}