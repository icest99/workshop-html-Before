const listItems = [
    {
    title: "Beautiful Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  },
  {
    title: "Wonderful Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  },
  {
    title: "Fantastic Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  },
  {
    title: "Amazing Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  },
  {
    title: "Stylish Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  },
  {
    title: "Modern Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#"
  }
]

let innerHTML = "";
listItems.forEach(each => {
    console.log("IN")
    innerHTML += `
    <div class="item shadow-lg transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
        <img src="images/kitchen.jpg" alt="" class="rounded-lg">
        <h3 class="text-2xl text-blue-500 pt-4 pb-1">${each.title}</h3>
        <p class="text-md px-12 text-center">Lorem ipsum dolor sit amet marlan consectetur adipiscing elit Lorem. </p>
    </div>
    `;
})

const display = document.getElementById("template-output");
display.innerHTML = innerHTML