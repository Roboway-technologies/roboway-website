import styled from 'styled-components';

export const SocialsList = styled.ul`
        font-size: 15px;
        display: flex;
        flex-direction: row;
        list-style: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        
`;
export const Socials = styled.li`
        padding:1vw;
        font-size: 18px;
`;
export const ContactDetail = styled.div`
        padding:10px;
        width:25%;
        margin:10px;
        display:flex;
        height:18vh;
        flex-direction: column;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        @media screen and (max-width: 700px) {
            width: 90vw;
            margin-left:2%;
        }
`;
export const ContactFormHeading = styled.p`
        font-size: 31px;
        margin-top: 15px;
        margin-bottom:20px;
`;
export const TextArea = styled.textarea`
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        border:none;
        outline: none;
        border-radius: 15px;
        font-size: 16px;
        border-bottom: 2px solid rgb(56, 3, 245);
        transition: 0.3s ease-in-out;
        &:hover{
            box-shadow: 0 0 10px 0 rgba(52, 2, 255, 0.965);
            border:none;
            outline: none;
            border-bottom: 2px solid rgb(124, 3, 245);
            transition: 0.3s ease-in-out;
        }
`;
export const ContactContainer = styled.div`
        margin:auto;
        padding:10px;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: row;
        @media screen and (max-width: 700px) {
            flex-direction:column;
        }
`
export const Maps = styled.iframe`
        width:98%;
        height:70vh;
        margin-left: -4px;
        @media screen and (max-width: 700px) {
            width:92vw;
            margin-bottom:4px;
            height:50vh;
            margin-left: -4px;
        }
`
export const ContactDetail2 =  styled.div`
        width: 40vw;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        @media screen and (max-width: 700px) {
            width: 90vw;
            margin-left:2%;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        }
`;
export const FormTab = styled.form`
    width: 98%;
    padding:5px;
    height:60vh;
    margin-left:1%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 700px) {
        width: 90vw;
        padding:5px;
        height:60vh;
        margin-left:1%;
        display: flex;
        flex-direction: column;
    }
`
export const InputField = styled.input`
        width: 98%;
        padding:5px;
        margin-bottom: 25px;
        font-size: 18px;
        height:45px;
        border-radius: 10px;
        border:none;
        outline: none;
        border-bottom: 2px solid rgb(56, 3, 245);
        transition: 0.3s ease-in-out;
        &:hover{
            width: 98%;
            padding:5px;
            margin-bottom: 25px;
            box-shadow: 0 0 10px 0 rgba(52, 2, 255, 0.965);
            border:none;
            outline: none;
            border-bottom: 2px solid rgb(124, 3, 245);
            transition: 0.3s ease-in-out;
        }
        &:active{
            width: 98%;
            padding:5px;
            margin-bottom: 25px;
            box-shadow: 0 0 10px 0 rgba(52, 2, 255, 0.965);
            border:none;
            outline: none;
            border-bottom: 2px solid rgb(124, 3, 245);
            transition: 0.3s ease-in-out;
        }
`;
export const Icons = styled.a`
        font-color:"blue",
        font-size:"45px",
        margin-top:"-4px"
`

