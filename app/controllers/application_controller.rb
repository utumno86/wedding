# frozen_string_literal:true

# Class for the Application Controller
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_current_user

  def set_current_user
    Model.current_user = current_model
  end
end
