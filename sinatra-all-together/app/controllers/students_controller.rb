class StudentsController < ApplicationController

    set :views, "app/views/students" #set base point for views

    # index for ALL students
    get '/students' do
        @students = Student.all
        erb :index
    end

    get '/students/:id' do 
        # find student
        @student = Student.find(params[:id])
        # send to template
        erb :show
    end

 

end