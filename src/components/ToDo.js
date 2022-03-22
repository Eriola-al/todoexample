import { Checkbox, Row, Col } from 'antd';
import { useState } from 'react';

const ToDo = ({data}) => {

    const [newData, setNewData] = useState(data.map(aData => ({
        label: aData,
        checked: false
    })))

    const onChange = (e, index) => {
        const updatedData = [...newData];  
        const label = newData[index].label;
        const value = e.target.checked;
        updatedData[index] = { label: label, checked: value }
        setNewData(updatedData);
    }

    return(
    <div>
        {newData.map((todo, index) => 
            <Row key={index}>
                <Col>
                    <p style={{ color: todo.checked ? 'red' : 'black'}}>{todo.label}</p>
                </Col>
                <Col>
                    <p><Checkbox onChange={(e) => onChange(e, index)}/></p>
                </Col>
            </Row>
        )}
    </div>
    )
}

export default ToDo;