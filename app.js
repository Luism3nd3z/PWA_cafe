const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "11.jpg" },
  { name: "Voluptatem", image: "12.jpg" },
  { name: "Explicabo", image: "13.jpg" },
  { name: "Rchitecto", image: "14.jpg" },
  { name: " Beatae", image: "15.jpg" },
  { name: " Vitae", image: "16.jpg" },
  { name: "Inventore", image: "17.jpg" },
  { name: "Veritatis", image: "18.jpg" },
  { name: "Accusantium", image: "19.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
