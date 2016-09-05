class Api::LikesController < ApplicationController

  def create
    @like = Like.new(image_id: params[:image_id], user_id: current_user.id)
    if @like.save!
      render 'api/users/no'
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.find_by(image_id: params[:image_id], user_id: current_user.id)
    @like.destroy!
    render 'api/users/no'
  end

end
