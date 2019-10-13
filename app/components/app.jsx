import React, {createElement, useState} from "react";
import { format } from "util";

export default function app (props) { 
    var [list, setList] = useState([]);
    var [Newitem, setNewitem] = useState("")

    var addItem = () => {setList (list.concat([Newitem]))}

    return <main>
        <header><h1>To-do {Newitem}</h1> </header>
        <section>
            <input placeholder="insira aqui sua tarefa"
            value={Newitem} onChange={(e) => setNewitem (e.target.value)}/>
            <button onClick={addItem}>Adicionar Item</button>

            <ul> {list.map ((item)=> <li>{item}</li>)
            }
            </ul>
        </section>
    </main>
}
