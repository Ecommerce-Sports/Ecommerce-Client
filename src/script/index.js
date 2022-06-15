//banner slides
let slideIndex = 0;

const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("banner-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

showSlides();

//side nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.getElementsByTagName("main").style.marginRight = "450px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight= "0";
}

//checkbox select all
function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(let i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

//uploadImage
function loadFile(event) {
    const image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};