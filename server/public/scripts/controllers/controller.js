const ProofController = app.controller('ProofController', ['ProofService', function (ProofService) {

    let self = this;
    self.login = ProofService.login;
    self.userObject = ProofService.userObject;
    self.getVideos = ProofService.getVideos;
    self.addVideo = ProofService.addVideo;
    
    self.videoVote = ProofService.videoVote;
    self.getVotes = ProofService.getVotes;

    self.addView = ProofService.addView;
    self.getViews = ProofService.getViews;
    
    
}])