class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      session[:session_token] = @user.session_token
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id]);
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:username, :full_name, :email, :password)
  end
end
