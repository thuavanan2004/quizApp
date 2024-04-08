import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";
import { useEffect, useState } from "react";
import "./topic.css";

function Topic() {
    const [topic, setTopic] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopic(response);
        }
        fetchApi();
    }, [])
    
    return (
        <>
           <div className="table-topic">
                <h2>Danh sách chủ đề</h2>
                {topic.length > 0 && (
                    <table className="table">
                        <thead>
                        <tr>
                                <th>ID</th>
                                <th>Tên chủ đề</th>
                                <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                            topic.map((item, index) => (
                                <tr key={index} >
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><Link to={"/quiz/" + item.id}>Làm bài</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            )}
            </div>
        </>
    )
}
export default Topic;