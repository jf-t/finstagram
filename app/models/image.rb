# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  image_url  :string           not null
#  caption    :text
#  user_id    :integer          not null
#  lat        :float            not null
#  lng        :float            not null
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
      @user = User.find(user_id)
      @images = []
      @user.following.each do |user|
        @images.concat(Image.all.where(user_id: user.id).order(:created_at).limit(30))
      end
      @images.uniq!
      @images.concat(Image.all.where(user_id: user_id))
      return @images
    end

end
