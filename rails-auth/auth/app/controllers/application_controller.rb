class ApplicationController < ActionController::Base


    def current_user
       @user =  User.find_by(id: session[:id])
    end

    def logged_in?
        !!current_user 
    end

    def not_logged_in
        redirect_to login_path unless logged_in?
    end

    # def nacho_cheese
    #     # if session and params do not match

    # end
end
