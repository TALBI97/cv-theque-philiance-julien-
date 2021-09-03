import React from "react";
import { Figure } from "react-bootstrap";

const HomePage = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        {user && user.isAuthenticated
          ? "Bonjour " + user.firstname
          : "Vous n'êtes pas identifié"}
      </h1>
      <Figure>
        <Figure.Image
          width={1200}
          height={1000}
          alt=""
          src="/images/library.jpg"
        />
      </Figure>
    </div>
  );
};
export default HomePage;
