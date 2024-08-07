import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import Video from "@/components/Video";

const videos = [
    './assets/videos/video1.mp4',
    './assets/videos/video2.mp4',
    './assets/videos/video3.mp4',
    './assets/videos/video4.mp4',
]

export default function SimpleSlider() {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        cssEase: "ease",
        autoplaySpeed: 4000,
        pauseOnHover: true
    }
    return (
        <Slider {...settings} >
            {videos.map((video, index) => (
                <Video path={video} key={index} />
            ))}
        </Slider>
    )
}
