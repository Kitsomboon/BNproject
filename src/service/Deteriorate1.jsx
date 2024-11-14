import image1 from "/src/assets/thapkhlo4.jpg";
import image2 from "/src/assets/thapkhlo3.jpg";
import image3 from "/src/assets/thapkhlo4.jpg";
import image4 from "/src/assets/thapkhlo4.jpg";
import image5 from "/src/assets/thapkhlo3.jpg";
import image6 from "/src/assets/thapkhlo3.jpg";
import image7 from "/src/assets/thapkhlo3.jpg";
import image8 from "/src/assets/thapkhlo4.jpg";
import image9 from "/src/assets/thapkhlo3.jpg";
import './Deteriorate1.css'; // เปลี่ยนเป็น maintain.css

function maintain1() {
  const stepTitles = [
    "ประเมินสภาพแผงโซล่าร์เซลล์",
    "วางแผนการกำจัด",
    "ตัดการเชื่อมต่อแผง",
    "ถอดแผงออกจากโครงสร้าง",
    "คัดแยกวัสดุที่รีไซเคิลได้",
    "จัดเก็บชิ้นส่วนที่เป็นพิษอย่างเหมาะสม",
    "ขนส่งไปยังสถานที่กำจัดขยะหรือรีไซเคิล",
    "รีไซเคิลวัสดุที่สามารถนำกลับมาใช้ใหม่",
    "บันทึกและรายงานการกำจัด",
  ];

  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
  ];

  return (
    <div style={styles.container}>
      <div className="grid">
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image} alt={`Step ${index + 1}`} style={styles.image} />
            <div style={styles.overlay}>
              <span style={styles.text}>{stepTitles[index]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    height: '500px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
  },
};

export default maintain1;
