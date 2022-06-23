import styles from '../styles/Home.module.css'
import axios from "axios";
import Book from '../components/book';
import { useEffect, useState } from "react";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            if (!isLoaded) {
                const fetched_books = await axios.get('/api/books');
                const b = [];
                for (let i = 0; i < fetched_books.data.length; i++) {
                    b.push(fetched_books.data[i])
                }
                setBooks(b);
                setLoaded(true);
            }
        })();
    }, [books, isLoaded]);

    return (
        <div className={styles.container}>
            <div className="flex flex-col space-y-5 divide-y divide-zinc-800">
                {books.map((book, i) =>
                    <Book key={`${book}-i`} book={book}/>
                )}
            </div>
        </div>
    )
}
