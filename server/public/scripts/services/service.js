app.service('ProofService', ['$http','$route','$location', function ($http, $route, $location) {
    let self = this;

   let proofKey = ''

   self.userObject = {
    user:{ },
    auth_token: '',
    videos: [ ],
    newVideo: { },
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

    //This should get a page of ten videos back
    self.getVideos = function (){
        // console.log('Video button', self.userObject.auth_token);
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


    //This function turns a string into a machine readable version
    self.titleToSlug = function (string) {
        return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
    
    //This function will add a video 
    self.addVideo = function (){
        // console.log('Add video button', self.userObject.newVideo);
        $http({
            method: 'POST',
            url:`/proof/newvideo`,
            data: {
                auth_token: self.userObject.auth_token,
                title: self.userObject.newVideo.title,
                url: self.userObject.newVideo.url,
                slug: self.titleToSlug(self.userObject.newVideo.title),
            }
        })
        .then(function(response){
            console.log('Success!', response.data);
        })
        .catch(function(error){
            console.log('Error adding video', error); 
        })
    }

    //This function is to increment a video's votes

    self.videoVote = function (){
        $http({
            method: 'POST',
            url: '/proof/videovote',
            data: {
                video_id: `bc214311-7b9e-49d8-91ee-4ca38850817b`,
                auth_token: self.userObject.auth_token,
            }
        })
        .then(function(response){
            console.log('Success!', response);   
        })
        .catch(function(error){
            console.log('Error adding vote', error);
            
        })
    }

    self.getVotes = function () {
        $http({
            method: 'PUT',
            url: '/proof/videovote',
            data: {
                video_id: `bc214311-7b9e-49d8-91ee-4ca38850817b`,
                auth_token: self.userObject.auth_token,
            }
        })
            .then(function (response) {
                console.log('Success!', response);
            })
            .catch(function (error) {
                console.log('Error adding vote', error);

            })
    }
    

    self.addView = function () {
        console.log('Add a view button');
        
        $http({
            method: 'POST',
            url: '/proof/videoview',
            data: {
                video_id: `bc214311-7b9e-49d8-91ee-4ca38850817b`,
                auth_token: self.userObject.auth_token,
            }
        })
            .then(function (response) {
                console.log('Success!', response);
            })
            .catch(function (error) {
                console.log('Error adding view', error);

            })
    }

    self.getViews = function () {
        console.log('Get views button');
        
        $http({
            method: 'PUT',
            url: '/proof/videoview',
            data: {
                video_id: `bc214311-7b9e-49d8-91ee-4ca38850817b`,
                auth_token: self.userObject.auth_token,
            }
        })
            .then(function (response) {
                console.log('Success!', response);
            })
            .catch(function (error) {
                console.log('Error getting views', error);

            })
    }
}])