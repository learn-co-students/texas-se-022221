class CharactersController < ApplicationController

    # GET the FORM
    def new
        @character = Character.new
        @movies = Movie.all
        @actors = Actor.all
    end

    # Instructions for AFTER form is submitted
    def create 
        @character = Character.new(character_params)
        @character.save
        # redirect
        redirect_to @character.actor
    end

    # get the edit form
    def edit 
        @character = Character.find(params[:id])
        @movies = Movie.all
        @actors = Actor.all
    end

    # update 
    def update 
        # byebug
        @character = Character.find(params[:id])
        @character.update(character_params)

        redirect_to actor_path(@character.actor)
        # redirect_to "/actors/#{@character.actor.id}"
    end 

    def destroy
        @character = Character.find(params[:id])
        @character.destroy
        redirect_to actors_path
    end

    def character_params
        params.require(:character).permit(:name, :movie_id, :actor_id)
    end
end
