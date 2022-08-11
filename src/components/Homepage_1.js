function Homepage_1(props) {
    const name = "Muhammad Hafiz Bin Mohd Nasarudin"
    const dob = "19 March 1999"
    return (
        <div>
            <h1 style={{color: "red"}}>Biodata</h1>
            <p><b>Name</b>: {name}</p>
            <p><b>Date of Birth</b>: {dob}</p>
            <p><b>Tools and Programming Languages</b>: Insert Images</p>
            <p>Profile Picture</p>
            <p>{props.title}</p>
            <p>{props.number}</p>
        </div>
  )
}

Homepage_1.defaultProps = {
    title: "Hello",
}

export default Homepage_1