# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all 
Actor.destroy_all 
Character.destroy_all 

Movie.create(title:"Finding Nemo" , release_date: "May 6th, 2004", length: 100)
Movie.create(title:"Nacho Libre" , release_date: "June 16th, 2006", length: 92)
Movie.create(title:"Lord Of the Rings: Fellowship of the Ring" , release_date: "December 19th, 2001", length: 228)
Movie.create(title:"Starship Troopers" , release_date: "November 7th, 1997", length: 129)

Actor.create(name: "Jack Black", age: 51)
Actor.create(name: "Will Smith", age: 50)
Actor.create(name: "Morgan Freeman", age: 905)
Actor.create(name: "Sandra Bullock", age: 56)
Actor.create(name: "Chuck Norris", age: 100)

Character.create(name:"Nacho", movie: Movie.second, actor: Actor.first)
# Character.create(name:"Nacho", movie_id: Movie.second.id, actor_id: Actor.first.id)
Character.create(name:"Nemo", movie: Movie.first, actor: Actor.third)
Character.create(name:"Frodo", movie: Movie.third, actor: Actor.fourth)
Character.create(name:"Rico", movie: Movie.fourth, actor: Actor.fifth)
