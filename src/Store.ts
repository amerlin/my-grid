import { CustomerData } from "./CustomersData";
import { Store, createStore, combineReducers } from 'redux';

//Customer state
export interface CustomerState {
    readonly loading: boolean;
    readonly customers: CustomerData[];
    readonly viewing: CustomerData | null;
    readonly searched: CustomerData[];
}

//Application State
export interface AppState {
    readonly ZmagStatusStore: CustomerState;
}

//Initial state for application
const initialZMagState: CustomerState = {
    loading: false,
    customers: [],
    viewing: null,
    searched: [],
};

//Actions
export const GETTINGCUSTOMERS = 'GettingCustomers';
export const gettingCustomersAction = () =>
({
    type: GETTINGCUSTOMERS,
} as const);

export const GOTCUSTOMERS = 'GotCustomers';
export const gotCustomersAction = (customers: CustomerData[]) =>
({
    type: GOTCUSTOMERS,
    customers: customers,
} as const);

export const GETTINGCUSTOMER = 'GettingCustomer';
export const gettingCustomerAction = () =>
({
    type: GETTINGCUSTOMER,
} as const);

export const GOTCUSTOMER = 'GotCustomer';
export const gotCustomerAction = (customer: CustomerData | null) =>
({
    type: GOTCUSTOMER,
    customer: customer,
} as const);

export const SEARCHINGCUSTOMERS = 'SearchingCustomers';
export const searchingCustomersAction = () =>
({
    type: SEARCHINGCUSTOMERS,
} as const);

export const SEARCHEDCUSTOMERS = 'SearchedCustomers';
export const searchedCustomersAction = (questions: CustomerData[]) =>
({
    type: SEARCHEDCUSTOMERS,
    questions,
} as const);

//ACTION TYPES DEFINITION
type ZmagActions =
    | ReturnType<typeof gettingCustomersAction>
    | ReturnType<typeof gotCustomersAction>
    | ReturnType<typeof gettingCustomerAction>
    | ReturnType<typeof gotCustomerAction>
    | ReturnType<typeof searchingCustomersAction>
    | ReturnType<typeof searchedCustomersAction>;

//REDUCER
const zmagReducer = (
    state = initialZMagState,
    action: ZmagActions,
) => {
    switch (action.type) {
        case GETTINGCUSTOMERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case GOTCUSTOMERS: {
            return {
                ...state,
                customers: action.customers,
                loading: false,
            };
        }
        case GETTINGCUSTOMER: {
            return {
                ...state,
                viewing: null,
                loading: true,
            };
        }
        case GOTCUSTOMER: {
            return {
                ...state,
                viewing: action.customer,
                loading: false,
            };
        }
        case SEARCHINGCUSTOMERS: {
            return {
                ...state,
                searched: [],
                loading: true,
            };
        }
        case SEARCHEDCUSTOMERS: {
            return {
                ...state,
                searched: action.questions,
                loading: false,
            };
        }
    }
    return state;
};

//ROOT REDUCER
const rootReducer = combineReducers<AppState>({
    ZmagStatusStore: zmagReducer,
  });

//CONFIGURE STORE
export function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined);
    return store;
}