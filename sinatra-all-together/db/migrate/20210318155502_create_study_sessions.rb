class CreateStudySessions < ActiveRecord::Migration[5.2]
  def change
    create_table :study_sessions  do |  t  |
      t.string :date
      t.string :location
      t.integer :length
      t.integer :teacher_id
      t.integer :student_id
    end
  end
end
