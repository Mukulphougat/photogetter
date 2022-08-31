import axios from "axios";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
// import down from "./icons8-download-64.png";

function App() {
    const [state, setState] = useState([]);
    const [cQuery, setQuery] = useState('nature');
    // const dotenv = require("dotenv");
    // dotenv.config()
    const unsplashApi = 'XRVFhZfszh4RQji82Ejyj8gNAeaYYcRuPcDsExDq6dQ';
    // console.log(unsplashApi);
    // const [urls, setUrls] = useState([]);
    // const [size, setSize] = useState(0);
    const data = async () => {
        if ( cQuery === '') return;
        const response = await axios.get(`https://api.unsplash.com/search?per_page=18&query=${cQuery}s&client_id=${unsplashApi}`);
        setState(response.data.photos.results);
        // let cUrls = []
        // for ( let i = 0 ; i < state.length ; i++ ) {
        //     cUrls.push(await getDownloadURL(state[i].id));
        // }
        // for ( let i = 0 ; i < cUrls.length ; i++ ) {
        //     console.log(cUrls[i]);
        // }
        // setUrls(cUrls);
        console.log(response.data.photos.results[0]);
    }
    // const likePhoto = async (id) => {
    //     const response = await axios.post(`https://api.unsplash.com/photos/${id}/like?client_id=${unsplashApi}`);
    //     // console.log(response.data)
    //     return response.data;
    // }
  return (
      <AnimatePresence>
          <motion.div className={"flex flex-col bg-amber-50 backdrop-blur backdrop-blur-2xl align-center justify-center w-full h-full"}>
              <motion.div className={"flex sm:flex-row flex-col justify-center sm:h-16 h-24 w-full shadow shadow-lg shadow-gray-200"}>
                  <div className={"my-2"}>
                      <input type={"text"} className={"sm:mx-0 mx-8 border border-black sm:w-96 sm:w-56 h-14 placeholder:text-2xl placeholder:font-medium text-2xl h-12"} onChange={(e) => setQuery(e.target.value)} placeholder={"Enter Search Term"}/>
                      <button className={"sm:max-0 mx-8 w-56 self-end text-blue-600 font-mono font-medium text-2xl underline hover:no-underline"} onClick={() => data()}>Search</button>
                  </div>
              </motion.div>
              <div className={"sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col justify-center mx-auto"}>
                  {
                      state !== null
                          ?
                          state.map((item, index) => {
                          return (
                              <div className={"self-center shadow shadow-lg shadow-gray-200 my-14 mx-12 rounded-2xl w-3/4"} key={index}>
                                  <motion.img initial={{ x : -500 }} animate={{ x:0 }} exit={{ x:-500 }} whileHover={{ scale: 1.1 }} className={"rounded-2xl w-fit"} src={item.urls.regular} alt={`unsplash ${index}`}/>
                                  <div className={"mx-2 my-2 flex flex-row align-middle justify-between"}>
                                      <div className={"font-mono flex flex-row my-1 justify-between font-medium text-emerald-500 text-xl"}>
                                          <img src={item.user.profile_image.medium} className={"my-3 w-14 h-14 rounded-3xl"} alt={"profile"}/>
                                          <div className={"mx-2 my-3"}>
                                              <div>{item.user.name}</div>
                                              <a className={"text-blue-600 hover:text-blue-300"} href={`https://unsplash.com/@${item.user.username}`} target={"_blank"} rel={"noreferrer"}>UnSplash</a>
                                              {/*<div>*/}
                                              {/*    { item.user.links.instagram_username !== "" ?*/}
                                              {/*        <a className={"text-blue-600 hover:text-blue-300"} href={item.user.links.self} target={"_blank"} rel={"noreferrer"}>Instagram</a>*/}
                                              {/*        :*/}
                                              {/*        <span></span>*/}
                                              {/*    }*/}
                                              {/*</div>*/}
                                          </div>
                                      </div>
                                      {/*<button onClick={()=>likePhoto(item.id)}><motion.img whileTap={{ scale: 0.5 }} src={down} className={"self-end h-10"} alt={"download"}/></button>*/}
                                  </div>
                              </div>
                              )
                         })
                          : <h1>NO DATA!</h1>
                  }
              </div>
              <div className={"backdrop-blur backdrop-blur-lg bg-gray h-10 overflow-hidden w-full"}>
                  <div className={"flex my-2 sm:flex-row justify-center flex-col"}>
                        <h1 className={"self-center font-mono text-2xl"}>Created By <a className={"text-blue-600"} href={"https://portfolio-one-wine-77.vercel.app/"} target={"_blank"} rel={"noreferrer"}>Mukul Phougat</a></h1>
                  </div>
              </div>
          </motion.div>
      </AnimatePresence>

  );
}

export default App;
