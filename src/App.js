function App() {
const title= 'Blog Post'
const body = 'This is my blog post'
const comments = [
    {id:1, text: 'comment one'},
    {id:2, text: 'comment two'},
    {id:3, text: 'comment three'},
    ]

    const loading = false;
    const showComments = true;

    if (loading) {
        return <h1>Loading... </h1>
    }
    


    return (
        <div className='container'>
             <h1>{title}</h1>
             <p>{body.toUpperCase()}</p>
             <p>{5+5}</p>

             <p>{Math.random() * (5+5)}</p>

             {showComments && (    
                <div className='comments'>
                <h3>comments ({comments.length})</h3>
                <ul>
                     {comments.map((comment, index) => (
                         <li key={index}>{comment.text}</li>
                     ))}
                </ul>
            </div>)}

         
        </div>
       
    )
}

export default App;