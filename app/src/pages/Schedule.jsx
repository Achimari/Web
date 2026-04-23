import "../styles/home.css";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
import { weeklySchedule } from "../data/churchData";

export default function Schedule() {
  return (
    <main>
      <PageSection>
        <PageHeader
          title="Расписание регулярных встреч"
          subtitle="Актуальное недельное расписание богослужений и встреч церкви."
        />
        <Card className="schedule-card">
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
        </Card>
      </PageSection>

      <Footer />
    </main>
  );
}
