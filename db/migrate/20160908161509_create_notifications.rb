class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false, index: true
      t.string :notification, null: false
      t.string :url
      t.boolean :read, default: false
      t.string :image_url, default: "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Mathematic%20Plus2.ico"
      t.timestamps
    end
  end
end
