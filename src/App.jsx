import "./App.css";
import data from "./data";
import Card from "./Card";
import Nav from "./Nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <section className="card-list">
        {data.map((d) => (
          <Card
            title={d.title}
            key={d.location}
            image={d.image}
            location={d.location}
            url={d.googleMapsUrl}
            start={d.startDate}
            end={d.endDate}
            description={d.description}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
