class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.create!(user_id: params[:followee_id], following_id: params[:following_id])
    render 'api/users/no'
  end
  def destroy
    @follow = Follow.find_by(following_id: params[:following_id], user_id: current_user.id)
    @follow.destroy!
    render 'api/users/no'
  end

end
