class MoviesController < ApplicationController

    def new 
        @movie = Movie.new
    end

    def create
        # byebug
        @movie = Movie.create(movie_params)
        redirect_to movie_path(@movie)
    end

    def show
        @movie = Movie.find(params[:id]) 
    end

    def movie_params
        params.require(:movie).permit(:length, :release_date, :title)
        # params.require(:movie).permit!
    end
end
