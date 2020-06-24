class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :type, null: false 
      t.integer :year, null: false 
      t.integer :length, null: false 
      t.integer :genre_id, null: false 

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :type
    add_index :videos, :genre_id 
  end
end
