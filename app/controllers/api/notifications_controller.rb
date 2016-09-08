class Api::NotificationsController < ApplicationController

  def create
    @notif = Notification.new(notif_params)
    @notif.save!
    render 'api/users/no'
  end

  def update
    @notif = Notification.find(params[:id])
    @notif.update(read: true)
    render 'api/users/no'
  end

  def destroy
    @notif = Notification.find(params[:id]);
    @notif.destroy!
    render 'api/users/no'
  end

  private
  def notif_params
    params.require(:notif).permit(:user_id, :notification, :url, :image_url)
  end
end
