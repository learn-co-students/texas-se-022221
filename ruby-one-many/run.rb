require './artist.rb'
require './song.rb'

require 'pry'


angelo = Artist.new("Angelo")
nestor = Artist.new("Nestor")
donovan = Artist.new("Donovan")


song1 = Song.new("I love Ruby", donovan)
song2 = Song.new("Hydration", nestor)
song3 = Song.new("Pray", angelo)
binding.pry
0
puts "Run rb file has run"