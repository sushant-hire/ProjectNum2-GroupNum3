import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

// const Home = () => {

//     return (
//         <div className="homepage" style={styles.homepage}>
//             <img src="http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-03-1920-x-1080.jpg" alt="description" style={styles.image} />
//             <div className="image-text" style={styles.imageText}>
//                 "Take care of your <span style={{ color: 'red' }}>body</span>. It's the only place you have to  <span style={{ color: 'red' }}>live</span>."
//             </div>
//             <Link to='/register'><button style={styles.buttonDesign}>Join Us</button></Link>
//         </div>
//     );
// };

// const styles = {
//     homepage: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//     },
//     imageText: {
//         position: 'absolute',
//         top: '30%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: 'white',
//         fontSize: '53px',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     buttonDesign: {
//         color: 'white',
//         backgroundColor: 'red',
//         position: 'absolute',
//         top: '64%',
//         left: '51%',
//         transform: 'translate(-50%, -50%)',
//         fontSize: '22px',
//         padding: '10px',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         borderRadius: '10px',
//         border: '1px red',
//         cursor: 'pointer',
//         width: '10%',
//     }
// };



const Home = () => {

    return (
        <div className="HomeContainer">
            <img className="HomeImage" src="http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-03-1920-x-1080.jpg" alt="description" />
            <div className="HomeImageText">
                "Take care of your <span style={{ color: 'red' }}>body</span>. It's the only place you have to  <span style={{ color: 'red' }}>live</span>."
            </div>
            <Link to='/register'><button className="HomeJoinUsButton">Join Us</button></Link>
        </div>
    );
};


export default Home