function API_2({list}) {

  function countFunc(){
    let tempmap =  new Map()
    for(let i in unique){
      let index = 0
      for(let j in list){
        if(list[j] == unique[i]){
          index += 1
        }
      }
      tempmap.set(unique[i], index)
    }
    return tempmap
  }

  const unique = [...new Set(list)]
  const count = countFunc()
  const countDisplay = Array.from(count.entries(), ([key, value]) => <p>{key + ": " + value}</p>  )

  return (
    <div>
      {countDisplay}
    </div>
  )
}

export default API_2