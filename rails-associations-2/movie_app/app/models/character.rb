class Character < ApplicationRecord
    belongs_to :actor
    belongs_to :movie

    def played_by
        "#{self.name}, played by #{actor.name} in #{movie.title}"
    end
end
