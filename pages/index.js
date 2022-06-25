import styles from '../styles/Home.module.css'
import Book from '../components/book';

export async function getStaticProps() {
    const fetched_books = await fetch(`https://sketchni.dev/api/books`);
    const books = await fetched_books.json();

    return {
        props: {
            books,
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
