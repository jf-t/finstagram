# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(image_url: "https://pbs.twimg.com/profile_images/770511161884237824/qdzxmnyB_400x400.jpg", username: "jackfintan", full_name: "jack fintan tilly", email: "jackftilly@gmail.com", password: "warrior99!")
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/13736091_1141889845854971_965104315_a.jpg", username: "melissatalgo", email: "melissa.talgo@gmail.com", full_name: "Melissa Talgo", password: "iLoveJack")
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/11137590_1589144874665540_1847240937_a.jpg", username: "austinjones2", full_name: "austin jones", email: "austinjones@gmail.com", password: "rilSquadAustin", bio: "Right now let's get this paper and smile for all them haters");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/11881841_981304115260795_1162752656_a.jpg", username: "conradical8", full_name: "Conrad May", email: "conradmay@gmail.com", password: "rilSquadConrad");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/14032750_1633519426958520_1861375445_a.jpg", username: "tgasperian", full_name: "tristan gasperian", email: "tristangasperian@gmail.com", password: "rilSquadTristan");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/l/t51.2885-19/s320x320/13397617_1730522930558627_1512121532_a.jpg", username: "jmaniswewycool", full_name: "james schulte", email: "jamesschulte@gmail.com", password: "rilSquadJames", bio: "Cal Poly Slow");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s150x150/11382548_1613963915540228_844732501_a.jpg", username: "t_bartolo", full_name: "Talon Bartolo", email: "talonbartolo@gmail.com", password: "rilSquadTalon", bio: "The hockey life. San Francisco Native. University of Northern Colorado Twitter: T_Bartolo");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/12677657_1649782175282069_206988388_a.jpg", username: "keepthistabopen", full_name: "Tab", email: "keepthistabopen@gmail.com", password: "rilSquadArian", bio: "Producing my favorite songs in my bedroom...");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/11137590_1589144874665540_1847240937_a.jpg", username: "gabesababe31", full_name: "Gabe Crespin", email: "gabecrespin@gmail.com", password: "rilSquadGabe", bio:  "Future Flyboy ✈️ Theta Chi ΘΧ. Embarrass yourself, it builds character.");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/13671238_1089196924494993_2109793326_a.jpg", username: "reggiechatman", full_name: "Reggie Chatman Jr.", email: "reggiechatman@gmail.com", password: "rilSquadReggie", bio: "ournalist || LSU Student || Alpha Man ReggieChatman.com");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/13687417_296158190748292_793844372_a.jpg", username: "finigan_tilly", full_name: "fin tilly", email: "fintilly@gmail.com", password: "fintilly");
User.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/12934972_1736519349926987_1486472382_a.jpg", username: "tayysexton", full_name: "Taylor Sexton", email: "taylorsexton@gmail.com", password: "taylorSexton", bio: "Bay Area ⇄ UC Davis ΑΧΩ");
User.create!(username: "guest_user", full_name: "Guest", email: "example@gmail.com", password: "password", bio: "living in the clouds");

12.times do |idx|
  user_id = idx + 1
  12.times do |idx2|
    following_id = idx2 + 1
    if (following_id != user_id)
      Follow.create!(user_id: user_id, following_id: following_id)
    end
  end
end

Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/14063253_1116602955093054_1948873235_n.jpg?ig_cache_key=MTMyNTQyODQ0NTIyODY1MzMwMQ%3D%3D.2", user_id: 4, lat: 40.694380, lng: -73.926921);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13355488_1762964173984335_2111368065_n.jpg?ig_cache_key=MTI3MTI0NTc4NzY1NzI2MDE3OQ%3D%3D.2", user_id: 4, lat: 37.434276, lng:  -122.167628);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c181.0.718.718/13188084_235582700151225_2006504072_n.jpg?ig_cache_key=MTI1MTc1MTM4ODI1NDY4NjI3Mw%3D%3D.2.c", user_id: 4, lat: 22.154840, lng: -159.698083);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13116747_1073143749391639_1618580038_n.jpg?ig_cache_key=MTI0ODAxNjE1NDYzNTkxNDc3Ng%3D%3D.2", user_id: 4, lat: 21.415223, lng: -157.787392);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/13702955_317327251942896_2010443033_n.jpg?ig_cache_key=MTMwNjM1OTI5NTA1OTU3Njg5OA%3D%3D.2.c", user_id: 5, lat: 40.694360, lng: -73.926971);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/13167420_271882333156022_2068805180_n.jpg?ig_cache_key=MTI0NTkzNTUzMzk0NDMxNDM2Nw%3D%3D.2.c", user_id: 5, lat: 40.719616, lng: -73.963583);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/13827338_1782300515384097_829060637_n.jpg?ig_cache_key=MTMxMjQ4NjQ4MzUyNTMzNTk1Ng%3D%3D.2.c", user_id: 7, lat: 37.768530, lng:  -122.484712);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13381016_1545410462435114_1151678844_n.jpg?ig_cache_key=MTI2NTc4NzY4NzgzNTYzMDM4Nw%3D%3D.2", user_id: 7, lat: 37.426548, lng: -122.081720);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13297988_1011937485569407_1030231028_n.jpg?ig_cache_key=MTI2NDkyNDM0NjE5MTk4MDYyNw%3D%3D.2", user_id: 9, lat: 37.506673, lng: -122.288623);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/11258773_1686116745009441_1797184101_n.jpg?ig_cache_key=MTE4NDQ1OTQ4NTE2MzU2Mzk1Nw%3D%3D.2", user_id: 9, lat: 37.782544, lng: -122.410006);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c164.0.752.752/14033496_1570684849905897_384438110_n.jpg?ig_cache_key=MTMyNTcwODcyNTY0MTk2ODI4NQ%3D%3D.2.c", user_id: 6, lat: -13.156288, lng: -72.529914);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13658888_950738568364781_1285213254_n.jpg?ig_cache_key=MTMxNzAwNDUyMjE2MTY3MTc0Ng%3D%3D.2.c", user_id: 6, lat: -6.417238, lng: -77.923984);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13408765_1095958430477140_1854473154_n.jpg?ig_cache_key=MTI3MzQ1ODk0Mzc4ODM0MzQzNw%3D%3D.2", user_id: 6, lat: 34.248583, lng: -119.267015);

Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/e35/c81.0.477.477/13355579_1687969921465830_669668276_n.jpg?ig_cache_key=MTI2Njg4OTgzNjUzMzgyMjU5Mw%3D%3D.2.c", user_id: 3, lat: 35.295989, lng: -120.664651);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/13721283_415327498637861_1763183221_n.jpg?ig_cache_key=MTMwOTgzMDg2Mzg0MDM5MTk5MA%3D%3D.2.c", user_id: 2, lat: 43.040981, lng: -76.131165);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/13722232_255138234870998_938342492_n.jpg?ig_cache_key=MTI5NjAyNTI0MTg2MDk0ODA1NQ%3D%3D.2.c", user_id: 2, lat: 37.426548, lng: -122.081720);

Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c175.0.730.730/13269499_866879476789526_1573929605_n.jpg?ig_cache_key=MTI1MzIzMTMzODc4MzUwOTEzNw%3D%3D.2.c", user_id: 2, lat: 49.375727, lng: -123.091613);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13712609_652789248210553_87061498_n.jpg?ig_cache_key=MTMxMTIzNDY3ODkxNzU5MzgyOQ%3D%3D.2", user_id: 1, lat: 37.826894, lng: -122.488581);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13266883_628420550641743_1191122368_n.jpg?ig_cache_key=MTI2MzUyNDU3NzI3NjE0OTc3Nw%3D%3D.2", user_id: 1, lat: 37.572691, lng: -122.282627);

Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/14063412_1659363967724632_1309535992_n.jpg?ig_cache_key=MTMxOTg3NzQzNTEzOTAzMjU0Ng%3D%3D.2", user_id: 12, lat: 32.854957, lng: -117.253932);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/14099357_531667160356508_658605476_n.jpg?ig_cache_key=MTMyNzI0NzgxNzc0NDMxMTcwNQ%3D%3D.2.c", user_id: 10, lat: 30.412703, lng: -91.180442);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/e35/12677237_555214531319997_284927321_n.jpg?ig_cache_key=MTIzMjMzMzIzNzQ0Mjg4MDMzMQ%3D%3D.2", user_id: 11, lat: 37.791712, lng: -122.461855);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13098917_1777766735843155_1517627214_n.jpg?ig_cache_key=MTIzNzk4MTA5OTkxNTIwNDI1NA%3D%3D.2", user_id: 8, lat: 37.506432, lng: -122.300268);
Image.create!(image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/12783923_526734087507521_1632548409_n.jpg?ig_cache_key=MTIwMzg0NTk4NDg3MjI4OTkwMg%3D%3D.2", user_id: 8, lat: 35.283785, lng: -120.884666);


# celebrities start here
User.create!(username: "champagnepapi", full_name: "champagnepapi", email: "drake@gmail.com", password: "toronto_raptors", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/12394126_679306605505317_296747851_a.jpg", bio: "VIEWS");
User.create!(username: "badgalriri", full_name: "badgalriri", email: "rihanna@gmail.com", password: "myAviIsWeird", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/11032926_1049846535031474_260957621_a.jpg");
User.create!(username: "kendricklamar", full_name: "Kendrick Lamar", email: "kendricklamar@gmail.com", password: "i_spit_flames", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/12751068_506637569516241_2000216439_a.jpg");
User.create!(username: "taylorswift", full_name: "Taylor Swift", email: "taylorswift@gmail.com", password: "complainingAboutRelationships", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/12599210_1266879739993740_674087546_a.jpg", bio: "Born in 1989");
User.create!(username: "sethrogen", full_name: "Seth", email: "sethrogen@yahoo.com", password: "weirdassmofo", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/10632075_708972962507892_788442709_a.jpg");
User.create!(username: "channingtatum", full_name: "Channing Tatum", email: "highSchoolCop@gmail.com", password: "mrBigArms", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/11333443_1477840665860052_481869096_a.jpg");
User.create!(username: "stephencurry30", full_name: "Wardell Curry", email: "stephcurry@gmail.com", password: "getsBuckets", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/13320117_1224086350959353_838783914_a.jpg");
User.create!(username: "blbonds25", full_name: "Barry Bonds", email: "homeRunChamp@yahoo.com", password: "go_giants", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/10607947_1469102543367529_1469511112_a.jpg");
User.create!(username: "busterposey", full_name: "Buster Posey", email: "busterposey@gmail.com", password: "bestCatcher", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/11189160_1424701864506440_464716415_a.jpg");
User.create!(username: "kimkardashian", full_name: "Kim Kardashian West", email: "kimmykw@gmail.com", password: "iFuckKanye", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/13108741_2006822342876893_1052882414_a.jpg");
User.create!(username: "kendalljenner", full_name: "Kendall Jenner", email: "kendalljenner@gmail.com", password: "ilovejacktilly", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/14134951_1065808103503860_1979427572_a.jpg");
User.create!(username: "microsoft", full_name: "Microsoft", email: "microsoft@gmail.com", password: "billgates", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/10729318_654650964633655_619168277_a.jpg");
User.create!(username: "everton", full_name: "Everton", email: "team@everton.com", password: "bestInBPL", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/11363772_1698871427066105_1385578654_a.jpg", bio: "The official home of Everton on Finstagram");
User.create!(username: "icecube", full_name: "Ice Cube", email: "icecube@gmail.com", password: "nwaSwurve", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/10554144_540773739382943_684884780_a.jpg", bio: "West Coast Warlord");
User.create!(username: "sportscenter", full_name: "SportsCenter", email: "news@espn.com", password: "sportscenter", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/10502710_138249836349999_1543736402_a.jpg");
User.create!(username: "fuckarian", full_name: "chip macintosh mccain", email: "jackftilly@yahoo.com", password: "fuckBitches", image_url: "https://instagram.fsnc1-3.fna.fbcdn.net/t51.2885-19/s320x320/14073180_316469155373909_548651062_a.jpg");


Follow.create!(user_id: 13, following_id: 1);
Follow.create!(user_id: 13, following_id: 2);
Follow.create!(user_id: 13, following_id: 3);
Follow.create!(user_id: 13, following_id: 4);
