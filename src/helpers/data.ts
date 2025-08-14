import nestImg from 'assets/project/nestjs.png';
import nextjsImg from 'assets/project/nextjs.jpeg';
import reactNativeImg from 'assets/project/react-native.png';
import nodejsImg from 'assets/project/nodejs.png'
import reactUltimateImg from 'assets/project/react-ultimate.png';
import springMvcImg from 'assets/project/spring-mvc.png';
import springRestImg from 'assets/project/spring-rest.png';

export const APP_DATA = {
    GITHUB_URL: "https://github.com/dung11122005",
    LINKEDIN_URL: "https://www.linkedin.com/in/ho%C3%A0ng-t%E1%BA%A5n-d%C5%A9ng-7049b32a1/",
    FACEBOOK_URL: "https://www.facebook.com/cotem.khong.90?locale=vi_VN"
}

export const EDUCATION = [
    {
        id:1,
        title: {
            vi: "CÔNG NGHỆ THÔNG TIN",
            en: "INFORMATION TECHNOLOGY"
        },
        university: {
            vi: "TRƯỜNG ĐẠI HỌC SƯ PHẠM THÀNH PHỐ HỒ CHÍ MINH (HCMUE)",
            en: "HO CHI MINH CITY UNIVERSITY OF EDUCATION (HCMUE)"
        },
        duration: {
            vi: "2023 - 2027",
            en: "2023 - 2027"
        }
    }
]

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "HỆ THỐNG QUẢN LÝ HỌC TẬP VÀ THI TRỰC TUYẾN",
            en: "ONLINE LEARNING AND EXAM MANAGEMENT SYSTEM"
        },
        company: {
            vi: "JAVA SPRING",
            en: "JAVA SPRING"
        },
        duration: {
            vi: "1/7/2025 - 27/8/2025",
            en: "1/7/2025 - 27/8/2025"
        }
    },
    {
        id: 2,
        title: {
            vi: "TÌM KIẾM VIỆC LÀM",
            en: "JOB HUNTER"
        },

        company: {
            vi: "JAVA SPRING",
            en: "JAVA SPRING"
        },
        duration: {
            vi: "1/10/2024 - 1/2/2025",
            en: "1/10/2024 - 1/2/2025"
        }
    },
    {
        id: 3,
        title: {
            vi: "CHATBOT HỎI ĐÁP LUẬT GIAO THÔNG (NGHIÊN CỨU KHOA HỌC)",
            en: "CHATBOT QUESTIONS AND ANSWERS ON TRAFFIC LAWS (SCIENTIFIC RESEARCH)"
        },
        company: {
            vi: "Node js",
            en: "Node js"
        },
        duration: {
            vi: "1/10/2024 - 1/4/2025",
            en: "1/10/2024 - 1/4/2025"
        }
    }
]

export const PROJECTS = [
    {
        id: 1,
        imgPath: springMvcImg,
        title: {
            vi: "HỆ THỐNG QUẢN LÝ HỌC TẬP VÀ THI TRỰC TUYẾN",
            en:"ONLINE LEARNING AND EXAM MANAGEMENT SYSTEM"
        },
        description:{
            vi:"Em phát triển web theo kiến trúc MVC, Spring Boot và Thymeleaf (SSR), MySQL. Đăng ký, đăng nhập (đăng nhập Google) và phân quyền theo vai trò. CRUD cho người dùng, khóa học, lớp học, bài kiểm tra và kỳ thi. Giáo viên tạo bài kiểm tra, gán cho lớp học và gửi email hàng loạt cho học sinh. Học sinh làm bài kiểm tra, xem điểm, tham gia các khóa học. khóa học trả phí hỗ trợ thanh toán qua cổng MoMo. Tích hợp AI để luyện viết câu tiếng anh. Theo dõi nhật ký hoạt động hệ thống. Sử dụng Spring Security để xác thực và phân quyền, phân trang dữ liệu và xử lý phản hồi email.",
            en:"I develop websites using MVC architecture, Spring Boot and Thymeleaf (SSR), MySQL. Registration, login (Google login) and role-based authorization. CRUD for users, courses, classes, tests and exams. Teachers create tests, assign them to classes and send mass emails to students. Students take tests, view scores, participate in courses. Paid courses support payment via MoMo gateway. Integrate AI to practice writing English sentences. Monitor system activity logs. Use Spring Security for authentication and authorization, data pagination and email response handling."
        },
        githubLink: "https://github.com/dung11122005/JAVA-SPRING-MVC-EXAM.git",
        demoLink: "https://java-spring-mvc-exam.onrender.com"
    },
    {
        id: 2,
        imgPath: springRestImg,
        title: {
            vi: "TÌM KIẾM VIỆC LÀM",
            en: "JOB HUNTER"
        },
        description: {
            vi: "Em phát triển web theo kiến trúc MVC, backend Java Spring Boot với Spring Security, JPA. Hệ thống RESTful API được bảo mật bằng JWT, sử dụng MySQL và hỗ trợ phân trang. Triển khai phân quyền theo role & permission, mỗi permission gắn với một API cụ thể. Toàn bộ luồng nghiệp vụ từ đăng ký, đăng nhập, tìm việc theo kỹ năng/địa điểm, ứng tuyển, theo dõi lịch sử, và nhận email việc làm. Admin có toàn quyền quản trị với phân quyền rõ ràng.",
            en: "I develop websites using MVC architecture, Java Spring Boot backend with Spring Security, JPA. RESTful API system is secured by JWT, uses MySQL and supports pagination. Implements role & permission delegation, each permission is associated with a specific API. The entire business flow from registration, login, job search by skill/location, application, history tracking, and receiving job emails. Admin has full administrative rights with clear delegation."
        },
        githubLink: "https://github.com/dung11122005/JAVA-SPRING-REST?tab=readme-ov-file#-%E1%BA%A3nh-ch%E1%BB%A5p-d%E1%BB%B1-%C3%A1n",
        demoLink: ""
    },
    {
        id: 3,
        imgPath: nodejsImg,
        title: {
            vi: "CHATBOT HỎI ĐÁP LUẬT GIAO THÔNG (NGHIÊN CỨU KHOA HỌC)",
            en: "CHATBOT QUESTIONS AND ANSWERS ON TRAFFIC LAWS (SCIENTIFIC RESEARCH)"
        },
        description: {
            vi: "Em phát triển chatbot trả lời câu hỏi luật giao thông theo kiến trúc SSR với Node.js (Express), dùng EJS và mô hình MVC. Em kết nối MySQL qua Sequelize, triển khai NLP với Wit.ai để hiểu câu hỏi người dùng. Hệ thống chạy trên Render, lưu trữ dữ liệu bằng Supabase. CRUD cho câu hỏi và tích hợp chatbot với Facebook Messenger để tự động phản hồi theo nội dung đã huấn luyện.",
            en: "I developed a chatbot to answer traffic law questions using SSR architecture with Node.js (Express), using EJS and MVC model. I connected MySQL via Sequelize, implemented NLP with Wit.ai to understand user questions. The system runs on Render, stores data using Supabase. CRUD for questions and integrate the chatbot with Facebook Messenger to automatically respond according to the trained content."
        },
        githubLink: "https://github.com/dung11122005/CHAT_BOT?tab=readme-ov-file#-%E1%BA%A3nh-ch%E1%BB%A5p-d%E1%BB%B1-%C3%A1n",
        demoLink: ""
    }
]

export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Tailwind',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'AWS',
    'Bootstrap',
    'Docker',
    'Go',
    'Figma',
    'Firebase',
    'MaterialUI',
    'Nginx',
    'Strapi'
  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */