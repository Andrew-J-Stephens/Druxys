import './App.css';
import logo from './components/Logo.png'
import Accordion from 'react-bootstrap/Accordion';


function Dropdown() {
    return (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Covid Update</Accordion.Header>
            <Accordion.Body>
            We are excited to announce that most of our delis are 
            open to serve you our great deli food and coffee in 
            the fashion you feel most comfortable with, dine-in, 
            take-out, or home delivery.  Please check the specific 
            hours of your nearest deli at druxys.com.
            We are fiercely Canadian, purchasing safely prepared 
            Canadian made products.  And, as a restaurant we follow 
            the strict protocols dictated by Public Health.
            <br /><br />Once inside our delis you will notice:

            <ul>
            <li>limited seating</li>
            <li>staff scurrying about ensuring tables and chairs, 
            washrooms, door handles and all other contact surfaces 
            are sanitized</li>
            <li>all food and beverages are served in disposable 
            (and where available compostable) containers to ensure 
            each meal is as contact free as possible</li>
            <li>home delivery is in safety sealed bags</li>
            <li>our menu has been simplified by Corporate Chef Cameron 
            Bryce to ensure that you can be served the freshest food 
            quickly and safely</li>
            </ul>
           
            For home delivery or pick-up contact the service you prefer,
            DoorDash, Ritual, Skip the Dishes or UberEats.

            We look forward to serving you soon, whether for breakfast, 
            lunch or a snack.  Our great deli food will always hit the 
            spot!

            Meanwhile keep safe, be kind to others and thank you for 
            doing your part!

            <br /><br /><br />Peter Druxerman,
            <br />VP Marketing,
            <br />DRUXY’S Famous Deli.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }
export default Dropdown;
  