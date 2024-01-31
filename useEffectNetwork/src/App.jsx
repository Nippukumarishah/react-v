import { useState, useEffect } from 'react'
import PostItem from './component/PostItem'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [page, setpage] = useState(8);
  
  useEffect(() => {
    fetchData(page)
  },[page])

  const fetchData = async ()=> {
    setLoading(true);
    try {
      let res =await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      let result = await res.json();
      setPosts(result);
    } catch (error) {
      setErr("Error fetching data")
    }
    finally{
      setLoading(false);
    }
  };



  return (
    <>
    <h2 style={{fontSize: "26px", color: "red",}}>Network Fetch data</h2>
      {err ? (<p style={{color:"orange", fontSize:"20px", }}>{err}</p>
      ):(
        <div>
          {loading ? (
            <p>Data Loading...</p>
          ):(
            <PostItem post={posts} />
          )}
        </div>
      )}
      <div className="btns">
        <button onClick={() => setpage(page-1)} disabled={loading || err || page ==1 ? true: false}>Prev</button>
        <span style={{ margin: "0 10px"}}>{page}</span>
        <button onClick={() => setPage(page+1)} disabled={loading || err || page == 6 ? true: false}>Next</button>
      </div>
      
    </>
  )
}

export default App
