const weatherOptions = [
  { url: "../images/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/night/cloud.svg", day: false, type: "cloud" },
  { url: "/images/night/moon.svg", day: false, type: "moon" },
];

const WeatherCard = ({ day=true, type='sunny', weatherTemp = 0 }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });


  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
