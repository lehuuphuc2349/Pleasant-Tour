var resultLocal, resultSale, resultRecom, resultForeign;
function home() {
  // Section 1 banner
  var banner = "";
  banner+='<div class="carousel-item active"><a href="#" class="cropper"><img src="'+bannerDB[0].src+`">
  </a>
  </div>`
  for (var i=1;i<bannerDB.length;i++) {
    banner+='<div class="carousel-item"><a href="#" class="cropper"><img src="'+bannerDB[i].src+`">
    </a>
    </div>`
  }

  // Section 1 - RECOMMENDED
  var recomFrame = `<div class="carousel-item active"><div class="row">`;
  resultRecom = tours.filter(tour => tour.rating > 3).sort((a, b) => (a.rating < b.rating) ? 1 : -1);
  if (resultRecom.length<=3) {
    for (var i=0;i<resultRecom.length;i++){
      recomFrame+=item(resultRecom[i].title,resultRecom[i].image,resultRecom[i].price,resultRecom[i].sale,Math.round(resultRecom[i].rating * 100) / 100,4,resultRecom[i].id);
    }
    recomFrame+='</div></div>';
    $('#recom').carousel({
      interval: false
    });
  } else {
    for (var i=0;i<3;i++){
      recomFrame+=item(resultRecom[i].title,resultRecom[i].image,resultRecom[i].price,resultRecom[i].sale,Math.round(resultRecom[i].rating * 100) / 100,4,resultRecom[i].id);
    }
    recomFrame+='</div></div>';
    for (var i=1;i<= ( (((resultRecom.length-3)%3) == 0) ? Math.floor((resultRecom.length-3)/3) : Math.floor((resultRecom.length-3)/3)+1 );i++){
      recomFrame+=`<div class="carousel-item"><div class="row">`;
      for (var j=(i*3);j<( i==( (((resultRecom.length-3)%3) == 0) ? Math.floor((resultRecom.length)/3) : Math.floor((resultRecom.length-3)/3)+1 ) ? (i*3+(resultRecom.length-3)%3) : (i*3+3));j++){
        recomFrame+=item(resultRecom[j].title,resultRecom[j].image,resultRecom[j].price,resultRecom[j].sale,Math.round(resultRecom[j].rating * 100) / 100,4,resultRecom[j].id);
      }
      recomFrame+='</div></div>';
    }
  }

  // Section 2 - Promotions
  var sale = `<div class="carousel-item active"><div class="row">`;
  resultSale = tours.filter(tour => tour.sale != null).sort((a, b) => (a.sale < b.sale) ? 1 : -1);
  if (resultSale.length<=6) {
    for (var i=0;i<resultSale.length;i++){
      sale+=item(resultSale[i].title,resultSale[i].image,resultSale[i].price,resultSale[i].sale,Math.round(resultSale[i].rating * 100) / 100,4,resultSale[i].id);
    }
    sale+='</div></div>';
    $('#promote').carousel({
      interval: false
    });
  } else {
    for (var i=0;i<6;i++){
      sale+=item(resultSale[i].title,resultSale[i].image,resultSale[i].price,resultSale[i].sale,Math.round(resultSale[i].rating * 100) / 100,4,resultSale[i].id);
    }
    sale+='</div></div>';
    for (var i=1;i<= ( (((resultSale.length-6)%6) == 0) ? Math.floor((resultSale.length-6)/6) : Math.floor((resultSale.length-6)/6)+1 );i++){
      sale+=`<div class="carousel-item"><div class="row">`;
      for (var j=(i*6);j<( i==( (((resultSale.length-6)%6) == 0) ? Math.floor((resultSale.length)/6) : Math.floor((resultSale.length-6)/6)+1 ) ? (i*6+(resultSale.length-6)%6) : (i*6+6));j++){
        sale+=item(resultSale[j].title,resultSale[j].image,resultSale[j].price,resultSale[j].sale,Math.round(resultSale[j].rating * 100) / 100,4,resultSale[j].id);
      }
      sale+='</div></div>';
    }
  }

  // Section 3 - Local tours
  var local = `<div class="carousel-item active"><div class="row">`;
  resultLocal = tours.filter(tour => tour.place.toLowerCase().search("vietnam") != -1).sort((a, b) => (a.rating < b.rating) ? 1 : -1);
  if (resultLocal.length<=6) {
    for (var i=0;i<resultLocal.length;i++){
      local+=item(resultLocal[i].title,resultLocal[i].image,resultLocal[i].price,resultLocal[i].sale,Math.round(resultLocal[i].rating * 100) / 100,4,resultLocal[i].id);
    }
    local+='</div></div>';
    $('#local').carousel({
      interval: false
    });
  } else {
    for (var i=0;i<6;i++){
      local+=item(resultLocal[i].title,resultLocal[i].image,resultLocal[i].price,resultLocal[i].sale,Math.round(resultLocal[i].rating * 100) / 100,4,resultLocal[i].id);
    }
    local+='</div></div>';
    for (var i=1;i<= ( (((resultLocal.length-6)%6) == 0) ? Math.floor((resultLocal.length-6)/6) : Math.floor((resultLocal.length-6)/6)+1 );i++){
      local+=`<div class="carousel-item"><div class="row">`;
      for (var j=(i*6);j<( i==( (((resultLocal.length-6)%6) == 0) ? Math.floor((resultLocal.length)/6) : Math.floor((resultLocal.length-6)/6)+1 ) ? (i*6+(resultLocal.length-6)%6) : (i*6+6));j++){
        local+=item(resultLocal[j].title,resultLocal[j].image,resultLocal[j].price,resultLocal[j].sale,Math.round(resultLocal[j].rating * 100) / 100,4,resultLocal[j].id);
      }
      local+='</div></div>';
    }
  }
  // Section 4 - Foreign tours
  var foreign = `<div class="carousel-item active"><div class="row">`;
  resultForeign = tours.filter(tour => tour.place.toLowerCase().search("vietnam") == -1).sort((a, b) => (a.rating < b.rating) ? 1 : -1);
  if (resultForeign.length<=6) {
    for (var i=0;i<resultForeign.length;i++){
      foreign+=item(resultForeign[i].title,resultForeign[i].image,resultForeign[i].price,resultForeign[i].sale,Math.round(resultForeign[i].rating * 100) / 100,4,resultForeign[i].id);
    }
    foreign+='</div></div>';
    $('#foreign').carousel({
      interval: false
    });
  } else {
    for (var i=0;i<6;i++){
      foreign+=item(resultForeign[i].title,resultForeign[i].image,resultForeign[i].price,resultForeign[i].sale,Math.round(resultForeign[i].rating * 100) / 100,4,resultForeign[i].id);
    }
    foreign+='</div></div>';
    for (var i=1;i<= ( (((resultForeign.length-6)%6) == 0) ? Math.floor((resultForeign.length-6)/6) : Math.floor((resultForeign.length-6)/6)+1 );i++){
      foreign+=`<div class="carousel-item"><div class="row">`;
      for (var j=(i*6);j<( i==( (((resultForeign.length-6)%6) == 0) ? Math.floor((resultForeign.length)/6) : Math.floor((resultForeign.length-6)/6)+1 ) ? (i*6+(resultForeign.length-6)%6) : (i*6+6));j++){
        foreign+=item(resultForeign[j].title,resultForeign[j].image,resultForeign[j].price,resultForeign[j].sale,Math.round(resultForeign[j].rating * 100) / 100,4,resultForeign[j].id);
      }
      foreign+='</div></div>';
    }
  }

  // Initialize
  topFunction();
  document.body.style = "overflow: hidden;";
  document.documentElement.style = "overflow: hidden;";

  // Generate
  document.getElementById('root').innerHTML = `
  <div id="main" class="scroll-container">
      <section class="section1">
        <div>
        <div id="banner" class="carousel slide" data-ride="carousel">

          <!-- The slideshow -->
          <div class="carousel-inner">
`+banner+`
          </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#banner" data-slide="prev">
            <i class="fas fa-angle-left"></i>
          </a>
          <a class="carousel-control-next" href="#banner" data-slide="next">
            <i class="fas fa-angle-right"></i>
          </a>

        </div>
          <h2><a href="#" onclick="listPage('Recommended tours')">Recommended Tours</a><button class="btn btn-success float-right" onclick="listPage('Recommended tours')">More</button></h2>
          <div id="recom" class="carousel slide" data-ride="carousel">

  <!-- The slideshow -->
  <div class="carousel-inner">
  `+ recomFrame +`
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#recom" data-slide="prev">
    <i class="fas fa-angle-left"></i>
  </a>
  <a class="carousel-control-next" href="#recom" data-slide="next">
    <i class="fas fa-angle-right"></i>
  </a>
</div>

        </div>
      </section>
      <section class="section2">
        <div>
          <div class="homeCon">
            <h2><a href="#" onclick="listPage('Promotions')">Promotions</a><button class="btn btn-success float-right" onclick="listPage('Promotions')">More</button></h2>
            <div id="promote" class="carousel slide" data-ride="carousel">

    <!-- The slideshow -->
    <div class="carousel-inner">
      `+ sale +`
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#promote" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#promote" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>

  </div>

          </div>
        </div>
      </section>
      <section class="section3">
      <div>
        <div class="homeCon">
          <h2><a href="#" onclick="listPage('Local tours')">Local tours</a><button class="btn btn-success float-right" onclick="listPage('Local tours')">More</button></h2>
          <div id="local" class="carousel slide" data-ride="carousel">

  <!-- The slideshow -->
  <div class="carousel-inner">
    `+ local +`
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#local" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#local" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>

        </div>
      </div>
      </section>
      <section class="section4">
      <div>
        <div class="homeCon">
          <h2><a href="#" onclick="listPage('Foreign tours')">Foreign tours</a><button class="btn btn-success float-right" onclick="listPage('Foreign tours')">More</button></h2>
          <div id="foreign" class="carousel slide" data-ride="carousel">

  <!-- The slideshow -->
  <div class="carousel-inner">
    `+ foreign +`
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#foreign" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#foreign" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>

        </div>
      </div>
      </section>
      <section class="section5">
        <div class="homeCon">
        <footer class="page-footer font-small blue-grey lighten-5" >
                <div>
                <div class="row dark-grey-text">
                    <div class="col-md-3 col-lg-6 col-xl-3" id="map">
                        <h6 class="text-uppercase font-weight-bold">Pleasant tour</h6>
                        <hr class="teal accent-3 mt-0 d-inline-block mx-auto" style="width: 50%;">
                        <div id="gg_map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.6176873073545!2d108.22179901963321!3d16.06949771983096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24a85e2091f793fc!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIFThur8gU29mdGVjaCBBcHRlY2g!5e0!3m2!1svi!2s!4v1575894135315!5m2!1svi!2s"
                           frameborder="0"  ></iframe></div>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0" id="contact">
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <hr class="teal accent-3 mt-0 d-inline-block mx-auto" style="width: 50%">
                        <p>
                            <i class="fas fa-home mr-3"></i> VNPT Building, 38 Yen Bai, Hai Chau District, Da Nang</p>
                        <p>
                            <i class="fas fa-envelope mr-3"></i> info@pleasanttour.com</p>
                        <p>
                            <i class="fas fa-phone mr-3"></i> +84 (0236) 3 779 777</p>
                        <p>
                            <i class="fas fa-print mr-3"></i> +84 (0236) 3 779 555</p>
                    </div>
                </div>
            </div>

                <div style="background-color: rgba(17,250,45,0.55)">
                    <ul class="list-unstyled list-inline text-center py-2">
                        <li class="list-inline-item">
                            <h5 class="mb-1">Register for free</h5>
                        </li>
                        <div class="col-md-6 mb-4 m-auto">
                            <form  class="input-group">
                                <input type="text" class="form-control form-control-sm" placeholder="Your email"
                                       aria-label="Your email" aria-describedby="basic-addon2">
                                <div class="list-inline-item ml-4">
                                    <a href="#" class="btn btn-danger btn-rounded">Sign up!</a>
                                </div>
                            </form>
                        </div>
                    </ul>
                </div>

            <ul class="list-unstyled list-inline text-center">
                <a class="fb-ic">
                    <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                </a>
                <a class="tw-ic">
                    <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                </a>
                <a class="gplus-ic">
                    <a href="https://www.google.com/" target="_blank"><i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                </a>
                <a class="li-ic">
                    <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                </a>
                <a class="ins-ic">
                    <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                </a>
                <a class="pin-ic">
                    <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
                </a>
            </ul>

                <div style="background-color: rgba(17,250,45,0.55)">
                    <div class="footer-copyright text-center py-3">Softech Corporation © 2019 Copyright:
                        <a href="https://www.google.com/" target="_blank"> pleasanttour.com</a>
                    </div>
                </div>

        </footer>
        </div>
      </section>
    </div>
`;
$(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
  if (
    !$(this)
      .next()
      .hasClass("show")
  ) {
    $(this)
      .parents(".dropdown-menu")
      .first()
      .find(".show")
      .removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function(e) {
      $(".dropdown-submenu .show").removeClass("show");
    });

  return false;
});

  new fullScroll({

    // parent container
    mainElement : 'main',

    // content section
    sections : 'section',

    // animation speed
    animateTime : 0.7,

    // easing for animation
    animateFunction : 'ease',

    // current position
    currentPosition: 0,

    // display dots navigation
    displayDots: true,

    // where to place the dots navigation
    dotsPosition: 'left'

  });
}
