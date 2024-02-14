(function(){
   'use strict';

   // Ch.2
   //$('#paragraph').css("font-size", "24px");

   // Ch.4
   //$('#main > p').css({fontSize: '24px', color: 'red'})

   // Ch.6
   //$('#main > p:last-of-type').css({fontSize: '28px', color: 'pink'})

   // Ch.8
   //$('#main > p:nth-child(even)').css({fontSize: '19px', color: 'blue'})
   
   // Ch.10
   //$('#main > p:contains("Llamas and Chickens!")').css({fontSize: '19px', color: 'blue'})

   // Ch.12
   //$("ul li a").on("click", () => {alert("CLICKEDDD!")})

   // Ch.14
   //$("ul li a").on("click", function() {
   //   alert($(this).text() + " CLICKEDDD!")
   //})

   // Ch.16
   //$("ul li a").on("click", function() {
   //   $(this).css("color","red");
   //})

   // Ch.18
   //$("ul li a").on("click", function() {
   //   let linkThis = $(this).html();
   //   $("#paragraph").html(`You clicked ${linkThis}`)
   //})

   // Ch.20
   $("ul li a").on("click", function() {
      let linkThisNum = $(this).attr("id").slice(-1);
      //console.log(linkThisNum)
      let pToChangeId = "paralink" + linkThisNum;
      //console.log(pToChangeId)
      $("#" + pToChangeId).css("color","red");
   }
   )
})()

