import { 
    SocialsList, Socials, ContactDetail, Icons,
    ContactFormHeading, TextArea, ContactContainer,
    Maps, ContactDetail2, FormTab, InputField } from "./formStyles";
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const ContactForm = ()=>{
    const contactNumber = "tel:+8801703721883";
    const emailAddress = "roboway@tech.com";
    return(
<>
            <ContactContainer>
                <ContactDetail>
                    <p style={{color:"black",fontSize:"21px",marginBottom:"20px"}}>email us:</p>
                    <a href="mailto:roboway@tech.com?subject=Inquiry Contact&cc=tarek42223@gmail.com" style={{color:"blue",fontSize:"25px"}}>{emailAddress}</a>
                </ContactDetail>
                <ContactDetail>
                    <p style={{fontSize:"21px",marginBottom:"7px"}}>Get Connected:</p>
                    <SocialsList>
                        <Socials> 
                            <Icons style={{fontSize:"45px",color:"#3b5998"}} href="https://www.facebook.com/Roboway-Technology-105000000000000"><FaFacebook/></Icons>
                        </Socials>
                        <Socials> 
                            <Icons style={{fontSize:"45px",color:"rgba(214,41,118,1)"}} href="https://www.instagram.com/robowaytech/"><FaInstagram/></Icons>
                        </Socials>
                        <Socials> 
                            <Icons style={{fontSize:"45px",color:"#0072b1"}} href="https://www.linkedin.com/company/roboway-technology"><FaLinkedinIn/></Icons>
                        </Socials>
                    </SocialsList>

                </ContactDetail>
                <ContactDetail>
                    <p style={{fontSize:"21px",marginBottom:"20px"}}>Call us:</p>
                    <a href={contactNumber} style={{color:"blue",fontSize:"25px",marginBottom:"10px"}}>+8810703721883</a>
                </ContactDetail>
            
            </ContactContainer>

            <ContactContainer>
                <ContactDetail2>
                    <div style={{width: "100%",height:"50%"}}>
                        <Maps 
                        title="Location"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Brac%20University,%20Dhaka,%20Bangladesh+(Roboway%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                    </div>
                </ContactDetail2>
                <ContactDetail2>
                    <ContactFormHeading> Send us a Message </ContactFormHeading>
                    <FormTab>
                        <InputField type="text" placeholder="Name"/>
                        <InputField type="text" placeholder="Email"/>
                        <InputField type="text" placeholder="Subject"/>
                        <TextArea rows="3" placeholder=" Message"></TextArea>
                        <br/>
                        <button className="btn btn-primary button1 contactSubmit" type="submit" value="Send">Submit </button>
                    </FormTab>
                </ContactDetail2>
            </ContactContainer>
</>
            )
            }

export default ContactForm;            