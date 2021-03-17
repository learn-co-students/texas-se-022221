class SongsController < ApplicationController

    set :views, "app/views/songs" #we dont know this
    set :method_override, true
    # index of all songs 
    get '/songs' do 
        @songs = Song.all
        # songs
        # binding.pry
        erb :index
    end

    # create a new song 
    # get form 
    get '/songs/new' do 
        # we are going to have to create an erb file
        @artists = Artist.all
        # binding.pry
        erb :new
    end

    # after user inputs some data
    post '/songs' do
        # we can access info from form through params
        # create a artist 
        # ActiveRecord
        # models 
        @song = Song.create(params) 
        redirect "/artists/#{@song.artist_id}"
       
    end
    # after form submitted
end