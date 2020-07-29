class Api::ProfilesController < ApplicationController

    # before_action :require_login, only: [:index, :create, :update, :show, :destroy]

    def index
        @profiles = current_user.profiles
        render :index
    end 

    def create
        # debugger 
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id 
        if @profile.save
            render :show
        else 
            render json: @profile.errors.full_messages, status: 422
        end 
    end 

    def show
        @profile = Profile.find_by(id: params[:id])

        if @profile
            render :show
        else 
            render json: ["No User Found"], status: 404
        end 
    end 

    def update
        @profile = Profile.find_by(id: params[:id])
        @profile.update(profile_params)

        if @profile
            render :show
        else 
            render json: @profile.errors.full_messages, status: 422
        end 
    end

    def destroy
        @profile = Profile.find_by(id: params[:id])
        if @profile.destroy
            render json: ["Done"], status: 200
        else
            render json: @profile.errors.full_messages, status: 404
        end
    end 

    private
    def profile_params
        params.require(:profile).permit(:title)
    end 

end
