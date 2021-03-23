import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { getProductsAsync, ProductData } from './Products';
import { ProductList } from './ProductsList';
// @ts-ignore
import cellEditFactory from 'react-bootstrap-table2-editor';

export const Grid = () => {

    const pulsante001onClick = () => {
    
        let newArray = products.concat( {
        productId: 100,
        description: "nuovo",
        barcode: "barNuovo",
        price: 10,
        total: 10,
        qta: 1
        });

        setQuestions(newArray);

    }
    
    React.useEffect(()=>{
        const getP = async()=>{
            const prod = await getProductsAsync();
            setQuestions(prod);
            let temp = 0;
            prod.forEach(element => {
                temp = temp + element.total;
            });
            setTotal(temp);
            setProductsLoading(false);
        };
        getP();
    },[]);

    //imposta la variabile products
    const [ products, setQuestions,] = React.useState<ProductData[]>([]);
    
    //imposto il valore del loader
    const [productsLoading, setProductsLoading] = React.useState(true);

    const [docTotal, setTotal] = React.useState(0);

    const columns = [{
        dataField: 'productId',
        text: 'RowId',
        editable: false,
      }, {
        dataField: 'description',
        text: 'Product Name',
        editable: false,
      }, 
      {
        dataField: 'qta',
        text: 'Quantity',
        classes: 'demo-key-row'
      },
      {
        dataField: 'price',
        text: 'Price',
        editable: false,
      },
      {
        dataField: 'total',
        text: 'Total',
        editable: false,
      },

     ];

  const updateTotal = () => {
        var t =0;
        products.forEach(element =>{
            t +=element.total;
        });
        setTotal(t);
    }

    const cellEdit = cellEditFactory({
            mode: 'click',
            blurToSave: true ,
            afterSaveCell: (oldValue:number, newValue:number, row:ProductData, column:number) => { 
                row.total = row.price * row.qta;
                updateTotal();
             }
        });


    return (
        <div className="container">
            <div className="row">
                <button type="button" className="btn btn-primary" onClick={pulsante001onClick} >Pulsante001</button>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
                <BootstrapTable keyField='productId' data={products} columns={columns} striped hover condensed cellEdit={cellEdit}/>
            </div>
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4"><strong>Total: {docTotal} €</strong></div>
            <div className="col-md-8"></div>
            </div>
        </div>
    )


}
