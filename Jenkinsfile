pipeline {
    agent { dockerfile true }
    stages {
        stage('prepare-test') {
            steps {
                sh 'cd cakephp && composer update'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
            }
        }
        stage('unit-test') {
            steps {
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php test app AllTests'
            }
        }
        stage('shell-test') {
            steps {
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd'
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd main2'
                step([
                        canComputeNew: false, canResolveRelativePaths: false, categoriesPattern: '', consoleParsers: [[parserName: 'PHP Runtime']], defaultEncoding: '', excludePattern: '', healthy: '', includePattern: '', messagesPattern: '', unHealthy: ''

                ])
            }
        }
    }
}