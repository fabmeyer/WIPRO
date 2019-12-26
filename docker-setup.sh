# Frontend build process (can be omitted when no changes have been made in frontend)
#cd wipro-v1 
#npm install
#idyll build
#npm audit fix
# Copying frontend into backend (start page of tomcat)
#cd wipro-v1
#cp -r build/ ../backend_jaxrs/src/main/webapp


# Building Java backend
cd ../backend_jaxrs
./gradlew  build
cd ../

# Docker setup
# Make server available at localhost:8080
sudo docker image build -t althaus/wipro ./
sudo docker run -p 8080:8080 -d althaus/wipro 



