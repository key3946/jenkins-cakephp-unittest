pipeline{
    agent { dockerfile true }
    stages{
        stage('docker-run'){
            steps {
                    sh './cakephp/lib/Cake/Console/cake'
                    sh 'ls'
            }
        }
    }
}