import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../component/List/List'
import { geticecream } from '../../redux/action/Aproduct.action';

function Product({avc}) {
    const [data, setData] = useState([])
    const [fdata, setFdata] = useState()
    const [sortData, setSortData] = useState()
    const [sData, setSData] = useState()
    const icecreamData = useSelector(state => state.icecream);
    const dispatch = useDispatch();


    console.log(avc);
    useEffect(() => {
        // let localData = JSON.parse(localStorage.getItem("ice"));

        // if (localData !== null) {
            // setData(localData);
        // }
        dispatch(geticecream())

    }, [])

    const handlesearch = (value) => {
        console.log(value);

        if (value !== "") {
            let filteredData = data.filter((m) => (
                m.name.toLowerCase().includes(value.toLowerCase()) ||
                m.price.toString().includes(value) ||
                m.qua.toString().includes(value) ||
                m.year.toString().includes(value))
            );
            setFdata(filteredData)
        } else {
            setFdata()
            handleSorting(sData, 'yes')
        }
    }


    const handleSorting = (value, empty = '') => {

        let FData = fdata && empty === '' ? fdata : data;

        console.log(value);

        setSData(value)
        if (value !== 0) {
            let sData = FData.sort((a, b) => {
                if (value === 'hl') {
                    return b.price - a.price
                } else if (value === 'lh') {
                    return a.price - b.price
                } else if (value === 'az') {
                    return a.name.localeCompare(b.name)
                } else if (value === 'za') {
                    return b.name.localeCompare(a.name)
                } else if (value === 'qh') {
                    return b.qua - a.qua
                } else if (value === 'ql') {
                    return a.qua - b.qua
                } else if (value === 'yh') {
                    return b.year > a.year ? 1 : -1
                } else if (value === 'yl') {
                    return a.year > b.year ? 1 : -1
                }
                setSortData(sData)
            });
            setSortData()
        }
    }

    let finalData = fdata ? fdata : sortData ? sortData : data;

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>

                        <input
                            type="text"
                            placeholder='Search Ice-cream'
                            onChange={(e) => handlesearch(e.target.value)}
                        />

                        <select value={sData} onChange={(e) => handleSorting(e.target.value)}>
                            <option value="0" selected>---Select Sorting---</option>
                            <option value="hl">Price: high to low</option>
                            <option value="lh">Price: low to heigh</option>
                            <option value="az" >Name: A to Z</option>
                            <option value="za">Name: Z TO A</option>
                            <option value="qh">Quantity: high to low</option>
                            <option value="ql">Quantity: low to heigh</option>
                            <option value="yh">Year: high to low</option>
                            <option value="yl">Year: low to high</option>
                        </select>
                    </div>
                    <List listdata={icecreamData.icecream} />
                </div>
            </div>
        </div>
    );
}

export default Product;