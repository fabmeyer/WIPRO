# we are extending everything from tomcat:8.0 image ...


FROM  tomcat:8.5.30-jre8 
MAINTAINER althaus
RUN rm -rf /usr/local/tomcat/webapps/ROOT
ADD tomcat-users.xml $CATALINA_HOME/conf

COPY /backend_jaxrs/build/libs/backend_jaxrs-1.2.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
