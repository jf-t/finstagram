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

    def self.all_following(user_id, offsetNum = 0)
      @images = Image.all.where(user_id: user_id).order(:created_at).limit(30).offset(offsetNum)
    end

end
