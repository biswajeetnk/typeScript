var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YouTubeVideos = /** @class */ (function () {
    function YouTubeVideos(videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc) {
        var _this = this;
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoUrl = function () {
            return _this.videoUrl;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoViews = function () {
            return _this.videoViews;
        };
        this.getVideoLikes = function () {
            return _this.videoLikes;
        };
        this.getVideoDislikes = function () {
            return _this.videoDislikes;
        };
        this.getVideoDesc = function () {
            return _this.videoDesc;
        };
        this.videoId = videoId;
        this.videoUrl = videoUrl;
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoDesc = videoDesc;
    }
    return YouTubeVideos;
}());
//first child class inheriting parent class  - YouTubeVideos
var MusicVideo = /** @class */ (function (_super) {
    __extends(MusicVideo, _super);
    function MusicVideo(videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc, songName, albumName, singers, lyricist, productionHouse) {
        var _this = _super.call(this, videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc) || this;
        _this.songName = songName;
        _this.albumName = albumName;
        _this.singers = singers;
        _this.lyricist = lyricist;
        _this.productionHouse = productionHouse;
        _this.getSongName = function () {
            return _this.songName;
        };
        _this.getAlbumName = function () {
            return _this.albumName;
        };
        _this.getSingersName = function () {
            return _this.singers;
        };
        _this.getLyricistName = function () {
            return _this.lyricist;
        };
        _this.getProductionHouse = function () {
            return _this.productionHouse;
        };
        _this.songName = songName;
        _this.albumName = albumName;
        _this.singers = singers;
        _this.lyricist = lyricist;
        _this.productionHouse = productionHouse;
        return _this;
    }
    return MusicVideo;
}(YouTubeVideos));
//second child class inheriting parent class - YouTubeVideos
var TrailerVideo = /** @class */ (function (_super) {
    __extends(TrailerVideo, _super);
    function TrailerVideo(videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc, movieName, releaseDate, cast, directors, producers, channelSubscribed) {
        var _this = _super.call(this, videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc) || this;
        _this.movieName = movieName;
        _this.releaseDate = releaseDate;
        _this.cast = cast;
        _this.directors = directors;
        _this.producers = producers;
        _this.getMovieName = function () {
            return _this.movieName;
        };
        _this.getReleaseDate = function () {
            return _this.releaseDate;
        };
        _this.getCast = function () {
            return _this.cast;
        };
        _this.getDirectorNames = function () {
            return _this.directors;
        };
        _this.getProducerNames = function () {
            return _this.producers;
        };
        _this.movieName = movieName;
        _this.releaseDate = releaseDate;
        _this.cast = cast;
        _this.directors = directors;
        _this.producers = producers;
        return _this;
    }
    return TrailerVideo;
}(YouTubeVideos));
var OhHumsafar = new MusicVideo(1, "url", "Audio & Video song of Oh Humsafar", 1000000, 50000, 1000, "oh humsafar neha kakkar | latest Songs 2018 | neha kakkar songs 2018", "Oh Humsafar", "Humsafar", "Neha Kakkar & Tony Kakkar", "Manoj Muntashir", "T-Series");
var Gold = new TrailerVideo(1, "url", "Gold New Movie Trailer 2018", 1000000, 50000, 1000, "Its a Gold Movie", "Gold", "15th August 2018", "Akshay Kumar, Mouni Roy");
//Display the data in console
console.log("----------- Music Video -------------");
console.log("Video Id : " + OhHumsafar.getVideoId());
console.log("Video URL : " + OhHumsafar.getVideoUrl());
console.log("Video Title : " + OhHumsafar.getVideoTitle());
console.log("Video Views : " + OhHumsafar.getVideoViews());
console.log("Video Likes : " + OhHumsafar.getVideoLikes());
console.log("Video Dislikes : " + OhHumsafar.getVideoDislikes());
console.log("Video Description : " + OhHumsafar.getVideoDesc());
console.log("Song Name : " + OhHumsafar.getSongName());
console.log("Album Name : " + OhHumsafar.getAlbumName());
console.log("Singers : " + OhHumsafar.getSingersName());
console.log("Lyrics : " + OhHumsafar.getLyricistName());
console.log("Production House : " + OhHumsafar.getProductionHouse());
console.log("-------------XX------------------");
console.log("----------- Trailer Video -------------");
console.log("Trailer Video Id : " + Gold.getVideoId());
console.log("Video URL : " + Gold.getVideoUrl());
console.log("Trailer Name : " + Gold.getMovieName());
console.log("Release Date : " + Gold.getReleaseDate());
console.log("Cast : " + Gold.getCast());
console.log("Video Views : " + Gold.getVideoViews());
console.log("Video Likes : " + Gold.getVideoLikes());
