import { useState, useEffect } from "react";
import image1 from "../assets/b.jpeg";
import image2 from "../assets/2.webp";
import image3 from "../assets/2.webp";
import image4 from "../assets/2.webp";

function CTA() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ marginTop: "60px", textAlign: "center", marginBottom: "60px" }}
    >
      <h2
        className="text-4xl font-bold text-black mb-4"
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        กระบวนการทำงาน
        <span
          style={{
            position: "absolute",
            bottom: "-5px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "5%",
            height: "2px",
            backgroundColor: "orange",
            transition: "width 0.3s ease-in-out",
          }}
        ></span>
      </h2>
      <p style={{ marginBottom: "30px" }}>
        เราเริ่มต้นด้วยการวิเคราะห์ความต้องการของลูกค้า
        วางแผนและออกแบบอย่างละเอียด ดำเนินงานตามขั้นตอนที่กำหนด
        พร้อมตรวจสอบคุณภาพในทุกขั้นตอน
      </p>

      <div style={isMobile ? styles.containerMobile : styles.container}>
        {/* แถวที่ 1 */}
        <div style={styles.gridItem}>
          <img src={image1} alt="ออกแบบก่อนก่อสร้าง" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h3 style={styles.title}>การสำรวจและวิเคราะห์พื้นที่</h3>
          <p style={styles.description}>
            ทีมงานจะทำการสำรวจพื้นที่หน้างาน
            เพื่อประเมินสภาพแวดล้อมและทำความเข้าใจข้อกำหนดของลูกค้า
            รวมถึงการวิเคราะห์ความเหมาะสมของตำแหน่งติดตั้งโซล่าร์เซลล์
            การวัดแสงแดด และสภาพอาคาร
          </p>
        </div>
        <div style={styles.gridItem}>
          <img
            src={image2}
            alt="ออกแบบและประมาณการการก่อสร้าง"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={styles.title}>การออกแบบระบบโซล่าร์เซลล์</h3>
          <p style={styles.description}>
            ทีมวิศวกรจะทำการออกแบบระบบให้สอดคล้องกับพื้นที่และความต้องการพลังงานของลูกค้า
            โดยคำนึงถึงประสิทธิภาพและความปลอดภัย ทั้งการเลือกอุปกรณ์
            ความลาดเอียงของแผง
            และการจัดวางที่เหมาะสมเพื่อให้ได้ประสิทธิภาพสูงสุด
          </p>
        </div>

        {/* แถวที่ 2 (สลับตำแหน่งภาพกับข้อความตามขนาดจอ) */}
        {isMobile ? (
          <>
            <div style={styles.gridItem}>
              <img
                src={image4}
                alt="ตกแต่งเก็บรายละเอียดงาน"
                style={styles.image}
              />
            </div>
            <div style={styles.textContainer}>
              <h3 style={styles.title}>การจัดทำข้อเสนอและประเมินราคา</h3>
              <p style={styles.description}>
                จัดทำข้อเสนอที่ครอบคลุมรายละเอียดการติดตั้ง อุปกรณ์ที่ใช้
                รวมถึงค่าใช้จ่ายทั้งหมดให้ลูกค้าพิจารณา
                ทีมงานจะให้คำแนะนำเพิ่มเติมหากมีการปรับเปลี่ยนเพื่อเพิ่มประสิทธิภาพหรือควบคุมต้นทุน
              </p>
            </div>
            <div style={{ ...styles.gridItem, ...styles.gridItemReverse }}>
              <img
                src={image3}
                alt="บริการให้คำปรึกษาถึงที่"
                style={styles.image}
              />
            </div>
            <div style={styles.textContainer}>
              <h3 style={styles.title}>การติดตั้งระบบโซล่าร์เซลล์</h3>
              <p style={styles.description}>
                ดำเนินการติดตั้งโซล่าร์เซลล์ตามแผนที่ออกแบบ
                โดยทีมผู้เชี่ยวชาญที่มีประสบการณ์
                ซึ่งครอบคลุมการติดตั้งแผงโซล่าร์ อินเวอร์เตอร์ ระบบสายไฟ
                และการเชื่อมต่อเข้ากับระบบไฟฟ้าภายในบ้านหรืออาคาร
              </p>
            </div>
          </>
        ) : (
          <>
            <div style={styles.textContainer}>
              <h3 style={styles.title}>การจัดทำข้อเสนอและประเมินราคา</h3>
              <p style={styles.description}>
                จัดทำข้อเสนอที่ครอบคลุมรายละเอียดการติดตั้ง อุปกรณ์ที่ใช้
                รวมถึงค่าใช้จ่ายทั้งหมดให้ลูกค้าพิจารณา
                ทีมงานจะให้คำแนะนำเพิ่มเติมหากมีการปรับเปลี่ยนเพื่อเพิ่มประสิทธิภาพหรือควบคุมต้นทุน
              </p>
            </div>
            <div style={styles.gridItem}>
              <img
                src={image4}
                alt="ตกแต่งเก็บรายละเอียดงาน"
                style={styles.image}
              />
            </div>
            <div style={styles.textContainer}>
              <h3 style={styles.title}>การติดตั้งระบบโซล่าร์เซลล์</h3>
              <p style={styles.description}>
                ดำเนินการติดตั้งโซล่าร์เซลล์ตามแผนที่ออกแบบ
                โดยทีมผู้เชี่ยวชาญที่มีประสบการณ์
                ซึ่งครอบคลุมการติดตั้งแผงโซล่าร์ อินเวอร์เตอร์ ระบบสายไฟ
                และการเชื่อมต่อเข้ากับระบบไฟฟ้าภายในบ้านหรืออาคาร
              </p>
            </div>
            <div style={{ ...styles.gridItem, ...styles.gridItemReverse }}>
              <img
                src={image3}
                alt="บริการให้คำปรึกษาถึงที่"
                style={styles.image}
              />
            </div>
          </>
        )}

        {/* แถวที่ 3 */}
        <div style={styles.gridItem}>
          <img src={image1} alt="ออกแบบก่อนก่อสร้าง" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h3 style={styles.title}>การทดสอบและตรวจสอบระบบ</h3>
          <p style={styles.description}>
            ทดสอบระบบทั้งหมดหลังการติดตั้งเสร็จสิ้นเพื่อให้มั่นใจว่าทำงานได้อย่างเต็มประสิทธิภาพ
            ตรวจสอบการผลิตไฟฟ้า ความปลอดภัยของการเชื่อมต่อ
            และประสิทธิภาพการทำงานของอุปกรณ์
          </p>
        </div>
        <div style={styles.gridItem}>
          <img
            src={image2}
            alt="ออกแบบและประมาณการการก่อสร้าง"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={styles.title}>การส่งมอบงานและบริการหลังการขาย</h3>
          <p style={styles.description}>
            ส่งมอบงานพร้อมแนะนำวิธีการดูแลรักษาระบบให้กับลูกค้า
            พร้อมทั้งบริการติดตามผลและการบำรุงรักษาระบบในระยะยาว
            รวมถึงการให้คำแนะนำเพิ่มเติมหากต้องการขยายหรือปรับปรุงระบบในอนาคต
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  containerMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
  },
  gridItem: {
    backgroundColor: "#f4f4f4",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "300px",
  },
  textContainer: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "1.2em",
    color: "#333",
    fontWeight: "bold",
  },
  description: {
    color: "#666",
    fontSize: "0.9em",
    lineHeight: "1.5",
  },
};

export default CTA;
