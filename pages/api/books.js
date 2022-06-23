// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { parse, transform, stringify } from 'csv/sync';
import axios from "axios";

export default async function handler(req, res) {
    const url = 'https://gist.githubusercontent.com/SketchNI/bb348e4d651bae88034c2cad23d68292/raw/7380401b64dd327ffb75d63c64546a3fb169ed70/goodreads_books.json';

    const data = await axios.get(url);
    res.status(200).json(data.data);
}
