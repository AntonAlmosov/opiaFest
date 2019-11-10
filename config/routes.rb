Rails.application.routes.draw do
  devise_for :users

    root :to => 'fest#index'
  
    resources :fest do
      collection do
        get :editData
        get :getData
        post :handleUpload
        post :handleForm
        get :createDay
        post :deleteDay
        post :createEvent
        post :deleteEvent
        get :getDescription
        post :handleDescription
        get :getMembers
        post :handleMember
        get :handleMemberCreation
        post :handleMemberUpload
        post :deleteMember
      end
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
