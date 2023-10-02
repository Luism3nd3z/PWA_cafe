const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "1.jpg" },
  { name: "Voluptatem", image: "2.jpg" },
  { name: "Explicabo", image: "3.jpg" },
  { name: "Rchitecto", image: "4.jpg" },
  { name: " Beatae", image: "5.jpg" },
  { name: " Vitae", image: "6.jpg" },
  { name: "Inventore", image: "7.jpg" },
  { name: "Veritatis", image: "8.jpg" },
  { name: "Accusantium", image: "9.jpg" },
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