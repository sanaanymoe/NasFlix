// import React from 'react';
// import { Link } from 'react-router-dom';
// import VideoIndexItem from './video_index_item';

// class MoviesIndex extends React.Component {

//     constructor(props){
//         super(props)
//         // this.selectVideosByType = this.selectVideosByType.bind(this)
//     }
//     componentDidMount() {
//         this.props.fetchAllVideos()
//     }

//     // selectVideosByType(videos){
//     //     debugger
//     //     let movies = [];
//     //     for (let i = 0; i < videos.length; i++) {
//     //         if (videos[i].video_type === "movie") {
//     //             movies.push(videos[i]);
//     //     }}

//     //     return movies;
//     // }

//     render() {
//         const { videos } = this.props
//         // debugger
//         return (
//             <div className="home-main-div">

//                 <header className="header-links">
//                     <div>

//                         {/* <Link className="nas-flix-logo" to="/"><p>NasFlix</p></Link> */}
//                         <Link className="nas-flix-logo" to="/"><img src="https://fontmeme.com/permalink/200627/49ea4c9322c8aa449bd39d80af5de911.png" alt="" /></Link>
//                         <Link className="header-link" to="">Home</Link>
//                         <Link className="header-link" to="">Movies</Link>
//                         <Link className="header-link" to="">TV Shows</Link>
//                     </div>
//                     <span>

//                         <button className="red-button" id="loout-button" onClick={this.props.logout}>Log Out</button>
//                     </span>
//                 </header>

//                 <ul className="video-player">
//                     {
//                         videos.map(movie => (
//                             <VideoIndexItem
//                                 video={movie}
//                                 key={movie.id}
//                             />
//                         ))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default MoviesIndex;