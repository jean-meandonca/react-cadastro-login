import api from "../../services/api"
import {useEffect, useState} from "react"

function ListarUsuarios(){
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {
    async function loadUsers(){
        const token = localStorage.getItem('token')
        const {data: {users}}  = await api.get('/listar-usuarios', {
            headers:  {Authorization: `Bearer ${token}` }
        })

       setAllUsers(users)
    }
       
        loadUsers()
    }, [])

    return (
        <div>
            <h2>Listar Usuários</h2>
        </div>
    )
}

export default ListarUsuarios