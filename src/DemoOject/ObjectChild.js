import React, { Component } from 'react'

export default class ObjectChild extends Component {

    renderSize = () => {
        let { size } = this.props.productItem;
        return size.map((number, index) => {
            return (
                <button className="btn btn-primary" key={index}> {number}</button>

            )
        })

    }

    render() {

        let { name, src, content, price } = this.props.productItem;
        let { shoesSize } = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={src} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{content}</p>
                    <p className="card-text">Price: {price} $</p>
                    {this.renderSize()}

                    {shoesSize.map((number, index) => {
                        return (

                            <button className="btn btn-success" key={index}>{number}</button>
                        )
                    })}
                </div>
                <button  className="btn btn-primary" onClick = {()=>{
                    this.props.showInfor(name);
                }}
                >Detail</button>

            </div>


        )
    }
}
