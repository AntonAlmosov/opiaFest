Rails.application.routes.draw do
  get 'fest/index'
  get 'fest/edit'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
