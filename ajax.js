function download_image() {
    var username = document.getElementById('username').value;
    var url = "https://instagram.com/" + username + "?__a=1";

    $("#download").html('Loading');

    $.ajax({
        url: "https://api.allorigins.win/get?url=" + encodeURIComponent(url) + "&callback=?",
        type: 'get',
        dataType: 'jsonp',
        success: function (response) {
            var data = JSON.parse(response.contents);
            if (data.graphql && data.graphql.user) {
                var profile = data.graphql.user.profile_pic_url_hd;

                $("#image").attr("src", profile);
                document.getElementById("image").style.display = "block";
                $("#download").html('View');
            } else {
                alert("User Not Found");
                $("#download").html('View');
                document.getElementById("image").style.display = "none";
            }
        },
        error: function (error) {
            alert("Error fetching data");
            $("#download").html('View');
            document.getElementById("image").style.display = "none";
        }

    });

}
