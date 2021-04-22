FROM nextcloud:21.0.1-apache

RUN apt-get update; \
    apt-get install -y --no-install-recommends \
        make curl nodejs npm \
    ;

RUN set -ex; npm i npm@latest -g;

COPY . /usr/src/nextcloud/custom_apps/news/

# Install news app
RUN set -ex; cd /usr/src/nextcloud/custom_apps/news/; make;

# Download & install socialsharing apps (fb, twitter & email)
# Ou plutôt laisser le user installer depuis l'app store?
# RUN curl https://github.com/nextcloud/socialsharing/archive/refs/tags/v2.2.0.tar.gz \
#     -L -o /socialsharing.tar.gz; \
#     tar -xf /socialsharing.tar.gz --directory /; \
#     cd /socialsharing-2.2.0/socialsharing_facebook && make; \
#     cd /socialsharing-2.2.0/socialsharing_twitter  && make; \
#     cd /socialsharing-2.2.0/socialsharing_email    && make; \
#     cp -R /socialsharing-2.2.0/socialsharing_facebook /usr/src/nextcloud/custom_apps/; \
#     cp -R /socialsharing-2.2.0/socialsharing_twitter  /usr/src/nextcloud/custom_apps/; \
#     cp -R /socialsharing-2.2.0/socialsharing_email    /usr/src/nextcloud/custom_apps/;
