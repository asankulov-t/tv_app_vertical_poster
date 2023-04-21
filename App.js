import React, { useState, useEffect } from "react";
import {

    Dimensions, Image,

} from "react-native";
import TimedSlideshow from "react-native-timed-slideshow";


const { width, heigth } = Dimensions.get("window");
let flatList;

const App=()=>{
    let [movies, setMovies] = useState();
    const url = "https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data";
    const fetchPopular = async () => {
        const data = await fetch(url);
        const res = await data.json();
        setMovies(res)
        console.log(res)
    };



    let resultOfimg=movies&&movies.map((t)=>{
        return t.uri
    })
    console.log(resultOfimg)
    useEffect(()=>{
       fetchPopular()
    },[])
    return(
        movies&&<TimedSlideshow textStyle={{height:"250px"}} items={movies}/>

    )
}

const styles = {
    slider: {
        backgroundColor: '#fff',
        overflow: 'hidden',
        width: '100%',
        height: "100%",
    },
    slide: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
}


export default App;





