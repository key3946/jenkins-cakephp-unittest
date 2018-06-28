FROM centos:6

RUN yum -y update && yum install -y epel-release wget unzip git && \
    yum install -y  --enablerepo=remi,remi-php56 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt
COPY php.ini /etc/
RUN

CMD /bin/bash