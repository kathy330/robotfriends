import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map(({ id, name, username, email }) => {
        return <Card key={id} name={name} username={username} email={email} />;
      })}
    </div>
  );
}

export default CardList;
