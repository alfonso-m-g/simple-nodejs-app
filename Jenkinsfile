pipeline {
    agent any

    stages {
        stage('Fetch code from Github') {
            steps {
                echo 'Cloning git repository into GCP VM..'
                sh 'ssh pachi@192.168.100.199 "rm -r node-app"'
                sh 'ssh pachi@192.168.100.199 "mkdir node-app"'
                sh 'ssh pachi@192.168.100.199 "cd node-app && git clone https://github.com/alfonso-m-g/simple-nodejs-app.git"'
            }
        }
        stage('Build application') {
            steps {
                echo 'Building application..'
                sh 'ssh pachi@192.168.100.199 "cd node-app/simple-nodejs-app && git checkout development && npm install"'
            }
        }
        stage('Deploy to GCP VM') {
            steps {
                echo 'Deploying....'
                sh 'ssh pachi@192.168.100.199 "cd node-app/simple-nodejs-app && pm2 --name hello start npm -- start"'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing....'
                sh 'ssh pachi@192.168.100.199 "curl -v http://192.168.100.199:8081"'
            }
        }
    }
}
