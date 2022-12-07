import React from 'react'
import ReactDOM from "react-dom"
import "./App.css"
import marked from "marked"

const initialState = `
    this is a paragraph
    # heading
    ## heading2
    **this is a bolded text**

    > Block Quotes!
    



    - list item 1
    - list item 2 
    - list item 3

    [Visit my website](https://florin-pop.com)

    this is a inline \`<div></div>\`


    this is a block of code

    \'\'\'
    let x = 1 ;
    let y = 2 ;
    let z = x + y;

    \'\'\'

    ![React](https://goo.gl//Umyytc)




    `



class App extends React.Component{

    state= {
        text: initialState
    }

    handleChange = () => {
        this.setState({
            text: e.target.value 
        })
    }
    render(){
        const {text} = this.state;
        const markdown = marked(text, {breaks: true})
        return(
            <div>
                <h1>  convert your markdown</h1>
                <div className="row">
                    <div className="col-6" >
                        <h5 className="text-center text-white m-4"> enter your markdown here </h5>
                        <textarea id="editor p-2" value={text} onChange={this.handleChange}  />
                    </div>
                    <div className='col-6 preview' id='previewer p-2' >
                        <h5 className="text-center text-white"> see the result</h5>
                        <div className="preview rounded  dangerouslySetHTML={{__html: markdown}}" id="preview">
                        <p> abcdefg </p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default App
