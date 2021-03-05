Artist.destroy_all

angelo = Artist.new(name: "Angelo", age:28)
angelo.save
Artist.create(name: "Raul", age:28)
Artist.create(name: "Ian", age:28)
Artist.create(name: "Celeste", age:28)
Artist.create(name: "Hadi", age:28)


Song.create(name: "Pray", artist_id: angelo.id)


puts "seed file loaded"