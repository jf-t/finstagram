class AddPrivate < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :private, :boolean, default: false
  end
end
