class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true
      t.string :username, null: false, index: true, unique: true
      t.string :full_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :private, default: false
      t.timestamps
    end
  end
end
