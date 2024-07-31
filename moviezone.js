import React, { useState } from 'react';
import './moviezone.css'; // Import your CSS file

function MovieZone() {
    const [movie, setMovie] = useState({
        title: "Pataal Bhairavi",
        description: "Pataal Bhairavi Is A Hindi Swashbuckling Fantasy Movie, Directed By K. Bapaiah, Starring Jeetendra, Jaya Prada, Dimple Kapadia, Pran And Amjad Khan In The Lead Roles. When Ramu Is Challenged By Indumati's Father To Garner Wealth In Order To Marry Her, He Seeks Help From Mantrik Who Assists Him. Soon, Indumati Gets Kidnapped And Ramu Sets Out To Rescue Her.",
        imageUrl: require('./assests/og1.jpg') // Set a default image URL
    });

    const changeBackgroundImage = (imageUrl, title, description) => {
        setMovie({
            title: title || movie.title,
            description: description || movie.description,
            imageUrl: imageUrl || movie.imageUrl
        });
    };

    return (
        <div>
            <section className="container">
                <div className="head">
                    <img src={require('./assests/netflixlogo.png')} alt="" />
                </div>
            </section>
            <div id="home-image" class="home-image" style={{backgroundImage: url($(movie.imageUrl))}}>
                <div class="home-image-text">
                    <h1 id="movie-title">{movie.title}</h1>
                    <p id="movie-description">{movie.description}</p>
                    <a style={{textDecoration: "none"}} href="C:\Users\Harshitha\OneDrive\Desktop\netflix\Netflixclone.github.io\assests\Patala Bhairavi.mp4">
                        <p class="play-button">Play
                            <img src={require('./assests/play.png')} alt="" />
                        </p>
                    </a>
                </div>
            </div>
            <p id="movie-description" class="movie-description">hello</p>
            <div class="original">
                <h3 class="no-title">Netflix Originals</h3>
                <div class="no">
                    <img src={require('./assests/og1.jpg')} alt="" onClick={() => changeBackgroundImage('assests/og1.jpg','Srimanthudu','Harsha, a multi-millionaires heir who has everything, still feels that there is something missing in his life. In an attempt to fill the void, he adopts a village to bring change in the people.')} />
                    {/* Add onclick attribute to all other poster images as well */}
                </div>
            </div>
            {/* Add other sections for Top Rated, Comedy Movies, Romantic Movies, Action Movies with onclick attribute on each poster image */}
            <div class="original1">
                <h3 class="no-title">Comedy Movies</h3>
                <div class="no">
                    <img src={require('./assests/co1.jpg')} alt="" onClick={() => changeBackgroundImage('assests/co1.jpg','MayaBazaar','Balarama promises Subhadra to get his daughter married to her son. But when the Pandavas loses their kingdom to the Kaurava\'s, Balarama breaks his promise.')} />
                    {/* Add onclick attribute to all other poster images as well */}
                </div>
            </div>
            {/* Add other sections for Romantic Movies, Action Movies, etc. */}
        </div>
    );
}

export default MovieZone;