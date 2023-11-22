function scrollToAbout()
{
    const element = document.getElementById("about")

    element.scrollIntoView({
        behavior: 'smooth'
    })
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}