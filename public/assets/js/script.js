// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {

  $(".eat-burger").on("click", (event) => {
      console.log("click working")
      let id = $(this).data("id");
      // const hasEaten = $(this).data("hasEaten");
      // const hasEatenState = { devoured: hasEaten};

      $.ajax("api/burgers/" + id, {
          type: "PUT"
        , data: hasEatenState
      }).then(() => {
        // console.log("changed devour to", hasEaten);
        console.log("changed devour to", id);
        // Reload the page to get the updated list
        location.reload();
      });
   });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    let newBurger = { burger_name: $("#bgr").val().trim(), devoured: 0, }
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  (".delete-burger").on("click", (event) => {
   let id = $(this).data("id");

   $.ajax("/api/burgers/" + id, { 
     type: "DELETE"
   }).then(() => {
     console.log("deleted burger", id);
     // Reload the page to get the updated list
     location.reload();
   });
  });

});