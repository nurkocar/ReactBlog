import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Nur');


    return (
        <div className='create'>
            <h2> Add a new blog </h2>
            <form>
                <label htmlFor="">Blog Title</label>
                <input
                    required
                    type="text"
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog Body</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                />
                <label htmlFor="">Blog Author</label>
                <select 
                    name="" 
                    id=""
                    value = { author }
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Nur">Nur</option>
                    <option value="Ihsan">Ihsan</option>
                </select>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>


        </div>
    );
}

export default Create;