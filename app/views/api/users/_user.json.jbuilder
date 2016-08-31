json.extract! user, :id, :username, :email, :full_name, :bio, :image_url
json.images user.images.pluck(:id)
