app.service('ProofService', ['$http','$route','$location', function ($http, $route, $location) {
    let self = this;

   let proofKey = ''

   self.userObject = {
    user:{ },
    auth_token: '',
    videos: [],
   }

    self.login = function (){
        //this send the user and password to the router
        console.log('login button');
        $http ({
            method: 'POST',
            url: `/proof`,
        })
        .then(function(response){
            //this populates the userObject with the returning data
            self.userObject.user = response.data;
            // console.log('User', self.userObject.user);
            
            //this selects the Auth Token from the User object.
            self.userObject.auth_token = self.userObject.user.data.attributes.auth_token;
            // console.log('Token:', self.userObject.auth_token);
            $location.path('/topten');
        })
        .catch(function(error){
            console.log('error', error); 
        })
    }

    self.getVideos = function (){
        console.log('Video button', self.userObject.auth_token);
        $http({
            method: 'PUT',
            url: `/proof/videos`,
            data: {
                auth_token: self.userObject.auth_token
            }
        })
        .then(function(response){
            //this populates the userObject.video with the returning data
            self.userObject.videos = response.data;
            console.log('Videos', self.userObject.videos);
            
        })
        .catch(function(error){
            console.log('error', error); 
        })
        
    }

    self.addVideo = function (){
        console.log('Add video button');
        
    }
    
}])