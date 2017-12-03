class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.boolean :rsvp
      t.boolean :invite_sent
      t.boolean :thankyou_sent
      t.string :gift

      t.timestamps
    end
  end
end
