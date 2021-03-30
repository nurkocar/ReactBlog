import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Nur');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = ((e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true);

        fetch(('http://localhost:8000/blogs'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog has been added')
            setIsPending(false);
            history.push('/')
        })
    })

    return (
        <div className='create'>
            <h2> Add a new blog </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input
                    required
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label htmlFor="">Blog Author</label>
                <select
                    name=""
                    id=""
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Nur">Nur</option>
                    <option value="Ihsan">Ihsan</option>
                </select>
                <button>{!isPending ? 'Add blog' : 'Adding...'}</button>
                {/* {isPending && <button>Adding...</button>} */}
            </form>

            {/* 
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}


        </div>
    );
}

export default Create;