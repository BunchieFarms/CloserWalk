Rails.application.routes.draw do
  get '/index' => 'welcome#index'
  root 'welcome#index'
  get '/about' => 'welcome#about'

  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
