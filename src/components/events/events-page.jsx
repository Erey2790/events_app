import React from 'react'
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
      
      
        {data.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
            <a className='card'>
                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                <h3>{ev.title}</h3>
            </a>
            </Link>
        ))}
        
      
    </div>
    )
}

export default AllEvents