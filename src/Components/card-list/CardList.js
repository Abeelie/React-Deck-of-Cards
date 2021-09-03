import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "../button/Button";
import Card from "../card/Card";


const CardList = () => {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);



useEffect(() => {
    async function getDeck() {
      const url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      const response = await axios.get(url);
      setDeck(response.data);
    }
    getDeck();
  }, [setDeck]);


useEffect(() => {
    async function getCard() {
      try {
        const url = `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;
        const response = await axios.get(url);
        if (response.data.remaining === 0) {
            alert("No cards remaining!");
            window.location.reload();
        }
      
        setCount(response.data.remaining)
        
        const card = response.data.cards[0];
        setCards((d) => [
          ...d,
          {
            id: card.code,
            name: card.value + " " + card.suit,
            image: card.image,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
    
    if (autoDraw && !timeRef.current) {
        timeRef.current = setInterval(async () => {
          await getCard();
        }, 1000);
      } return () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
      };
    }, [autoDraw, deck])
    

    const toggle = () => {
        setAutoDraw((auto) => !auto);
    }
    
    const cardList = cards.map((card) => (
      <Card key={card.id} name={card.name} image={card.image} />
    ))

    return (
        <div>
          <h1 style={{color: "white"}}>Card Draw Game</h1>
          <h1 style={{color: "white"}}>{count}</h1>
          <Button draw={toggle} msg={autoDraw ? "Stop" : "Start"}/>
          {cardList}
        </div>
      )
} 







export default CardList