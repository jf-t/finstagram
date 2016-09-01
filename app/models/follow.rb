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

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User

end
