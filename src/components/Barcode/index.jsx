import React from 'react';
import {useBarcode} from "react-barcodes";

const Barcode = ({movieInfo}) => {

    const {inputRef} = useBarcode({
        value: movieInfo ? movieInfo.maLichChieu : 'No value',
        options: {
            background: 'transparent',
            width: 4,
            displayValue: false,
            height: 50,
        }
    })

    return (
        <svg ref={inputRef}/>
    );
};

export default Barcode;