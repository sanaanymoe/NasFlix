class Api::VideosController < ApplicationController
    # before_action :require_login, only: [:index, :show]

    def index
        @videos = Video.all 
        
        render "api/videos/index"
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
end
