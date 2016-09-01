class Api::UsersController < ApplicationController

  def index
    @users = User.search(params[:str])
    render json: @users
  end


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
    @images = Image.find_by(user_id: @user.id)
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params_update)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :full_name, :email, :password)
  end
  def user_params_update
    params.require(:user).permit(:username, :full_name, :email, :bio, :image_url)
  end
end
