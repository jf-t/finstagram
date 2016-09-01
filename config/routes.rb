Rails.application.routes.draw do

  namespace :api, defaults: {format: JSON} do
    resources :images
    resources :comments
    resource :likes, only: [:new, :destroy]
    resources :users, only: [:index, :new, :create, :show, :update]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: "static_pages#root"
end
