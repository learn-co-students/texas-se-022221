class ApplicationController < Sinatra::Base

    set :views, "app/views" #set base point for views

    get '/' do          #get request with NO template
        "Hello World"
    end

 

end
