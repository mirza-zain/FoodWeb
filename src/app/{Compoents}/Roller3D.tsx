import Image from 'next/image'
import React from 'react'
import "./roller.css"

const Roller3D = () => {
  return (
    <div className='parent'>
        <div className='container'>
            <span className="img rounded-md" style={{"--i": 1 } as React.CSSProperties}>
                <Image
                    src='/img1.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 2 } as React.CSSProperties}>
                <Image
                    src='/img2.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 3 } as React.CSSProperties}>
                <Image
                    src='/img3.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 4 } as React.CSSProperties}>
                <Image
                    src='/img4.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 5 } as React.CSSProperties}>
                <Image
                    src='/img5.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 6 } as React.CSSProperties}>
                <Image
                    src='/img6.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 7 } as React.CSSProperties}>
                <Image
                    src='/img7.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
            <span className="img rounded-md" style={{"--i": 8 } as React.CSSProperties}>
                <Image
                    src='/img8.webp'
                    width={300}
                    height={300}
                    alt=''
                />
            </span>
        </div>
    </div>
  )
}

export default Roller3D