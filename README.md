# Finstagram
http://jft-finstagram.herokuapp.com 
[//]: <> (This is also a comment.)

Finstagram is a fake Instagram/AirBnB hybrid application. It takes the functionality of images, comments, and likes from instagram and adds it to the front end google maps interface with markers of AirBnB. This is a simple functioning application with authentication.

There are a lot of features in this application, listed below with a description to each:

## Features
### Image posting
Using cloudinary, a user can post an image to the cloud and post a caption and location using google maps. This image posting pushes the image to the server and to the individual profile. The URL to get to this is '/upload'. You can upload a picture with 'current location' as well by clicking that button.

### Map image feed
All images from users that a certain user follows are posted with a location. The full screen Google Map on the home page shows these images as markers, along with mouseover events that open a small image. Clicking one of these markers also opens the ImageDetail component, showing the image in more detail

### News image feed
In addition to the map feed, there is a image feed chronologically ordered, with mouseover that shows the number of likes, comments, and the user. Clicking one of these images also opens up the ImageDetail screen. To access this feed, click the 'switch feed' button on the top left corner of the map feed.

### User profile
There is a beautifully styled user profile with the number of followers, following, and posts. This page also features a large profile picture, follow/unfollow/edit profile button, the user's name, username, and caption, a map of that user's images, and a grid of their images below. The URL to access this page is at '/profile/:id'.

### Notifications
Within the navigation there is a bell icon that represents notifications. A notification is received when another user likes or comments one of your images, or follows you. These notifications are marked unread until clicked on. Clicking on the notification will either reroute to the user page if it is a follor, or the image page if it is a comment or like.

### Commenting and liking an image
A user can comment or like another image very easily with automatic updating. This feature is accessed on the image detail only.

### Image detail
The ImageDetail coomponent shows the number of likes, user information, image, caption, and the comments of the image. This makes commenting and liking, or linking to the author's profile very easy. The URL of this is at '/images/:id'.

### Search
You can easily search for users by their username or full name in the top bar. No need to submit a search, it is automatically rendered per key press. This creates a easy-to-use dropdown menu with links to the users pages.

### User Authentication
Sign up/Sign in/ Sign out, or guest access is very easy to use with modals that are styled. These modals are linked to one another, and automatically rendered if a user tries to access the application without signing in. The Guest User button automatically signs in a user to our guest page, so access to the application is full.

### Private users
A user can be deemed private by editing their profile and checking the radio button of 'Private.' This limits the access of other users to their account by making their followers, following, map, and image feed private. A user can request to follow a private user, and the user will get a notification of 'allow/deny' notification the next time they log in.

### Edit profile
Editing a profile could not be easier. On the User Profile page there is a button that opens up a modal with a handful of options to customize a profile such as username, password, full name, email, private, and profile picture. Upon sending those changes, the user profile is rendered again immediately showing the results.


## Thank you
I throughly hope you enjoy my application. There were many hours of focused coding and many cups of black coffee behind this application. I also love any feedback I can get! Thank you

Last but not least, the url is jft-finstagram.herokuapp.com
