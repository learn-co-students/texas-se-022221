Artist.destroy_all 
Song.destroy_all

angelo = Artist.create(name: "Angelo", age:28)
hadi = Artist.create(name: "Hadi", age:25)
emily = Artist.create(name: "Emily", age:28)
Artist.create(name: "Cori", age:28)
Artist.create(name: "Devante", age:28)
Artist.create(name: "Jose", age:28)
Artist.create(name: "Ian", age:28)
Artist.create(name: "Donovan", age:28)


Song.create(title: 'American Woman', artist_id: hadi.id)
Song.create(title: 'The Rockstar Song by Smashmouth', artist_id: hadi.id)
Song.create(title: 'Deja Vu', artist_id: emily.id)
Song.create(title: 'Barracuda', artist_id: emily.id)
Song.create(title: 'Between the sheets', artist_id: hadi.id)
Song.create(title: 'Dixieland Delight', artist_id: hadi.id)
Song.create(title: 'Sweet Home Alabama', artist_id: hadi.id)
Song.create(title: 'Pray', artist_id: angelo.id)


puts "seeds created"