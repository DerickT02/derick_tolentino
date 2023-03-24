let nav = document.getElementById("navbar")
let menuIcon = document.getElementById("navbar-menu")
let dropdown = document.getElementById("navbar-items")
let bar1 = menuIcon.childNodes[1]
let bar2 = menuIcon.childNodes[3]
let bar3 = menuIcon.childNodes[5]

let toggleClick = false

menuIcon.onmousedown = function(){
    if(!toggleClick){
        bar1.style.transition = "0.01s ease-in"
        bar3.style.transition = "0.01s ease-in"
        bar1.style.transform = "rotate(45deg) translateY(10px) translateX(10px)"
        bar2.style.visibility = "hidden"
        bar3.style.transform = "rotate(-45deg)  translateY(-10px) translateX(10px)"
        dropdown.style.visibility = "visible"
        toggleClick = true
    }
    else{
        bar1.style.transition = "0.01s ease-in"
        bar3.style.transition = "0.01s ease-in"
        bar1.style.transform = "rotate(0deg)"
        bar2.style.visibility = "visible"
        bar3.style.transform = "rotate(0deg)"
        dropdown.style.visibility = "hidden"
        toggleClick = false

    }
}

nav.onmouseover = function(){
    bar1.style.transition = "0.01s ease-in"
    bar3.style.transition = "0.01s ease-in"
    bar1.style.transform = "rotate(45deg) translateY(10px) translateX(10px)"
    bar2.style.visibility = "hidden"
    bar3.style.transform = "rotate(-45deg)  translateY(-10px) translateX(10px)"
    dropdown.style.visibility = "visible"
}

nav.onmouseleave = function(){
    bar1.style.transition = "0.01s ease-in"
    bar3.style.transition = "0.01s ease-in"
    bar1.style.transform = "rotate(0deg)"
    bar2.style.visibility = "visible"
    bar3.style.transform = "rotate(0deg)"
    dropdown.style.visibility = "hidden"

}
/*
menuIcon.onmouseover = function(){
    bar1.style.transition = "0.01s ease-in"
    bar3.style.transition = "0.01s ease-in"
    bar1.style.transform = "rotate(45deg)"
    bar2.style.visibility = "hidden"
    bar3.style.transform = "rotate(-45deg)"
    dropdown.style.visibility = "visible"

   dropdown.onmouseover = function(){
        bar1.style.transition = "0.01s ease-in"
        bar3.style.transition = "0.01s ease-in"
        bar1.style.transform = "rotate(45deg)"
        bar2.style.visibility = "hidden"
        bar3.style.transform = "rotate(-45deg)"
        dropdown.style.visibility = "visible"

    }

    dropdown.onmouseleave = function(){
        bar1.style.transition = "0.01s ease-in"
        bar3.style.transition = "0.01s ease-in"
        bar1.style.transform = "rotate(0deg)"
        bar2.style.visibility = "visible"
        bar3.style.transform = "rotate(0deg)"
        dropdown.style.visibility = "hidden"
     
    }
}
  */


 













console.log(menuIcon.childNodes)