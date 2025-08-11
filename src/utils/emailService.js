import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  serviceId: "service_jq9e6wf",
  templateId: "template_c8ul1e7",
  publicKey: "yMpRR5b__dM2hOKxl",
};

emailjs.init({
  publicKey: EMAIL_CONFIG.publicKey,
});
console.log(EMAIL_CONFIG.publicKey);

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Satyam vishwakarma",
    };

    // Send email without passing publicKey again (already initialized)
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("EmailJS error details:", error);
    return { success: false, error: error.message };
  }
};

// // Alternative function for testing without EmailJS
// export const sendEmailDemo = async (formData) => {
//   // Simulate API call delay
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // Simulate success/failure (90% success rate)
//   const isSuccess = Math.random() > 0.1;

//   if (isSuccess) {
//     console.log("Demo email sent:", formData);
//     return { success: true };
//   } else {
//     throw new Error("Demo error: Failed to send email");
//   }
// };
// Add this function to test EmailJS directly
