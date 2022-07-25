pipeline {
    agent any
    tools {
      nodejs '16.15.1'
    }
    stages {
        stage('npm install') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Run test') { 
            steps {
                echo '####THIS STEP RUN TEST'
            }
        }
        stage('npm build') { 
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') { 
            steps {
                echo 'deploy to somewhere'
            }
        }
    }
}


