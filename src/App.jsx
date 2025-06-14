
import './App.css'
import conf from './conf/conf'

function App() {
  console.log(conf.appwriteUrl)
  console.log(conf.appwriteProjectId)
  console.log(conf.appwriteDatabaseId)
  console.log(conf.appwriteCollectionId)
  console.log(conf.appwriteBucketId)
  return (
    <>
      <h1> A Twitter App With AppWrite</h1>
    </>
  )
}

export default App
