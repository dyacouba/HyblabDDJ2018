$(document).ready(function() {
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'sectionsColor': ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Introduction', 'Les villes concurrentes', 'Nantes-St-Nazaire', 'Synthèse', 'Remerciements'],
    menu: false,
    anchors:[],
    navigationColor: 'blue',
    scrollBar: false,
        //scrolling
        'css3': true,
        scrollingSpeed: 900,
        autoScrolling: true,

        //Accessibility
        keyboardScrolling: true,
        recordHistory: true
      });

    //Chevrons des titres du menu
    $(".chevron").css("visibility","hidden");
    $(".menu .cat7 .chevron").css("visibility","visible");

    //Les catégories sont désactivées sauf la catégorie d'indice 0 qui est activée par défaut
    setDescriptions(7); 

    $(".categorie").click(function() {
      var id = $(this).attr("id");

      if( $(this).hasClass("active-des") != true) {
        console.log("lololo " + id)
            activateDescription(id); //Rend visible la decription de la catégorie qui est survolée
          }
        });

    $(".categorie").css("position", "relative");
    $(".categorie").hover(
      function() {
        var id = $(this).attr("id");
        $("div.cat" + id).velocity({
          width: "+=20",
          height: "+=6",
          marginBottom: "-=6",
          top: "-=3"

        }, 100);
        $("div.cat" + id +" h2").velocity({
          fontSize: "+=3",
          marginTop: "+=3"
        }, 100);
      },
      function() {
        var id = $(this).attr("id");
        $("div.cat" + id).velocity({
          width: "-=20",
          height: "-=6",
          marginBottom: "+=6",
          top: "+=3"
        }, 100);
        $("div.cat" + id +" h2").velocity({
          fontSize: "-=3",
          marginTop: "-=3"
        }, 100);
      });


    function setInd(that) {
      var parentSection = that.closest("section");
      parentSection.find(".buttonInd2 i").addClass("faa-tada");
      parentSection.find(".buttonInd3 i").addClass("faa-tada");
      that.find("i").removeClass("faa-tada");
      parentSection.find("button").css({
       "background-color": "#ffc107",
       "border-color": "#ffc107"
      });
      that.css({
       "background-color": "#26A65B",
       "border-color": "#26A65B"
      });
      parentSection.find(".indicateur2").hide();
      parentSection.find(".indicateur3").hide();
      parentSection.find(".indicateur1").show();
      parentSection.find(".textBull2").hide();
      parentSection.find(".textBull3").hide();
      parentSection.find(".textBull1").show();
      parentSection.find(".indTitle2").hide();
      parentSection.find(".indTitle3").hide();
      parentSection.find(".indTitle1").show();
    }

    //indicateurs angles 
    $(".indicateur1").hide();
    $(".indicateur2").hide();
    $(".indicateur3").hide();
    $(".textBull1").hide();
    $(".textBull2").hide();
    $(".textBull3").hide();
    $(".indTitle1").hide();
    $(".indTitle2").hide();
    $(".indTitle3").hide();

    setInd($(".buttonInd1"));

    $(".buttonInd1").find("i").removeClass("faa-tada");
    $("div.indButton button").css({
     "background-color": "#ffc107",
     "border-color": "#ffc107"
   });

    $(".buttonInd1").css({
     "background-color": "#26A65B",
     "border-color": "#26A65B"
   });


    $(".buttonInd1").click(function() {
      setInd($(this));
    });

    $(".buttonInd2").click(function() {
      var parentSection = $(this).closest("section");
      parentSection.find(".buttonInd3 i").addClass("faa-tada");
      parentSection.find(".buttonInd1 i").addClass("faa-tada");
      $(this).find("i").removeClass("faa-tada");
      parentSection.find("button").css({
       "background-color": "#ffc107",
       "border-color": "#ffc107"
     });
      $(this).css({
       "background-color": "#26A65B",
       "border-color": "#26A65B"
     });
      parentSection.find(".indicateur1").hide();
      parentSection.find(".indicateur3").hide();
      parentSection.find(".indicateur2").show();
      parentSection.find(".textBull1").hide();
      parentSection.find(".textBull3").hide();
      parentSection.find(".textBull2").show();
      parentSection.find(".indTitle1").hide();
      parentSection.find(".indTitle3").hide();
      parentSection.find(".indTitle2").show();
    });

    $(".buttonInd3").click(function() {
      var parentSection = $(this).closest("section");
     parentSection.find("i").addClass("faa-tada");
     parentSection.find("i").addClass("faa-tada");
     $(this).find("i").removeClass("faa-tada");
     parentSection.find("button").css({
       "background-color": "#ffc107",
       "border-color": "#ffc107"
     });
     $(this).css({
       "background-color": "#26A65B",
       "border-color": "#26A65B"
     });
     parentSection.find(".indicateur1").hide();
     parentSection.find(".indicateur2").hide();
     parentSection.find(".indicateur3").show();
     parentSection.find(".textBull1").hide();
     parentSection.find(".textBull2").hide();
    parentSection.find(".textBull3").show();
     parentSection.find(".indTitle2").hide();
     parentSection.find(".indTitle1").hide();
     parentSection.find(".indTitle3").show();
   });

 //$.fn.fullpage.moveSectionDown(); $.fn.fullpage.moveSectionDown();
});



function setDescriptions(id) {
  $("section.categorie-des").css("opacity","0");
  $("section.categorie-des").css("z-index","0");
  $("section.categorie-des").velocity({
    left: "+=10"
  });

  $("div.cat" + id).addClass("active-des");
  $("div.cat" + id + ' h2').css("color","#FFCC01");
  $("section.cat" + id).addClass("active-des");
  $("section.cat" + id).css("z-index","2");

  $("section.cat" + id).velocity({
    opacity: 1,
    left: "-=60"
  });
}

function activateDescription(id) {
  var exId = $("div.active-des").attr("id");

  $("section.cat" + exId).velocity({
    left: "-=60",
    opacity: 0
  }, 300, function() {

  });
  $("section.cat" + exId).velocity({

  }, 300, function() {

  });

    //Après avoir caché la div active
    $("section.cat" + exId).removeClass("active-des");
    $(".menu .cat" + exId + ' h2').css("color","white");

    $("section.cat" + exId).css("z-index","1");
    $("div.cat" + exId).removeClass("active-des");
    //Affichage de la nouvelle div active
    $("section.cat" + id).velocity({
      opacity: 1,
      left: "-=60"
    });
    $("div.cat" + id).addClass("active-des");
    $("section.cat" + id).addClass("active-des");
    $("section.cat" + id).css("z-index","6");
    $(".menu .cat" + id + ' h2').css("color","#FFCC01");
    $(".chevron").css("visibility","hidden");
    $(".menu .cat" + id + ' .chevron').css("visibility","visible");

    $("section.cat" + exId).velocity({
      left: "+=120"
    });
  }