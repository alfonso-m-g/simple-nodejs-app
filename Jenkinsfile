pipeline {
    agent any

    stages {
        stage('Fetch code from Github') {
            steps {
                echo 'Cloning git repository into remote server..'
                withCredentials([string(credentialsId: 'COMMAND', variable: 'command'),
                                 string(credentialsId: 'SSH_USER', variable: 'USER'),
                                 string(credentialsId: 'SERVER_IP', variable: 'SERVER_IP')]) 
                {
                    //sh '${command} "ssh ${USER}@${SERVER_IP} -p 2222 "pm2 delete all""'
                    sh '${command} "ssh ${USER}@${SERVER_IP} -p 2222 "rm -r simple-nodejs-app""'
                    sh '${command} "ssh ${USER}@${SERVER_IP} -p 2222 "git clone https://github.com/alfonso-m-g/simple-nodejs-app.git""'
                }
                
            }
        }

        stage('Build app') {
            steps {
                echo 'Cloning git repository into remote server..'
                withCredentials([string(credentialsId: 'COMMAND', variable: 'command'),
                                 string(credentialsId: 'SSH_USER', variable: 'USER'),
                                 string(credentialsId: 'SERVER_IP', variable: 'SERVER_IP')]) 
                {
                    sh '${command} "ssh ${USER}@${SERVER_IP} -p 2222 "./scripts/build-app.sh""'
                }
                
            }
        }

        stage('Deploy app') {
            steps {
                echo 'Cloning git repository into remote server..'
                withCredentials([string(credentialsId: 'COMMAND', variable: 'command'),
                                 string(credentialsId: 'SSH_USER', variable: 'USER'),
                                 string(credentialsId: 'SERVER_IP', variable: 'SERVER_IP')]) 
                {
                    sh '${command} "ssh ${USER}@${SERVER_IP} -p 2222 "./scripts/deploy-app.sh""'
                }
                
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                withCredentials([string(credentialsId: 'LOCAL_IP', variable: 'IP'),
                                 string(credentialsId: 'SSH_USER', variable: 'USER')]) 
                {
                    sh 'ssh ${USER}@${IP} "curl -v http://127.0.0.1:8081"'
                }
            }
        }
    }
}
