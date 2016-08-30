class Api::SessionsController < ApplicationController
  def new
  end

  def create
    userItem = session_params[:user_item]
    password = session_params[:password]
    if userItem.include?("@")
      @user = User.find_by_email_cred(userItem, password)
    else
      @user = User.find_by_username_cred(userItem, password)
    end

    if @user
      render 'api/users/show'
    else
      render( json: ["Invalid username/password combination"],status: 401)
    end
  end

  def destroy
    logout
  end

  private
  def session_params
    params.require(:user).permit(:user_item, :password)
  end
end
