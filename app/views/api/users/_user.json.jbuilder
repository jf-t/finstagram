json.extract! user, :id, :username
json.images user.images.pluck(:id)
