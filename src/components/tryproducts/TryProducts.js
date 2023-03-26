import React from "react";
import "./TryProducts.css";
import privacy_generator from "../../images/privacy_policy_generator.png";
import termscondition_generator from "../../images/termscondition_generator.png";
import domain_name_generator from "../../images/domain_name_generator.png";
import invoice_generator from "../../images/invoice_generator.png";

const tryProductsArr = [
  {
    image: privacy_generator,
    title: "Privacy Policy Generator",
    desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: termscondition_generator,
    title: "Terms & Conditions Generator",
    desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: domain_name_generator,
    title: "Domain Name Generator",
    desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    image: invoice_generator,
    title: "Invoice Generator",
    desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

function TryProducts() {
  return (
    <div className="tryproducts">
      <h3 className="tryproducts_title">Try our other free products</h3>
      <div className="tryproducts_parent_container">
        {tryProductsArr.map((value, index) => (
          <div key={value.title + index} className="tryproducts_container">
            <img src={value.image}  alt={value.title}  />
            <p className="container_title">{value.title}</p>
            <p className="container_description">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TryProducts;
