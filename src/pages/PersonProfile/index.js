import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import HireForm from './components/HireForm';
import EditForm from './components/EditForm';

function PersonProfile() {
  const [person, setPerson] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    setPerson(state.person);
  }, [state.person]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {state.mode === 'view' ? (
        <HireForm person={person} />
      ) : (
        <EditForm person={person} />
      )}
    </article>
  );
}

export default PersonProfile;
