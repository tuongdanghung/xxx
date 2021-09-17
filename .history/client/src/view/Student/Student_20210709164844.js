import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from "react-js-pagination";
import { ftechCity } from '../API/api'

import "../css/crud.scss";
const GreenRadio = withStyles({
    root: {
        color: "#bbc1c2"[400],
        '&$checked': {
            color: "#0056b3",
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
export function Student() {
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [cityArr, setCityArr] = useState([])
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    var student = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    useEffect(() => {
        ftechCity().then(value => {
            setCityArr(value)

        })
    }, [])

    const listCity = cityArr.map((value, index) => {
        return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
    })

    let dataDistrict = []
    let newDataDistrict = []
    const districtFind = cityArr.find(value => value.name === city)
    if (districtFind) {
        dataDistrict.push(districtFind.districts)
        newDataDistrict = dataDistrict[0]
    }

    const listDistrict = newDataDistrict.map((value, index) => {
        return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
    })


    function resetForm() {
        setName("")
        setPhone("")
        setEmail("")
        setCity("")
        setDistrict("")
        setGender("")
        setDate("")
        console.log(setCity);
    }

    function checkDuplicateStudent() {

        let check = student.some(value => value.email === email || value.phone === phone)
        if (check) {
            return true
        }
    }

    function addStudent() {
        if (!(name && gender && city && phone && email && city && district)) {
            alert("Please")
        } else if (checkDuplicateStudent()) {
            alert("Duplicate Data")
        } else {
            student.push({
                name: name,
                phone: phone,
                email: email,
                city: city,
                date: date,
                district: district,
                gender: gender,
            })
            localStorage.setItem("students", JSON.stringify(student))
            resetForm()
        }
    }

    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 5
    const [newItemPage, setNewItemPage] = useState([])
    function onPageChange(pageNumber) {
        setCurrentPage(pageNumber)
        const newItemPage = student.slice(
            (pageNumber - 1) * perPage,
            (pageNumber - 1) * perPage + perPage
        )
        setNewItemPage(newItemPage)
    }
    const data = newItemPage.map((value, index) => {
        return (
            <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.date}</td>
                <td>{value.city}</td>
                <td>{value.district}</td>
            </tr>
        )
    })

    // 


    return (
        <div className="main-content">
            <div className="left">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Add student
                    </h1>
                    <form>
                        <GreenRadio
                            checked={gender === 'male'}
                            onChange={e => setGender(e.target.value)}
                            value="male"
                        />
                        <label>Male</label>
                        <GreenRadio
                            checked={gender === 'female'}
                            onChange={e => setGender(e.target.value)}
                            value="female"
                        />
                        <label>Female</label>
                        <GreenRadio
                            checked={gender === 'other'}
                            onChange={e => setGender(e.target.value)}
                            value="other"
                        />
                        <label>Other</label>
                        <section>
                            <TextField value={name} onChange={e => setName(e.target.value)} id="standard-basic" label="Full Name" />
                            <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} id="standard-basic" label="Email" />
                            <TextField type="number" value={phone} onChange={e => setPhone(e.target.value)} id="standard-basic" label="Phone" />
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                value={date} onChange={e => setDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-select-currency-native"
                                select
                                label="Choose City"
                                onChange={e => setCity(e.target.value)}
                            >
                                {listCity}
                            </TextField>

                            <TextField
                                id="standard-select-currency-native"
                                select
                                label="Choose District"
                                onChange={e => setDistrict(e.target.value)}
                            >
                                {listDistrict}
                            </TextField>
                        </section>
                        <Button variant="outlined" onClick={addStudent}>Submit</Button>
                    </form>
                </div>
            </div>
            {/* end-left */}
            <div className="right">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        List student
                    </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>City</th>
                                <th>District</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>

                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={perPage}
                        totalItemsCount={student.length}
                        pageRangeDisplayed={5}
                        onChange={onPageChange}
                    />

                </div>
            </div>
        </div>
    )
}
// để tạo ra được 1 biến thì mình dùng useState để quản lý trạng thái
// biến name sẽ không tự động cập nhật dữ liệu nên  cần một hàm setName đi bên cạnh biến name
// để giúp biến name cập nhật dữ liệu
// [] trong useEffect : nếu không có mảng rỗng thì thì sẽ chạy liên tục, nếu có thì chạy 1 lần