# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :user_id, :following_id, presence: true
  validates :user_id, uniqueness: { scope: :following_id }
  validate :cant_follow_yourself


  def cant_follow_yourself
    if (user_id == following_id)
      errors.add(:errors, "Can't follow yourself")
    end
  end


  belongs_to :follower,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User

end
