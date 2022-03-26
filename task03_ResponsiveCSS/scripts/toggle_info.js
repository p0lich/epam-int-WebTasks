function displayInfo(x) {
    x.classList.toggle("fa-circle-plus");

    var top_block = document.getElementById("project_details");
    var bottom_block = document.getElementById("person_block");

    if (window.screen.width >= 480) {
        top_block.style.height = (top_block.style.height == "115px") ? "0" : "115px";
        bottom_block.style.marginTop = (bottom_block.style.marginTop == "15px") ? "0" : "15px";
    } else {
        top_block.style.height = (top_block.style.height == "150px") ? "0" : "150px";
        bottom_block.style.marginTop = (bottom_block.style.marginTop == "10px") ? "0" : "10px";
    }
}