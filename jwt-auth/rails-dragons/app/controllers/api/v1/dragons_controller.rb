class Api::V1::DragonsController < ApplicationController
    before_action :logged_in?
    def index 
        dragons = Dragon.all
        render json: dragons
    end
end
