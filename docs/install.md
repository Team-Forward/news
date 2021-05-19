# Installation/Update

## Dependencies
* PHP >= 7.2
* Nextcloud 20
* libxml >= 2.7.8
You also need some PHP extensions:
* json
* simplexml
* xml
* dom
* curl
* iconv

## Supported Databases
* PostgreSQL >= 10
* MariaDB >= 10.2
* MySQL >= 8.0
* SQLite (discouraged)

Also see the [Nextcloud documentation](https://docs.nextcloud.com/server/stable/admin_manual/configuration_database/linux_database_configuration.html?highlight=database). Oracle is currently not supported by news.

## Performance Notices
* Use MySQL/MariaDB or PostgreSQL for better database performance
* Use the [updater script to thread and speed up the update](https://github.com/nextcloud/news-updater)

## Before you install/update the News app
Before you install the app do the following:
* Check that your **nextcloud/data/** directory is owned by your web server user and that it is write/readable
* Check that your installation fulfills the [requirements listed in the README section](https://github.com/nextcloud/news#dependencies)
* [Set up Nextcloud Background Jobs](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) to enable feed updates.

Then proceed to install the app either from an archive (zip/tar.gz) or clone it from the repository using git

## Installing from the [app store](https://apps.nextcloud.com/apps/news)
This is the easiest solution: Simply go the the apps page (section: "Multimedia") and enable the News app

## Installing from archive
* Go to the [Nextcloud News GitHub releases page](https://github.com/nextcloud/news/releases) and download the latest release/archive to your server
* Starting with 8.0.0, there are two different releases: **news.tar.gz** and **Source code**. The first one requires no additional steps, the second one requires you to install the dependencies and compile the JavaScript. Choose the first one if you don't want to work on the code. If you want to install a version prior to 8.0.0, choose the **Source code** download.
* On your server, check if there is a folder called **nextcloud/apps/news**. If there is one, delete it.
* Extract the downloaded archive to the **nextcloud/apps/** folder.
* Remove the version from the extracted folder (e.g. rename **nextcloud/apps/news-4.0.3/** to **nextcloud/apps/news/**
* If you are a version greater than or equal to 8.0.0 and downloaded the **Source code** zip or tar.gz, you need to install the JavaScript and PHP dependencies and compile the JavaScript first. On your terminal, change into the **nextcloud/apps/news/** directory and run the following command (requires node >5.6, npm, curl, make and which):

        sudo -u www-data make  # www-data might vary depending on your distribution

* Finally make sure that the **nextcloud/apps/news** directory is owned by the web server user

        sudo chown -R www-data:www-data nextcloud/apps/news  # www-data:www-data might vary depending on your distribution

* Activate the **News** app in the apps menu

## Installing from Git (development version)

### Build Dependencies
These Dependencies are only relevant if you want to build the source code:
* make
* which
* Node.js >= 6
* npm
* composer



* Install PHP dependencies

        sudo apt install apache2 mysql-server php7.4 libapache2-mod-php7.4
        php7.4-gd php7.4-json php7.4-mysql php7.4-curl php7.4-mbstring
        php7.4-intl php-imagick php7.4-xml php7.4-zip php7.4-dom

### Install Nextcloud
* Clone the repository

        git clone https://github.com/nextcloud/server.git --branch stable20
        cd server
        git submodule update --init

* Install viewer app
        
        git clone https://github.com/nextcloud/server.git --branch stable20
        cd server
        git submodule update --init

* Configure MySQL
        
        create user ‘nextcloud’@’localhost’ identified by ‘nextcloud’;
        create database nextcloud;
        grant all privileges on nextcloud.* to ‘nextcloud’@’localhost’;
        flush privileges;
        exit;
        sudo service mysql restart

* You can now launch nextcloud
        
        cd server
        php -S localhost:8080

### Install Nextcloud News
* Cloner news dans les applications
        
        cd server/apps
        git clone https://git.unistra.fr/team-forward/news

* Finir l'installation
        
        cd news
        make

* You can now launch Nextcloud with the news app
        
        cd ../..
        php -S localhost:8080
        


        

        

        



        

 
