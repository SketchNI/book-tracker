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
                setBooks(fetched_books.data);
                setLoaded(true);
            }
        })();
    }, [books, isLoaded]);

    return (
        <div className={styles.container}>
            <div className="flex flex-col space-y-5 divide-y divide-zinc-800">
                {books.map((book, i) =>
                    <Book key={`${book.book_id}-${i}`} book={book}/>
                )}
            </div>
        </div>
    )
}
