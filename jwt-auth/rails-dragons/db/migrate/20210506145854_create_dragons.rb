class CreateDragons < ActiveRecord::Migration[6.0]
  def change
    create_table :dragons do |t|
      t.string :name
      t.string :description
      t.string :image
      t.boolean :atWar
      t.integer :user_id

      t.timestamps
    end
  end
end
