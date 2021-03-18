import React, { Component } from 'react';
import ObjectChild from './ObjectChild';

export default class ObjectParent extends Component {

    products = {
        name: 'Giay nam sieu hot',
        src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b549997-21e7-4ab6-87bd-b1851c181cf0/air-force-1-07-lx-shoe-LBkqcm.jpg',
        content: "Giay dep hot nhat tuan qua",
        price: 9999,
        size: [34, 35, 36, 37]

    }
    size = [12, 13, 15, 19];

    renderInfor = (name) => {
        alert(name);
    }
    render() {
        return (
            <div>

                <ObjectChild productItem={this.products} shoesSize={this.size} showInfor={this.renderInfor} />
            </div>

        )
    }
}
