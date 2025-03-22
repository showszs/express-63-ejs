export const getUsersHandler  = (req, res) => {

    const title = "Users"

    const users = [
        { id: 1, name: 'John', age: 18 },
        { id: 32, name: 'Max', age: 22 },
        { id: 34, name: 'Cherry', age: 39 },
        { id: 52, name: 'Arnold', age: 29 },
        { id: 22, name: 'Elvis', age: 13 },
        { id: 3, name: 'Ali', age: 17 }
    ]

    res.render('users',  {users, title} )
}

export const postUsersHandler = (req, res) => {
    res.end("Post users Route")
}

export const getUsersByIdHandler = (req, res) => {
    const users = [
        { id: 1, name: 'John', age: 18 },
        { id: 32, name: 'Max', age: 22 },
        { id: 34, name: 'Cherry', age: 39 },
        { id: 52, name: 'Arnold', age: 29 },
        { id: 22, name: 'Elvis', age: 13 },
        { id: 3, name: 'Ali', age: 17 }
    ]
    const userId = parseInt(req.params.userId); 
    const user = users.find(u => u.id === userId); 

    if (user) {

        res.render('user', { user: user });
    } else {
        res.status(404).send('Користувач не знайдений');
    }
}

export const putUsersByIdHandler = (req, res) => {
    const {userId} = req.params
    res.end(`Put User by id Route:${userId}`)
}

export const deleteUsersByIdHandler = (req, res) => {
    const {userId} = req.params
    res.end(`Deleeeeete User by id Route:${userId}`)
}