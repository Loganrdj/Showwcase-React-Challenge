import React, { useState } from "react";
import styled from "styled-components";


export const InputForm: React.FC = () => {
    const Button = styled.button`
    font-size: 1em;
    padding: .25 em 1em;
    border: 2px solid black;
    border-radius: 3px;
    padding: 1% 3%;
    background-color: lightgray;
    `

    const LoginForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    `
    return (
        <div>
            <h3>Hi there, welcome to your education showcase!</h3>
            <LoginForm>
                <label>
                    Type your name and click "Enter" below to begin!
                </label>
                <br></br>
                <input type="text" placeholder="Your Name"/>
                <Button type="submit">Enter</Button>
            </LoginForm>
        </div>
    )
}