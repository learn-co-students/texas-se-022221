class Lifter
  attr_reader :name, :lift_total

  @@all = []

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total

    self.class.all << self
  end

  def memberships
    # Get a list of all the memberships 
    # that a specific lifter has

    mem_array = []
    Membership.all.each do | membership_object |
      if self == membership_object.lifter
        mem_array << membership_object
      end
    end
    mem_array

    # Membership.all.select do | membership_object |
    #   self == membership_object.lifter
    # end
  end

  def gyms
    memberships.map do | membership_object |
      membership_object.gym
    end
  end

  def self.average_lift_total
    # because we are adding up everything (lifter lift total)
    lift_total = 0 
    self.all.each do | lifter_object |
      lift_total += lifter_object.lift_total
    end
    # ^ divide this number by total lifters to get average
    lift_total / self.all.count
  end

  def total_cost
    # Get the total cost of a specific lifter's gym memberships
    cost_array  = memberships.map do | membership_object |
      membership_object.cost
    end
    cost_array.sum

    # memberships.map{|membership_object| membership_object.cost}.sum
  end

  def sign_up(gym, cost)
    # Given a gym and a membership cost, sign a specific lifter up for a new gym

    # creating a new membership
    m8 = Membership.new(gym, self, cost)
  end

  def self.all
    @@all
  end

end
