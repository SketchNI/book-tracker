export default function Book(props) {
    let regex = /(Kindle|ebook)/;
    return (
        <div key={props.book.book_id} className="border border-[#3399ff] bg-zinc-800 rounded-md px-6 py-5">
            <h1 className="text-2xl font-medium mb-3 flex flex-row items-center space-x-4">
                <span>{props.book.title}</span>
            </h1>
            <div className="flex items-center space-x-4">
                <p className="text-xl font-light">{props.book.author}</p>
                <p className="text-xl opacity-70 font-light">
                    {props.book.dates.published}
                </p>
                <p className="text-green-300 text-xl">⭐ {props.book.ratings.mine}/5</p>
                <span className="text-base opacity-70">
                    {props.book.binding !== null
                        ? props.book.binding.match(regex) ? '💻 eBook' : `📗 ${props.book.binding}`
                        : '💻 eBook'
                    }
                </span>
            </div>
            <p className={`my-4 text-lg ${props.book.review ?? 'opacity-70 italic uppercase'}`}>
                {props.book.review ?? ' - No review - '}
            </p>
        </div>
    )

}