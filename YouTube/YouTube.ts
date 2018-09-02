class YouTubeVideos
{
    protected videoId: number;
    protected videoUrl: string;
    protected videoTitle: string;
    protected videoViews: number;
    protected videoLikes: number;
    protected videoDislikes: number;
    protected videoDesc: string;

    constructor(videoId: number, videoUrl: string, videoTitle: string, videoViews: number,
                videoLikes: number, videoDislikes: number, videoDesc: string)
    {
        this.videoId = videoId;
        this.videoUrl = videoUrl;
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoDesc = videoDesc;
    }

    getVideoId = () =>
    {
        return this.videoId;
    }

    getVideoUrl = () =>
    {
        return this.videoUrl;
    }

    getVideoTitle = () =>
    {
        return this.videoTitle;
    }

    getVideoViews = () =>
    {
        return this.videoViews;
    }

    getVideoLikes = () =>
    {
        return this.videoLikes;
    }

    getVideoDislikes = () =>
    {
        return this.videoDislikes;
    }

    getVideoDesc = () =>
    {
        return this.videoDesc;
    }
}

//first child class inheriting parent class  - YouTubeVideos
class MusicVideo extends YouTubeVideos
{
        constructor(videoId: number, videoUrl: string, videoTitle: string, videoViews: number, videoLikes: number,
                    videoDislikes: number, videoDesc: string, private songName: string,
                    private albumName: string, private singers: string, private lyricist: string,
                    private productionHouse: string)
        {
            super(videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc);
            this.songName = songName;
            this.albumName = albumName;
            this.singers = singers;
            this.lyricist = lyricist;
            this.productionHouse = productionHouse;
        }

        getSongName = () =>
        {
            return this.songName;
        }

        getAlbumName = () =>
        {
            return this.albumName;
        }

        getSingersName = () =>
        {
            return this.singers;
        }

        getLyricistName = () =>
        {
            return this.lyricist;
        }

        getProductionHouse = () =>
        {
            return this.productionHouse;
        }
}

//second child class inheriting parent class - YouTubeVideos
class TrailerVideo extends YouTubeVideos
{
    constructor(videoId: number, videoUrl: string, videoTitle : string, videoViews : number, videoLikes : number,
        videoDislikes : number, videoDesc : string, private movieName: string,
        private releaseDate : string, private cast: string, private directors?: string,
        private producers ?: string, channelSubscribed ?: number)
    {
        super(videoId, videoUrl, videoTitle, videoViews, videoLikes, videoDislikes, videoDesc);
        this.movieName = movieName;
        this.releaseDate = releaseDate;
        this.cast = cast;
        this.directors = directors;
        this.producers = producers;
    }

    getMovieName = () =>
    {
        return this.movieName;
    }

    getReleaseDate = () =>
    {
        return this.releaseDate;
    }

    getCast = () =>
    {
        return this.cast;
    }

    getDirectorNames = () =>
    {
        return this.directors;
    }

    getProducerNames = () =>
    {
        return this.producers;
    }
}

let OhHumsafar = new MusicVideo(1, "url", "Audio & Video song of Oh Humsafar", 1000000, 50000, 1000,
                                "oh humsafar neha kakkar | latest Songs 2018 | neha kakkar songs 2018", "Oh Humsafar",
                                "Humsafar", "Neha Kakkar & Tony Kakkar", "Manoj Muntashir", "T-Series");

let Gold = new TrailerVideo(1, "url", "Gold New Movie Trailer 2018", 1000000, 50000, 1000, "Its a Gold Movie", "Gold", "15th August 2018", "Akshay Kumar, Mouni Roy");


//Display the data in console
console.log("----------- Music Video -------------");
console.log("Video Id : "+OhHumsafar.getVideoId());
console.log("Video URL : "+OhHumsafar.getVideoUrl());
console.log("Video Title : "+OhHumsafar.getVideoTitle());
console.log("Video Views : "+OhHumsafar.getVideoViews());
console.log("Video Likes : "+OhHumsafar.getVideoLikes());
console.log("Video Dislikes : "+OhHumsafar.getVideoDislikes());
console.log("Video Description : "+OhHumsafar.getVideoDesc());
console.log("Song Name : "+OhHumsafar.getSongName());
console.log("Album Name : "+OhHumsafar.getAlbumName());
console.log("Singers : "+OhHumsafar.getSingersName());
console.log("Lyrics : "+OhHumsafar.getLyricistName());
console.log("Production House : "+OhHumsafar.getProductionHouse());
console.log("-------------XX------------------")
console.log("----------- Trailer Video -------------");
console.log("Trailer Video Id : "+Gold.getVideoId());
console.log("Video URL : "+Gold.getVideoUrl());
console.log("Trailer Name : "+Gold.getMovieName());
console.log("Release Date : "+Gold.getReleaseDate());
console.log("Cast : "+Gold.getCast());
console.log("Video Views : "+Gold.getVideoViews());
console.log("Video Likes : "+Gold.getVideoLikes());