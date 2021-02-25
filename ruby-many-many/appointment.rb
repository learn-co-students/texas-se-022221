
class Appointment

    attr_reader :patient, :doctor, :date

    @@all = []

    def initialize(patient, doctor, date)
        @patient = patient
        @doctor = doctor
        @date = date

        self.class.all <<  self
    end

    def self.all
        @@all
    end



# >>>>>>>>>>>>> EXTRA DEEP DIVE <<<<<<<<<<<<<<<<<<<<
    # edit appointment 
    # only the doctor relating to THAT appointment can edit date 
    # only the patient relating to THAT appointment can edit date 

end


puts "appointment file running"