let mongoose = require("mongoose");
let Campground = require("./models/campground");
let Comments = require("./models/comments");

let data = [
  {
    name: "Clouds Rest",
    image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus enim eget rutrum ullamcorper. Donec tincidunt sed diam id mollis. Maecenas convallis lorem vel lacus molestie consectetur. Aliquam laoreet faucibus enim, id placerat urna porta eu. Sed viverra sollicitudin ex, in ornare ante porttitor quis. Fusce magna metus, porttitor vel pulvinar vitae, bibendum a nisi. Nulla ultricies ullamcorper ipsum eget tincidunt."
  },
  {
    name: "Eagle Creek",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus enim eget rutrum ullamcorper. Donec tincidunt sed diam id mollis. Maecenas convallis lorem vel lacus molestie consectetur. Aliquam laoreet faucibus enim, id placerat urna porta eu. Sed viverra sollicitudin ex, in ornare ante porttitor quis. Fusce magna metus, porttitor vel pulvinar vitae, bibendum a nisi. Nulla ultricies ullamcorper ipsum eget tincidunt."
  },
  {
    name: "Scouts Ridge",
    image: "https://images.unsplash.com/photo-1535049883634-993346531df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus enim eget rutrum ullamcorper. Donec tincidunt sed diam id mollis. Maecenas convallis lorem vel lacus molestie consectetur. Aliquam laoreet faucibus enim, id placerat urna porta eu. Sed viverra sollicitudin ex, in ornare ante porttitor quis. Fusce magna metus, porttitor vel pulvinar vitae, bibendum a nisi. Nulla ultricies ullamcorper ipsum eget tincidunt."
  }
]

// Clears Database.
function seedDB(){
  Campground.deleteMany({}, function(err) {
    if(err) {
      console.log(err);
    }
    console.log("Database Cleared");
    //add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
          console.log("Campground Added.");
          //create a comment
          Comments.create(
            {
              text: "This place is great, but I wish there was internet.",
              author: "Homer"
            }, function(err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
        }
      });
  });

  });


  //add a few comments
}

module.exports = seedDB;
