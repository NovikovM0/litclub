import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "context/UserAuth";
import { useEffect } from "react";
import { upload } from "components/Auth/firebase";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'


const Header = () => {
  const { logOut, user } = useUserAuth();
  const [photoURL, setPhotoURL] = useState("/images/1.png");
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
      setPhotoURL("/images/1.png");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if(user && user.photoURL){
      setPhotoURL(user.photoURL);
    }
  }, [user])

  function handleChange(e) {
    if (user == null) {

    }
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  async function handleClick() {
    await upload(photo, user, setLoading);
    window.location.reload();
  }
  
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">LITCLUB</Link>
          </div>
          <ul className="nav-links">
            {user? (
            <li>
            <Link to="/readlist">Хочу прочитать</Link>
          </li>) : (<div/>)}
            {user? (
            <li>
            <Link to="/readed">Прочитанное</Link>
          </li>
            ) : (<div/>)}
            {user? (
            <div className="img-main">
            <Dropdown>
            <Dropdown.Toggle variant="Success">
              <img className="img" src={photoURL} alt="агде?"/>
            </Dropdown.Toggle>
            <Dropdown.Menu  className="DropdownList" rootCloseEvent="click">
              <Dropdown.Item eventKey="1" onClick={handleLogout}>Выйти из учетной записи</Dropdown.Item>
              <p/>
              <Form.Group  controlId="formFileSm" className="mb-3">
                <Form.Label>Поменять аватар</Form.Label>
                <Form.Control type="file" size="sm"  onChange={handleChange} />
                <button className="DropdownButton" disabled={loading || !photo} onClick={handleClick}>Загрузить</button>
                </Form.Group>
            </Dropdown.Menu>
            </Dropdown>
            </div>
            ) : (<div/>)}
          </ul>
        </div>
      </div>
    </header>
  );
};

export {Header}
