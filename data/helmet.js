const shield52= {
    name: "Shield 52",
    price: 1000,
    purpose: "Construction worker safety",
    img: "Assets/previewImage3.png",
    gui: "Assets/52.png",
    features: [
        "Accident detection",
        "Backend GUI for project manager",
        "Hazard alarm",
        "Health Condition monitoring",
        "Location addressing",
        "Suitable solution for Construction site, Factory workers"],
    description: "shield 52 is designed for construction workers. A smart way to manage worker safety and tracking in construction sites."
}
const shield71= {
    name: "Shield 71",
    price: 1000,
    purpose: "Industry worker safety",
    img: "Assets/previewImage2.png",
    gui: "Assets/71.png",
    features: [
        "Oxygen Level Sensing",
        "Surrounding temperature Sensing",
        "Hazardous Gas Sensing",
        "Heart Beat Sensing",
        "Sending all the data to Ground Station",
        "Live Video Streaming",
        "WLAN communication"
        ],
    description: "Shield 71 is designed for industry workers to reduce the risk probablities. Espcially designed for the workers who are working in the high risk areas."
}
const safemet= {
    name: "Safemet 1.0",
    price: 1000,
    purpose: "Bike rider safety",
    img: "Assets/previewImage1.png",
    gui: "Assets/phone.png",
    features: [
        "Automated Accident Detection and notification with GPS Location",
        "Call Receive and Music Playing through Bluetooth",
        "Biker's Health Condition  Monitoring",
        "Daily activity tracking",
        "Included a Mobile App"
    ],
    description: "A smart helmet device for bike riders. It is designed to ensure riding safety with multimedia features."
}
const noData = {
    name: "no data",
    price: 0,
    description: "no product found in this name"
}

const helmetData = (data)=>{
    if (data === "shield52"){
        return shield52;
    }
    else if (data === "shield71"){
        return shield71;
    }
    else if (data === "safemate"){
        return safemet;
    }
    else{
        return noData;
    }
}
exports.helmetData = helmetData;