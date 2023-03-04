import { useState, useRef } from 'react';
import { Slider, Box, Text, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { Backend } from './components/backend/api';
import Navbar from './components/Navbar';
import { contactValidator } from './components/backend/validator';
import SEO from './components/SEO';
import { IoChevronUpCircleSharp } from 'react-icons/io5';
import Footer from './components/Footer';

export default function Contract() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [showError, setShowError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [pricingOptions, setPricingOptions] = useState(7000);
    const [showTooltip, setShowTooltip] = useState(true);
    const [CustomName, setCustomName] = useState("N/A");
    const [priceDiscussionTest, setPriceDiscussionTest] = useState("false");
    const [displayForm, setDisplayForm] = useState("block");
    const formRef = useRef(null);
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    }
    /*
  const priceRange = [
    { id: 1, name: '3000-8000' },
    { id: 2, name: '8000-12000' },
    { id: 3, name: '12000-18000' },
    { id: 4, name: '18000++' },
  ];
    */

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try{
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        if (value.priceDiscussion) {
            setPriceDiscussionTest("True");
        }
        if (!value.priceDiscussion) {
            setPriceDiscussionTest("False");
        }
        if (value.customName) {
            setCustomName(value.customName);
        }
        if (!value.customName === ""){
            setCustomName("N/A");
        }
        const dataset = {
            name: value.name,
            email: value.email,
            subject: value.subject,
            description: value.description,
            priceDiscussion: priceDiscussionTest,
            addtional: value.addtional,
            projectName: selectedOption,
            customName: CustomName,
            pricingOptions: pricingOptions,
        }
        console.log(dataset);
        setShowError(contactValidator(dataset));
        console.log()
        formRef.current.focus();
        console.log(showError);
        if (showError) {
            
        }
        else{
            await axios.post(Backend+'contact', dataset,{withCredentials: true, headers: {'Content-Type': 'application/json'} })
            .then(res => {
                console.log(res);
                setShowTooltip(false);
                setDisplayForm("none");
            })
            .catch(err => {
                console.log(err);
            })
            setIsSuccess(true);
        }
    } catch (error) {
        // handle error
      } finally {
        setIsSubmitting(false);
      }

    };

  return (
    <>
    <SEO title={"Contact us"}/>
    <Navbar/>

    <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <p>Form submission successful!</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container" style={{display:displayForm}}>
        <motion.div className="container" style={{display:displayForm}} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <Box w='100%' p={4} color='black'>
                <Text fontSize='2xl' fontWeight='bold' align={"center"}>
                    Please take your time and fill the form below. All information you share will be private and only Project Manager can access it.
                </Text>
            </Box>
        </motion.div>
        </div>
        <br/><br/>
    <motion.div className="container" style={{display:displayForm}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="card container" style={{maxWidth:"970px",display:displayForm}} >
    <form onSubmit={handleSubmit} ref={formRef}>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" >Name <span style={{color:"red"}}>*</span></label>
        <input type="text"  aria-errormessage={showError.name} id="form6Example1" name="name" className="form-control" />
        <label className="disabled" style={{color:"red"}}> &nbsp; {showError.name} &nbsp;</label>
        <label className="form-label disabled">&nbsp; {} &nbsp;</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <label className="form-label" >Email <span style={{color:"red"}}>*</span></label>
        <input type="email"  name="email" className="form-control" />
        <label className="disabled" style={{color:"red"}}> &nbsp; {showError.email} &nbsp;</label>
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Subject <span style={{color:"red"}}>*</span><span className="disabled">(Project name, Your concern etc )</span></label>
    <input type="text"  name="subject" className="form-control" />
    <label className="disabled" style={{color:"red"}}> &nbsp; {showError.subject} &nbsp;</label>
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Project Category <span style={{color:"red"}}>*</span><span className='disabled'>(Choose Custom Project if your criteria not present here)</span> </label>
      <select value={selectedOption}  onChange={handleChange} className="form-select">
          <option value="default">Choose an option</option>
          <option value="Class Attendance System">Class Attendance System</option>
          <option value="Home Automation System">Home Automation System</option>
          <option value="Smart Parking System">Smart Parking System</option>
          <option value="Smart Waste Management System">Smart Waste Management System</option>
          <option value="Smart Agriculture System">Smart Agriculture System</option>
            <option value="Custom Project">Custom Project</option>
        </select>
        <br/>
  <input type={selectedOption === "Custom Project" ? "text" : "hidden"} id="form6Example6" name="customName" className="form-control" required
  placeholder='What is your project about?' />  
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Describe Your Project <span style={{color:"red"}}>*</span><span className="disabled">(Describe shortly what you require in your project)</span></label>
    <textarea name="description" id="form6Example5"  rows={5} className="form-control" />
  <label className="disabled" style={{color:"red"}}> &nbsp; {showError.description} &nbsp;</label>
  </div>
  
  <div className="form-outline mb-4">
  <label className="form-label" >Price Range <span className="disabled">(Suitable budget range for your project)</span></label>  <br/>

<br/>
<Slider
      w={["90%", "50%", "50%", "75%"]}
      id='slider' defaultValue={7000} 
      min={3000} max={19000} colorScheme='blue'
      onChange={(v) => setPricingOptions(v)}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='blue.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${pricingOptions}৳`}
      >
        <SliderThumb boxSize={6}>
        <Box color='blue.300' as={IoChevronUpCircleSharp} h={8} w={8}/>
            </SliderThumb>
      </Tooltip>
    </Slider>
    <p> Selected Approximate Amount: Around {pricingOptions} Taka</p>
    <p>&nbsp;</p>
    <label className="form-check-label" >Need Discussion about budget &nbsp;&nbsp;&nbsp;</label>
   <input className="form-check-input" type="checkbox" name="priceDiscussion" id="inlineRadio1" value="True"/>
</div>


  <div className="form-outline mb-4">
  <label className="form-label">Additional information <span className="disabled"> (leave empty if no other inqueries) </span> </label>
    <textarea className="form-control" id="form6Example7" name="addtional" rows="4"></textarea>
    
  </div>
    <center>
  <button className="button2 btn btn-primary" disabled={isSubmitting} type="submit">Submit </button>
    </center>
<br/>
</form>
    </div>
    </motion.div>
    <br/><br/>
    <Footer/>
    </>
  );
}



/*
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" >{priceRange[0].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" >{priceRange[1].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >{priceRange[2].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >{priceRange[3].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >Need discussion</label>
</div>

// alada bhai
    <label className="form-check-label" >Need discussion</label>
    <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  
*/