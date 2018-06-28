pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cakephp/lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}