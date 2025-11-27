const cars = [
  {
    name: "eclipse cross 2025",
    type: "suv",
    country: "japan",
    engine: "1500",
    price: "1480000",
    Brand: "Mitsubishi",
    image: "cars/eclipse_cross_2025.png",
    info: "Reliable suv from Japan, 1500cc engine."
  }, 
 {
    name: "expander 2025",
    type: "suv",
    country: "japan",
    engine: "1500",
    price: "1300000",
    Brand: "Mitsubishi",
    image: "cars/Xpander_2025.png",
    info: "Reliable suv from Japan, 1500cc engine."
  }, 
 {
    name: "Outlander Sport 2025",
    type: "suv",
    country: "japan",
    engine: "1500",
    price: "1275000",
    Brand: "Mitsubishi",
    image: "cars/Outlander_Sport_2025.png",
    info: "Reliable suv from Japan, 1500cc engine."
  }, 
 {
    name: "Mirage 2025",
    type: "sedan",
    country: "japan",
    engine: "1200",
    price: "755000",
    Brand: "Mitsubishi",
    image: "cars/Mirage_2025.png",
    info: "Reliable sedan from Japan, 1500cc engine."
  }, 
 {
    name: "Attrage 2025",
    type: "sedan",
    country: "japan",
    engine: "1200",
    price: "740000",
    Brand: "Mitsubishi",
    image: "cars/Attrage_2025.png",
    info: "Reliable sedan from Japan, 1500cc engine."
  },
  {
  name: "Jetour T1 2025",
  type: "suv",
  country: "china",
  engine: "1500",
  price: "1150000",
  Brand: "jetour",
  image: "cars/jetoure_t1_2025.png",
  info: "Compact SUV from China with a 1500cc turbo engine producing about 156 hp. Spacious interior and great value for money."
}
,
{
  name: "Jetour T2 2025",
  type: "suv",
  country: "china",
  engine: "2000",
  price: "1900000",
  Brand: "jetour",
  image: "cars/jetoure_t2_2025.png",
  info: "Mid-size SUV equipped with a 2.0L turbo engine (254 hp). Strong performance, premium cabin, and modern tech features."
}
,
{
  name: "Jetour X70plus 2025",
  type: "suv",
  country: "china",
  engine: "1500",
  price: "1350000",
  Brand: "jetour",
  image: "cars/jetoure_x70plus_2025.png",
  info: "7-seater SUV featuring a 1500cc turbo engine (154 hp). Known for practicality, large cabin, and family-friendly design."
}
,
{
  name: "Jetour X90plus 2025",
  type: "suv",
  country: "china",
  engine: "1500",
  price: "1600000",
  Brand: "jetour",
  image: "cars/jetoure_x90plus_2025.png",
  info: "Large SUV with a roomy 7-seat layout, 1500cc turbo engine, and luxury-inspired interior. Excellent choice for big families."
}
,
{
  name: "Jetour Dashing 2025",
  type: "suv",
  country: "china",
  engine: "1500",
  price: "1400000",
  Brand: "jetour",
  image: "cars/jetoure_dashing_2025.png",
  info: "Sporty modern SUV with a futuristic design, 1500cc turbo engine (156 hp), panoramic screen, and advanced driver tech."
}
,{
  name: "Jetour X70 2025",
  type: "suv",
  country: "china",
  engine: "1500",
  price: "1350000",
  Brand: "jetour",
  image: "cars/jetoure_x70FL_2025.png",
  info: "7-seater SUV featuring a 1500cc turbo engine (154 hp). Known for practicality, large cabin, and family-friendly design."
},
{
  name: "Mercedes CLE Coupe 2025",
  type: "coupe",
  country: "germany",
  engine: "2000",
  price: "3800000",
  Brand: "mercedes-benz",
  image: "cars/mercedes_CLE_Coupe_2025.png",
  info: "Luxury coupe with a 2.0L turbo engine delivering refined performance, sporty handling, and a premium interior design."
}
,{
  name: "Mercedes G-Class 2025",
  type: "suv",
  country: "germany",
  engine: "4000",
  price: "17000000",
  Brand: "mercedes-benz",
  image: "cars/mercedes_G_Class_2025.png",
  info: "Iconic full-size SUV powered by a 4.0L twin-turbo V8 (577 hp). Known for its durability, luxury cabin, and legendary off-road capability."
}
,{
  name: "Mercedes GLC Coupe 2025",
  type: "suv",
  country: "germany",
  engine: "2000",
  price: "4200000",
  Brand: "mercedes-benz",
  image: "cars/mercedes_GLC_Coupe_2025.png",
  info: "Premium SUV Coupe with a 2.0L turbo engine offering strong performance, modern technology, and stylish fastback design."
}
,{
  name: "Mercedes S-Class 2025",
  type: "sedan",
  country: "germany",
  engine: "3000",
  price: "9500000",
  Brand: "mercedes-benz",
  image: "cars/mercedes_S_Class_2025.png",
  info: "Flagship luxury sedan with a 3.0L mild-hybrid engine, world-class comfort, advanced tech, and unmatched interior refinement."
}






];



  // 🎨 Display all cars on page load
  const gallery = document.getElementById("car-gallery");
 // 🎨 Show all cars
  cars.forEach(car => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
    `;

    // 🖱️ When clicked → open popup
    card.addEventListener("click", () => showCarDetails(car));
    gallery.appendChild(card);
  });






  // 🔍 Popup logic
  const modal = document.getElementById("car-modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalInfo = document.getElementById("modal-info");
  const closeBtn = document.querySelector(".close-btn");

  function showCarDetails(car) {
    modalImg.src = car.image;
    modalName.textContent = car.name;
    modalInfo.textContent = car.info;
    modal.style.display = "flex";
  }

  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };





// 🚗  Filter cars when clicking "Search Cars"
document.querySelector(".search-btn").addEventListener("click", () => {
  const type = document.getElementById("car-type").value;
  const country = document.getElementById("country").value;
  const engine = document.getElementById("engine").value;
  const price = document.getElementById("price").value;
  const brand = document.getElementById("brand").value;


  const filtered = cars.filter(car => {
    let match = true;

    if (type !== "any" && car.type !== type) match = false;
    if (country !== "any" && car.country !== country) match = false;
    if (brand !== "any" && car.Brand.toLowerCase() !== brand.toLowerCase()) match = false;


    if (engine !== "any") {
    // convert car engine to number for proper numeric comparison
    const carEngine = parseInt(car.engine);

    if (engine === "electric") {
        match = false; // exclude for now (unless you add electric cars later)
    } 
    else if (engine.includes("-")) {
        const [min, max] = engine.split("-").map(v => parseInt(v));
        if (!(carEngine >= min && carEngine <= max)) match = false;
    } 
    else if (engine === "2001" && carEngine <= 2000) {
        match = false;
    }

    }



    if (price !== "any") {
    if (price.includes("-")) {
        // Remove non-numeric and letter parts like 'k' or 'm'
        const cleaned = price
        .replace(/[^0-9-]/g, "")      // keep only digits and '-'
        .split("-")                   // split range
        .filter(v => v.trim() !== "") // remove empty values
        .map(Number);                 // convert to numbers

        const [minP, maxP] = cleaned;
        if (!(car.price >= minP && car.price <= maxP)) match = false;
    } else if (price === "above-3m" && car.price <= 3000000) {
        match = false;
    }
    }


    

    return match;
  }

);

  // Clear gallery and show filtered cars
  gallery.innerHTML = "";
  if (filtered.length === 0) {
    gallery.innerHTML = `<p style="text-align:center;font-weight:bold;color:#d90429;">🚫 No cars match your selection.</p>`;
    return;
  }

  filtered.forEach(car => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
    `;
    card.addEventListener("click", () => showCarDetails(car));
    gallery.appendChild(card);
  });
});
