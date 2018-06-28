pipeline{
    agent { dockerfile true }
    stages{
        stage('docker-run'){
            steps {
                    sh 'cd /var/php'
                    sh 'ls'
            }
        }
    }
}