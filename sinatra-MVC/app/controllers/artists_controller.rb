class ArtistsController < ApplicationController

    set :method_override, true
    # index route 
    # all of one resource
    get '/artists' do 
        @artists = Artist.all
        # artists
        # binding.pry
        erb :index
    end
    # show route 
    # one specific resource 
    get '/artists/:id' do
        @artist = Artist.find(params[:id])
        erb :show
    end

    # creating a resource
    #  ok so what do I do? 
    # get the form so user can input some data
    get '/create_artist' do 
        # we are going to have to create an erb file
        erb :create_artist
    end

    # after user inputs some data
    post '/artists' do
        # we can access info from form through params
        # create a artist 
        # ActiveRecord
        # models 
        @artist = Artist.create(name: params['artist_name'], age: params['artist_age']) 
        # binding.pry
        # erb :show
        redirect "/artists/#{@artist.id}"
    end

    # updating a resource
    get '/artists/:id/edit' do 
        @artist = Artist.find(params[:id])
        erb :edit
    end

    patch '/artists/:id' do 
        # find artist
        @artist = Artist.find(params[:id])
        # update artist
        @artist.update(name: params['artist_name'],  age: params['artist_age'])
        # @artist.name = params['artist_name']
        # @artist.age = params['artist_age']
        # # @artist.update()
        # @artist.save
        
        # redirect to show page
        erb :show 
    end

    # deleting a resource
    delete '/artists/:id' do 
        # seek  and destroy 
        # find it 
        @artist = Artist.find(params[:id])
        @artist.destroy
        redirect "/artists"
        # destroy it :( 
    end


end