Rails.application.routes.draw do
  root 'frontend#index', as: ''
  post 'authenticate', to: 'authentication#authenticate'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :snippets
      resources :users
      resources :links
    end
  end

  match '*path' => 'frontend#index', via: [:get]

end
