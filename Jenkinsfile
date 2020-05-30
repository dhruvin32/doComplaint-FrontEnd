node {

	 def app

    	stage('Clone Repository') {
			echo "Pooling git gepository..."
			git "https://github.com/dhruvin32/doComplaint-FrontEnd.git"
    	}

		stage('NPM Build'){
			sh 'npm install'
			sh 'ng build --prod --aot'
		}
	
    	stage('Build Image') {
		echo "Generating docker image..."
        	app = docker.build("dhruvin32/docomplaintfrontend")
    	}

    	stage('Push Image') {
			echo "Uploading docker image to docker hub..."
			docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
		    		app.push("${env.BUILD_NUMBER}")
		    		app.push("latest")
			}
    	}

}
