class Teacher < ActiveRecord::Base
    has_many :study_sessions
    has_many :students,  through: :study_sessions
end