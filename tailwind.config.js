/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ระบุ path ที่ถูกต้องของไฟล์ที่ Tailwind จะสแกน
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', 'sans-serif'], // ฟอนต์ที่ใช้ในโปรเจกต์
      },
      colors: {
        customPurple: "#6c34af", // เพิ่มสี custom ตามที่ใช้ใน bg ของ Carousel
        customBlue: "#1d4ed8", // เพิ่มสีตามการใช้งานอื่น
        customBlueHover: "#2563eb", // ใช้ใน hover
      },
      height: {
        900: "900px", // เพิ่มความสูงแบบกำหนดเอง (เช่นที่ใช้ใน h-[900px])
      },
    },
  },
  plugins: [],
};
