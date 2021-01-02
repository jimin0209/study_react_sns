import React, { useRef, useState, useEffect } from "react";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {
    const scrollEl = useRef(null);
    const [count, setCount] = useState<number>(12);
    const [loading, setLoading] = useState(false);


    const handleTimer = () => {
        setTimeout(() =>{
            setCount(count + 4);
            setLoading(false);
        }, 1000); //1000이면 1초
    };

    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight }: any = scrollEl.current;

        console.log(
            "scrollHeight:",
            scrollHeight,
            "scrollTop:",
            scrollTop,
            "clientHeight:",
            clientHeight
        );
        if(scrollTop + clientHeight >= scrollHeight - 20) {
            setLoading(true);
            handleTimer();
        }
    };


    useEffect(() => {
        document.getElementById("wrapper").addEventListener("scroll", handleScroll);


        return () => {
            document.getElementById("wrapper").removeEventListener("scroll", handleScroll);
        }
    }); // React 반 자바스크립트 반




    return(
         <FeedPresenter 
            scrollEl={scrollEl} 
            handleScroll={handleScroll} 
            count={count}
            loading={loading}
        />);
};

export default FeedContainer;