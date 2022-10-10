import React from "react";
import Item from "./pages/Cardapio";

const API_URL = "http://192.168.3.10:8000";

export default function Cardapio() {
  const [cardapio, setCardapio] = React.useState([]);

  React.useEffect(() => {
    fetch(API_URL + `/items`)
      .then(res => res.json())
      .then(dados => setCardapio(dados));
  }, []);

  return (
    <div>
      Ola mundo <hr />

      {cardapio.map(cadaUm => {
        return (<Item key={cadaUm.id} descricao={cadaUm.descricao} />)
      })}

      {/* {cardapio.map(i => <Item descricao={i} />)} */}

    </div>
  );
}

