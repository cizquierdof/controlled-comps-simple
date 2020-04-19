import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (
            <div>
                search: 
                <input name='filtro' type='text' onChange={this.props.setFilter}/>
            </div>
        )
    }
}

export default Search
