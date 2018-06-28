pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'ls /usr/local/bin'
                sh 'cd cakephp && composer update && pwd &&ls /var/lib/jenkins/workspace/testpp@2/cakephp/'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cakephp/lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}