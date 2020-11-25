import React, {useState} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'
import '../style.css'
import VideoDetail from './VideoDetail'

const App = () => {
    const [ videos, setVideos ] = useState([])
    const [ selectedVideo, setSelectedVideo ] = useState(null)

    const handleAPICall = async (term) => {
        const response = await youtube.get("/search", {
             params: {
                 q: term
             }
         })
         console.log(response)
         setVideos(response.data.items)
         setSelectedVideo(response.data.items[0])
     }

     const onVideoSelect = (video) => {
         setSelectedVideo(video)
         console.log("video" + selectedVideo)

     }

    return <div className="ui container">
    <SearchBar onFormSubmit={handleAPICall}/>
    <div className="ui grid">
        <div className="ui row">
            <div className="eleven wide column">
    <VideoDetail video={selectedVideo} />
    </div>
    <div className="five wide column">
    <VideoList onVideoSelect={onVideoSelect} videos={videos} />
    </div>
    </div> 
    </div>
    </div>
}

export default App;