pipeline {
    agent { dockerfile true }
    stages {
        stage('docker-run') {
            steps {
                sh 'php -v'
                sh 'cd cakephp/app/Vendor && pwd && wget http://getcomposer.org/composer.phar && php composer.phar install && ls -l /usr/share/php/ && chmod 777 /usr/share/php && mkdir /usr/share/php/PHPUnit && cp ./PHPUnit/* /usr/share/php/PHPUnit/'
                sh 'ls /usr/share/php/PHPUnit/'
                sh 'chmod +x cakephp/lib/Cake/Console/cake'
                sh 'cakephp/lib/Cake/Console/cake test app AllTests'
            }
        }
    }
}