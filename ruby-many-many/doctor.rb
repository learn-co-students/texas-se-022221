class Doctor
    attr_accessor :name
    attr_reader :specialty

    @@all = [] 

    def initialize(name, specialty)
        @name = name
        @specialty = specialty

        self.class.all << self
    end
    # # getter
    # def name
    #     @name
    # end
    # # setter
    # def name=(new_name)
    #     @name = new_name
    # end

    def appointments
        Appointment.all.select do | app_object |
            app_object.doctor == self
        end
    end

    def patients
        # I want all patients that have an appointment with THIS doctor
        # array that has all patients
        # iterate and 'select' the patients who are  meeting with THIS doctor
    
        appointments.map do  | app_object | 
            app_object.patient
        end

    end

    def dates
        appointments.map do  | app_object | 
            app_object.date
        end
    end

    def self.all
        @@all
    end
end

puts "doctor file running"