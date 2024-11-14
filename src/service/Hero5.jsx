import image1 from "/src/assets/lalar1.jpg";
import image2 from "/src/assets/lalar1.jpg";
import image3 from "/src/assets/lalar1.jpg";

function Hero5() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div style={styles.container}>
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        style={{
          position: "relative",
        }}
      >
        บริการของเรา
        <span
          style={{
            content: '""',
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
      <p style={styles.subheading}>มาให้เราช่วยทำฝันของคุณให้เป็นจริง</p>

      <div style={styles.serviceSection}>
        <div onClick={() => handleNavigation("/design")} style={styles.serviceItem}>
          <img src={image1} alt="ห้องครัว" style={styles.image} />
          <h3 style={styles.title}>ออกแบบและติดตั้ง</h3>
          <p style={styles.description}>
            อธิบายรูปภาพของคุณที่นี่ ใช้ข้อความสะดุดตาเพื่อบอกเล่าเรื่องราวเบื้องหลังรูปภาพ ไปที่ “จัดการเนื้อหา” เพื่อเพิ่มเนื้อหา
          </p>
        </div>
        
        <div onClick={() => handleNavigation("/maintain")} style={styles.serviceItem}>
          <img src={image2} alt="ห้องน้ำ" style={styles.image} />
          <h3 style={styles.title}>บำรุงรักษาประสิทธิภาพระบบโซล่าร์เซลล์</h3>
          <p style={styles.description}>
            อธิบายรูปภาพของคุณที่นี่ ใช้ข้อความสะดุดตาเพื่อบอกเล่าเรื่องราวเบื้องหลังรูปภาพ ไปที่ “จัดการเนื้อหา” เพื่อเพิ่มเนื้อหา
          </p>
        </div>
        
        <div onClick={() => handleNavigation("/deteriorate")} style={styles.serviceItem}>
          <img src={image3} alt="ตกแต่งภายใน" style={styles.image} />
          <h3 style={styles.title}>กำจัดแผงโซล่าร์เซลล์ที่เสื่อมสภาพ</h3>
          <p style={styles.description}>
            อธิบายรูปภาพของคุณที่นี่ ใช้ข้อความสะดุดตาเพื่อบอกเล่าเรื่องราวเบื้องหลังรูปภาพ ไปที่ “จัดการเนื้อหา” เพื่อเพิ่มเนื้อหา
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1em',
    color: '#666',
  },
  serviceSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceItem: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '500px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: '20px 0 10px',
    color: '#333',
  },
  description: {
    fontSize: '0.9em',
    color: '#666',
    padding: '0 15px 20px',
  },
};

const mobileStyles = `
  @media (max-width: 768px) {
    .serviceSection {
      flex-direction: column;
    }
    .serviceItem {
      width: 100%;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);

export default Hero5;
