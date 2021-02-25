class Patient 

    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name

        @@all << self
    end

    def appointments
        Appointment.all.select do | app_object |
            app_object.patient == self
        end
    end

    def doctors
        appointments.map do  | app_object | 
            app_object.doctor
        end
    end

    def self.most_appointments
        count = 0
        selected_patient = Patient.all.first
        self.all.each do | patient |
            if patient.appointments.size > count
                count = patient.appointments.size
                selected_patient = patient
            end
        end
        selected_patient
    end

    def self.all 
        @@all
    end
end

puts "patient file running"