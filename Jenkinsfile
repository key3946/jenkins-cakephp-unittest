pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'ls /usr/local/bin'
                sh 'cd cakephp && composer update'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cd cakephp/app && ../lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}