// import sample from '../../../public/video.mp4';

export default function Loading() {
    return (
        <div className="loading d-flex j-center">
            <svg className="spinning-line" width="50" height="50" viewBox="0 0 40 40">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(0, 0%, 75%)" stopOpacity="1"/>
                        <stop offset="100%" stopColor="hsl(0, 0%, 75%)" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="30 100"
                />
            </svg>
        </div>
    )
}