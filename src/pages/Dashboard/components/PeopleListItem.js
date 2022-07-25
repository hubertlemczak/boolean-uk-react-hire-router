import { Link } from 'react-router-dom';
function PeopleListItem({ person }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage == null && (
        <button>
          <Link to={`/view/${person.id}`} state={{ person, mode: 'view' }}>
            Hire
          </Link>
        </button>
      )}
      {person.wage && (
        <>
          <p>Wage: £{person.wage}</p>
          <button>
            <Link to={`/edit/${person.id}`} state={{ person, mode: 'edit' }}>
              Edit
            </Link>
          </button>
        </>
      )}
    </li>
  );
}

export default PeopleListItem;
