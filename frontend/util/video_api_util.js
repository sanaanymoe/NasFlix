export const fetchAllVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/videos'
    })
);


export const fetchVideo = (videoId) => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}`,
    })
);


export const searchVideos = (keyword) => (
    $.ajax({
        method: 'GET',
        url: "/api/videos",
        data: { keyword }
    })
)

export const filterByGenre = genreName => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/genre`,
        data: { genreName }
    })
)