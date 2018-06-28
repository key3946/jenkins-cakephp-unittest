pipeline{
    agent { dockerfile true }
    stages{
        stage('docker-run'){
            steps {
                    sh 'php -v'
                    sh 'cd cakephp/app/Vendor && pwd && wget http://getcomposer.org/composer.phar && php composer.phar install'
                    sh 'cakephp/lib/Cake/Console/cake test core AllTests'
            }
        }
    }
}