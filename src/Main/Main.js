import { defaultClothingItems } from "../util/contants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {

  const {currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext)
  // console.log(currentTemperatureUnit)  
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999
  const weatherType = useMemo(() => {

    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  

  const filteredCards = defaultClothingItems.filter((item) => {
  
    return item.weather.toLowerCase() === weatherType
  })


  return (
    <main className="main">
      <WeatherCard day={false} type="moon" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        Today is {temp} F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
