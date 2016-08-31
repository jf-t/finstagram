class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
    render json: @images
  end

end
