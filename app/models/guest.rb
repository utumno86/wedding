class Guest < ApplicationRecord
  validates :email_address, uniqueness: true
end
