//not jQuery
(function(){
   'use strict';

   // Ch.1
   //let par = document.getElementById("paragraph");
   //par.style.fontSize = "24px";

   //Ch.3
   //const collectP = document.getElementById("main").children;
   //for ( let i = 0; i < collectP.length; i++ ) {
   //   collectP[i].setAttribute ("style", "font-size: 24px; color: red")

   //Ch.5
   //const lc = document.getElementById("main").lastElementChild;
   //lc.setAttribute(
   //   "style",
   //   "font-size: 24px; color: red"
   // );

   //Ch.7
   //const per = document.getElementById("main");
   //const evenC = per.querySelectorAll(":nth-of-type(even)");
   //for ( let i = 0; i < evenC.length; i++ ) {
   //   evenC[i].setAttribute ("style", "font-size: 24px; color: green")
   //}

   //Ch.9
   //const per = document.getElementById("main");
   //const chils = per.children;
   //for ( let i = 0; i < chils.length; i++ ) {
   //   const x = "Llamas and Chickens!"
   //   if(chils[i].innerHTML == x) {
   //      chils[i].setAttribute ("style", "font-size: 24px; color: green")
   //   }
   //}

   //Ch.11
   //const listLi = document.querySelectorAll("ul li a");
   //for(let i = 0; i<listLi.length; i++) {
   //   listLi[i].addEventListener("click", (e) => {
   //   e.preventDefault;
   //   alert("hello! Iḿ clicked!")
   // })
   //}

   //Ch.13
   //const listLi = document.querySelectorAll("ul li a");
   //for(let i = 0; i<listLi.length; i++) {
   //   listLi[i].addEventListener("click", (e) => { alert(listLi[i].innerHTML + " is clicked!") } )
   //}

   //Ch.15
   //const listLi = document.querySelectorAll("ul li a");
   //for(let i = 0; i<listLi.length; i++) {
   //   listLi[i].addEventListener("click", function () {
   //      this.style.color = "red";
   //      })
   //}

   //Ch.17
   //const listLi = document.querySelectorAll("ul li a");
   //const p = document.getElementById("paragraph");

   //for(let i = 0; i<listLi.length; i++) {
   //   listLi[i].addEventListener("click", function () {
   //      const thisLink = this.innerHTML;
   //      p.innerHTML = `You clicked ${thisLink}`
   //      })
   //}
   
   //Ch.19

   //const listLi = document.querySelectorAll("ul li a");
   //const listP = document.querySelectorAll("p");

   //for ( let i = 0; i<listLi.length; i++ ) {
   //   listLi[i].addEventListener("click", function () {

   //      let listId = document.getElementsByTagName("a")[i].id;
   //      let lastNumA = listId.slice(-1);
   //      console.log(lastNumA);

   //      for ( let k=0; k<listP.length; k++ ) {
   //         let pId = listP[k].id;
   //         let pIdLast = pId.slice(-1);
   //         console.log("This is par num " + pIdLast[k]);
   //         if(lastNumA === pIdLast) {
   //            document.getElementById(pId).style.color = "red";
   //         }
   //      }
   //   })
   //}
})()