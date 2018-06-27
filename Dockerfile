FROM centos:6

RUN yum -y update && yum install -y epel-release wget unzip git && \
    yum install -y  --enablerepo=remi,remi-php56 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt

RUN sh -c 'wget -c https://phar.phpunit.de/phpunit-3.7.38.phar -O phpunit.phar && chmod +x phpunit.phar && mv phpunit.phar /usr/local/bin/phpunit'
RUN mkdir /var/php -p
WORKDIR /var/php
COPY php.ini /etc/

#RUN php -r "readfile('https://getcomposer.org/installer');" > composer-setup.php ;\
#php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" ;\
#php composer-setup.php --filename=composer;\
#php -r "unlink('composer-setup.php');" ;\
#mv composer /usr/local/bin/composer

CMD /bin/bash