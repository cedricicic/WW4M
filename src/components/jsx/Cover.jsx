import ReactMarkdown from 'react-markdown'

function Claude(props){
    return(
    <section className="suggested-recipe-container">
    <ReactMarkdown>
      {props.cover}
    </ReactMarkdown>
    </section>
    )
}

export default Claude