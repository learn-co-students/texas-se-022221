class GamesController < ApplicationController

  def create
    # byebug
    if params[:name].downcase == "beyonce"
      session[:score] += 1
      flash[:correct] = "Yay! You say her name"
    else
      session[:score] -= 1
      flash[:youreanidiot] = "Jim carrey says youre an idiot"
    end

    redirect_to "/users/1"
  end

end
