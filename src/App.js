import React, { useState, useEffect } from 'react';
import Result from './components/Result'
import Header from './components/Header'
import Search from './components/Search'
import data from './json/data.json'


function App() {
    let [search, setSearch] = useState('');
    const [newEmojis, setNewEmojis] = useState([])
    const [emojiData, setEmojiData] = useState();

    useEffect( () => {
        setEmojiData(data);
    }, [])

    useEffect( () => {
        // get a array of search words
        const searchQuery = search.toLowerCase().trim().split(' ');

        // get the array length (to make the decision if the emoji is worth to show or not)
        const nrWords = searchQuery.length;

        // create a query match counter
        let matchCounter = 0;

        // create an array to fill with the new emojis
        let resultEmojis = [];

        // if search has content
        if ( nrWords > 0 ) {
            // iterate every emoji
            emojiData && emojiData.forEach( (emoji) => {
                // remove the duplicates of the emoji's keywords using a Set
                const emojiKeywordsArray = [...new Set(emoji.keywords.trim().split(' '))];

                // reset the counter
                matchCounter = 0;

                // iterate the search query
                searchQuery && searchQuery.forEach( query => {
                    // iterate the emoji's keywords
                    emojiKeywordsArray.forEach( keyword => {
                        // if the word exists in the emoji's keywords
                        if (keyword.indexOf(query) >= 0) {
                            matchCounter++;  // then update the counter
                        }
                    })
                })

                // if counter is >= the number of words of the search query, then the emoji must be shown
                if ( nrWords <= matchCounter ) {
                    resultEmojis.push(emoji);
                }
            })
        }
        // update the newEmojis state
        setNewEmojis(resultEmojis);

    }, [search])

    const handleChange = (newSearch) => {
        // update search state
        setSearch(newSearch.toLowerCase());
    }

    return (
      <>
        <Header />
        <Search onChange={handleChange}/>
        <Result list={search === '' ? emojiData : newEmojis} />

    </>
    );
}

export default App;
