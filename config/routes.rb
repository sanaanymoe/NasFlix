Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :profiles
    resource :session, only: [:create, :destroy]

    resources :lists, only:[:create, :show, :update, :destroy] do 
      resources :videos, only: [:index]
    end

    resources :videos, only: [:index, :show] do 
      collection do 
        get 'genre'
      end 
    end
  end
end
