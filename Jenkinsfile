pipeline {
    agent any

    stages {
        stage('Fetch code from Github') {
            steps {
                echo 'Cloning git repository into GCP VM..'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "rm -r node-app"'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "mkdir node-app"'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "cd node-app && git clone https://github.com/alfonso-m-g/simple-nodejs-app.git"'
            }
        }
        stage('Build application') {
            steps {
                echo 'Building application..'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "cd node-app/simple-nodejs-app && git checkout master && npm install"'
            }
        }
        stage('Deploy to GCP VM') {
            steps {
                echo 'Deploying....'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "cd node-app/simple-nodejs-app && pm2 --name hello start npm -- start"'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing....'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa jenkins@34.125.106.159 "curl -v http://34.125.106.159"'
            }
        }
    }
}
