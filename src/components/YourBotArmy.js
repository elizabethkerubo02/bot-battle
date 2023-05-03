import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDelete}) {
  //the bot army code 
  const displayCards=bots.map(bot=>{
    return<BotCard key={bot.id} 
    bot={bot}
    handleClick={handleClick}
    handleDelete={handleDelete}
    />})

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
         
          Your Bot Army
          {displayCards}

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
