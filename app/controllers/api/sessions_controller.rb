class Api::SessionsController < ApplicationController
  def new
  end

  def create
    userItem = session_params[:userItem]
    password = session_params[:password]
    if userItem.include?("@")
      @user = User.find_by_email_cred(userItem, password)
    else
      @user = User.find_by_username_cred(userItem, password)
    end

    if @user
    end
  end

  def destroy
    logout
  end

  private
  def session_params
    params.require(:session).permit(:userItem, :password)
  end
end
