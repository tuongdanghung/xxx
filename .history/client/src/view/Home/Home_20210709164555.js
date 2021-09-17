/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import "./home.scss";
// 
import Vertical from "./vertical"
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
                        <p>Khi Emiri Suzuhara bắt đầu diễn xuất những bộ phim của mình thì cô đã thu hút được rất
                            nhiều khán giả trong nước lẫn quốc tế bởi gương mặt đầy cảm xúc càng tăng kích thích
                            cho cả bạn diễn và cả người xem. Chính vì những lý do đó mà cô đang là diễn viên phim
                            người lớn có mức thu nhập khủng nhất tại Nhật Bản.Điều đáng nói ở đây là bộ phim đầu
                            tay của cô đã được ủng hộ rất nhiều đến nỗi nhiều người phải bất ngờ. </p>
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
// để tạo ra được 1 biến thì mình dùng useState để quản lý trạng thái
// biến name sẽ không tự động cập nhật dữ liệu nên  cần một hàm setName đi bên cạnh biến name
// để giúp biến name cập nhật dữ liệu
// [] trong useEffect : nếu không có mảng rỗng thì thì sẽ chạy liên tục, nếu có thì chạy 1 lần