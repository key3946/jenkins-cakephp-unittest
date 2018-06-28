pipeline {
    agent { dockerfile true }
    stages {
        stage('prepare-test') {
            steps {
                sh 'cd cakephp && composer update'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
            }
        }
        stage('unit-test'){
            steps{
                sh 'cd cakephp/app && ls && ls Vendor && php ../lib/Cake/Console/cake.php test app AllTests'
            }
        }
    }
}