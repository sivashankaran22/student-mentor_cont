import React from 'react'
import Base from '../../Base/base'

const Help = () => {
  return (
    <Base title={"Launchpad"} Description={"All details Showed "}>
      <div>
         <h3> Help and Support</h3>
         <p>Welcome to the our Program Help Center! We are here to assist you in getting the most out of our platform. 
            Whether you're a student seeking guidance or a mentor looking for information, you'll find answers to common questions and 
            resources to address any issues.</p>
      </div>
      <div>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <p>Browse our list of frequently asked questions to find quick answers to common inquiries:</p>
        <li>How does mentor matching work?</li>
        <li>How do I schedule a mentoring session?</li>
        <li>What should I do if I have technical issues?</li>
        <li>How can I change my mentor or student profile information?</li>
        <li>What are the fees and payment options for mentorship programs?</li>
        <li>How do I cancel or reschedule a session?</li>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>If you couldn't find the information you need in our Help Center, feel free to reach out to our support team via email at [portal.help@oprogram.com] or by phone at [9874563210].
           We're here to ensure you have a smooth and productive experience with our Program.</p>
      </div>
      <div>
        <h3>Feedback and Suggestions</h3>
        <p>We value your feedback and suggestions to improve our services. If you have any ideas, comments, or recommendations, please let us know at [portal.feedback@oprogram.com].</p>
      </div>
      <div>
        <h3>Privacy and Security</h3>
        <p>Your privacy and data security are important to us. Learn more about our privacy policies and security measures in our [Privacy Policy] and [Security Policy].</p>
      </div>

    </Base>
  )
}

export default Help