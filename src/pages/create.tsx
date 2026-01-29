"use client";

// import {mergeForm, useForm, useTransform} from "@tanstack/react-form";
// import { useState } from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function CreateItemForm() {
    // const [images, setImages] = useState<string[]>([]);

    // const form = useForm({
    //     ...formOpts,
    //     transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
    // })
    //
    // const formErrors = useStore(form.store, (formState) => formState.errors)

    return (
        <div className="container">
            <Header>Создать событие</Header>
            <Main>
                лорл

                {/*<form onSubmit={form.handleSubmit}>*/}
                {/*    <label>*/}
                {/*        Дата релиза:*/}
                {/*        <form.Field name="releaseDate">*/}
                {/*            {(field) => <input type="date" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />}*/}
                {/*        </form.Field>*/}
                {/*    </label>*/}

                {/*    /!* Описание *!/*/}
                {/*    <label>*/}
                {/*        Описание:*/}
                {/*        <form.Field name="description">*/}
                {/*            {(field) => <textarea value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />}*/}
                {/*        </form.Field>*/}
                {/*    </label>*/}

                {/*    /!* Тип *!/*/}
                {/*    <label>*/}
                {/*        Тип:*/}
                {/*        <form.Field name="type">*/}
                {/*            {(field) => (*/}
                {/*                <select value={field.state.value} onChange={(e) => field.handleChange(e.target.value)}>*/}
                {/*                    <option value="MOVIE">Фильм</option>*/}
                {/*                    <option value="GAME">Игра</option>*/}
                {/*                    <option value="ONLINE_MOVIE">Онлайн-фильм</option>*/}
                {/*                    <option value="BOOK">Книга</option>*/}
                {/*                    <option value="EVENT">Событие</option>*/}
                {/*                </select>*/}
                {/*            )}*/}
                {/*        </form.Field>*/}
                {/*    </label>*/}

                {/*    /!* Отправка формы *!/*/}
                {/*    <button type="submit">Создать</button>*/}
                {/*</form>*/}
            </Main>
        </div>
    );
}
