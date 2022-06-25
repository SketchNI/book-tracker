import styles from '../styles/Home.module.css'
import axios from "axios";
import Book from '../components/book';

export async function getStaticProps() {
    const fetched_books = await axios.get(`${process.env.APP_URL}/api/books`);

    return {
        props: {
            books: fetched_books.data,
        }
    }
}

export default function Home({books}) {
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
