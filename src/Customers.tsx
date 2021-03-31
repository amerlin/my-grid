import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { CustomerData, getCustomersAsync } from './CustomersData';
import { gettingCustomersAction, gotCustomersAction, AppState } from './Store';

export const Customers = () => {

    //create dispatch
    const dispatch = useDispatch();

    //get customers
    const customers = useSelector(
        (state:AppState) => state.ZmagStatusStore.customers
    );

    //get loader
    const customersLoading = useSelector(
        (state: AppState) => state.ZmagStatusStore.loading);

    React.useEffect(()=>{
        const doGetCustomers = async() =>{
            dispatch(gettingCustomersAction());
            const unansweredQuestions  = await getCustomersAsync();
            dispatch(gotCustomersAction(unansweredQuestions));
        }
        doGetCustomers();
    },[]);

    return (
        <div>
            <hr/>
            <div>Customers Page</div>
            <hr/>
            {customersLoading ?(<div>Loading...</div>):<div>Number of elements: {customers.length}</div>}
        </div>
    )
}
