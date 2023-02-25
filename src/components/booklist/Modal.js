import React, { Component } from 'react'
import '../../css/booklist/modal.css'
class Modal extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.show && (
                    <div className='modal-main' id='modal'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.descr ? this.props.descr.slice(0, 250) + '...' : 'Descrizione non disponibile!'}</p>
                        {this.props.pag ? <p>Pag: {this.props.pag}</p> : ''}
                        <div className="actions">
                            <button onClick={this.props.onHide} className='btn btn-danger'>Close</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default Modal