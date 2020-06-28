



export const selectVideosByType = (videos) => {
    // debugger
    let movies = [];
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].video_type === "movie") {
            movies.push(videos[i]);
        }
    }

    return movies;
}








































// export const findType = (path) => {

//     if (path.includes('/home/movies')) {
//         return "movie";
//     } else if (path.includes('/home/tvshows')) {
//         return 'show';
//     } else {
//         return "";
//     }
// }

// export const fetchVideosByType = (videos, type)=>{
//     const videosArr = Object.values(videos);
//     let movies = [];
//     let shows = [];
//     for(let i = 0; i < videosArr.length; i++){
//         if(videosArr[i].videoType === "movie"){
//             movies.push(videosArr[i]);
//         } else {
//             shows.push(videosArr[i])
//         }
//     }  

//     return newVideoArr;
// }