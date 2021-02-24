# One to Many Relationships

## Objectives

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions

## Deliverables

* Create a Artist class. The class should have these methods:
  * `#initialize` which takes a name and have
  * a reader method for the name
  * `#songs` that returns an array of Song instances
  * `#write_song` that takes a song name, creates a new song, and adds it to the artist's song collection
* Create a Song class. The class should have these methods:
  * `Song#name` that returns a string
  * `Song#artist` that returns an instance of the user class
  * `Song.all` that returns all the Songs created.
  * `Song#artist_name` that returns the name of the song's artist