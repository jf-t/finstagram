# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  image_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :user_id, :image_id, :body, presence: true

  belongs_to :image

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
