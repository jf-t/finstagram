class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false, index: true
      t.integer :following_id, null: false, index: true
      t.timestamps
    end
  end
end
