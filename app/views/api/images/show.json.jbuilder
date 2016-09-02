json.extract! @image, :id, :caption, :image_url, :lat, :lng, :created_at
json.user @image.author
json.likeCount @image.likes.length
