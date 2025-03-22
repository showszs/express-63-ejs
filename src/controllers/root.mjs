export const getRootHandler = (req, res) => {
    const title = "Root"

    const greet = "This is Root page"

    res.render('root',  {title, greet} )
}