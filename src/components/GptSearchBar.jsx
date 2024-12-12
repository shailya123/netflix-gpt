import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptSearchMovies } from '../utils/gptSlice';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const searchMovieTMDB = async (movie) => {
        const url = `https://api.themoviedb.org/3/search/movie??query=${movie}&include_adult=false&page=1`;
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        return json;
    }

    const handleGptSearchClick = async () => {
        const text = searchText.current.value;

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + `${text}. ` + "Only give me names of 5 top movies among them, comma separated like the example result given ahead. Example Result: Shant, K.G.F, K.G.F-2, Gadar, Sholay, O.M.G";
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: gptQuery }],
        });
        if (!stream.choices) {
            console.error();
        }
        const gptMovies = stream.choices?.[0]?.message.content.split(",");
        const data = gptMovies.mao(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(data);
        dispatch(addGptSearchMovies({movieNames:gptMovies,movieResults:tmdbResults}));
    }

    return (
        <div className='pt-[20%] flex justify-center'>
            <form className=' bg-black w-1/2 grid grid-cols-12 rounded-md' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button onClick={handleGptSearchClick} className=' m-4 py-2 px-5 bg-red-500 text-white rounded-md col-span-3'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
