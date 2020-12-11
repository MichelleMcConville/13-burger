// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
    
  $(".change-devour").on("click", (event) => {
      const id = $(this).data("id");
      const newDevour = $(this).data("newdevour");
      const newDevourState = { devoured: newDevour };

      $.ajax("api/burgers/" + id, {
          type: "PUT"
        , data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
   });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#bgr").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", (event) => {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        location.reload();
      }
    );
  });

});