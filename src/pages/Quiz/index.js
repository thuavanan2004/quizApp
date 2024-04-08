import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion} from "../../services/questionService";
import { getCookie } from "../../helpers/cookie";
import { postAnswers } from "../../services/answersService";
import {useNavigate} from "react-router-dom";
import "./quiz.css";

function Quiz() {
    const params = useParams();
    const [dataListQuestion, setdataQuestion] = useState([]);
    const [dataTopicName, setDataTopic] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const listQuestion = await getListQuestion(params.id);
            const topicName = await getTopic(params.id);
            setDataTopic(topicName);
            setdataQuestion(listQuestion);
        } 
        fetchApi();
    }, [params.id]);

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(e);
        let selectedAnswer = [];
        for(let i = 0; i < e.target.elements.length; i ++){
            if(e.target.elements[i].checked){
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectedAnswer.push({
                    questionId: parseInt(name),
                    aswer: parseInt(value)
                })
            }
        }
        let option = {
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answers: selectedAnswer
        };
        const response = await postAnswers(option);
        navigate(`/result/${response.id}`)
    }
    return  (
        <>
            <h2>Bài Quiz chủ đề {dataTopicName && dataTopicName[0].name} </h2>
            <div className="answer__list">
               <form onSubmit={handleSumbit}>
               { dataListQuestion && 
                    dataListQuestion.map((item, index) => (
                        <div className="answer__item" key={index}>
                            <div className="form-quiz__item" key={index}>
                                <p>
                                    Câu {item.id} : {item.question}
                                </p>
                                {
                                    item.answers.map((itemAns, indexAns) => (
                                        <div className="form-quiz__answer" key={indexAns}>
                                            <input 
                                                type="radio" 
                                                className="result__answer"
                                                value={indexAns}
                                                name={item.id}
                                                id={`quiz-`+ item.id + indexAns}
                                            />
                                            <label htmlFor={`quiz-`+ item.id + indexAns}> {itemAns}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                <button className="buttonQuiz">Nộp bài</button>
               </form>
            </div>

        </>
    )
}
export default Quiz;