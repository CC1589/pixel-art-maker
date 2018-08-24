var brush = "white"
var colors = ["black", "purple", "gold", "blue", "green", "red", "orange", "silver", ]

function createCanvas() {
  for (i = 0; i < 40; i++) {
    var xSide = document.createElement('div')
    document.body.appendChild(xSide)
    xSide.className = "xside"
    for (j = 0; j < 40; j++) {
      var ySide = document.createElement('div')
      xSide.appendChild(ySide)
      ySide.className = "yside"
    }
  }
}
createCanvas()

function createPalette() {
  var palette = document.createElement('div')
  document.body.appendChild(palette)
  palette.className = "palette"
  colors.forEach(function(element) {
    var color = document.createElement("div");
    color.className = "box"
    color.style.background = element
    palette.appendChild(color)
    color.addEventListener("click", function() {
      brush = color.style.background
    })
  })
}

createPalette()

document.body.addEventListener("click", function() {
  if (event.target.classList.contains("yside")) {
    event.target.style.backgroundColor = brush
  }
})
