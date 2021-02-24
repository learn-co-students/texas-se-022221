
class Artist

    attr_reader :name # macro for name getter

    @@all = []

    def initialize(name)
        @name = name

        @@all << self
    end

    # building getter from scratch
    # def name
    #     @name
    # end     #cmd + '/'  for windows ctrl +'/'  to comment

    def songs
        # I want JUST the songs that belong to the 
        # artist that is calling this method

        # puts "songs array should be returned here"
        
        # Song.all gets us our array of ALL songs
        # .select iterates through array
        # song_object represents a single element in that array
        # song_object has an attr_reader of artist which returns an artist object
        Song.all.select do | song_object |
            song_object.artist == self
        end            
    end

    def write_song(song_name)
        Song.new(song_name, self)
    end

    def self.all
        @@all
    end
end









puts "artist rb file has run"