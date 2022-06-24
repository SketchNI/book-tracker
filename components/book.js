import styles from '../styles/Book.module.css';

export default function Book(props) {
    let regex = /(Kindle|ebook)/;
    return (
        <>
            <div className={styles.book}>
                <h1 className={styles.title}>
                    <span>{props.book.title}</span>
                </h1>
                <div className={styles.book_meta}>
                    <p className={styles.author}>{props.book.author}</p>
                    <p className={styles.published}>
                        {props.book.dates.published}
                    </p>
                    <p className={styles.rating}>⭐ {props.book.ratings.mine}/5</p>
                    <span className="text-base opacity-70">
                    { props.book.binding !== null
                        ? props.book.binding.match(regex) ? '💻 eBook' : `📗 ${props.book.binding}`
                        : '💻 eBook'
                    }
                </span>
                </div>
                <p className={[styles.review, props.book.review ?? styles.empty].join(' ').trim()}>
                    {props.book.review ?? ' - No review - '}
                </p>
            </div>
        </>
    )

}