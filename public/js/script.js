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

   

})