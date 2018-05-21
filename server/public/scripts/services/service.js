app.service('ProofService', ['$http', function ($http) {
    let self = this;

    let apiKey = process.env.PROOF_KEY;

    self.login = function (){
        $http ({
            method: 'POST'
        })
    }
    
}])