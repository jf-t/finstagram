Rails.application.routes.draw do

  namespace :api, defaults: {format: JSON} do
    resources :images
    resources :comments
    resource :likes, only: [:new, :destroy]
    resource :user, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: "static_pages#root"
end
