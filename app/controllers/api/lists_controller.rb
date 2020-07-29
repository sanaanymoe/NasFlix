class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)
        # debugger 
        @list.user_id = current_user.id

        if @list.save
            # @mylist = listing
            render :show
        else 
            render json: @list.errors.full_messages, status: 422
        end 
    end 

    def show
        @list = List.find_by(id: params[:id])
        if @list 
            render :show
        else 
            render json: ["Not Found"], status: 404
        end 
    end 

    def update 
        @list = List.find_by(id: params[:id])
        @list.update(list_params)

        if @list 
            render :show
        else 
            render json: @list.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @list = List.find_by(id: params[:id])
        if @list.destroy
            render json: ["Done"], status: 200
        else 
            render json: @list.errors.full_messages, status: 404
        end 
    end 

    private
    def list_params
        params.require(:list).permit(:video_id)
    end 

end
