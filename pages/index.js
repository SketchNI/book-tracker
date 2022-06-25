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

export default function Home({ books }) {
    return (
        <div className="m-4">
            <div className="flex flex-col">
                <div className="space-y-5">
                    {books.map((book, i) =>
                        <Book key={`${book.book_id}-${i}`} book={book}/>
                    )}
                </div>
            </div>
        </div>
    )
}
