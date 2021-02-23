require 'pry'

class Human
    # class is a grouping of behavior and data 
    @@all = []
    # def name(new_name)
    #     @name = new_name
    # end

    def initialize(name="No name :(", age, hobby)
        # set up variables that belong to a single object
        #  'intialize' runs upon creation of EVERY instance
        @name = name
        @age = age
        @hobby = hobby

        # array.push(@name)
        # binding.pry
        @@all << self

    end

    def say_hi #instance method, method that belongs to all objects
        puts "Hello, I'm #{@name}"
    end

    def self.all #class method, only accesible to classes
        @@all
    end

end

raul = Human.new("Raul", 28, "coffee")
nestor = Human.new("Nestor", 25, "hydrohomie")
donovan = Human.new("Donovan", 28, "maybe a rubixcube")
adri = Human.new("Adri", 28, "Cats")
unnamed = Human.new(28, "Jack")



# puts raul

binding.pry
0