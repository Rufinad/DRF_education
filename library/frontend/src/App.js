import './App.css';
import React from 'react';
import axios from "axios";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AuthorList from "./components/Author";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        };
    }

    componentDidMount() {
        axios.get(`'http://localhost:8000/api/authors'`)
            .then(response => {
                const authors = response.data
                this.setState(
                    {
                        'authors': authors
                    }
                )
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Menu/>
                <AuthorList authors={this.state.authors}/>
                <Footer/>
            </div>
        );
    }
}

export default App;