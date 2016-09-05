json.extract! @image, :id, :caption, :image_url, :lat, :lng, :created_at
json.user @image.author

json.likes @image.likes do |like|
  json.author like.author
end

json.comments @comments do |comment|
  json.body comment.body
  json.author comment.author
end
