
// Search Tour
function search() {
  var searchIn = document.getElementById('inSearch').value;
  var search = `<div class="other searchDiv row">`;
  var result = tours.filter(tour => tour.title.search(new RegExp(searchIn, "i")) != -1);
  if (result.length == 0) {
    search += `<h1 class="container-fluid text-center">Cannot find any tour with "` + searchIn +`"</p>`;
  }
  for (var i=0;i<result.length;i++) {
    search+=item(result[i].title,result[i].image,result[i].price,result[i].sale,Math.round(result[i].rating * 100) / 100,4,result[i].id);
  }
  search+=`</div>`;
  document.getElementById("root").innerHTML = search;
  document.body.style = "overflow-y: scroll;";
}

// Rate
function rate(id,star) {
  for (var i=0;i<tours.length;i++) {
    if (tours[i].id == id) tours[i].rate.push(star);
    // Calculate average ratings
    if (tours[i].rate.length > 0) {
      let rating = 0;
      for (var j = 0; j < tours[i].rate.length; j++) {
        rating += tours[i].rate[j];
      }
      rating/= tours[i].rate.length;
      tours[i].rating = rating;
    }
  }
  redirect('all');
  tourInfo(id);
}

// Send Comment
function sendComment(id,name,content){
  let newComment = {
    name: name,
    content: content
  }
  for (var i=0;i<tours.length;i++) {
    if (tours[i].id == id) {
      if (tours[i].comments == undefined) {
        tours[i].comments = [];
      };
      if (tours[i].comments.length == 0) {
        newComment.id = 1;
      } else newComment.id = tours[i].comments[tours[i].comments.length -1] + 1;
      tours[i].comments.push(newComment);
      break;
    }
  }
  redirect('all');
  tourInfo(id);
}

// Private tour request
function privateRequest(){
  var newPReq = {
    name: document.getElementById('NameCustomer').value,
    email: document.getElementById('MailCustomer').value,
    phone: document.getElementById('PhoneCustomer').value,
    destination: document.getElementById('LocalStart').value,
    start: document.getElementById('FromDay').value,
    end: document.getElementById('ToDay').value,
    passengers: document.getElementById('Quantity').value,
    extra: document.getElementById('extraInfo').value,
  };
    privateReq.push(newPReq);
  alert('Request sent!');
  redirect('all');
  privateTour();
}

// Send feedbacks
function sendFeedback(){
  var newFB = {
    name: document.getElementById('fbName').value,
    email: document.getElementById('fbMail').value,
    phone: document.getElementById('fbPhone').value,
    content: document.getElementById('fbContent').value,
  };
    feedbacks.push(newFB);
  alert('Feedback sent!');
  redirect('all');
  contact();
}


// Login
function login() {
  var user = document.getElementById('adminIn').value;
  var password = document.getElementById('passwordIn').value;
  var current = admin.find(each => each.username == user);
  if (current) {
    if (password == current.password) {
      document.getElementById('id01').style.display='none';
      adminPage(user);
    } else {
      alert("Username or password is wrong!");
    }
  } else {
    alert("Username or password is wrong!");
  }
}

// Delete Tour
function delTour(id) {
  var delIndex = tours.findIndex(element => element.id == id);
  tours.splice(delIndex,1);
  redirect('all');
  adminPage();
}

// Add tour
function addTour(){
  var newTour = {
    title: document.getElementById('tourTitle').value,
    place: document.getElementById('tourPlace').value,
    date: document.getElementById('tourDate').value,
    length: document.getElementById('tourLength').value,
    sale: document.getElementById('tourSale').value,
    describe: document.getElementById('tourDescribe').value,
    image: document.getElementById('tourImage').value,
  };
  newTour.id = tours[tours.length-1].id + 1;
  tours.push(newTour);
  redirect('all');
  adminPage();
}
