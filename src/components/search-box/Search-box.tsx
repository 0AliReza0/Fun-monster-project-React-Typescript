import React, {Component} from 'react';

import './search-box.styles.css'

interface Props{
    searchInputHandler:(event:React.ChangeEvent<HTMLInputElement>) =>void
    placeholder:string
    className:string
}

class SearchBox extends Component<Props> {
    render() {
        const {searchInputHandler: handler,placeholder,className} = this.props

        return (
            <>
                <input
                    dir='rtl'
                    className={`search-box ${className}`}
                    type='search'
                    placeholder={placeholder}
                    onChange={handler}
                />
            </>
        );
    }
}

export default SearchBox;