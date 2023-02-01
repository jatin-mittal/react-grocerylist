import React from 'react'

function Footer({length}) {
    return (  
        <>
        <footer>
        
          <h2>{length} List {length===1 ? "item" : "items"} </h2>
        </footer>
        </>
    );
}

export default Footer;

