@videos.each do |video|
 
    # gen = Genre.find_by(video.genre_id)
    # name = gen[:name]

    json.set! video.id do
        json.extract! video, :id, :title, :description, :video_type, :year, :length, :genre
        
        json.video_url  video.video_url.attached? ? url_for(video.video_url) : ""
    end
end