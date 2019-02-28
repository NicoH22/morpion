(function($) {
   let x = "X";
   let o = "O";
   let turns = 0;
   let cell = $(".cell");

   let case1 = $("#case1");
   let case2 = $("#case2");
   let case3 = $("#case3");
   let case4 = $("#case4");
   let case5 = $("#case5");
   let case6 = $("#case6");
   let case7 = $("#case7");
   let case8 = $("#case8");
   let case9 = $("#case9");

   cell.on('click', function() {
      if(case1.hasClass('o') && case2.hasClass('o') && case3.hasClass('o') ||
      case4.hasClass('o') && case5.hasClass('o') && case6.hasClass('o') ||
      case7.hasClass('o') && case8.hasClass('o') && case9.hasClass('o') ||
      case1.hasClass('o') && case4.hasClass('o') && case7.hasClass('o') ||
      case2.hasClass('o') && case5.hasClass('o') && case8.hasClass('o') ||
      case3.hasClass('o') && case6.hasClass('o') && case9.hasClass('o') ||
      case1.hasClass('o') && case5.hasClass('o') && case9.hasClass('o') ||
      case3.hasClass('o') && case5.hasClass('o') && case7.hasClass('o')) {
         alert("Gagnant: O");
         cell.text("");
         cell.removeClass("disable");
         cell.removeClass("o");
         cell.removeClass("x");
      } else if (case1.hasClass('x') && case2.hasClass('x') && case3.hasClass('x') ||
          case4.hasClass('x') && case5.hasClass('x') && case6.hasClass('x') ||
          case7.hasClass('x') && case8.hasClass('x') && case9.hasClass('x') ||
          case1.hasClass('x') && case4.hasClass('x') && case7.hasClass('x') ||
          case2.hasClass('x') && case5.hasClass('x') && case8.hasClass('x') ||
          case3.hasClass('x') && case6.hasClass('x') && case9.hasClass('x') ||
          case1.hasClass('x') && case5.hasClass('x') && case9.hasClass('x') ||
          case3.hasClass('x') && case5.hasClass('x') && case7.hasClass('x')) {
         alert("Gagnant: X");
         cell.text("");
         cell.removeClass("disable");
         cell.removeClass("o");
         cell.removeClass("x");
   }
      else if ( turns === 9 ) {
         alert("Egalite");
         cell.text("");
         cell.removeClass("disable");
         cell.removeClass("o");
         cell.removeClass("x");
         turns = 0;
      }
      else if ($(this).hasClass("disabled")) {
         alert("Cette case est deja remplie")
      }
      else if (turns % 2) {
         turns++;
         $(this).text(o);
         $(this).addClass("disable o");
         if(case1.hasClass('o') && case2.hasClass('o') && case3.hasClass('o') ||
             case4.hasClass('o') && case5.hasClass('o') && case6.hasClass('o') ||
             case7.hasClass('o') && case8.hasClass('o') && case9.hasClass('o') ||
             case1.hasClass('o') && case4.hasClass('o') && case7.hasClass('o') ||
             case2.hasClass('o') && case5.hasClass('o') && case8.hasClass('o') ||
             case3.hasClass('o') && case6.hasClass('o') && case9.hasClass('o') ||
             case1.hasClass('o') && case5.hasClass('o') && case9.hasClass('o') ||
             case3.hasClass('o') && case5.hasClass('o') && case7.hasClass('o')) {
            alert("Gagnant: O");
            turns = 0;
         }
      }
      else {
         turns++;
         $(this).text(o);
         $(this).addClass("disable o");
         if (case1.hasClass('x') && case2.hasClass('x') && case3.hasClass('x') ||
             case4.hasClass('x') && case5.hasClass('x') && case6.hasClass('x') ||
             case7.hasClass('x') && case8.hasClass('x') && case9.hasClass('x') ||
             case1.hasClass('x') && case4.hasClass('x') && case7.hasClass('x') ||
             case2.hasClass('x') && case5.hasClass('x') && case8.hasClass('x') ||
             case3.hasClass('x') && case6.hasClass('x') && case9.hasClass('x') ||
             case1.hasClass('x') && case5.hasClass('x') && case9.hasClass('x') ||
             case3.hasClass('x') && case5.hasClass('x') && case7.hasClass('x')) {
            alert("Gagnant: X");
            turns = 0;
         }
      }

      $(".replay").on('click', function() {

      })
   })
})(jQuery);