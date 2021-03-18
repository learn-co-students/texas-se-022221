class StudySessionsController < ApplicationController

    set :views, "app/views/study_sessions" #set base point for views

    # create a new studysession

    # get form 
    get '/study_sessions/new' do 
        # t.string :date
        # t.string :location
        # t.integer :length
        # t.integer :teacher_id
        # t.integer :student_id 
        @teachers = Teacher.all
        @students = Student.all
        erb :new
    end


    # submit form
    post '/study_sessions' do 
        # binding.pry
        params[:teacher].each do | teach |
            if !teach.nil?
                StudySession.create(date: params[:date], location: params[:location], length:params[:length].to_i, student_id: params[:student], teacher_id: teach)
            end
        end
        redirect "/students/#{params[:student]}"
    end

end