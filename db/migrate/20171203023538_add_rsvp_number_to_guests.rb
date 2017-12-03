class AddRsvpNumberToGuests < ActiveRecord::Migration[5.1]
  def change
    add_column :guests, :rsvp_number, :integer
  end
end
