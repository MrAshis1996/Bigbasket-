import React from 'react'

const Header2 = () => {
    return (
        <div style={{
            height: "78px", width: "100%",
            background: "red",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}>
            <div className='container' style={{ width: "80%" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <h1>hello</h1>
                    <h1>ashis</h1>
                </div>
            </div>
        </div>
    )
}

export default Header2