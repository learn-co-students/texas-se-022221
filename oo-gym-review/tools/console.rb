# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here
g1 = Gym.new("Planet Fitness")
g2 = Gym.new("LA Fitness")
g3 = Gym.new("Gold's Gym")

l1 = Lifter.new("Raul", 15)
l2 = Lifter.new("Angelo", 100)
l3 = Lifter.new("Nestor", 1000)
l4 = Lifter.new("Luis", 200)
l5 = Lifter.new("Andre", 200)
l6 = Lifter.new("Emily", 500)

m1 = Membership.new(g1, l1, 25)
m1 = Membership.new(g2, l1, 30)
m2 = Membership.new(g1, l3, 25)
m3 = Membership.new(g1, l2, 25)
m4 = Membership.new(g1, l4, 25)
m5 = Membership.new(g1, l5, 25)
m6 = Membership.new(g1, l6, 25)

l1.sign_up(g3, 100) #new membership



binding.pry

puts "Gains!"
