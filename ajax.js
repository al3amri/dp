function download_image() {
    var url = "https://instagram-api-media-downloader.p.rapidapi.com/ig/userInfoByUsername/" + document.getElementById('username').value + "";

    $("#download").html('Loading');

    $.ajax({
        url: url,
        type: 'get',
        headers: {
            "X-RapidAPI-Key": "8d9ae15bc4msh96b4693811332b1p166c78jsn2d6c057583ec",
            "X-RapidAPI-Host": "instagram-api-media-downloader.p.rapidapi.com"
        },
        success: function (response) {
            var profile = response.result.user.profile_pic_url;

            // Set the image source and make it visible
            $("#image").attr("src", profile);
            $("#image").css("display", "block");

            // Change the button text
            $("#download").html('View');

            // Reset the input field
            $("#username").val("");
        },
        error: function (error) {
            alert("User Not Found");

            // Hide the image and change the button text
            $("#image").css("display", "none");
            $("#download").html('View');

            // Reset the input field
            $("#username").val("");
        }

    });

}
