import './body.css';
import Nav from '../nav/nav';
import Breakout from '../breakout/breakout';
import Todo from '../todo/todo';

const Body = () => {


    return(
        <div className = 'Body'>
            <Nav />
            <Breakout />
            <div id = 'content'>
                <div id = 'side-nav-holder'>
                    <Todo />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


export default Body;