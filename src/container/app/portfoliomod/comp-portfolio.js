import { index } from "d3-array";
import React, { useState } from "react";
import { Button } from "./../shared/ui/button/comp-button";
import { BTN_SIZES, BTN_STYLES } from './../shared/ui/button/const-button';

const svg = {
    height: 800,
    width: 1200
};
const maingroup = {
    margin: {left: 170, top: 20, right: 20, bottom: 50}
};
const origin = {
    x: maingroup.margin.left,
    y: maingroup.margin.top
};

const vizAttr = {
    svgConfig: svg,
    maingroupConfig: maingroup,
    originConfig: origin
}

function createBody({children}) {
    const [emailList, setEmailList] = useState([]);
    const [emailValue, setEmailValue] = useState("");
    const [emailIndex, setEmailIndex] = useState(0);

    const addEmail = email => {
        setEmailList(emailList.concat(email));
    }
    const editEmail = email => {
        const newList = [...emailList];
        newList.splice(emailIndex, 1, email);
        setEmailList(newList);
    }
    const populateEmail = index => {
        setEmailIndex(index);
        setEmailValue(emailList[index]);
    }
    const removeEmail = index => {
        const newList = [...emailList];
        newList.splice(emailIndex, 1);
        setEmailList(newList);
    }
    return (
      <div className="p-8 space-y-2 sm:relative top-12">
        {
            emailList && <ul> {
                emailList.map((email, index) => {
                    return <li key={index} className="space-x-1">
                                <span>{email}</span>
                                <Button size={BTN_SIZES.sm} 
                                    onClick={() => populateEmail(index)}>Edit</Button>
                                <Button size={BTN_SIZES.sm} 
                                    onClick={() => removeEmail(index)}>Remove</Button>
                            </li>
                })
            } </ul>
        }
        <div>
            <form className="space-x-1">
                <input type="email" name="email" placeholder="example@xyz.com" value={emailValue}
                    className="form-input rounded-full placeholder-primary-200 border-primary-500 text-primary-500 py-1"
                    onChange={() => setEmailValue(event.target.value)} />
                <Button style={BTN_STYLES.solid} onClick={() => addEmail(emailValue)}>Add</Button>
                <Button style={BTN_STYLES.solid} onClick={() => editEmail(emailValue)}>Edit</Button>
            </form>
        </div>
      </div>
    );
}

export const AppPortfolio = createBody;