class TeachersController < ApplicationController

    set :views, "app/views/teachers" #set base point for views

    # index for ALL teachers
    get '/teachers' do
        @teachers = Teacher.all
        erb :index
    end

    get '/teachers/:id' do 
        # find teacher
        @teacher = Teacher.find(params[:id])
        # send to template
        erb :show
    end

 

end