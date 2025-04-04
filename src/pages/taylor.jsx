import React from "react";
import '../pages/taylor.css';
import Navbar from '../components/navbar';
import Footer from "../components/footer";

function Taylor() {
  return (
    <div id="about-taylor">
      <Navbar />
      <div className="flex-container">
        <img src="https://www.billboard.com/wp-content/uploads/2023/11/DO-NOT-USE-BBMA-2023-Taylor-Swift-2023-billboard-music-awards-acceptance-billboard-1548.jpg?w=1024" alt="" style={{width:"600px",marginLeft:"20px",height:'600px'}}/>
        
        <div className="taylor-info">
          <div>
            <h1 className="taylor-title">It's me! Hi! I'm the problem, it's me!</h1>
            <p className="taylor-description">
            Taylor Swift isn’t just a singer-songwriter—she’s a storyteller, a visionary, and an artist who has shaped an entire generation with her music. From her country roots to her pop anthems and indie masterpieces, she’s constantly reinvented herself while staying true to her emotions and experiences. Every album feels like a new chapter, and every song feels like a page from a diary we all relate to. With countless Grammy wins and record-breaking achievements, she’s more than an icon—she’s a force. But beyond the awards and accolades, it’s her ability to connect with us, to make us feel seen and understood, that makes her truly legendary.


            </p>
            <ul className="taylor-details">
              <li><strong>Born:</strong> December 13, 1989</li>
              <li><strong>Genres:</strong> Pop, Country, Indie</li>
              <li><strong>Achievements:</strong> Over 200 million records sold worldwide, numerous Billboard chart records, and a dedicated fanbase known as "Swifties".</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Taylor;