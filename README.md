# Frontend Developer Portfolio

A modern, responsive portfolio website showcasing my frontend development skills and projects. Built with React, Vite, and Tailwind CSS, featuring dark mode, smooth animations, and a fully functional contact form.

![Portfolio Preview](https://github.com/Satyam2699/my-portfolio)

## 🚀 Live Demo

**[View Live Portfolio](https://satyam2699.github.io/my-portfolio/)**

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional UI with smooth animations
- Responsive design that works on all devices
- Dark/Light mode toggle with system preference detection
- Modern gradient effects and micro-interactions

### 🛠 **Technical Features**
- **React 18** with functional components and hooks
- **React Router** for seamless navigation
- **Tailwind CSS** for responsive styling
- **EmailJS** integration for contact form
- **Vite** for fast development and optimized builds
- **GitHub Pages** deployment ready

### 📱 **Responsive Sections**
- **Home**: Hero section with typewriter effect
- **About**: Skills showcase with interactive progress bars
- **Projects**: Portfolio showcase with live demos
- **Contact**: Functional contact form with validation

## 🛠 Technologies Used

### **Frontend**
- **React 18.2.0** - Modern UI library
- **React Router DOM 6.26.1** - Client-side routing
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### **Additional Libraries**
- **React Icons 5.3.0** - Professional icon library
- **EmailJS 4.4.1** - Contact form functionality
- **JavaScript ES6+** - Modern JavaScript features

### **Tools & Deployment**
- **Git & GitHub** - Version control
- **GitHub Pages** - Hosting platform
- **VS Code** - Development environment

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### **Installation**

1. **Clone the repository:**
   git clone https://github.com/Satyam2699/my-portfolio.git
   cd portfolio-name

2. **Install dependencies:**
npm install

3. **Start development server:**
npm run dev


### **Available Scripts**

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run deploy # Deploy to GitHub Pages


## ⚙️ Configuration

### **EmailJS Setup**

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail recommended)
3. Create email template
4. Update `src/utils/emailService.js`:

const EMAIL_CONFIG = {
serviceId: 'your_service_id',
templateId: 'your_template_id',
publicKey: 'your_public_key'
};


### **Personalization**

Update the following files with your information:

- **Personal Info**: Update all components with your details
- **Projects**: Replace project data in `src/data/projects.js`
- **Skills**: Update skills in `src/data/skills.js`
- **Images**: Add your profile photo and project screenshots

### **Styling Customization**

Modify `tailwind.config.js` for custom themes:

theme: {
extend: {
colors: {
primary: {
500: '#your-primary-color',
600: '#your-darker-shade',
}
}
}
}

## 📊 Performance Features

- **Fast Loading**: Optimized bundle sizes with Vite
- **Responsive Design**: Mobile-first approach
- **SEO Ready**: Proper meta tags and structure
- **Accessibility**: ARIA labels and semantic HTML
- **Browser Support**: Modern browsers (ES6+)

## 🔧 Development Features

- **Hot Module Replacement**: Instant updates during development
- **Error Boundaries**: Graceful error handling
- **Code Splitting**: Optimized loading
- **TypeScript Ready**: Easy migration path

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Your Name**  
Frontend Developer

- **Email**: stymvih88@gmail.com
- **LinkedIn**: (www.linkedin.com/in/satyam-vishwakarma-6023781a4)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **EmailJS** for contact form functionality

---

### 🌟 Show your support

Give a ⭐️ if you like this project and found it helpful!

---

**Built with ❤️ by [Satyam_vishwakarma] | Frontend Developer**
