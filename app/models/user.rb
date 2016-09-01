# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  username        :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :username, :full_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, presence: true

  has_many :your_follows,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :followers,
    through: :your_follows,
    source: :follower

  has_many :your_followed,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :following,
    through: :your_followed,
    source: :followee

  has_many :images

  has_many :authored_comments,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment

  has_many :likes

  has_many :liked_images,
    through: :likes,
    source: :image

  attr_reader :password
  after_initialize :generate_session_token


  def self.search(string)
    if string === ""
      return []
    end
    string.downcase!
    users = User.all.where("full_name LIKE ?", "#{string}%")
    users += (User.all.where("username LIKE ?", string))
    string.capitalize!
    users += User.all.where("full_name LIKE ?", "#{string}%")
    users += (User.all.where("username LIKE ?", string))
    users
  end

  def self.find_by_email_cred(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.find_by_username_cred(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(32)
    self.save!
    self.session_token
  end

  private
  def generate_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(32)
  end
end
