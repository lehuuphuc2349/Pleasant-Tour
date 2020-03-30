function adminPage(user) {
  topFunction();
  let adminTours = tours.sort((a, b) => (a.id > b.id) ? 1 : -1);
  var adPage = `<div class="container other"><h2>Welcome `+user+`!</h2><hr>
  <h2>Tours:</h2>
  <hr>
  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Place</th>
      <th>Date</th>
      <th>Length</th>
      <th>Sale</th>
      <th>Rating</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  `;
  if (adminTours.length > 0) {
    for (var i = 0; i < adminTours.length; i++) {
      adPage+= `<tr><td>`+ adminTours[i].id + `</td><td>`+ adminTours[i].title + `</td><td>`+ adminTours[i].place + `</td><td>`+ adminTours[i].date +  `</td>` + (adminTours[i].length ? (`<td>`+ adminTours[i].length +  `</td>`) : "<td>None</td>") + (adminTours[i].sale ? (`<td>`+ adminTours[i].sale +  `</td>`) : "<td>None</td>") + (adminTours[i].rating ? (`<td>`+ (Math.round(adminTours[i].rating * 100) / 100) + `</td>`) : "<td>None</td>") + `<td><i class="fas fa-trash-alt" onclick="delTour(`+ adminTours[i].id +`)"></i></td>`
    }
  }
  adPage += `
  </tbody>
</table>
<hr>
<h2>Private tour requests</h2>
<hr>
<div>
`;
if (privateReq) {
  for (var i=0;i<privateReq.length;i++){
    adPage += `<div class="container comment">
    `+ (privateReq[i].name ? ('<div><b>' + privateReq[i].name + '</b></div>') : "") +`
    `+ (privateReq[i].email ? ('<div><b>' + privateReq[i].email + '</b></div>') : "") +`
    `+ (privateReq[i].phone ? ('<div><b>' + privateReq[i].phone + '</b></div>') : "") +`
    `+ (privateReq[i].destination ? ('<div><b>Destination:</b><p>' + privateReq[i].destination + '</p></div>') : "") +`
    `+ (privateReq[i].start ? ('<div><b>Start:</b><p>' + privateReq[i].start + '</p></div>') : "") +`
    `+ (privateReq[i].end ? ('<div><b>End:</b><p>' + privateReq[i].end + '</p></div>') : "") +`
    `+ (privateReq[i].passengers ? ('<div><b>Number of passengers:</b><p>' + privateReq[i].passengers + '</p></div>') : "") +`
    `+ (privateReq[i].extra ? ('<div><b>Extra notes:</b><p>' + privateReq[i].extra + '</p></div>') : "") +`
    </div>`;
  }
};

  adPage += `
  <hr>
  <h2>Add tours:</h2>
  <hr>
  <form onsubmit="addTour(); return false;" method="post">
    <label for="tourTitle">Title:</label>
    <input id="tourTitle" type="text" placeholder="Title of tour here" required autofocus/>
    <label for="tourPlace">Place (Viết hoa chữ cái đầu, còn lại viết thường, dính liền):</label>
    <input id="tourPlace" type="text" placeholder="VD: Vietnam, Singapore,..." required/>
    <label for="tourDate">Date:</label>
    <input id="tourDate" type="date" required/><br>
    <label for="tourLength">Length:</label>
    <input id="tourLength" type="number" placeholder="Tour kéo dài ? ngày" required/> <br>
    <label for="tourSale">Sale (Sale bao nhiêu %, nếu không sale, để trống):</label>
    <input id="tourSale" type="text" placeholder="VD: 30%, 12%,..."/>
    <label for="tourDescribe">Describe:</label><br>
    <textarea id="tourDescribe" placeholder="Nhập nội dung mô tả tour ở đây"></textarea>
    <label for="tourImage">Image:</label>
    <input id="tourImage" type="text" placeholder="Đường dẫn hình,VD: resources/img/tour.png"/>
    <button class="btn btn-success" type="submit">Add tour</button>
  </form>
  <hr>
  <h2>Feedbacks</h2>
  <hr>
  <div>
  `;
  if (feedbacks) {
    for (var i=0;i<feedbacks.length;i++){
      adPage += `<div class="container comment">
      `+ (feedbacks[i].name ? ('<div><b>' + feedbacks[i].name + '</b></div>') : "") +`
      `+ (feedbacks[i].email ? ('<div><b>' + feedbacks[i].email + '</b></div>') : "") +`
      `+ (feedbacks[i].phone ? ('<div><b>' + feedbacks[i].phone + '</b></div>') : "") +`
      `+ (feedbacks[i].content ? ('<div><p>' + feedbacks[i].content + '</p></div>') : "") +`
      </div>`;
    }
  };
  adPage += `
  </div>
  <hr>
  </div>
  `;
  document.getElementById('root').innerHTML = adPage;
  document.body.style = "overflow-y: scroll;";
}
