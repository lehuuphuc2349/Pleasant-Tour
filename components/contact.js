function contact() {
  document.getElementById("root").innerHTML = `
  <div class="container other contact">
  <form onsubmit="sendFeedback(); return false;" method="post">
  <fieldset style="border: solid 2px">
  <legend style="background-color:#17fc8e;padding: 10px;border: solid 2px">Feedback</legend>
  <div class="icon">
  Full Name: <br>
  <input type="text" name="fullname" id="fbName" required placeholder="Enter Your Name"> <br>
  </div>
  <div class="icon">
  Telephone Number: <br>
  <input type="tel" name="number" id="fbPhone" required placeholder="Enter Telephone Number"> <br>
  </div>
  <div class="icon">
  Your Email: <br>
  <input type="email" name="email" id="fbMail" required placeholder="Enter Your Email"> <br>
  </div>
  <div class="icon">
  Content: <br>
  <div class="icon">
  <textarea class="message" id="fbContent" name="textarea" placeholder="Enter Content" required></textarea>
  </div>
  </div>
  <br>
  <input class="btn btn-success subm" type="submit" value="Submit" >
  </fieldset>
  </form>
      <footer class="page-footer font-small blue-grey lighten-5" >
              <div style="background-color: rgba(12,186,22,0.55)">
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
  `;
  document.body.style = "overflow-y: scroll;";
}
