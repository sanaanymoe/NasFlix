class Api::VideosController < ApplicationController
    # before_action :require_login, only: [:index, :show]

    def index
        if params[:keyword]
            
            @videos = Video.search_by_keyword(params[:keyword])
            # debugger
            if @videos.length != 0
                # debugger
                # @videos
                render "api/videos/index"
            else
                # debugger
                render json: ["Couldn't find a matching for your search"], status: 401
            end 
        else    
            @videos = Video.all 
            render "api/videos/index"
        end 
        
    end


    def show
        @video = Video.find(params[:id])

        if @video
            @genre_name = Genre.find(@video.genre_id).name
            render "api/videos/show"
        else 
            render json: @video.errors.full_messages, status: 422
        end
    end 

    def genre 
        # debugger
        genre_id = Genre.find_by(name: params[:genreName]).id
        @videos = Video.where(genre_id: genre_id)
        render "api/videos/index"
    end 
end
