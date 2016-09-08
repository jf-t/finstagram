class Notification < ApplicationRecord
  validates :user_id, :notification, presence: true

  belongs_to :user
  
  def self.user_notifs(user_id)
    @notifs = Notification.all.where(user_id: user_id)
  end
end
