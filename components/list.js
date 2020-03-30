// Go to Tour List
function listPage(where, filt, sort) {
  document.location.hash = "#listPage";
  listResult = tours.filter(tour => tour.place.toLowerCase().search(where.toLowerCase()) != -1).sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);

  // Exceptions on navbar
  switch (where) {
    case "All tours":
      listResult = tours.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Hot deals":
      listResult = resultSale.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Promotions":
      listResult = resultSale.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Recommended tours":
      listResult = resultRecom.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Local tours":
      listResult = resultLocal.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Foreign tours":
      listResult = resultForeign.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Asia":
      listResult = tours.filter(tour => (tour.place.toLowerCase().search('japan') != -1 || tour.place.toLowerCase().search('china') != -1 || tour.place.toLowerCase().search('singapore') != -1)).sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "Europe":
      listResult = tours.filter(tour => (tour.place.toLowerCase().search('france') != -1 || tour.place.toLowerCase().search('britain') != -1 || tour.place.toLowerCase().search('italia') != -1)).sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    case "North America":
      listResult = tours.filter(tour => (tour.place.toLowerCase().search('united states') != -1 || tour.place.toLowerCase().search('canada') != -1)).sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
      break;
    default:

  }
  // Filter
  if (filt) {
    switch (filt) {
      case "private":
      listResult = listResult.filter(tour => tour.private == true);
      break;
      default:
      listResult = listResult.filter(tour => tour.private != true);
    }
  }

  // Sort
  if (sort) {
    switch (sort) {
      case 1:
        listResult = listResult.sort((a, b) => (a.price > b.price) ? 1 : -1);
        break;
      case 2:
        listResult = listResult.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
        break;
      case 3:
        listResult = listResult.sort((a, b) => (a.length > b.length) ? 1 : -1);
        break;
      case 4:
        listResult = listResult.sort((a, b) => (a.date > b.date) ? 1 : -1);
        break;
      default:
        listResult = listResult.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
    }
  }
  var list = `<div class="main other">
  <div class="row">
  <button class="col btn" onclick="listPage('`+ where +`')">` + where + `</button>
  <select class="col form-control" id="sortSelect" onchange="listPage('`+ where +`',`+ (filt ? ("'"+filt+"'") : 0) +`,this.selectedIndex)">
    <option `+ ((sort == 0) ? 'selected' : '') +`>Sort by title</option>
    <option `+ ((sort == 1) ? 'selected' : '') +`>Sort by price</option>
    <option `+ ((sort == 2) ? 'selected' : '') +`>Sort by rating</option>
    <option `+ ((sort == 3) ? 'selected' : '') +`>Sort by length</option>
    <option `+ ((sort == 4) ? 'selected' : '') +`>Sort by start date</option>
  </select>
  <div class="col">
  <button class="btn btn-warning" onclick="listPage('`+ where +`', 'join')">Join tours
  </label>
  <button class="btn btn-warning" onclick="listPage('`+ where +`', 'private')">Private tours
  </button>
  </div>
  </div>
  <div class="row">`;
  for (var i=0;i<listResult.length;i++){
    list+=item(listResult[i].title,listResult[i].image,listResult[i].price,listResult[i].sale,Math.round(listResult[i].rating * 100) / 100,3,listResult[i].id);
  }
  list+=`</div></div>`
  document.getElementById("root").innerHTML = list;
  document.body.style = "overflow-y: scroll;";
}
