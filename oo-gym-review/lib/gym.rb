class Gym
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def memberships
    Membership.all.select{| membership_object | self == membership_object.gym }
  end

  def lifters
    #   - Get a list of all the lifters that have a membership to a specific gym
    memberships.map{|membership_object| membership_object.lifter}
  end

  def names
    lifters.map{|lifter_object| lifter_object.name }
  end

  def combined_lift_total
    # lifters.map{|lifter_object| lifter_object.lift_total }.sum

    total_lift = 0
    lifters.each do | lifter_object |
      total_lift += lifter_object.lift_total   
    end
    total_lift
  end

  def self.all
    @@all
  end
end
