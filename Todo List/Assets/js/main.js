// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click On Delete

$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

// Adding

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li> <span> X </span>${todoText}</li>`);
  }
});

$(".fi-swluxl-plus-solid").click(function () {
  $("input").fadeToggle();
});
