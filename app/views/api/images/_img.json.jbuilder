json.array! @images do |img|
  json.image img
  json.user img.author
end
