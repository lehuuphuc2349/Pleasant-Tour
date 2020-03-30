function tourInfo(id) {
  var thisTour = tours.find(tour => tour.id == id);
  var tourPage = `<div class="container other">
  <div class="row ">
    <div class="form-container container-fluid">
      <form role="form" method="post" id="reused_form">
            <p>
            <h2>`+thisTour.title+`</h2>
            <h6><b>Rate: </b>`+ (thisTour.rating ? ((Math.round(thisTour.rating * 100) / 100) + " / 5") : "<i>No one had rated this tour yet. Be the first to rate this tour!</i>") + `</h6>
            <div id="rating">
            <input type="radio" id="star5" name="rating" value="5" onclick="rate(`+thisTour.id+`,5)" `+ ((Math.round(thisTour.rating) == 5) ? "checked" : "") +`/>
            <label class = "full" for="star5" title="Awesome - 5 stars"></label>

            <input type="radio" id="star4" name="rating" value="4" onclick="rate(`+thisTour.id+`,4)" `+ ((Math.round(thisTour.rating) == 4) ? "checked" : "") +`/>
            <label class = "full" for="star4" title="Pretty good - 4 stars"></label>

            <input type="radio" id="star3" name="rating" value="3" onclick="rate(`+thisTour.id+`,3)" `+ ((Math.round(thisTour.rating) == 3) ? "checked" : "") +`/>
            <label class = "full" for="star3" title="Meh - 3 stars"></label>

            <input type="radio" id="star2" name="rating" value="2" onclick="rate(`+thisTour.id+`,2)" `+ ((Math.round(thisTour.rating) == 2) ? "checked" : "") +`/>
            <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>

            <input type="radio" id="star1" name="rating" value="1" onclick="rate(`+thisTour.id+`,1)" `+ ((Math.round(thisTour.rating) == 1) ? "checked" : "") +`/>
            <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
            </div>
            <a href='`+ (thisTour.doc ? thisTour.doc : "") +`' class="btn btn-primary" style="float: right;clear: both;" download="Tour document">
            Download document
            </a>
            <br>
            <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#myModal">
            Purchase
            </button>
            `+ (thisTour.place ? (`<h6><b>Place: </b>` + thisTour.place +`</h6>`) : "") + `
            `+ (thisTour.price ? (`<h6><b>Price: </b>` + thisTour.price +`</h6>`) : "") + `
            `+ (thisTour.date ? (`<h6><b>Start date: </b>` + thisTour.date +`</h6>`) : "") + `
            `+ (thisTour.length ? (`<h6><b>Length: </b>` + thisTour.length +` days</h6>`) : "") + `
            `+ (thisTour.sale ? (`<h6><b>Sale: </b>` + thisTour.sale +`</h6>`) : "") + `
            `+ (thisTour.image ? (`<img src=` + thisTour.image +` alt="Tour image">`) : "") + `
            `+ (thisTour.describe ? (`<p>` + thisTour.describe +`</p>`) : "") + `
              <br><br>
            </p>

            <div class="modal" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">

                  <div class="modal-body">
                    <div class="row">
                      <div class="col-12 col-lg-9">
                        <div class="position-relative">
                          <div class="border-left position-absolute"
                               style="z-index: -1; left: 1rem; top: 0; bottom: 0;"></div>

                          <!---------- Step 1 ---------->
                          <p class="d-flex align-items-center">
                            <span
                              class="text-white bg-primary rounded-circle d-flex align-items-center justify-content-center mr-3"
                              style="width: 2rem; height: 2rem;">1</span>
                            <span class="h6 text-uppercase mb-0">Thông tin liên hệ</span>
                          </p>
                          <div class="pl-5">
                            <div class="row">
                              <div class="col-12 col-sm-6 form-group">
                                <label>Họ và tên</label>
                                <input class="form-control" type="text" name="name"/>
                              </div>
                              <div class="col-12 col-sm-6 form-group">
                                <label>Địa chỉ</label>
                                <input class="form-control" type="text" name="address"/>
                              </div>
                              <div class="col-12 col-sm-6 form-group">
                                <label>Email</label>
                                <input class="form-control" type="text" name="email"/>
                              </div>
                              <div class="col-12 col-sm-6 form-group">
                                <label>Số điện thoại</label>
                                <input class="form-control" type="text" name="phone"/>
                              </div>
                              <div class="col-12 col-sm-6 form-group">
                                <label>Tiêu chuẩn khách sạn</label>
                                <select class="form-control custom-select" name="hotel_standard">
                                  <option value="1"
                                          data-adult-price="990000">
                                    Mini
                                  </option>
                                  <option value="2"
                                          data-adult-price="1350000">
                                    2 Sao
                                  </option>
                                  <option value="3"
                                          data-adult-price="1750000">
                                    3 Sao
                                  </option>
                                  <option value="4"
                                          data-adult-price="1950000">
                                    4 Sao
                                  </option>
                                </select>

                                <div class="border-bottom d-flex align-items-center px-3 pb-3 form-group">
                                  <label class="font-weight-bold">Ngày khởi hành</label>
                                  <div class="ml-auto">
                                    <div class="input-group">
										<span class="input-group-prepend">
											<span class="input-group-text text-white bg-primary border-primary">
												<i class="far fa-calendar-alt"></i>
											</span>
										</span>
                                      <input class="text-center form-control datetimepicker" style="width: 7rem;"
                                             type="text" name="departure_date"/>
                                    </div>
                                  </div>

                                </div>
                              </div>
                              <div class="col-6 col-sm-3 form-group">
                                <label>Người lớn</label>
                                <input class="form-control" type="number" name="number_adults" value="1"/>
                                <span class="text-primary d-block mt-2 amount-adults">0₫</span>
                              </div>
                              <div class="col-6 col-sm-3 form-group">
                                <label>
                                  Trẻ em <span class="font-italic text-primary">(6-10 tuổi 75% giá vé)</span>
                                </label>
                                <input class="form-control" type="number" name="number_children" value="0"/>
                                <span class="text-primary d-block mt-2 amount-children">0₫</span>
                              </div>
                            </div>
                            <div class="form-group">
                              <label>Tin nhắn</label>
                              <textarea class="form-control" rows="3" name="message"></textarea>
                            </div>
                          </div>

                          <!---------- Step 2 ---------->
                          <p class="d-flex align-items-center">
                            <span
                              class="text-white bg-primary rounded-circle d-flex align-items-center justify-content-center mr-3"
                              style="width: 2rem; height: 2rem;">2</span>
                            <span class="h6 text-uppercase mb-0">Phương thức thanh toán</span>
                          </p>
                          <div class="pl-5">
                            <div id="accordion-payment-methods" class="accordion">
                              <div>
                                <div class="custom-control custom-radio form-group">
                                  <input type="radio" id="payment-method-radio-1" name="payment_method" value="1"
                                         class="custom-control-input" data-toggle="collapse"
                                         href="#payment-method-content-1">
                                  <label class="border d-flex custom-control-label" for="payment-method-radio-1">
                                    <i class="fas fa-home h1 border-right p-3 mb-0"></i>
                                    <span class="p-3">
													<span>Thanh toán tại văn phòng của chúng tôi</span>

												</span>
                                  </label>
                                </div>
                                <div id="payment-method-content-1" class="collapse"
                                     data-parent="#accordion-payment-methods">
                                  <div class="alert alert-primary ml-4">
                                    38 yên bái, Quận hải châu,Đà nẵng
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="custom-control custom-radio form-group">
                                  <input type="radio" id="payment-method-radio-2" name="payment_method" value="2"
                                         class="custom-control-input" data-toggle="collapse"
                                         href="#payment-method-content-2">
                                  <label class="border d-flex custom-control-label" for="payment-method-radio-2">
                                    <i class="far fa-credit-card h1 border-right p-3 mb-0"></i>
                                    <span class="p-3">
													<span>Chuyển khoản qua ngân hàng</span>

												</span>
                                  </label>
                                </div>
                                <div id="payment-method-content-2" class="collapse"
                                     data-parent="#accordion-payment-methods">
                                  <div class="alert alert-primary ml-4">
                                    <p><strong>NGÂN HÀNG VIETCOMBANK</strong><br/>
                                      Chủ tài khoản: HUỲNH VIẾT TRIỀU<br/>
                                      Chi Nhánh Ngân hàng Đà nẵng<br/>
                                      Số TK: 033 1000 442 414</p>
                                    <p><strong>NGÂN HÀNG VIETINBANK</strong><br/>
                                      Chủ tài khoản: HUỲNH VIẾT TRIỀU<br/>
                                      Chi Nhánh Ngân hàng đà nẵng<br/>
                                      Số TK: 101010 0079 71720</p>
                                    <p><strong>NGÂN HÀNG SACOMBANK</strong><br/>
                                      Chủ tài khoản: HUỲNH VIẾT TRIỀU<br/>
                                      Chi Nhánh Ngân hàng đà nẵng<br/>
                                      Số TK: 0600 1498 3395</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="custom-control custom-radio form-group">
                                  <input type="radio" id="payment-method-radio-3" name="payment_method" value="3"
                                         class="custom-control-input" data-toggle="collapse"
                                         href="#payment-method-content-3">
                                  <label class="border d-flex custom-control-label" for="payment-method-radio-3">
                                    <i class="fas fa-hand-holding-usd h1 border-right p-3 mb-0"></i>
                                    <span class="p-3">
													<span>Thu tiền tận nơi</span>

												</span>
                                  </label>
                                </div>
                                <div id="payment-method-content-3" class="collapse"
                                     data-parent="#accordion-payment-methods">
                                  <div class="form-group">
                                    <input class="form-control" type="text" name="payment_address"
                                           placeholder="Vui lòng nhập địa chỉ của bạn"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!---------- Step 3 ---------->
                          <p class="d-flex align-items-center">
                            <span
                              class="text-white bg-primary rounded-circle d-flex align-items-center justify-content-center mr-3"
                              style="width: 2rem; height: 2rem;">3</span>
                            <span class="h6 text-uppercase mb-0">Điều khoản bắt buộc khi đăng ký online</span>
                          </p>
                          <div class="pl-5">
                            <div class="bg-light border p-3 mb-3">
                              Lưu ý: Tất cả các hình thức thanh toán quý khách hàng chọn, đều phải thanh toán trước ngày
                              khởi hành tour. Đối với hình thức thu tiền tận nơi, chúng tôi chỉ miễn phí thu tiền tại
                              các khu vực quận hải châu,quận thanh khê,quận liên chiểu đà nẵng
                            </div>
                            <div class="custom-control custom-checkbox form-group">
                              <input type="checkbox" class="custom-control-input" id="agree-terms" name="agree_terms">
                              <label class="custom-control-label" for="agree-terms">
                                Tôi đồng ý với các điều kiện trên </label>
                            </div>
                          </div>

                          <!---------- Step 4---------->
                          <p class="d-flex align-items-center">
                            <span
                              class="text-white bg-primary rounded-circle d-flex align-items-center justify-content-center mr-3"
                              style="width: 2rem; height: 2rem;">4</span>
                            <strong class="h6 text-uppercase mb-0">Xác nhận thông tin - đặt tour</strong>
                          </p>
                          <div class="pl-5">
                            <p>Chúc quý khách có những chuyến đi vui vẻ - thượng lộ - bình an!<br/>
                              Xin chân thành cảm ơn quý khách đã trải nghiệm chuyến đi cùng Hello Việt Nam!</p>

                          </div>
                          <button type="button" class="close btn" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-danger" data-dismiss="modal">
                            Đặt tour ngay
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>
      </form>


    </div>

  </div>

</div>
<h5>Comments</h5>
<hr>
<div>
`;
if (thisTour.comments) {
  for (var i=0;i<thisTour.comments.length;i++){
    tourPage += `<div class="container comment"><div><b>` + thisTour.comments[i].name + `</b></div>`;
    tourPage += `<div><p>` + thisTour.comments[i].content + `</p></div></div>`;
  }
} else {
  tourPage += `<h6><i>No comments yet. Be the first one to comment now!</h6>`
};
tourPage += `
</div>
<hr>
<form id="commentForm" onsubmit="sendComment(`+id+`,document.getElementById('nickName').value,document.getElementById('commentContent').value);return false;" method="post">
<div>
  <div class="col-sm-6 form-group">
    <label for="name">
      Your name:</label>
    <input type="text" class="form-control" id="nickName" name="name" >
  </div>
  </div>
<div>
  <div class="col-sm-12 form-group">

    <label for="comments">
      Comment:</label>
    <textarea class="form-control" type="textarea" name="comments" id="commentContent" placeholder="Your comment"
              maxlength="6000" rows="2"></textarea>
  </div>
</div>
<div>
<div class="col-sm-2 form-group">
<button type="submit" class="btn btn-lg btn-warning">Send</button>
</div>
</div>
</form>


</div>
</div>`;
  document.getElementById('root').innerHTML = tourPage;
  document.body.style = "overflow-y: scroll;";
}
