class Membership
  attr_reader :cost, :gym, :lifter

  @@all = []

  def initialize(gym, lifter, cost)
    @cost = cost
    @lifter = lifter
    @gym = gym

    @@all << self
  end

  def self.all
    @@all
  end
end
