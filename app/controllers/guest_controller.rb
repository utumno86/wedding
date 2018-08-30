# Controller for handling guest RSVPs
class GuestController < ApplicationController
  def new
    @guest = Guest.new
  end

  def create
    @guest = Guest.new(guest_params)
    @guest.invite_sent = true
    @guest.rsvp = true

    if @guest.save
      flash[:success] = 'You have successfully RSVPed'
      redirect_to root_path
    else
      flash[:danger] = 'There was an error with the RSVP'
      redirect_to guest_path
    end
  end

  private

  def guest_params
    params['/guest'].permit(:first_name, :last_name, :email_address, :address, :city, :state, :zipcode, :rsvp_number)
  end
end
