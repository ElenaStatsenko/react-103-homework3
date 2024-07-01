export default function Contact({contacts, onDelete})  {
 
    return (
      <div>
        <ul>{contacts.map(contact =>
        <li key={contact.id}> {contact.name}: {contact.number}
         <button onClick={()=> onDelete(contact.id)}> Delete</button>
        </li>
        )}</ul>
      </div>
    );
  }
  