<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />

# 🩸 BloodLink — LifeStream Platform

**منصة التبرع بالدم الذكية | Smart Blood Donation Platform**

> *Connecting donors, medical professionals, and communities to save lives.*

[![MIT License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Contributors](https://img.shields.io/badge/Contributors-6-blue.svg)](#-team)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
  - [Frontend Structure](#frontend-structure)
  - [Backend Structure](#backend-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Pages](#-available-pages)
- [Design System](#-design-system)
- [API Overview](#-api-overview)
- [Git Workflow](#-git-workflow-for-the-team)
- [License](#-license)

---

## 🩺 About the Project

**BloodLink (LifeStream)** is a full-stack web platform that bridges the gap between blood donors and medical facilities. It provides real-time blood inventory management, emergency alert systems, donor scheduling, and medical eligibility screening — all under one roof.

The platform serves **three core personas**:
- 🧑‍🤝‍🧑 **Donors** — easy registration, scheduling, and tracking of their donation journey
- 🏥 **Medical Staff** — eligibility assessment, inventory management, and health data tools
- 📣 **Community Organizers** — blood drive creation, emergency alerts, and impact analytics

---

## ✨ Key Features

- 🔐 Multi-step account creation & secure authentication
- 📅 Donation scheduling with slot selection
- 🩸 Blood type eligibility & medical screening
- 🚨 Emergency alert creation with AI-powered prediction
- 📊 Donor dashboard with donation history & stats
- 🏪 Blood inventory management (admin panel)
- 🌍 Impact Hub — community analytics & leaderboards
- 💬 Support center for donors and medical teams

---

## 🛠 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, Bootstrap 5, React Router |
| Backend   | Node.js, Express.js                 |
| Database  | MongoDB (Mongoose ODM)              |
| Auth      | JWT (JSON Web Tokens)               |
| API       | RESTful API                         |
| Dev Tools | ESLint, Prettier, Nodemon           |

---

## 📁 Project Structure

The repository is a **monorepo** with two main folders: `client/` for the frontend and `server/` for the backend.

```
bloodlink/
├── client/                        # ⚛️  React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                # Images, icons, fonts
│   │   ├── components/            # Shared reusable components
│   │   │   ├── common/            # Button, Input, Card, Badge, Modal
│   │   │   ├── layout/            # Navbar, Sidebar, Footer
│   │   │   └── forms/             # Reusable form parts
│   │   ├── pages/                 # One folder per page/screen
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── ResetPassword.jsx
│   │   │   │   ├── CreateAccountStep1.jsx
│   │   │   │   ├── CreateAccountStep2.jsx
│   │   │   │   └── CreateAccountStep3.jsx
│   │   │   ├── donor/
│   │   │   │   ├── DonorDashboard.jsx
│   │   │   │   ├── ScheduleDonation.jsx
│   │   │   │   └── MedicalScreening.jsx
│   │   │   ├── admin/
│   │   │   │   ├── InventoryManagement.jsx
│   │   │   │   ├── EligibilityAdmin.jsx
│   │   │   │   └── EmergencyAlertCreator.jsx
│   │   │   ├── community/
│   │   │   │   ├── ImpactHub.jsx
│   │   │   │   └── EmergencyAlertResponse.jsx
│   │   │   ├── support/
│   │   │   │   └── SupportCenter.jsx
│   │   │   └── settings/
│   │   │       └── AccountSettings.jsx
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── context/               # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── services/              # API calls (axios)
│   │   │   ├── authService.js
│   │   │   ├── donorService.js
│   │   │   ├── inventoryService.js
│   │   │   └── alertService.js
│   │   ├── utils/                 # Helper functions
│   │   │   └── formatDate.js
│   │   ├── styles/                # Global CSS / Bootstrap overrides
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx             # All route definitions
│   ├── .env.example
│   └── package.json
│
├── server/                        # 🟢  Node.js Backend
│   ├── config/
│   │   ├── db.js                  # MongoDB connection
│   │   └── env.js                 # Environment config
│   ├── controllers/               # Route handler logic
│   │   ├── authController.js
│   │   ├── donorController.js
│   │   ├── inventoryController.js
│   │   ├── alertController.js
│   │   └── adminController.js
│   ├── models/                    # Mongoose schemas
│   │   ├── User.js
│   │   ├── Donation.js
│   │   ├── BloodInventory.js
│   │   ├── Alert.js
│   │   └── Appointment.js
│   ├── routes/                    # Express route files
│   │   ├── authRoutes.js
│   │   ├── donorRoutes.js
│   │   ├── inventoryRoutes.js
│   │   ├── alertRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js      # JWT verification
│   │   ├── roleMiddleware.js      # Admin / donor role guard
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── sendEmail.js
│   ├── .env.example
│   ├── server.js                  # App entry point
│   └── package.json
│
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── CONTRIBUTING.md
└── README.md
```

---

### Frontend Structure

| Folder | الغرض |
|--------|--------|
| `pages/` | كل صفحة في الموقع ليها فولدر خاص بيها |
| `components/` | أي component بتتكرر في أكتر من صفحة اتحطت هنا |
| `services/` | كل الـ API calls بتتعمل من هنا بس (مش من الـ pages مباشرة) |
| `context/` | حالة الـ user المتسجل (Auth state) متشاركة عبر كل التطبيق |
| `hooks/` | Custom hooks زي `useAuth` بتستخدمها في أي component |
| `styles/` | متغيرات الألوان والـ CSS الـ global بتاعة LifeStream |

### Backend Structure

| Folder | الغرض |
|--------|--------|
| `models/` | شكل البيانات في MongoDB |
| `controllers/` | المنطق الفعلي لكل endpoint |
| `routes/` | بس بيوصل الـ URL بالـ controller |
| `middleware/` | بيشتغل قبل الـ controller (التوثيق، الصلاحيات، الـ errors) |
| `config/` | إعدادات الـ database والـ environment |

---

## 🚀 Getting Started

### Prerequisites

تأكد إن عندك الآتي مثبت:

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) v9+ أو [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local أو Atlas cloud)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-org/bloodlink.git
cd bloodlink

# 2. Install frontend dependencies
cd client
npm install

# 3. Install backend dependencies
cd ../server
npm install
```

### Environment Variables

**Frontend** — اعمل ملف `client/.env` من `client/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

**Backend** — اعمل ملف `server/.env` من `server/.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bloodlink
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_user
EMAIL_PASS=your_pass
```

### Running the App

```bash
# شغّل الـ backend (من فولدر server/)
cd server
npm run dev

# شغّل الـ frontend (من فولدر client/) — terminal تاني
cd client
npm run dev
```

الفرونت بيشتغل على `http://localhost:5173`  
الباك بيشتغل على `http://localhost:5000`

---

## 📄 Available Pages

| Page | Route | Access |
|------|-------|--------|
| Login | `/login` | Public |
| Create Account (3 steps) | `/register` | Public |
| Reset Password | `/reset-password` | Public |
| Donor Dashboard | `/dashboard` | Donor |
| Schedule Donation | `/schedule` | Donor |
| Medical Screening | `/screening` | Donor |
| Account Settings | `/settings` | Donor |
| Impact Hub | `/impact` | Public |
| Emergency Alert Response | `/alerts` | Public |
| Support Center | `/support` | Donor |
| Inventory Management | `/admin/inventory` | Admin |
| Eligibility Admin | `/admin/eligibility` | Admin |
| Emergency Alert Creator | `/admin/alerts/create` | Admin |

---

## 🎨 Design System

BloodLink يستخدم نظام تصميم **LifeStream** المبني على مبدأ **"Urgent Calm"** — الحيوية الطارئة مع الهدوء المطمئن.

| Token | Value | الاستخدام |
|-------|-------|-----------|
| `primary` (Life Red) | `#D32F2F` | CTA buttons, branding, alerts |
| `secondary` (Blue) | `#1976D2` | Links, info, secondary actions |
| `success` (Green) | `#388E3C` | Eligibility confirmed, milestones |
| `neutral-bg` | `#F5F5F5` | Page backgrounds |
| Font - Headlines | Manrope 600-700 | All headings |
| Font - Body | Inter 400 | Body text, labels, data |
| Base Spacing | 8px | All margins/padding multiply of 8 |
| Border Radius | 8px / 16px | Buttons / Cards |

---

## 🔌 API Overview

Base URL: `http://localhost:5000/api`

```
POST   /api/auth/register       → تسجيل مستخدم جديد
POST   /api/auth/login          → تسجيل الدخول
POST   /api/auth/reset-password → إعادة تعيين كلمة المرور

GET    /api/donors/dashboard    → بيانات الداشبورد
POST   /api/donors/schedule     → حجز موعد تبرع
GET    /api/donors/history      → سجل التبرعات

GET    /api/inventory           → مخزون الدم الحالي (admin)
PUT    /api/inventory/:id       → تحديث الكميات (admin)

POST   /api/alerts              → إنشاء تنبيه طوارئ (admin)
GET    /api/alerts              → كل التنبيهات النشطة
```

---

## 🌿 Git Workflow (for the Team)

بما إنكم 6 أشخاص، اتبعوا الـ branching strategy دي:

```
main          ← Production only (لا أحد يـ push مباشرة)
  └── develop ← Integration branch (الـ base لكل feature)
        ├── feature/login-page
        ├── feature/donor-dashboard
        ├── feature/inventory-admin
        ├── fix/schedule-bug
        └── ...
```

### خطوات شغل الـ feature جديدة:

```bash
# 1. تأكد إنك على develop وعمّلته update
git checkout develop
git pull origin develop

# 2. اعمل branch جديد
git checkout -b feature/your-feature-name

# 3. اشتغل وعمل commits صغيرة وواضحة
git add .
git commit -m "feat: add donor scheduling calendar"

# 4. ارفع الـ branch
git push origin feature/your-feature-name

# 5. افتح Pull Request على GitHub من branch بتاعك لـ develop
# وادّي أحد من الفريق يـ review قبل ما تـ merge
```

### Commit Message Convention:

```
feat:     ← feature جديدة
fix:      ← bug fix
style:    ← تغيير CSS فقط
refactor: ← تحسين الكود من غير تغيير وظيفي
docs:     ← تعديل في الـ README أو التوثيق
chore:    ← npm install أو إعدادات
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ and 🩸 to save lives
</div>
