# Controller for handling guest RSVPs
class GuestController < ApplicationController
  def index
    @guest = Guest.new
  end
end
