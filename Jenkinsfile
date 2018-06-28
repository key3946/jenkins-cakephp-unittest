pipeline{
    agent { dockerfile true }
    stages{
        stage('clean'){
            steps {
                dir('./'){
                    deleteDir()
                }
            }
        }
        stage('checkout'){
            steps {
                checkout scm
            }
        }
        stage('docker-run'){
            steps {
                    sh 'cd /var/php'
                    sh 'ls'
            }
        }
    }
}