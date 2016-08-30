class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :image_url, null: false
      t.text :caption
      t.integer :user_id, null: false, index: true
      t.integer :lat, null: false
      t.integer :lng, null: false
      t.integer :num_likes, default: 0
      t.timestamps
    end
  end
end
