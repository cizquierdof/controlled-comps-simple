import React, { Component } from 'react'

export class TablaFiltrada extends Component {

    render() {
        //console.log('filtro: ',this.props.filtro);

        return (
            <table>
                <thead>
                    <tr className='cabecera_tabla'>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.datos
                    .filter(
                        e => e.title.includes(
                            this.props.filtro ? this.props.filtro : ''
                        )
                    )
                    .map(
                        item =>
                                <tr key={item.id}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default TablaFiltrada
