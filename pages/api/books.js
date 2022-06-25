// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    const url = 'https://gist.githubusercontent.com/SketchNI/bb348e4d651bae88034c2cad23d68292/raw/7380401b64dd327ffb75d63c64546a3fb169ed70/goodreads_books.json';

    let data = await fetch(url);
    data = await data.json();

    const book_array = [];
    for (let i = 0; i < data.data.length; i++) {
        let book = data.data[i];
        book_array.push({
            book_id: book['book id'],
            title: book.title,
            author: book.author,
            additional_authors: book.additional_authors === '' ? null : book.additional_authors,
            publisher: book.publisher,
            isbn: book.isbn === '' ? null : book.isbn,
            ratings: {
                mine: book['my rating'],
                average: book['average_rating']
            },
            binding: book.binding === '' ? null : book.binding,
            length: `${book['number of pages']} pages`,
            dates: {
                published: book['original publication year'],
                read: book['date read'] === '' ? null : book['date read'],
                added: book['date added']
            },
            review: book.review === '' ? null : book.review,
            read_count: book['read count'],
        })
    }

    res.status(200).json(book_array);
}
