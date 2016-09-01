export const requestImages = ([imageIds], success, params) => {

  $.ajax({
    method: "GET",
    url: `api/image`,
    data: {
      user_id: userId
    },
    success: success
  }) //This should return a list of 30 images from the database through the controller
}


export const requestFollowedImages = (userId, success) => {

}
