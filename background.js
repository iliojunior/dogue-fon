$(document).ready(init)

function init() {
  const img = divImg()
  const body = $('body')

  body.before(img)

  initTimeMargin()
}

function divImg() {
  var img = $('<img id="dogue" />')

  img.attr('src', 'https://i.imgur.com/RP6FNap.png')
  img.css('position', 'absolute')
  img.css('z-index', 0)
  img.css('display', 'none')

  img.on('load', function () {
    var width = img.css('width').replace('px', '')
    img.css('margin-left', '0px')
    img.css('display', 'block')
  })

  return img
}

function initTimeMargin() {
  setTimeout(increaseMargin, 1000)
}

function increaseMargin() {
  const body = $('body')
  const imgDogue = $('#dogue')

  const marginNowBody = body.css('margin-left').replace('px', '')
  const newMarginBody = parseInt(marginNowBody) + 1

  const marginNowDogue = imgDogue.css('margin-left').replace('px', '')
  const newMarginDogue = parseInt(marginNowDogue) + 1

  if (newMarginDogue > -250 && newMarginDogue < 1) {
    return finishWithFon()
  }

  body.css('margin-left', newMarginBody + 'px')
  imgDogue.css('margin-left', newMarginDogue + 'px')

  initTimeMargin()
}

function getH1() {
  const h1 = $('<h1>FON</h1>')

  h1.css('margin-left', '0')
  h1.css('text-align', 'left')
  h1.css('margin-top', '250px')

  return h1
}

function finishWithFon() {
  const body = $('body')
  const h1 = getH1()

  body.html(h1)
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-116582537-1', 'auto');
ga('send', 'pageview');
