# class Api::ListsController < ApplicationController

#     def create
#         @listing = List.new(user_id: current_user.id, video_id: params[:video_id])
#         # debugger 
#         @listing.user_id = current_user.id

#         if @listing.save
#             # debugger
#             render :show
#         else 
#             render json: @list.errors.full_messages, status: 422
#         end 
#     end 

#     # def show
#     #     @list = List.find_by(id: params[:id])
#     #     if @list 
#     #         render :show
#     #     else 
#     #         render json: ["Not Found"], status: 404
#     #     end 
#     # end 

#     # def index
#     #     render :index
#     # end

#     # def update 
#     #     @list = List.find_by(id: params[:id])
#     #     @list.update(list_params)

#     #     if @list 
#     #         render :show
#     #     else 
#     #         render json: @list.errors.full_messages, status: 422
#     #     end 
#     # end 

#     def destroy
#         @list = List.find_by(id: params[:id])
#         if @list.destroy
#             render json: ["Done"], status: 200
#         else 
#             render json: @list.errors.full_messages, status: 404
#         end 
#     end 

#     private
#     def list_params
#         params.require(:list).permit(:video_id)
#     end 

# end


class Api::ListsController < ApplicationController
    def create
       listing = List.new(user_id: current_user.id, video_id: params[:video][:id]) 
    
        if listing.save 
         
            @mylist = listing
            render '/api/lists/index'
        else
            render json: ['Video does not exist'], status: 404
        end
    end

    def index
        @mylist = current_user.mylist
    end

    def destroy    
        @myList = List.find_by(user_id: current_user.id, video_id: params[:video_id])        
        @myList.destroy
    end
end
