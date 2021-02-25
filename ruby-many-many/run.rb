require './appointment.rb'
require './doctor.rb'
require './patient.rb'

require 'pry'

doctor1 = Doctor.new("Nestor", "Hydration")
doctor2 = Doctor.new("Ian", "Ruby")
doctor3 = Doctor.new("Devante", "Dancing")
doctor4 = Doctor.new("Robert", "Coding")


patient1 = Patient.new("Bob")
patient2 = Patient.new("Jack")
patient3 = Patient.new("Jill")
patient4 = Patient.new("Marco")


app1 = Appointment.new(patient1, doctor1, "2-25-21")
app2 = Appointment.new(patient1, doctor2, "2-26-21")
app3 = Appointment.new(patient1, doctor3, "2-27-21")
app4 = Appointment.new(patient1, doctor4, "2-28-21")
app5 = Appointment.new(patient2, doctor1, "2-25-21")
app6 = Appointment.new(patient3, doctor2, "2-27-21")
app7 = Appointment.new(patient4, doctor3, "2-26-21")
app8 = Appointment.new(patient4, doctor4, "2-29-21")

binding.pry
puts "Run rb is loaded"