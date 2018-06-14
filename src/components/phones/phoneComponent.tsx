import * as React from 'react';
import { Phone } from '../../model/';

export interface IPhoneListProps {
    phones: Phone[];
    loadPhones(): any;
}


export class PhoneListComponent extends React.Component<IPhoneListProps, {}> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick() {

        this.props.loadPhones();
    }

    public render() {
        return (
            <div>

                <input
                    type="submit"
                    className="btn btn-success"
                    value="CargarLista"
                    onClick={() => this.props.loadPhones()}
                />


                <table className="table table-striped">

                    <thead>
                        <tr className="bg-dark text-white">
                            <th>PHONE </th>
                            <th>MARCA</th>
                            <th>COLOR</th>
                            <th>PRECIO</th>
                            <th>IMAGEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.phones.map((item) =>
                        // <tr>
                            <tr className="fix-Width">
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td><img src={item.imageUrl}  /> </td>

                            </tr>
                        )}

                    </tbody>

                </table>



            </div>

        )

    }
}