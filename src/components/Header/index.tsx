
interface HeaderProps {
    user_name: string;
}

export default function Header({user_name}: HeaderProps) {
    return (
        <div className={"header d-flex"}>
            <div>
                <h1 className={"greeting"}>{user_name}!</h1>
                <p>Москва, Россия</p>
            </div>
            <div>

            </div>
        </div>
    )
}