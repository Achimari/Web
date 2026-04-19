import "../styles/home.css";
import Footer from "../components/layout/Footer";
import { weeklySchedule } from "../data/churchData";

export default function Schedule() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title page-title">Расписание регулярных встреч</h1>
            <p className="section-text page-subtitle">
              Актуальное недельное расписание богослужений и встреч церкви.
            </p>
          </header>
          <div className="schedule-card card">
            <table className="schedule-table" aria-label="Расписание служений">
              <tbody>
                {weeklySchedule.map(([event, time]) => (
                  <tr key={event}>
                    <td>{event}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="note-text">В летний период отдельные молодежные мероприятия могут переноситься.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
