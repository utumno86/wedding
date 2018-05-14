Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get '/', to: 'home#index'
  get 'about', to: 'pages#about'
  get 'ThingsToDo', to: 'pages#things'
  get 'PlacesToStay', to: 'pages#places'

  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
