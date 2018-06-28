pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'ls /usr/local/bin'
                sh 'cd cakephp && composer update'
                sh 'ls /var/lib/jenkins/workspace/testpp/cakephp/'
                sh 'cat /var/lib/jenkins/workspace/testpp/cakephp/vendor/autoload.php'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cakephp/lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}