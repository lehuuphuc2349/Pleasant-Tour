function item(title,image,price,sale,rating,size,id) {
  return `
  <div class="col-sm-`+ size +`"><div class="card" onclick="tourInfo(`+id+`)"`+ (image ? (`style="background-image: url('` + image +`')"`) : "") + `>
    <div class="card-body">
      <h5 class="card-title"><b>` + title + `</b></h5>
      <p class="card-text"><b>Price: </b>` + price + (sale ? (`<br><b>Sale: `+ sale +`</b>`) : "") + (rating ? (`<br><b>Rating: `+ rating +` / 5</b>`) : "") + `
      </p>
    </div>
  </div></div>
  `
}
