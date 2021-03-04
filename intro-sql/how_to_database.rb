require 'pry'
require 'sqlite3'

db = SQLite3::Database.new("chinook.db") #path of the database

name = "Luis"
id = 1


test = db.execute("UPDATE original_fans SET name = ? WHERE id = ?", name, id)


binding.pry
0
