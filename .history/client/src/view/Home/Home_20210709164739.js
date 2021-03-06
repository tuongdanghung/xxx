/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import "./home.scss";
// 
import Vertical from "./Vertical/Vertical"
export function Homepage() {

    // const [name, setName] = useState("")
    // const [item, setItem] = useState([])

    // const getItem = item.map(value => {
    //     return (<li>{value.name}</li>)
    // })

    // const addItem = () => {
    //     setItem([...item, {
    //         name: name
    //     }]
    //     )
    //     item.push({
    //         name: name
    //     })
    // }
    // console.log(item);
    return (

        // <div>
        //     <input type="text" value={name} onChange={event => setName(event.target.value)} />
        //     <button onClick={addItem}>add</button>
        //     <h1>{name}</h1>
        //     <ul>
        //         {getItem}
        //     </ul>
        // </div>
        <div className="main-content">
            <div className="left">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Personal information
                    </h1>
                    <div className="info-user">
                        <div className="left">
                            <img src="https://thongcongnghetgiare.net/uploads/dienvienemirisuzuhara/emiri-suzuhara.jpg" />
                        </div>
                        <div className="right">
                            <h1>Emiri Suzuhara</h1>
                            <ul>
                                <li><i className="fa fa-calendar" aria-hidden="true"></i> 11/1/1xxx</li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i> xxxxxxxxx@gmail.com</li>
                                <li><i className="fa fa-map" aria-hidden="true"></i> Da nang - viet nam</li>
                                <li><i className="fa fa-phone-square" aria-hidden="true"></i> 09xxxxxxx</li>
                                <li><i className="fa fa-heart" aria-hidden="true"></i> chua ket hon</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sapo-info">
                        <p>Khi Emiri Suzuhara b???t ?????u di???n xu???t nh???ng b??? phim c???a m??nh th?? c?? ???? thu h??t ???????c r???t
                            nhi???u kh??n gi??? trong n?????c l???n qu???c t??? b???i g????ng m???t ?????y c???m x??c c??ng t??ng k??ch th??ch
                            cho c??? b???n di???n v?? c??? ng?????i xem. Ch??nh v?? nh???ng l?? do ???? m?? c?? ??ang l?? di???n vi??n phim
                            ng?????i l???n c?? m???c thu nh???p kh???ng nh???t t???i Nh???t B???n.??i???u ????ng n??i ??? ????y l?? b??? phim ?????u
                            tay c???a c?? ???? ???????c ???ng h??? r???t nhi???u ?????n n???i nhi???u ng?????i ph???i b???t ng???. </p>
                    </div>
                </div>

                <div className="box-primary">
                    <h1 className="title">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Personal Skills
                    </h1>
                    <div className="skills">
                        <div className="item">
                            <h4><i className="fa fa-html5" aria-hidden="true"></i></h4>
                            <h5>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4><i className="fa fa-css3" aria-hidden="true"></i></h4>
                            <h5>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4><i className="fa fa-github" aria-hidden="true"></i></h4>
                            <h5>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4><i className="fa fa-wordpress" aria-hidden="true"></i></h4>
                            <h5>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
            {/* end-left */}
            <div className="right">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Personal Skills
                    </h1>
                    <Vertical />
                </div>
            </div>
        </div>
    )
}
// ????? t???o ra ???????c 1 bi???n th?? m??nh d??ng useState ????? qu???n l?? tr???ng th??i
// bi???n name s??? kh??ng t??? ?????ng c???p nh???t d??? li???u n??n  c???n m???t h??m setName ??i b??n c???nh bi???n name
// ????? gi??p bi???n name c???p nh???t d??? li???u
// [] trong useEffect : n???u kh??ng c?? m???ng r???ng th?? th?? s??? ch???y li??n t???c, n???u c?? th?? ch???y 1 l???n