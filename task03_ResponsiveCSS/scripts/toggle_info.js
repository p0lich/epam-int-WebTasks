function displayInfo(x) {
    x.classList.toggle("fa-circle-minus");

    if (window.screen.width >= 480) {
        document.getElementById("project_details").style.height = "90px";
        document.getElementById("person_block").style.marginTop = "15px";
    } else {
        document.getElementById("project_details").style.height = "150px";
        document.getElementById("person_block").style.marginTop = "10px";
    }

    
}
  
function hideInfo() {
    // document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}