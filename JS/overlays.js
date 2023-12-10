function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}







var body = document.body,
    overlay = document.querySelector('.overlay'),
    overlayBtts = document.querySelectorAll('button[class$="overlay"]'),
    openingBtt;
    
[].forEach.call(overlayBtts, function(btt) {

  btt.addEventListener('click', function() { 
     
     /* Detect the button class name */
     var overlayOpen = this.className === 'open-overlay';
     
     /* storing a reference to the opening button */
     if (overlayOpen) {
        openingBtt = this;
     }
     
     /* Toggle the aria-hidden state on the overlay and the 
        no-scroll class on the body */
     overlay.setAttribute('aria-hidden', !overlayOpen);
     body.classList.toggle('noscroll', overlayOpen);
     
     /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property */
     overlay.scrollTop = 0;
     
      /* forcing focus for Assistive technologies but note:
    - if your modal has just a phrase and a button move the
      focus on the button
    - if your modal has a long text inside (e.g. a privacy
      policy) move the focus on the first heading inside 
      the modal
    - otherwise just focus the modal.

    When you close the overlay restore the focus on the 
    button that opened the modal.
    */
    if (overlayOpen) {
       overlay.focus();
    }
    else {
       openingBtt.focus();
       openingBtt = null;
    }

  }, false);

});

/* detect Escape key when the overlay is open */
document.body.addEventListener('keyup', (ev) => {
   if (ev.key === "Escape" && overlay.getAttribute('aria-hidden') === 'false') {
      overlay.setAttribute('aria-hidden', 'true');
      body.classList.toggle('noscroll', false);
      openingBtt.focus();
      openingBtt = null;
   }
})