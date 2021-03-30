class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # byebug
    @user = User.new(params["username"])
    if @user.valid_name?
      session[:username] = @user.username
      session[:score] = 0
      redirect_to "/users/1"
    else
      # let user know their username is too small 
      flash[:alert] = "Username MUST be three characters or more"
      redirect_to "/users/new"
    end
    
  end


  def show
    @username = session[:username]
    @score = session[:score]
  end
end