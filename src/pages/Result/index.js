import { getListQuestion } from "../../services/questionService";
import { getAnswers } from "../../services/answersService";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./result.css";
function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswer = await getAnswers(params.id);
            console.log(dataAnswer);
            const dataQuestion = await getListQuestion(dataAnswer[0].topicId);

            let result = [];
            for(let i = 0; i < dataQuestion.length; i ++){
                result.push({
                    ...dataAnswer[0].answers.find(item => parseInt(item.questionId) === parseInt(dataQuestion[i].id)), 
                    ...dataQuestion[i]
                })
            }
            
            setDataResult(result);
        };
        fetchApi(); 
    }, [params.id])   
    return  (
        <>
            <h2>Kết quả  </h2>
            <div className="answer__list">
                { dataResult && 
                    dataResult.map((item, index) => (
                        <div className="answer__item" key={item.id}>
                            <div className="form-quiz__item" key={item.id}>
                                <p>
                                    Câu {item.id} : {item.question}
                                    {
                                        item.aswer === item.correctAnswer ? 
                                        (<span className="result__tag--true">Đúng</span>) 
                                        : 
                                        (<span className="result__tag--false">Sai</span>)
                                    }
                                </p>
                                {
                                    item.answers.map((itemAns, indexAns) => {
                                        let className = "";
                                        let checked = false;
                                        if(item.aswer === indexAns){
                                            checked = true;
                                            className = "result__item--selected";
                                        }
                                        if(item.correctAnswer === indexAns){
                                            className += " result__item--result";
                                        }
                                        return (
                                            <div className="form-quiz__answer" key={indexAns}>
                                                <input 
                                                    type="radio" 
                                                    disabled
                                                    checked={checked}
                                                    className="result__answer"
                                                />
                                                <label className={className}> {itemAns}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}
export default Result;