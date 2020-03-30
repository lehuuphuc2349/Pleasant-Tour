function redirect(x) {
  switch (x) {
    case "admin":
      login();
      document.location.hash = "#admin";
      break;
    case "home":
    document.location.href = "#0";
    home();
      break;
    default:        //Refresh pages after changes in database
      home();
      adminPage();
  }
}
