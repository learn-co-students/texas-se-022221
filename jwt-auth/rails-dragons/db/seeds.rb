# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Dragon.destroy_all
dragons = [
    {
      "name": "Toothless",
      "description": "A Night Fury",
      "image": "https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
      "atWar": false
    },
    {
      "name": "Bozar",
      "description": "An uninteresting dragon",
      "image": "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
      "atWar": false
    },
    {
      "name": "Tomar",
      "description": "An interesting dragon",
      "image": "https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
      "atWar": false
    },
    {
      "name": "Trogdor",
      "description": "the burniator",
      "image": "https://i1.wp.com/zachonleadership.com/wp-content/uploads/2018/07/Trogdor.jpg?fit=1161%2C768&ssl=1",
      "atWar": false,
    }
  ]

  User.create(name: 'Raul', email: 'raul@raul.com', password:'fantastic')
  User.create(name: 'Angelo', email: 'angelo@angelo.com', password:'yeet')

  dragons.each do | dragon |
    Dragon.create(name: dragon[:name], description: dragon[:description], atWar: dragon[:atWar], image: dragon[:image], user: User.all.sample)
  end
