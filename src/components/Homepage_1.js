function Homepage_1({name}) {
    const dob = "19 March 1999"
    return (
        <div>
            <h1 style={{color: "white"}}>Biodata</h1>
            <p><b>Name</b>: {name}</p>
            <p><b>Date of Birth</b>: {dob}</p>
            <p><b>Tools and Programming Languages</b>: Insert Images</p>
            <p>Profile Picture</p>
            <hr />
        </div>
  )
}

Homepage_1.defaultProps = {
    name: "Hello World",
}

export default Homepage_1