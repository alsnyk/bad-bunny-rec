FROM node:16  as installer
COPY . /bad-bunny-rec
WORKDIR /bad-bunny-rec

# RUN npm i -g typescript ts-node
RUN npm install --production --unsafe-perm 
# RUN npm dedupe
# RUN rm -rf frontend/node_modules

FROM node:14.1.0
WORKDIR /bad-bunny-rec
RUN apt-get update  && apt-get install curl -y && apt-get install sa-exim -y && apt-get install iputils-ping -y  && apt-get install nmap -y 
RUN addgroup --system --gid 1001 badbunny && \
    adduser badbunny --system --uid 1001 --ingroup badbunny
COPY --from=installer --chown=badbunny /bad-bunny-rec .
RUN mkdir logs && \
    chown -R badbunny logs
    # chown -R badbunny logs && \
    # chgrp -R 0 ftp/ . logs/ data/ i18n/ && \
    # chmod -R g=u ftp/ . logs/ data/ i18n/
USER 1001
RUN chmod +x ./startup.sh
EXPOSE 3000
CMD ["./startup.sh"]