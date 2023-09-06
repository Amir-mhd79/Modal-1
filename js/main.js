$("button.click").on("click",function(){
    $("div.modal").fadeIn(500)
    $("div.card").removeClass("slideUp")
    $("div.card").addClass("slideDown")
})
$("div.close").on("click",function(){
    editClass()
})
$("button.closeButton").on("click",function(){
    editClass()
})
$("button.save").on("click",function(){
    alert("changes saved successfully")
    editClass()
})
$("div.coverClose").on("click",function(){
    editClass()
})
function editClass(){
    $("div.modal").fadeOut(500)
    $("div.card").removeClass("slideDown")
    $("div.card").addClass("slideUp")
}