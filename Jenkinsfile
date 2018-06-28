pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'ls /usr/local/bin'
                sh 'ls /usr/local/bin/phpunit'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cakephp/lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}