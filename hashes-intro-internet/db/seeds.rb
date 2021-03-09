require 'pry'
require 'net/http'
require 'open-uri'
require 'json'

Pokemon.destroy_all
Trainer.destroy_all 

trainer1 = Trainer.create(name:"Donovan")


url = "https://pokeapi.co/api/v2/pokemon" #just a string 
uri = URI.parse(url) #prepare request
response = Net::HTTP.get_response(uri) #prepare response
data = JSON.parse(response.body)

data["results"].each do | poke | 
    Pokemon.create(name: poke["name"], trainer_id: trainer1.id)
end


# ------------------------- Another way to do the same thing ---------------------
url2 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
require "httparty"
response2 = HTTParty.get(url2)
trainer2  = Trainer.create(name: "Nestor")
response2["results"].each do | poke | 
    Pokemon.create(name: poke["name"], trainer: trainer2)
end

# binding.pry 

puts "Seed file has ran"
