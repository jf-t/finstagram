class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false, index: true
      t.string :notification, null: false
      t.string :url
      t.boolean :read, default: false
      t.string :image_url, default: "https://openclipart.org/image/2400px/svg_to_png/171070/tasto-2-architetto-franc-01-black-border.png"
      t.timestamps
    end
  end
end
