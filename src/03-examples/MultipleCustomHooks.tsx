import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quotes} = !!data && data;
    
    console.log('quotes!!!',quotes)
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            { 
                isLoading 
                    ? <LoadingQuote />
                    : <Quote quotes={quotes} author={author} />                 
            }

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={ () => increment(1) }>
                    Next Quote
            </button>
        </>
    )
}