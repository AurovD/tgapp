// import sample from '../../../public/video.mp4';

export default function Loading() {
    return (
        <>
            <div className={"loading"}>
                <video className='videoTag' autoPlay loop muted>
                    <source src={"video.mp4"} type='video/mp4'/>
                </video>
                <div className={"text"}>
                        <p>Привет!</p>
                </div>
            </div>
        </>
    )
}