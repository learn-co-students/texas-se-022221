class UsersController < ApplicationController
    before_action :current_user, only: [:show]
    before_action :not_logged_in, only: [:show] 
    def new 
        @user = User.new
    end

    def create 
        # byebug
        # create an instance of user
        @user = User.new(user_params)
            # check if valid
        if @user.valid? 
            # if true
            # create session
            @user.save
            session[:id] = @user.id
            redirect_to @user
            # if false
        else
            # show errors
            flash[:errors] = @user.errors.full_messages
            # come back to form
            redirect_to new_user_path
        end
    end

    def show
        # @user = User.find(params[:id]) 
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
