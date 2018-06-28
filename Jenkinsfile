pipeline{
    stages{
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
        stage('docker-run'){
            steps {
                    sh 'ls'
            }
        }
    }
}