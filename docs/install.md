# Install Team Forward release of News

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

## Installing from archive
* Download the [Team Forward release](https://git.unistra.fr/team-forward/news/-/tags/15.4.0-tf) to your server.
* On your server, check if there is a folder called **nextcloud/apps/news**. If there is one, delete it.
* Extract the downloaded archive to the **nextcloud/apps/** folder.
* Remove the version from the extracted folder (rename **nextcloud/apps/news-15.4.0-tf/** to **nextcloud/apps/news/**
* Install the JavaScript and PHP dependencies and compile the JavaScript first. On your terminal, change into the **nextcloud/apps/news/** directory and run the following command (requires node >5.6, npm, curl, make and which):

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
* In a terminal go into the **nextcloud/apps/** directory and run the following command

        git clone https://git.unistra.fr/team-forward/news
        cd news
        make

* To get an overview over all existing tags run:

        git tag

* Activate the News app in the apps menu.

To update the News app change into the **nextcloud/apps/news/** directory using your terminal and then run:

        git pull --rebase origin master
        make

## Install Nextcloud with News (Team Forward Version) via Docker

        docker run -d -p 8080:80 mnassabain/nextcloud-news

View [Nextcloud Docker Hub](https://hub.docker.com/_/nextcloud) page for full info on setting up a Nextcloud Docker server.
