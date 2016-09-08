json.extract! user, :id, :username, :email, :full_name, :bio, :image_url
json.images user.images
json.following user.following
json.followers user.followers
json.notifications user.notifications
