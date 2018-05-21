app.service('ProofService', ['$http', function ($http) {
    let self = this;

    // const apiKey = process.env.PROOF_KEY;

    self.login = function (){
        console.log('login button');
        $http ({
            method: 'POST',
            url: `/proof`,
            // body: {
            //     email: `lizzwong@gmail.com`,
            //     password: `slogan brush shiver`
            // },

            // function (error, response, body){
            //     console.log('status', response.statusCode);
            //     console.log('Headers', JSON.stringify(response.headers));
            //     console.log('Response', body);
            
            // }

        })
        .then(function(response){
            console.log("Login", response);
            
        })
        .catch(function(error){
            console.log('error', error);
            
        })
    }
    
}])