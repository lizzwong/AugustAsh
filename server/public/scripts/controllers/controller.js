const ProofController = app.controller('ProofController', ['ProofService', function (ProofService) {

    let self = this;
    self.login = ProofService.login;
    self.userObject = ProofService.userObject;
    self.getVideos = ProofService.getVideos;
    
}])