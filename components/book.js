import styles from '../styles/Book.module.css';

export default function Book(props) {
    let regex = /(Kindle|ebook)/;
    return (
        <div className={styles.book}>
            <h1 className={styles.title}>
                <span>{props.book.title}</span>
            </h1>
            <div className={styles.book_meta}>
                <p className={styles.author}>{props.book.author}</p>
                <p className={styles.published}>
                    {props.book["original publication year"] ?? props.book['year published']}
                </p>
                <p className={styles.rating}>⭐ {props.book["my rating"]}/5</p>
                <span className="text-base opacity-70">
                    {props.book.binding.match(regex) || props.book.binding === '' ? '💻 eBook' : `📗 ${props.book.binding}`}
                </span>
            </div>
        </div>
    )

}