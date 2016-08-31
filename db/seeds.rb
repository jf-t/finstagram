# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(image_url: "https://pbs.twimg.com/profile_images/770511161884237824/qdzxmnyB_400x400.jpg", username: "jackfintan", full_name: "jack fintan tilly", email: "jackftilly@gmail.com", password: "password")
50.times do
  name = Faker::Name.name
  email = Faker::Internet.free_email
  username = Faker::Internet.user_name
  image_url = Faker::Avatar.image
  bio = Faker::Hipster.sentence
  password = Faker::Internet.password
  a = User.create!(full_name: name, email: email, image_url: image_url, bio: bio, username: username, password: password)
  a.save!
end

100.times do
  image_url = Faker::Avatar.image
  caption = Faker::Hipster.sentence
  lat = Faker::Address.latitude
  lng = Faker::Address.longitude
  user_id = rand(50)
  a = Image.create!(image_url: image_url, caption: caption, lat: lat, lng: lng, user_id: user_id)
  a.save!
end
