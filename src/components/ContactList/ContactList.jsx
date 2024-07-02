import Contact from "../Contact/Contact";
export default function ContactList ({contacts, onDelete}) {
    
    return (
        <div>
         <ul>{contacts.map(contact =>
        <li key={contact.id}> 
        <Contact name={contact.name} number={contact.number}/>
    
         <button onClick={()=> onDelete(contact.id)}> Delete</button>
        </li>
        )}</ul>
        </div>
      );
  }