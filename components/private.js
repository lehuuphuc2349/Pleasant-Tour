function privateTour(){
  document.getElementById("root").innerHTML = `
  <div class="container other">
  <div class="row">
    <div class="titleForm">REQUEST A PRIVATE TOUR</div>
    <div class="tour-custome">
      <form id="tour-custome" onsubmit="privateRequest(); return false;" method="post">
        <div class="mda-tilte-4">
          <span class="mda-tilte-name">FAMILY INFORMATION</span>
        </div>
        <br>
        <div class="row">
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Customer's name *:</label>
            <input placeholder="Your name" type="text" name="NameCustomer"
                   id="NameCustomer" class="form-control">
          </div>
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Email *:</label>
            <input placeholder="Email Address" type="email" name="MailCustomer"
                   id="MailCustomer" class="form-control">
          </div>
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Phone:</label>
            <input placeholder="E.g.: (08) 21 868 86 " type="text" id="PhoneCustomer"
                   name="PhoneCustomer" class="form-control">
          </div>
        </div>
        <div class="mda-tilte-4">
          <span class="mda-tilte-name">TOUR INFORMATION</span>
        </div>
        <div class="row">
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Destination:</label>
            <input placeholder="Where to go" type="text" name="LocalStart"
                   id="LocalStart" class="form-control">
          </div>
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Start date:</label>
            <input type="date" name="FromDay" id="FromDay" class="form-control">
          </div>
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>End date:</label>
            <input type="date" name="ToDay" id="ToDay" class="form-control ">
          </div>
          <div class="form-group col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <label>Number of passengers:</label>
            <input placeholder="Number of passengers" type="number" min=1 name="Quantity"
                   id="Quantity" class="form-control ">
          </div>
        </div>
        <div class="mda-tilte-4">
          <span class="mda-tilte-name">EXTRA INFORMATION</span>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <textarea rows="5" style="width: 100%;resize: none;" class="form-control" name="Other" id="extraInfo"
                      placeholder="Notes or any extra attentions..."></textarea>
          </div>
        </div>
        <div class="form-group" style="text-align: center;">
          <button type="submit" class="btn btn-success bnt-book">REQUEST</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div> `;
  document.body.style = "overflow-y: scroll;";
}
