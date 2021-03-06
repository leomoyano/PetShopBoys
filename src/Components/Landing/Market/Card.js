import React, { Component } from 'react'

export default class MarketCard extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="card" style={this.props.fullMarket ? { width: 223, height: 'auto', marginBottom: "2rem" } : { width: 223, height: 400 }}>
                <img src={this.props.imgUrl} className="card-img-top img-fluid" alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title} - ${this.props.price}</h5>
                    <p style={{ height: 50 }} className="card-text text-truncate">{this.props.body}</p>
                    {this.props.fullMarket ? <small className='text-muted'>Stock: {this.props.stock}</small> : (null)}<br></br>
                    <button className="btn btn-success" onClick={() => { this.props.addProduct(this.props.title, this.props.price) }}><i className="fas fa-shopping-cart"></i> {this.props.fullMarket ? 'Agregar al carrito' : 'Ir a la tienda'}</button>
                </div>
            </div>
        )
    }
}
