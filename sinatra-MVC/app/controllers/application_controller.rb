class ApplicationController < Sinatra::Base

    set :views, "app/views" #we dont know this

    get '/' do          #get request
        "Hello World"
    end

    get '/time' do 
        "Time.now"
    end

    get '/add/:num1/:num2' do 
        # send_this = "Whats up, Lord Of the Strings!"
        # send_this
        answer  = params[:num1].to_i + params[:num2].to_i
        "#{params[:num1]} + #{params[:num2]} = #{answer}"
    end


   

end
