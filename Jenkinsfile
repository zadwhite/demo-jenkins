pipeline {
  agent {label "jenkins-worker"}

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Test') {
      agent {
        docker {
          image 'node:20-alpine'
        }
      }
      steps {
        sh 'node -v'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t hello-jenkins:${BUILD_NUMBER} .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker rm -f hello-jenkins || true
          docker run -d --name hello-jenkins -p 3000:3000 hello-jenkins:${BUILD_NUMBER}
        '''
      }
    }
  }
}