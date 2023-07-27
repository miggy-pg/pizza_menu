import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data/pizza_data";

function App() {
  return (
    <>
      <div>
        <section id="food-menu">
          <h2>
            <Header />
          </h2>
          <h5 className="food-menu-sub-heading">Our Menu</h5>
          <Menu />
          <div style={{ textAlign: "center" }}>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <p className="food-menu-heading">Fast React Pizza Co.</p>
      {/* when we use css properties, we use JavaScript objects `{}`. Not only applies to css but possible many others */}
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.Vegetarian.length; // By checking the array length, we can determine if there are any pizzas

  return (
    <>
      {/* We have the option to do it this way, passing the props in each attribute. However, we will try to pass the entire props in an object */}
      {/* {pizzaData.Vegetarian.map((pizza) => (
        <Pizza
          name={pizza.name}
          photo={pizza.photo}
          menu_description={pizza.menu_description}
          price={pizza.price}
          toppings={pizza.toppings.map((toppings) => `${toppings.name}, `)}
        />
      ))} */}

      {/* We will pass the props as an object using the `map` array function */}
      {numPizzas > 0 ? ( // We are conditionally rendering the pizzas using ternary operator, else we should not render it. The condition follows: if numPizzas greater than 0, run/display first value 'pizzaData.Vegetarian.map...' else run/display 'We're still working on...'
        pizzaData.Vegetarian.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> // Since we are passing the pizza object, we should access the pizza in the Pizza component via attribute name 'pizzaObj'
        ))
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </>
  );
}

function Pizza({ pizzaObj }) {
  // So we can access the props using the attribute name in line 50. That is 'pizzaObj'. By using the keyword 'pizzaObj', we are able to access the data.
  return (
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className={`food-img ${pizzaObj.soldOut ? "gray-img" : ""}`}>
          <img src={pizzaObj.photo} alt="{name}" />
        </div>
        <div className="food-description">
          <h2>{pizzaObj.name}</h2>
          <p className="food-price">
            {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
          </p>
          <p>{pizzaObj.menu_description}</p>
          <h4>
            <strong>Toppings:</strong>{" "}
            {pizzaObj.toppings.map((toppings) => `${toppings.name}, `)}
          </h4>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer id="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </>
  );
}

function Order(props) {
  return (
    <div>
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
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
