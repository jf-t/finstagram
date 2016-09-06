json.array! @images do |img|
  json.partial! 'api/images/show', image: img, comments: img.comments
end
