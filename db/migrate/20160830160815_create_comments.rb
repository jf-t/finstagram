class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false, index: true
      t.integer :image_id, null: false, index: true
      t.text :body, null: false
      t.timestamps
    end
  end
end
