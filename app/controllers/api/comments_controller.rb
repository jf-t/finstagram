class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(body: comment_params[:body], user_id: current_user.id, image_id: comment_params[:image_id])
    if @comment.save!
      render "api/users/no"
    else
      render json: @comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :image_id)
  end
end
