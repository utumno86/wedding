# frozen_string_literal: true

# Migration to add is_admin field to models
class AddIsAdminToModels < ActiveRecord::Migration[5.1]
  def change
    add_column :models, :is_admin, :boolean
  end
end
