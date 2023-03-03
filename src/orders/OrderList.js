import React, { useEffect, useMemo } from "react";
import ActionsButton from "./ActionsButton";
import {  Box, Typography } from '@mui/material';
import { connect } from 'react-redux';
import './OrderList.css';
import { loadOrders, removeOrderRequest } from "./thunks";
import { DataGrid } from "@mui/x-data-grid";

const OrderList = ({orders = [], onRemovePressed, isLoading, startLoadingOrders}) => {
    useEffect(() => {
        startLoadingOrders();
    }, []);

    const columns = useMemo(() => [
        {field:'id', headerName:'ID', width:60},
        {field:'text', headerName:'text', width:150},
        {field:'actions', headerName:'Acciones', width:150, renderCell:params=><ActionsButton order = {params.row} onRemovePressed = {onRemovePressed}/>},
        {field:'status', headerName:'Estado', width:150, type:'singleSelect', valueOptions:['listo', 'a preparar', 'tiene prisa', 'frenado', 'cancelado'], editable:true},
        {field:'deliveryDate', headerName:'Fecha', width:150, type:'date', valueGetter: ({ deliveryDate }) => deliveryDate && new Date(200322), editable:true},
        {field:'applicant', headerName:'Solicitante', width:150},
        {field:'origin', headerName:'Origen', width:150},
        {field:'destination', headerName:'Destino', width:150},
        {field:'recibes', headerName:'Recibe', width:150},
        {field:'phoneRecibes', headerName:'Telefono', width:150},
        {field:'bundle', headerName:'Paquete', width:150},
        {field:'observations', headerName:'Observaciones', width:150},
    ], [])

    const loadingMessage = <div>Loading Orders...</div>
    const content = (
    <Box sx={{ height: 400, width: '150%' }}>
        <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >Envios</Typography>
      <DataGrid
        columns = {columns}
        rows = {orders}
        getRowId= { row => row.id} />
    </Box>);

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    orders: state.orders,
    isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: order => dispatch(removeOrderRequest(order)),
    startLoadingOrders: () => dispatch(loadOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);