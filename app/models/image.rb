# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  image_url  :string           not null
#  caption    :text
#  user_id    :integer          not null
#  lat        :integer          not null
#  lng        :integer          not null
#  num_likes  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  validates :image_url, :user_id, :lat, :lng, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments

  has_many :likes

  has_many :user_likes,
    through: :likes,
    source: :author

end
