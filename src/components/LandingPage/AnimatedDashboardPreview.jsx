import React from "react";
import videoFile from "../../assets/video/typetext.mp4";

const VideoDelivery = () => {
    return (
        <div className="flex justify-center items-center px-12  bg-[#0F071F] overflow-hidden">
            <video
                className="rounded-lg shadow-lg object-cover"
                loop
                autoPlay
                muted
                style={{
                    width: "100%", // Makes the video responsive
                    height: "100%",
                    objectFit: "cover", // Ensures the video fills the container
                    objectPosition: "center -50px", // Crops from the top by 50px
                    clipPath: "inset(240px 0px 360px 0px)", // Crops top and bottom by 100px
                }}
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoDelivery;

