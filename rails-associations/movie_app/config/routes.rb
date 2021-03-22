Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :actors, only: [:index, :show, :create, :new]

# resources :movies

get '/movies/new', to: "movies#new"
post '/movies', to: "movies#create"
get 'movies/:id', to: "movies#show", as: "movie"
end
