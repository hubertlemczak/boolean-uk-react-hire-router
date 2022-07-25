import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useHiredPeople } from '../../../context/HiredPeopleContext';

function EditForm({ person }) {
  const [wage, setWage] = useState(0);
  const { setHiredPeople } = useHiredPeople();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setHiredPeople((currentHiredPeople) =>
      currentHiredPeople.map((p) =>
        p.id === person.id ? { ...person, wage: wage } : p
      )
    );
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditForm;
