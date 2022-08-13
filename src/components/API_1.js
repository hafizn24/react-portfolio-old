function API_1({listname, listimage}) {

  return (
    <div>
      <br />
      <img src={listimage} alt= {listname}/>
      <h3>{listname}</h3>
    </div>
  )
}

export default API_1