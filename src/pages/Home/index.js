import { Link } from "react-router-dom";
import imgae from "../../assets/images/image1.png";
import "./home.scss";
function Home() {
    return (
        <>
           <div className="page-home">
                <div className="page-home__introduce">
                    <div className="page-home__introduce--desc">
                        <p className="text-1">
                            THỬ THÁCH BẢN THÂN VỚI CÁC CÂU HỎI LẬP TRÌNH ĐA DẠNG VÀ THÚ VỊ 
                        </p>
                        <p className="text-2">
                            Bắt đầu ngay hôm nay để đo đạc và nâng cao kỹ năng của bạn!    
                        </p>
                        <span> <Link to="topic" className="button">Luyện tập ngay</Link></span>
                    </div>
                    <div className="page-home__introduce--image"> <img src={imgae} alt="imageIntroduce" /></div>
                </div>
                <p className="page-home__main">
                    Chào mừng bạn đến với trang kiểm tra trắc nghiệm của chúng tôi! Chúng tôi cung cấp một nền tảng đầy đủ với các câu hỏi chất lượng về HTML, CSS, Java và nhiều ngôn ngữ lập trình khác, giúp bạn đánh giá và cải thiện kỹ năng lập trình của mình. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, trang của chúng tôi thiết kế linh hoạt để phù hợp với mọi trình độ. Chúng tôi không chỉ cung cấp câu hỏi trắc nghiệm mà còn giải thích và phản hồi sau mỗi bài kiểm tra, giúp bạn hiểu rõ hơn về lỗi và cách khắc phục chúng. Hãy tham gia ngay hôm nay để trở thành một lập trình viên xuất sắc hơn!
                </p>
           </div>
        </>
    )
}
export default Home;