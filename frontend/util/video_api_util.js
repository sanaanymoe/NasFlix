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


export const searchVideos = (keyWord) => (
    $.ajax({
        method: 'GET',
        url: `api/videos/?q${keyWord.toLowerCase()}`,

        // data: { keyword }
    })
)