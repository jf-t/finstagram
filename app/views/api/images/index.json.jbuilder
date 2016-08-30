@images.each do |img|
  json.set! img.id do
    json.partial! 'img', img: img
  end
end
