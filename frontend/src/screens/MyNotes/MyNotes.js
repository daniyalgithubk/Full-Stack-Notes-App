import React , {useEffect , useState} from 'react'
import Mainscreen from '../../components/Mainscreen'
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from 'react-bootstrap'

import axios from 'axios'

const MyNotes = () => {

    const [notes , setNotes] = useState([])
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      console.log("Deleted note with ID:", id);
    }
  };

  const fetchNotes = async () => {
  
    const { data } = await axios.get('/api/notes'); 
    setNotes(data)
   
};
 console.log(notes)



  useEffect(() => {
    fetchNotes()
  },[])

  return (
    <Mainscreen title="Welcome Back Daniyal Khattak">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      <Accordion defaultActiveKey="0">
        {notes.map((note, index) => (
          <Accordion.Item eventKey={index.toString()} key={note._id || index}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: "black",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header>{note.title}</Accordion.Header>
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Accordion.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - Date
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </Mainscreen>
  );
};

export default MyNotes;
