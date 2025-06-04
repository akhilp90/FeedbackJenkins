pipeline {
    agent any

    environment {
        SONARQUBE_ENV = 'sonarqube' // Change to your SonarQube server name in Jenkins config
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/akhilp90/FeedbackJenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run lint || true'
                    } else {
                        bat 'cmd /c "npm run lint || exit 0"'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${env.SONARQUBE_ENV}") {
                    script {
                        if (isUnix()) {
                            sh 'sonar-scanner'
                        } else {
                            bat 'sonar-scanner'
                        }
                    }
                }
            }
        }
    }
}
