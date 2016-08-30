class Api::ImagesController < ApplicationController

  def index
    @images = Image.all.limit(30) 
  end

end
