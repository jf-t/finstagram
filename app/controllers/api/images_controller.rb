class Api::ImagesController < ApplicationController
  def index
    @images = Image.all_following(current_user.id, 0)
  end

  def create
    @image = Image.new(image_params);
    @image.user_id = current_user.id
    if (@image.save!)
      @user = User.find(current_user.id);
      render 'api/users/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def show
    @image = Image.find(params[:id]);
    @comments = @image.comments;
  end

  def update
    @image = Image.find(params[:id]);
    if @image.update(image_params)
      render 'api/users/no'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  private
  def image_params
    params.require(:image).permit(:image_url, :caption, :lat, :lng);
  end

end
