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
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php test app AllTests'
            }
        }
        stage('shell-test'){
            steps{
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd'
                sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd main2'
            }
            post {
                always{
                    step([
                            $class: 'WarningsPublisher',
                            consoleParsers: [
                                    [parserName: 'PHP Runtime'],
                            ],
                            canComputeNew: false,
                            canResolveRelativesPaths: false,
                            usePreviousBuildAsReference: true
                    ])
                }
            }
        }
    }
}