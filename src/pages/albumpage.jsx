import React from 'react';
import './albumpage.css';
import AlbumCard from '../components/albumcard';
import Navbar from '../components/navbar';
import ts from '../assets/ts.jpeg';
import fearless from '../assets/fearless.jpeg';
import speaknow from '../assets/speaknow.jpg';
import red from '../assets/red.jpeg';
import t1989 from '../assets/1989.jpeg';
import rep from '../assets/rep.jpeg';
import lover from '../assets/lover.jpg';
import folklore from '../assets/folklore.jpeg';
import evermore from '../assets/evermore.jpeg';
import midnights from '../assets/midnights.jpeg';
import ttpd from '../assets/ttpd.jpeg';

const Home = () => {
    return (
        <div className='albums'>
            <Navbar />
            <h1>Albums</h1>
            <div className="albumpage">
                <main className="main-content">
                    <AlbumCard album={{ title: "Taylor Swift", description: "Taylor's self-titled debut album, showcasing her early country roots and heartfelt storytelling, released in 2006.", cover: ts }} />
                    <AlbumCard album={{ title: "Fearless (Taylor's Version)", description: "A reimagined version of her 2008 breakthrough album, featuring new recordings and additional tracks that celebrate her growth as an artist.", cover: fearless }} />
                    <AlbumCard album={{ title: "Speak Now", description: "An entirely self-written album released in 2010, blending country and pop with personal narratives and vivid imagery.", cover: speaknow }} />
                    <AlbumCard album={{ title: "Red (Taylor's Version)", description: "This re-recorded edition of her 2012 album captures the emotional complexity of love and heartbreak, featuring the iconic 10-minute version of 'All Too Well'.", cover: red }} />
                    <AlbumCard album={{ title: "1989", description: "Her first official pop album, released in 2014, marked a significant shift in her musical style, filled with catchy hooks and synth-driven melodies.", cover: t1989 }} />
                    <AlbumCard album={{ title: "Reputation", description: "Released in 2017, this album explores themes of fame, media scrutiny, and personal reinvention, featuring a darker and edgier sound.", cover: rep }} />
                    <AlbumCard album={{ title: "Lover", description: "A celebration of love and positivity, this 2019 album features a diverse range of sounds and heartfelt lyrics, showcasing her evolution as an artist.", cover: lover }} />
                    <AlbumCard album={{ title: "Folklore", description: "Released in 2020, this indie-folk-inspired album offers a more introspective and narrative-driven approach, reflecting on personal and fictional stories.", cover: folklore }} />
                    <AlbumCard album={{ title: "Evermore", description: "A companion album to Folklore, released in 2020, it continues the exploration of storytelling and features collaborations with other artists.", cover: evermore }} />
                    <AlbumCard album={{ title: "Midnights", description: "Released in 2022, this album delves into the thoughts and emotions that surface during the quiet hours of the night, blending introspection with catchy melodies.", cover: midnights }} />
                    <AlbumCard album={{ title: "The Tortured Poet's Department", description: "A 2022 release that explores the complexities of creativity and emotion, offering a deep dive into the mind of an artist grappling with their craft.", cover: ttpd }} />
                </main>
            </div>
        </div>
    );
};

export default Home;
