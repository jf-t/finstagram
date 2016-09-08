class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false, index: true
      t.string :notification, null: false
      t.string :url
      t.boolean :read, default: false
      t.string :image_url, default: "https://pixabay.com/static/uploads/photo/2012/04/13/00/21/plus-31216_960_720.png"
      t.timestamps
    end
  end
end
