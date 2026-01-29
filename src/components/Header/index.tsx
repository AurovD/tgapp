
import {ReactNode} from "react";

interface HeaderProps {
    children: ReactNode;
}

export default function Header({children}: HeaderProps) {
    return (
        <div className={"header d-flex"}>
            {children}
            {/*<div>*/}
            {/*    <h1 className="greeting">*/}
            {/*        <span>Привет,</span>*/}
            {/*        <span>{user_name}!</span>*/}
            {/*    </h1>*/}
            {/*    <p className={"location"}>Москва, Россия</p>*/}
            {/*</div>*/}
            {/*<div className={"creating"}>*/}
            {/*    <Link href="/create">Создать событие</Link>*/}
            {/*</div>*/}
        </div>
    )
}