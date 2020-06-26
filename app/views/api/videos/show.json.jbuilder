# json.set! @video.id do
    json.extract! @video, :id, :title, :description, :video_type, :year, :length
    json.genre @genre_name
    json.video_url  @video.video_url.attached? ? url_for(@video.video_url) : ""
# end