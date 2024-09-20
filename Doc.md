## Folder Structure
├── api/ 
│   └── faq.json 
├── node_modules
├── public
├── src/
│   ├── assets/
│   │   ├── frontpage
│   │   ├── homepage
│   │   ├── templates/
│   │   │   ├── alison
│   │   │   ├── bliss
│   │   │   ├── charm
│   │   │   ├── charm2
│   │   │   ├── enchant
│   │   │   ├── evermore
│   │   │   ├── preview
│   │   │   └── sorliene
│   │   ├── testimonial
│   │   └── ...images
│   ├── components/
│   │   ├── buttons
│   │   ├── cards
│   │   └── createtemplateform
│   ├── hooks
│   ├── layouts/
│   │   ├── modal
│   │   ├── table
│   │   └── ...layouts.jsx
│   ├── pages/
│   │   ├── dashboard
│   │   ├── templateundangan
│   │   └── ...pages.jsx
│   └── utils
└── .env_example

### BUAT UNDANGAN VALIDATION RULES & LOGIC
Konteks:
Saya buat kodingannya se-modular mungkin supaya lebih mudah di debuggging. Disini ada beberapa hal yang di combine.
1. Parent filenya ada di pages/templateundangan/"BuatUndangan.jsx"
2. Validasi pake Formik & Yup
3. Validation rulenya ada di folder utils/validation.js
4. Input list (pertanyaannya) ada di components/createtemplateform/"FormInputs.js"
5. Logic button & komponen buttonnya ada di components/createtemplateform/"NavigationButton.jsx"
6. Komponen status untuk current step ada di components/createtemplateform/"StepProgressForm"

### PAGES
Disini kurang lebih ada 5 halaman utama. File utama dari halaman yang ada di dalam folder dinamai "index.jsx". Sisanya adalah halaman yang terasosiasi dengan halaman folder tersebut.
1. Dashboard (folder)
2. Template Undangan (folder)
3. FAQ
4. Landing Page
5. Profile Page

### LAYOUTS
1. Table
    Berisikan tabel dari Invitation List dan Reservation List
2. Modal
    Berisikan seluruh modal yang ada di web ini
    a. Auth
    b. Invitation List

### HOOKS
Digunakan sebagai komponen global untuk:
1. useModal -> membuat modal
2. usePasswordToggle -> membuat hide unhide password input

### COMPONENTS
Berisikan komponen global yang digunakan sebagai acuan default website.
1. Card/Kontainer -> semua komponen card
2. Buttons -> terdapat 3 button utama yang akan selalu digunakan
3. CreateTemplateform -> Komponen yang dibutuhkan untuk halaman "BuatUndangan.jsx", termasuk GmapInput
4. GmapInput -> File untuk menampung API Google