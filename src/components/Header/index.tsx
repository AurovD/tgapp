
interface HeaderProps {
    user_name: string;
}

export default function Header({user_name}: HeaderProps) {
    return (
        <div className={"header d-flex"}>
            <div>
                <h1 className="greeting">
                    <span>Привет,</span>
                    <span>{user_name}!</span>
                </h1>
                <p className={"location"}>Москва, Россия</p>
            </div>
            <div>

            </div>
        </div>
    )
}