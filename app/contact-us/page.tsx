'use client'
import { FormEvent, ChangeEvent, useState } from "react";

import Layout from "@/components/Layout";

interface FormData {
  fullName: string;
  email: string;
  organization: string;
  title: string;
  message: string;
  subject: string;
  inquiry_type: string;
  project_type: string,
  project_title: string,
  project_timeline: string,
  project_budget: string,
  project_description: string
}

// const inquiryTypeOptions = [
//   { value: "General Inquiry", label: "General Inquiry" },
//   { value: "Request Quote", label: "Request Quote" }
// ];

const projectTypeOptions = [
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "Web App Development", label: "Web App Development" },
  { value: "Backend Development", label: "Backend Development" },
  { value: "GenAI and Data Science", label: "GenAI and Data Science" },
  { value: "SaaS", label: "SaaS" },
  { value: "Digital Transformation", label: "Digital Transformation" },
  { value: "Consultation", label: "Consultation" },
];

const budgetOptions = [
  // { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
  { value: "$100,000 - $125,000", label: "$100,000 - $150,000" },
  { value: "$150,000 - $150,000", label: "$150,000 - $200,000" },
  { value: "$200,000 plus", label: "$200,000 and above" },
];



// const ContactForm = ({ setShowBanner }: { setShowBanner: (value: boolean) => void } ) => { 
const ContactForm = () => {
  const [showBanner, setShowBanner] = useState(false);

  const FormFields = () => {
    const [formData, setFormData] = useState<FormData>({
      fullName: '',
      email: '',
      organization: "",
      title: '',
      message: '',
      subject: '',
      inquiry_type: 'General Inquiry',
      project_type: 'Mobile App Development',
      project_title: '',
      project_timeline: '',
      project_budget: '$50,000 - $100,000',
      project_description: ''

    });
  
    // handle form field changes
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      if (value === 'Request Quote') {
        setFormData((prevState) => ({ ...prevState, [name]: value, subject: "Request Quote" }));
      } else {
        setFormData((prevState) => ({ ...prevState, [name]: value}));
      }
    };

    // handle form submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      (async () => {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // show success banner
          setShowBanner(true);

          // Hide the banner after 5 seconds (adjust the duration as needed)
          setTimeout(() => setShowBanner(false), 5000);

          setFormData({
            fullName: '',
            email: '',
            organization: '',
            title: '',
            message: '',
            subject: '',
            inquiry_type: '',
            project_type: 'Mobile App Development',
            project_title: '',
            project_timeline: '',
            project_budget: '$50,000 - $100,000',
            project_description: ''
          });
        } else {
          // Show error message
          console.log("failed to send mail ");
        }
      })();
    }

    
  
    // return main form component
    return <form method="post" onSubmit={handleSubmit}> 
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(handleChange)}
            className="form-control input-lg"
            autoCapitalize="on"
            id="input-38"
            required={true}
            placeholder="Your Full Name" />
        </div>        
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            className="form-control input-lg"
            id="input-39"
            required={true}
            placeholder="Your Email" />
        </div>        
      </div>
      <div className="form-row">        
        <div className="form-group">
          <input
            type="text"
            name="company"
            value={formData.organization}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-43"
            required={true}
            placeholder="Organization" />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-41"
            required={true}
            placeholder="Your Title" />
        </div>
      </div>
      <div className="form-row">        
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-43"
            required={true}
            placeholder="Subject" />
        </div>
      {/* <div className="form-group">
          <select
            name="inquiry_type"
            value={formData.inquiry_type}
            required={true}
            onChange={handleChange}>
          {inquiryTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
          </option>
          ))}
        </select>
      </div> */}
      </div>
      {formData.inquiry_type === 'General Inquiry' && <div>
        <div className="form-row">
          <textarea style={{ height: "120px" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-42"
            required={true}
            rows={50}
            placeholder="Your message here.">
          </textarea>
        </div>
      </div>
      }
      {formData.inquiry_type === 'Request Quote' && <div>
        
        <div className="form-row">        
        <div className="form-group">
          <select
            name="project_type"
            value={formData.project_type}
            required={true}
            onChange={handleChange}>
           {projectTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
          </option>
          ))}
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="project_title"
            value={formData.project_title}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-43"
            required={true}
            placeholder="Project Title" />
        </div>
        </div>
        <div className="form-row">        
          <div className="form-group">
            <input
              type="text"
              name="project_timeline"
              value={formData.project_timeline}
              onChange={handleChange}
              className="form-control input-lg"
              id="input-43"
              required={true}
              placeholder="Project Timeline" />
          </div>
          {/* <div className="form-group">
            <select
              name="project_budget"
              value={formData.project_budget}
              required={true}
              onChange={handleChange}>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
              {option.label}
            </option>
            ))}
            </select>
          </div> */}
        </div>
        <div className="form-row">
          <textarea style={{ height: "120px" }}
            name="project_description"
            value={formData.project_description}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-42"
            required={true}
            rows={50}
            placeholder="Your Message"
          />
        </div>
      </div>
      }
      <div className="submit-button"> 
        <button
          type="submit"
          className="mt-4">
          Send now
        </button> 
      </div>
    </form>
  }

  return (
    <Layout home>
      <section id="connect"  style={{ background: "#f5f6f8" }}>
        <div style={{padding: "100px 0", background: "#d8d8d825"}}>
        <h1 className="display-4 mt-5 text-center">
          Contact us
        </h1>
        </div>
        <div className="" style={{ maxWidth: "640px", display: "block", margin: "auto", padding: "60px 0" }}>
          <p className="lead mb-4"> Please share your details and we will get in touch with you at the earliest.</p>
          <FormFields />      
        </div>
      </section>
    </Layout>
  )
}


export default ContactForm;