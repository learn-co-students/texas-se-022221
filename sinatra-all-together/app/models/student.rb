class Student < ActiveRecord::Base
    has_many :study_sessions
    has_many :teachers,  through: :study_sessions
end