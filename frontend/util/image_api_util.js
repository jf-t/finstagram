export const requestImages = (success, params) => {
  console.log("receiving images");
  $.ajax({
    method: "GET",
    url: "api/images",
    success: success
  }) //This should return a list of 30 images from the database through the controller
}
