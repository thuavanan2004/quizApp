import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAnswerByUserId} from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import {useDispatch} from "react-redux";
import {getDataAnswers} from "../../actions/dataAswers";
import "./answers.css";

function Answers() {
    const [dataAnswers, setDataAnswers] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchApi = async () => {
            const answerByUserId = await getAnswerByUserId();
            const topics = await getListTopic();
            if(topics.length > 0) {
                for(let i = 0; i < topics.length; i ++){
                    topics[i].id = parseInt(topics[i].id)
                }   
            }
            let result = [];

            for(let i = 0; i < answerByUserId.length; i ++){
                result.push({
                    ...topics.find(item => item.id === answerByUserId[i].topicId),
                    ...answerByUserId[i]
                });
            }
            setDataAnswers(result);
            dispatch(getDataAnswers(result));
        }
        fetchApi();
    },[dispatch]);

    return (
        <>
            <div className="answer-table">
            <h2>Danh sách bài đã luyện tập </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { dataAnswers.length > 0 && 
                    (
                        dataAnswers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td> <Link to={"/result/" + item.id}>Xem chi tiết</Link></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Answers;