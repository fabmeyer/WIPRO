# Build process
#cd wipro-v1 
#idyll build


#cd ../backend_jaxrs
#./gradlew  build

# Docker setup



docker image build -t althaus/wipro ./
#docker container create --name  wipro-container  althaus/wipro
#docker container start wipro-container


# docker image build -t althaus/wipro-image ./

#docker cp backend_jaxrs/build/libs/backend_jaxrs-1.2.1-SNAPSHOT.war wipro-container:/usr/local/tomcat/webapps/ROOT.war


#docker run  --publish 8080:8080 -it althaus/wipro #-v /usr/local/tomcat/webapps/ROOT.war
docker run -p 8080:8080 -d althaus/wipro 

#docker exec -it wipro-container bash


#wipro-tomcat
#   -v $"PWD"/buildlibs/wipro_backend.war:/usr/local/tomcat/webapps/wipro_backend.war \
#    wipro-tomcat




