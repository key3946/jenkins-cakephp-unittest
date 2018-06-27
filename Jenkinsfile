node{
    stage 'git clone'
    git 'https://github.com/key3946/jenkins-cakephp-unittest.git'
}

pipeline{
    agent{
        docker {image'phpunit/phpunit:5.3.2'}
    }
    stages{
        stage('Test'){
            steps{
                sh 'phpunit --version'
            }
        }
    }
}