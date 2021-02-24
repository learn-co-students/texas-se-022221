
class Song 

    attr_reader :name, :artist
    # attr_reader :artist

    @@all = []

    def initialize(name, artist)
        @name = name
        @artist = artist

        self.class.all << self
        # @@all << self
    end

    def artist_name
        self.artist.name
    end

    def self.all
        @@all
    end

end








puts "song rb file has run"