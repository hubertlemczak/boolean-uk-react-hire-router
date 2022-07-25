import { useEffect, useState } from 'react';
import { useHiredPeople } from '../../context/HiredPeopleContext';
import PeopleList from './components/PeopleList';
let i = 0;
function Dashboard(props) {
  const { hiredPeople } = useHiredPeople();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((data) =>
        setPeople(
          data.results.map((person) => {
            return { ...person, id: i++ };
          })
        )
      );
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
