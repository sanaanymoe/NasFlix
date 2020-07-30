json.extract! user, :id, :email 
json.myListVideoIds user.videos_on_list.pluck(:id)