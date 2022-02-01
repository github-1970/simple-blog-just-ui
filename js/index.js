import './vendor/bootstrap.bundle.min.js'
import './vendor/fontawesome.min.js'

// import "textEditor" if require element is exists
if(document.querySelector( '#textEditor' )){
  import('./vendor/textEditor.js')
}
// import "sidebar" if require element is exists
if (document.querySelector('#aside-checkbox')) {
  import('./sidebar.js')
}

// scroll indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  let progressElem = document.querySelector(".p-progress-bar")
  if(progressElem){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressElem.style.width = scrolled + "%";
  }
}
// end scroll indicator

function preservePlace(id, targetId, height=true, width=true){
  let elem = document.querySelector('#'+id)
  let targetElem = document.querySelector('#'+targetId)
  let elemWidth = elem.clientWidth
  let elemHeight = elem.clientHeight

  targetElem.style.width = elemWidth + 'px'
  targetElem.style.height = elemHeight + 'px'
}
