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
                try{
                    node{
                        sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd'
                        sh 'cd cakephp && php ./lib/Cake/Console/cake.php mycmd main2'
                    }
                } finally {
                    step([$class: 'LogParserPublisher', parsingRulesPath: 'jenkins-rule-logparser', useProjectRule: false])
                }
            }
        }
    }
}