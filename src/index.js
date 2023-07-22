import React from "react";
import ReactDOM from "react-dom/client";
import jsonData from "./data/pizza_data";
import "./index.css";

function App() {
  return (
    <>
      <body>
        <section id="food-menu">
          <h2 className="food-menu-heading">
            <Header />
          </h2>
          <h5 className="food-menu-sub-heading">Our Menu</h5>
          <Menu />
          <div style={{ textAlign: "center" }}>
            <Footer />
          </div>
        </section>
      </body>
    </>
  );
}

function Header() {
  return (
    <>
      <h2>Fast React Pizza Co.</h2>{" "}
      {/* when we use css properties, we use JavaScript objects `{}`. Not only applies to css but possible many others */}
    </>
  );
}

function Menu() {
  return (
    <>
      <Pizza
        name="Vegan Veggie"
        toppings="Baby Bell Peppers, Basil, Daiya Vegan Mozzarella, Kalamata Olives, Oregano, Red Onions, Roasted Garlic, Tomato Sauce"
        price={23.95}
        photo="https://assets.zumepizza.com/public/j4lb8iry.jpg"
        menu_description="Daiya vegan mozzarella, paired with fresh veggies"
      />
    </>
  );
}

function Pizza(props) {
  return (
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className="food-img">
          <img src={props.photo} alt="{name}" />
        </div>
        <div className="food-description">
          <h2>{props.name}</h2>
          <p className="food-price">{props.price}</p>
          <p>{props.menu_description}</p>
          <h4>
            <strong>Toppings:</strong> {props.toppings}
          </h4>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed.");
  return (
    <>
      <footer id="footer">
        {new Date().toLocaleTimeString()}. We're currently open.
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {
      " Using React.StrictMode will render the component twice to debug if we're using outdated parts of the React API "
    } */}
    <App />
  </React.StrictMode>
);
