import Header from "../components/Header/Header";

const ContactUs = () =>{
 return(
    <div>
        <Header/>
        
         <div id="container" class="scroll-bar">   
<div className="h1">

        <div className="text"><h1>Contact Us</h1></div></div>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
        <h2>General Enquiries</h2><hr/>
        <h3>Vivekanand College Main Campus</h3>
        <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]India <br/>Phone:<b>+91 12345 67890</b><br/>
Email:<b>info@vivekanandcollege.edu</b><br/>
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
    <h2>Admissions Office</h2><hr/>
    <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
    Phone: +91 98765 43210<br/>
    Email: admissions@vivekanandcollege.edu</p>
    <h2>Student Support Services</h2><hr/>
    <p>For current student support, academic advising, or general assistance:<br/>
    Phone: +91 87654 32109<br/>
    Email:studentsupport@vivekanandcollege.edu</p>
    <h2>Find Us on the Map</h2><hr/>
    <u><a href="https://www.google.com/maps/search/Vivekanand+College/@16.7084482,74.1976659,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a></u>
    <h2>Send Us a Message</h2><hr/>
    <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
    </div>
    </div>
    )
}

export default ContactUs;