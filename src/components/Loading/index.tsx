// import sample from '../../../public/video.mp4';

export default function Loading() {
    return (
        <>
            <div className={"loading d-flex j-center"}>
                <video className='videoTag' autoPlay loop muted>
                    <source src={"video.mp4"} type='video/mp4'/>
                </video>
                <div className={"text d-flex j-center"}>
                        <p>Привет!</p>
                </div>
            </div>
        </>
    )
}