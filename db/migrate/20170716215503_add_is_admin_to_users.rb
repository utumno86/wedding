# Migration to add "is_admin" to users
class AddIsAdminToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :is_admin, :boolean
  end
end
